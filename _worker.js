// ============================================================
// Cloudflare Pages Worker - E-Commerce Backend
// D1 (db) + KV (kv) + R2 (r2)
// ============================================================

// --- JWT Helpers ---
const JWT_SECRET = 'cf-store-jwt-secret-change-me';

async function createToken(payload, expiresIn = 86400) {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const now = Math.floor(Date.now() / 1000);
  const body = btoa(JSON.stringify({ ...payload, iat: now, exp: now + expiresIn }));
  const data = `${header}.${body}`;
  const key = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(JWT_SECRET),
    { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(data));
  return `${data}.${btoa(String.fromCharCode(...new Uint8Array(sig))).replace(/=/g, '')}`;
}

async function verifyToken(token) {
  try {
    const [header, body, sig] = token.split('.');
    const data = `${header}.${body}`;
    const key = await crypto.subtle.importKey(
      'raw', new TextEncoder().encode(JWT_SECRET),
      { name: 'HMAC', hash: 'SHA-256' }, false, ['verify']
    );
    const sigBytes = Uint8Array.from(atob(sig.replace(/-/g,'+').replace(/_/g,'/')), c => c.charCodeAt(0));
    const valid = await crypto.subtle.verify('HMAC', key, sigBytes, new TextEncoder().encode(data));
    if (!valid) return null;
    return JSON.parse(atob(body));
  } catch { return null; }
}

// --- Password Hash ---
async function hashPassword(password) {
  const data = new TextEncoder().encode(password + 'cf-store-salt');
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
}

// --- Helpers ---
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
  });
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function generateOrderNo() {
  const now = new Date();
  const ts = now.getFullYear().toString() + String(now.getMonth()+1).padStart(2,'0') +
    String(now.getDate()).padStart(2,'0') + String(now.getHours()).padStart(2,'0') +
    String(now.getMinutes()).padStart(2,'0') + String(now.getSeconds()).padStart(2,'0');
  return 'ORD' + ts + Math.random().toString(36).substring(2, 6).toUpperCase();
}

// --- Auth Middleware ---
async function authenticate(request) {
  const auth = request.headers.get('Authorization');
  if (!auth?.startsWith('Bearer ')) return null;
  return await verifyToken(auth.slice(7));
}

// --- Notification Helpers ---
async function sendTelegramNotification(botToken, chatId, message) {
  if (!botToken || !chatId) return false;
  try {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: 'HTML' })
    });
    return resp.ok;
  } catch { return false; }
}

async function sendEmailNotification(graphToken, fromEmail, toEmail, subject, htmlBody) {
  if (!graphToken || !fromEmail || !toEmail) return false;
  try {
    const url = 'https://graph.microsoft.com/v1.0/users/' + fromEmail + '/sendMail';
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${graphToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: {
          subject: subject,
          body: { contentType: 'HTML', content: htmlBody },
          toRecipients: [{ emailAddress: { address: toEmail } }]
        },
        saveToSentItems: 'false'
      })
    });
    return resp.ok;
  } catch { return false; }
}

async function notifyNewOrder(db, order) {
  try {
    const { results } = await db.prepare("SELECT key, value FROM settings WHERE key IN ('notify_tg_enabled','notify_tg_bot_token','notify_tg_chat_id','notify_email_enabled','notify_ms_graph_token','notify_email_from','notify_email_to')").all();
    const cfg = {};
    results.forEach(r => cfg[r.key] = r.value);

    const items = typeof order.items === 'string' ? JSON.parse(order.items) : order.items;
    const itemLines = items.map(i => `${i.name} x${i.qty} - $${(i.price * i.qty).toFixed(2)}`).join('\n');

    // Telegram notification
    if (cfg.notify_tg_enabled === '1' && cfg.notify_tg_bot_token && cfg.notify_tg_chat_id) {
      const msg = `🛒 <b>新订单通知</b>\n\n` +
        `订单号: <b>${order.order_no}</b>\n` +
        `客户: ${order.customer_name}\n` +
        `邮箱: ${order.customer_email || '-'}\n` +
        `电话: ${order.customer_phone || '-'}\n` +
        `地址: ${order.shipping_address || '-'}\n\n` +
        `商品:\n${itemLines}\n\n` +
        `总计: <b>$${Number(order.total).toFixed(2)}</b>\n` +
        `备注: ${order.notes || '-'}`;
      await sendTelegramNotification(cfg.notify_tg_bot_token, cfg.notify_tg_chat_id, msg);
    }

    // Email notification
    if (cfg.notify_email_enabled === '1' && cfg.notify_ms_graph_token && cfg.notify_email_from && cfg.notify_email_to) {
      const subject = `[新订单] ${order.order_no} - ${order.customer_name}`;
      const htmlBody = `
        <h2>新订单通知</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">订单号</td><td style="padding:8px;border:1px solid #ddd">${order.order_no}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">客户</td><td style="padding:8px;border:1px solid #ddd">${order.customer_name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">邮箱</td><td style="padding:8px;border:1px solid #ddd">${order.customer_email || '-'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">电话</td><td style="padding:8px;border:1px solid #ddd">${order.customer_phone || '-'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">地址</td><td style="padding:8px;border:1px solid #ddd">${order.shipping_address || '-'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">商品</td><td style="padding:8px;border:1px solid #ddd"><pre style="margin:0">${itemLines}</pre></td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">总计</td><td style="padding:8px;border:1px solid #ddd"><b>$${Number(order.total).toFixed(2)}</b></td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">备注</td><td style="padding:8px;border:1px solid #ddd">${order.notes || '-'}</td></tr>
        </table>`;
      await sendEmailNotification(cfg.notify_ms_graph_token, cfg.notify_email_from, cfg.notify_email_to, subject, htmlBody);
    }
  } catch (e) {
    console.error('Notification error:', e);
  }
}

// --- Alipay Face-to-Face Payment Helper ---
function generateAlipayQrCodeUrl(appId, privateKey, orderId, amount, subject, notifyUrl) {
  // In production, this would generate a real Alipay F2F payment QR code
  // For now, return a mock structure that the frontend can display
  const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);
  return {
    out_trade_no: orderId,
    total_amount: amount.toFixed(2),
    subject: subject,
    qr_code: `https://qr.alipay.com/bax_${orderId}`, // Mock QR code URL
    notify_url: notifyUrl || '',
    timestamp: timestamp
  };
}

// --- API Router ---
async function handleAPI(request, env, path) {
  const method = request.method;
  const db = env.db;
  const kv = env.kv;
  const r2 = env.r2;

  // ---- Auth ----
  if (path === '/api/auth/login' && method === 'POST') {
    const { username, password } = await request.json();
    const hash = await hashPassword(password);
    const user = await db.prepare('SELECT * FROM users WHERE username = ? AND password_hash = ?')
      .bind(username, hash).first();
    if (!user) return json({ error: 'Invalid credentials' }, 401);
    const token = await createToken({ id: user.id, username: user.username, role: user.role });
    return json({ token, user: { id: user.id, username: user.username, role: user.role } });
  }

  if (path === '/api/auth/change-password' && method === 'POST') {
    const auth = await authenticate(request);
    if (!auth) return json({ error: 'Unauthorized' }, 401);
    const { oldPassword, newPassword } = await request.json();
    const oldHash = await hashPassword(oldPassword);
    const user = await db.prepare('SELECT * FROM users WHERE id = ? AND password_hash = ?')
      .bind(auth.id, oldHash).first();
    if (!user) return json({ error: 'Wrong old password' }, 400);
    const newHash = await hashPassword(newPassword);
    await db.prepare('UPDATE users SET password_hash = ?, updated_at = datetime("now") WHERE id = ?')
      .bind(newHash, auth.id).run();
    return json({ success: true });
  }

  // ---- Products ----
  if (path === '/api/products' && method === 'GET') {
    const url = new URL(request.url);
    const category = url.searchParams.get('category');
    const status = url.searchParams.get('status') || 'active';
    const featured = url.searchParams.get('featured');
    const limit = parseInt(url.searchParams.get('limit') || '50');
    const offset = parseInt(url.searchParams.get('offset') || '0');
    let query = 'SELECT * FROM products WHERE status = ?';
    const params = [status];
    if (category) { query += ' AND category = ?'; params.push(category); }
    if (featured) { query += ' AND featured = 1'; }
    query += ' ORDER BY sort_order ASC, created_at DESC LIMIT ? OFFSET ?';
    params.push(limit, offset);
    const { results } = await db.prepare(query).bind(...params).all();
    return json({ products: results });
  }

  if (path === '/api/products/all' && method === 'GET') {
    const auth = await authenticate(request);
    if (!auth) return json({ error: 'Unauthorized' }, 401);
    const { results } = await db.prepare('SELECT * FROM products ORDER BY created_at DESC').all();
    return json({ products: results });
  }

  if (path.match(/^\/api\/products\/\d+$/) && method === 'GET') {
    const id = path.split('/').pop();
    const product = await db.prepare('SELECT * FROM products WHERE id = ?').bind(id).first();
    if (!product) return json({ error: 'Not found' }, 404);
    return json({ product });
  }

  if (path === '/api/products' && method === 'POST') {
    const auth = await authenticate(request);
    if (!auth) return json({ error: 'Unauthorized' }, 401);
    const body = await request.json();
    const slug = body.slug || slugify(body.name);
    const result = await db.prepare(
      `INSERT INTO products (name, slug, description, price, compare_price, images, category, stock, status, featured, sort_order)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      body.name, slug, body.description || '', body.price || 0,
      body.compare_price || 0, JSON.stringify(body.images || []),
      body.category || '', body.stock || 0, body.status || 'active',
      body.featured ? 1 : 0, body.sort_order || 0
    ).run();
    return json({ id: result.meta.last_row_id, slug }, 201);
  }

  if (path.match(/^\/api\/products\/\d+$/) && method === 'PUT') {
    const auth = await authenticate(request);
    if (!auth) return json({ error: 'Unauthorized' }, 401);
    const id = path.split('/').pop();
    const body = await request.json();
    await db.prepare(
      `UPDATE products SET name=?, slug=?, description=?, price=?, compare_price=?, images=?, category=?, stock=?, status=?, featured=?, sort_order=?, updated_at=datetime('now') WHERE id=?`
    ).bind(
      body.name, body.slug || slugify(body.name), body.description || '',
      body.price || 0, body.compare_price || 0, JSON.stringify(body.images || []),
      body.category || '', body.stock || 0, body.status || 'active',
      body.featured ? 1 : 0, body.sort_order || 0, id
    ).run();
    return json({ success: true });
  }

  if (path.match(/^\/api\/products\/\d+$/) && method === 'DELETE') {
    const auth = await authenticate(request);
    if (!auth) return json({ error: 'Unauthorized' }, 401);
    const id = path.split('/').pop();
    await db.prepare('DELETE FROM products WHERE id = ?').bind(id).run();
    return json({ success: true });
  }

  // ---- Categories ----
  if (path === '/api/categories' && method === 'GET') {
    const { results } = await db.prepare('SELECT * FROM categories ORDER BY sort_order ASC').all();
    return json({ categories: results });
  }

  if (path === '/api/categories' && method === 'POST') {
    const auth = await authenticate(request);
    if (!auth) return json({ error: 'Unauthorized' }, 401);
    const body = await request.json();
    const slug = body.slug || slugify(body.name);
    const result = await db.prepare(
      'INSERT INTO categories (name, slug, description, image, sort_order) VALUES (?, ?, ?, ?, ?)'
    ).bind(body.name, slug, body.description || '', body.image || '', body.sort_order || 0).run();
    return json({ id: result.meta.last_row_id }, 201);
  }

  if (path.match(/^\/api\/categories\/\d+$/) && method === 'DELETE') {
    const auth = await authenticate(request);
    if (!auth) return json({ error: 'Unauthorized' }, 401);
    const id = path.split('/').pop();
    await db.prepare('DELETE FROM categories WHERE id = ?').bind(id).run();
    return json({ success: true });
  }

  // ---- Orders ----
  if (path === '/api/orders' && method === 'GET') {
    const auth = await authenticate(request);
    if (!auth) return json({ error: 'Unauthorized' }, 401);
    const { results } = await db.prepare('SELECT * FROM orders ORDER BY created_at DESC').all();
    return json({ orders: results });
  }

  if (path === '/api/orders' && method === 'POST') {
    const body = await request.json();
    const orderNo = generateOrderNo();
    const result = await db.prepare(
      `INSERT INTO orders (order_no, customer_name, customer_email, customer_phone, shipping_address, items, total, status, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      orderNo, body.customer_name, body.customer_email || '',
      body.customer_phone || '', body.shipping_address || '',
      JSON.stringify(body.items || []), body.total || 0, 'pending', body.notes || ''
    ).run();

    const orderId = result.meta.last_row_id;
    const order = { id: orderId, order_no: orderNo, ...body };

    // Send notifications asynchronously
    notifyNewOrder(db, { ...order, items: JSON.stringify(body.items || []) });

    return json({ id: orderId, order_no: orderNo }, 201);
  }

  if (path.match(/^\/api\/orders\/\d+$/) && method === 'PUT') {
    const auth = await authenticate(request);
    if (!auth) return json({ error: 'Unauthorized' }, 401);
    const id = path.split('/').pop();
    const body = await request.json();
    await db.prepare(
      `UPDATE orders SET status=?, notes=?, updated_at=datetime('now') WHERE id=?`
    ).bind(body.status, body.notes || '', id).run();
    return json({ success: true });
  }

  if (path.match(/^\/api\/orders\/\d+$/) && method === 'DELETE') {
    const auth = await authenticate(request);
    if (!auth) return json({ error: 'Unauthorized' }, 401);
    const id = path.split('/').pop();
    await db.prepare('DELETE FROM orders WHERE id = ?').bind(id).run();
    return json({ success: true });
  }

  // ---- Payment: Alipay Face-to-Face ----
  if (path === '/api/payment/alipay/create' && method === 'POST') {
    const body = await request.json();
    const { order_no, total, subject } = body;
    if (!order_no || !total) return json({ error: 'Missing order_no or total' }, 400);

    // Get Alipay settings
    const { results } = await db.prepare("SELECT key, value FROM settings WHERE key IN ('alipay_app_id','alipay_private_key','alipay_enabled','alipay_notify_url')").all();
    const cfg = {};
    results.forEach(r => cfg[r.key] = r.value);

    if (cfg.alipay_enabled !== '1') {
      return json({ error: 'Alipay payment is not enabled' }, 400);
    }

    // Auto-detect notify URL from request origin if not explicitly configured
    let notifyUrl = cfg.alipay_notify_url || '';
    if (!notifyUrl) {
      const origin = new URL(request.url).origin;
      notifyUrl = `${origin}/api/payment/alipay/notify`;
    }

    const paymentData = generateAlipayQrCodeUrl(
      cfg.alipay_app_id, cfg.alipay_private_key,
      order_no, parseFloat(total), subject || 'Order Payment',
      notifyUrl
    );

    return json({ success: true, payment: paymentData });
  }

  if (path === '/api/payment/alipay/query' && method === 'GET') {
    const url = new URL(request.url);
    const orderNo = url.searchParams.get('order_no');
    if (!orderNo) return json({ error: 'Missing order_no' }, 400);

    // Mock query - in production, query Alipay API
    const order = await db.prepare('SELECT * FROM orders WHERE order_no = ?').bind(orderNo).first();
    if (!order) return json({ error: 'Order not found' }, 404);

    return json({
      order_no: orderNo,
      trade_status: order.status === 'completed' ? 'TRADE_SUCCESS' : 'WAIT_BUYER_PAY',
      total_amount: order.total.toFixed(2)
    });
  }

  // ---- Test Notification ----
  if (path === '/api/notifications/test' && method === 'POST') {
    const auth = await authenticate(request);
    if (!auth) return json({ error: 'Unauthorized' }, 401);

    const { type } = await request.json(); // 'telegram' or 'email'
    const { results } = await db.prepare("SELECT key, value FROM settings WHERE key IN ('notify_tg_bot_token','notify_tg_chat_id','notify_ms_graph_token','notify_email_from','notify_email_to')").all();
    const cfg = {};
    results.forEach(r => cfg[r.key] = r.value);

    if (type === 'telegram') {
      const ok = await sendTelegramNotification(
        cfg.notify_tg_bot_token, cfg.notify_tg_chat_id,
        '🧪 <b>测试通知</b>\n\n这是一条来自商城系统的测试消息。如果您收到此消息，说明 Telegram 通知已配置成功！'
      );
      return json({ success: ok, message: ok ? 'Telegram test sent' : 'Failed to send' });
    }

    if (type === 'email') {
      const ok = await sendEmailNotification(
        cfg.notify_ms_graph_token, cfg.notify_email_from, cfg.notify_email_to,
        '[测试] 商城通知系统',
        '<h2>测试通知</h2><p>这是一条来自商城系统的测试邮件。如果您收到此邮件，说明邮件通知已配置成功！</p>'
      );
      return json({ success: ok, message: ok ? 'Email test sent' : 'Failed to send' });
    }

    return json({ error: 'Invalid type' }, 400);
  }

  // ---- Pages / Content ----
  if (path === '/api/pages' && method === 'GET') {
    const { results } = await db.prepare("SELECT * FROM pages WHERE status='published' ORDER BY created_at DESC").all();
    return json({ pages: results });
  }

  if (path === '/api/pages/all' && method === 'GET') {
    const auth = await authenticate(request);
    if (!auth) return json({ error: 'Unauthorized' }, 401);
    const { results } = await db.prepare('SELECT * FROM pages ORDER BY created_at DESC').all();
    return json({ pages: results });
  }

  if (path === '/api/pages' && method === 'POST') {
    const auth = await authenticate(request);
    if (!auth) return json({ error: 'Unauthorized' }, 401);
    const body = await request.json();
    const slug = body.slug || slugify(body.title);
    const result = await db.prepare(
      'INSERT INTO pages (title, slug, body, type, status) VALUES (?, ?, ?, ?, ?)'
    ).bind(body.title, slug, body.body || '', body.type || 'page', body.status || 'published').run();
    return json({ id: result.meta.last_row_id }, 201);
  }

  if (path.match(/^\/api\/pages\/\d+$/) && method === 'PUT') {
    const auth = await authenticate(request);
    if (!auth) return json({ error: 'Unauthorized' }, 401);
    const id = path.split('/').pop();
    const body = await request.json();
    await db.prepare(
      `UPDATE pages SET title=?, slug=?, body=?, type=?, status=?, updated_at=datetime('now') WHERE id=?`
    ).bind(body.title, body.slug || slugify(body.title), body.body || '', body.type || 'page', body.status || 'published', id).run();
    return json({ success: true });
  }

  if (path.match(/^\/api\/pages\/\d+$/) && method === 'DELETE') {
    const auth = await authenticate(request);
    if (!auth) return json({ error: 'Unauthorized' }, 401);
    const id = path.split('/').pop();
    await db.prepare('DELETE FROM pages WHERE id = ?').bind(id).run();
    return json({ success: true });
  }

  // ---- Settings ----
  if (path === '/api/settings' && method === 'GET') {
    const { results } = await db.prepare('SELECT * FROM settings').all();
    const settings = {};
    results.forEach(r => settings[r.key] = r.value);
    return json({ settings });
  }

  if (path === '/api/settings' && method === 'PUT') {
    const auth = await authenticate(request);
    if (!auth) return json({ error: 'Unauthorized' }, 401);
    const body = await request.json();
    for (const [key, value] of Object.entries(body)) {
      await db.prepare('INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)').bind(key, value).run();
    }
    return json({ success: true });
  }

  // ---- File Upload (R2 + KV thumbnail) ----
  if (path === '/api/upload' && method === 'POST') {
    const auth = await authenticate(request);
    if (!auth) return json({ error: 'Unauthorized' }, 401);
    const formData = await request.formData();
    const file = formData.get('file');
    if (!file) return json({ error: 'No file' }, 400);

    const ext = file.name.split('.').pop().toLowerCase();
    const allowedExts = ['jpg','jpeg','png','gif','webp','svg','bmp','ico'];
    if (!allowedExts.includes(ext)) return json({ error: 'Invalid file type' }, 400);

    const arrayBuffer = await file.arrayBuffer();
    const timestamp = Date.now();
    const rand = Math.random().toString(36).substring(2, 8);
    const key = `uploads/${timestamp}_${rand}.${ext}`;
    const webpKey = `uploads/${timestamp}_${rand}.webp`;

    await r2.put(key, arrayBuffer, {
      httpMetadata: { contentType: file.type || `image/${ext}` }
    });

    await r2.put(webpKey, arrayBuffer, {
      httpMetadata: { contentType: 'image/webp' }
    });

    const thumbKey = `thumb_${timestamp}_${rand}`;
    await kv.put(thumbKey, JSON.stringify({
      original: key,
      webp: webpKey,
      size: arrayBuffer.byteLength,
      name: file.name,
      uploadedAt: new Date().toISOString()
    }), { expirationTtl: 86400 * 30 });

    const url = `/api/files/${webpKey}`;
    return json({ url, key: webpKey, thumbKey, originalKey: key, size: arrayBuffer.byteLength });
  }

  // ---- Serve files from R2 ----
  if (path.startsWith('/api/files/')) {
    const key = path.replace('/api/files/', '');
    const object = await r2.get(key);
    if (!object) return new Response('Not Found', { status: 404 });
    const headers = new Headers();
    headers.set('Content-Type', object.httpMetadata?.contentType || 'application/octet-stream');
    headers.set('Cache-Control', 'public, max-age=31536000');
    headers.set('Access-Control-Allow-Origin', '*');
    return new Response(object.body, { headers });
  }

  // ---- Dashboard Stats ----
  if (path === '/api/stats' && method === 'GET') {
    const auth = await authenticate(request);
    if (!auth) return json({ error: 'Unauthorized' }, 401);
    const [products, orders, pages] = await Promise.all([
      db.prepare('SELECT COUNT(*) as count FROM products').first(),
      db.prepare('SELECT COUNT(*) as count FROM orders').first(),
      db.prepare('SELECT COUNT(*) as count FROM pages').first(),
    ]);
    const pendingOrders = await db.prepare("SELECT COUNT(*) as count FROM orders WHERE status='pending'").first();
    return json({
      products: products.count,
      orders: orders.count,
      pages: pages.count,
      pendingOrders: pendingOrders.count
    });
  }

  // ---- Init DB (first-time setup) ----
  if (path === '/api/init' && method === 'POST') {
    await db.exec(`
      CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT NOT NULL UNIQUE, password_hash TEXT NOT NULL, role TEXT NOT NULL DEFAULT 'admin', created_at TEXT NOT NULL DEFAULT (datetime('now')), updated_at TEXT NOT NULL DEFAULT (datetime('now')));
      CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, slug TEXT NOT NULL UNIQUE, description TEXT DEFAULT '', price REAL NOT NULL DEFAULT 0, compare_price REAL DEFAULT 0, images TEXT DEFAULT '[]', category TEXT DEFAULT '', stock INTEGER DEFAULT 0, status TEXT DEFAULT 'active', featured INTEGER DEFAULT 0, sort_order INTEGER DEFAULT 0, created_at TEXT NOT NULL DEFAULT (datetime('now')), updated_at TEXT NOT NULL DEFAULT (datetime('now')));
      CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, slug TEXT NOT NULL UNIQUE, description TEXT DEFAULT '', image TEXT DEFAULT '', sort_order INTEGER DEFAULT 0, created_at TEXT NOT NULL DEFAULT (datetime('now')));
      CREATE TABLE IF NOT EXISTS orders (id INTEGER PRIMARY KEY AUTOINCREMENT, order_no TEXT NOT NULL UNIQUE, customer_name TEXT NOT NULL, customer_email TEXT DEFAULT '', customer_phone TEXT DEFAULT '', shipping_address TEXT DEFAULT '', items TEXT DEFAULT '[]', total REAL NOT NULL DEFAULT 0, status TEXT DEFAULT 'pending', notes TEXT DEFAULT '', created_at TEXT NOT NULL DEFAULT (datetime('now')), updated_at TEXT NOT NULL DEFAULT (datetime('now')));
      CREATE TABLE IF NOT EXISTS pages (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, slug TEXT NOT NULL UNIQUE, body TEXT DEFAULT '', type TEXT DEFAULT 'page', status TEXT DEFAULT 'published', created_at TEXT NOT NULL DEFAULT (datetime('now')), updated_at TEXT NOT NULL DEFAULT (datetime('now')));
      CREATE TABLE IF NOT EXISTS settings (key TEXT PRIMARY KEY, value TEXT DEFAULT '');
    `);
    const existing = await db.prepare('SELECT id FROM users WHERE username = ?').bind('admin').first();
    if (existing) return json({ message: 'Already initialized' });

    const hash = await hashPassword('123456');
    await db.prepare('INSERT OR IGNORE INTO users (username, password_hash, role) VALUES (?, ?, ?)').bind('admin', hash, 'admin').run();

    const defaults = {
      site_name: 'My Store',
      site_description: 'Welcome to our store',
      template: 'modern',
      currency: 'USD',
      contact_email: '',
      social_links: '{}',
      site_logo: '',
      site_favicon: '',
      alipay_enabled: '0',
      alipay_app_id: '',
      alipay_private_key: '',
      notify_tg_enabled: '0',
      notify_tg_bot_token: '',
      notify_tg_chat_id: '',
      notify_email_enabled: '0',
      notify_ms_graph_token: '',
      notify_email_from: '',
      notify_email_to: ''
    };
    for (const [k, v] of Object.entries(defaults)) {
      await db.prepare('INSERT OR IGNORE INTO settings (key, value) VALUES (?, ?)').bind(k, v).run();
    }

    return json({ success: true, message: 'Database initialized. Default admin: admin / 123456' });
  }

  return json({ error: 'Not found' }, 404);
}

// --- Static File Serving ---
async function handleStatic(request, env, path) {
  return env.ASSETS.fetch(request);
}

// --- Main Fetch Handler ---
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
      });
    }

    // API routes
    if (path.startsWith('/api/')) {
      try {
        return await handleAPI(request, env, path);
      } catch (e) {
        return json({ error: 'Internal error', detail: e.message }, 500);
      }
    }

    // Admin panel
    if (path.startsWith('/admin')) {
      if (path === '/admin' || path === '/admin/') {
        return env.ASSETS.fetch(new Request(new URL('/public/admin/index.html', request.url)));
      }
      return env.ASSETS.fetch(new Request(new URL('/public' + path, request.url)));
    }

    // Template routing based on settings
    try {
      const settings = await env.db.prepare("SELECT value FROM settings WHERE key='template'").first();
      const template = settings?.value || 'modern';
      const templatePath = `/template-${template}`;

      if (path === '/' || path === '') {
        return env.ASSETS.fetch(new Request(new URL(`/public${templatePath}/index.html`, request.url)));
      }

      let response = await env.ASSETS.fetch(request);
      if (response.status === 404) {
        const newPath = `/public${templatePath}${path}`;
        response = await env.ASSETS.fetch(new Request(new URL(newPath, request.url)));
      }
      return response;
    } catch (e) {
      return new Response(INIT_HTML, {
        headers: { 'Content-Type': 'text/html;charset=UTF-8' }
      });
    }
  }
};

// --- Init Page ---
const INIT_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Setup - Cloudflare Store</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#0f172a;color:#e2e8f0;display:flex;align-items:center;justify-content:center;min-height:100vh}
.card{background:#1e293b;border-radius:16px;padding:48px;max-width:480px;width:90%;text-align:center;box-shadow:0 25px 50px rgba(0,0,0,.5)}
h1{font-size:2rem;margin-bottom:8px;background:linear-gradient(135deg,#6366f1,#8b5cf6);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
p{color:#94a3b8;margin-bottom:24px}
.btn{background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;border:none;padding:14px 32px;border-radius:10px;font-size:1rem;cursor:pointer;transition:.3s}
.btn:hover{transform:translateY(-2px);box-shadow:0 8px 25px rgba(99,102,241,.4)}
.status{margin-top:16px;padding:12px;border-radius:8px;font-size:.9rem;display:none}
.ok{background:#065f4620;color:#6ee7b7;display:block}
.err{background:#7f1d1d20;color:#fca5a5;display:block}
</style>
</head>
<body>
<div class="card">
<h1>🚀 Cloudflare Store</h1>
<p>Click below to initialize the database and create the default admin account.</p>
<button class="btn" onclick="init()" id="btn">Initialize Database</button>
<div class="status" id="status"></div>
</div>
<script>
async function init(){
const btn=document.getElementById('btn');
const status=document.getElementById('status');
btn.disabled=true;btn.textContent='Initializing...';
try{
const r=await fetch('/api/init',{method:'POST'});
const d=await r.json();
if(d.success){status.className='status ok';status.textContent='✅ '+d.message;setTimeout(()=>window.location.reload(),2000)}
else{status.className='status err';status.textContent='❌ '+(d.error||'Failed')}
}catch(e){status.className='status err';status.textContent='❌ '+e.message}
btn.disabled=false;btn.textContent='Initialize Database';
}
</script>
</body>
</html>`;
