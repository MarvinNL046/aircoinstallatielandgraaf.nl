import { Metadata } from "next"
import { EnhancedCityContent } from "@/components/city/enhanced-city-content"
import { getCities } from "@/lib/cities"
import { generateLocalBusinessSchema } from "@/lib/schema"
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
      title: "Stad niet gevonden | StayCool Airco Maastricht",
      description: "De opgevraagde stad kon niet worden gevonden."
    }
  }

  return {
    title: `Airco Installatie ${cityData.city} | StayCool Airco Maastricht`,
    description: `Professionele airconditioning installatie en onderhoud in ${cityData.city} door StayCool Airco. ✓ Erkend ✓ Gecertificeerd ✓ Vakkundig. Vraag nu een vrijblijvende offerte aan!`,
    openGraph: {
      title: `Airco Installatie ${cityData.city} | StayCool Airco Maastricht`,
      description: `Professionele airconditioning installatie en onderhoud in ${cityData.city} door StayCool Airco. Erkend en gecertificeerd installateur.`,
      url: `https://aircoinstallatie-maastricht.nl/steden/${params.city}`,
      siteName: "StayCool Airco Maastricht",
      locale: "nl_NL",
      type: "website",
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
      <EnhancedCityContent city={city} />
    </>
  )
}
