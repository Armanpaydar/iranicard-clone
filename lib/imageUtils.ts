/**
 * Image utility functions for dynamic image handling
 */

export interface ImageConfig {
  src: string
  alt: string
  width?: number
  height?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
}

/**
 * Generate a data URL for blur placeholder
 */
export function generateBlurDataURL(width: number = 200, height: number = 200): string {
  const canvas = typeof document !== 'undefined' ? document.createElement('canvas') : null
  if (!canvas) return ''
  
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  if (!ctx) return ''
  
  // Create a simple gradient placeholder
  const gradient = ctx.createLinearGradient(0, 0, width, height)
  gradient.addColorStop(0, '#e5e7eb')
  gradient.addColorStop(1, '#d1d5db')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, width, height)
  
  return canvas.toDataURL()
}

/**
 * Get product image with fallback support
 */
export function getProductImagePath(
  imagePath: string,
  productId: string,
  fallbackType: 'placeholder' | 'gradient' = 'placeholder'
): string {
  // Check if image path is valid (starts with /)
  if (imagePath && imagePath.startsWith('/')) {
    return imagePath
  }
  
  // Generate placeholder based on product ID
  if (fallbackType === 'placeholder') {
    return `/images/products/placeholder.svg?product=${productId}`
  }
  
  // Return empty for gradient-only display
  return ''
}

/**
 * Check if image URL is external
 */
export function isExternalImage(src: string): boolean {
  return src.startsWith('http://') || src.startsWith('https://')
}

/**
 * Generate optimized image sizes for responsive images
 */
export function getImageSizes(breakpoint: 'small' | 'medium' | 'large' = 'medium'): string {
  const sizes = {
    small: '(max-width: 640px) 80px, 96px',
    medium: '(max-width: 640px) 80px, (max-width: 768px) 96px, 112px',
    large: '(max-width: 640px) 100px, (max-width: 768px) 120px, 150px',
  }
  return sizes[breakpoint]
}

/**
 * Create optimized image configuration
 */
export function createImageConfig(
  src: string,
  alt: string,
  options?: {
    width?: number
    height?: number
    productId?: string
    sizes?: string
  }
): ImageConfig {
  const { width = 200, height = 200, productId, sizes } = options || {}
  
  return {
    src: getProductImagePath(src, productId || '', 'placeholder'),
    alt,
    width,
    height,
    placeholder: 'blur',
    blurDataURL: generateBlurDataURL(width, height),
  }
}
