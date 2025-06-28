import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import brandsData from "@/data/brands.json"
import { CTAWithForm } from "@/components/sections/cta-with-form"
import { generateOrganizationSchema } from "@/lib/schema"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Airco Merken | Daikin, LG, Samsung | StayCool ✓",
  description: "✓ Alle topmerken ✓ 5 jaar garantie ✓ Beste prijs-kwaliteit ✓ Daikin, Mitsubishi, Samsung, LG, Tosot. Advies? 046-202-1430",
  keywords: [
    "airco merken",
    "Daikin",
    "Mitsubishi Electric",
    "Samsung",
    "LG",
    "Tosot",
    "Gree",
    "airconditioning",
    "klimaatbeheersing",
    "Limburg"
  ],
}

export default function BrandsPage() {
  const breadcrumbItems = [
    { label: "Merken", href: "/merken" }
  ]

  const organizationSchema = generateOrganizationSchema()

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      <div className="container py-12">
        <Breadcrumb items={breadcrumbItems} />
        
        {/* Hero Section */}
        <div className="relative mb-16 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-12 text-white">
          <div className="absolute inset-0 bg-grid-white/[0.2] bg-grid-8"></div>
          <div className="relative z-10">
            <h1 className="mb-4 text-5xl font-bold">Daikin Airco Limburg & Meer Topmerken</h1>
            <p className="mb-6 text-xl text-blue-100 max-w-2xl">
              Ontdek ons zorgvuldig geselecteerde assortiment van 's werelds beste airconditioning fabrikanten. 
              Alleen A-merken met bewezen kwaliteit en betrouwbaarheid.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-2xl">✓</span>
                <span>5 jaar garantie</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-2xl">🏆</span>
                <span>Topkwaliteit</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-2xl">⚡</span>
                <span>Energiezuinig</span>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
        </div>

        {/* Trust indicators */}
        <div className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
            <div className="text-4xl font-bold text-blue-600 mb-2">8+</div>
            <p className="text-sm text-muted-foreground">Premium merken</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-white border border-green-100">
            <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
            <p className="text-sm text-muted-foreground">Modellen beschikbaar</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-white border border-purple-100">
            <div className="text-4xl font-bold text-purple-600 mb-2">A+++</div>
            <p className="text-sm text-muted-foreground">Energie labels</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-white border border-orange-100">
            <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
            <p className="text-sm text-muted-foreground">Kwaliteitsgarantie</p>
          </div>
        </div>

        {/* Brand Grid with enhanced visuals */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {brandsData.brands.map((brand, index) => (
            <Link key={brand.slug} href={`/merken/${brand.slug}`} className="group">
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group-hover:ring-2 group-hover:ring-blue-500">
                {/* Image container with overlay effect */}
                <div className="relative h-56 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <Image
                    src={brand.image}
                    alt={`${brand.name} airconditioning`}
                    fill
                    className="object-contain p-6 transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  {/* Top badge */}
                  {index < 3 && (
                    <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      POPULAIR
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  {/* Brand name with accent */}
                  <h2 className="mb-2 text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    {brand.name}
                  </h2>
                  
                  {/* Description */}
                  <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                    {brand.description}
                  </p>
                  
                  {/* Feature chips */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {brand.features.slice(0, 2).map((feature, idx) => (
                      <span 
                        key={idx} 
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {feature.split(' ').slice(0, 2).join(' ')}
                      </span>
                    ))}
                  </div>
                  
                  {/* CTA with arrow animation */}
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                      Bekijk modellen
                    </span>
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 group-hover:bg-blue-600 transition-colors">
                      <svg
                        className="w-4 h-4 text-blue-600 group-hover:text-white transition-all transform group-hover:translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Why choose section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Waarom Kiezen voor Premium Merken?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Wij werken uitsluitend met fabrikanten die voldoen aan onze strenge kwaliteitseisen
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Bewezen Kwaliteit</h3>
              <p className="text-muted-foreground">
                Alleen merken met jarenlange ervaring en bewezen betrouwbaarheid in de markt
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Duurzaam & Zuinig</h3>
              <p className="text-muted-foreground">
                Energiezuinige modellen die bijdragen aan lagere energiekosten en een beter milieu
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Uitgebreide Garantie</h3>
              <p className="text-muted-foreground">
                Tot 5 jaar fabrieksgarantie plus onze eigen installatiegarantie voor zorgeloos comfort
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTAWithForm 
        title="Advies over het Beste Merk voor uw Situatie?" 
        description="Onze experts helpen u graag bij het kiezen van de juiste airconditioning"
      />
    </>
  )
}