'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowLeft } from 'react-icons/fa'
import Container from '../ui/Container'
import Button from '../ui/Button'

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const handleGetStarted = () => {
    const element = document.getElementById('services')
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }

  const handleLearnMore = () => {
    const element = document.getElementById('how-it-works')
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative pt-28 sm:pt-36 md:pt-40 pb-20 sm:pb-24 md:pb-32 bg-gradient-to-br from-primary-50/50 via-white to-secondary-50/30 overflow-hidden" aria-labelledby="hero-heading">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-primary-600 rounded-full animate-pulse" />
              پلتفرم پیشرو پرداخت الکترونیک
            </motion.div>

            <motion.h1
              id="hero-heading"
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-8 leading-[1.1] tracking-tight"
            >
              راهکارهای پرداخت هوشمند
              <br />
              <motion.span
                className="text-primary-600 inline-block"
                animate={{
                  backgroundPosition: ['0%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                style={{
                  backgroundImage: 'linear-gradient(90deg, #0284c7, #0ea5e9, #0284c7)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                برای کسب‌وکار شما
              </motion.span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-neutral-600 mb-12 leading-relaxed max-w-3xl mx-auto px-4 font-normal"
            >
              پلتفرم پیشرو در ارائه راهکارهای پرداخت الکترونیک و خدمات مالی
              با امنیت بالا و سرعت بی‌نظیر
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-16"
            >
              <Button size="lg" className="group flex items-center" onClick={handleGetStarted}>
                شروع کنید
                <FaArrowLeft className="mr-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" onClick={handleLearnMore}>
                بیشتر بدانید
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto px-4"
            >
              {[
                { number: '1M+', label: 'کاربر فعال' },
                { number: '99.9%', label: 'آپتایم' },
                { number: '24/7', label: 'پشتیبانی' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default Hero
