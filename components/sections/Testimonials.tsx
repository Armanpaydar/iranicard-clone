'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import Container from '../ui/Container'
import Carousel from '../ui/Carousel'
import { testimonials } from '@/data/testimonials'

const Testimonials: React.FC = () => {
  const renderTestimonial = (testimonial: typeof testimonials[0]) => (
    <motion.div
      className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl shadow-lg border border-neutral-100 relative overflow-hidden"
      whileHover={{ y: -4, shadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
      transition={{ duration: 0.2 }}
    >
      {/* Decorative quote mark */}
      <div className="absolute top-4 right-4 text-primary-100 text-6xl font-serif leading-none">
        &ldquo;
      </div>
      
      <div className="flex items-center justify-center mb-6 relative z-10">
        {[...Array(testimonial.rating)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          >
            <FaStar className="w-5 h-5 text-yellow-400 ml-1" />
          </motion.div>
        ))}
      </div>
      
      <blockquote className="text-base sm:text-lg md:text-xl text-neutral-700 mb-4 sm:mb-6 leading-relaxed text-center relative z-10 px-2">
        &ldquo;{testimonial.content}&rdquo;
      </blockquote>
      
      <div className="text-center relative z-10">
        <p className="font-semibold text-neutral-900 text-lg mb-1">
          {testimonial.name}
        </p>
        <p className="text-neutral-600 text-sm">
          {testimonial.role} در {testimonial.company}
        </p>
      </div>
      
      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      />
    </motion.div>
  )

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary-400 rounded-full blur-3xl" />
      </div>
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-1 bg-primary-600 rounded-full mx-auto" />
          </motion.div>
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
