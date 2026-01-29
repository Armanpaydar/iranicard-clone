'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HiX } from 'react-icons/hi'
import { cn } from '@/lib/utils'
import Button from '../ui/Button'

interface MobileMenuProps {
  links: Array<{ name: string; href: string; id: string }>
  onClose: () => void
  activeSection?: string
}

const MobileMenu: React.FC<MobileMenuProps> = ({ links, onClose, activeSection }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
      onClose()
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 md:hidden"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Menu Panel */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-neutral-200">
            <h2 className="text-xl font-bold text-primary-600">منو</h2>
            <button
              onClick={onClose}
              className="p-2 text-neutral-700 hover:text-primary-600 transition-colors"
              aria-label="Close menu"
            >
              <HiX className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto p-6">
            <ul className="space-y-4">
              {links.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={cn(
                      'block py-3 px-4 rounded-lg transition-all duration-200 font-medium text-lg',
                      activeSection === link.id
                        ? 'text-primary-600 bg-primary-50 border-r-2 border-primary-600'
                        : 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-50'
                    )}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Footer CTA */}
          <div className="p-6 border-t border-neutral-200">
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={onClose}
            >
              ورود / ثبت نام
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default MobileMenu
