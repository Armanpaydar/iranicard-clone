import type { Metadata } from 'next'
import { Vazir } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'ایرانی کارت - راهکارهای پرداخت هوشمند',
  description: 'پلتفرم پیشرو در ارائه راهکارهای پرداخت الکترونیک و خدمات مالی با امنیت بالا و سرعت بی‌نظیر',
  keywords: ['پرداخت الکترونیک', 'کارت بانکی', 'ایرانی کارت', 'خدمات مالی', 'درگاه پرداخت', 'کیف پول الکترونیک'],
  authors: [{ name: 'Iranicard' }],
  creator: 'Iranicard',
  publisher: 'Iranicard',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://iranicard.ir'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ایرانی کارت - راهکارهای پرداخت هوشمند',
    description: 'پلتفرم پیشرو در ارائه راهکارهای پرداخت الکترونیک و خدمات مالی',
    url: 'https://iranicard.ir',
    siteName: 'ایرانی کارت',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ایرانی کارت - راهکارهای پرداخت هوشمند',
    description: 'پلتفرم پیشرو در ارائه راهکارهای پرداخت الکترونیک و خدمات مالی',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl" className={Vazir.variable}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
