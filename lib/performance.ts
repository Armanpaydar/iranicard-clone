/**
 * Performance monitoring utilities
 */

export interface PerformanceMetrics {
  loadTime: number
  domContentLoaded: number
  firstContentfulPaint?: number
  largestContentfulPaint?: number
  timeToInteractive?: number
}

/**
 * Measure page load performance
 */
export function measurePageLoad(): PerformanceMetrics | null {
  if (typeof window === 'undefined' || !window.performance) {
    return null
  }

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
  if (!navigation) {
    return null
  }

  const paint = performance.getEntriesByType('paint')
  const fcp = paint.find((entry) => entry.name === 'first-contentful-paint')
  const lcp = performance.getEntriesByType('largest-contentful-paint')[0] as PerformanceEntry & { renderTime?: number }

  return {
    loadTime: navigation.loadEventEnd - navigation.fetchStart,
    domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
    firstContentfulPaint: fcp ? fcp.startTime : undefined,
    largestContentfulPaint: lcp?.renderTime,
    timeToInteractive: navigation.domInteractive - navigation.fetchStart,
  }
}

/**
 * Log performance metrics (can be extended to send to analytics)
 */
export function logPerformanceMetrics(metrics: PerformanceMetrics) {
  if (process.env.NODE_ENV === 'development') {
    console.log('Performance Metrics:', metrics)
  }

  // In production, you can send this to your analytics service
  // Example: analytics.track('page_performance', metrics)
}

/**
 * Measure component render time
 */
export function measureComponentRender(componentName: string) {
  if (process.env.NODE_ENV === 'development') {
    const startTime = performance.now()
    
    return () => {
      const endTime = performance.now()
      const renderTime = endTime - startTime
      console.log(`${componentName} render time: ${renderTime.toFixed(2)}ms`)
    }
  }
  
  return () => {}
}
