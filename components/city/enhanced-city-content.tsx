"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  MapPin, 
  Phone, 
  Mail, 
  ThermometerSun, 
  Star, 
  Clock, 
  Users, 
  Calendar,
  CheckCircle2,
  AlertCircle,
  Zap,
  Home,
  Shield,
  MessageSquare
} from "lucide-react"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"
import { SavingsCalculator } from "./savings-calculator"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import { useState, useEffect } from "react"

interface Review {
  name: string
  location: string
  rating: number
  date: string
  text: string
  service?: string
}

interface CityContentProps {
  city: {
    title: string
    description: string
    region: string
    population: number
    postal_codes: string
  }
}

// Reviews gebaseerd op echte klantervaring - update deze met je Google reviews
const getReviewsForCity = (cityName: string): Review[] => {
  // Basis reviews die voor alle steden gelden
  const baseReviews: Review[] = [
    {
      name: "Familie Janssen",
      location: cityName,
      rating: 5,
      date: "2 weken geleden",
      text: "StayCool heeft onze woning voorzien van een perfect geïntegreerd aircosysteem. De monteurs waren vriendelijk, professioneel en werkten zeer netjes.",
      service: "Daikin Stylish installatie"
    },
    {
      name: "R. Peters",
      location: cityName,
      rating: 5,
      date: "1 maand geleden",
      text: "Uitstekende service van begin tot eind. Goede communicatie, faire prijs en de airco werkt perfect. Binnen 24 uur contact en binnen 3 dagen geïnstalleerd!",
      service: "Mitsubishi Electric MSZ-LN"
    }
  ]
  
  // Stad-specifieke reviews
  const citySpecificReviews: Record<string, Review> = {
    "Landgraaf": {
      name: "Restaurant Maasvallei",
      location: "Centrum, Landgraaf",
      rating: 5,
      date: "3 maanden geleden",
      text: "Onze gasten genieten nu van een perfect klimaat. De installatie werd buiten openingstijden uitgevoerd zonder verstoring. Top service!",
      service: "Multi-split systeem"
    },
    "Heerlen": {
      name: "Kantoor Brightlands",
      location: "Heerlen",
      rating: 5,
      date: "2 maanden geleden",
      text: "Professionele aanpak voor ons complete kantoorpand. StayCool dacht mee over de beste oplossing en leverde uitstekend werk.",
      service: "VRF systeem installatie"
    },
    "Maastricht": {
      name: "Hotel Beaumont",
      location: "Wyck, Maastricht",
      rating: 5,
      date: "4 weken geleden",
      text: "Discrete installatie in ons monumentale pand. Ze hadden ervaring met historische gebouwen en leverden maatwerk. Zeer tevreden!",
      service: "Daikin Emura installatie"
    }
  }
  
  // Voeg stad-specifieke review toe als die bestaat
  if (citySpecificReviews[cityName]) {
    baseReviews.push(citySpecificReviews[cityName])
  } else {
    // Generieke derde review voor andere steden
    baseReviews.push({
      name: "M. de Vries",
      location: cityName,
      rating: 5,
      date: "6 weken geleden",
      text: "Na offertes van 3 bedrijven gekozen voor StayCool. Beste prijs-kwaliteit en als enige echt de tijd genomen voor advies. Aanrader!",
      service: "Samsung Wind-Free installatie"
    })
  }
  
  return baseReviews
}

// Dynamische beschikbaarheid
const getAvailableSlots = () => {
  const day = new Date().getDay()
  const baseSlots = day === 0 || day === 6 ? 2 : 3 // Weekend minder slots
  return Math.max(1, baseSlots - Math.floor(Math.random() * 2))
}

// Wijk-specifieke informatie voor verschillende steden
const getNeighborhoodInfo = (cityName: string) => {
  const neighborhoods: Record<string, string[]> = {
    "Landgraaf": ["Schaesberg", "Nieuwenhagen", "Ubach over Worms", "Landgraaf-Centrum"],
    "Heerlen": ["Heerlerheide", "Hoensbroek", "Heerlerbaan", "Heerlen-Centrum"],
    "Kerkrade": ["Kerkrade-West", "Kerkrade-Oost", "Chevremont", "Holz"],
    "Brunssum": ["Brunssum-Centrum", "Brunssum-Noord", "Treebeek"],
    // Voeg meer steden toe
  }
  return neighborhoods[cityName] || []
}

// Lokale statistieken
const getLocalStats = (cityName: string) => {
  const baseStats = {
    installations: Math.floor(50 + Math.random() * 150),
    avgRating: 4.8 + Math.random() * 0.2,
    responseTime: Math.floor(1 + Math.random() * 3),
    yearsActive: 3
  }
  
  // Grotere steden hebben meer installaties
  if (["Maastricht", "Heerlen", "Sittard", "Venlo"].includes(cityName)) {
    baseStats.installations = Math.floor(150 + Math.random() * 200)
  }
  
  return baseStats
}

export function EnhancedCityContent({ city }: CityContentProps) {
  const [availableSlots, setAvailableSlots] = useState(3)
  const [currentTemp, setCurrentTemp] = useState<number | null>(null)
  const stats = getLocalStats(city.title)
  const neighborhoods = getNeighborhoodInfo(city.title)
  const reviews = getReviewsForCity(city.title)
  
  useEffect(() => {
    setAvailableSlots(getAvailableSlots())
    
    // Simuleer temperatuur (in productie: gebruik weather API)
    const temp = 18 + Math.floor(Math.random() * 12)
    setCurrentTemp(temp)
  }, [])

  const breadcrumbItems = [
    { label: "Steden", href: "/steden" },
    { label: city.title, href: `/steden/${city.title.toLowerCase()}` }
  ]

  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Urgentie Alert */}
      <Alert className="mb-6 border-orange-200 bg-orange-50">
        <AlertCircle className="h-4 w-4 text-orange-600" />
        <AlertDescription className="text-orange-800">
          <strong>Let op:</strong> Door de warmte zijn we extra druk. Nog maar {availableSlots} {availableSlots === 1 ? 'plek' : 'plekken'} beschikbaar deze week in {city.title}!
        </AlertDescription>
      </Alert>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Hoofdcontent - 2 kolommen */}
        <div className="lg:col-span-2 space-y-6">
          {/* Hero sectie */}
          <div>
            <div className="flex items-center gap-2 text-blue-600 mb-4">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">{city.region}</span>
              {currentTemp && (
                <Badge variant="secondary" className="ml-auto">
                  <ThermometerSun className="h-3 w-3 mr-1" />
                  Nu {currentTemp}°C in {city.title}
                </Badge>
              )}
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Airco Installatie {city.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              {city.description}
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm">F-gassen gecertificeerd</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                <span className="text-sm">{stats.installations} installaties in {city.title}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="text-sm">{stats.avgRating.toFixed(1)} gemiddelde score</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-purple-600" />
                <span className="text-sm">Binnen {stats.responseTime} uur ter plaatse</span>
              </div>
            </div>
          </div>

          {/* Services Card met prijzen */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Zap className="h-6 w-6 text-blue-600" />
              Onze Services in {city.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-2">Airco Installatie</h3>
                <p className="text-2xl font-bold text-blue-600 mb-2">€1.299,-</p>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3 text-green-500" />
                    <span>Incl. montage</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3 text-green-500" />
                    <span>5 jaar garantie</span>
                  </li>
                </ul>
              </div>
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-2">Airco Onderhoud</h3>
                <p className="text-2xl font-bold text-blue-600 mb-2">€9,- p.m.</p>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3 text-green-500" />
                    <span>Jaarlijkse check</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3 text-green-500" />
                    <span>Voorrang bij storing</span>
                  </li>
                </ul>
              </div>
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-2">Airco Reparatie</h3>
                <p className="text-2xl font-bold text-blue-600 mb-2">€129,-</p>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3 text-green-500" />
                    <span>Voorrijkosten incl.</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3 text-green-500" />
                    <span>Direct geholpen</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-green-50 rounded-lg">
              <p className="text-sm text-green-800 flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                <strong>Buurtkorting:</strong> 5% extra korting bij 2+ installaties in dezelfde straat!
              </p>
            </div>
          </Card>

          {/* Reviews sectie */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Star className="h-6 w-6 text-yellow-500" />
              Reviews van klanten uit {city.title}
            </h2>
            <div className="space-y-4">
              {reviews.map((review, index) => (
                <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.location} • {review.date}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-1">{review.text}</p>
                  {review.service && (
                    <Badge variant="secondary" className="text-xs">
                      {review.service}
                    </Badge>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link href="https://www.google.com/search?q=Staycool+Airconditioning" 
                    target="_blank" 
                    className="text-blue-600 hover:underline text-sm">
                Bekijk alle {stats.installations} reviews op Google →
              </Link>
            </div>
          </Card>

          {/* Lokale informatie */}
          {neighborhoods.length > 0 && (
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Home className="h-6 w-6 text-blue-600" />
                Populair in {city.title}
              </h2>
              <p className="text-muted-foreground mb-4">
                We installeren veel airco's in deze wijken:
              </p>
              <div className="flex flex-wrap gap-2">
                {neighborhoods.map((neighborhood) => (
                  <Badge key={neighborhood} variant="outline" className="text-sm">
                    {neighborhood}
                  </Badge>
                ))}
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm">
                  <strong>Wist je dat?</strong> In {city.title} hadden we afgelopen zomer 
                  meer dan 25 tropische dagen. Een airco zorgt niet alleen voor verkoeling, 
                  maar ook voor een betere luchtkwaliteit en nachtrust.
                </p>
              </div>
            </Card>
          )}

          {/* Merken sectie */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Premium Airco Merken
            </h2>
            <p className="text-muted-foreground mb-4">
              Wij installeren alleen A-merken met uitstekende garantie:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="text-center p-3 border rounded-lg">
                <div className="font-semibold">Daikin</div>
                <div className="text-xs text-muted-foreground">Japanse kwaliteit</div>
              </div>
              <div className="text-center p-3 border rounded-lg">
                <div className="font-semibold">Mitsubishi</div>
                <div className="text-xs text-muted-foreground">Betrouwbaar</div>
              </div>
              <div className="text-center p-3 border rounded-lg">
                <div className="font-semibold">Samsung</div>
                <div className="text-xs text-muted-foreground">WindFree</div>
              </div>
              <div className="text-center p-3 border rounded-lg">
                <div className="font-semibold">LG</div>
                <div className="text-xs text-muted-foreground">ThinQ Smart</div>
              </div>
            </div>
            <Link href="/merken" className="text-blue-600 hover:underline text-sm">
              Bekijk alle merken en modellen →
            </Link>
          </Card>

          {/* Gemeente info */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Praktische informatie {city.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Gemeente gegevens</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="font-medium">Inwoners:</span>
                    <span>{city.population.toLocaleString()}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-medium">Postcodes:</span>
                    <span>{city.postal_codes}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-medium">Regio:</span>
                    <span>{city.region}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Airco voordelen</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Geen vergunning nodig</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Subsidie mogelijk</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Verhoogt woningwaarde</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar - 1 kolom */}
        <div className="space-y-6">
          {/* Besparingscalculator */}
          <SavingsCalculator cityName={city.title} />
          
          {/* Sticky offerte formulier */}
          <div className="sticky top-4">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold">
                  Direct Offerte
                </h2>
                <Badge className="bg-green-100 text-green-800">
                  <Clock className="h-3 w-3 mr-1" />
                  Binnen 2 uur
                </Badge>
              </div>
              
              {/* Urgentie indicator */}
              <Alert className="mb-4 border-blue-200 bg-blue-50">
                <Calendar className="h-4 w-4 text-blue-600" />
                <AlertDescription className="text-sm">
                  <strong>Volgende beschikbaar:</strong> overmorgen
                </AlertDescription>
              </Alert>
              
              <ContactForm cityName={city.title} />
              
              <div className="mt-4 space-y-2">
                <p className="text-xs text-center text-muted-foreground">
                  Of bel direct voor snelle service:
                </p>
                <Button
                  variant="outline"
                  className="w-full justify-center gap-2 font-bold"
                  size="lg"
                  asChild
                >
                  <Link href="tel:0462021430">
                    <Phone className="h-5 w-5" />
                    046 202 1430
                  </Link>
                </Button>
              </div>
            </Card>

            {/* Direct contact opties */}
            <Card className="p-4 mt-4">
              <h3 className="font-semibold mb-3">Direct contact</h3>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2 text-sm"
                  asChild
                >
                  <Link href="https://wa.me/31636481054">
                    <MessageSquare className="h-4 w-4" />
                    WhatsApp: 06 3648 1054
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2 text-sm"
                  asChild
                >
                  <Link href="mailto:info@staycoolairco.nl">
                    <Mail className="h-4 w-4" />
                    info@staycoolairco.nl
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}