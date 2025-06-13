"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Shield, Zap, ThermometerSun } from "lucide-react"

interface ProductDetailDialogProps {
  product: {
    name: string
    images: string[]
  }
  isOpen: boolean
  onClose: () => void
}

export function ProductDetailDialog({ product, isOpen, onClose }: ProductDetailDialogProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{product.name}</DialogTitle>
          <DialogDescription>
            Premium airconditioning voor optimaal comfort
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={product.images[currentImageIndex]}
                alt={product.name}
                fill
                className="object-contain p-4"
              />
              
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>
            
            {/* Thumbnail navigation */}
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex ? 'border-blue-600' : 'border-gray-200'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-contain p-1"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Info */}
          <div className="space-y-6">
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-muted-foreground">(4.9 uit 5)</span>
            </div>
            
            {/* Features */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Kenmerken</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                  <ThermometerSun className="h-5 w-5 text-blue-600" />
                  <span className="text-sm">Koelen & Verwarmen</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                  <Zap className="h-5 w-5 text-green-600" />
                  <span className="text-sm">A+++ Energielabel</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg">
                  <Shield className="h-5 w-5 text-purple-600" />
                  <span className="text-sm">5 jaar garantie</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg">
                  <Star className="h-5 w-5 text-orange-600" />
                  <span className="text-sm">Fluisterstil</span>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Beschrijving</h3>
              <p className="text-muted-foreground">
                Deze premium airconditioner combineert uitstekende prestaties met energiezuinigheid. 
                Perfect voor zowel koeling in de zomer als verwarming in de winter. 
                Met geavanceerde technologie voor optimaal comfort en minimaal energieverbruik.
              </p>
            </div>
            
            {/* CTA */}
            <div className="space-y-3 pt-4">
              <Button size="lg" className="w-full">
                Vraag Offerte Aan
              </Button>
              <Button size="lg" variant="outline" className="w-full">
                Download Specificaties
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}