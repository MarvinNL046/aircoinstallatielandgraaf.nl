"use client"

import { useState } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import { ContactForm } from "@/components/contact-form"
import brandsData from "@/data/brands.json"
import { BrandInfo } from "@/components/merken/brand-info"
import { BrandFeatures } from "@/components/merken/brand-features"
import { BrandModels } from "@/components/merken/brand-models"
import { BrandTechnology } from "@/components/merken/brand-technology"
import { ProductDetailDialog } from "@/components/merken/product-detail-dialog"
import { brandProducts } from "@/lib/brands"
import { ChevronRight, Star, Award, Zap, Shield } from "lucide-react"

interface BrandPageProps {
  params: {
    slug: string
  }
}


export default function BrandPage({ params }: BrandPageProps) {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const brand = brandsData.brands.find((b) => b.slug === params.slug)

  if (!brand) {
    notFound()
  }

  const breadcrumbItems = [
    { label: "Merken", href: "/merken" },
    { label: brand.name, href: `/merken/${brand.slug}` }
  ]

  const products = brandProducts[brand.slug as keyof typeof brandProducts] || []

  const handleProductClick = (product: any) => {
    setSelectedProduct(product)
    setIsDialogOpen(true)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-white border-b">
        <div className="container py-8">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center py-12">
            <div>
              <Badge className="mb-4" variant="secondary">Premium Partner</Badge>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                {brand.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {brand.description}
              </p>
              
              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-lg bg-blue-50">
                  <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold">Top Kwaliteit</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-green-50">
                  <Zap className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold">Energiezuinig</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-purple-50">
                  <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold">5 Jaar Garantie</p>
                </div>
              </div>
              
              <Button size="lg" className="mr-4">
                Offerte Aanvragen
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Download Brochure
              </Button>
            </div>
            
            <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
              <Image
                src={brand.image}
                alt={`${brand.name} airconditioner`}
                fill
                className="object-contain p-8"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      {products.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">{brand.name} Producten</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.slice(0, 6).map((product, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all">
                  <div className="relative h-64 bg-white">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleProductClick(product)}
                      >
                        Bekijk Details
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <div className="container py-12">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <BrandInfo brand={brand} />
            <BrandFeatures brand={brand} />
            <BrandModels brand={brand} />
            <BrandTechnology brand={brand} />
          </div>

          <div className="space-y-8">
            {/* Sticky sidebar */}
            <div className="sticky top-8">
              <Card className="p-6 border-2 border-blue-100">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-semibold mb-2">
                    Interesse in {brand.name}?
                  </h2>
                  <p className="text-muted-foreground">
                    Ontvang binnen 24 uur een offerte op maat
                  </p>
                </div>
                <ContactForm />
              </Card>
              
              {/* Contact info */}
              <Card className="p-6 mt-6 bg-blue-50 border-blue-200">
                <h3 className="font-semibold mb-4">Direct Contact</h3>
                <div className="space-y-3">
                  <a href="tel:0462021430" className="flex items-center gap-3 text-blue-600 hover:text-blue-700">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      📞
                    </div>
                    <div>
                      <p className="font-semibold">046 202 1430</p>
                      <p className="text-sm">Ma-Vr 8:00 - 18:00</p>
                    </div>
                  </a>
                  <a href="https://wa.me/31636481054" className="flex items-center gap-3 text-green-600 hover:text-green-700">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      💬
                    </div>
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-sm">Direct antwoord</p>
                    </div>
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Detail Dialog */}
      {selectedProduct && (
        <ProductDetailDialog
          product={selectedProduct}
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        />
      )}
    </>
  )
}