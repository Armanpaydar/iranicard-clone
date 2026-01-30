'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Container from '../ui/Container'
import ServiceCard from '../ui/ServiceCard'
import { services } from '@/data/services'

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-24 md:py-32 bg-neutral-50/50">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-1 bg-primary-600 rounded-full mx-auto" />
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
            خدمات ما
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            مجموعه‌ای کامل از راهکارهای پرداخت الکترونیک و خدمات مالی
            برای پاسخگویی به تمامی نیازهای کسب‌وکار شما
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Services
