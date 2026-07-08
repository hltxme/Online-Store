// ============================================================
// Luxury Brand - Frontend App
// ============================================================

const i18n = {
  en: {
    site_name: 'MAISON', nav_home: 'HOME', nav_products: 'COLLECTION', nav_about: 'MAISON', nav_contact: 'CONTACT',
    hero_badge: 'AUTUMN / WINTER 2025', hero_title: 'Timeless<br>Elegance', hero_desc: 'Discover our latest collection — where craftsmanship meets contemporary design.',
    hero_cta: 'EXPLORE COLLECTION', products_title: 'THE COLLECTION', products_desc: 'Each piece tells a story of artistry and refinement',
    filter_all: 'All', about_title: 'OUR MAISON', about_desc: 'Founded with a vision to redefine modern luxury, our maison brings together the finest materials and artisanal techniques. Every creation is a testament to our commitment to excellence.',
    feature1_title: 'Curated Pieces', feature2_title: 'Countries', feature3_title: 'Happy Clients',
    contact_title: 'GET IN TOUCH', contact_desc: "We'd be delighted to hear from you",
    form_name: 'Full Name', form_email: 'Email', form_message: 'Message', form_submit: 'SEND MESSAGE', form_phone: 'Phone', form_address: 'Shipping Address', form_notes: 'Special Instructions',
    footer_rights: 'All rights reserved.', cart_title: 'Shopping Bag', cart_total: 'Total', cart_checkout: 'PROCEED TO CHECKOUT', cart_empty: 'Your bag is empty',
    order_title: 'Complete Your Order', order_submit: 'PLACE ORDER', toast_added: 'Added to bag!', toast_ordered: 'Order placed!', toast_contact: 'Message sent!',
    currency: '$'
  },
  zh: {
    site_name: '雅致', nav_home: '首页', nav_products: '臻品', nav_about: '品牌', nav_contact: '联系',
    hero_badge: '2025 秋冬系列', hero_title: '永恒<br>优雅', hero_desc: '探索我们的最新系列——匠心工艺与当代设计的完美融合。',
    hero_cta: '探索系列', products_title: '臻品系列', products_desc: '每一件作品都诉说着匠心与精致的故事',
    filter_all: '全部', about_title: '品牌故事', about_desc: '以重新定义现代奢华为愿景，我们的品牌汇集最优质的材料与工匠技艺。每一件创作都是我们追求卓越的见证。',
    feature1_title: '精选臻品', feature2_title: '覆盖国家', feature3_title: '满意客户',
    contact_title: '联系我们', contact_desc: '期待与您交流',
    form_name: '姓名', form_email: '邮箱', form_message: '留言', form_submit: '发送', form_phone: '电话', form_address: '收货地址', form_notes: '备注',
    footer_rights: '保留所有权利。', cart_title: '购物袋', cart_total: '合计', cart_checkout: '前往结算', cart_empty: '购物袋为空',
    order_title: '完成订单', order_submit: '确认下单', toast_added: '已加入购物袋！', toast_ordered: '订单已提交！', toast_contact: '消息已发送！',
    currency: '¥'
  },
  ja: {
    site_name: 'メゾン', nav_home: 'ホーム', nav_products: 'コレクション', nav_about: 'メゾン', nav_contact: 'お問合せ',
    hero_badge: '2025 AW コレクション', hero_title: '永遠の<br>エレガンス', hero_desc: '最新コレクションを発見——職人技とコンテンポラリーデザインの融合。',
    hero_cta: 'コレクションを見る', products_title: 'コレクション', products_desc: '一つ一つの作品に芸術性と洗練の物語が宿ります',
    filter_all: 'すべて', about_title: 'メゾンの物語', about_desc: 'モダンラグジュアリーを再定義するビジョンのもと、最高の素材と職人技を結集しています。',
    feature1_title: 'キュレーション', feature2_title: '展開国', feature3_title: 'お客様',
    contact_title: 'お問い合わせ', contact_desc: 'ご連絡をお待ちしております',
    form_name: 'お名前', form_email: 'メール', form_message: 'メッセージ', form_submit: '送信', form_phone: '電話', form_address: '配送先', form_notes: '備考',
    footer_rights: '全著作権所有。', cart_title: 'ショッピングバッグ', cart_total: '合計', cart_checkout: '購入手続き', cart_empty: 'バッグは空です',
    order_title: 'ご注文', order_submit: '注文する', toast_added: '追加済み！', toast_ordered: 'ご注文完了！', toast_contact: '送信完了！',
    currency: '¥'
  },
  ko: {
    site_name: '메종', nav_home: '홈', nav_products: '컬렉션', nav_about: '메종', nav_contact: '문의',
    hero_badge: '2025 AW 컬렉션', hero_title: '영원한<br>우아함', hero_desc: '최신 컬렉션을 만나보세요 — 장인 정신과 현대 디자인의 만남.',
    hero_cta: '컬렉션 보기', products_title: '컬렉션', products_desc: '각 작품에는 예술성과 정교함의 이야기가 담겨 있습니다',
    filter_all: '전체', about_title: '메종 이야기', about_desc: '현대적 럭셔리를 재정義하는 비전으로 최고의 소재와 장인 기술을 결합합니다.',
    feature1_title: '큐레이션', feature2_title: '진출국', feature3_title: '고객',
    contact_title: '문의하기', contact_desc: '연락을 기다립니다',
    form_name: '이름', form_email: '이메일', form_message: '메시지', form_submit: '보내기', form_phone: '전화', form_address: '배송지', form_notes: '비고',
    footer_rights: '모든 권리 보유.', cart_title: '쇼핑백', cart_total: '합계', cart_checkout: '결제하기', cart_empty: '쇼핑백이 비어있습니다',
    order_title: '주문하기', order_submit: '주문 확인', toast_added: '추가됨!', toast_ordered: '주문 완료!', toast_contact: '전송 완료!',
    currency: '₩'
  },
  fr: {
    site_name: 'MAISON', nav_home: 'ACCUEIL', nav_products: 'COLLECTION', nav_about: 'MAISON', nav_contact: 'CONTACT',
    hero_badge: 'AUTOMNE / HIVER 2025', hero_title: 'Élégance<br>Intemporelle', hero_desc: 'Découvrez notre dernière collection — où l\'artisanat rencontre le design contemporain.',
    hero_cta: 'EXPLORER', products_title: 'LA COLLECTION', products_desc: 'Chaque pièce raconte une histoire d\'artisanat et de raffinement',
    filter_all: 'Tout', about_title: 'NOTRE MAISON', about_desc: 'Fondée avec une vision de redéfinir le luxe moderne, notre maison réunit les plus beaux matériaux et techniques artisanales.',
    feature1_title: 'Pièces', feature2_title: 'Pays', feature3_title: 'Clients',
    contact_title: 'CONTACTEZ-NOUS', contact_desc: 'Nous serions ravis de vous entendre',
    form_name: 'Nom', form_email: 'Email', form_message: 'Message', form_submit: 'ENVOYER', form_phone: 'Téléphone', form_address: 'Adresse', form_notes: 'Notes',
    footer_rights: 'Tous droits réservés.', cart_title: 'Panier', cart_total: 'Total', cart_checkout: 'COMMANDER', cart_empty: 'Votre panier est vide',
    order_title: 'Finaliser', order_submit: 'COMMANDER', toast_added: 'Ajouté!', toast_ordered: 'Commandé!', toast_contact: 'Envoyé!',
    currency: '€'
  },
  de: {
    site_name: 'MAISON', nav_home: 'STARTSEITE', nav_products: 'KOLLEKTION', nav_about: 'MAISON', nav_contact: 'KONTAKT',
    hero_badge: 'HERBST / WINTER 2025', hero_title: 'Zeitlose<br>Eleganz', hero_desc: 'Entdecken Sie unsere neueste Kollektion — wo Handwerk auf zeitgemäßes Design trifft.',
    hero_cta: 'ENTDECKEN', products_title: 'DIE KOLLEKTION', products_desc: 'Jedes Stück erzählt eine Geschichte von Handwerkskunst und Raffinesse',
    filter_all: 'Alle', about_title: 'UNSERE MAISON', about_desc: 'Gegründet mit der Vision, modernen Luxus neu zu definieren.',
    feature1_title: 'Stücke', feature2_title: 'Länder', feature3_title: 'Kunden',
    contact_title: 'KONTAKT', contact_desc: 'Wir freuen uns von Ihnen zu hören',
    form_name: 'Name', form_email: 'E-Mail', form_text: 'Nachricht', form_submit: 'SENDEN', form_phone: 'Telefon', form_address: 'Adresse', form_notes: 'Notizen',
    footer_rights: 'Alle Rechte vorbehalten.', cart_title: 'Einkaufstasche', cart_total: 'Gesamt', cart_checkout: 'BESTELLEN', cart_empty: 'Ihre Tasche ist leer',
    order_title: 'Bestellung', order_submit: 'BESTÄTIGEN', toast_added: 'Hinzugefügt!', toast_ordered: 'Bestellt!', toast_contact: 'Gesendet!',
    currency: '€'
  },
  es: {
    site_name: 'MAISON', nav_home: 'INICIO', nav_products: 'COLECCIÓN', nav_about: 'MAISON', nav_contact: 'CONTACTO',
    hero_badge: 'OTOÑO / INVIERNO 2025', hero_title: 'Elegancia<br>Atemporal', hero_desc: 'Descubra nuestra última colección — donde la artesanía se encuentra con el diseño contemporáneo.',
    hero_cta: 'EXPLORAR', products_title: 'LA COLECCIÓN', products_desc: 'Cada pieza cuenta una historia de artesanía y refinamiento',
    filter_all: 'Todo', about_title: 'NUESTRA MAISON', about_desc: 'Fundada con la visión de redefinir el lujo moderno.',
    feature1_title: 'Piezas', feature2_title: 'Países', feature3_title: 'Clientes',
    contact_title: 'CONTACTO', contact_desc: 'Encantados de saber de usted',
    form_name: 'Nombre', form_email: 'Email', form_message: 'Mensaje', form_submit: 'ENVIAR', form_phone: 'Teléfono', form_address: 'Dirección', form_notes: 'Notas',
    footer_rights: 'Todos los derechos reservados.', cart_title: 'Bolsa', cart_total: 'Total', cart_checkout: 'COMPRAR', cart_empty: 'Tu bolsa está vacía',
    order_title: 'Pedido', order_submit: 'CONFIRMAR', toast_added: '¡Añadido!', toast_ordered: '¡Pedido!', toast_contact: '¡Enviado!',
    currency: '$'
  },
  pt: {
    site_name: 'MAISON', nav_home: 'INÍCIO', nav_products: 'COLEÇÃO', nav_about: 'MAISON', nav_contact: 'CONTATO',
    hero_badge: 'OUTONO / INVERNO 2025', hero_title: 'Elegância<br>Atemporal', hero_desc: 'Descubra nossa última coleção — onde artesanato encontra design contemporâneo.',
    hero_cta: 'EXPLORAR', products_title: 'A COLEÇÃO', products_desc: 'Cada peça conta uma história de artesanato e refinamento',
    filter_all: 'Todos', about_title: 'NOSSA MAISON', about_desc: 'Fundada com a visão de redefinir o luxo moderno.',
    feature1_title: 'Peças', feature2_title: 'Países', feature3_title: 'Clientes',
    contact_title: 'CONTATO', contact_desc: 'Ficaríamos felizes em ouvir de você',
    form_name: 'Nome', form_email: 'Email', form_message: 'Mensagem', form_submit: 'ENVIAR', form_phone: 'Telefone', form_address: 'Endereço', form_notes: 'Notas',
    footer_rights: 'Todos os direitos reservados.', cart_title: 'Sacola', cart_total: 'Total', cart_checkout: 'FINALIZAR', cart_empty: 'Sacola vazia',
    order_title: 'Pedido', order_submit: 'CONFIRMAR', toast_added: 'Adicionado!', toast_ordered: 'Pedido feito!', toast_contact: 'Enviado!',
    currency: 'R$'
  },
  ar: {
    site_name: 'ميزون', nav_home: 'الرئيسية', nav_products: 'المجموعة', nav_about: 'البيت', nav_contact: 'اتصل',
    hero_badge: 'خريف / شتاء 2025', hero_title: 'أناقة<br>خالدة', hero_desc: 'اكتشف مجموعتنا الأخيرة — حيث يلتقي الحرف بالتصميم المعاصر.',
    hero_cta: 'استكشف المجموعة', products_title: 'المجموعة', products_desc: 'كل قطعة تروي قصة من الحرفية والرقي',
    filter_all: 'الكل', about_title: 'بيتنا', about_desc: 'تأسست برؤية لإعادة تعريف الفخامة الحديثة.',
    feature1_title: 'قطع', feature2_title: 'دول', feature3_title: 'عملاء',
    contact_title: 'تواصل معنا', contact_desc: 'يسعدنا سماعك',
    form_name: 'الاسم', form_email: 'البريد', form_message: 'الرسالة', form_submit: 'إرسال', form_phone: 'الهاتف', form_address: 'العنوان', form_notes: 'ملاحظات',
    footer_rights: 'جميع الحقوق محفوظة.', cart_title: 'حقيبة التسوق', cart_total: 'المجموع', cart_checkout: 'إتمام الشراء', cart_empty: 'الحقيبة فارغة',
    order_title: 'إتمام الطلب', order_submit: 'تأكيد', toast_added: 'تمت الإضافة!', toast_ordered: 'تم الطلب!', toast_contact: 'تم الإرسال!',
    currency: '$'
  },
  ru: {
    site_name: 'МЕЗОН', nav_home: 'ГЛАВНАЯ', nav_products: 'КОЛЛЕКЦИЯ', nav_about: 'МЕЗОН', nav_contact: 'КОНТАКТЫ',
    hero_badge: 'ОСЕНЬ / ЗИМА 2025', hero_title: 'Вечная<br>Элегантность', hero_desc: 'Откройте нашу последнюю коллекцию — где мастерство встречается с современным дизайном.',
    hero_cta: 'СМОТРЕТЬ', products_title: 'КОЛЛЕКЦИЯ', products_desc: 'Каждое изделие рассказывает историю мастерства и утончённости',
    filter_all: 'Все', about_title: 'НАШ МЕЗОН', about_desc: 'Основан с видением переосмыслить современную роскошь.',
    feature1_title: 'Изделий', feature2_title: 'Стран', feature3_title: 'Клиентов',
    contact_title: 'СВЯЗАТЬСЯ', contact_desc: 'Будем рады услышать вас',
    form_name: 'Имя', form_email: 'Email', form_message: 'Сообщение', form_submit: 'ОТПРАВИТЬ', form_phone: 'Телефон', form_address: 'Адрес', form_notes: 'Заметки',
    footer_rights: 'Все права защищены.', cart_title: 'Сумка', cart_total: 'Итого', cart_checkout: 'ОФОРМИТЬ', cart_empty: 'Сумка пуста',
    order_title: 'Оформление', order_submit: 'ПОДТВЕРДИТЬ', toast_added: 'Добавлено!', toast_ordered: 'Заказ оформлен!', toast_contact: 'Отправлено!',
    currency: '₽'
  }
};

// --- State ---
let currentLang = localStorage.getItem('lang') || 'en';
let cart = JSON.parse(localStorage.getItem('cart') || '[]');
let products = [];
let categories = [];

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLang();
  initNav();
  initCart();
  loadProducts();
  loadCategories();
  initContactForm();
});

function initTheme() {
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  document.getElementById('themeToggle').addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

function initLang() {
  const select = document.getElementById('langSelect');
  select.value = currentLang;
  applyLang(currentLang);
  select.addEventListener('change', (e) => {
    currentLang = e.target.value;
    localStorage.setItem('lang', currentLang);
    applyLang(currentLang);
    renderProducts();
  });
}

function applyLang(lang) {
  const tr = i18n[lang] || i18n.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (tr[key] !== undefined) {
      if (key === 'hero_title') el.innerHTML = tr[key];
      else el.textContent = tr[key];
    }
  });
  document.documentElement.setAttribute('lang', lang);
  if (lang === 'ar') document.documentElement.setAttribute('dir', 'rtl');
  else document.documentElement.removeAttribute('dir');
}

function t(key) {
  const lang = i18n[currentLang] || i18n.en;
  return lang[key] || i18n.en[key] || key;
}

function initNav() {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  toggle.addEventListener('click', () => nav.classList.toggle('active'));
  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    header.style.boxShadow = window.scrollY > 10 ? 'var(--shadow-sm)' : 'none';
  });
  document.querySelectorAll('.nav a').forEach(a => {
    a.addEventListener('click', () => nav.classList.remove('active'));
  });
}

async function loadProducts() {
  try {
    const res = await fetch('/api/products');
    const data = await res.json();
    products = data.products || [];
    renderProducts();
  } catch {
    document.getElementById('productsGrid').innerHTML = '<p style="text-align:center;grid-column:1/-1;color:var(--text-muted)">No products yet.</p>';
  }
}

async function loadCategories() {
  try {
    const res = await fetch('/api/categories');
    const data = await res.json();
    categories = data.categories || [];
    renderCategoryFilter();
  } catch {}
}

function renderCategoryFilter() {
  const container = document.getElementById('categoryFilter');
  container.innerHTML = `<button class="filter-btn active" data-category="all">${t('filter_all')}</button>`;
  categories.forEach(cat => {
    container.innerHTML += `<button class="filter-btn" data-category="${cat.name}">${cat.name}</button>`;
  });
  container.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(btn.dataset.category);
    });
  });
}

function renderProducts(filterCat = 'all') {
  const grid = document.getElementById('productsGrid');
  const filtered = filterCat === 'all' ? products : products.filter(p => p.category === filterCat);
  if (!filtered.length) {
    grid.innerHTML = '<p style="text-align:center;grid-column:1/-1;color:var(--text-muted)">No products found.</p>';
    return;
  }
  grid.innerHTML = filtered.map(p => {
    const images = typeof p.images === 'string' ? JSON.parse(p.images || '[]') : (p.images || []);
    const img = images[0];
    const currency = t('currency');
    return `
    <div class="product-card" data-id="${p.id}">
      <div class="product-image">
        ${img ? `<img src="${img}" alt="${p.name}" loading="lazy">` : '<div class="placeholder">◇</div>'}
        ${p.featured ? '<span class="product-badge">Featured</span>' : ''}
      </div>
      <div class="product-info">
        <div class="product-category">${p.category || ''}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.description || ''}</div>
        <div class="product-bottom">
          <div class="product-price">
            ${currency}${Number(p.price).toFixed(2)}
            ${p.compare_price ? `<span class="compare">${currency}${Number(p.compare_price).toFixed(2)}</span>` : ''}
          </div>
          <button class="add-cart-btn" onclick="addToCart(${p.id})">ADD</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function initCart() {
  document.getElementById('cartBtn').addEventListener('click', () => toggleCart(true));
  document.getElementById('cartClose').addEventListener('click', () => toggleCart(false));
  document.getElementById('cartOverlay').addEventListener('click', () => toggleCart(false));
  document.getElementById('checkoutBtn').addEventListener('click', openOrderModal);
  updateCartCount();
}

function toggleCart(show) {
  document.getElementById('cartDrawer').classList.toggle('active', show);
  document.getElementById('cartOverlay').classList.toggle('active', show);
  if (show) renderCart();
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(item => item.id === productId);
  if (existing) existing.qty++;
  else cart.push({ id: productId, name: product.name, price: product.price, images: product.images, qty: 1 });
  saveCart();
  showToast(t('toast_added'));
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  renderCart();
}

function updateQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) return removeFromCart(productId);
  saveCart();
  renderCart();
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  document.getElementById('cartCount').textContent = cart.reduce((s, i) => s + i.qty, 0);
}

function renderCart() {
  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  const currency = t('currency');
  if (!cart.length) {
    container.innerHTML = `<div class="cart-empty">${t('cart_empty')}</div>`;
    footer.style.display = 'none';
    return;
  }
  container.innerHTML = cart.map(item => {
    const images = typeof item.images === 'string' ? JSON.parse(item.images || '[]') : (item.images || []);
    const img = images[0];
    return `
    <div class="cart-item">
      <div class="cart-item-img">${img ? `<img src="${img}">` : '◇'}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${currency}${Number(item.price).toFixed(2)}</div>
        <div class="cart-item-qty">
          <button onclick="updateQty(${item.id},-1)">−</button>
          <span>${item.qty}</span>
          <button onclick="updateQty(${item.id},1)">+</button>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕ Remove</button>
      </div>
    </div>`;
  }).join('');
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('cartTotal').textContent = `${currency}${total.toFixed(2)}`;
  footer.style.display = 'block';
}

function openOrderModal() {
  toggleCart(false);
  const modal = document.getElementById('orderModal');
  const summary = document.getElementById('orderSummary');
  const currency = t('currency');
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  summary.innerHTML = cart.map(i =>
    `<div style="display:flex;justify-content:space-between;margin-bottom:6px"><span>${i.name} × ${i.qty}</span><span>${currency}${(i.price*i.qty).toFixed(2)}</span></div>`
  ).join('') + `<div style="display:flex;justify-content:space-between;font-weight:600;margin-top:10px;border-top:1px solid var(--border);padding-top:10px"><span>${t('cart_total')}</span><span>${currency}${total.toFixed(2)}</span></div>`;
  modal.classList.add('active');
  document.getElementById('orderForm').onsubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const items = cart.map(i => ({ product_id: i.id, name: i.name, price: i.price, qty: i.qty }));
    try {
      await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_name: fd.get('customer_name'), customer_email: fd.get('customer_email'),
          customer_phone: fd.get('customer_phone'), shipping_address: fd.get('shipping_address'),
          notes: fd.get('notes'), items, total: cart.reduce((s, i) => s + i.price * i.qty, 0)
        })
      });
      cart = []; saveCart();
      modal.classList.remove('active');
      showToast(t('toast_ordered'));
      e.target.reset();
    } catch { alert('Order failed'); }
  };
}

function initContactForm() {
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast(t('toast_contact'));
    e.target.reset();
  });
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}
