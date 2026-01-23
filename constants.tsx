import { Product, Category, Service } from './types';

export const STORE_INFO = {
  name: 'TREND Store',
  phone: '01147543787',
  phone2: '01110790830',
  phone3: '01127560025',
  address: 'ش١٠ المعادى متفرع من حسنين دسوقى - حدائق المعادى - امام البن اليمنى الفرسان',
  whatsapp: 'https://wa.me/201147543787',
  facebook: 'https://www.facebook.com/share/1GBKxsdsu/1/',
  instagram: 'https://www.instagram.com/trendmobile2025?igsh=MXBpa21tcnZnODBoZw==',
  tiktok: 'https://www.tiktok.com/@trendmobile2026?_r=1&_t=ZS-92qdpYy1Q81',
};

export const MOCK_PRODUCTS: Product[] = [
  // --- قسم الأجهزة الجديدة ---
  {
    id: 'n-iphone-16-pm',
    name: 'iPhone 16 Pro Max',
    description: 'الأداء الأقوى من آبل بتصميم تيتانيوم وزر تحكم الكاميرا الجديد.',
    price: 82000,
    category: Category.NEW,
    tier: 'flagship',
    image: 'https://images.unsplash.com/photo-1727281223933-255d658c385b?auto=format&fit=crop&q=90&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1726514749410-68161570773d?auto=format&fit=crop&q=90&w=800',
      'https://images.unsplash.com/photo-1727281223533-333e60275816?auto=format&fit=crop&q=90&w=800'
    ],
    condition: 'جديد متبرشم',
    specs: ['الشاشة: 6.9" LTPO OLED', 'المعالج: A18 Pro'],
    boxContents: ['الهاتف', 'كابل USB-C']
  },

  // --- قسم الأجهزة المستعملة ---
  {
    id: 'u-iphone-14-pro',
    name: 'iPhone 14 Pro (Used)',
    description: 'حالة الزيرو، بطارية 96%، كرتونة كاملة وفحص فني شامل.',
    price: 42000,
    category: Category.USED,
    image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&q=90&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1678911820844-933e8f85f543?auto=format&fit=crop&q=90&w=800',
      'https://images.unsplash.com/photo-1678911820817-2144369e9c3e?auto=format&fit=crop&q=90&w=800'
    ],
    condition: 'حالة الزيرو',
    batteryHealth: '96%',
    specs: ['الذاكرة: 128GB', 'المعالج: A16 Bionic']
  },

  // --- قسم الإكسسوارات (السماعات والشواحن) ---
  {
    id: 'acc-liberty-4-nc',
    name: 'Anker Soundcore Liberty 4 NC',
    description: 'سماعة العزل الأقوى من أنكر بتقنية ANC 2.0 المتطورة وبطارية تدوم حتى 50 ساعة.',
    price: 4850,
    category: Category.ACCESSORIES,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
      'https://m.media-amazon.com/images/I/61NfI1m7N4L._AC_SL1500_.jpg'
    ],
    condition: 'أصلي مختوم',
    specs: ['العزل: Adaptive ANC 2.0', 'الصوت: Hi-Res Wireless', 'البطارية: 50 ساعة']
  },
  {
    id: 'acc-soundcore-r50i-nc',
    name: 'Soundcore R50i NC',
    description: 'سماعة أنكر بعزل ضوضاء ونظام حماية متكامل وبطارية 45 ساعة.',
    price: 1650,
    category: Category.ACCESSORIES,
    image: 'https://elmohandesstore.com/wp-content/uploads/2024/09/1000061664.jpg',
    gallery: [
      'https://vontx.com/wp-content/uploads/2025/05/anker-R50i-Nc-Black.webp',
      'https://m.media-amazon.com/images/I/41AYDkp2jIL._AC_UF350,350_QL80_.jpg',
      'https://f.nooncdn.com/p/pnsku/N70082559V/45/_/1750406798/54ff6970-c8d8-44ab-8f48-8b81ac914878.jpg?width=320'
    ],
    condition: 'أصلي مختوم'
  },
  {
    id: 'acc-anker-wired-lightning',
    name: 'Anker Wired Headphones (Lightning)',
    description: 'سماعة أنكر السلكية الأصلية بمنفذ لايتنينج، صوت نقي جداً وتقنية Hi-Fi Bass.',
    price: 850,
    category: Category.ACCESSORIES,
    image: 'https://m.media-amazon.com/images/I/41KstS6-mXL._AC_SL1500_.jpg',
    gallery: [
      'https://m.media-amazon.com/images/I/51nJ7Y8p7FL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/519N-V8ZfLL._AC_SL1500_.jpg'
    ],
    condition: 'أصلي مختوم',
    specs: ['المنفذ: Apple Lightning', 'الصوت: High-Res Audio']
  },
  {
    id: 'acc-anker-zolo-30w',
    name: 'Anker Zolo 30W Charger',
    description: 'شاحن فائق السرعة من أنكر بقوة 30 واط يدعم الشحن السريع PD 3.0.',
    price: 950,
    category: Category.ACCESSORIES,
    image: 'https://m.media-amazon.com/images/I/516x0S9P36L._AC_SL1500_.jpg',
    gallery: [
      'https://m.media-amazon.com/images/I/61XFpE8W6pL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/51L9N-fR7pL._AC_SL1500_.jpg'
    ],
    condition: 'أصلي مختوم',
    specs: ['القوة: 30W', 'المنفذ: USB-C']
  },
  {
    id: 'acc-anker-20w-black',
    name: 'Anker Nano 20W - Black',
    description: 'شاحن أنكر الأصلي فائق الصغر بقوة 20 واط، يدعم الشحن السريع PD.',
    price: 750,
    category: Category.ACCESSORIES,
    image: 'https://m.media-amazon.com/images/I/51p8vjTjI9L._AC_SL1500_.jpg',
    gallery: [
      'https://m.media-amazon.com/images/I/61j8x2eH7nL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/51-B8v8W7pL._AC_SL1500_.jpg'
    ],
    condition: 'أصلي مختوم'
  },
  {
    id: 'acc-anker-20w-white',
    name: 'Anker Nano 20W - White',
    description: 'النسخة البيضاء الكلاسيكية من شاحن أنكر نانو 20 واط.',
    price: 750,
    category: Category.ACCESSORIES,
    image: 'https://m.media-amazon.com/images/I/41-Uo-0-vjL._AC_SL1500_.jpg',
    gallery: [
      'https://m.media-amazon.com/images/I/61F9O51M9eL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/51f9V-W8pLL._AC_SL1500_.jpg'
    ],
    condition: 'أصلي مختوم'
  },

  // --- قسم كابلات الشحن ---
  {
    id: 'cable-anker-powerline-select-plus',
    name: 'Anker PowerLine Select+ (USB-C to Lightning)',
    description: 'كابل أنكر القماشي المقاوم للقطع، يدعم الشحن السريع PD لنقل البيانات والطاقة بأمان.',
    price: 650,
    category: Category.CABLES,
    image: 'https://m.media-amazon.com/images/I/61NfT+fR-PL._AC_SL1500_.jpg',
    gallery: [
      'https://m.media-amazon.com/images/I/61y8x7eH7pL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61nN-fR7pLL._AC_SL1500_.jpg'
    ],
    condition: 'أصلي مختوم',
    specs: ['الطول: 3ft (0.9m)', 'الخامة: نايلون مضفر']
  }
];

export const SERVICES: Service[] = [
  { id: 's1', title: 'بيع وشراء', description: 'نشتري موبايلك القديم بأعلى سعر.', icon: 'RefreshCcw' },
  { id: 's2', title: 'صيانة فورية', description: 'تغيير شاشات وبطاريات أصلية.', icon: 'Wrench' },
  { id: 's3', title: 'إكسسوارات', description: 'أفخم الجرابات والشواحن.', icon: 'ShoppingBag' }
];