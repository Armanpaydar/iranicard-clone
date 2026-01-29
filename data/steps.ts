export interface Step {
  id: string
  number: number
  title: string
  description: string
}

export const steps: Step[] = [
  {
    id: '1',
    number: 1,
    title: 'ثبت نام',
    description: 'ثبت نام ساده و سریع با وارد کردن اطلاعات اولیه',
  },
  {
    id: '2',
    number: 2,
    title: 'تایید هویت',
    description: 'تایید هویت از طریق کد ملی و شماره تلفن همراه',
  },
  {
    id: '3',
    number: 3,
    title: 'افزودن کارت',
    description: 'افزودن کارت بانکی خود به حساب کاربری',
  },
  {
    id: '4',
    number: 4,
    title: 'شروع استفاده',
    description: 'شروع استفاده از تمامی خدمات پرداخت آنلاین',
  },
]
