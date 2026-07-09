// ============================================================
// Modern Store - Frontend App (with Product Detail, Checkout, Payment)
// ============================================================

// --- i18n Translations ---
const i18n = {
  en: {
    site_name: 'ModernStore', nav_home: 'Home', nav_products: 'Products', nav_about: 'About', nav_contact: 'Contact',
    hero_badge: '✨ New Collection 2025', hero_title: 'Discover Your Style', hero_desc: 'Curated products for the modern lifestyle. Quality meets design.',
    hero_cta: 'Shop Now', hero_learn: 'Learn More', products_title: 'Our Products', products_desc: 'Handpicked items for quality and style',
    filter_all: 'All', about_title: 'About Us', about_desc: 'We believe in quality, simplicity, and modern design. Our products are carefully curated to bring you the best experience.',
    feature1_title: 'Fast Shipping', feature1_desc: 'Free delivery on orders over $50', feature2_title: 'Quality Guarantee', feature2_desc: '30-day money back guarantee',
    feature3_title: '24/7 Support', feature3_desc: 'Always here to help you', contact_title: 'Get In Touch', contact_desc: "We'd love to hear from you",
    form_name: 'Name', form_email: 'Email', form_message: 'Message', form_submit: 'Send Message', form_phone: 'Phone', form_address: 'Shipping Address', form_notes: 'Notes',
    footer_rights: 'All rights reserved.', cart_title: 'Shopping Cart', cart_total: 'Total', cart_checkout: 'Checkout', cart_empty: 'Your cart is empty',
    order_title: 'Place Order', order_submit: 'Confirm Order', toast_added: 'Added to cart!', toast_ordered: 'Order placed! Thank you.', toast_contact: 'Message sent!',
    // Product detail
    back_to_products: '← Back to Products', add_to_cart: 'Add to Cart', buy_now: 'Buy Now',
    product_description: 'Description', in_stock: 'In Stock', out_of_stock: 'Out of Stock',
    quantity: 'Quantity', subtotal: 'Subtotal',
    // Checkout
    checkout_title: 'Checkout', checkout_empty: 'Your cart is empty. Add some products first!',
    continue_shopping: 'Continue Shopping',
    // Payment
    payment_title: 'Payment', payment_method: 'Payment Method', alipay: 'Alipay',
    scan_qr: 'Scan QR Code with Alipay', order_info: 'Order Information',
    order_no: 'Order #', payment_amount: 'Amount', payment_status: 'Status',
    waiting_payment: 'Waiting for payment...', payment_success: 'Payment Successful!',
    payment_pending: 'Pending', view_order: 'View Order', pay_now: 'Pay Now',
    currency: '$'
  },
  zh: {
    site_name: '现代商城', nav_home: '首页', nav_products: '商品', nav_about: '关于', nav_contact: '联系',
    hero_badge: '✨ 2025 新品上市', hero_title: '发现你的风格', hero_desc: '为现代生活方式精心策划的商品，品质与设计的完美结合。',
    hero_cta: '立即购买', hero_learn: '了解更多', products_title: '精选商品', products_desc: '为品质与风格精心挑选',
    filter_all: '全部', about_title: '关于我们', about_desc: '我们崇尚品质、简约和现代设计。每件商品都经过精心策划，为您带来最佳体验。',
    feature1_title: '快速配送', feature1_desc: '满50元免费送货', feature2_title: '品质保证', feature2_desc: '30天无理由退换',
    feature3_title: '全天客服', feature3_desc: '随时为您服务', contact_title: '联系我们', contact_desc: '期待收到您的来信',
    form_name: '姓名', form_email: '邮箱', form_message: '留言', form_submit: '发送', form_phone: '电话', form_address: '收货地址', form_notes: '备注',
    footer_rights: '保留所有权利。', cart_title: '购物车', cart_total: '合计', cart_checkout: '去结算', cart_empty: '购物车是空的',
    order_title: '提交订单', order_submit: '确认下单', toast_added: '已加入购物车！', toast_ordered: '订单已提交，感谢！', toast_contact: '消息已发送！',
    back_to_products: '← 返回商品', add_to_cart: '加入购物车', buy_now: '立即购买',
    product_description: '商品描述', in_stock: '有货', out_of_stock: '缺货',
    quantity: '数量', subtotal: '小计',
    checkout_title: '结算', checkout_empty: '购物车为空，请先添加商品！', continue_shopping: '继续购物',
    payment_title: '支付', payment_method: '支付方式', alipay: '支付宝',
    scan_qr: '请使用支付宝扫描二维码', order_info: '订单信息',
    order_no: '订单号', payment_amount: '金额', payment_status: '状态',
    waiting_payment: '等待支付中...', payment_success: '支付成功！',
    payment_pending: '待支付', view_order: '查看订单', pay_now: '去支付',
    currency: '¥'
  },
  ja: {
    site_name: 'モダンストア', nav_home: 'ホーム', nav_products: '商品', nav_about: '概要', nav_contact: 'お問合せ',
    hero_badge: '✨ 2025 新コレクション', hero_title: 'あなたのスタイルを見つけよう', hero_desc: 'モダンライフスタイルのためにキュレーションされた商品。',
    hero_cta: '今すぐ購入', hero_learn: '詳しく見る', products_title: '商品一覧', products_desc: '品質とスタイルのために厳選',
    filter_all: 'すべて', about_title: '私たちについて', about_desc: '品質、シンプルさ、モダンデザインを大切にしています。',
    feature1_title: '迅速配送', feature1_desc: '50ドル以上送料無料', feature2_title: '品質保証', feature2_desc: '30日間返品可能',
    feature3_title: '24時間対応', feature3_desc: 'いつでもお手伝いします', contact_title: 'お問い合わせ', contact_desc: 'ご連絡をお待ちしています',
    form_name: '名前', form_email: 'メール', form_message: 'メッセージ', form_submit: '送信', form_phone: '電話', form_address: '配送先', form_notes: '備考',
    footer_rights: '全著作権所有。', cart_title: 'カート', cart_total: '合計', cart_checkout: '購入する', cart_empty: 'カートは空です',
    order_title: '注文する', order_submit: '注文確認', toast_added: 'カートに追加！', toast_ordered: '注文完了！', toast_contact: '送信完了！',
    back_to_products: '← 商品一覧へ戻る', add_to_cart: 'カートに入れる', buy_now: '今すぐ購入',
    product_description: '商品説明', in_stock: '在庫あり', out_of_stock: '在庫なし',
    quantity: '数量', subtotal: '小計',
    checkout_title: 'レジ', checkout_empty: 'カートが空です', continue_shopping: '買い物を続ける',
    payment_title: 'お支払い', payment_method: '支払い方法', alipay: 'Alipay',
    scan_qr: 'AlipayでQRコードをスキャン', order_info: '注文情報',
    order_no: '注文番号', payment_amount: '金額', payment_status: 'ステータス',
    waiting_payment: 'お支払い待ち...', payment_success: '支払い完了！',
    payment_pending: '未払い', view_order: '注文を見る', pay_now: '支払う',
    currency: '¥'
  },
  ko: {
    site_name: '모던스토어', nav_home: '홈', nav_products: '상품', nav_about: '소개', nav_contact: '문의',
    hero_badge: '✨ 2025 신상품', hero_title: '당신의 스타일을 발견하세요', hero_desc: '현대적인 라이프스타일을 위한 큐레이션 상품.',
    hero_cta: '쇼핑하기', hero_learn: '자세히 보기', products_title: '상품 목록', products_desc: '품질과 스타일을 위해 엄선',
    filter_all: '전체', about_title: '소개', about_desc: '품질, 심플함, 모던 디자인을 추구합니다.',
    feature1_title: '빠른 배송', feature1_desc: '50달러 이상 무료배송', feature2_title: '품질 보증', feature2_desc: '30일 환불 보장',
    feature3_title: '24시간 지원', feature3_desc: '언제든지 도와드립니다', contact_title: '문의하기', contact_desc: '연락을 기다립니다',
    form_name: '이름', form_email: '이메일', form_message: '메시지', form_submit: '보내기', form_phone: '전화', form_address: '배송지', form_notes: '비고',
    footer_rights: '모든 권리 보유.', cart_title: '장바구니', cart_total: '합계', cart_checkout: '결제하기', cart_empty: '장바구니가 비어있습니다',
    order_title: '주문하기', order_submit: '주문 확인', toast_added: '장바구니 추가!', toast_ordered: '주문 완료!', toast_contact: '전송 완료!',
    back_to_products: '← 상품 목록으로', add_to_cart: '장바구니 추가', buy_now: '바로 구매',
    product_description: '상품 설명', in_stock: '재고 있음', out_of_stock: '품절',
    quantity: '수량', subtotal: '소계',
    checkout_title: '결제', checkout_empty: '장바구니가 비어있습니다', continue_shopping: '쇼핑 계속하기',
    payment_title: '결제', payment_method: '결제 수단', alipay: 'Alipay',
    scan_qr: 'Alipay로 QR코드 스캔', order_info: '주문 정보',
    order_no: '주문번호', payment_amount: '금액', payment_status: '상태',
    waiting_payment: '결제 대기중...', payment_success: '결제 완료!',
    payment_pending: '미결제', view_order: '주문 보기', pay_now: '결제하기',
    currency: '₩'
  },
  fr: {
    site_name: 'Store Moderne', nav_home: 'Accueil', nav_products: 'Produits', nav_about: 'À propos', nav_contact: 'Contact',
    hero_badge: '✨ Nouvelle Collection 2025', hero_title: 'Découvrez Votre Style', hero_desc: 'Produits sélectionnés pour le mode de vie moderne.',
    hero_cta: 'Acheter', hero_learn: 'En savoir plus', products_title: 'Nos Produits', products_desc: 'Articles sélectionnés avec soin',
    filter_all: 'Tout', about_title: 'À Propos', about_desc: 'Nous croyons en la qualité, la simplicité et le design moderne.',
    feature1_title: 'Livraison Rapide', feature1_desc: 'Livraison gratuite dès 50€', feature2_title: 'Garantie Qualité', feature2_desc: 'Remboursement 30 jours',
    feature3_title: 'Support 24/7', feature3_desc: 'Toujours là pour vous', contact_title: 'Contactez-nous', contact_desc: 'Nous serions ravis de vous entendre',
    form_name: 'Nom', form_email: 'Email', form_message: 'Message', form_submit: 'Envoyer', form_phone: 'Téléphone', form_address: 'Adresse', form_notes: 'Notes',
    footer_rights: 'Tous droits réservés.', cart_title: 'Panier', cart_total: 'Total', cart_checkout: 'Commander', cart_empty: 'Votre panier est vide',
    order_title: 'Passer Commande', order_submit: 'Confirmer', toast_added: 'Ajouté au panier!', toast_ordered: 'Commande passée!', toast_contact: 'Message envoyé!',
    back_to_products: '← Retour aux produits', add_to_cart: 'Ajouter au panier', buy_now: 'Acheter',
    product_description: 'Description', in_stock: 'En stock', out_of_stock: 'Rupture de stock',
    quantity: 'Quantité', subtotal: 'Sous-total',
    checkout_title: 'Paiement', checkout_empty: 'Panier vide', continue_shopping: 'Continuer',
    payment_title: 'Paiement', payment_method: 'Méthode', alipay: 'Alipay',
    scan_qr: 'Scannez avec Alipay', order_info: 'Commande',
    order_no: 'Commande #', payment_amount: 'Montant', payment_status: 'Statut',
    waiting_payment: 'En attente...', payment_success: 'Payé!',
    payment_pending: 'En attente', view_order: 'Voir', pay_now: 'Payer',
    currency: '€'
  },
  de: {
    site_name: 'Moderner Store', nav_home: 'Startseite', nav_products: 'Produkte', nav_about: 'Über uns', nav_contact: 'Kontakt',
    hero_badge: '✨ Neue Kollektion 2025', hero_title: 'Entdecken Sie Ihren Stil', hero_desc: 'Kuratierte Produkte für den modernen Lebensstil.',
    hero_cta: 'Jetzt kaufen', hero_learn: 'Mehr erfahren', products_title: 'Unsere Produkte', products_desc: 'Sorgfältig ausgewählt',
    filter_all: 'Alle', about_title: 'Über Uns', about_desc: 'Wir glauben an Qualität, Einfachheit und modernes Design.',
    feature1_title: 'Schneller Versand', feature1_desc: 'Kostenloser Versand ab 50€', feature2_title: 'Qualitätsgarantie', feature2_desc: '30 Tage Geld zurück',
    feature3_title: '24/7 Support', feature3_desc: 'Immer für Sie da', contact_title: 'Kontaktieren Sie uns', contact_desc: 'Wir freuen uns von Ihnen zu hören',
    form_name: 'Name', form_email: 'E-Mail', form_message: 'Nachricht', form_submit: 'Senden', form_phone: 'Telefon', form_address: 'Adresse', form_notes: 'Notizen',
    footer_rights: 'Alle Rechte vorbehalten.', cart_title: 'Warenkorb', cart_total: 'Gesamt', cart_checkout: 'Bestellen', cart_empty: 'Ihr Warenkorb ist leer',
    order_title: 'Bestellung aufgeben', order_submit: 'Bestätigen', toast_added: 'In den Warenkorb!', toast_ordered: 'Bestellt!', toast_contact: 'Gesendet!',
    back_to_products: '← Zurück', add_to_cart: 'In den Warenkorb', buy_now: 'Kaufen',
    product_description: 'Beschreibung', in_stock: 'Auf Lager', out_of_stock: 'Ausverkauft',
    quantity: 'Menge', subtotal: 'Zwischensumme',
    checkout_title: 'Kasse', checkout_empty: 'Warenkorb leer', continue_shopping: 'Weiter einkaufen',
    payment_title: 'Zahlung', payment_method: 'Zahlungsart', alipay: 'Alipay',
    scan_qr: 'Mit Alipay scannen', order_info: 'Bestellung',
    order_no: 'Bestellung #', payment_amount: 'Betrag', payment_status: 'Status',
    waiting_payment: 'Warte auf Zahlung...', payment_success: 'Bezahlt!',
    payment_pending: 'Ausstehend', view_order: 'Ansehen', pay_now: 'Bezahlen',
    currency: '€'
  },
  es: {
    site_name: 'Tienda Moderna', nav_home: 'Inicio', nav_products: 'Productos', nav_about: 'Nosotros', nav_contact: 'Contacto',
    hero_badge: '✨ Nueva Colección 2025', hero_title: 'Descubre Tu Estilo', hero_desc: 'Productos seleccionados para el estilo de vida moderno.',
    hero_cta: 'Comprar Ahora', hero_learn: 'Más Info', products_title: 'Nuestros Productos', products_desc: 'Artículos cuidadosamente seleccionados',
    filter_all: 'Todos', about_title: 'Sobre Nosotros', about_desc: 'Creemos en la calidad, la simplicidad y el diseño moderno.',
    feature1_title: 'Envío Rápido', feature1_desc: 'Envío gratis en pedidos +$50', feature2_title: 'Garantía', feature2_desc: 'Devolución en 30 días',
    feature3_title: 'Soporte 24/7', feature3_desc: 'Siempre para ayudarte', contact_title: 'Contáctanos', contact_desc: 'Nos encantaría saber de ti',
    form_name: 'Nombre', form_email: 'Email', form_message: 'Mensaje', form_submit: 'Enviar', form_phone: 'Teléfono', form_address: 'Dirección', form_notes: 'Notas',
    footer_rights: 'Todos los derechos reservados.', cart_title: 'Carrito', cart_total: 'Total', cart_checkout: 'Pagar', cart_empty: 'Tu carrito está vacío',
    order_title: 'Realizar Pedido', order_submit: 'Confirmar', toast_added: '¡Añadido!', toast_ordered: '¡Pedido realizado!', toast_contact: '¡Enviado!',
    back_to_products: '← Volver', add_to_cart: 'Añadir', buy_now: 'Comprar',
    product_description: 'Descripción', in_stock: 'En stock', out_of_stock: 'Agotado',
    quantity: 'Cantidad', subtotal: 'Subtotal',
    checkout_title: 'Pago', checkout_empty: 'Carrito vacío', continue_shopping: 'Seguir comprando',
    payment_title: 'Pago', payment_method: 'Método', alipay: 'Alipay',
    scan_qr: 'Escanear con Alipay', order_info: 'Pedido',
    order_no: 'Pedido #', payment_amount: 'Monto', payment_status: 'Estado',
    waiting_payment: 'Esperando pago...', payment_success: '¡Pagado!',
    payment_pending: 'Pendiente', view_order: 'Ver', pay_now: 'Pagar',
    currency: '$'
  },
  pt: {
    site_name: 'Loja Moderna', nav_home: 'Início', nav_products: 'Produtos', nav_about: 'Sobre', nav_contact: 'Contato',
    hero_badge: '✨ Nova Coleção 2025', hero_title: 'Descubra Seu Estilo', hero_desc: 'Produtos selecionados para o estilo de vida moderno.',
    hero_cta: 'Comprar', hero_learn: 'Saiba Mais', products_title: 'Nossos Produtos', products_desc: 'Itens selecionados com cuidado',
    filter_all: 'Todos', about_title: 'Sobre Nós', about_desc: 'Acreditamos em qualidade, simplicidade e design moderno.',
    feature1_title: 'Envio Rápido', feature1_desc: 'Frete grátis acima de R$100', feature2_title: 'Garantia', feature2_desc: '30 dias para devolução',
    feature3_title: 'Suporte 24/7', feature3_desc: 'Sempre prontos para ajudar', contact_title: 'Fale Conosco', contact_desc: 'Adoraríamos ouvir de você',
    form_name: 'Nome', form_email: 'Email', form_message: 'Mensagem', form_submit: 'Enviar', form_phone: 'Telefone', form_address: 'Endereço', form_notes: 'Notas',
    footer_rights: 'Todos os direitos reservados.', cart_title: 'Carrinho', cart_total: 'Total', cart_checkout: 'Finalizar', cart_empty: 'Seu carrinho está vazio',
    order_title: 'Fazer Pedido', order_submit: 'Confirmar', toast_added: 'Adicionado!', toast_ordered: 'Pedido feito!', toast_contact: 'Enviado!',
    back_to_products: '← Voltar', add_to_cart: 'Adicionar', buy_now: 'Comprar',
    product_description: 'Descrição', in_stock: 'Em estoque', out_of_stock: 'Esgotado',
    quantity: 'Quantidade', subtotal: 'Subtotal',
    checkout_title: 'Pagamento', checkout_empty: 'Carrinho vazio', continue_shopping: 'Continuar',
    payment_title: 'Pagamento', payment_method: 'Método', alipay: 'Alipay',
    scan_qr: 'Escanear com Alipay', order_info: 'Pedido',
    order_no: 'Pedido #', payment_amount: 'Valor', payment_status: 'Status',
    waiting_payment: 'Aguardando...', payment_success: 'Pago!',
    payment_pending: 'Pendente', view_order: 'Ver', pay_now: 'Pagar',
    currency: 'R$'
  },
  ar: {
    site_name: 'المتجر الحديث', nav_home: 'الرئيسية', nav_products: 'المنتجات', nav_about: 'من نحن', nav_contact: 'اتصل بنا',
    hero_badge: '✨ مجموعة 2025 الجديدة', hero_title: 'اكتشف أسلوبك', hero_desc: 'منتجات منتقاة لنمط الحياة العصري.',
    hero_cta: 'تسوق الآن', hero_learn: 'اعرف المزيد', products_title: 'منتجاتنا', products_desc: 'منتجات مختارة بعناية',
    filter_all: 'الكل', about_title: 'من نحن', about_desc: 'نؤمن بالجودة والبساطة والتصميم العصري.',
    feature1_title: 'شحن سريع', feature1_desc: 'توصيل مجاني للطلبات فوق 50$', feature2_title: 'ضمان الجودة', feature2_desc: 'استرداد خلال 30 يوماً',
    feature3_title: 'دعم 24/7', feature3_desc: 'دائماً هنا لمساعدتك', contact_title: 'تواصل معنا', contact_desc: 'يسعدنا سماعك',
    form_name: 'الاسم', form_email: 'البريد', form_message: 'الرسالة', form_submit: 'إرسال', form_phone: 'الهاتف', form_address: 'العنوان', form_notes: 'ملاحظات',
    footer_rights: 'جميع الحقوق محفوظة.', cart_title: 'سلة التسوق', cart_total: 'المجموع', cart_checkout: 'إتمام الشراء', cart_empty: 'سلتك فارغة',
    order_title: 'تقديم الطلب', order_submit: 'تأكيد', toast_added: 'أضيف للسلة!', toast_ordered: 'تم الطلب!', toast_contact: 'تم الإرسال!',
    back_to_products: '← العودة', add_to_cart: 'أضف للسلة', buy_now: 'اشترِ الآن',
    product_description: 'الوصف', in_stock: 'متوفر', out_of_stock: 'غير متوفر',
    quantity: 'الكمية', subtotal: 'المجموع الفرعي',
    checkout_title: 'الدفع', checkout_empty: 'السلة فارغة', continue_shopping: 'متابعة التسوق',
    payment_title: 'الدفع', payment_method: 'طريقة الدفع', alipay: 'Alipay',
    scan_qr: 'امسح بـ Alipay', order_info: 'معلومات الطلب',
    order_no: 'رقم الطلب', payment_amount: 'المبلغ', payment_status: 'الحالة',
    waiting_payment: 'في انتظار الدفع...', payment_success: 'تم الدفع!',
    payment_pending: 'قيد الانتظار', view_order: 'عرض', pay_now: 'ادفع',
    currency: '$'
  },
  ru: {
    site_name: 'Модный Магазин', nav_home: 'Главная', nav_products: 'Товары', nav_about: 'О нас', nav_contact: 'Контакты',
    hero_badge: '✨ Новая коллекция 2025', hero_title: 'Найди свой стиль', hero_desc: 'Товары, подобранные для современного стиля жизни.',
    hero_cta: 'Купить', hero_learn: 'Подробнее', products_title: 'Наши товары', products_desc: 'Тщательно отобранные вещи',
    filter_all: 'Все', about_title: 'О нас', about_desc: 'Мы верим в качество, простоту и современный дизайн.',
    feature1_title: 'Быстрая доставка', feature1_desc: 'Бесплатно от $50', feature2_title: 'Гарантия', feature2_desc: 'Возврат в течение 30 дней',
    feature3_title: 'Поддержка 24/7', feature3_desc: 'Всегда готовы помочь', contact_title: 'Свяжитесь с нами', contact_desc: 'Будем рады услышать вас',
    form_name: 'Имя', form_email: 'Email', form_message: 'Сообщение', form_submit: 'Отправить', form_phone: 'Телефон', form_address: 'Адрес', form_notes: 'Заметки',
    footer_rights: 'Все права защищены.', cart_title: 'Корзина', cart_total: 'Итого', cart_checkout: 'Оформить', cart_empty: 'Корзина пуста',
    order_title: 'Оформить заказ', order_submit: 'Подтвердить', toast_added: 'Добавлено!', toast_ordered: 'Заказ оформлен!', toast_contact: 'Отправлено!',
    back_to_products: '← Назад', add_to_cart: 'В корзину', buy_now: 'Купить',
    product_description: 'Описание', in_stock: 'В наличии', out_of_stock: 'Нет в наличии',
    quantity: 'Количество', subtotal: 'Подитог',
    checkout_title: 'Оформление', checkout_empty: 'Корзина пуста', continue_shopping: 'Продолжить',
    payment_title: 'Оплата', payment_method: 'Способ оплаты', alipay: 'Alipay',
    scan_qr: 'Сканируйте через Alipay', order_info: 'Заказ',
    order_no: 'Заказ #', payment_amount: 'Сумма', payment_status: 'Статус',
    waiting_payment: 'Ожидание оплаты...', payment_success: 'Оплачено!',
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
  loadCustomPagesNav();
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

  // Hide all views
  document.getElementById('view-home').style.display = 'none';
  document.getElementById('view-product').style.display = 'none';
  document.getElementById('view-checkout').style.display = 'none';
  document.getElementById('view-payment').style.display = 'none';
  document.getElementById('view-page').style.display = 'none';

  if (view === 'product' && param) {
    document.getElementById('view-product').style.display = 'block';
    loadProductDetail(param);
  } else if (view === 'checkout') {
    document.getElementById('view-checkout').style.display = 'block';
    renderCheckoutPage();
  } else if (view === 'payment' && param) {
    document.getElementById('view-payment').style.display = 'block';
    loadPaymentPage(param);
  } else if (view === 'page' && param) {
    document.getElementById('view-page').style.display = 'block';
    loadCustomPage(param);
  } else {
    document.getElementById('view-home').style.display = 'block';
  }

  // Update nav active state
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

    // Apply site logo
    if (siteSettings.site_logo) {
      const logoEl = document.getElementById('siteLogo');
      logoEl.innerHTML = `<img src="${siteSettings.site_logo}" alt="logo" style="max-height:32px;max-width:150px">`;
    }

    // Apply favicon
    if (siteSettings.site_favicon) {
      let link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.href = siteSettings.site_favicon;
    }
  } catch {}
}

// --- Theme ---
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

// --- Language ---
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
  const t = i18n[lang] || i18n.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
  document.documentElement.setAttribute('lang', lang);
  if (lang === 'ar') document.documentElement.setAttribute('dir', 'rtl');
  else document.documentElement.removeAttribute('dir');
}

function t(key) {
  const lang = i18n[currentLang] || i18n.en;
  return lang[key] || i18n.en[key] || key;
}

// --- Navigation ---
function initNav() {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  toggle.addEventListener('click', () => nav.classList.toggle('active'));
  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    header.style.boxShadow = window.scrollY > 10 ? 'var(--shadow)' : 'none';
  });
  document.querySelectorAll('.nav a').forEach(a => {
    a.addEventListener('click', () => { nav.classList.remove('active'); });
  });
}

// --- Products ---
async function loadProducts() {
  try {
    const res = await fetch('/api/products');
    const data = await res.json();
    products = data.products || [];
    renderProducts();
  } catch (e) {
    document.getElementById('productsGrid').innerHTML = '<p style="text-align:center;grid-column:1/-1;color:var(--text-muted)">No products yet. Add some in the admin panel.</p>';
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
        ${img ? `<img src="${img}" alt="${p.name}" loading="lazy">` : '<div class="placeholder">📦</div>'}
        ${p.featured ? '<span class="product-badge">★ Featured</span>' : ''}
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
          <button class="add-cart-btn" onclick="event.stopPropagation();addToCart(${p.id})" title="Add to cart">+</button>
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
      <a href="#products" class="back-link">${t('back_to_products')}</a>
      <div class="pd-grid">
        <div class="pd-images">
          <div class="pd-main-img">
            ${mainImg ? `<img src="${mainImg}" alt="${p.name}" id="pdMainImg">` : '<div class="placeholder" style="height:400px;font-size:4rem">📦</div>'}
          </div>
          ${images.length > 1 ? `
            <div class="pd-thumbs">
              ${images.map((img, i) => `<img src="${img}" class="pd-thumb ${i===0?'active':''}" onclick="document.getElementById('pdMainImg').src='${img}';document.querySelectorAll('.pd-thumb').forEach(t=>t.classList.remove('active'));this.classList.add('active')">`).join('')}
            </div>` : ''}
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
            <button class="btn btn-primary pd-add-btn" onclick="addToCartQty(${p.id})" ${!inStock?'disabled':''}>
              ${t('add_to_cart')}
            </button>
            <button class="btn btn-outline pd-buy-btn" onclick="buyNow(${p.id})" ${!inStock?'disabled':''}>
              ${t('buy_now')}
            </button>
          </div>
        </div>
      </div>`;

    window._pdQty = 1;
    window._pdProduct = p;
  } catch (e) {
    container.innerHTML = '<p>Failed to load product.</p>';
  }
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

// --- Checkout Page ---
function renderCheckoutPage() {
  const itemsContainer = document.getElementById('checkoutItems');
  const summaryContainer = document.getElementById('checkoutSummary');
  const currency = t('currency');

  if (!cart.length) {
    itemsContainer.innerHTML = `<div class="checkout-empty"><p>${t('checkout_empty')}</p><a href="#products" class="btn btn-primary">${t('continue_shopping')}</a></div>`;
    summaryContainer.innerHTML = '';
    return;
  }

  itemsContainer.innerHTML = cart.map(item => {
    const images = typeof item.images === 'string' ? JSON.parse(item.images || '[]') : (item.images || []);
    const img = images[0];
    return `
    <div class="checkout-item">
      <div class="checkout-item-img">${img ? `<img src="${img}">` : '📦'}</div>
      <div class="checkout-item-info">
        <div class="checkout-item-name">${item.name}</div>
        <div class="checkout-item-price">${currency}${Number(item.price).toFixed(2)} × ${item.qty}</div>
      </div>
      <div class="checkout-item-subtotal">${currency}${(item.price * item.qty).toFixed(2)}</div>
    </div>`;
  }).join('');

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  summaryContainer.innerHTML = `
    <div class="checkout-total-row">
      <span>${t('cart_total')}</span>
      <span class="checkout-total-amount">${currency}${total.toFixed(2)}</span>
    </div>`;
}

function initCheckoutForm() {
  document.getElementById('checkoutForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const items = cart.map(i => ({ product_id: i.id, name: i.name, price: i.price, qty: i.qty }));
    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_name: fd.get('customer_name'),
          customer_email: fd.get('customer_email'),
          customer_phone: fd.get('customer_phone'),
          shipping_address: fd.get('shipping_address'),
          notes: fd.get('notes'),
          items, total
        })
      });
      const data = await res.json();
      if (data.order_no) {
        cart = []; saveCart();
        window.location.hash = `payment/${data.order_no}`;
      }
    } catch { alert('Order failed'); }
  });
}

// --- Payment Page ---
async function loadPaymentPage(orderNo) {
  const container = document.getElementById('paymentPage');
  container.innerHTML = '<div class="loading"><div class="spinner"></div></div>';

  try {
    // Get settings to check if Alipay is enabled
    const settingsRes = await fetch('/api/settings');
    const settingsData = await settingsRes.json();
    const settings = settingsData.settings || {};

    // Query order status
    const queryRes = await fetch(`/api/payment/alipay/query?order_no=${orderNo}`);
    const queryData = await queryRes.json();
    const currency = t('currency');

    if (queryData.trade_status === 'TRADE_SUCCESS') {
      container.innerHTML = `
        <div class="payment-success-box">
          <div class="payment-icon">✅</div>
          <h2>${t('payment_success')}</h2>
          <p>${t('order_no')}: <strong>${orderNo}</strong></p>
          <p>${t('payment_amount')}: <strong>${currency}${queryData.total_amount}</strong></p>
          <a href="#home" class="btn btn-primary" style="margin-top:20px">${t('nav_home')}</a>
        </div>`;
      return;
    }

    // Try to create Alipay payment
    if (settings.alipay_enabled === '1') {
      const createRes = await fetch('/api/payment/alipay/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ order_no: orderNo, total: parseFloat(queryData.total_amount), subject: `Order ${orderNo}` })
      });
      const createData = await createRes.json();

      if (createData.success && createData.payment) {
        container.innerHTML = `
          <div class="payment-box">
            <h2>${t('payment_title')}</h2>
            <div class="payment-grid">
              <div class="payment-qr">
                <div class="qr-code-area">
                  <div id="qrCodeCanvas"></div>
                </div>
                <div class="payment-method-label">
                  <span class="alipay-icon">💙</span> ${t('alipay')}
                </div>
                <p class="payment-note">${t('scan_qr')}</p>
              </div>
              <div class="payment-info">
                <h3>${t('order_info')}</h3>
                <div class="payment-detail-row">
                  <span>${t('order_no')}</span>
                  <strong>${orderNo}</strong>
                </div>
                <div class="payment-detail-row">
                  <span>${t('payment_amount')}</span>
                  <strong class="payment-amount">${currency}${createData.payment.total_amount}</strong>
                </div>
                <div class="payment-detail-row">
                  <span>${t('payment_status')}</span>
                  <span class="badge badge-pending">${t('waiting_payment')}</span>
                </div>
                <button class="btn btn-primary btn-full" onclick="checkPaymentStatus('${orderNo}')">
                  ${t('pay_now')} - ${currency}${createData.payment.total_amount}
                </button>
              </div>
            </div>
          </div>`;
        // Generate QR code
        generateQRCode('qrCodeCanvas', createData.payment.qr_code);

        // Auto-check payment status every 5 seconds
        window._paymentCheckInterval = setInterval(() => checkPaymentStatus(orderNo), 5000);
        return;
      }
    }

    // Fallback: show order info without Alipay
    container.innerHTML = `
      <div class="payment-box">
        <h2>${t('payment_title')}</h2>
        <div class="payment-info-simple">
          <div class="payment-detail-row">
            <span>${t('order_no')}</span>
            <strong>${orderNo}</strong>
          </div>
          <div class="payment-detail-row">
            <span>${t('payment_amount')}</span>
            <strong>${currency}${queryData.total_amount}</strong>
          </div>
          <div class="payment-detail-row">
            <span>${t('payment_status')}</span>
            <span class="badge badge-pending">${t('payment_pending')}</span>
          </div>
          <p style="margin-top:20px;color:var(--text-muted)">Payment method not configured. Please contact the store.</p>
        </div>
      </div>`;
  } catch (e) {
    container.innerHTML = '<p>Failed to load payment page.</p>';
  }
}

async function checkPaymentStatus(orderNo) {
  try {
    const res = await fetch(`/api/payment/alipay/query?order_no=${orderNo}`);
    const data = await res.json();
    if (data.trade_status === 'TRADE_SUCCESS') {
      if (window._paymentCheckInterval) clearInterval(window._paymentCheckInterval);
      const currency = t('currency');
      document.getElementById('paymentPage').innerHTML = `
        <div class="payment-success-box">
          <div class="payment-icon">✅</div>
          <h2>${t('payment_success')}</h2>
          <p>${t('order_no')}: <strong>${orderNo}</strong></p>
          <p>${t('payment_amount')}: <strong>${currency}${data.total_amount}</strong></p>
          <a href="#home" class="btn btn-primary" style="margin-top:20px">${t('nav_home')}</a>
        </div>`;
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
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('cartCount').textContent = count;
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
      <div class="cart-item-img">${img ? `<img src="${img}">` : '📦'}</div>
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
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  document.getElementById('cartTotal').textContent = `${currency}${total.toFixed(2)}`;
  footer.style.display = 'block';
}

// --- Order (Quick from product detail) ---
function openOrderModal() {
  toggleCart(false);
  const modal = document.getElementById('orderModal');
  const summary = document.getElementById('orderSummary');
  const currency = t('currency');
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  summary.innerHTML = cart.map(item =>
    `<div style="display:flex;justify-content:space-between;margin-bottom:4px"><span>${item.name} × ${item.qty}</span><span>${currency}${(item.price * item.qty).toFixed(2)}</span></div>`
  ).join('') + `<div style="display:flex;justify-content:space-between;font-weight:700;margin-top:8px;border-top:1px solid var(--border);padding-top:8px"><span>${t('cart_total')}</span><span>${currency}${total.toFixed(2)}</span></div>`;
  modal.classList.add('active');
  document.getElementById('orderForm').onsubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const items = cart.map(i => ({ product_id: i.id, name: i.name, price: i.price, qty: i.qty }));
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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

// --- Contact ---
function initContactForm() {
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast(t('toast_contact'));
    e.target.reset();
  });
}

// --- Custom Pages ---
async function loadCustomPagesNav() {
  try {
    const res = await fetch('/api/pages');
    const data = await res.json();
    const pages = data.pages || [];
    const nav = document.getElementById('customPagesNav');
    if (pages.length && nav) {
      nav.innerHTML = pages.map(p => `<a href="#page/${p.slug}">${p.title}</a>`).join(' ');
    }
  } catch {}
}

async function loadCustomPage(slug) {
  const container = document.getElementById('customPageContent');
  container.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
  try {
    const res = await fetch('/api/pages');
    const data = await res.json();
    const page = (data.pages || []).find(p => p.slug === slug);
    if (page) {
      container.innerHTML = `<div class="page-article"><h1 class="page-article-title">${page.title}</h1><div class="page-article-body">${page.body}</div></div>`;
    } else {
      container.innerHTML = '<p style="text-align:center;color:var(--text-muted)">Page not found.</p>';
    }
  } catch {
    container.innerHTML = '<p>Failed to load page.</p>';
  }
}

// --- QR Code Generation ---
function generateQRCode(containerId, text) {
  try {
    if (typeof qrcode !== 'undefined') {
      const qr = qrcode(0, 'M');
      qr.addData(text);
      qr.make();
      const container = document.getElementById(containerId);
      if (container) {
        container.innerHTML = qr.createSvgTag({ cellSize: 4, margin: 4 });
        const svg = container.querySelector('svg');
        if (svg) {
          svg.style.width = '220px';
          svg.style.height = '220px';
        }
      }
    } else {
      // Fallback: show text link
      const container = document.getElementById(containerId);
      if (container) container.innerHTML = `<div class="qr-fallback"><p>📱</p><a href="${text}" target="_blank" style="font-size:0.75rem;word-break:break-all">${text}</a></div>`;
    }
  } catch (e) {
    console.error('QR generation failed:', e);
  }
}

// --- Toast ---
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}
