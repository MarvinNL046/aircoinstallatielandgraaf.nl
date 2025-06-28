import { Metadata } from "next"
import { EnhancedCityContent } from "@/components/city/enhanced-city-content"
import { getAllMainCities, getMainCityBySlug } from "@/lib/main-cities"
import { generateLocalBusinessSchema, generateFAQSchema } from "@/lib/schema"
import Script from "next/script"
import { notFound } from "next/navigation"

interface CityPageProps {
  params: {
    city: string
  }
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const cityData = getMainCityBySlug(params.city)
  
  if (!cityData) {
    return {
      title: "Stad niet gevonden | StayCool Airco Landgraaf",
      description: "De opgevraagde stad kon niet worden gevonden."
    }
  }

  // Dynamische lokale statistieken per stad
  const localStats: Record<string, { installations: number; responseTime: string }> = {
    'landgraaf': { installations: 120, responseTime: '3 uur' },
    'maastricht': { installations: 280, responseTime: '2 uur' },
    'heerlen': { installations: 180, responseTime: '2 uur' },
    'sittard': { installations: 150, responseTime: '4 uur' },
    'default': { installations: 50, responseTime: '24 uur' }
  }

  const stats = localStats[cityData.name.toLowerCase()] || localStats.default

  return {
    title: `Airco ${cityData.name} €1299 | StayCool ⚡ Snel geleverd`,
    description: `✓ ${stats.installations}+ installaties in ${cityData.name} ✓ Binnen ${stats.responseTime} ✓ 5 jaar garantie ✓ Bel 046-202-1430`,
    openGraph: {
      title: `Airco ${cityData.name} vanaf €1299 | StayCool Airco`,
      description: `⚡ Professionele airco installatie in ${cityData.name} ✓ ${stats.installations}+ tevreden klanten ✓ 4.8★ reviews ✓ Erkend installateur`,
      url: `https://aircoinstallatielandgraaf.nl/steden/${params.city}`,
      siteName: "StayCool Airco Landgraaf",
      locale: "nl_NL",
      type: "website",
      images: ['/og-image.png'],
    },
  }
}

export async function generateStaticParams() {
  const cities = getAllMainCities()
  return cities.map((city) => ({
    city: city.slug,
  }))
}

export default async function CityPage({ params }: CityPageProps) {
  const cityData = getMainCityBySlug(params.city)

  if (!cityData) {
    notFound()
  }

  const localBusinessSchema = generateLocalBusinessSchema(cityData.name)
  
  // Get local stats for use in FAQs
  const localStats: Record<string, { installations: number; responseTime: string }> = {
    'landgraaf': { installations: 120, responseTime: '3 uur' },
    'maastricht': { installations: 280, responseTime: '2 uur' },
    'heerlen': { installations: 180, responseTime: '2 uur' },
    'sittard': { installations: 150, responseTime: '4 uur' },
    'default': { installations: 50, responseTime: '24 uur' }
  }
  
  const stats = localStats[cityData.name.toLowerCase()] || localStats.default
  
  // City-specific FAQs
  const cityFAQs = [
    {
      question: `Wat kost een airco installatie in ${cityData.name}?`,
      answer: `Een complete airco installatie in ${cityData.name} start vanaf €1299 inclusief montage. Wij hanteren vaste tarieven voor heel ${cityData.name} en omgeving, zonder extra reiskosten.`
    },
    {
      question: `Hoe snel kan een airco geïnstalleerd worden in ${cityData.name}?`,
      answer: `In ${cityData.name} kunnen we vaak binnen 24-48 uur installeren. Door onze lokale aanwezigheid hebben we korte responstijden en flexibele planning.`
    },
    {
      question: `Hebben jullie ervaring met airco installaties in ${cityData.name}?`,
      answer: `Jazeker! We hebben al meer dan ${stats.installations} airco's geïnstalleerd in ${cityData.name}. Onze monteurs kennen de lokale situatie goed.`
    }
  ]
  
  const faqSchema = generateFAQSchema(cityFAQs)

  // Enhanced description for all cities
  let description = `Professionele airconditioning services in ${cityData.name} door StayCool Airco. Wij bieden complete airco-oplossingen voor zowel particulieren als bedrijven. ✓ Erkend installateur ✓ 5 jaar garantie ✓ Binnen 24 uur reactie.`
  
  // Add more detailed content for specific cities
  if (cityData.name.toLowerCase() === 'landgraaf') {
    description = `Dé airco specialist van Landgraaf! StayCool Airco installeert al jaren airconditioners in Landgraaf, van Schaesberg tot Nieuwenhagen. Onze monteurs kennen de lokale situatie en leveren maatwerk voor uw woning of bedrijf. Met meer dan 120 installaties in Landgraaf zijn wij uw vertrouwde partner voor koeling én verwarming.`
  } else if (cityData.name.toLowerCase() === 'maastricht') {
    description = `Professionele airconditioning installatie in Maastricht door StayCool Airco. Als lokale specialist bieden wij complete airco-oplossingen voor woningen en bedrijven in Maastricht en omgeving. Onze ervaren monteurs kennen de stad en haar gebouwen goed en zorgen voor een perfecte installatie.`
  } else if (cityData.name.toLowerCase() === 'heerlen') {
    description = `Airco installatie Heerlen door erkend installateur StayCool. Van het centrum tot Hoensbroek, wij installeren airconditioners door heel Heerlen. Profiteer van onze lokale kennis en snelle service. Al meer dan 180 tevreden klanten in Heerlen!`
  } else if (cityData.name.toLowerCase() === 'sittard') {
    description = `Uw airco specialist in Sittard-Geleen! StayCool Airco verzorgt professionele installaties in heel Sittard. Van split-units tot complete klimaatsystemen. Lokale service met landelijke kwaliteit. Vraag nu uw offerte aan!`
  }

  const city = {
    title: cityData.name,
    description: description,
    region: cityData.region,
    population: cityData.population,
    postal_codes: cityData.postal_codes
  }

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="city-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <EnhancedCityContent city={city} />
    </>
  )
}
