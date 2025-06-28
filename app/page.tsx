import { Metadata } from "next"
import { HomePage } from "@/components/pages/home-page"
import { generateEnhancedOrganizationSchema, generateFAQSchema } from "@/lib/schema"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'Airco Installatie Landgraaf & Limburg | StayCool Airco | Vanaf €11/maand',
  description: 'Professionele airco installatie in Landgraaf en heel Limburg ✓ 5 jaar garantie ✓ 163+ tevreden klanten (4.7/5) ✓ Alle topmerken ✓ Gecertificeerde monteurs ✓ Binnen 24u reactie. Bel: 046 202 1430',
  alternates: {
    canonical: 'https://aircoinstallatielandgraaf.nl'
  },
  openGraph: {
    title: 'Airco Installatie Landgraaf & Limburg | StayCool Airco | 5 Jaar Garantie',
    description: 'Professionele airco installatie ✓ Gecertificeerde monteurs ✓ 163+ tevreden klanten ✓ 4.7★ reviews ✓ Vanaf €11/maand onderhoud',
    images: ['/og-image.png'],
    locale: 'nl_NL',
    type: 'website',
  }
}

export default function Page() {
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
      
      <HomePage />
    </>
  )
}
