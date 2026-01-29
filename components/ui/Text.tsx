import React from 'react'

interface TextProps {
  as?: 'p' | 'span' | 'div' | 'label'
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
  weight?: 'normal' | 'medium' | 'bold'
  color?: 'default' | 'muted' | 'primary' | 'secondary'
  children: React.ReactNode
  className?: string
}

const Text: React.FC<TextProps> = ({
  as: Component = 'p',
  size = 'base',
  weight = 'normal',
  color = 'default',
  children,
  className = '',
}) => {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  }

  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    bold: 'font-bold',
  }

  const colorClasses = {
    default: 'text-neutral-900',
    muted: 'text-neutral-600',
    primary: 'text-primary-600',
    secondary: 'text-secondary-600',
  }

  const classes = `${sizeClasses[size]} ${weightClasses[weight]} ${colorClasses[color]} ${className}`

  return <Component className={classes}>{children}</Component>
}

export default Text
