'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface InteractiveCardProps {
  children: React.ReactNode
  className?: string
  hoverEffect?: 'lift' | 'scale' | 'glow' | 'none'
  delay?: number
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({
  children,
  className = '',
  hoverEffect = 'lift',
  delay = 0,
}) => {
  const hoverVariants = {
    lift: { y: -8, transition: { duration: 0.2 } },
    scale: { scale: 1.05, transition: { duration: 0.2 } },
    glow: {
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: { duration: 0.2 },
    },
    none: {},
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay, duration: 0.4 }}
      whileHover={hoverVariants[hoverEffect]}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default InteractiveCard
