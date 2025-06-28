"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText, Users, Shield, Euro } from "lucide-react"

const features = [
  {
    icon: FileText,
    title: "Gratis Offerte",
    description: "Ontvang een vrijblijvende offerte op maat. Geen verborgen kosten, transparante prijzen.",
    highlight: "100% Gratis"
  },
  {
    icon: Users,
    title: "Gecertificeerde Monteurs",
    description: "Al onze monteurs zijn F-gassen gecertificeerd en hebben jarenlange ervaring.",
    highlight: "F-gassen Certified"
  },
  {
    icon: Shield,
    title: "5 Jaar Garantie",
    description: "Complete garantie op installatie en materialen. Voor uw gemoedsrust.",
    highlight: "5 Jaar Dekking"
  },
  {
    icon: Euro,
    title: "Scherpe Prijzen",
    description: "Topkwaliteit tegen eerlijke prijzen. Onderhoud al vanaf €11 per maand.",
    highlight: "Vanaf €11/maand"
  }
]

export function WhyUs() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Waarom kiezen voor <span className="text-blue-600">StayCool Airco</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Met meer dan 10 jaar ervaring zijn wij dé airco specialist in Limburg
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="text-center group"
            >
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-600 transition-colors duration-300">
                  <feature.icon className="h-10 w-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                {/* Badge */}
                <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {feature.highlight}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Klimaatbeheersing Limburg - Perfect Comfort Het Hele Jaar
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Vraag vandaag nog uw gratis offerte aan en ontdek wat wij voor u kunnen betekenen
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/offerte">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg shadow-lg">
                Gratis Offerte Aanvragen
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/50 px-8 py-4 text-lg">
                Contact Opnemen
              </Button>
            </Link>
          </div>

          {/* Trust Elements */}
          <div className="mt-8 flex items-center justify-center gap-6 text-white/80 text-sm">
            <span>✓ Binnen 24u reactie</span>
            <span>✓ Geen verplichtingen</span>
            <span>✓ 163+ tevreden klanten</span>
          </div>
        </div>
      </div>
    </section>
  )
}