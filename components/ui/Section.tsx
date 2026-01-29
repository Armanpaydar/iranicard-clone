import React from 'react'
import Container from './Container'

interface SectionProps {
  children: React.ReactNode
  className?: string
  background?: 'white' | 'gray' | 'primary' | 'gradient'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  id?: string
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  background = 'white',
  padding = 'md',
  id,
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-neutral-50',
    primary: 'bg-primary-50',
    gradient: 'bg-gradient-to-br from-primary-50 via-white to-secondary-50',
  }

  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12 sm:py-16 md:py-20',
    lg: 'py-16 sm:py-20 md:py-24',
    xl: 'py-20 sm:py-24 md:py-32',
  }

  return (
    <section
      id={id}
      className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  )
}

export default Section
