"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Euro, Snowflake, Volume2, Zap, Info, CheckCircle2, Phone } from "lucide-react"

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
      description: "De Daikin Comfora biedt uitstekende prestaties met een modern design. Perfect voor slaapkamers dankzij het lage geluidsniveau."
    },
    {
      id: "daikin-emura",
      name: "Daikin Emura",
      category: "Design Wandmodel",
      images: [
        "/images/brands/products/daikin-emura-wit.webp",
        "/images/brands/products/daikin-emura-zilver.webp",
        "/images/brands/products/daikin-emura-zwart.webp"
      ],
      features: ["Award winnend design", "3D luchtstroom", "Intelligent eye", "Fluisterstil"],
      specs: {
        koelvermogen: "2.3 - 5.0 kW",
        verwarmingsvermogen: "2.5 - 5.8 kW",
        geluidsniveau: "19 dB(A)",
        energielabel: "A+++"
      },
      description: "Bekroond design icoon dat perfect past in elk modern interieur. Verkrijgbaar in wit, zilver en zwart."
    },
    {
      id: "daikin-stylish",
      name: "Daikin Stylish",
      category: "Premium Wandmodel",
      images: [
        "/images/brands/products/daikin-stylish-wit.webp",
        "/images/brands/products/daikin-stylish-silver.webp",
        "/images/brands/products/daikin-stylish-zwart.webp"
      ],
      features: ["Coanda effect", "Grid eye sensor", "Compact design", "Premium afwerking"],
      specs: {
        koelvermogen: "2.0 - 5.0 kW",
        verwarmingsvermogen: "2.5 - 5.8 kW",
        geluidsniveau: "19 dB(A)",
        energielabel: "A+++"
      },
      description: "Ultra-dun design met geavanceerde technologie voor optimaal comfort."
    },
    {
      id: "daikin-perfera",
      name: "Daikin Perfera",
      category: "Vloermodel",
      images: [
        "/images/brands/products/daikin-perfera-wit.webp",
        "/images/brands/products/Perfera-vloermodel-left.webp",
        "/images/brands/products/Perfera vloermodel-right.webp"
      ],
      features: ["Vloer- of wandmontage", "2-zone temperatuur", "Flash Streamer", "R-32 koudemiddel"],
      specs: {
        koelvermogen: "2.5 - 5.0 kW",
        verwarmingsvermogen: "3.2 - 5.8 kW",
        geluidsniveau: "19 dB(A)",
        energielabel: "A+++"
      },
      description: "Flexibel te installeren als vloer- of wandmodel met uitstekende luchtzuivering."
    },
    {
      id: "daikin-ururu-sarara",
      name: "Daikin Ururu Sarara",
      category: "Top Model",
      images: [
        "/images/brands/products/Ururu-Sarara-left.webp",
        "/images/brands/products/Ururu-Sarara-right.webp"
      ],
      features: ["Bevochtiging & ontvochtiging", "Luchtzuivering", "Ventilatie", "Zelfreinigend"],
      specs: {
        koelvermogen: "2.5 - 5.0 kW",
        verwarmingsvermogen: "3.4 - 5.8 kW",
        geluidsniveau: "19 dB(A)",
        energielabel: "A+++"
      },
      description: "Het topmodel van Daikin met unieke bevochtigings- en luchtzuiveringsfuncties."
    }
  ],
  lg: [
    {
      id: "lg-artcool",
      name: "LG ArtCool Gallery",
      category: "Design Wandmodel",
      images: [
        "/images/brands/products/lg-artcool-mirror.webp",
        "/images/brands/products/rac-eu-lg-artcool-black.webp"
      ],
      features: ["Aanpasbaar frame", "ThinQ WiFi", "Dual Inverter", "Kunstwerk design"],
      specs: {
        koelvermogen: "2.5 - 6.6 kW",
        verwarmingsvermogen: "3.2 - 7.5 kW",
        geluidsniveau: "20 dB(A)",
        energielabel: "A++"
      },
      description: "Uniek design waarbij u uw eigen kunstwerk kunt tonen. Past perfect in elk interieur."
    },
    {
      id: "lg-dualcool",
      name: "LG DualCool Premium",
      category: "Wandmodel",
      images: [
        "/images/brands/products/LG-dualcool-indoor-premium.webp",
        "/images/brands/products/LG-dualcool-indoor-premium-1.webp"
      ],
      features: ["Dual Inverter Compressor", "ThinQ AI", "UV Nano", "Energy Saving"],
      specs: {
        koelvermogen: "2.5 - 7.0 kW",
        verwarmingsvermogen: "3.2 - 8.0 kW",
        geluidsniveau: "19 dB(A)",
        energielabel: "A+++"
      },
      description: "Premium model met UV Nano technologie die 99.9% van de bacteriën elimineert."
    }
  ],
  samsung: [
    {
      id: "samsung-windfree-elite",
      name: "Samsung WindFree Elite",
      category: "Premium Wandmodel",
      images: [
        "/images/brands/products/samsung/windfreeElite/WindFree Elite_S2_Front_Web_RGB.webp",
        "/images/brands/products/samsung/windfreeElite/WindFree Elite_S2_Left_Web_RGB.webp"
      ],
      features: ["WindFree koeling", "AI Auto Cooling", "Tri-Care Filter", "SmartThings"],
      specs: {
        koelvermogen: "2.5 - 6.8 kW",
        verwarmingsvermogen: "3.2 - 7.4 kW",
        geluidsniveau: "19 dB(A)",
        energielabel: "A+++"
      },
      description: "Revolutionaire WindFree technologie voor koeling zonder directe luchtstroom."
    },
    {
      id: "samsung-luzon",
      name: "Samsung Luzon",
      category: "Wandmodel",
      images: [
        "/images/brands/products/samsung/luzon/Luzon_S2_Front_Web_RGB.webp",
        "/images/brands/products/samsung/luzon/Luzon_S2_Left_Web_RGB.webp"
      ],
      features: ["Fast Cooling", "Digital Inverter", "Easy Filter Plus", "Good Sleep mode"],
      specs: {
        koelvermogen: "2.5 - 6.8 kW",
        verwarmingsvermogen: "3.2 - 7.4 kW",
        geluidsniveau: "21 dB(A)",
        energielabel: "A++"
      },
      description: "Betrouwbaar en efficiënt model voor dagelijks gebruik met snelle koeling."
    }
  ],
  toshiba: [
    {
      id: "toshiba-haori",
      name: "Toshiba Haori",
      category: "Design Wandmodel",
      images: [
        "/images/brands/products/Haori-zwart-vooraanzicht_3_11zon.webp",
        "/images/brands/products/Haori-grijs-links_19_11zon.webp"
      ],
      features: ["Textiel design", "Ultra quiet", "PM2.5 filter", "WiFi control"],
      specs: {
        koelvermogen: "2.5 - 5.0 kW",
        verwarmingsvermogen: "3.2 - 5.8 kW",
        geluidsniveau: "19 dB(A)",
        energielabel: "A+++"
      },
      description: "Uniek textiel design verkrijgbaar in meerdere kleuren. Japanse kwaliteit."
    },
    {
      id: "toshiba-daiseikai",
      name: "Toshiba Daiseikai 10",
      category: "Premium Wandmodel",
      images: [
        "/images/brands/products/Daiseikai 10-Wit-vooraanzicht_4_11zon.webp",
        "/images/brands/products/Daiseikai 10-Hout-vooraanzicht_2_11zon.webp"
      ],
      features: ["Plasma filter", "Hybrid Inverter", "Magic Coil", "Eco mode"],
      specs: {
        koelvermogen: "2.5 - 6.5 kW",
        verwarmingsvermogen: "3.2 - 7.0 kW",
        geluidsniveau: "19 dB(A)",
        energielabel: "A+++"
      },
      description: "Top prestaties met plasma luchtzuivering en keuze uit wit of houtlook."
    }
  ],
  tosot: [
    {
      id: "tosot-clivia",
      name: "Tosot Clivia",
      category: "Design Wandmodel",
      images: [
        "/images/brands/products/724-clivia-wit-vooraanzicht.webp",
        "/images/brands/products/712-clivia-zwart-vooraanzicht.webp"
      ],
      features: ["I Feel functie", "Turbo mode", "Sleep mode", "Golden Fin"],
      specs: {
        koelvermogen: "2.6 - 7.0 kW",
        verwarmingsvermogen: "2.8 - 7.3 kW",
        geluidsniveau: "21 dB(A)",
        energielabel: "A++"
      },
      description: "Stijlvol design met uitstekende prijs-kwaliteit verhouding. Verkrijgbaar in wit en zwart."
    },
    {
      id: "tosot-pular",
      name: "Tosot Pular",
      category: "Wandmodel",
      images: [
        "/images/brands/products/568-Pular-indoor-vooraanzicht.webp",
        "/images/brands/products/570-Pular-indoor-right.webp"
      ],
      features: ["WiFi ready", "Cold plasma", "7 fan speeds", "Auto restart"],
      specs: {
        koelvermogen: "2.6 - 5.3 kW",
        verwarmingsvermogen: "2.8 - 5.6 kW",
        geluidsniveau: "20 dB(A)",
        energielabel: "A++"
      },
      description: "Betrouwbaar model met cold plasma luchtzuivering voor een gezond binnenklimaat."
    }
  ],
  mitsubishi: [
    {
      id: "mitsubishi-titanium",
      name: "Mitsubishi Heavy Titanium",
      category: "Wandmodel",
      images: [
        "/images/brands/products/Mitsubishi heavy indus/Mitsubishi-titanium-zs-wft.webp",
        "/images/brands/products/Mitsubishi heavy indus/srk50zs-wf-wit-single-split-airco-wandmodel-2.5-3.5-5kw-1.webp"
      ],
      features: ["Allergen Clear", "Motion Sensor", "Silent mode", "Weekly timer"],
      specs: {
        koelvermogen: "2.5 - 7.1 kW",
        verwarmingsvermogen: "3.2 - 8.1 kW",
        geluidsniveau: "19 dB(A)",
        energielabel: "A+++"
      },
      description: "Japanse topkwaliteit met allergeen filter en bewegingssensor voor optimaal comfort."
    }
  ]
}

export function ProductShowcase() {
  const [selectedBrand, setSelectedBrand] = useState("daikin")
  const [selectedProduct, setSelectedProduct] = useState<any>(null)

  const allBrands = Object.keys(products)

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Onze <span className="text-blue-600">Airco Modellen</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek ons uitgebreide assortiment van topmerken. Wij adviseren u graag over het beste model voor uw situatie.
          </p>
        </div>

        {/* Brand Tabs */}
        <Tabs value={selectedBrand} onValueChange={setSelectedBrand} className="mb-12">
          <TabsList className="grid grid-cols-3 lg:grid-cols-6 gap-2 h-auto">
            {allBrands.map((brand) => (
              <TabsTrigger 
                key={brand} 
                value={brand}
                className="capitalize data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                {brand}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Products Grid */}
          {allBrands.map((brand) => (
            <TabsContent key={brand} value={brand} className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products[brand as keyof typeof products].map((product) => (
                  <Card 
                    key={product.id} 
                    className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
                  >
                    {/* Product Image */}
                    <div className="relative h-64 bg-gray-100">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-contain p-4"
                      />
                      <Badge className="absolute top-4 right-4 bg-blue-600">
                        {product.category}
                      </Badge>
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {product.description}
                      </p>

                      {/* Quick Specs */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Snowflake className="h-4 w-4 text-blue-500" />
                          <span>{product.specs.koelvermogen}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Volume2 className="h-4 w-4 text-green-500" />
                          <span>{product.specs.geluidsniveau}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Zap className="h-4 w-4 text-orange-500" />
                          <span>{product.specs.energielabel}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Euro className="h-4 w-4 text-gray-500" />
                          <span>Op aanvraag</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.features.slice(0, 2).map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {product.features.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{product.features.length - 2} meer
                          </Badge>
                        )}
                      </div>

                      {/* CTA */}
                      <Button 
                        className="w-full bg-orange-500 hover:bg-orange-600"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedProduct(product)
                        }}
                      >
                        <Info className="h-4 w-4 mr-2" />
                        Meer informatie
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

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
        <div className="mt-16 text-center">
          <Card className="p-8 bg-blue-50 border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Hulp nodig bij het kiezen?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Onze experts helpen u graag bij het vinden van de perfecte airco voor uw situatie. 
              Wij kijken naar uw ruimte, budget en wensen.
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