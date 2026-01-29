'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Container from '../ui/Container'
import Accordion from '../ui/Accordion'
import { faqData } from '@/data/faq'

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            سوالات متداول
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
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
