'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Container from '../ui/Container'
import Accordion from '../ui/Accordion'
import { faqData } from '@/data/faq'
import { getFAQSchema } from '@/lib/structured-data'

const FAQ: React.FC = () => {
  const faqSchema = getFAQSchema(faqData)

  return (
    <section id="faq" className="py-20 sm:py-24 md:py-32 bg-gradient-to-br from-white via-neutral-50/50 to-white" aria-labelledby="faq-heading">
      {/* Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Container>
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
          <h2 id="faq-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
            سوالات متداول
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            پاسخ به سوالات رایج شما درباره خدمات ایرانی کارت
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion items={faqData} />
        </motion.div>
      </Container>
    </section>
  )
}

export default FAQ
