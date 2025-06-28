"use client"

import { Card } from "@/components/ui/card"
import { ContactForm } from "@/components/forms/contact-form"
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle2, Building2 } from "lucide-react"
import Link from "next/link"

const contactInfo = [
  {
    icon: Phone,
    title: "Bel direct",
    value: "046 202 1430",
    link: "tel:0462021430",
    description: "Ma-Vr: 09:00 - 17:00"
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    value: "06 3648 1054",
    link: "https://wa.me/31636481054",
    description: "Snelle reactie"
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "info@staycoolairco.nl",
    link: "mailto:info@staycoolairco.nl",
    description: "Binnen 24u antwoord"
  },
  {
    icon: MapPin,
    title: "Werkgebied",
    value: "Heel Limburg",
    description: "Wij komen naar u toe"
  }
]

export function ContactOptimizedV2() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contact <span className="text-blue-600">& Offerte</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vraag vandaag nog een vrijblijvende offerte aan of neem direct contact op
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Column - Contact Info (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Contact */}
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-white border-blue-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-600" />
                Direct contact
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                      <item.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{item.title}</h4>
                      {item.link ? (
                        <Link 
                          href={item.link} 
                          className="text-blue-600 hover:text-blue-700 font-semibold block"
                        >
                          {item.value}
                        </Link>
                      ) : (
                        <p className="text-gray-800 font-semibold">{item.value}</p>
                      )}
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Company Info */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Building2 className="h-5 w-5 text-blue-600" />
                Bedrijfsgegevens
              </h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="font-medium text-gray-600">Bedrijfsnaam:</dt>
                  <dd className="text-gray-900">StayCool Airco</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-600">KvK nummer:</dt>
                  <dd className="text-gray-900">Op aanvraag</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-600">BTW nummer:</dt>
                  <dd className="text-gray-900">Op aanvraag</dd>
                </div>
                <div className="pt-3 border-t">
                  <p className="text-gray-600">
                    <strong>Let op:</strong> Wij werken uitsluitend op locatie. 
                    Aan de Bogen 11, Nieuwstadt is geen bezoekadres.
                  </p>
                </div>
              </dl>
            </Card>

            {/* Opening Hours */}
            <Card className="p-6 bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                Bereikbaarheid
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="font-medium text-gray-700">Ma t/m Do:</div>
                <div className="text-gray-900">09:00 - 17:00</div>
                <div className="font-medium text-gray-700">Vrijdag:</div>
                <div className="text-gray-900">09:00 - 16:00</div>
                <div className="font-medium text-gray-700">Weekend:</div>
                <div className="text-gray-900">Gesloten</div>
              </div>
              <div className="mt-4 p-3 bg-orange-100 rounded-lg">
                <p className="text-sm text-orange-800">
                  <strong>Tip:</strong> Buiten kantoortijden? Stuur een WhatsApp of vul het formulier in!
                </p>
              </div>
            </Card>
          </div>

          {/* Right Column - Contact Form (3 cols) */}
          <div className="lg:col-span-3">
            <Card className="p-8 shadow-xl h-full">
              {/* Form Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Vraag een vrijblijvende offerte aan
                </h3>
                <p className="text-gray-600">
                  Vul onderstaand formulier in en ontvang binnen 24 uur een offerte op maat
                </p>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                  <p className="text-xs font-medium text-gray-700">100% Gratis</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="text-xs font-medium text-gray-700">Binnen 24u</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Building2 className="h-6 w-6 text-orange-600" />
                  </div>
                  <p className="text-xs font-medium text-gray-700">Vrijblijvend</p>
                </div>
              </div>

              {/* Contact Form */}
              <ContactForm />

              {/* Privacy Notice */}
              <p className="mt-6 text-xs text-gray-500 text-center">
                Wij gaan zorgvuldig om met uw gegevens. 
                Geen spam, alleen relevante informatie over uw aanvraag.
              </p>
            </Card>
          </div>
        </div>

        {/* Bottom CTA - WhatsApp */}
        <div className="mt-12 text-center">
          <Card className="p-8 bg-gradient-to-r from-green-500 to-green-600 text-white">
            <h3 className="text-2xl font-bold mb-3">
              Liever direct antwoord op uw vragen?
            </h3>
            <p className="text-lg mb-6 text-green-50">
              Chat met ons via WhatsApp - wij reageren meestal binnen enkele minuten!
            </p>
            <Link 
              href="https://wa.me/31636481054?text=Hallo%20StayCool%20Airco,%20ik%20heb%20een%20vraag%20over%20airco%20installatie" 
              target="_blank"
              className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors shadow-lg"
            >
              <MessageSquare className="h-6 w-6" />
              Start WhatsApp gesprek
            </Link>
          </Card>
        </div>
      </div>
    </section>
  )
}