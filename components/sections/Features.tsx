'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Container from '../ui/Container'
import { features } from '@/data/features'

const Features: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="features" className="py-20 sm:py-24 md:py-32 bg-gradient-to-br from-white via-neutral-50/50 to-primary-50/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
            چرا ایرانی کارت؟
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            ویژگی‌های منحصر به فردی که ما را از دیگران متمایز می‌کند
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden cursor-pointer border border-neutral-200/60 h-full flex flex-col"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <motion.div
                    className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-700 transition-colors duration-300 shadow-md shadow-primary-600/20"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4 group-hover:text-primary-700 transition-colors duration-300 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-base text-neutral-600 leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}

export default Features
