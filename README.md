# ایرانی کارت - Iranicard Clone

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🇬🇧 English

A modern, responsive clone of Iranicard - a leading platform for electronic payment solutions and financial services. Built with Next.js 14, Tailwind CSS, and Framer Motion.

### Features

- ⚡ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 🎭 Framer Motion for animations
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🌐 Full RTL (right-to-left) support for Persian language
- ♿ Accessibility features
- 🚀 SEO optimized
- 🎯 TypeScript for type safety

### Quick Start

#### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

#### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Project Structure

```
iranicard-clone/
├── app/                    # Next.js pages and layouts
│   ├── layout.tsx         # Main layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── fonts.ts           # Font configuration
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── sections/         # Home page sections
│   └── ui/               # Reusable UI components
├── data/                 # Static data
├── lib/                  # Helper functions and constants
└── public/               # Static files
```

### Main Components

#### Layout Components
- `Navbar` - Navigation bar with mobile menu
- `Footer` - Footer with links and contact information

#### Section Components
- `Hero` - Main hero section
- `Services` - Services showcase
- `Features` - Features and benefits
- `HowItWorks` - How it works in 4 steps
- `Testimonials` - Customer testimonials (Carousel)
- `FAQ` - Frequently asked questions (Accordion)

#### UI Components
- `Button` - Button with various styles
- `Container` - Responsive container
- `Accordion` - Accordion for FAQ
- `Carousel` - Carousel for testimonials

### Styling

The project uses Tailwind CSS with custom configuration:

- **Colors**: Primary (blue), Secondary (purple), Neutral (gray)
- **Font**: Vazirmatn (Persian font)
- **Spacing**: 4px base unit system
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)

### Animations

Animations are implemented using Framer Motion:
- Entrance animations
- Hover effects
- Scroll-based animations
- Micro-interactions

### SEO

- Complete metadata for SEO
- Open Graph tags
- Twitter Card tags
- Sitemap.xml
- Robots.txt
- Semantic HTML5

### Deployment

#### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Vercel automatically builds and deploys

#### Other Platforms

```bash
npm run build
npm start
```

### Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🇮🇷 فارسی

یک پلتفرم پیشرو در ارائه راهکارهای پرداخت الکترونیک و خدمات مالی با استفاده از Next.js 14، Tailwind CSS، و Framer Motion.

### ویژگی‌ها

- ⚡ Next.js 14 با App Router
- 🎨 Tailwind CSS برای استایل‌دهی
- 🎭 Framer Motion برای انیمیشن‌ها
- 📱 طراحی Responsive (موبایل، تبلت، دسکتاپ)
- 🌐 پشتیبانی کامل از RTL (راست به چپ) برای زبان فارسی
- ♿ دسترسی‌پذیری (Accessibility)
- 🚀 بهینه‌سازی شده برای SEO
- 🎯 TypeScript برای نوع‌دهی ایمن

### شروع سریع

#### پیش‌نیازها

- Node.js 18.x یا بالاتر
- npm یا yarn یا pnpm

#### نصب

```bash
# نصب وابستگی‌ها
npm install

# اجرای سرور توسعه
npm run dev

# ساخت برای تولید
npm run build

# اجرای نسخه تولید
npm start
```

باز کردن [http://localhost:3000](http://localhost:3000) در مرورگر.

### ساختار پروژه

```
iranicard-clone/
├── app/                    # صفحات و layout های Next.js
│   ├── layout.tsx         # Layout اصلی
│   ├── page.tsx           # صفحه اصلی
│   ├── globals.css        # استایل‌های سراسری
│   └── fonts.ts           # تنظیمات فونت
├── components/            # کامپوننت‌های React
│   ├── layout/           # کامپوننت‌های layout
│   ├── sections/         # بخش‌های صفحه اصلی
│   └── ui/               # کامپوننت‌های UI قابل استفاده مجدد
├── data/                 # داده‌های استاتیک
├── lib/                  # توابع و ثابت‌های کمکی
└── public/               # فایل‌های استاتیک
```

### کامپوننت‌های اصلی

#### Layout Components
- `Navbar` - نوار ناوبری با منوی موبایل
- `Footer` - فوتر با لینک‌ها و اطلاعات تماس

#### Section Components
- `Hero` - بخش معرفی اصلی
- `Services` - نمایش خدمات
- `Features` - ویژگی‌ها و مزایا
- `HowItWorks` - نحوه کار در ۴ مرحله
- `Testimonials` - نظرات مشتریان (Carousel)
- `FAQ` - سوالات متداول (Accordion)

#### UI Components
- `Button` - دکمه با انواع مختلف
- `Container` - کانتینر responsive
- `Accordion` - آکاردئون برای FAQ
- `Carousel` - کاروسل برای testimonials

### استایل‌دهی

پروژه از Tailwind CSS استفاده می‌کند با پیکربندی سفارشی:

- **رنگ‌ها**: Primary (آبی)، Secondary (بنفش)، Neutral (خاکستری)
- **فونت**: Vazirmatn (فونت فارسی)
- **Spacing**: سیستم ۴px base unit
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)

### انیمیشن‌ها

انیمیشن‌ها با استفاده از Framer Motion پیاده‌سازی شده‌اند:
- انیمیشن‌های ورود (entrance animations)
- Hover effects
- Scroll-based animations
- Micro-interactions

### SEO

- Metadata کامل برای SEO
- Open Graph tags
- Twitter Card tags
- Sitemap.xml
- Robots.txt
- Semantic HTML5

### استقرار

#### Vercel (توصیه شده)

1. Push کردن کد به GitHub
2. Import کردن پروژه در Vercel
3. Vercel به صورت خودکار build و deploy می‌کند

#### سایر پلتفرم‌ها

```bash
npm run build
npm start
```

### مشارکت

مشارکت‌ها خوش‌آمد هستند! لطفاً Pull Request ارسال کنید.

### مجوز

این پروژه تحت مجوز MIT منتشر شده است - برای جزئیات بیشتر فایل [LICENSE](LICENSE) را ببینید.
