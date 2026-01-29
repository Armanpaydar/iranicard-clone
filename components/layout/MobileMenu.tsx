'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HiX } from 'react-icons/hi'
import Button from '../ui/Button'

interface MobileMenuProps {
  links: Array<{ name: string; href: string }>
  onClose: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ links, onClose }) => {
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
                    onClick={onClose}
                    className="block py-3 text-neutral-700 hover:text-primary-600 transition-colors font-medium text-lg"
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
