"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Phone, Gift } from "lucide-react"

interface CTABannerProps {
  variant?: "default" | "urgent" | "discount" | "trust"
  className?: string
}

export function CTABannerOptimized({ variant = "default", className = "" }: CTABannerProps) {
  const variants = {
    default: {
      bgClass: "bg-gradient-to-r from-blue-600 to-blue-800",
      icon: ArrowRight,
      title: "Klaar voor een comfortabel klimaat?",
      subtitle: "Vraag vandaag nog uw gratis offerte aan en geniet van 5 jaar garantie",
      buttonText: "Gratis Offerte Aanvragen",
      features: ["Binnen 24u reactie", "Vrijblijvend advies", "Scherpe prijzen"]
    },
    urgent: {
      bgClass: "bg-gradient-to-r from-orange-500 to-orange-700",
      icon: Zap,
      title: "☀️ Geniet direct van verkoeling!",
      subtitle: "Het is zomer! Profiteer nu optimaal van uw nieuwe airco tijdens deze warme dagen.",
      buttonText: "Direct Installatie Aanvragen",
      features: ["Snelle installatie mogelijk", "Koel de hele zomer", "Vakantie? Geen probleem!"]
    },
    discount: {
      bgClass: "bg-gradient-to-r from-green-600 to-green-800",
      icon: Gift,
      title: "Zomer Voordeel: Extra koeling waar u het nodig heeft",
      subtitle: "Bestel nu een tweede unit met aantrekkelijk voordeel - ideaal voor slaapkamer of werkkamer!",
      buttonText: "Bekijk Voordeel",
      features: ["Voordeel op 2e unit", "Heel huis koel", "Deze maand geldig"]
    },
    trust: {
      bgClass: "bg-gradient-to-r from-gray-800 to-gray-900",
      icon: Phone,
      title: "Persoonlijk advies nodig?",
      subtitle: "Onze experts staan voor u klaar. Bel direct of vraag een terugbelverzoek aan",
      buttonText: "Bel 046 202 1430",
      features: ["Direct contact", "Deskundig advies", "Geen wachttijd"]
    }
  }

  const config = variants[variant]

  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div className={`${config.bgClass} py-12 lg:py-16`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-[2fr,1fr] gap-8 items-center">
            {/* Content */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
                <config.icon className="h-8 w-8 text-white/80" />
                {config.title}
              </h2>
              <p className="text-xl text-white/90 mb-6">
                {config.subtitle}
              </p>
              
              {/* Features */}
              <div className="flex flex-wrap gap-4 mb-8">
                {config.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                    <span className="text-green-400">✓</span>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA */}
              <div className="flex flex-wrap gap-4">
                {variant === "trust" ? (
                  <>
                    <Link href="tel:0462021430">
                      <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg">
                        <Phone className="mr-2 h-5 w-5" />
                        {config.buttonText}
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button size="lg" variant="outline" className="text-white border-white/50 hover:bg-white/10">
                        Terugbelverzoek
                      </Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href="/offerte">
                      <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg">
                        {config.buttonText}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    {variant === "urgent" && (
                      <Link href="https://afspraken.staycoolairco.nl/" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" variant="outline" className="text-white border-white/50 hover:bg-white/10">
                          Direct Online Afspraak
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                    )}
                  </>
                )}
              </div>
            </div>
            
            {/* Visual Element */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                <div className="w-32 h-32 bg-white/20 rounded-full blur-3xl absolute" />
                <config.icon className="h-24 w-24 text-white/30 relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Sticky CTA Bar Component
export function StickyCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-orange-500 py-3 shadow-lg lg:hidden">
      <div className="container">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-white font-semibold text-sm">
              Gratis offerte? Bel direct!
            </p>
          </div>
          <Link href="tel:0462021430">
            <Button size="sm" className="bg-white text-orange-500 hover:bg-gray-100">
              <Phone className="h-4 w-4 mr-1" />
              046 202 1430
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}