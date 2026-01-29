'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi'
import { FaStar } from 'react-icons/fa'

interface CarouselItem {
  id: string
  [key: string]: any
}

interface CarouselProps<T extends CarouselItem> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
  autoPlay?: boolean
  autoPlayInterval?: number
}

function Carousel<T extends CarouselItem>({
  items,
  renderItem,
  autoPlay = false,
  autoPlayInterval = 5000,
}: CarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  useEffect(() => {
    if (!autoPlay || items.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, items.length])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      goToNext()
    }
    if (isRightSwipe) {
      goToPrevious()
    }
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (items.length === 0) return null

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div 
        className="relative overflow-hidden rounded-xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.95 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {renderItem(items[currentIndex])}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      {items.length > 1 && (
        <>
          <motion.button
            onClick={goToPrevious}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors z-10 group"
            aria-label="Previous"
            whileHover={{ scale: 1.1, x: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            <HiChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            onClick={goToNext}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors z-10 group"
            aria-label="Next"
            whileHover={{ scale: 1.1, x: 4 }}
            whileTap={{ scale: 0.9 }}
          >
            <HiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform" />
          </motion.button>
        </>
      )}

      {/* Dots Indicator */}
      {items.length > 1 && (
        <div className="flex justify-center mt-6 space-x-reverse space-x-2">
          {items.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-primary-600 w-8'
                  : 'bg-neutral-300 hover:bg-neutral-400 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                width: index === currentIndex ? 32 : 8,
              }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Carousel
