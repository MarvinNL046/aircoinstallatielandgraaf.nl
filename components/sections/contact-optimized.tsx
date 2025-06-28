"use client"

import { Card } from "@/components/ui/card"
import { ContactForm } from "@/components/forms/contact-form"
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const contactInfo = [
  {
    icon: Phone,
    title: "Telefoon",
    value: "046 202 1430",
    link: "tel:0462021430",
    description: "Direct contact"
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    value: "06 3648 1054",
    link: "https://wa.me/31636481054",
    description: "Chat met ons"
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "info@staycoolairco.nl",
    link: "mailto:info@staycoolairco.nl",
    description: "Binnen 24u reactie"
  },
  {
    icon: MapPin,
    title: "Werkgebied",
    value: "Heel Limburg",
    description: "Landgraaf en omgeving"
  }
]

const openingHours = [
  { day: "Maandag", hours: "09:00 - 17:00" },
  { day: "Dinsdag", hours: "09:00 - 17:00" },
  { day: "Woensdag", hours: "09:00 - 17:00" },
  { day: "Donderdag", hours: "09:00 - 17:00" },
  { day: "Vrijdag", hours: "09:00 - 16:00" },
  { day: "Zaterdag", hours: "Gesloten" },
  { day: "Zondag", hours: "Gesloten" }
]

export function ContactOptimized() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Neem <span className="text-blue-600">contact</span> op
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Heeft u vragen of wilt u een afspraak maken? Wij staan voor u klaar!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item) => (
                <Card key={item.title} className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      {item.link ? (
                        <Link href={item.link} className="text-blue-600 hover:text-blue-700 font-medium">
                          {item.value}
                        </Link>
                      ) : (
                        <p className="text-gray-800 font-medium">{item.value}</p>
                      )}
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Opening Hours */}
            <Card className="p-6 bg-white shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                Openingstijden
              </h3>
              <div className="space-y-2">
                {openingHours.map((item) => (
                  <div key={item.day} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-700">{item.day}</span>
                    <span className={`font-medium ${item.hours === 'Gesloten' ? 'text-gray-500' : 'text-gray-900'}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                <p className="text-sm text-orange-800 font-medium">
                  💡 Tip: Buiten openingstijden kunt u altijd een bericht achterlaten
                </p>
              </div>
            </Card>

            {/* Address Note */}
            <Card className="p-6 bg-blue-50 border border-blue-200">
              <p className="text-blue-900 font-medium">
                📍 Let op: Aan de Bogen 11, 6118 AS Nieuwstadt is geen bezoekadres. 
                Wij komen naar u toe voor alle werkzaamheden.
              </p>
            </Card>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <Card className="p-8 bg-white shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Stuur ons een bericht
              </h3>
              <p className="text-gray-600 mb-6">
                Vul het formulier in en wij nemen binnen 24 uur contact met u op
              </p>

              <ContactForm />

              {/* Trust Elements */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>100% veilig</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Geen spam</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Snelle reactie</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* WhatsApp CTA */}
            <div className="mt-6 bg-green-50 rounded-xl p-6 border border-green-200">
              <h4 className="font-semibold text-gray-900 mb-2">
                Liever direct contact via WhatsApp?
              </h4>
              <p className="text-gray-600 mb-4">
                Stuur ons een bericht en krijg direct antwoord op uw vragen
              </p>
              <Link 
                href="https://wa.me/31636481054" 
                target="_blank"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <MessageSquare className="h-5 w-5" />
                Chat via WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}