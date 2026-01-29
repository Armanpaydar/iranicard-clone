import React from 'react'

interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  children: React.ReactNode
  className?: string
}

const Heading: React.FC<HeadingProps> = ({
  as: Component = 'h2',
  size = 'md',
  children,
  className = '',
}) => {
  const sizeClasses = {
    xs: 'text-base',
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
    '2xl': 'text-4xl',
    '3xl': 'text-5xl',
    '4xl': 'text-6xl',
  }

  const baseClasses = `font-bold text-neutral-900 ${sizeClasses[size]} ${className}`

  return <Component className={baseClasses}>{children}</Component>
}

export default Heading
