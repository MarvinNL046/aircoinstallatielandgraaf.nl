import { Organization, WithContext, Service, LocalBusiness, BreadcrumbList, FAQPage, Question, AggregateRating, Product } from "schema-dts"

export function generateOrganizationSchema(): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "StayCool Airco Landgraaf",
    url: "https://aircoinstallatielandgraaf.nl",
    logo: "https://staycoolairco.nl/logo.png",
    description: "Professionele airconditioning installatie in Landgraaf door StayCool Airco",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Landgraaf",
      addressRegion: "Limburg",
      addressCountry: "NL",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+31-46-202-1430",
      contactType: "customer service",
    },
    sameAs: [
      "https://staycoolairco.nl",
      "https://facebook.com/staycoolairco",
      "https://instagram.com/staycoolairco",
      "https://linkedin.com/company/staycoolairco",
    ],
    areaServed: {
      "@type": "City",
      name: "Landgraaf",
    }
  }
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  price: string;
}): WithContext<Service> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "StayCool Airco",
    },
    areaServed: {
      "@type": "City",
      name: "Landgraaf",
    },
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: service.price,
        priceCurrency: "EUR",
      },
    },
  }
}

export function generateLocalBusinessSchema(city: string): WithContext<LocalBusiness> {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `StayCool Airco - Airco Installatie ${city}`,
    description: `Professionele airconditioning installatie en onderhoud in ${city} door StayCool Airco. Erkend en gecertificeerd installateur.`,
    url: `https://aircoinstallatielandgraaf.nl/steden/${city.toLowerCase()}`,
    telephone: "+31462021430",
    email: "info@staycoolairco.nl",
    areaServed: {
      "@type": "City",
      name: city,
      containedIn: {
        "@type": "State",
        name: "Limburg",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "Limburg",
      addressCountry: "NL",
    },
    priceRange: "€€",
  }
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://aircoinstallatielandgraaf.nl${item.item}`,
    })),
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    } as Question))
  }
}

export function generateAggregateRatingSchema(): AggregateRating {
  return {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: 163,
    bestRating: "5",
    worstRating: "1"
  }
}

export function generateEnhancedOrganizationSchema(): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "StayCool Airco Landgraaf",
    url: "https://aircoinstallatielandgraaf.nl",
    logo: "https://staycoolairco.nl/logo.png",
    description: "Professionele airconditioning installatie in Landgraaf door StayCool Airco",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Landgraaf",
      addressRegion: "Limburg",
      addressCountry: "NL",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+31-46-202-1430",
      contactType: "customer service",
    },
    sameAs: [
      "https://staycoolairco.nl",
      "https://facebook.com/staycoolairco",
      "https://instagram.com/staycoolairco",
      "https://linkedin.com/company/staycoolairco",
    ],
    areaServed: {
      "@type": "City",
      name: "Landgraaf",
    },
    aggregateRating: generateAggregateRatingSchema(),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Airconditioning Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Airco Installatie",
            description: "Complete airco installatie inclusief montage"
          },
          price: "1299",
          priceCurrency: "EUR",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "1299",
            maxPrice: "3500",
            priceCurrency: "EUR"
          },
          availability: "https://schema.org/InStock",
          validFrom: new Date().toISOString(),
          validThrough: new Date(Date.now() + 30*24*60*60*1000).toISOString(),
          seller: {
            "@type": "Organization",
            name: "StayCool Airco Landgraaf",
            "@id": "https://aircoinstallatielandgraaf.nl"
          }
        }
      ]
    }
  }
}

export function generateProductSchema(product: {
  name: string;
  description: string;
  price: string;
  brand: string;
  model?: string;
}): WithContext<Product> {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: product.brand
    },
    model: product.model,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "StayCool Airco Landgraaf",
        "@id": "https://aircoinstallatielandgraaf.nl"
      },
      priceValidUntil: new Date(Date.now() + 30*24*60*60*1000).toISOString()
    },
    aggregateRating: generateAggregateRatingSchema()
  }
}
