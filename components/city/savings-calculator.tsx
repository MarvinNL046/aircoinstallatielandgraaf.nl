"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Euro, Zap, Leaf } from "lucide-react"

export function SavingsCalculator({ cityName }: { cityName: string }) {
  const [homeSize, setHomeSize] = useState([100])
  const [currentHeating, setCurrentHeating] = useState("gas")
  
  // Bereken besparingen
  const calculateSavings = () => {
    const size = homeSize[0]
    let yearlyHeatingCost = 0
    let aircoHeatingCost = 0
    
    // Geschatte kosten per m² per jaar
    if (currentHeating === "gas") {
      yearlyHeatingCost = size * 15 // €15 per m² voor gas
      aircoHeatingCost = size * 8  // €8 per m² voor airco verwarming
    } else if (currentHeating === "electric") {
      yearlyHeatingCost = size * 25 // €25 per m² voor elektrisch
      aircoHeatingCost = size * 8  // €8 per m² voor airco
    }
    
    const yearlySavings = yearlyHeatingCost - aircoHeatingCost
    const monthlySavings = Math.round(yearlySavings / 12)
    const co2Reduction = Math.round(size * 2.5) // kg CO2 per jaar
    
    return {
      yearly: yearlySavings,
      monthly: monthlySavings,
      co2: co2Reduction,
      paybackTime: Math.round(3500 / yearlySavings * 10) / 10 // jaren
    }
  }
  
  const savings = calculateSavings()
  
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Euro className="h-5 w-5 text-green-600" />
        Bereken uw besparing in {cityName}
      </h3>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">
            Grootte van uw woning: {homeSize[0]} m²
          </label>
          <Slider
            value={homeSize}
            onValueChange={setHomeSize}
            min={50}
            max={250}
            step={10}
            className="mb-4"
          />
        </div>
        
        <div>
          <label className="text-sm font-medium mb-2 block">
            Huidige verwarming:
          </label>
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant={currentHeating === "gas" ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentHeating("gas")}
            >
              Gasverwarming
            </Button>
            <Button
              variant={currentHeating === "electric" ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentHeating("electric")}
            >
              Elektrisch
            </Button>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-green-50 rounded-lg">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Zap className="h-4 w-4" />
                Besparing per maand
              </div>
              <div className="text-2xl font-bold text-green-600">
                €{savings.monthly},-
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Leaf className="h-4 w-4" />
                CO₂ reductie/jaar
              </div>
              <div className="text-2xl font-bold text-green-600">
                {savings.co2} kg
              </div>
            </div>
          </div>
          
          <div className="text-sm text-gray-600">
            <p>• Jaarlijkse besparing: <strong>€{savings.yearly},-</strong></p>
            <p>• Terugverdientijd: <strong>{savings.paybackTime} jaar</strong></p>
            <p className="mt-2 text-xs">
              * Berekening gebaseerd op gemiddelde energieprijzen in {cityName}
            </p>
          </div>
        </div>
        
        <Button className="w-full" asChild>
          <a href="/offerte">
            Vraag een exacte berekening aan →
          </a>
        </Button>
      </div>
    </Card>
  )
}