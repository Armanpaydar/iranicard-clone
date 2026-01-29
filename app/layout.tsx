import type { Metadata } from 'next'
import { Vazir } from './fonts'
import './globals.css'
import { getOrganizationSchema, getWebSiteSchema } from '@/lib/structured-data'

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
    images: [
      {
        url: 'https://iranicard.ir/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ایرانی کارت - راهکارهای پرداخت هوشمند',
      },
    ],
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
  const organizationSchema = getOrganizationSchema()
  const websiteSchema = getWebSiteSchema()

  return (
    <html lang="fa" dir="rtl" className={Vazir.variable}>
      <head>
        {/* Viewport and PWA Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <meta name="theme-color" content="#0284c7" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ایرانی کارت" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-sans">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:shadow-lg"
        >
          پرش به محتوای اصلی
        </a>
        {children}
      </body>
    </html>
  )
}
