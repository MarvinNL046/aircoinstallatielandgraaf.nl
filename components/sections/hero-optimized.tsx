"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ContactForm } from "@/components/forms/contact-form"
import { Phone, Star, CheckCircle2, Clock } from "lucide-react"

const headlines = [
  "Professionele Airco Installatie in Limburg",
  "Gecertificeerde Monteurs voor uw Airco",
  "Airco Service met 5 Jaar Garantie",
  "Bereikbaar tijdens kantooruren voor Airco Onderhoud"
]

export function HeroOptimized() {
  const [currentHeadline, setCurrentHeadline] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false)
      setTimeout(() => {
        setCurrentHeadline((prev) => (prev + 1) % headlines.length)
        setIsTyping(true)
      }, 200)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      </div>

      <div className="container relative z-10 py-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center">
            {/* Ribbon */}
            <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 w-fit">
              <Clock className="h-4 w-4" />
              <span>Binnen 24u reactie</span>
            </div>

            {/* Dynamic Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="block text-orange-500 mb-2">StayCool Airco</span>
              <span className="block h-[1.2em] md:h-[1.4em] relative overflow-hidden">
                <span className={`absolute inset-0 transition-opacity duration-300 ${isTyping ? 'opacity-100' : 'opacity-0'}`}>
                  {headlines[currentHeadline]}
                </span>
              </span>
            </h1>

            {/* Trust Badges */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-400/50 fill-yellow-400/50'}`} />
                ))}
              </div>
              <span className="text-white font-semibold">4.7/5</span>
              <span className="text-white/80">op basis van 163 reviews</span>
            </div>

            {/* Description */}
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Geniet van optimaal klimaatcomfort het hele jaar door. 
              Vakkundige installatie door gecertificeerde monteurs in heel Limburg.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/offerte">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                  Gratis Offerte Aanvragen
                </Button>
              </Link>
              <Link href="tel:0462021430">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 px-8 py-4 text-lg">
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
                "Vanaf €11/maand"
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-white/90">
                  <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            <Card className="p-6 lg:p-8 bg-white/95 backdrop-blur-lg shadow-2xl">
              {/* Form Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Direct een offerte aanvragen?
                </h3>
                <p className="text-gray-600">
                  Vul het formulier in en ontvang binnen 24 uur een vrijblijvende offerte
                </p>
              </div>

              {/* Urgency Message */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-6">
                <p className="text-sm text-orange-800 font-medium text-center">
                  🔥 Let op: Door grote vraag zijn de wachttijden opgelopen
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
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}