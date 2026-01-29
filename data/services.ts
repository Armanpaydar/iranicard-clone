import { FaCreditCard, FaWallet, FaShieldAlt, FaChartLine, FaMobileAlt, FaGlobe } from 'react-icons/fa'

export interface Service {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

export const services: Service[] = [
  {
    id: '1',
    title: 'پرداخت آنلاین',
    description: 'سیستم پرداخت آنلاین امن و سریع برای تمامی تراکنش‌های مالی شما',
    icon: FaCreditCard,
  },
  {
    id: '2',
    title: 'کیف پول الکترونیک',
    description: 'مدیریت آسان و سریع موجودی حساب و تراکنش‌های مالی',
    icon: FaWallet,
  },
  {
    id: '3',
    title: 'امنیت بالا',
    description: 'استفاده از آخرین تکنولوژی‌های امنیتی برای محافظت از اطلاعات شما',
    icon: FaShieldAlt,
  },
  {
    id: '4',
    title: 'گزارش‌گیری دقیق',
    description: 'دسترسی به گزارش‌های کامل و دقیق از تمامی تراکنش‌های مالی',
    icon: FaChartLine,
  },
  {
    id: '5',
    title: 'اپلیکیشن موبایل',
    description: 'دسترسی آسان به تمامی خدمات از طریق اپلیکیشن موبایل',
    icon: FaMobileAlt,
  },
  {
    id: '6',
    title: 'پشتیبانی ۲۴/۷',
    description: 'پشتیبانی تمام‌وقت برای پاسخگویی به سوالات و حل مشکلات شما',
    icon: FaGlobe,
  },
]
