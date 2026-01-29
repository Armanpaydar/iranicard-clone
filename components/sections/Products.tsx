'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
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
      // Try placeholder service as fallback
      const placeholderText = encodeURIComponent(fallbackText.substring(0, 15))
      setImgSrc(`https://via.placeholder.com/200x200/0284c7/ffffff?text=${placeholderText}`)
      setIsLoading(false)
    }
  }

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className="relative w-full h-full">
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
          className={`object-contain drop-shadow-lg transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
          onError={handleImageError}
          onLoad={handleImageLoad}
          loading="lazy"
          decoding="async"
          loading="lazy"
        />
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full h-full flex items-center justify-center bg-white/20 rounded-lg backdrop-blur-sm"
        >
          <div className="text-white text-xs font-bold text-center px-2">
            {fallbackText.substring(0, 12)}
          </div>
        </motion.div>
      )}
    </div>
  )
}

const Products: React.FC = () => {
  return (
    <section id="products" className="py-16 sm:py-20 md:py-24 bg-white" aria-labelledby="products-heading">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 id="products-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            محصولات و گیفت کارت‌ها
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            خرید و فروش انواع گیفت کارت و اشتراک‌های دیجیتال با بهترین قیمت
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.slice(0, 8).map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group cursor-pointer"
              role="article"
              aria-label={`محصول ${product.title}`}
            >
              {/* Product Card */}
              <div 
                className={`relative bg-gradient-to-br ${product.gradient} rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[240px] flex flex-col justify-between overflow-hidden shadow-md hover:shadow-xl transition-all duration-300`}
                role="button"
                tabIndex={0}
                aria-label={`مشاهده جزئیات ${product.title}`}
              >
                {/* Decorative Sparkles (for premium products) */}
                {(product.id === '2' || product.id === '8') && (
                  <div className="absolute inset-0 opacity-20">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                          top: `${20 + i * 15}%`,
                          left: `${10 + i * 12}%`,
                        }}
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </div>
                )}
                
                {/* Special AI glow effect for product 8 */}
                {product.id === '8' && (
                  <motion.div
                    className="absolute inset-0 opacity-30"
                    animate={{
                      background: [
                        'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                        'radial-gradient(circle at 70% 70%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                        'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                )}

                {/* Content */}
                <div className="relative z-10 flex items-center justify-between h-full gap-3 sm:gap-4">
                  {/* Persian Text */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-1 leading-tight break-words">
                      {product.title}
                    </h3>
                    {product.titleEn && (
                      <p className="text-white/80 text-xs sm:text-sm font-medium break-words">
                        {product.titleEn}
                      </p>
                    )}
                  </div>

                  {/* Product Image/Logo */}
                  <div className="ml-2 sm:ml-4 flex-shrink-0 relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
                    <ProductImage 
                      src={product.image} 
                      alt={product.title}
                      fallbackText={product.titleEn || product.title}
                      productId={product.id}
                    />
                  </div>
                </div>
              </div>

              {/* Description Below Card */}
              <div className="mt-4 text-center">
                <p className="text-sm sm:text-base text-neutral-700 font-medium mb-2">
                  {product.description}
                </p>

                {/* Flags or Badges */}
                {(product.flags || product.badges) && (
                  <div className="flex items-center justify-center gap-2 flex-wrap">
                    {product.flags?.map((flag, idx) => (
                      <span
                        key={idx}
                        className="text-lg sm:text-xl"
                        role="img"
                        aria-label="flag"
                      >
                        {flag}
                      </span>
                    ))}
                    {product.badges?.map((badge, idx) => (
                      <span
                        key={idx}
                        className="text-base sm:text-lg"
                        role="img"
                        aria-label="badge"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Products
