import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Building2, ArrowRight, Star } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: 'Airco Limburg | Alle Steden | StayCool 📍',
  description: '✓ Heel Limburg ✓ 163+ reviews (4.7★) ✓ <24u ter plaatse ✓ Landgraaf, Maastricht, Heerlen & meer. Bel: 046-202-1430',
}

// Focus op belangrijkste steden met echte lokale content
interface City {
  name: string
  slug: string
  region: string
  description: string
  highlights: string[]
  testimonial: string
  customerName: string
  popularProducts?: Array<{
    name: string
    image: string
  }>
}

const mainCities: City[] = [
  {
    name: "Landgraaf",
    slug: "landgraaf",
    region: "Parkstad",
    description: "Ons hoofdwerkgebied met de snelste service",
    highlights: [
      "Binnen 30 minuten ter plaatse",
      "50+ installaties in 2024",
      "Kennis van lokale woningtypen"
    ],
    testimonial: "Super snelle service, binnen een dag geïnstalleerd!",
    customerName: "Familie Janssen, Landgraaf",
    popularProducts: [
      { name: "Daikin Comfora", image: "/images/brands/products/daikin-comfora-left.webp" },
      { name: "Samsung WindFree", image: "/images/brands/products/samsung/windfreeElite/WindFree Elite_S2_Front_Web_RGB.webp" }
    ]
  },
  {
    name: "Heerlen", 
    slug: "heerlen",
    region: "Parkstad",
    description: "Veel ervaring met appartementen en historische panden",
    highlights: [
      "Specialist in monumentale panden",
      "40+ installaties in centrum",
      "Samenwerking met woningcorporaties"
    ],
    testimonial: "Perfecte oplossing voor ons appartement in het centrum",
    customerName: "M. Peters, Heerlen",
    popularProducts: [
      { name: "LG ArtCool Gallery", image: "/images/brands/products/lg-artcool-mirror.webp" },
      { name: "Toshiba Haori", image: "/images/brands/products/Haori-zwart-vooraanzicht_3_11zon.webp" }
    ]
  },
  {
    name: "Kerkrade",
    slug: "kerkrade",
    region: "Parkstad",
    description: "Grensregio specialist met Duitse producten",
    highlights: [
      "Ook Duitse merken leverbaar",
      "30+ tevreden klanten",
      "Tweetalige service"
    ],
    testimonial: "Fijn dat ze ook Duits spreken voor mijn Duitse airco",
    customerName: "H. Schmidt, Kerkrade",
    popularProducts: [
      { name: "Mitsubishi Titanium", image: "/images/brands/products/Mitsubishi heavy indus/Mitsubishi-titanium-zs-wft.webp" },
      { name: "Daikin Stylish", image: "/images/brands/products/daikin-stylish-wit.webp" }
    ]
  },
  {
    name: "Maastricht",
    slug: "maastricht",
    region: "Zuid-Limburg",
    description: "Premium installaties voor de hoofdstad van Limburg",
    highlights: [
      "Design modellen populair",
      "Ervaring met studentenwoningen",
      "Historisch centrum expertise"
    ],
    testimonial: "Prachtige Daikin Emura past perfect in ons interieur",
    customerName: "Drs. Van der Berg, Maastricht",
    popularProducts: [
      { name: "Daikin Stylish", image: "/images/brands/products/daikin-stylish-wit.webp" },
      { name: "LG ArtCool Gallery", image: "/images/brands/products/lg-artcool-mirror.webp" }
    ]
  },
  {
    name: "Sittard-Geleen",
    slug: "sittard-geleen",
    region: "Westelijke Mijnstreek",
    description: "Groot werkgebied met snelle service",
    highlights: [
      "Industriële installaties",
      "Nieuwbouwprojecten",
      "25+ bedrijfsinstallaties"
    ],
    testimonial: "Professionele installatie in ons bedrijfspand",
    customerName: "DirectiePrint BV, Sittard",
    popularProducts: [
      { name: "Samsung WindFree", image: "/images/brands/products/samsung/windfreeElite/WindFree Elite_S2_Front_Web_RGB.webp" },
      { name: "Mitsubishi Titanium", image: "/images/brands/products/Mitsubishi heavy indus/Mitsubishi-titanium-zs-wft.webp" }
    ]
  },
  {
    name: "Brunssum",
    slug: "brunssum",
    region: "Parkstad",
    description: "Veel ervaring met jaren '70 woningen",
    highlights: [
      "Specialist in split-level woningen",
      "20+ installaties in 2024",
      "Populair: Tosot Clivia"
    ],
    testimonial: "De Tosot Clivia was perfect voor onze woning",
    customerName: "Familie De Vries, Brunssum",
    popularProducts: [
      { name: "Tosot Clivia", image: "/images/brands/products/724-clivia-wit-vooraanzicht.webp" },
      { name: "Daikin Comfora", image: "/images/brands/products/daikin-comfora-left.webp" }
    ]
  }
]

export default function StedenPageV2() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Airco Installatie in <span className="text-blue-600">Heel Limburg</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Met onze centrale locatie in Landgraaf bedienen wij heel Limburg. 
              Van Parkstad tot Maastricht, wij zijn er snel!
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-3xl font-bold text-blue-600">163+</p>
                <p className="text-sm text-gray-600">Tevreden klanten</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-3xl font-bold text-blue-600">6</p>
                <p className="text-sm text-gray-600">Regio's actief</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-3xl font-bold text-blue-600">&lt;24u</p>
                <p className="text-sm text-gray-600">Reactietijd</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Cities Grid */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Onze <span className="text-blue-600">Hoofdwerkgebieden</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainCities.map((city) => (
              <Card key={city.slug} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{city.name}</h3>
                      <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                        <MapPin className="h-4 w-4" />
                        {city.region}
                      </p>
                    </div>
                    <div className="bg-blue-100 rounded-full p-3">
                      <Building2 className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{city.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {city.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Testimonial */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <p className="text-sm italic text-gray-700 mb-2">"{city.testimonial}"</p>
                    <p className="text-xs text-gray-600">- {city.customerName}</p>
                  </div>

                  {/* Popular Products */}
                  {city.popularProducts && (
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-gray-700 mb-3">Populair in {city.name}:</p>
                      <div className="grid grid-cols-2 gap-3">
                        {city.popularProducts.map((product, idx) => (
                          <div key={idx} className="bg-white border border-gray-200 rounded-lg p-3">
                            <div className="relative h-20 mb-2">
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                            <p className="text-xs font-medium text-gray-900">{product.name}</p>
                            <p className="text-xs text-orange-600 font-semibold">Offerte op maat</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <Link href={`/steden/${city.slug}`}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Meer over {city.name}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Onze <span className="text-blue-600">Bestverkochte Modellen</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deze airco's worden het meest geïnstalleerd in Limburg vanwege hun uitstekende prijs-kwaliteitverhouding
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Tosot Clivia - Featured */}
            <Card className="overflow-hidden shadow-xl border-2 border-orange-200">
              <div className="bg-orange-50 p-2 text-center">
                <p className="text-sm font-semibold text-orange-700 flex items-center justify-center gap-1">
                  <Star className="h-4 w-4 fill-orange-500" />
                  BESTSELLER IN LIMBURG
                </p>
              </div>
              <div className="relative h-48 bg-gray-50">
                <Image
                  src="/images/brands/products/724-clivia-wit-vooraanzicht.webp"
                  alt="Tosot Clivia"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Tosot Clivia</h3>
                <p className="text-gray-600 mb-4">Perfect design gecombineerd met top prestaties voor een scherpe prijs.</p>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-700">✓ Fluisterstil: 21 dB(A)</p>
                  <p className="text-sm text-gray-700">✓ A++ energielabel</p>
                  <p className="text-sm text-gray-700">✓ I Feel functie</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-3 mb-4">
                  <p className="text-sm font-medium text-orange-700">Bel voor beste prijs: 046 202 1430</p>
                </div>
                <Link href="/offerte">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    Direct offerte aanvragen
                  </Button>
                </Link>
              </div>
            </Card>
            
            {/* Daikin Comfora */}
            <Card className="overflow-hidden shadow-lg">
              <div className="relative h-48 bg-gray-50">
                <Image
                  src="/images/brands/products/daikin-comfora-left.webp"
                  alt="Daikin Comfora"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Daikin Comfora</h3>
                <p className="text-gray-600 mb-4">Japanse topkwaliteit met uitstekende prestaties.</p>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-700">✓ Fluisterstil: 19 dB(A)</p>
                  <p className="text-sm text-gray-700">✓ A+++ energie label</p>
                  <p className="text-sm text-gray-700">✓ WiFi bediening</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 mb-4">
                  <p className="text-sm font-medium text-blue-700">Vraag uw persoonlijke offerte aan</p>
                </div>
                <Link href="/offerte">
                  <Button className="w-full" variant="outline">
                    Meer informatie
                  </Button>
                </Link>
              </div>
            </Card>
            
            {/* Samsung WindFree */}
            <Card className="overflow-hidden shadow-lg">
              <div className="relative h-48 bg-gray-50">
                <Image
                  src="/images/brands/products/samsung/windfreeElite/WindFree Elite_S2_Front_Web_RGB.webp"
                  alt="Samsung WindFree Elite"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Samsung WindFree</h3>
                <p className="text-gray-600 mb-4">Revolutionaire WindFree technologie zonder directe luchtstroom.</p>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-700">✓ WindFree koeling</p>
                  <p className="text-sm text-gray-700">✓ A+++ energie label</p>
                  <p className="text-sm text-gray-700">✓ AI Auto Cooling</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 mb-4">
                  <p className="text-sm font-medium text-blue-700">Prijs op aanvraag - incl. installatie</p>
                </div>
                <Link href="/offerte">
                  <Button className="w-full" variant="outline">
                    Meer informatie
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Area Map/Visual */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Ons <span className="text-blue-600">Werkgebied</span>
            </h2>
            
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Wij bedienen heel Limburg</h3>
                  <p className="text-gray-600 mb-4">
                    Vanuit onze centrale locatie in Landgraaf kunnen wij snel ter plaatse zijn in heel Limburg. 
                    Of u nu in Venlo, Roermond of Vaals woont, wij komen naar u toe!
                  </p>
                  
                  <div className="space-y-2">
                    <p className="font-semibold">Ook actief in:</p>
                    <p className="text-sm text-gray-600">
                      Voerendaal • Simpelveld • Hoensbroek • Nuth • Schinnen • Beek • Stein • 
                      Meerssen • Valkenburg • Gulpen • Vaals • en alle andere gemeenten in Limburg
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-8 text-center">
                  <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <p className="text-3xl font-bold text-blue-600 mb-2">30-60 min</p>
                  <p className="text-gray-600">Gemiddelde aanrijtijd in heel Limburg</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ook airco installatie in úw stad?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Waar u ook woont in Limburg, wij komen naar u toe met onze professionele service
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/offerte">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Gratis Offerte Aanvragen
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Contact Opnemen
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}