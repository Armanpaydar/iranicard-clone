import { Suspense, lazy } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/layout/ScrollToTop'
import ErrorBoundary from '@/components/ui/ErrorBoundary'
import PerformanceMonitor from '@/components/PerformanceMonitor'
import Hero from '@/components/sections/Hero'

// Lazy load below-the-fold components for better performance
const Products = lazy(() => import('@/components/sections/Products'))
const Services = lazy(() => import('@/components/sections/Services'))
const Features = lazy(() => import('@/components/sections/Features'))
const HowItWorks = lazy(() => import('@/components/sections/HowItWorks'))
const Stats = lazy(() => import('@/components/sections/Stats'))
const Testimonials = lazy(() => import('@/components/sections/Testimonials'))
const FAQ = lazy(() => import('@/components/sections/FAQ'))
const CTA = lazy(() => import('@/components/sections/CTA'))

// Loading fallback component
const SectionLoader = () => (
  <div className="py-16 flex items-center justify-center" aria-label="Loading section">
    <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
  </div>
)

function HomeContent() {
  return (
    <>
      <PerformanceMonitor />
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <Products />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <Services />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <Features />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <HowItWorks />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <Stats />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <Testimonials />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <FAQ />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <CTA />
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default function Home() {
  return (
    <ErrorBoundary>
      <HomeContent />
    </ErrorBoundary>
  )
}
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <Products />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <Services />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <Features />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <HowItWorks />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <Stats />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <Testimonials />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <FAQ />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<SectionLoader />}>
            <CTA />
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
      <ScrollToTop />
    </ErrorBoundary>
  )
}
