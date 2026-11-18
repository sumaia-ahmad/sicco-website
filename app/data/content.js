// All site text lives here, keyed by language ("ar" / "en").
// Shared, non-translated data (image paths, email, etc.) sits in `shared`.
// Keeping content separate from layout means the future bilingual site only
// swaps which object it reads — the components never change.

export const shared = {
  logo: '/images/logo.png',
  heroImage: '/images/hero.jpg',
  factory: '/images/factory.png',
  // Hero visual + social-share image: product range next to the SICCO logo.
  brandBanner: '/images/brand-banner.jpg',
  // Real accreditation logos (shown on the matching certification cards).
  certLogos: ['/images/certs/sgs.png', null, '/images/certs/sns.png', null],
  email: 'info@sicco-sy.com',
  phone: '+963 11 635 2501/2/3/4',
  phoneHref: '+963116352501',
  fax: '+963 11 635 2500',
  // Exact location of the plant (lat,lng) for the embedded map's pin.
  // Matches the "SICCO" place on Google Maps, in the industrial area across the
  // Damascus–Daraa highway from Al-Salam Hospital (Housh Blass). Don't use a
  // text search here: Google resolves "SICCO" to an unrelated company abroad.
  mapCoords: '33.44721,36.27088',
  // WhatsApp number in international format, digits only (no +, no spaces).
  // TODO: replace this placeholder with the real company WhatsApp number.
  whatsapp: '963900000000',
  // Each brand: logo + which product images belong to it.
  brands: [
    { id: 'super-white', logo: '/images/brands/brand3.png' },
    { id: 'prince', logo: '/images/brands/brand2.png' },
    { id: 'fami', logo: '/images/brands/brand1.png' },
  ],
  // Product images mapped to the real packshots we pulled from the site.
  products: [
    { id: 'powder', brand: 'super-white', image: '/images/products/product1.png' },
    { id: 'gel', brand: 'super-white', image: '/images/products/product2.png' },
    { id: 'paste', brand: 'super-white', image: '/images/products/product3.png' },
    { id: 'soap', brand: 'prince', image: '/images/products/product4.png' },
    { id: 'fami-lemon', brand: 'fami', image: '/images/products/product5.png' },
    { id: 'sanitizer', brand: 'prince', image: '/images/products/product6.png' },
    { id: 'dish', brand: 'prince', image: '/images/products/product7.png' },
  ],
}

export const content = {
  ar: {
    dir: 'rtl',
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      brands: 'العلامات التجارية',
      products: 'منتجاتنا',
      why: 'لماذا SICCO',
      contact: 'تواصل معنا',
    },
    langButton: 'English',
    langHref: '/en',
    langCode: 'en',
    orderNow: 'اطلب الآن',
    hero: {
      badge: 'جودة سورية موثوقة',
      title: 'رائدون في صناعة المنظفات عالية الجودة',
      // Where the headline breaks — split on natural phrases. The non-breaking
      // space ( ) keeps "في" glued to the next word on narrow screens.
      titleLines: ['رائدون في صناعة', 'المنظفات عالية الجودة'],
      subtitle: 'نفتخر بتقديم أفضل العلامات التجارية في عالم المنظفات والعناية المنزلية',
      ctaProducts: 'تصفّح المنتجات',
      ctaContact: 'تواصل معنا',
      scrollHint: 'اكتشف المزيد',
      highlights: ['خبرة أكثر من 30 عاماً', 'جودة بمعايير ISO', 'ثقة آلاف العملاء'],
      // Impact numbers shown as a band under the hero.
      // NOTE: "عميل راضٍ" is a placeholder — replace +1000 with the real figure.
      stats: [
        { value: '+30', label: 'سنة خبرة' },
        { value: '+1000', label: 'عميل راضٍ' },
        { value: '+7', label: 'منتج متنوّع' },
        { value: '4', label: 'أقسام إنتاج' },
      ],
    },
    brands: {
      title: 'علاماتنا التجارية',
      subtitle: 'ثلاث علامات موثوقة تغطي كل احتياجات التنظيف',
      items: {
        'super-white': {
          name: 'Super White',
          desc: 'تنظيف قوي وبياض ناصع للملابس',
        },
        prince: {
          name: 'Prince',
          desc: 'منتجات عالية الجودة للعناية المنزلية',
        },
        fami: {
          name: 'Fami',
          desc: 'سائل جلي فعّال للأواني والصحون',
        },
      },
    },
    about: {
      title: 'من نحن',
      heading: 'الشركة السورية للصناعات الكيميائية والمنظفات — تأسست عام 1991',
      body: 'تأسست الشركة في العام 1991 على قانون الاستثمار رقم /10/ وبدأت إنتاجها الفعلي في عام 1993. تتألف الشركة من أربعة أقسام رئيسية تعمل بأحدث التقنيات العالمية.',
      departments: [
        { name: 'قسم إنتاج البودرة', desc: 'إنتاج البودرة بكافة أنواعها بأفضل التقنيات العالمية' },
        { name: 'قسم إنتاج السوائل', desc: 'إنتاج سوائل الجلي والصابون السائل والجل' },
        { name: 'وحدة السلفنة', desc: 'إنتاج المواد الأولية التي تغطي احتياجات السوق' },
        { name: 'معمل البلاستيك', desc: 'إنتاج العبوات البلاستيكية بمختلف القياسات' },
      ],
    },
    products: {
      title: 'منتجاتنا',
      subtitle: 'مجموعة متكاملة من منتجات التنظيف عالية الجودة',
      all: 'الكل',
      items: {
        powder: 'مسحوق غسيل أوتوماتيك',
        gel: 'منظف جل للأسطح',
        paste: 'معجون جلي',
        soap: 'صابون سائل لليدين',
        'fami-lemon': 'سائل جلي بعطر الليمون',
        sanitizer: 'معقم أيدي',
        dish: 'سائل جلي الأواني',
      },
    },
    why: {
      title: 'لماذا تختار SICCO؟',
      subtitle: 'نقدّم لك أفضل المنتجات بأعلى معايير الجودة',
      items: [
        { icon: '✦', title: 'جودة عالية', desc: 'منتجات مصنّعة وفق أعلى معايير الجودة العالمية' },
        { icon: '♥', title: 'ثقة العملاء', desc: 'موثوق من آلاف العملاء في جميع أنحاء سوريا' },
        { icon: '◎', title: 'أسعار منافسة', desc: 'أفضل جودة بأسعار مناسبة لجميع الفئات' },
        { icon: '➤', title: 'توصيل سريع', desc: 'خدمة توصيل سريعة لجميع المناطق' },
        { icon: '☎', title: 'دعم فني', desc: 'فريق دعم متخصص جاهز لمساعدتك' },
        { icon: '⚗', title: 'تركيبات مطوّرة', desc: 'تركيبات كيميائية متطورة لأفضل النتائج' },
      ],
    },
    certs: {
      title: 'شهادات الجودة والاعتمادات',
      subtitle: 'نلتزم بأعلى معايير الجودة العالمية',
      items: [
        { code: 'ISO 9001:2015', label: 'إدارة الجودة' },
        { code: 'ISO 14001', label: 'نظام الإدارة البيئية' },
        { code: 'مواصفات سورية', label: 'معتمد من هيئة المواصفات' },
        { code: 'مختبر معتمد', label: 'فحص وجودة مضمونة' },
      ],
    },
    partners: {
      title: 'شركاؤنا في النجاح',
      subtitle: 'نفتخر بشراكاتنا مع أكبر الموزّعين والمتاجر',
      note: 'شعارات مؤقتة — جاهزة لاستبدالها بشعارات شركائك الحقيقيين',
      count: 6,
    },
    contact: {
      title: 'تواصل معنا',
      subtitle: 'نحن هنا لمساعدتك — اطلب عرض سعر أو استفسر عن منتجاتنا',
      addressLabel: 'العنوان',
      address: 'ريف دمشق - حوش بلاس - مقابل مشفى السلام',
      hoursLabel: 'ساعات العمل',
      hours: 'السبت - الخميس: 8 صباحاً - 7 مساءً',
      phoneLabel: 'الهاتف',
      faxLabel: 'الفاكس',
      mapLabel: 'موقعنا على الخريطة',
      emailLabel: 'البريد الإلكتروني',
      form: {
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        message: 'رسالتك',
        send: 'إرسال',
        sendWhatsapp: 'إرسال عبر واتساب',
        orEmail: 'أو راسلنا بالبريد الإلكتروني',
        subject: 'رسالة من موقع SICCO',
      },
    },
    footer: {
      tagline: 'الشركة السورية للصناعات الكيميائية — رائدة في صناعة المنظفات عالية الجودة منذ أكثر من 30 عاماً',
      linksTitle: 'روابط سريعة',
      contactTitle: 'تواصل معنا',
      rights: '© 2026 SICCO — جميع الحقوق محفوظة',
    },
  },

  en: {
    dir: 'ltr',
    nav: {
      home: 'Home',
      about: 'About',
      brands: 'Brands',
      products: 'Products',
      why: 'Why SICCO',
      contact: 'Contact',
    },
    langButton: 'عربي',
    langHref: '/',
    langCode: 'ar',
    orderNow: 'Order Now',
    hero: {
      badge: 'Trusted Syrian quality',
      title: 'Leaders in high-quality detergent manufacturing',
      titleLines: ['Leaders in high-quality', 'detergent manufacturing'],
      subtitle: 'Proud to offer the finest brands in the world of cleaning and home care',
      ctaProducts: 'Browse Products',
      ctaContact: 'Contact Us',
      scrollHint: 'Scroll to explore',
      highlights: ['30+ years of expertise', 'ISO-grade quality', 'Trusted by thousands'],
      stats: [
        { value: '+30', label: 'Years of expertise' },
        { value: '+1000', label: 'Happy clients' },
        { value: '+7', label: 'Products' },
        { value: '4', label: 'Divisions' },
      ],
    },
    brands: {
      title: 'Our Brands',
      subtitle: 'Three trusted brands covering every cleaning need',
      items: {
        'super-white': {
          name: 'Super White',
          desc: 'Powerful cleaning and brilliant whiteness for clothes',
        },
        prince: {
          name: 'Prince',
          desc: 'High-quality products for home care',
        },
        fami: {
          name: 'Fami',
          desc: 'Effective dishwashing liquid for dishes and utensils',
        },
      },
    },
    about: {
      title: 'About Us',
      heading: 'Syrian Company for Chemical Industries & Detergents — Founded in 1991',
      body: 'The company was founded in 1991 under Investment Law No. 10 and began actual production in 1993. It comprises four main divisions operating with the latest global technologies.',
      departments: [
        { name: 'Powder Production', desc: 'Production of all types of powder with the finest global technologies' },
        { name: 'Liquids Production', desc: 'Production of dishwashing liquids, liquid soap and gel' },
        { name: 'Sulfonation Unit', desc: 'Production of raw materials covering market needs' },
        { name: 'Plastic Factory', desc: 'Production of plastic packaging in various sizes' },
      ],
    },
    products: {
      title: 'Our Products',
      subtitle: 'A complete range of high-quality cleaning products',
      all: 'All',
      items: {
        powder: 'Automatic Washing Powder',
        gel: 'Surface Gel Cleaner',
        paste: 'Dishwashing Paste',
        soap: 'Liquid Hand Soap',
        'fami-lemon': 'Lemon Dishwashing Liquid',
        sanitizer: 'Hand Sanitizer',
        dish: 'Dishwashing Liquid',
      },
    },
    why: {
      title: 'Why Choose SICCO?',
      subtitle: 'We bring you the best products at the highest quality standards',
      items: [
        { icon: '✦', title: 'High Quality', desc: 'Products made to the highest international quality standards' },
        { icon: '♥', title: 'Customer Trust', desc: 'Trusted by thousands of customers across Syria' },
        { icon: '◎', title: 'Competitive Prices', desc: 'Best quality at prices suitable for everyone' },
        { icon: '➤', title: 'Fast Delivery', desc: 'Fast delivery service to all areas' },
        { icon: '☎', title: 'Technical Support', desc: 'A specialized support team ready to help you' },
        { icon: '⚗', title: 'Advanced Formulas', desc: 'Advanced chemical formulas for the best results' },
      ],
    },
    certs: {
      title: 'Quality Certifications & Accreditations',
      subtitle: 'We adhere to the highest international quality standards',
      items: [
        { code: 'ISO 9001:2015', label: 'Quality Management' },
        { code: 'ISO 14001', label: 'Environmental Management' },
        { code: 'Syrian Standards', label: 'Certified by the Standards Authority' },
        { code: 'Accredited Lab', label: 'Guaranteed testing & quality' },
      ],
    },
    partners: {
      title: 'Our Partners',
      subtitle: 'Proud to partner with the largest distributors and stores',
      note: 'Placeholder logos — ready to be replaced with your real partners',
      count: 6,
    },
    contact: {
      title: 'Contact Us',
      subtitle: "We're here to help — request a quote or ask about our products",
      addressLabel: 'Address',
      address: 'Rural Damascus - Housh Blass - Opposite Al-Salam Hospital',
      hoursLabel: 'Working Hours',
      hours: 'Sat - Thu: 8 AM - 7 PM',
      phoneLabel: 'Phone',
      faxLabel: 'Fax',
      mapLabel: 'Find us on the map',
      emailLabel: 'Email',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Your message',
        send: 'Send',
        sendWhatsapp: 'Send via WhatsApp',
        orEmail: 'Or email us',
        subject: 'Message from SICCO website',
      },
    },
    footer: {
      tagline: 'Syrian Company for Chemical Industries — a leader in high-quality detergents for over 30 years',
      linksTitle: 'Quick Links',
      contactTitle: 'Get in touch',
      rights: '© 2026 SICCO — All Rights Reserved',
    },
  },
}
