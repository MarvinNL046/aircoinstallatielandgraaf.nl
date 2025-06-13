import { Metadata } from "next"
import { EnhancedCityContent } from "@/components/city/enhanced-city-content"
import { getCities } from "@/lib/cities"
import { generateLocalBusinessSchema, generateFAQSchema } from "@/lib/schema"
import Script from "next/script"
import { notFound } from "next/navigation"

interface CityPageProps {
  params: {
    city: string
  }
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const cities = await getCities()
  const cityData = cities.find(city => city.city.toLowerCase() === params.city)
  
  if (!cityData) {
    return {
      title: "Stad niet gevonden | StayCool Airco Landgraaf",
      description: "De opgevraagde stad kon niet worden gevonden."
    }
  }

  // Dynamische lokale statistieken per stad
  const localStats: Record<string, { installations: number; responseTime: string; discount: string }> = {
    'landgraaf': { installations: 120, responseTime: '3 uur', discount: '20%' },
    'maastricht': { installations: 280, responseTime: '2 uur', discount: '15%' },
    'heerlen': { installations: 180, responseTime: '2 uur', discount: '15%' },
    'sittard': { installations: 150, responseTime: '4 uur', discount: '10%' },
    'default': { installations: 50, responseTime: '24 uur', discount: '10%' }
  }

  const stats = localStats[cityData.city.toLowerCase()] || localStats.default

  return {
    title: `Airco ${cityData.city} vanaf €1299 - Morgen Geïnstalleerd ⚡ Reviews: 4.8★`,
    description: `⏰ Nog 2 plekken deze week in ${cityData.city}! ✓ Vanaf €1299 all-in ✓ ${stats.installations}+ installaties in ${cityData.city} ✓ Gemiddeld ${stats.responseTime} responstijd ✓ Nu ${stats.discount} korting. WhatsApp: 06-3648-1054`,
    openGraph: {
      title: `Airco ${cityData.city} vanaf €1299 → ${stats.discount} Korting | StayCool`,
      description: `⚡ Tijdelijk ${stats.discount} korting in ${cityData.city}! ✓ ${stats.installations}+ tevreden klanten ✓ 4.8★ reviews ✓ Morgen geïnstalleerd`,
      url: `https://aircoinstallatielandgraaf.nl/steden/${params.city}`,
      siteName: "StayCool Airco Landgraaf",
      locale: "nl_NL",
      type: "website",
      images: ['/og-image.png'],
    },
  }
}

export async function generateStaticParams() {
  const cities = await getCities()
  return cities.map((city) => ({
    city: city.city.toLowerCase(),
  }))
}

export default async function CityPage({ params }: CityPageProps) {
  const cities = await getCities()
  const cityData = cities.find(
    (city) => city.city.toLowerCase() === params.city
  )

  if (!cityData) {
    notFound()
  }

  const localBusinessSchema = generateLocalBusinessSchema(cityData.city)
  
  // Get local stats for use in FAQs
  const localStats: Record<string, { installations: number; responseTime: string; discount: string }> = {
    'landgraaf': { installations: 120, responseTime: '3 uur', discount: '20%' },
    'maastricht': { installations: 280, responseTime: '2 uur', discount: '15%' },
    'heerlen': { installations: 180, responseTime: '2 uur', discount: '15%' },
    'sittard': { installations: 150, responseTime: '4 uur', discount: '10%' },
    'default': { installations: 50, responseTime: '24 uur', discount: '10%' }
  }
  
  const stats = localStats[cityData.city.toLowerCase()] || localStats.default
  
  // City-specific FAQs
  const cityFAQs = [
    {
      question: `Wat kost een airco installatie in ${cityData.city}?`,
      answer: `Een complete airco installatie in ${cityData.city} start vanaf €1299 inclusief montage. Wij hanteren vaste tarieven voor heel ${cityData.city} en omgeving, zonder extra reiskosten.`
    },
    {
      question: `Hoe snel kan een airco geïnstalleerd worden in ${cityData.city}?`,
      answer: `In ${cityData.city} kunnen we vaak binnen 24-48 uur installeren. Door onze lokale aanwezigheid hebben we korte responstijden en flexibele planning.`
    },
    {
      question: `Hebben jullie ervaring met airco installaties in ${cityData.city}?`,
      answer: `Jazeker! We hebben al meer dan ${stats.installations} airco's geïnstalleerd in ${cityData.city}. Onze monteurs kennen de lokale situatie goed.`
    }
  ]
  
  const faqSchema = generateFAQSchema(cityFAQs)

  // Enhanced description for all cities
  let description = `Professionele airconditioning services in ${cityData.city} door StayCool Airco. Wij bieden complete airco-oplossingen voor zowel particulieren als bedrijven. ✓ Erkend installateur ✓ 5 jaar garantie ✓ Binnen 24 uur reactie.`
  
  // Add more detailed content for specific cities
  if (cityData.city.toLowerCase() === 'landgraaf') {
    description = `Dé airco specialist van Landgraaf! StayCool Airco installeert al jaren airconditioners in Landgraaf, van Schaesberg tot Nieuwenhagen. Onze monteurs kennen de lokale situatie en leveren maatwerk voor uw woning of bedrijf. Met meer dan 120 installaties in Landgraaf zijn wij uw vertrouwde partner voor koeling én verwarming.`
  } else if (cityData.city.toLowerCase() === 'maastricht') {
    description = `Professionele airconditioning installatie in Maastricht door StayCool Airco. Als lokale specialist bieden wij complete airco-oplossingen voor woningen en bedrijven in Maastricht en omgeving. Onze ervaren monteurs kennen de stad en haar gebouwen goed en zorgen voor een perfecte installatie. Bekijk ook onze <a href="https://staycoolairco.nl/kennisbank/airco-maastricht" class="text-blue-600 hover:underline">kennisbank over airco's in Maastricht</a>.`
  } else if (cityData.city.toLowerCase() === 'heerlen') {
    description = `Airco installatie Heerlen door erkend installateur StayCool. Van het centrum tot Hoensbroek, wij installeren airconditioners door heel Heerlen. Profiteer van onze lokale kennis en snelle service. Al meer dan 180 tevreden klanten in Heerlen!`
  } else if (cityData.city.toLowerCase() === 'sittard') {
    description = `Uw airco specialist in Sittard-Geleen! StayCool Airco verzorgt professionele installaties in heel Sittard. Van split-units tot complete klimaatsystemen. Lokale service met landelijke kwaliteit. Vraag nu uw offerte aan!`
  }

  const city = {
    title: cityData.city,
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
