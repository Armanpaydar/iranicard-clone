'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Container from '../ui/Container'

interface Stat {
  id: string
  number: string
  label: string
  suffix?: string
  description: string
}

const stats: Stat[] = [
  { id: '1', number: '1', label: 'میلیون', suffix: '+', description: 'کاربر فعال' },
  { id: '2', number: '500', label: 'هزار', suffix: '+', description: 'تراکنش روزانه' },
  { id: '3', number: '99.9', label: 'درصد', suffix: '%', description: 'آپتایم' },
  { id: '4', number: '24', label: 'ساعت', suffix: '/7', description: 'پشتیبانی' },
]

const Stats: React.FC = () => {

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            آمار و ارقام ما
          </h2>
          <p className="text-lg sm:text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            اعداد و ارقامی که نشان‌دهنده اعتماد و رضایت مشتریان ماست
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <motion.div
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.3 + index * 0.1,
                  type: 'spring',
                  stiffness: 200,
                  damping: 15,
                }}
              >
                {stat.number}
                {stat.suffix && (
                  <span className="text-primary-300">{stat.suffix}</span>
                )}
              </motion.div>
              <div className="text-lg md:text-xl font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-primary-200">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Stats
