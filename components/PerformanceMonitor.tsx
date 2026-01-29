'use client'

import { usePerformance } from '@/hooks/usePerformance'

/**
 * Client component wrapper for performance monitoring
 */
export default function PerformanceMonitor() {
  usePerformance()
  return null
}
