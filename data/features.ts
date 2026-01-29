import { FaCheckCircle, FaLock, FaRocket, FaUsers, FaHeadset, FaAward } from 'react-icons/fa'

export interface Feature {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

export const features: Feature[] = [
  {
    id: '1',
    title: 'امنیت بالا',
    description: 'استفاده از استانداردهای بین‌المللی امنیت برای محافظت از اطلاعات شما',
    icon: FaLock,
  },
  {
    id: '2',
    title: 'سرعت بالا',
    description: 'پردازش سریع تراکنش‌ها با استفاده از زیرساخت‌های پیشرفته',
    icon: FaRocket,
  },
  {
    id: '3',
    title: 'رابط کاربری ساده',
    description: 'طراحی کاربرپسند و ساده برای تجربه کاربری بهتر',
    icon: FaCheckCircle,
  },
  {
    id: '4',
    title: 'پشتیبانی حرفه‌ای',
    description: 'تیم پشتیبانی متخصص و آماده پاسخگویی به تمامی سوالات شما',
    icon: FaHeadset,
  },
  {
    id: '5',
    title: 'مشتریان راضی',
    description: 'بیش از یک میلیون کاربر راضی از خدمات ما',
    icon: FaUsers,
  },
  {
    id: '6',
    title: 'گواهینامه‌های معتبر',
    description: 'دارای تمامی گواهینامه‌های امنیتی و استانداردهای بین‌المللی',
    icon: FaAward,
  },
]
