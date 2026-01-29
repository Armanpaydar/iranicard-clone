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
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-white rounded-xl border border-neutral-200 p-4 sm:p-6 md:p-8 transition-all duration-300 hover:border-primary-300 hover:shadow-xl cursor-pointer overflow-hidden"
    >
      {/* Subtle hover border highlight */}
      <div className="absolute inset-0 rounded-xl border-2 border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      {/* Gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        initial={false}
      />
      
      {/* Icon Container */}
      <div className="mb-5 relative z-10">
        <motion.div
          className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-50 rounded-lg flex items-center justify-center group-hover:bg-primary-100 transition-colors duration-300"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.5, type: 'spring' }}
        >
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-600" />
        </motion.div>
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors duration-300 relative z-10">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-base text-neutral-600 leading-relaxed relative z-10">
        {description}
      </p>

      {/* Subtle indicator on hover */}
      <div className="mt-5 pt-4 border-t border-neutral-100 group-hover:border-primary-100 transition-colors duration-300 relative z-10">
        <motion.span
          className="text-xs text-primary-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-1"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          مشاهده جزئیات
          <motion.svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </motion.svg>
        </motion.span>
      </div>
    </motion.div>
  )
}

export default ServiceCard
