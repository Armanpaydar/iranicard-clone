/**
 * Generate placeholder image URL or return fallback
 */
export function getProductImage(imagePath: string, productTitle: string): string {
  // If image exists, use it
  // Otherwise, use a placeholder service or generate one
  
  // Using placeholder.com service with product name
  const placeholderText = encodeURIComponent(productTitle.substring(0, 20))
  return `https://via.placeholder.com/200x200/0284c7/ffffff?text=${placeholderText}`
}

/**
 * Check if image exists (for client-side)
 */
export async function checkImageExists(src: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = src
  })
}
