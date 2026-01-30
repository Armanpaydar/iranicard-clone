'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]'
    
    const variants = {
      primary: 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/25 focus:ring-primary-500 shadow-md shadow-primary-600/10',
      secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 hover:shadow-lg hover:shadow-secondary-600/25 focus:ring-secondary-500 shadow-md shadow-secondary-600/10',
      outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 hover:border-primary-700 hover:text-primary-700 focus:ring-primary-500 bg-white',
      ghost: 'text-primary-600 hover:bg-primary-50 hover:text-primary-700 focus:ring-primary-500',
    }
    
    const sizes = {
      sm: 'px-5 py-2.5 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }
    
    const classes = cn(baseStyles, variants[variant], sizes[size], className)
    
    return (
      <motion.button
        ref={ref}
        className={classes}
        whileHover={{ y: -1 }}
        whileTap={{ y: 0 }}
        transition={{ duration: 0.2 }}
        {...(props as any)}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export default Button
