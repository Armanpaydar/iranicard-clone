'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { cn } from '@/lib/utils'
import Container from '../ui/Container'
import MobileMenu from './MobileMenu'
import Button from '../ui/Button'

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Active section detection
      const sections = ['home', 'services', 'features', 'how-it-works', 'testimonials', 'faq']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    
    if (element) {
      const offsetTop = element.offsetTop - 80 // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
      setIsMobileMenuOpen(false)
    }
  }

  const navLinks = [
    { name: 'خانه', href: '#home', id: 'home' },
    { name: 'خدمات', href: '#services', id: 'services' },
    { name: 'ویژگی‌ها', href: '#features', id: 'features' },
    { name: 'نحوه کار', href: '#how-it-works', id: 'how-it-works' },
    { name: 'نظرات', href: '#testimonials', id: 'testimonials' },
    { name: 'سوالات متداول', href: '#faq', id: 'faq' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              className="text-2xl font-bold text-primary-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ایرانی کارت
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-reverse space-x-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={cn(
                    'relative font-medium text-sm transition-colors',
                    activeSection === link.id
                      ? 'text-primary-600'
                      : 'text-neutral-700 hover:text-primary-600'
                  )}
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  const element = document.getElementById('home')
                  if (element) {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                }}
              >
                ورود / ثبت نام
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 text-neutral-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiX className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiMenu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </Container>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            links={navLinks}
            onClose={() => setIsMobileMenuOpen(false)}
            activeSection={activeSection}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
