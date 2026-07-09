// ============================================================
// Luxury Brand - Frontend App (with Product Detail, Checkout, Payment)
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
    back_to_products: '← Back to Collection', add_to_cart: 'Add to Bag', buy_now: 'Buy Now',
    product_description: 'Description', in_stock: 'In Stock', out_of_stock: 'Out of Stock',
    quantity: 'Qty', subtotal: 'Subtotal',
    checkout_title: 'CHECKOUT', checkout_empty: 'Your bag is empty.', continue_shopping: 'Continue Shopping',
    payment_title: 'Payment', payment_method: 'Payment Method', alipay: 'Alipay',
    scan_qr: 'Scan QR Code with Alipay', order_info: 'Order Information',
    order_no: 'Order #', payment_amount: 'Amount', payment_status: 'Status',
    waiting_payment: 'Waiting for payment...', payment_success: 'Payment Successful!',
    payment_pending: 'Pending', view_order: 'View Order', pay_now: 'Pay Now',
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
    back_to_products: '← 返回臻品', add_to_cart: '加入购物袋', buy_now: '立即购买',
    product_description: '商品描述', in_stock: '有货', out_of_stock: '缺货',
    quantity: '数量', subtotal: '小计',
    checkout_title: '结算', checkout_empty: '购物袋为空', continue_shopping: '继续浏览',
    payment_title: '支付', payment_method: '支付方式', alipay: '支付宝',
    scan_qr: '请使用支付宝扫描二维码', order_info: '订单信息',
    order_no: '订单号', payment_amount: '金额', payment_status: '状态',
    waiting_payment: '等待支付中...', payment_success: '支付成功！',
    payment_pending: '待支付', view_order: '查看订单', pay_now: '去支付',
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
    back_to_products: '← コレクションに戻る', add_to_cart: 'バッグに入れる', buy_now: '今すぐ購入',
    product_description: '商品説明', in_stock: '在庫あり', out_of_stock: '在庫なし',
    quantity: '数量', subtotal: '小計',
    checkout_title: 'レジ', checkout_empty: 'バッグが空です', continue_shopping: '買い物を続ける',
    payment_title: 'お支払い', payment_method: '支払い方法', alipay: 'Alipay',
    scan_qr: 'AlipayでQRコードをスキャン', order_info: '注文情報',
    order_no: '注文番号', payment_amount: '金額', payment_status: 'ステータス',
    waiting_payment: 'お支払い待ち...', payment_success: '支払い完了！',
    payment_pending: '未払い', view_order: '注文を見る', pay_now: '支払う',
    currency: '¥'
  },
  ko: {
    site_name: '메종', nav_home: '홈', nav_products: '컬렉션', nav_about: '메종', nav_contact: '문의',
    hero_badge: '2025 AW 컬렉션', hero_title: '영원한<br>우아함', hero_desc: '최신 컬렉션을 만나보세요 — 장인 정신과 현대 디자인의 만남.',
    hero_cta: '컬렉션 보기', products_title: '컬렉션', products_desc: '각 작품에는 예술성과 정교함의 이야기가 담겨 있습니다',
    filter_all: '전체', about_title: '메종 이야기', about_desc: '현대적 럭셔리를 재정의하는 비전으로 최고의 소재와 장인 기술을 결합합니다.',
    feature1_title: '큐레이션', feature2_title: '진출국', feature3_title: '고객',
    contact_title: '문의하기', contact_desc: '연락을 기다립니다',
    form_name: '이름', form_email: '이메일', form_message: '메시지', form_submit: '보내기', form_phone: '전화', form_address: '배송지', form_notes: '비고',
    footer_rights: '모든 권리 보유.', cart_title: '쇼핑백', cart_total: '합계', cart_checkout: '결제하기', cart_empty: '쇼핑백이 비어있습니다',
    order_title: '주문하기', order_submit: '주문 확인', toast_added: '추가됨!', toast_ordered: '주문 완료!', toast_contact: '전송 완료!',
    back_to_products: '← 컬렉션으로 돌아가기', add_to_cart: '쇼핑백 추가', buy_now: '바로 구매',
    product_description: '상품 설명', in_stock: '재고 있음', out_of_stock: '품절',
    quantity: '수량', subtotal: '소계',
    checkout_title: '결제', checkout_empty: '쇼핑백이 비어있습니다', continue_shopping: '쇼핑 계속하기',
    payment_title: '결제', payment_method: '결제 수단', alipay: 'Alipay',
    scan_qr: 'Alipay로 QR코드 스캔', order_info: '주문 정보',
    order_no: '주문번호', payment_amount: '금액', payment_status: '상태',
    waiting_payment: '결제 대기중...', payment_success: '결제 완료!',
    payment_pending: '미결제', view_order: '주문 보기', pay_now: '결제하기',
    currency: '₩'
  },
  fr: {
    site_name: 'MAISON', nav_home: 'ACCUEIL', nav_products: 'COLLECTION', nav_about: 'MAISON', nav_contact: 'CONTACT',
    hero_badge: 'AUTOMNE / HIVER 2025', hero_title: 'Élégance<br>Intemporelle', hero_desc: 'Découvrez notre dernière collection.',
    hero_cta: 'EXPLORER', products_title: 'LA COLLECTION', products_desc: 'Chaque pièce raconte une histoire d\'artisanat et de raffinement',
    filter_all: 'Tout', about_title: 'NOTRE MAISON', about_desc: 'Fondée avec une vision de redéfinir le luxe moderne.',
    feature1_title: 'Pièces', feature2_title: 'Pays', feature3_title: 'Clients',
    contact_title: 'CONTACTEZ-NOUS', contact_desc: 'Nous serions ravis de vous entendre',
    form_name: 'Nom', form_email: 'Email', form_message: 'Message', form_submit: 'ENVOYER', form_phone: 'Téléphone', form_address: 'Adresse', form_notes: 'Notes',
    footer_rights: 'Tous droits réservés.', cart_title: 'Panier', cart_total: 'Total', cart_checkout: 'COMMANDER', cart_empty: 'Votre panier est vide',
    order_title: 'Finaliser', order_submit: 'COMMANDER', toast_added: 'Ajouté!', toast_ordered: 'Commandé!', toast_contact: 'Envoyé!',
    back_to_products: '← Retour', add_to_cart: 'Ajouter', buy_now: 'Acheter',
    product_description: 'Description', in_stock: 'En stock', out_of_stock: 'Épuisé',
    quantity: 'Qté', subtotal: 'Sous-total',
    checkout_title: 'PAIEMENT', checkout_empty: 'Panier vide', continue_shopping: 'Continuer',
    payment_title: 'Paiement', payment_method: 'Méthode', alipay: 'Alipay',
    scan_qr: 'Scannez avec Alipay', order_info: 'Commande',
    order_no: 'Commande #', payment_amount: 'Montant', payment_status: 'Statut',
    waiting_payment: 'En attente...', payment_success: 'Payé!',
    payment_pending: 'En attente', view_order: 'Voir', pay_now: 'Payer',
    currency: '€'
  },
  de: {
    site_name: 'MAISON', nav_home: 'STARTSEITE', nav_products: 'KOLLEKTION', nav_about: 'MAISON', nav_contact: 'KONTAKT',
    hero_badge: 'HERBST / WINTER 2025', hero_title: 'Zeitlose<br>Eleganz', hero_desc: 'Entdecken Sie unsere neueste Kollektion.',
    hero_cta: 'ENTDECKEN', products_title: 'DIE KOLLEKTION', products_desc: 'Jedes Stück erzählt eine Geschichte',
    filter_all: 'Alle', about_title: 'UNSERE MAISON', about_desc: 'Gegründet mit der Vision, modernen Luxus neu zu definieren.',
    feature1_title: 'Stücke', feature2_title: 'Länder', feature3_title: 'Kunden',
    contact_title: 'KONTAKT', contact_desc: 'Wir freuen uns von Ihnen zu hören',
    form_name: 'Name', form_email: 'E-Mail', form_message: 'Nachricht', form_submit: 'SENDEN', form_phone: 'Telefon', form_address: 'Adresse', form_notes: 'Notizen',
    footer_rights: 'Alle Rechte vorbehalten.', cart_title: 'Einkaufstasche', cart_total: 'Gesamt', cart_checkout: 'BESTELLEN', cart_empty: 'Ihre Tasche ist leer',
    order_title: 'Bestellung', order_submit: 'BESTÄTIGEN', toast_added: 'Hinzugefügt!', toast_ordered: 'Bestellt!', toast_contact: 'Gesendet!',
    back_to_products: '← Zurück', add_to_cart: 'In den Warenkorb', buy_now: 'Kaufen',
    product_description: 'Beschreibung', in_stock: 'Auf Lager', out_of_stock: 'Ausverkauft',
    quantity: 'Menge', subtotal: 'Zwischensumme',
    checkout_title: 'KASSE', checkout_empty: 'Tasche leer', continue_shopping: 'Weiter',
    payment_title: 'Zahlung', payment_method: 'Zahlungsart', alipay: 'Alipay',
    scan_qr: 'Mit Alipay scannen', order_info: 'Bestellung',
    order_no: 'Bestellung #', payment_amount: 'Betrag', payment_status: 'Status',
    waiting_payment: 'Warte...', payment_success: 'Bezahlt!',
    payment_pending: 'Ausstehend', view_order: 'Ansehen', pay_now: 'Bezahlen',
    currency: '€'
  },
  es: {
    site_name: 'MAISON', nav_home: 'INICIO', nav_products: 'COLECCIÓN', nav_about: 'MAISON', nav_contact: 'CONTACTO',
    hero_badge: 'OTOÑO / INVIERNO 2025', hero_title: 'Elegancia<br>Atemporal', hero_desc: 'Descubra nuestra última colección.',
    hero_cta: 'EXPLORAR', products_title: 'LA COLECCIÓN', products_desc: 'Cada pieza cuenta una historia',
    filter_all: 'Todo', about_title: 'NUESTRA MAISON', about_desc: 'Fundada con la visión de redefinir el lujo moderno.',
    feature1_title: 'Piezas', feature2_title: 'Países', feature3_title: 'Clientes',
    contact_title: 'CONTACTO', contact_desc: 'Encantados de saber de usted',
    form_name: 'Nombre', form_email: 'Email', form_message: 'Mensaje', form_submit: 'ENVIAR', form_phone: 'Teléfono', form_address: 'Dirección', form_notes: 'Notas',
    footer_rights: 'Todos los derechos reservados.', cart_title: 'Bolsa', cart_total: 'Total', cart_checkout: 'COMPRAR', cart_empty: 'Tu bolsa está vacía',
    order_title: 'Pedido', order_submit: 'CONFIRMAR', toast_added: '¡Añadido!', toast_ordered: '¡Pedido!', toast_contact: '¡Enviado!',
    back_to_products: '← Volver', add_to_cart: 'Añadir', buy_now: 'Comprar',
    product_description: 'Descripción', in_stock: 'En stock', out_of_stock: 'Agotado',
    quantity: 'Cant.', subtotal: 'Subtotal',
    checkout_title: 'PAGO', checkout_empty: 'Bolsa vacía', continue_shopping: 'Seguir',
    payment_title: 'Pago', payment_method: 'Método', alipay: 'Alipay',
    scan_qr: 'Escanear con Alipay', order_info: 'Pedido',
    order_no: 'Pedido #', payment_amount: 'Monto', payment_status: 'Estado',
    waiting_payment: 'Esperando...', payment_success: '¡Pagado!',
    payment_pending: 'Pendiente', view_order: 'Ver', pay_now: 'Pagar',
    currency: '$'
  },
  pt: {
    site_name: 'MAISON', nav_home: 'INÍCIO', nav_products: 'COLEÇÃO', nav_about: 'MAISON', nav_contact: 'CONTATO',
    hero_badge: 'OUTONO / INVERNO 2025', hero_title: 'Elegância<br>Atemporal', hero_desc: 'Descubra nossa última coleção.',
    hero_cta: 'EXPLORAR', products_title: 'A COLEÇÃO', products_desc: 'Cada peça conta uma história',
    filter_all: 'Todos', about_title: 'NOSSA MAISON', about_desc: 'Fundada com a visão de redefinir o luxo moderno.',
    feature1_title: 'Peças', feature2_title: 'Países', feature3_title: 'Clientes',
    contact_title: 'CONTATO', contact_desc: 'Ficaríamos felizes em ouvir de você',
    form_name: 'Nome', form_email: 'Email', form_message: 'Mensagem', form_submit: 'ENVIAR', form_phone: 'Telefone', form_address: 'Endereço', form_notes: 'Notas',
    footer_rights: 'Todos os direitos reservados.', cart_title: 'Sacola', cart_total: 'Total', cart_checkout: 'FINALIZAR', cart_empty: 'Sacola vazia',
    order_title: 'Pedido', order_submit: 'CONFIRMAR', toast_added: 'Adicionado!', toast_ordered: 'Pedido feito!', toast_contact: 'Enviado!',
    back_to_products: '← Voltar', add_to_cart: 'Adicionar', buy_now: 'Comprar',
    product_description: 'Descrição', in_stock: 'Em estoque', out_of_stock: 'Esgotado',
    quantity: 'Qtd', subtotal: 'Subtotal',
    checkout_title: 'PAGAMENTO', checkout_empty: 'Sacola vazia', continue_shopping: 'Continuar',
    payment_title: 'Pagamento', payment_method: 'Método', alipay: 'Alipay',
    scan_qr: 'Escanear com Alipay', order_info: 'Pedido',
    order_no: 'Pedido #', payment_amount: 'Valor', payment_status: 'Status',
    waiting_payment: 'Aguardando...', payment_success: 'Pago!',
    payment_pending: 'Pendente', view_order: 'Ver', pay_now: 'Pagar',
    currency: 'R$'
  },
  ar: {
    site_name: 'ميزون', nav_home: 'الرئيسية', nav_products: 'المجموعة', nav_about: 'البيت', nav_contact: 'اتصل',
    hero_badge: 'خريف / شتاء 2025', hero_title: 'أناقة<br>خالدة', hero_desc: 'اكتشف مجموعتنا الأخيرة.',
    hero_cta: 'استكشف المجموعة', products_title: 'المجموعة', products_desc: 'كل قطعة تروي قصة',
    filter_all: 'الكل', about_title: 'بيتنا', about_desc: 'تأسست برؤية لإعادة تعريف الفخامة الحديثة.',
    feature1_title: 'قطع', feature2_title: 'دول', feature3_title: 'عملاء',
    contact_title: 'تواصل معنا', contact_desc: 'يسعدنا سماعك',
    form_name: 'الاسم', form_email: 'البريد', form_message: 'الرسالة', form_submit: 'إرسال', form_phone: 'الهاتف', form_address: 'العنوان', form_notes: 'ملاحظات',
    footer_rights: 'جميع الحقوق محفوظة.', cart_title: 'حقيبة التسوق', cart_total: 'المجموع', cart_checkout: 'إتمام الشراء', cart_empty: 'الحقيبة فارغة',
    order_title: 'إتمام الطلب', order_submit: 'تأكيد', toast_added: 'تمت الإضافة!', toast_ordered: 'تم الطلب!', toast_contact: 'تم الإرسال!',
    back_to_products: '← العودة', add_to_cart: 'أضف للحقيبة', buy_now: 'اشترِ الآن',
    product_description: 'الوصف', in_stock: 'متوفر', out_of_stock: 'غير متوفر',
    quantity: 'الكمية', subtotal: 'المجموع الفرعي',
    checkout_title: 'الدفع', checkout_empty: 'الحقيبة فارغة', continue_shopping: 'متابعة',
    payment_title: 'الدفع', payment_method: 'طريقة الدفع', alipay: 'Alipay',
    scan_qr: 'امسح بـ Alipay', order_info: 'معلومات الطلب',
    order_no: 'رقم الطلب', payment_amount: 'المبلغ', payment_status: 'الحالة',
    waiting_payment: 'في انتظار الدفع...', payment_success: 'تم الدفع!',
    payment_pending: 'قيد الانتظار', view_order: 'عرض', pay_now: 'ادفع',
    currency: '$'
  },
  ru: {
    site_name: 'МЕЗОН', nav_home: 'ГЛАВНАЯ', nav_products: 'КОЛЛЕКЦИЯ', nav_about: 'МЕЗОН', nav_contact: 'КОНТАКТЫ',
    hero_badge: 'ОСЕНЬ / ЗИМА 2025', hero_title: 'Вечная<br>Элегантность', hero_desc: 'Откройте нашу последнюю коллекцию.',
    hero_cta: 'СМОТРЕТЬ', products_title: 'КОЛЛЕКЦИЯ', products_desc: 'Каждое изделие рассказывает историю',
    filter_all: 'Все', about_title: 'НАШ МЕЗОН', about_desc: 'Основан с видением переосмыслить современную роскошь.',
    feature1_title: 'Изделий', feature2_title: 'Стран', feature3_title: 'Клиентов',
    contact_title: 'СВЯЗАТЬСЯ', contact_desc: 'Будем рады услышать вас',
    form_name: 'Имя', form_email: 'Email', form_message: 'Сообщение', form_submit: 'ОТПРАВИТЬ', form_phone: 'Телефон', form_address: 'Адрес', form_notes: 'Заметки',
    footer_rights: 'Все права защищены.', cart_title: 'Сумка', cart_total: 'Итого', cart_checkout: 'ОФОРМИТЬ', cart_empty: 'Сумка пуста',
    order_title: 'Оформление', order_submit: 'ПОДТВЕРДИТЬ', toast_added: 'Добавлено!', toast_ordered: 'Заказ оформлен!', toast_contact: 'Отправлено!',
    back_to_products: '← Назад', add_to_cart: 'В сумку', buy_now: 'Купить',
    product_description: 'Описание', in_stock: 'В наличии', out_of_stock: 'Нет в наличии',
    quantity: 'Кол-во', subtotal: 'Подитог',
    checkout_title: 'ОФОРМЛЕНИЕ', checkout_empty: 'Сумка пуста', continue_shopping: 'Продолжить',
    payment_title: 'Оплата', payment_method: 'Способ оплаты', alipay: 'Alipay',
    scan_qr: 'Сканируйте через Alipay', order_info: 'Заказ',
    order_no: 'Заказ #', payment_amount: 'Сумма', payment_status: 'Статус',
    waiting_payment: 'Ожидание...', payment_success: 'Оплачено!',
    payment_pending: 'Ожидание', view_order: 'Смотреть', pay_now: 'Оплатить',
    currency: '₽'
  }
};

// --- State ---
let currentLang = localStorage.getItem('lang') || 'en';
let cart = JSON.parse(localStorage.getItem('cart') || '[]');
let products = [];
let categories = [];
let siteSettings = {};

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLang();
  initNav();
  initCart();
  loadSiteSettings();
  loadProducts();
  loadCategories();
  initContactForm();
  initCheckoutForm();
  initHashRouting();
});

// --- Hash Routing ---
function initHashRouting() {
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}

function handleRoute() {
  const hash = window.location.hash || '#home';
  const parts = hash.substring(1).split('/');
  const view = parts[0];
  const param = parts[1];

  document.getElementById('view-home').style.display = 'none';
  document.getElementById('view-product').style.display = 'none';
  document.getElementById('view-checkout').style.display = 'none';
  document.getElementById('view-payment').style.display = 'none';

  if (view === 'product' && param) {
    document.getElementById('view-product').style.display = 'block';
    loadProductDetail(param);
  } else if (view === 'checkout') {
    document.getElementById('view-checkout').style.display = 'block';
    renderCheckoutPage();
  } else if (view === 'payment' && param) {
    document.getElementById('view-payment').style.display = 'block';
    loadPaymentPage(param);
  } else {
    document.getElementById('view-home').style.display = 'block';
  }

  document.querySelectorAll('.nav a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === hash);
  });

  window.scrollTo(0, 0);
}

// --- Site Settings ---
async function loadSiteSettings() {
  try {
    const res = await fetch('/api/settings');
    const data = await res.json();
    siteSettings = data.settings || {};
    if (siteSettings.site_logo) {
      const logoEl = document.getElementById('siteLogo');
      logoEl.innerHTML = `<img src="${siteSettings.site_logo}" alt="logo" style="max-height:40px;max-width:180px">`;
    }
    if (siteSettings.site_favicon) {
      let link = document.querySelector("link[rel~='icon']");
      if (!link) { link = document.createElement('link'); link.rel = 'icon'; document.head.appendChild(link); }
      link.href = siteSettings.site_favicon;
    }
  } catch {}
}

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
    handleRoute();
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
    <div class="product-card" data-id="${p.id}" onclick="window.location.hash='product/${p.id}'">
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
          <button class="add-cart-btn" onclick="event.stopPropagation();addToCart(${p.id})">ADD</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

// --- Product Detail ---
async function loadProductDetail(id) {
  const container = document.getElementById('productDetail');
  container.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
  try {
    const res = await fetch(`/api/products/${id}`);
    const data = await res.json();
    const p = data.product;
    if (!p) { container.innerHTML = '<p>Product not found.</p>'; return; }

    const images = typeof p.images === 'string' ? JSON.parse(p.images || '[]') : (p.images || []);
    const currency = t('currency');
    const mainImg = images[0];
    const inStock = p.stock > 0;

    container.innerHTML = `
      <a href="#collection" class="back-link">${t('back_to_products')}</a>
      <div class="pd-grid">
        <div class="pd-images">
          <div class="pd-main-img">
            ${mainImg ? `<img src="${mainImg}" alt="${p.name}" id="pdMainImg">` : '<div class="placeholder" style="height:500px;font-size:4rem">◇</div>'}
          </div>
          ${images.length > 1 ? `<div class="pd-thumbs">${images.map((img, i) => `<img src="${img}" class="pd-thumb ${i===0?'active':''}" onclick="document.getElementById('pdMainImg').src='${img}';document.querySelectorAll('.pd-thumb').forEach(t=>t.classList.remove('active'));this.classList.add('active')">`).join('')}</div>` : ''}
        </div>
        <div class="pd-info">
          <div class="pd-category">${p.category || ''}</div>
          <h1 class="pd-name">${p.name}</h1>
          <div class="pd-price">
            <span class="pd-current">${currency}${Number(p.price).toFixed(2)}</span>
            ${p.compare_price ? `<span class="pd-compare">${currency}${Number(p.compare_price).toFixed(2)}</span>` : ''}
          </div>
          <div class="pd-stock ${inStock ? 'in-stock' : 'out-stock'}">
            ${inStock ? `✓ ${t('in_stock')} (${p.stock})` : `✕ ${t('out_of_stock')}`}
          </div>
          <div class="pd-desc">
            <h3>${t('product_description')}</h3>
            <div class="pd-desc-content">${p.description || '—'}</div>
          </div>
          <div class="pd-actions">
            <div class="pd-qty">
              <label>${t('quantity')}</label>
              <div class="qty-control">
                <button onclick="pdUpdateQty(-1)">−</button>
                <span id="pdQty">1</span>
                <button onclick="pdUpdateQty(1)">+</button>
              </div>
            </div>
            <button class="btn pd-add-btn" onclick="addToCartQty(${p.id})" ${!inStock?'disabled':''}>${t('add_to_cart')}</button>
            <button class="btn pd-buy-btn" onclick="buyNow(${p.id})" ${!inStock?'disabled':''}>${t('buy_now')}</button>
          </div>
        </div>
      </div>`;
    window._pdQty = 1;
    window._pdProduct = p;
  } catch { container.innerHTML = '<p>Failed to load product.</p>'; }
}

function pdUpdateQty(delta) {
  window._pdQty = Math.max(1, (window._pdQty || 1) + delta);
  document.getElementById('pdQty').textContent = window._pdQty;
}

function addToCartQty(productId) {
  const product = products.find(p => p.id === productId) || window._pdProduct;
  if (!product) return;
  const qty = window._pdQty || 1;
  const existing = cart.find(item => item.id === productId);
  if (existing) existing.qty += qty;
  else cart.push({ id: productId, name: product.name, price: product.price, images: product.images, qty });
  saveCart();
  showToast(t('toast_added'));
}

function buyNow(productId) {
  addToCartQty(productId);
  window.location.hash = 'checkout';
}

// --- Checkout ---
function renderCheckoutPage() {
  const itemsContainer = document.getElementById('checkoutItems');
  const summaryContainer = document.getElementById('checkoutSummary');
  const currency = t('currency');
  if (!cart.length) {
    itemsContainer.innerHTML = `<div class="checkout-empty"><p>${t('checkout_empty')}</p><a href="#collection" class="btn">${t('continue_shopping')}</a></div>`;
    summaryContainer.innerHTML = '';
    return;
  }
  itemsContainer.innerHTML = cart.map(item => {
    const images = typeof item.images === 'string' ? JSON.parse(item.images || '[]') : (item.images || []);
    const img = images[0];
    return `
    <div class="checkout-item">
      <div class="checkout-item-img">${img ? `<img src="${img}">` : '◇'}</div>
      <div class="checkout-item-info">
        <div class="checkout-item-name">${item.name}</div>
        <div class="checkout-item-price">${currency}${Number(item.price).toFixed(2)} × ${item.qty}</div>
      </div>
      <div class="checkout-item-subtotal">${currency}${(item.price * item.qty).toFixed(2)}</div>
    </div>`;
  }).join('');
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  summaryContainer.innerHTML = `<div class="checkout-total-row"><span>${t('cart_total')}</span><span class="checkout-total-amount">${currency}${total.toFixed(2)}</span></div>`;
}

function initCheckoutForm() {
  document.getElementById('checkoutForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const items = cart.map(i => ({ product_id: i.id, name: i.name, price: i.price, qty: i.qty }));
    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
    try {
      const res = await fetch('/api/orders', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_name: fd.get('customer_name'), customer_email: fd.get('customer_email'),
          customer_phone: fd.get('customer_phone'), shipping_address: fd.get('shipping_address'),
          notes: fd.get('notes'), items, total
        })
      });
      const data = await res.json();
      if (data.order_no) { cart = []; saveCart(); window.location.hash = `payment/${data.order_no}`; }
    } catch { alert('Order failed'); }
  });
}

// --- Payment ---
async function loadPaymentPage(orderNo) {
  const container = document.getElementById('paymentPage');
  container.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
  try {
    const settingsRes = await fetch('/api/settings');
    const settingsData = await settingsRes.json();
    const settings = settingsData.settings || {};
    const queryRes = await fetch(`/api/payment/alipay/query?order_no=${orderNo}`);
    const queryData = await queryRes.json();
    const currency = t('currency');

    if (queryData.trade_status === 'TRADE_SUCCESS') {
      container.innerHTML = `<div class="payment-success-box"><div class="payment-icon">✅</div><h2>${t('payment_success')}</h2><p>${t('order_no')}: <strong>${orderNo}</strong></p><p>${t('payment_amount')}: <strong>${currency}${queryData.total_amount}</strong></p><a href="#home" class="btn" style="margin-top:20px">${t('nav_home')}</a></div>`;
      return;
    }

    if (settings.alipay_enabled === '1') {
      const createRes = await fetch('/api/payment/alipay/create', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ order_no: orderNo, total: parseFloat(queryData.total_amount), subject: `Order ${orderNo}` })
      });
      const createData = await createRes.json();
      if (createData.success && createData.payment) {
        container.innerHTML = `
          <div class="payment-box">
            <h2>${t('payment_title')}</h2>
            <div class="payment-grid">
              <div class="payment-qr">
                <div class="qr-code-area"><div class="qr-placeholder"><div class="qr-icon">📱</div><p>${t('scan_qr')}</p><div class="qr-code-text">${createData.payment.qr_code}</div></div></div>
                <div class="payment-method-label"><span class="alipay-icon">💙</span> ${t('alipay')}</div>
              </div>
              <div class="payment-info">
                <h3>${t('order_info')}</h3>
                <div class="payment-detail-row"><span>${t('order_no')}</span><strong>${orderNo}</strong></div>
                <div class="payment-detail-row"><span>${t('payment_amount')}</span><strong class="payment-amount">${currency}${createData.payment.total_amount}</strong></div>
                <div class="payment-detail-row"><span>${t('payment_status')}</span><span class="badge-pending">${t('waiting_payment')}</span></div>
                <p class="payment-note">${t('scan_qr')}</p>
                <button class="btn btn-full" onclick="checkPaymentStatus('${orderNo}')">${t('pay_now')} - ${currency}${createData.payment.total_amount}</button>
              </div>
            </div>
          </div>`;
        window._paymentCheckInterval = setInterval(() => checkPaymentStatus(orderNo), 5000);
        return;
      }
    }

    container.innerHTML = `<div class="payment-box"><h2>${t('payment_title')}</h2><div class="payment-info-simple"><div class="payment-detail-row"><span>${t('order_no')}</span><strong>${orderNo}</strong></div><div class="payment-detail-row"><span>${t('payment_amount')}</span><strong>${currency}${queryData.total_amount}</strong></div><div class="payment-detail-row"><span>${t('payment_status')}</span><span class="badge-pending">${t('payment_pending')}</span></div><p style="margin-top:20px;color:var(--text-muted)">Payment method not configured.</p></div></div>`;
  } catch { container.innerHTML = '<p>Failed to load payment page.</p>'; }
}

async function checkPaymentStatus(orderNo) {
  try {
    const res = await fetch(`/api/payment/alipay/query?order_no=${orderNo}`);
    const data = await res.json();
    if (data.trade_status === 'TRADE_SUCCESS') {
      if (window._paymentCheckInterval) clearInterval(window._paymentCheckInterval);
      const currency = t('currency');
      document.getElementById('paymentPage').innerHTML = `<div class="payment-success-box"><div class="payment-icon">✅</div><h2>${t('payment_success')}</h2><p>${t('order_no')}: <strong>${orderNo}</strong></p><p>${t('payment_amount')}: <strong>${currency}${data.total_amount}</strong></p><a href="#home" class="btn" style="margin-top:20px">${t('nav_home')}</a></div>`;
    }
  } catch {}
}

// --- Cart ---
function initCart() {
  document.getElementById('cartBtn').addEventListener('click', () => toggleCart(true));
  document.getElementById('cartClose').addEventListener('click', () => toggleCart(false));
  document.getElementById('cartOverlay').addEventListener('click', () => toggleCart(false));
  document.getElementById('checkoutBtn').addEventListener('click', () => { toggleCart(false); window.location.hash = 'checkout'; });
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
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  summary.innerHTML = cart.map(i =>
    `<div style="display:flex;justify-content:space-between;margin-bottom:6px"><span>${i.name} × ${i.qty}</span><span>${currency}${(i.price*i.qty).toFixed(2)}</span></div>`
  ).join('') + `<div style="display:flex;justify-content:space-between;font-weight:600;margin-top:10px;border-top:1px solid var(--border);padding-top:10px"><span>${t('cart_total')}</span><span>${currency}${total.toFixed(2)}</span></div>`;
  modal.classList.add('active');
  document.getElementById('orderForm').onsubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const items = cart.map(i => ({ product_id: i.id, name: i.name, price: i.price, qty: i.qty }));
    try {
      const res = await fetch('/api/orders', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_name: fd.get('customer_name'), customer_email: fd.get('customer_email'),
          customer_phone: fd.get('customer_phone'), shipping_address: fd.get('shipping_address'),
          notes: fd.get('notes'), items, total: cart.reduce((s, i) => s + i.price * i.qty, 0)
        })
      });
      const data = await res.json();
      cart = []; saveCart();
      modal.classList.remove('active');
      if (data.order_no) window.location.hash = `payment/${data.order_no}`;
      else showToast(t('toast_ordered'));
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
