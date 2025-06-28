"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, Settings, Shield, Play } from "lucide-react"

const services = [
  {
    title: "Airco Installatie",
    description: "Professionele installatie van alle merken airconditioners door gecertificeerde monteurs. Inclusief advies over het beste systeem voor uw situatie.",
    icon: Wrench,
    features: [
      "Alle topmerken",
      "Vakkundige montage",
      "5 jaar garantie",
      "Gratis adviesgesprek"
    ],
    ctaText: "Offerte aanvragen",
    ctaLink: "/offerte"
  },
  {
    title: "Onderhoud & Service",
    description: "Regelmatig onderhoud verlengt de levensduur van uw airco en zorgt voor optimale prestaties. Vanaf €11 per maand.",
    icon: Settings,
    features: [
      "Jaarlijkse controle",
      "Filter reiniging",
      "Koudemiddel check",
      "Storingsdienst tijdens kantooruren"
    ],
    ctaText: "Onderhoudscontract",
    ctaLink: "/contact"
  },
  {
    title: "Reparatie & Storing",
    description: "Storing aan uw airco? Onze monteurs staan voor u klaar. Wij repareren alle merken en modellen.",
    icon: Shield,
    features: [
      "Snelle service",
      "Alle merken",
      "Transparante prijzen",
      "Garantie op reparaties"
    ],
    ctaText: "Storing melden",
    ctaLink: "/contact"
  }
]

export function ServicesOptimized() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">Airco Service Limburg</span> & Specialist
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Van installatie tot onderhoud, wij zorgen voor het perfecte klimaat in uw woning of bedrijf
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <Card key={service.title} className="p-6 lg:p-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Icon */}
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-700">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 text-xs">✓</span>
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link href={service.ctaLink}>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  {service.ctaText}
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        {/* YouTube Video Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Bekijk hoe wij te werk gaan
            </h3>
            <p className="text-gray-600">
              Ontdek in deze video waarom klanten voor StayCool Airco kiezen
            </p>
          </div>

          {/* Video Container */}
          <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/9m-jkGgfLog"
              title="StayCool Airco - Professionele airco installatie in Limburg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            
            {/* Play Button Overlay (shown before iframe loads) */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center">
                <Play className="h-10 w-10 text-blue-600 ml-1" />
              </div>
            </div>
          </div>

          {/* Video CTA */}
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Overtuigd van onze werkwijze? Vraag vandaag nog een offerte aan!
            </p>
            <Link href="/offerte">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                Direct offerte aanvragen
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}