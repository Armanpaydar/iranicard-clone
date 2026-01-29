'use client'

import React from 'react'

interface SkipLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

/**
 * Skip link component for accessibility
 * Allows keyboard users to skip to main content
 */
const SkipLink: React.FC<SkipLinkProps> = ({ href, children, className = '' }) => {
  return (
    <a
      href={href}
      className={`sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 transition-all ${className}`}
    >
      {children}
    </a>
  )
}

export default SkipLink
