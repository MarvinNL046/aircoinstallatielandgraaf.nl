import { Card } from "@/components/ui/card"
import { Check, Sparkles } from "lucide-react"

interface BrandFeaturesProps {
  brand: {
    name: string
    features: string[]
  }
}

export function BrandFeatures({ brand }: BrandFeaturesProps) {
  return (
    <Card className="p-8 border-2 border-blue-100 bg-gradient-to-br from-blue-50/50 to-white">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
        <Sparkles className="h-8 w-8 text-blue-600" />
        Unieke Kenmerken
      </h2>
      <div className="grid gap-4">
        {brand.features.map((feature, index) => (
          <div 
            key={index} 
            className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <Check className="h-6 w-6 text-green-600" />
            </div>
            <p className="text-gray-700 font-medium pt-2">{feature}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}