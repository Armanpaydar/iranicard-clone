'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import Container from '../ui/Container'
import Carousel from '../ui/Carousel'
import { testimonials } from '@/data/testimonials'

const Testimonials: React.FC = () => {
  const renderTestimonial = (testimonial: typeof testimonials[0]) => (
    <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-neutral-100">
      <div className="flex items-center justify-center mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <FaStar key={i} className="w-5 h-5 text-yellow-400 ml-1" />
        ))}
      </div>
      <blockquote className="text-lg md:text-xl text-neutral-700 mb-6 leading-relaxed text-center">
        "{testimonial.content}"
      </blockquote>
      <div className="text-center">
        <p className="font-semibold text-neutral-900 text-lg">
          {testimonial.name}
        </p>
        <p className="text-neutral-600">
          {testimonial.role} در {testimonial.company}
        </p>
      </div>
    </div>
  )

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            نظرات مشتریان
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            تجربه واقعی مشتریان ما از استفاده از خدمات ایرانی کارت
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Carousel
            items={testimonials}
            renderItem={renderTestimonial}
            autoPlay={true}
            autoPlayInterval={6000}
          />
        </motion.div>
      </Container>
    </section>
  )
}

export default Testimonials
