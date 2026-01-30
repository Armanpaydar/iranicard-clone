'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  index?: number
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-white rounded-xl border border-neutral-200/60 p-8 transition-all duration-300 hover:border-primary-200/60 hover:shadow-lg cursor-pointer overflow-hidden shadow-sm h-full flex flex-col"
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon Container */}
        <div className="mb-6">
          <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center group-hover:bg-primary-100 transition-colors duration-300">
            <Icon className="w-8 h-8 text-primary-600" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-neutral-900 mb-4 group-hover:text-primary-700 transition-colors duration-300 leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-base text-neutral-600 leading-relaxed flex-grow">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

export default ServiceCard
