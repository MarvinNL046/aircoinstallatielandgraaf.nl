import Link from "next/link"
import { AirVent, Mail, MapPin, Phone, MessageSquare, Clock, Star } from "lucide-react"

const quickLinks = [
  { name: "Airco Installatie", href: "/diensten/airco-installatie" },
  { name: "Onderhoud", href: "/diensten/onderhoud" },
  { name: "Reparatie", href: "/diensten/reparatie" },
  { name: "Gratis Offerte", href: "/offerte" },
]

const cities = [
  "Landgraaf", "Heerlen", "Kerkrade", "Brunssum",
  "Maastricht", "Sittard", "Geleen", "Roermond"
]

const brands = [
  "Daikin", "LG", "Samsung", "Mitsubishi",
  "Toshiba", "Tosot"
]

export function FooterOptimized() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <AirVent className="h-8 w-8 text-orange-500" />
              <div>
                <span className="font-bold text-lg">StayCool Airco</span>
                <span className="block text-sm text-gray-400">Landgraaf & Limburg</span>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Professionele airconditioning installatie, onderhoud en reparatie in heel Limburg. 
              Gecertificeerde monteurs met 5 jaar garantie.
            </p>
            <div className="flex items-center gap-2 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < 4 ? 'fill-yellow-400' : 'fill-yellow-400/30'}`} />
              ))}
              <span className="text-sm text-gray-300">4.7/5 (163 reviews)</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:0462021430" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                  <Phone className="h-4 w-4" />
                  <span>046 202 1430</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/31636481054" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                  <MessageSquare className="h-4 w-4" />
                  <span>06 3648 1054 (WhatsApp)</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@staycoolairco.nl" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                  <Mail className="h-4 w-4" />
                  <span>info@staycoolairco.nl</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="h-4 w-4 mt-0.5" />
                <div>
                  <span>Werkgebied: Heel Limburg</span>
                  <span className="block text-xs mt-1">Geen bezoekadres</span>
                </div>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <Clock className="h-4 w-4 mt-0.5" />
                <div>
                  <span>Ma-Vr: 09:00 - 17:00</span>
                  <span className="block text-xs">Za-Zo: Gesloten</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Services & Cities */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Diensten</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-orange-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="font-semibold text-base pt-4">Werkgebieden</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {cities.map((city) => (
                <Link 
                  key={city} 
                  href={`/steden/${city.toLowerCase()}`}
                  className="hover:text-orange-400 transition-colors"
                >
                  {city}
                </Link>
              ))}
            </div>
          </div>

          {/* Brands & Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Merken</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {brands.map((brand) => (
                <Link 
                  key={brand} 
                  href={`/merken/${brand.toLowerCase()}`}
                  className="hover:text-orange-400 transition-colors"
                >
                  {brand}
                </Link>
              ))}
            </div>
            
            <div className="pt-4 space-y-2 text-sm">
              <Link href="/faq" className="block hover:text-orange-400 transition-colors">
                Veelgestelde vragen
              </Link>
              <Link href="/kennisbank" className="block hover:text-orange-400 transition-colors">
                Kennisbank
              </Link>
              <Link href="/blog" className="block hover:text-orange-400 transition-colors">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Bar */}
      <div className="bg-orange-500 py-6">
        <div className="container text-center">
          <p className="text-lg font-semibold mb-3">
            Klaar voor een perfect klimaat in uw woning?
          </p>
          <Link href="/offerte">
            <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Vraag Gratis Offerte Aan
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-4">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} StayCool Airco. Alle rechten voorbehouden.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/voorwaarden" className="hover:text-white transition-colors">
                Voorwaarden
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}