import { Vazirmatn } from 'next/font/google'

export const VazirmatnFont = Vazirmatn({
  subsets: ['latin', 'arabic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-vazirmatn',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
})

// Keep Vazir for backward compatibility
export const Vazir = VazirmatnFont
