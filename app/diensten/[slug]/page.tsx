import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import { CTAWithForm } from "@/components/sections/cta-with-form"
import diensten from "@/data/diensten.json"
import { generateServiceSchema } from "@/lib/structured-data"
import { generateFAQSchema } from "@/lib/schema"
import Script from "next/script"

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dienst = diensten.find((d) => d.slug === params.slug)
  
  if (!dienst) {
    return {
      title: "Dienst niet gevonden",
      description: "De opgevraagde dienst bestaat niet."
    }
  }

  // Prijsweergave
  const priceDisplay = dienst.price.period 
    ? `€${dienst.price.from}/${dienst.price.period}`
    : `€${dienst.price.from}`

  // Urgentie en call-to-action toevoegen
  const urgencyPhrases: Record<string, string> = {
    'installatie': '⚡ 24u Installatie',
    'onderhoud': '🔧 Voorjaarskorting',
    'reparatie': '⏰ Spoed Service',
    'advies': '✓ Gratis Advies'
  }

  const urgency = urgencyPhrases[dienst.slug] || '✓ Direct Beschikbaar'

  return {
    title: `${dienst.title} ${priceDisplay} → ${urgency} Landgraaf | Bel: 046 202 1430`,
    description: `⭐ ${dienst.title} vanaf ${priceDisplay} in Landgraaf! ✓ 4.8★ uit 127 reviews ✓ Binnen 24u geholpen ✓ 5 jaar garantie ✓ Gecertificeerd. WhatsApp: 06-3648-1054`,
    openGraph: {
      title: `${dienst.title} vanaf ${priceDisplay} → StayCool Airco Landgraaf`,
      description: `⚡ ${dienst.description} ✓ Vanaf ${priceDisplay} ✓ 127+ tevreden klanten ✓ Direct contact: 046 202 1430`,
      url: `https://aircoinstallatielandgraaf.nl/diensten/${params.slug}`,
      siteName: "StayCool Airco Landgraaf",
      locale: "nl_NL",
      type: "website",
      images: ['/og-image.png'],
    },
  }
}

export function generateStaticParams() {
  return diensten.map((dienst) => ({
    slug: dienst.slug,
  }))
}

export default function DienstPage({ params }: Props) {
  const dienst = diensten.find((d) => d.slug === params.slug)

  if (!dienst) {
    notFound()
  }

  const serviceSchema = generateServiceSchema({
    name: dienst.title,
    description: dienst.description,
    price: dienst.price.from.toString(),
  })

  // Service-specific FAQs
  const serviceFAQs = [
    {
      question: `Wat kost ${dienst.title.toLowerCase()} precies?`,
      answer: `${dienst.title} start vanaf €${dienst.price.from}${dienst.price.period ? ' per ' + dienst.price.period : ''}. De exacte prijs hangt af van uw specifieke situatie. Vraag een gratis offerte aan voor een exacte prijs.`
    },
    {
      question: `Hoe lang duurt ${dienst.title.toLowerCase()}?`,
      answer: dienst.slug === 'installatie' 
        ? 'Een standaard airco installatie duurt gemiddeld 4-6 uur. Bij complexere installaties kan dit langer duren.'
        : dienst.slug === 'onderhoud'
        ? 'Een onderhoudsbeurt duurt ongeveer 30-60 minuten, afhankelijk van het type systeem.'
        : 'De duur is afhankelijk van de specifieke werkzaamheden. We informeren u vooraf over de verwachte tijdsduur.'
    },
    {
      question: `Waarom kiezen voor StayCool Airco voor ${dienst.title.toLowerCase()}?`,
      answer: `StayCool Airco heeft 127+ tevreden klanten met een gemiddelde score van 4.8★. We zijn volledig gecertificeerd, bieden 5 jaar garantie en hebben altijd transparante prijzen.`
    }
  ]
  
  const faqSchema = generateFAQSchema(serviceFAQs)

  const breadcrumbItems = [
    { label: "Diensten", href: "/diensten" },
    { label: dienst.title, href: `/diensten/${dienst.slug}` }
  ]

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="service-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 className="text-4xl font-bold mb-6">{dienst.title}</h1>
        
        <div className="prose max-w-none mb-16">
          <p className="text-lg mb-4">{dienst.description}</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Voordelen</h2>
          <ul className="space-y-2">
            {dienst.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                {benefit}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Kenmerken</h2>
          <ul className="space-y-2">
            {dienst.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <CTAWithForm 
          title="Interesse in deze dienst?"
          description="Vraag direct een vrijblijvende offerte aan voor deze dienst."
        />
      </div>
    </>
  )
}