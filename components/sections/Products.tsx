'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi'
import Container from '../ui/Container'
import { products } from '@/data/products'

// Product Image Component with Enhanced Fallback
const ProductImage: React.FC<{ 
  src: string
  alt: string
  fallbackText: string
  productId: string
}> = ({ src, alt, fallbackText, productId }) => {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Try to load image and handle errors gracefully
  const handleImageError = () => {
    if (!hasError) {
      setHasError(true)
      setIsLoading(false)
      // Don't try external placeholder, just show fallback UI
    }
  }

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  // Check if it's an SVG file
  const isSVG = imgSrc.toLowerCase().endsWith('.svg')

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-white/10 rounded-lg animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}
      
      {!hasError ? (
        <Image
          src={imgSrc}
          alt={alt}
          fill
          className={`object-contain drop-shadow-2xl transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} filter brightness-110 group-hover:brightness-125`}
          sizes="128px"
          onError={handleImageError}
          onLoad={handleImageLoad}
          loading="lazy"
          decoding="async"
          unoptimized={isSVG || imgSrc.startsWith('http')}
          priority={false}
        />
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full h-full flex items-center justify-center bg-white/20 rounded-lg backdrop-blur-sm border border-white/30"
        >
          <div className="text-black text-xs sm:text-sm font-bold text-center px-2 break-words">
            {fallbackText.substring(0, 15)}
          </div>
        </motion.div>
      )}
    </div>
  )
}

const Products: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      // In RTL, scroll left means moving content to the right visually
      scrollContainerRef.current.scrollBy({
        left: 320,
        behavior: 'smooth',
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      // In RTL, scroll right means moving content to the left visually
      scrollContainerRef.current.scrollBy({
        left: -320,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="products" className="py-20 sm:py-24 md:py-32 bg-white" aria-labelledby="products-heading">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 id="products-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
            محصولات و گیفت کارت‌ها
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            خرید و فروش انواع گیفت کارت و اشتراک‌های دیجیتال با بهترین قیمت
          </p>
        </motion.div>

        {/* Products Horizontal Scroll Container */}
        <div className="relative">
          {/* Scroll Buttons - Top */}
          <div className="flex justify-end gap-3 mb-6">
            <motion.button
              onClick={scrollRight}
              className="w-12 h-12 bg-white/80 backdrop-blur-sm border border-neutral-200/50 rounded-xl flex items-center justify-center hover:bg-white hover:border-primary-400 hover:shadow-lg transition-all duration-300 shadow-md"
              aria-label="Scroll right"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiChevronRight className="w-6 h-6 text-primary-600" />
            </motion.button>
            <motion.button
              onClick={scrollLeft}
              className="w-12 h-12 bg-white/80 backdrop-blur-sm border border-neutral-200/50 rounded-xl flex items-center justify-center hover:bg-white hover:border-primary-400 hover:shadow-lg transition-all duration-300 shadow-md"
              aria-label="Scroll left"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiChevronLeft className="w-6 h-6 text-primary-600" />
            </motion.button>
          </div>

          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-4 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 scrollbar-hide"
          >
            <div className="flex gap-6 min-w-max">
              {products.slice(0, 8).map((product, index) => (
                <motion.article
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group cursor-pointer flex-shrink-0 w-[280px]"
                  role="article"
                  aria-label={`محصول ${product.title}`}
                >
                  {/* Product Card */}
                  <div 
                    className={`relative bg-white rounded-2xl p-8 h-[360px] flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-200`}
                    role="button"
                    tabIndex={0}
                    aria-label={`مشاهده جزئیات ${product.title}`}
                  >
                    {/* Gradient Background Overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-10 group-hover:opacity-15 transition-opacity duration-500`}
                      initial={false}
                    />
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Product Image/Logo - Top */}
                      <div className="mb-8 flex justify-center">
                        <motion.div 
                          className="relative w-36 h-36 aspect-square"
                          whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="absolute inset-0 bg-primary-50 rounded-2xl blur-xl group-hover:bg-primary-100 transition-colors duration-500" />
                          <div className="relative w-full h-full bg-neutral-50 rounded-2xl border border-neutral-200 p-3 group-hover:bg-neutral-100 group-hover:border-primary-300 transition-all duration-500">
                            <ProductImage 
                              src={product.image} 
                              alt={product.title}
                              fallbackText={product.titleEn || product.title}
                              productId={product.id}
                            />
                          </div>
                        </motion.div>
                      </div>

                      {/* Text Content */}
                      <div className="flex-1 flex flex-col justify-center text-center space-y-3">
                        <motion.h3 
                          className="text-black text-2xl font-bold leading-tight"
                          whileHover={{ scale: 1.05 }}
                        >
                          {product.title}
                        </motion.h3>
                        {product.titleEn && (
                          <motion.p 
                            className="text-neutral-700 text-sm font-semibold tracking-wide"
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1 }}
                          >
                            {product.titleEn}
                          </motion.p>
                        )}
                      </div>

                      {/* Modern Badge/Indicator */}
                      <motion.div
                        className="mt-6 flex justify-center"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="px-4 py-2 bg-primary-50 rounded-full border border-primary-200 group-hover:bg-primary-100 group-hover:border-primary-300 transition-all duration-500">
                          <span className="text-black text-xs font-medium">مشاهده جزئیات</span>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Description Below Card */}
                  <motion.div 
                    className="mt-5 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-sm text-black font-semibold">
                      {product.description}
                    </p>
                  </motion.div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Scroll Indicator - Bottom */}
          <div className="flex justify-center gap-2 mt-8">
            <div className="flex gap-2 items-center">
              {products.slice(0, 8).map((_, index) => (
                <motion.div
                  key={index}
                  className="w-2 h-2 rounded-full bg-neutral-300 hover:bg-primary-400 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Products
