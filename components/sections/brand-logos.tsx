"use client"

import Link from "next/link"

const brands = [
  {
    name: "Daikin",
    logo: "/images/brands/daikin-logo.png",
    url: "/merken/daikin",
    models: ["Comfora", "Emura", "Stylish", "Perfera", "Ururu Sarara"]
  },
  {
    name: "LG",
    logo: "/images/brands/lg-logo.png",
    url: "/merken/lg",
    models: ["ArtCool", "DualCool Premium"]
  },
  {
    name: "Samsung",
    logo: "/images/brands/samsung-logo.png",
    url: "/merken/samsung",
    models: ["WindFree series", "Luzon"]
  },
  {
    name: "Mitsubishi Heavy Industries",
    logo: "/images/brands/mitsubishi-logo.png",
    url: "/merken/mitsubishi-heavy-industries",
    models: ["Premium series"]
  },
  {
    name: "Toshiba",
    logo: "/images/brands/toshiba-logo.png",
    url: "/merken/toshiba",
    models: ["Haori", "Daiseikai", "Kazumi", "Seiya"]
  },
  {
    name: "Tosot",
    logo: "/images/brands/tosot-logo.png",
    url: "/merken/tosot",
    models: ["Pular", "Clivia", "Cosmo"]
  }
]

export function BrandLogos() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Wij installeren <span className="text-blue-600">alle topmerken</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Als officieel dealer hebben wij toegang tot de beste merken en modellen airconditioners
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              href={brand.url}
              className="group relative bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {/* Logo Container */}
              <div className="aspect-square relative flex items-center justify-center">
                <div className="w-full h-full relative grayscale group-hover:grayscale-0 transition-all duration-300">
                  {/* Placeholder for logo - in production would use actual logo */}
                  <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded">
                    <span className="text-gray-600 font-semibold text-center">
                      {brand.name}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-blue-600/90 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <p className="text-white font-bold mb-2">{brand.name}</p>
                <p className="text-white/80 text-xs text-center">
                  {brand.models.length} modellen
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Brands */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Ook gespecialiseerd in: Mobiele airco's van LG en Tosot • Airco covers in wit en antraciet
          </p>
          
          {/* CTA */}
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Niet het merk gevonden dat u zoekt?
            </h3>
            <p className="text-gray-600 mb-6">
              Wij kunnen vrijwel elk merk leveren en installeren. Neem contact op voor de mogelijkheden.
            </p>
            <Link href="/contact">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Vraag naar uw merk
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}