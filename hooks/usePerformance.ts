'use client'

import { useEffect } from 'react'
import { measurePageLoad, logPerformanceMetrics } from '@/lib/performance'

/**
 * Hook to measure and log page performance
 */
export function usePerformance() {
  useEffect(() => {
    // Wait for page to fully load
    const handleLoad = () => {
      setTimeout(() => {
        const metrics = measurePageLoad()
        if (metrics) {
          logPerformanceMetrics(metrics)
        }
      }, 1000)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])
}
