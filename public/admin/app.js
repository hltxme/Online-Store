// ============================================================
// Admin Dashboard - App Logic
// ============================================================

const API = '';
let token = localStorage.getItem('admin_token');
let uploadedImages = [];
let tinyMCEInitialized = false;

// --- i18n ---
const adminI18n = {
  zh: {
    // Sidebar & Nav
    store_admin: '商店管理', dashboard: '仪表盘', products: '商品管理', categories: '分类管理',
    orders: '订单管理', pages: '页面管理', settings: '系统设置', payment_settings: '支付设置',
    // Login
    login_title: '管理后台', login_subtitle: '登录管理您的商店',
    username: '用户名', password: '密码', sign_in: '登录', login_failed: '登录失败',
    // Topbar
    logout: '退出登录', view_site: '查看网站',
    // Stats
    total_products: '商品总数', total_orders: '订单总数', total_pages: '页面总数', pending_orders: '待处理订单',
    // Common actions
    save: '保存', cancel: '取消', edit: '编辑', delete: '删除', remove: '移除',
    add_product: '添加商品', edit_product: '编辑商品', add_category: '添加分类', add_page: '添加页面', edit_page: '编辑页面',
    // Table headers
    order_no: '订单号', customer: '客户', total: '总计', status: '状态', date: '日期', actions: '操作',
    name: '名称', price: '价格', stock: '库存', image: '图片', slug: '标识', products_count: '商品数',
    // Form labels
    description: '描述', compare_price: '划线价', category: '分类', featured: '推荐',
    content_html: '内容 (HTML)',
    // Product form
    product_name: '商品名称', product_slug: '商品标识', product_desc: '商品描述',
    product_price: '价格', product_compare: '划线价', product_category: '分类',
    product_stock: '库存', product_status: '状态', product_featured: '是否推荐',
    product_images: '商品图片',
    // Category form
    category_name: '分类名称', category_desc: '分类描述',
    // Page form
    page_title: '页面标题', page_slug: '页面标识', page_content: '内容 (HTML)', page_status: '状态',
    // Settings
    site_settings: '网站设置', change_password: '修改密码',
    site_name: '网站名称', site_description: '网站描述', template: '模板',
    currency: '货币符号', contact_email: '联系邮箱',
    template_modern: '现代风格（简洁）', template_luxury: '奢华风格（典雅）',
    current_password: '当前密码', new_password: '新密码', confirm_password: '确认密码',
    update_password: '更新密码',
    // Payment
    alipay_f2f: '支付宝当面付', enable_alipay: '启用支付宝当面付',
    alipay_app_id: '支付宝 App ID', alipay_private_key: '应用私钥',
    alipay_public_key: '支付宝公钥（可选）', alipay_notify_url: '支付回调通知地址',
    alipay_notify_hint: '留空时自动使用当前访问域名',
    payment_guide: '支付接入指南', alipay_guide_text: '使用支付宝当面付的步骤：',
    alipay_step1: '在 open.alipay.com 注册支付宝开发者账号',
    alipay_step2: '创建应用并开通"当面付"能力',
    alipay_step3: '生成 RSA2 密钥对并在应用中配置',
    alipay_step4: '将 App ID 和应用私钥填入左侧对应字段',
    alipay_step5: '设置支付回调通知地址以接收支付结果',
    note: '注意', alipay_note: '客户下单后会生成付款二维码，客户使用支付宝扫码支付。支付状态将通过回调自动更新。',
    // Logo & Favicon
    logo_settings: 'Logo 与网站图标', site_logo: '网站 Logo', site_favicon: '网站图标 (Favicon)',
    no_logo: '未上传 Logo', no_favicon: '未上传图标', upload_logo: '上传 Logo', upload_favicon: '上传图标',
    // Notifications
    notification_settings: '订单通知', enable_tg: '启用 Telegram 通知',
    tg_bot_token: 'Telegram Bot Token', tg_chat_id: 'Telegram Chat ID',
    test_tg: '测试 Telegram', email_via_ms: '邮件通知（微软 Graph API）',
    enable_email: '启用邮件通知', ms_graph_token: '微软 Graph API Token',
    email_from: '发件人邮箱', email_to: '通知接收邮箱', test_email: '测试邮件',
    save_notifications: '保存通知设置',
    // Status values
    active: '上架', draft: '草稿', published: '已发布', pending: '待处理', completed: '已完成', cancelled: '已取消',
    yes: '是', no: '否',
    // Select options
    select_category: '— 请选择 —',
    // Messages
    confirm_delete: '确定删除吗？', saved: '保存成功！', deleted: '已删除！', uploaded: '上传成功！',
    password_changed: '密码已修改！', password_mismatch: '两次密码不一致',
    upload_hint: '点击或拖拽上传图片', auto_webp: '自动转换为WebP',
    test_sent: '测试消息已发送', test_failed: '测试发送失败',
  },
  en: {
    // Sidebar & Nav
    store_admin: 'Store Admin', dashboard: 'Dashboard', products: 'Products', categories: 'Categories',
    orders: 'Orders', pages: 'Pages', settings: 'Settings', payment_settings: 'Payment Settings',
    // Login
    login_title: 'Admin Panel', login_subtitle: 'Sign in to manage your store',
    username: 'Username', password: 'Password', sign_in: 'Sign In', login_failed: 'Login failed',
    // Topbar
    logout: 'Logout', view_site: 'View Site',
    // Stats
    total_products: 'Total Products', total_orders: 'Total Orders', total_pages: 'Total Pages', pending_orders: 'Pending Orders',
    // Common actions
    save: 'Save', cancel: 'Cancel', edit: 'Edit', delete: 'Delete', remove: 'Remove',
    add_product: 'Add Product', edit_product: 'Edit Product', add_category: 'Add Category', add_page: 'Add Page', edit_page: 'Edit Page',
    // Table headers
    order_no: 'Order #', customer: 'Customer', total: 'Total', status: 'Status', date: 'Date', actions: 'Actions',
    name: 'Name', price: 'Price', stock: 'Stock', image: 'Image', slug: 'Slug', products_count: 'Products',
    // Form labels
    description: 'Description', compare_price: 'Compare Price', category: 'Category', featured: 'Featured',
    content_html: 'Content (HTML)',
    // Product form
    product_name: 'Name', product_slug: 'Slug', product_desc: 'Description',
    product_price: 'Price', product_compare: 'Compare Price', product_category: 'Category',
    product_stock: 'Stock', product_status: 'Status', product_featured: 'Featured',
    product_images: 'Images',
    // Category form
    category_name: 'Name', category_desc: 'Description',
    // Page form
    page_title: 'Title', page_slug: 'Slug', page_content: 'Content (HTML)', page_status: 'Status',
    // Settings
    site_settings: 'Site Settings', change_password: 'Change Password',
    site_name: 'Site Name', site_description: 'Description', template: 'Template',
    currency: 'Currency', contact_email: 'Contact Email',
    template_modern: 'Modern (Clean)', template_luxury: 'Luxury (Elegant)',
    current_password: 'Current Password', new_password: 'New Password', confirm_password: 'Confirm Password',
    update_password: 'Update Password',
    // Payment
    alipay_f2f: 'Alipay Face-to-Face Payment', enable_alipay: 'Enable Alipay F2F',
    alipay_app_id: 'Alipay App ID', alipay_private_key: 'Application Private Key',
    alipay_public_key: 'Alipay Public Key (optional)', alipay_notify_url: 'Payment Notification URL',
    alipay_notify_hint: 'Auto-detect from current site domain if left empty',
    payment_guide: 'Payment Guide', alipay_guide_text: 'To use Alipay Face-to-Face payment:',
    alipay_step1: 'Register at open.alipay.com',
    alipay_step2: 'Create application and enable Face-to-Face Payment',
    alipay_step3: 'Generate RSA2 key pair',
    alipay_step4: 'Copy App ID and Private Key here',
    alipay_step5: 'Set notification URL for payment callbacks',
    note: 'Note', alipay_note: 'QR code will be generated for customers to scan with Alipay.',
    // Logo & Favicon
    logo_settings: 'Logo & Favicon', site_logo: 'Website Logo', site_favicon: 'Website Favicon',
    no_logo: 'No logo uploaded', no_favicon: 'No favicon uploaded', upload_logo: 'Upload Logo', upload_favicon: 'Upload Favicon',
    // Notifications
    notification_settings: 'Order Notifications', enable_tg: 'Enable Telegram Notification',
    tg_bot_token: 'Telegram Bot Token', tg_chat_id: 'Telegram Chat ID',
    test_tg: 'Test Telegram', email_via_ms: 'Email (Microsoft Graph API)',
    enable_email: 'Enable Email Notification', ms_graph_token: 'Microsoft Graph API Token',
    email_from: 'Sender Email (From)', email_to: 'Notification Email (To)', test_email: 'Test Email',
    save_notifications: 'Save Notification Settings',
    // Status values
    active: 'Active', draft: 'Draft', published: 'Published', pending: 'Pending', completed: 'Completed', cancelled: 'Cancelled',
    yes: 'Yes', no: 'No',
    // Select options
    select_category: '— Select —',
    // Messages
    confirm_delete: 'Are you sure?', saved: 'Saved!', deleted: 'Deleted!', uploaded: 'Uploaded!',
    password_changed: 'Password changed!', password_mismatch: 'Passwords do not match',
    upload_hint: 'Click or drag to upload images', auto_webp: 'Auto-converted to WebP',
    test_sent: 'Test message sent', test_failed: 'Test failed',
  }
};

let adminLang = localStorage.getItem('admin_lang') || 'zh';
function at(key) { return (adminI18n[adminLang] || adminI18n.zh)[key] || key; }

function applyI18n() {
  const dict = adminI18n[adminLang] || adminI18n.zh;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) el.placeholder = dict[key];
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (dict[key]) el.title = dict[key];
  });
  document.title = dict.login_title || 'Admin Dashboard';
  document.documentElement.lang = adminLang === 'zh' ? 'zh' : 'en';
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  applyI18n();
  if (token) showDashboard();
  else showLogin();
  initTheme();
  initLangSelector();
  initSidebar();
  initLogin();
  initLogout();
  initProductForm();
  initCategoryForm();
  initPageForm();
  initSettingsForm();
  initPasswordForm();
  initUpload();
  initAlipayForm();
  initLogoSettings();
  initNotificationForm();
  initLogoUpload();
});

// --- TinyMCE Init ---
function initTinyMCE() {
  if (tinyMCEInitialized) return;
  if (typeof tinymce === 'undefined') {
    console.warn('TinyMCE not loaded, falling back to textarea');
    document.getElementById('pf_desc').style.display = 'block';
    return;
  }
  tinymce.init({
    selector: '#pf_desc_editor',
    height: 300,
    menubar: false,
    plugins: 'lists link image table code codesample fullscreen preview',
    toolbar: 'undo redo | blocks | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image table | codesample code | fullscreen preview',
    content_style: 'body { font-family: -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif; font-size: 14px; color: #333; }',
    branding: false,
    promotion: false,
    setup: function(editor) {
      editor.on('change', function() {
        editor.save();
      });
    }
  });
  tinyMCEInitialized = true;
}

function destroyTinyMCE() {
  if (typeof tinymce !== 'undefined') {
    tinymce.remove('#pf_desc_editor');
    tinyMCEInitialized = false;
  }
}

// --- Auth ---
function headers() { return { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }; }

function showLogin() {
  document.getElementById('loginPage').style.display = 'flex';
  document.getElementById('dashboard').style.display = 'none';
}

function showDashboard() {
  document.getElementById('loginPage').style.display = 'none';
  document.getElementById('dashboard').style.display = 'flex';
  loadStats();
  loadProducts();
  loadCategories();
  loadOrders();
  loadPages();
  loadSettings();
  loadPaymentSettings();
  loadLogoSettings();
  loadNotificationSettings();
  // Init TinyMCE after dashboard is shown
  setTimeout(initTinyMCE, 500);
}

function initLogin() {
  document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const user = document.getElementById('loginUser').value;
    const pass = document.getElementById('loginPass').value;
    try {
      const res = await fetch(`${API}/api/auth/login`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: user, password: pass })
      });
      const data = await res.json();
      if (data.token) {
        token = data.token;
        localStorage.setItem('admin_token', token);
        showDashboard();
      } else {
        document.getElementById('loginError').textContent = data.error || at('login_failed');
      }
    } catch (e) {
      document.getElementById('loginError').textContent = e.message;
    }
  });
}

function initLogout() {
  document.getElementById('logoutBtn').addEventListener('click', () => {
    token = null;
    localStorage.removeItem('admin_token');
    destroyTinyMCE();
    showLogin();
  });
}

// --- Theme ---
function initTheme() {
  const saved = localStorage.getItem('admin_theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  document.getElementById('themeToggle').addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('admin_theme', next);
  });
}

// --- Lang ---
function initLangSelector() {
  const sel = document.getElementById('langSelect');
  sel.value = adminLang;
  sel.addEventListener('change', (e) => {
    adminLang = e.target.value;
    localStorage.setItem('admin_lang', adminLang);
    applyI18n();
    loadStats(); loadProducts(); loadCategories(); loadOrders(); loadPages();
  });
}

// --- Sidebar ---
function initSidebar() {
  const sidebar = document.getElementById('sidebar');
  document.getElementById('menuToggle').addEventListener('click', () => sidebar.classList.toggle('active'));
  document.getElementById('sidebarClose').addEventListener('click', () => sidebar.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const page = item.dataset.page;
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      item.classList.add('active');
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
      document.getElementById(`page-${page}`).classList.add('active');
      sidebar.classList.remove('active');
    });
  });
}

// --- Stats ---
async function loadStats() {
  try {
    const res = await fetch(`${API}/api/stats`, { headers: headers() });
    const data = await res.json();
    document.getElementById('statsGrid').innerHTML = `
      <div class="stat-card"><div class="stat-icon">🛍️</div><div class="stat-num">${data.products}</div><div class="stat-label">${at('total_products')}</div></div>
      <div class="stat-card"><div class="stat-icon">📋</div><div class="stat-num">${data.orders}</div><div class="stat-label">${at('total_orders')}</div></div>
      <div class="stat-card"><div class="stat-icon">📄</div><div class="stat-num">${data.pages}</div><div class="stat-label">${at('total_pages')}</div></div>
      <div class="stat-card"><div class="stat-icon">⏳</div><div class="stat-num">${data.pendingOrders}</div><div class="stat-label">${at('pending_orders')}</div></div>
    `;
  } catch {}
}

// --- Products ---
async function loadProducts() {
  try {
    const res = await fetch(`${API}/api/products/all`, { headers: headers() });
    const data = await res.json();
    const tbody = document.querySelector('#productsTable tbody');
    tbody.innerHTML = (data.products || []).map(p => {
      const images = typeof p.images === 'string' ? JSON.parse(p.images || '[]') : (p.images || []);
      const img = images[0];
      const statusText = at(p.status) || p.status;
      return `<tr>
        <td>${img ? `<img src="${img}">` : '—'}</td>
        <td><strong>${p.name}</strong></td>
        <td>$${Number(p.price).toFixed(2)}</td>
        <td>${p.stock}</td>
        <td><span class="badge badge-${p.status}">${statusText}</span></td>
        <td>
          <button class="btn btn-sm btn-outline" onclick="editProduct(${p.id})">✏️</button>
          <button class="btn btn-sm btn-danger" onclick="deleteProduct(${p.id})">🗑️</button>
        </td>
      </tr>`;
    }).join('');
  } catch {}
}

function showProductForm(product = null) {
  document.getElementById('productFormTitle').textContent = product ? at('edit_product') : at('add_product');
  document.getElementById('pf_id').value = product?.id || '';
  document.getElementById('pf_name').value = product?.name || '';
  document.getElementById('pf_slug').value = product?.slug || '';
  document.getElementById('pf_price').value = product?.price || '';
  document.getElementById('pf_compare').value = product?.compare_price || '';
  document.getElementById('pf_stock').value = product?.stock || 0;
  document.getElementById('pf_status').value = product?.status || 'active';
  document.getElementById('pf_featured').value = product?.featured || 0;
  uploadedImages = product ? (typeof product.images === 'string' ? JSON.parse(product.images || '[]') : (product.images || [])) : [];
  renderUploadPreview();
  loadCategoryOptions(product?.category);

  // Set description in TinyMCE or textarea
  const desc = product?.description || '';
  document.getElementById('pf_desc').value = desc;
  if (tinyMCEInitialized && tinymce.get('pf_desc_editor')) {
    tinymce.get('pf_desc_editor').setContent(desc);
  }

  openModal('productModal');
}

async function editProduct(id) {
  const res = await fetch(`${API}/api/products/${id}`, { headers: headers() });
  const data = await res.json();
  showProductForm(data.product);
}

function initProductForm() {
  document.getElementById('productForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    // Sync TinyMCE content to textarea
    if (tinyMCEInitialized && tinymce.get('pf_desc_editor')) {
      tinymce.triggerSave();
      document.getElementById('pf_desc').value = tinymce.get('pf_desc_editor').getContent();
    }
    const id = document.getElementById('pf_id').value;
    const body = {
      name: document.getElementById('pf_name').value,
      slug: document.getElementById('pf_slug').value,
      description: document.getElementById('pf_desc').value,
      price: parseFloat(document.getElementById('pf_price').value) || 0,
      compare_price: parseFloat(document.getElementById('pf_compare').value) || 0,
      category: document.getElementById('pf_category').value,
      stock: parseInt(document.getElementById('pf_stock').value) || 0,
      status: document.getElementById('pf_status').value,
      featured: parseInt(document.getElementById('pf_featured').value),
      images: uploadedImages,
    };
    const url = id ? `${API}/api/products/${id}` : `${API}/api/products`;
    const method = id ? 'PUT' : 'POST';
    await fetch(url, { method, headers: headers(), body: JSON.stringify(body) });
    closeModal('productModal');
    loadProducts(); loadStats();
    showToast(at('saved'));
  });
}

async function deleteProduct(id) {
  if (!confirm(at('confirm_delete'))) return;
  await fetch(`${API}/api/products/${id}`, { method: 'DELETE', headers: headers() });
  loadProducts(); loadStats(); showToast(at('deleted'));
}

// --- Categories ---
async function loadCategories() {
  try {
    const res = await fetch(`${API}/api/categories`);
    const data = await res.json();
    const tbody = document.querySelector('#categoriesTable tbody');
    tbody.innerHTML = (data.categories || []).map(c => `
      <tr>
        <td><strong>${c.name}</strong></td>
        <td>${c.slug}</td>
        <td>—</td>
        <td><button class="btn btn-sm btn-danger" onclick="deleteCategory(${c.id})">🗑️</button></td>
      </tr>
    `).join('');
  } catch {}
}

async function loadCategoryOptions(selected = '') {
  try {
    const res = await fetch(`${API}/api/categories`);
    const data = await res.json();
    const sel = document.getElementById('pf_category');
    sel.innerHTML = `<option value="">${at('select_category')}</option>` +
      (data.categories || []).map(c => `<option value="${c.name}" ${c.name === selected ? 'selected' : ''}>${c.name}</option>`).join('');
  } catch {}
}

function showCategoryForm() { openModal('categoryModal'); }

function initCategoryForm() {
  document.getElementById('categoryForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    await fetch(`${API}/api/categories`, {
      method: 'POST', headers: headers(),
      body: JSON.stringify({ name: document.getElementById('cf_name').value, description: document.getElementById('cf_desc').value })
    });
    closeModal('categoryModal');
    loadCategories(); showToast(at('saved'));
    document.getElementById('categoryForm').reset();
  });
}

async function deleteCategory(id) {
  if (!confirm(at('confirm_delete'))) return;
  await fetch(`${API}/api/categories/${id}`, { method: 'DELETE', headers: headers() });
  loadCategories(); showToast(at('deleted'));
}

// --- Orders ---
async function loadOrders() {
  try {
    const res = await fetch(`${API}/api/orders`, { headers: headers() });
    const data = await res.json();
    const tbody = document.querySelector('#ordersTable tbody');
    tbody.innerHTML = (data.orders || []).map(o => {
      const statusText = at(o.status) || o.status;
      return `<tr>
        <td><strong>${o.order_no}</strong></td>
        <td>${o.customer_name}<br><small style="color:var(--text-muted)">${o.customer_email || ''}</small></td>
        <td>$${Number(o.total).toFixed(2)}</td>
        <td><span class="badge badge-${o.status}">${statusText}</span></td>
        <td>${new Date(o.created_at).toLocaleDateString()}</td>
        <td>
          <select class="lang-select" onchange="updateOrderStatus(${o.id}, this.value)" style="font-size:0.8rem">
            <option value="pending" ${o.status==='pending'?'selected':''}>${at('pending')}</option>
            <option value="completed" ${o.status==='completed'?'selected':''}>${at('completed')}</option>
            <option value="cancelled" ${o.status==='cancelled'?'selected':''}>${at('cancelled')}</option>
          </select>
          <button class="btn btn-sm btn-danger" onclick="deleteOrder(${o.id})" style="margin-left:4px">🗑️</button>
        </td>
      </tr>`;
    }).join('');
  } catch {}
}

async function updateOrderStatus(id, status) {
  await fetch(`${API}/api/orders/${id}`, { method: 'PUT', headers: headers(), body: JSON.stringify({ status }) });
  loadStats(); showToast(at('saved'));
}

async function deleteOrder(id) {
  if (!confirm(at('confirm_delete'))) return;
  await fetch(`${API}/api/orders/${id}`, { method: 'DELETE', headers: headers() });
  loadOrders(); loadStats(); showToast(at('deleted'));
}

// --- Pages ---
async function loadPages() {
  try {
    const res = await fetch(`${API}/api/pages/all`, { headers: headers() });
    const data = await res.json();
    const tbody = document.querySelector('#pagesTable tbody');
    tbody.innerHTML = (data.pages || []).map(p => {
      const statusText = at(p.status) || p.status;
      return `<tr>
        <td><strong>${p.title}</strong></td>
        <td>${p.slug}</td>
        <td><span class="badge badge-${p.status}">${statusText}</span></td>
        <td>
          <button class="btn btn-sm btn-outline" onclick="editPage(${p.id})">✏️</button>
          <button class="btn btn-sm btn-danger" onclick="deletePage(${p.id})">🗑️</button>
        </td>
      </tr>`;
    }).join('');
  } catch {}
}

function showPageForm(page = null) {
  document.getElementById('pageFormTitle').textContent = page ? at('edit_page') : at('add_page');
  document.getElementById('pgf_id').value = page?.id || '';
  document.getElementById('pgf_title').value = page?.title || '';
  document.getElementById('pgf_slug').value = page?.slug || '';
  document.getElementById('pgf_body').value = page?.body || '';
  document.getElementById('pgf_status').value = page?.status || 'published';
  openModal('pageModal');
}

async function editPage(id) {
  const res = await fetch(`${API}/api/pages/all`, { headers: headers() });
  const data = await res.json();
  const page = (data.pages || []).find(p => p.id === id);
  if (page) showPageForm(page);
}

function initPageForm() {
  document.getElementById('pageForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = document.getElementById('pgf_id').value;
    const body = {
      title: document.getElementById('pgf_title').value,
      slug: document.getElementById('pgf_slug').value,
      body: document.getElementById('pgf_body').value,
      status: document.getElementById('pgf_status').value,
    };
    const url = id ? `${API}/api/pages/${id}` : `${API}/api/pages`;
    const method = id ? 'PUT' : 'POST';
    await fetch(url, { method, headers: headers(), body: JSON.stringify(body) });
    closeModal('pageModal');
    loadPages(); showToast(at('saved'));
  });
}

async function deletePage(id) {
  if (!confirm(at('confirm_delete'))) return;
  await fetch(`${API}/api/pages/${id}`, { method: 'DELETE', headers: headers() });
  loadPages(); showToast(at('deleted'));
}

// --- Payment Settings ---
async function loadPaymentSettings() {
  try {
    const res = await fetch(`${API}/api/settings`);
    const data = await res.json();
    const s = data.settings || {};
    document.getElementById('alipay_enabled').value = s.alipay_enabled || '0';
    document.getElementById('alipay_app_id').value = s.alipay_app_id || '';
    document.getElementById('alipay_private_key').value = s.alipay_private_key || '';
    document.getElementById('alipay_public_key').value = s.alipay_public_key || '';
    document.getElementById('alipay_notify_url').value = s.alipay_notify_url || '';
  } catch {}
}

function initAlipayForm() {
  document.getElementById('alipayForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const body = {
      alipay_enabled: document.getElementById('alipay_enabled').value,
      alipay_app_id: document.getElementById('alipay_app_id').value,
      alipay_private_key: document.getElementById('alipay_private_key').value,
      alipay_public_key: document.getElementById('alipay_public_key').value,
      alipay_notify_url: document.getElementById('alipay_notify_url').value,
    };
    await fetch(`${API}/api/settings`, { method: 'PUT', headers: headers(), body: JSON.stringify(body) });
    showToast(at('saved'));
  });
}

// --- Logo Settings ---
async function loadLogoSettings() {
  try {
    const res = await fetch(`${API}/api/settings`);
    const data = await res.json();
    const s = data.settings || {};
    document.getElementById('set_site_logo').value = s.site_logo || '';
    document.getElementById('set_site_favicon').value = s.site_favicon || '';
    renderLogoPreview(s.site_logo);
    renderFaviconPreview(s.site_favicon);
  } catch {}
}

function renderLogoPreview(url) {
  const el = document.getElementById('logoPreview');
  if (url) {
    el.innerHTML = `<img src="${url}" alt="logo" style="max-height:60px;max-width:200px">`;
  } else {
    el.innerHTML = `<span>${at('no_logo')}</span>`;
  }
}

function renderFaviconPreview(url) {
  const el = document.getElementById('faviconPreview');
  if (url) {
    el.innerHTML = `<img src="${url}" alt="favicon" style="max-height:32px;max-width:32px">`;
  } else {
    el.innerHTML = `<span>${at('no_favicon')}</span>`;
  }
}

function removeLogo() {
  document.getElementById('set_site_logo').value = '';
  renderLogoPreview('');
}

function removeFavicon() {
  document.getElementById('set_site_favicon').value = '';
  renderFaviconPreview('');
}

function initLogoUpload() {
  // Logo upload
  document.getElementById('logoFileInput').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);
    const res = await fetch(`${API}/api/upload`, {
      method: 'POST', headers: { 'Authorization': `Bearer ${token}` },
      body: formData
    });
    const data = await res.json();
    if (data.url) {
      document.getElementById('set_site_logo').value = data.url;
      renderLogoPreview(data.url);
      showToast(at('uploaded'));
    }
  });

  // Favicon upload
  document.getElementById('faviconFileInput').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);
    const res = await fetch(`${API}/api/upload`, {
      method: 'POST', headers: { 'Authorization': `Bearer ${token}` },
      body: formData
    });
    const data = await res.json();
    if (data.url) {
      document.getElementById('set_site_favicon').value = data.url;
      renderFaviconPreview(data.url);
      showToast(at('uploaded'));
    }
  });
}

function initLogoSettings() {
  document.getElementById('logoSettingsForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const body = {
      site_logo: document.getElementById('set_site_logo').value,
      site_favicon: document.getElementById('set_site_favicon').value,
    };
    await fetch(`${API}/api/settings`, { method: 'PUT', headers: headers(), body: JSON.stringify(body) });
    showToast(at('saved'));
  });
}

// --- Notification Settings ---
async function loadNotificationSettings() {
  try {
    const res = await fetch(`${API}/api/settings`);
    const data = await res.json();
    const s = data.settings || {};
    document.getElementById('notify_tg_enabled').value = s.notify_tg_enabled || '0';
    document.getElementById('notify_tg_bot_token').value = s.notify_tg_bot_token || '';
    document.getElementById('notify_tg_chat_id').value = s.notify_tg_chat_id || '';
    document.getElementById('notify_email_enabled').value = s.notify_email_enabled || '0';
    document.getElementById('notify_ms_graph_token').value = s.notify_ms_graph_token || '';
    document.getElementById('notify_email_from').value = s.notify_email_from || '';
    document.getElementById('notify_email_to').value = s.notify_email_to || '';
  } catch {}
}

function initNotificationForm() {
  document.getElementById('notificationForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const body = {
      notify_tg_enabled: document.getElementById('notify_tg_enabled').value,
      notify_tg_bot_token: document.getElementById('notify_tg_bot_token').value,
      notify_tg_chat_id: document.getElementById('notify_tg_chat_id').value,
      notify_email_enabled: document.getElementById('notify_email_enabled').value,
      notify_ms_graph_token: document.getElementById('notify_ms_graph_token').value,
      notify_email_from: document.getElementById('notify_email_from').value,
      notify_email_to: document.getElementById('notify_email_to').value,
    };
    await fetch(`${API}/api/settings`, { method: 'PUT', headers: headers(), body: JSON.stringify(body) });
    showToast(at('saved'));
  });
}

async function testNotification(type) {
  try {
    const res = await fetch(`${API}/api/notifications/test`, {
      method: 'POST', headers: headers(),
      body: JSON.stringify({ type })
    });
    const data = await res.json();
    showToast(data.success ? at('test_sent') : (data.message || at('test_failed')));
  } catch (e) {
    showToast(at('test_failed'));
  }
}

// --- Settings ---
async function loadSettings() {
  try {
    const res = await fetch(`${API}/api/settings`);
    const data = await res.json();
    const s = data.settings || {};
    document.getElementById('set_name').value = s.site_name || '';
    document.getElementById('set_desc').value = s.site_description || '';
    document.getElementById('set_template').value = s.template || 'modern';
    document.getElementById('set_currency').value = s.currency || 'USD';
    document.getElementById('set_email').value = s.contact_email || '';
  } catch {}
}

function initSettingsForm() {
  document.getElementById('siteSettingsForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const body = {
      site_name: document.getElementById('set_name').value,
      site_description: document.getElementById('set_desc').value,
      template: document.getElementById('set_template').value,
      currency: document.getElementById('set_currency').value,
      contact_email: document.getElementById('set_email').value,
    };
    await fetch(`${API}/api/settings`, { method: 'PUT', headers: headers(), body: JSON.stringify(body) });
    showToast(at('saved'));
  });
}

function initPasswordForm() {
  document.getElementById('passwordForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const old = document.getElementById('pw_old').value;
    const newPw = document.getElementById('pw_new').value;
    const confirm = document.getElementById('pw_confirm').value;
    if (newPw !== confirm) { showToast(at('password_mismatch')); return; }
    const res = await fetch(`${API}/api/auth/change-password`, {
      method: 'POST', headers: headers(),
      body: JSON.stringify({ oldPassword: old, newPassword: newPw })
    });
    const data = await res.json();
    if (data.success) { showToast(at('password_changed')); document.getElementById('passwordForm').reset(); }
    else showToast(data.error || 'Error');
  });
}

// --- Upload ---
function initUpload() {
  const area = document.getElementById('uploadArea');
  const input = document.getElementById('fileInput');
  area.addEventListener('click', () => input.click());
  area.addEventListener('dragover', (e) => { e.preventDefault(); area.style.borderColor = 'var(--primary)'; });
  area.addEventListener('dragleave', () => { area.style.borderColor = 'var(--border)'; });
  area.addEventListener('drop', (e) => {
    e.preventDefault(); area.style.borderColor = 'var(--border)';
    handleFiles(e.dataTransfer.files);
  });
  input.addEventListener('change', (e) => handleFiles(e.target.files));
}

async function handleFiles(files) {
  for (const file of files) {
    if (!file.type.startsWith('image/')) continue;
    try {
      const webpBlob = await convertToWebP(file);
      const formData = new FormData();
      formData.append('file', webpBlob, file.name.replace(/\.[^.]+$/, '.webp'));
      const res = await fetch(`${API}/api/upload`, {
        method: 'POST', headers: { 'Authorization': `Bearer ${token}` },
        body: formData
      });
      const data = await res.json();
      if (data.url) {
        uploadedImages.push(data.url);
        renderUploadPreview();
        showToast(at('uploaded'));
      }
    } catch (e) {
      console.error('Upload failed:', e);
    }
  }
}

function convertToWebP(file) {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      canvas.toBlob((blob) => resolve(blob || file), 'image/webp', 0.85);
    };
    img.onerror = () => resolve(file);
    img.src = URL.createObjectURL(file);
  });
}

function renderUploadPreview() {
  const container = document.getElementById('uploadPreview');
  container.innerHTML = uploadedImages.map((url, i) => `
    <div class="preview-item">
      <img src="${url}" alt="preview">
      <button class="remove-img" onclick="removeUpload(${i})">✕</button>
    </div>
  `).join('');
}

function removeUpload(index) {
  uploadedImages.splice(index, 1);
  renderUploadPreview();
}

// --- Helpers ---
function openModal(id) { document.getElementById(id).classList.add('active'); }
function closeModal(id) {
  document.getElementById(id).classList.remove('active');
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}
