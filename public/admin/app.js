// ============================================================
// Admin Dashboard - App Logic
// ============================================================

const API = '';
let token = localStorage.getItem('admin_token');
let uploadedImages = [];

// --- i18n ---
const adminI18n = {
  zh: {
    dashboard: '仪表盘', products: '商品管理', categories: '分类管理', orders: '订单管理', pages: '页面管理', settings: '系统设置',
    total_products: '商品总数', total_orders: '订单总数', total_pages: '页面总数', pending_orders: '待处理订单',
    logout: '退出登录', view_site: '查看网站', save: '保存', cancel: '取消', edit: '编辑', delete: '删除',
    add_product: '添加商品', add_category: '添加分类', add_page: '添加页面',
    order_no: '订单号', customer: '客户', total: '总计', status: '状态', date: '日期', actions: '操作',
    name: '名称', price: '价格', stock: '库存', image: '图片', slug: '标识',
    description: '描述', compare_price: '划线价', category: '分类', featured: '推荐',
    active: '上架', draft: '草稿', pending: '待处理', completed: '已完成', cancelled: '已取消',
    confirm_delete: '确定删除吗？', saved: '保存成功！', deleted: '已删除！', uploaded: '上传成功！',
    password_changed: '密码已修改！', password_mismatch: '两次密码不一致', login_failed: '登录失败',
    upload_hint: '点击或拖拽上传图片', auto_webp: '自动转换为WebP',
  },
  en: {
    dashboard: 'Dashboard', products: 'Products', categories: 'Categories', orders: 'Orders', pages: 'Pages', settings: 'Settings',
    total_products: 'Total Products', total_orders: 'Total Orders', total_pages: 'Total Pages', pending_orders: 'Pending Orders',
    logout: 'Logout', view_site: 'View Site', save: 'Save', cancel: 'Cancel', edit: 'Edit', delete: 'Delete',
    add_product: 'Add Product', add_category: 'Add Category', add_page: 'Add Page',
    order_no: 'Order #', customer: 'Customer', total: 'Total', status: 'Status', date: 'Date', actions: 'Actions',
    name: 'Name', price: 'Price', stock: 'Stock', image: 'Image', slug: 'Slug',
    description: 'Description', compare_price: 'Compare Price', category: 'Category', featured: 'Featured',
    active: 'Active', draft: 'Draft', pending: 'Pending', completed: 'Completed', cancelled: 'Cancelled',
    confirm_delete: 'Are you sure?', saved: 'Saved!', deleted: 'Deleted!', uploaded: 'Uploaded!',
    password_changed: 'Password changed!', password_mismatch: 'Passwords do not match', login_failed: 'Login failed',
    upload_hint: 'Click or drag to upload images', auto_webp: 'Auto-converted to WebP',
  }
};

let adminLang = localStorage.getItem('admin_lang') || 'zh';
function at(key) { return (adminI18n[adminLang] || adminI18n.zh)[key] || key; }

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
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
});

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
    // Reload data to apply labels
    loadStats();
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
      return `<tr>
        <td>${img ? `<img src="${img}">` : '—'}</td>
        <td><strong>${p.name}</strong></td>
        <td>$${Number(p.price).toFixed(2)}</td>
        <td>${p.stock}</td>
        <td><span class="badge badge-${p.status}">${p.status}</span></td>
        <td>
          <button class="btn btn-sm btn-outline" onclick="editProduct(${p.id})">✏️</button>
          <button class="btn btn-sm btn-danger" onclick="deleteProduct(${p.id})">🗑️</button>
        </td>
      </tr>`;
    }).join('');
  } catch {}
}

function showProductForm(product = null) {
  document.getElementById('productFormTitle').textContent = product ? 'Edit Product' : at('add_product');
  document.getElementById('pf_id').value = product?.id || '';
  document.getElementById('pf_name').value = product?.name || '';
  document.getElementById('pf_slug').value = product?.slug || '';
  document.getElementById('pf_desc').value = product?.description || '';
  document.getElementById('pf_price').value = product?.price || '';
  document.getElementById('pf_compare').value = product?.compare_price || '';
  document.getElementById('pf_stock').value = product?.stock || 0;
  document.getElementById('pf_status').value = product?.status || 'active';
  document.getElementById('pf_featured').value = product?.featured || 0;
  uploadedImages = product ? (typeof product.images === 'string' ? JSON.parse(product.images || '[]') : (product.images || [])) : [];
  renderUploadPreview();
  loadCategoryOptions(product?.category);
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
    loadProducts();
    loadStats();
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
    sel.innerHTML = '<option value="">—</option>' +
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
    tbody.innerHTML = (data.orders || []).map(o => `
      <tr>
        <td><strong>${o.order_no}</strong></td>
        <td>${o.customer_name}<br><small style="color:var(--text-muted)">${o.customer_email || ''}</small></td>
        <td>$${Number(o.total).toFixed(2)}</td>
        <td><span class="badge badge-${o.status}">${o.status}</span></td>
        <td>${new Date(o.created_at).toLocaleDateString()}</td>
        <td>
          <select class="lang-select" onchange="updateOrderStatus(${o.id}, this.value)" style="font-size:0.8rem">
            <option value="pending" ${o.status==='pending'?'selected':''}>Pending</option>
            <option value="completed" ${o.status==='completed'?'selected':''}>Completed</option>
            <option value="cancelled" ${o.status==='cancelled'?'selected':''}>Cancelled</option>
          </select>
          <button class="btn btn-sm btn-danger" onclick="deleteOrder(${o.id})" style="margin-left:4px">🗑️</button>
        </td>
      </tr>
    `).join('');
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
    tbody.innerHTML = (data.pages || []).map(p => `
      <tr>
        <td><strong>${p.title}</strong></td>
        <td>${p.slug}</td>
        <td><span class="badge badge-${p.status}">${p.status}</span></td>
        <td>
          <button class="btn btn-sm btn-outline" onclick="editPage(${p.id})">✏️</button>
          <button class="btn btn-sm btn-danger" onclick="deletePage(${p.id})">🗑️</button>
        </td>
      </tr>
    `).join('');
  } catch {}
}

function showPageForm(page = null) {
  document.getElementById('pageFormTitle').textContent = page ? 'Edit Page' : at('add_page');
  document.getElementById('pgf_id').value = page?.id || '';
  document.getElementById('pgf_title').value = page?.title || '';
  document.getElementById('pgf_slug').value = page?.slug || '';
  document.getElementById('pgf_body').value = page?.body || '';
  document.getElementById('pgf_status').value = page?.status || 'published';
  openModal('pageModal');
}

async function editPage(id) {
  // Pages API returns all, find by id
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
      // Convert to WebP client-side
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
function closeModal(id) { document.getElementById(id).classList.remove('active'); }

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}
