import { Metadata } from "next"
import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { ServicesSection } from "@/components/sections/services-section"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { CTASection } from "@/components/sections/cta-section"
import { CTABanner } from "@/components/sections/cta-banner"
import { generateEnhancedOrganizationSchema, generateFAQSchema } from "@/lib/schema"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'Airco vanaf €1299 in Landgraaf → Nu 15% Korting | 046 202 1430',
  description: '⚡ Tijdelijk: 15% korting op alle airco\'s! ✓ Morgen al geïnstalleerd ✓ 120+ klanten in Landgraaf ✓ 4.8★ uit 127 reviews ✓ Gratis advies aan huis. Bel nu: 046 202 1430',
  alternates: {
    canonical: 'https://aircoinstallatielandgraaf.nl'
  },
  openGraph: {
    title: 'Airco vanaf €1299 in Landgraaf → Nu 15% Korting | StayCool',
    description: '⚡ Tijdelijk: 15% korting! ✓ Morgen geïnstalleerd ✓ 120+ tevreden klanten ✓ 4.8★ reviews',
    images: ['/og-image.png'],
    locale: 'nl_NL',
    type: 'website',
  }
}

export default function HomePage() {
  const organizationSchema = generateEnhancedOrganizationSchema()
  
  const homepageFAQs = [
    {
      question: "Wat kost een airco installatie in Landgraaf?",
      answer: "Een complete airco installatie start vanaf €1299 inclusief montage. De exacte prijs hangt af van het type airco, het vermogen en de complexiteit van de installatie. Vraag een gratis offerte aan voor een exacte prijs."
    },
    {
      question: "Hoe snel kan mijn airco geïnstalleerd worden?",
      answer: "In de meeste gevallen kunnen we uw airco binnen 24-48 uur installeren. Bij spoed is zelfs installatie dezelfde dag mogelijk, afhankelijk van de beschikbaarheid."
    },
    {
      question: "Welke merken airco's installeert StayCool?",
      answer: "Wij installeren alle topmerken zoals Daikin, Mitsubishi, LG, Samsung, Toshiba en Panasonic. Onze experts adviseren u graag over het beste merk voor uw situatie."
    },
    {
      question: "Is StayCool Airco een erkend installateur?",
      answer: "Ja, StayCool Airco is volledig gecertificeerd en erkend. Wij zijn F-gassen gecertificeerd en aangesloten bij de NVKL. U krijgt standaard 5 jaar garantie op onze installaties."
    }
  ]
  
  const faqSchema = generateFAQSchema(homepageFAQs)

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <main>
        <CTABanner theme="light" />
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-8">Bekijk Onze Bedrijfsvideo</h2>
            <div className="max-w-3xl mx-auto aspect-video">
              <iframe 
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/9m-jkGgfLog" 
                title="StayCool Airco Bedrijfsvideo" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="text-center mt-8">
              <p className="text-lg text-muted-foreground">
                Ontdek hoe StayCool Airco uw ideale partner is voor airconditioning in Landgraaf en omgeving.
              </p>
              <p className="mt-4">
                <a 
                  href="https://staycoolairco.nl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Bezoek onze hoofdwebsite voor meer informatie
                </a>
              </p>
            </div>
          </div>
        </section>
        <TestimonialsSection />
        <CTASection />
        <CTABanner theme="dark" />
      </main>
    </>
  )
}
