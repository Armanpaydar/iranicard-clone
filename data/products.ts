export interface Product {
  id: string
  title: string
  titleEn?: string
  description: string
  image: string
  gradient: string
  badges?: string[]
  flags?: string[]
}

export const products: Product[] = [
  {
    id: '1',
    title: 'استارز تلگرام',
    titleEn: 'Telegram Stars',
    description: 'خرید و فروش استارز تلگرام',
    image: '/images/products/telegram-stars.svg',
    gradient: 'from-blue-900 via-gray-800 to-blue-900',
    badges: ['🌍'],
  },
  {
    id: '2',
    title: 'اشتراک تلگرام پرمیوم',
    titleEn: 'Telegram Premium',
    description: 'خرید اشتراک پرمیوم تلگرام',
    image: '/images/products/telegram-premium.svg',
    gradient: 'from-purple-600 via-pink-500 to-purple-600',
    badges: ['🌍'],
  },
  {
    id: '3',
    title: 'گیفت کارت ایکس باکس',
    titleEn: 'Xbox Gift Card',
    description: 'خرید گیفت کارت ایکس باکس',
    image: '/images/products/xbox.svg',
    gradient: 'from-green-500 to-green-600',
    flags: ['🇹🇷', '🇺🇸', '🌍'],
  },
  {
    id: '4',
    title: 'ویزا کارت گوگل پلی',
    titleEn: 'Google Play Visa Card',
    description: 'خرید ویزا کارت گوگل پلی',
    image: '/images/products/google-play.svg',
    gradient: 'from-teal-500 via-orange-500 to-red-500',
    badges: ['💳', '💳', '💰'],
  },
  {
    id: '5',
    title: 'گیفت کارت استیم',
    titleEn: 'Steam Gift Card',
    description: 'خرید گیفت کارت استیم',
    image: '/images/products/steam.svg',
    gradient: 'from-teal-700 via-blue-800 to-teal-700',
    flags: ['🇪🇺', '🇺🇸', '🇹🇷', '🌍'],
  },
  {
    id: '6',
    title: 'گیفت کارت پلی استیشن',
    titleEn: 'PlayStation Gift Card',
    description: 'خرید گیفت کارت پلی استیشن',
    image: '/images/products/playstation.svg',
    gradient: 'from-blue-500 to-blue-600',
    flags: ['🇹🇷', '🇧🇷', '🇯🇵', '🇨🇦', '🇬🇧', '🇺🇸', '🇩🇪'],
  },
  {
    id: '7',
    title: 'گیفت کارت اپل آیتونز',
    titleEn: 'Apple iTunes Gift Card',
    description: 'خرید گیفت کارت اپل آیتونز',
    image: '/images/products/apple-itunes.svg',
    gradient: 'from-blue-400 to-blue-500',
    flags: ['🇫🇷', '🇩🇪', '🇨🇦', '🇬🇧', '🇦🇺', '🇦🇪', '🇹🇷', '🇺🇸', '🌍'],
  },
  {
    id: '8',
    title: 'اشتراک هوش مصنوعی',
    titleEn: 'AI Premium Accounts',
    description: 'خرید پرمیوم اکانت‌های هوش مصنوعی',
    image: '/images/products/ai-premium.svg',
    gradient: 'from-indigo-600 via-purple-600 to-pink-600',
    badges: ['🤖', '💎', '⭐', '🔷'],
  },
  {
    id: '9',
    title: 'اکانت چت جی پی تی پلاس',
    titleEn: 'ChatGPT Plus Account',
    description: 'خرید اکانت چت جی پی تی پلاس',
    image: '/images/products/chatgpt-plus.svg',
    gradient: 'from-green-600 to-green-700',
    badges: ['👥', '💳', '🌍'],
  },
  {
    id: '10',
    title: 'سیم کارت فیزیکی',
    titleEn: 'Physical SIM Card',
    description: 'خرید سیم کارت فیزیکی',
    image: '/images/products/sim-card.svg',
    gradient: 'from-blue-500 to-blue-600',
    badges: ['💰', '🇲🇾'],
  },
]
