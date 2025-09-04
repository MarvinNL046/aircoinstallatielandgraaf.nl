"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ContactForm } from "@/components/forms/contact-form"
import { Phone, Star, CheckCircle2, Clock, ArrowRight } from "lucide-react"

const headlines = [
  "Professionele Airco Installatie in Limburg",
  "Gecertificeerde Monteurs voor uw Airco",
  "Airco Service met 5 Jaar Garantie",
  "Vanaf €11/maand voor Airco Onderhoud"
]

export function HeroOptimizedV2() {
  const [currentHeadline, setCurrentHeadline] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container relative z-10 py-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 w-fit">
              <Clock className="h-4 w-4" />
              <span>Binnen 24u reactie - Geen wachttijden</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">Airco Limburg</span>
              <span className="block text-gray-900 mt-2">Installateur Landgraaf</span>
            </h1>

            {/* Dynamic Subheadline with fixed height */}
            <div className="h-[2rem] md:h-[2.5rem] mb-6 overflow-hidden">
              <div className="relative h-full">
                {headlines.map((headline, index) => (
                  <p
                    key={index}
                    className={`absolute inset-0 text-xl md:text-2xl text-gray-700 transition-all duration-500 ${
                      index === currentHeadline 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                    }`}
                  >
                    {headline}
                  </p>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-400/30 fill-yellow-400/30'}`} />
                  ))}
                </div>
                <span className="font-semibold text-gray-900">4.7/5</span>
                <span className="text-gray-600">(163 reviews)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>F-gassen gecertificeerd</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Professionele airco installatie door gecertificeerde monteurs. 
              Wij installeren alle topmerken met 5 jaar garantie. 
              Onderhoud al vanaf €11 per maand.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/offerte">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                  Gratis Offerte Aanvragen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://afspraken.staycoolairco.nl/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                  Direct Afspraak Maken
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="tel:0462021430">
                <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-orange-500 px-6 py-3 text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  046 202 1430
                </Button>
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "5 jaar garantie",
                "Gratis advies",
                "Alle merken",
                "Scherpe prijzen"
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            {/* Form Card */}
            <Card className="p-6 lg:p-8 shadow-2xl border-0 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full -translate-y-16 translate-x-16 opacity-20" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-100 rounded-full translate-y-12 -translate-x-12 opacity-20" />
              
              <div className="relative z-10">
                {/* Form Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Direct een offerte?
                  </h3>
                  <p className="text-gray-600">
                    Vul het formulier in voor een vrijblijvende offerte
                  </p>
                </div>

                {/* Urgency Message */}
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6">
                  <p className="text-sm text-amber-800 font-medium text-center">
                    💡 Tip: Vraag nu aan en profiteer van korte levertijden
                  </p>
                </div>

                {/* Contact Form */}
                <ContactForm />

                {/* Trust Elements */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>Geen verplichtingen</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span>100% gratis</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
              Direct geholpen!
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}