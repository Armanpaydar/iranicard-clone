import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import Container from '../ui/Container'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'پرداخت آنلاین', href: '#' },
      { name: 'درگاه پرداخت', href: '#' },
      { name: 'کیف پول الکترونیک', href: '#' },
      { name: 'کارت اعتباری', href: '#' },
    ],
    company: [
      { name: 'درباره ما', href: '#' },
      { name: 'تماس با ما', href: '#' },
      { name: 'قوانین و مقررات', href: '#' },
      { name: 'حریم خصوصی', href: '#' },
    ],
    support: [
      { name: 'مرکز پشتیبانی', href: '#' },
      { name: 'سوالات متداول', href: '#faq' },
      { name: 'راهنمای استفاده', href: '#' },
      { name: 'دانلود اپلیکیشن', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">ایرانی کارت</h3>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                پلتفرم پیشرو در ارائه راهکارهای پرداخت الکترونیک و خدمات مالی
                با بیش از یک دهه تجربه در زمینه فناوری‌های مالی
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-reverse space-x-3">
                  <FaPhone className="text-primary-500" />
                  <span>021-12345678</span>
                </div>
                <div className="flex items-center space-x-reverse space-x-3">
                  <FaEnvelope className="text-primary-500" />
                  <span>info@iranicard.ir</span>
                </div>
                <div className="flex items-center space-x-reverse space-x-3">
                  <FaMapMarkerAlt className="text-primary-500" />
                  <span>تهران، خیابان ولیعصر</span>
                </div>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-white font-semibold mb-4">خدمات</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-white font-semibold mb-4">شرکت</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h4 className="text-white font-semibold mb-4">پشتیبانی</h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-12 pt-8 border-t border-neutral-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-reverse space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-primary-600 transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
              <p className="text-neutral-500 text-sm">
                © {currentYear} ایرانی کارت. تمامی حقوق محفوظ است.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
