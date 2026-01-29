/**
 * Structured Data (JSON-LD) for SEO
 * Provides rich snippets for search engines
 */

export interface OrganizationSchema {
  '@context': string
  '@type': string
  name: string
  url: string
  logo?: string
  description?: string
  contactPoint?: {
    '@type': string
    telephone: string
    contactType: string
    areaServed: string
    availableLanguage: string
  }
  sameAs?: string[]
}

export interface WebSiteSchema {
  '@context': string
  '@type': string
  name: string
  url: string
  description: string
  inLanguage: string
  potentialAction: {
    '@type': string
    target: {
      '@type': string
      urlTemplate: string
    }
    'query-input': string
  }
}

export interface BreadcrumbSchema {
  '@context': string
  '@type': string
  itemListElement: Array<{
    '@type': string
    position: number
    name: string
    item: string
  }>
}

/**
 * Generate Organization structured data
 */
export function getOrganizationSchema(): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ایرانی کارت',
    url: 'https://iranicard.ir',
    description: 'پلتفرم پیشرو در ارائه راهکارهای پرداخت الکترونیک و خدمات مالی',
    logo: 'https://iranicard.ir/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+98-21-12345678',
      contactType: 'customer service',
      areaServed: 'IR',
      availableLanguage: 'Persian',
    },
    sameAs: [
      'https://www.facebook.com/iranicard',
      'https://www.twitter.com/iranicard',
      'https://www.instagram.com/iranicard',
      'https://www.linkedin.com/company/iranicard',
    ],
  }
}

/**
 * Generate WebSite structured data
 */
export function getWebSiteSchema(): WebSiteSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ایرانی کارت',
    url: 'https://iranicard.ir',
    description: 'پلتفرم پیشرو در ارائه راهکارهای پرداخت الکترونیک و خدمات مالی',
    inLanguage: 'fa-IR',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://iranicard.ir/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

/**
 * Generate Service structured data
 */
export function getServiceSchema(serviceName: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    provider: {
      '@type': 'Organization',
      name: 'ایرانی کارت',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Iran',
    },
  }
}

/**
 * Generate FAQPage structured data
 */
export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
