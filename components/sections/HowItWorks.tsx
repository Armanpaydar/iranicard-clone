'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Container from '../ui/Container'
import { steps } from '@/data/steps'

const HowItWorks: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-20 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            نحوه کار
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            در ۴ قدم ساده شروع به استفاده از خدمات ما کنید
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-l from-primary-200 via-primary-400 to-primary-200" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-4 xl:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={stepVariants}
                className="relative group"
                whileHover={{ y: -5 }}
              >
                <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center relative overflow-hidden">
                  {/* Decorative background */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    {/* Step Number */}
                    <motion.div
                      className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-white text-xl sm:text-2xl font-bold"
                      whileHover={{ scale: 1.15, rotate: 360 }}
                      transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
                    >
                      {step.number}
                      <motion.div
                        className="absolute inset-0 bg-primary-400 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    </motion.div>

                    {/* Step Content */}
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow (Mobile/Tablet) */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="lg:hidden flex justify-center my-4"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.2 }}
                  >
                    <div className="w-0.5 h-8 bg-primary-300" />
                  </motion.div>
                )}

                {/* Connector Arrow (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 left-1/2 w-full h-0.5">
                    <motion.div
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary-400 rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.2 }}
                    >
                      <div className="w-0 h-0 border-l-4 border-l-primary-600 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default HowItWorks
