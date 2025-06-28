"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Volume2, Zap, Info, CheckCircle2, Phone } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const products = {
  daikin: [
    {
      id: "daikin-comfora",
      name: "Daikin Comfora",
      category: "Wandmodel",
      images: [
        "/images/brands/products/daikin-comfora-left.webp",
        "/images/brands/products/daikin-comfora-right.webp"
      ],
      features: ["Fluisterstil", "A+++ energie label", "WiFi bediening", "2-zone regeling"],
      specs: {
        koelvermogen: "2.0 - 6.8 kW",
        verwarmingsvermogen: "2.5 - 7.8 kW",
        geluidsniveau: "19 dB(A)",
        energielabel: "A+++"
      },
      description: "De Daikin Comfora biedt uitstekende prestaties met een modern design. Perfect voor slaapkamers dankzij het lage geluidsniveau.",
      popular: true
    },
    {
      id: "daikin-stylish",
      name: "Daikin Stylish",
      category: "Premium Wandmodel",
      images: [
        "/images/brands/products/daikin-stylish-wit.webp",
        "/images/brands/products/daikin-stylish-silver.webp"
      ],
      features: ["Coanda effect", "Grid eye sensor", "Compact design", "Premium afwerking"],
      specs: {
        koelvermogen: "2.0 - 5.0 kW",
        verwarmingsvermogen: "2.5 - 5.8 kW",
        geluidsniveau: "19 dB(A)",
        energielabel: "A+++"
      },
      description: "Ultra-dun design met geavanceerde technologie voor optimaal comfort."
    }
  ],
  lg: [
    {
      id: "lg-artcool",
      name: "LG ArtCool Gallery",
      category: "Design Wandmodel",
      images: [
        "/images/brands/products/lg-artcool-mirror.webp"
      ],
      features: ["Aanpasbaar frame", "ThinQ WiFi", "Dual Inverter", "Kunstwerk design"],
      specs: {
        koelvermogen: "2.5 - 6.6 kW",
        verwarmingsvermogen: "3.2 - 7.5 kW",
        geluidsniveau: "20 dB(A)",
        energielabel: "A++"
      },
      description: "Uniek design waarbij u uw eigen kunstwerk kunt tonen.",
      popular: true
    }
  ],
  samsung: [
    {
      id: "samsung-windfree-elite",
      name: "Samsung WindFree Elite",
      category: "Premium Wandmodel",
      images: [
        "/images/brands/products/samsung/windfreeElite/WindFree Elite_S2_Front_Web_RGB.webp"
      ],
      features: ["WindFree koeling", "AI Auto Cooling", "Tri-Care Filter", "SmartThings"],
      specs: {
        koelvermogen: "2.5 - 6.8 kW",
        verwarmingsvermogen: "3.2 - 7.4 kW",
        geluidsniveau: "19 dB(A)",
        energielabel: "A+++"
      },
      description: "Revolutionaire WindFree technologie voor koeling zonder directe luchtstroom.",
      popular: true
    }
  ],
  toshiba: [
    {
      id: "toshiba-haori",
      name: "Toshiba Haori",
      category: "Design Wandmodel", 
      images: [
        "/images/brands/products/Haori-zwart-vooraanzicht_3_11zon.webp"
      ],
      features: ["Textiel design", "Ultra quiet", "PM2.5 filter", "WiFi control"],
      specs: {
        koelvermogen: "2.5 - 5.0 kW",
        verwarmingsvermogen: "3.2 - 5.8 kW",
        geluidsniveau: "19 dB(A)",
        energielabel: "A+++"
      },
      description: "Uniek textiel design verkrijgbaar in meerdere kleuren."
    }
  ],
  tosot: [
    {
      id: "tosot-clivia",
      name: "Tosot Clivia",
      category: "Design Wandmodel",
      images: [
        "/images/brands/products/724-clivia-wit-vooraanzicht.webp"
      ],
      features: ["I Feel functie", "Turbo mode", "Sleep mode", "Golden Fin"],
      specs: {
        koelvermogen: "2.6 - 7.0 kW",
        verwarmingsvermogen: "2.8 - 7.3 kW",
        geluidsniveau: "21 dB(A)",
        energielabel: "A++"
      },
      description: "Onze bestseller! Perfect design gecombineerd met top prestaties voor een scherpe prijs.",
      popular: true
    }
  ],
  mitsubishi: [
    {
      id: "mitsubishi-titanium",
      name: "Mitsubishi Heavy Titanium",
      category: "Wandmodel",
      images: [
        "/images/brands/products/Mitsubishi heavy indus/Mitsubishi-titanium-zs-wft.webp"
      ],
      features: ["Allergen Clear", "Motion Sensor", "Silent mode", "Weekly timer"],
      specs: {
        koelvermogen: "2.5 - 7.1 kW",
        verwarmingsvermogen: "3.2 - 8.1 kW",
        geluidsniveau: "19 dB(A)",
        energielabel: "A+++"
      },
      description: "Japanse topkwaliteit met allergeen filter."
    }
  ]
}

const brandInfo = {
  daikin: { name: "Daikin", color: "blue", description: "Japanse topkwaliteit sinds 1924" },
  lg: { name: "LG", color: "red", description: "Koreaanse innovatie en design" },
  samsung: { name: "Samsung", color: "blue", description: "Smart home integratie" },
  toshiba: { name: "Toshiba", color: "red", description: "Betrouwbare Japanse technologie" },
  tosot: { name: "Tosot", color: "green", description: "Beste prijs-kwaliteit" },
  mitsubishi: { name: "Mitsubishi", color: "red", description: "Premium Japanse kwaliteit" }
}

export function ProductShowcaseV2() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [expandedBrand, setExpandedBrand] = useState<string>("daikin")

  // Get all popular products for hero display - prioritize Tosot
  const popularProducts = Object.entries(products).flatMap(([brand, items]) =>
    items.filter(item => 'popular' in item && item.popular).map(item => ({ ...item, brand }))
  ).sort((a, b) => {
    // Tosot Clivia first
    if (a.id === "tosot-clivia") return -1;
    if (b.id === "tosot-clivia") return 1;
    return 0;
  }).slice(0, 4)

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">Mitsubishi Airco Limburg</span> & Meer Topmerken
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Daikin, Samsung, LG, Toshiba & Tosot airco's met installatie in heel Limburg
          </p>
        </div>

        {/* Popular Products - Always visible */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            🔥 Daikin Airco Limburg - Populairste Modellen
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map((product) => (
              <Card 
                key={product.id} 
                className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative">
                  <Badge className="absolute top-4 right-4 bg-orange-500 z-10">
                    Populair
                  </Badge>
                  <div className="relative h-48 bg-gray-100">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold text-gray-900">{product.name}</h4>
                    <Badge variant="outline" className="text-xs">
                      {brandInfo[product.brand as keyof typeof brandInfo].name}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <Zap className="h-4 w-4 text-orange-500" />
                      <span>{product.specs.energielabel}</span>
                    </div>
                    <Button size="sm" variant="outline">
                      Bekijk details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* All Products by Brand - Accordion for mobile, Grid for desktop */}
        <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Alle modellen per merk
          </h3>
          
          {/* Mobile: Accordion */}
          <div className="lg:hidden">
            <Accordion type="single" collapsible value={expandedBrand} onValueChange={setExpandedBrand}>
              {Object.entries(products).map(([brand, items]) => (
                <AccordionItem key={brand} value={brand}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center justify-between w-full pr-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-8 rounded-full bg-${brandInfo[brand as keyof typeof brandInfo].color}-500`} />
                        <div className="text-left">
                          <h4 className="font-semibold">{brandInfo[brand as keyof typeof brandInfo].name}</h4>
                          <p className="text-sm text-gray-600">{brandInfo[brand as keyof typeof brandInfo].description}</p>
                        </div>
                      </div>
                      <Badge variant="secondary">{items.length} modellen</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pt-4">
                      {items.map((product) => (
                        <Card 
                          key={product.id}
                          className="p-4 cursor-pointer hover:shadow-md transition-shadow"
                          onClick={() => setSelectedProduct(product)}
                        >
                          <div className="flex gap-4">
                            <div className="relative w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0">
                              <Image
                                src={product.images[0]}
                                alt={product.name}
                                fill
                                className="object-contain p-2"
                              />
                            </div>
                            <div className="flex-1">
                              <h5 className="font-semibold text-gray-900">{product.name}</h5>
                              <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                              <div className="flex items-center gap-4 text-xs">
                                <span className="flex items-center gap-1">
                                  <Volume2 className="h-3 w-3" />
                                  {product.specs.geluidsniveau}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Zap className="h-3 w-3" />
                                  {product.specs.energielabel}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {Object.entries(products).flatMap(([brand, items]) =>
              items.map((product) => (
                <Card 
                  key={product.id} 
                  className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="relative h-48 bg-gray-100">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-contain p-4"
                    />
                    <Badge className="absolute top-4 left-4" variant="secondary">
                      {brandInfo[brand as keyof typeof brandInfo].name}
                    </Badge>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-gray-900 mb-1">{product.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-sm">
                        <span className="flex items-center gap-1">
                          <Volume2 className="h-4 w-4 text-gray-500" />
                          {product.specs.geluidsniveau}
                        </span>
                        <span className="flex items-center gap-1">
                          <Zap className="h-4 w-4 text-gray-500" />
                          {product.specs.energielabel}
                        </span>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Info className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>

        {/* Product Detail Dialog */}
        <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProduct && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">{selectedProduct.name}</DialogTitle>
                </DialogHeader>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  {/* Images */}
                  <div className="space-y-4">
                    {selectedProduct.images.map((image: string, index: number) => (
                      <div key={index} className="relative h-64 bg-gray-100 rounded-lg">
                        <Image
                          src={image}
                          alt={`${selectedProduct.name} ${index + 1}`}
                          fill
                          className="object-contain p-4"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Details */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Beschrijving</h3>
                      <p className="text-gray-600">{selectedProduct.description}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-2">Kenmerken</h3>
                      <ul className="space-y-2">
                        {selectedProduct.features.map((feature: string) => (
                          <li key={feature} className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-2">Technische specificaties</h3>
                      <dl className="space-y-2">
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Koelvermogen:</dt>
                          <dd className="font-medium">{selectedProduct.specs.koelvermogen}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Verwarmingsvermogen:</dt>
                          <dd className="font-medium">{selectedProduct.specs.verwarmingsvermogen}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Geluidsniveau:</dt>
                          <dd className="font-medium">{selectedProduct.specs.geluidsniveau}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Energielabel:</dt>
                          <dd className="font-medium">{selectedProduct.specs.energielabel}</dd>
                        </div>
                      </dl>
                    </div>

                    <div className="pt-6 space-y-3">
                      <Link href="/offerte">
                        <Button className="w-full bg-orange-500 hover:bg-orange-600">
                          Offerte aanvragen voor dit model
                        </Button>
                      </Link>
                      <Link href="/contact">
                        <Button variant="outline" className="w-full">
                          Stel een vraag over dit model
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Card className="p-8 bg-blue-50 border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Niet gevonden wat u zoekt?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We hebben nog veel meer modellen beschikbaar. Onze experts helpen u graag bij het vinden van de perfecte airco.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  Gratis adviesgesprek
                </Button>
              </Link>
              <Link href="tel:0462021430">
                <Button size="lg" variant="outline">
                  <Phone className="h-5 w-5 mr-2" />
                  046 202 1430
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}