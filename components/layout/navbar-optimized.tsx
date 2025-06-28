"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { AirVent, Menu, Phone } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Diensten", href: "/diensten" },
  { name: "Steden", href: "/steden" },
  { name: "Merken", href: "/merken" },
  { name: "Kennisbank", href: "/kennisbank" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Over Ons", href: "/over-ons" },
  { name: "Contact", href: "/contact" },
]

export function NavbarOptimized() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled 
          ? "bg-white backdrop-blur-lg shadow-md" 
          : "bg-white/95 backdrop-blur-sm shadow-sm"
      )}
    >
      <div className="container">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-blue-600 transition-colors hover:text-blue-700"
          >
            <AirVent className="h-6 w-6 md:h-8 md:w-8" />
            <div>
              <span className="font-bold text-base md:text-lg">StayCool Airco</span>
              <span className="hidden sm:block text-xs opacity-80">Landgraaf & Limburg</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-medium transition-colors hover:text-orange-500",
                  pathname === item.href 
                    ? "text-orange-500" 
                    : "text-gray-700"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="tel:0462021430">
              <Button 
                variant="ghost" 
                size="sm"
                className="gap-2 text-gray-700 hover:text-orange-500"
              >
                <Phone className="h-4 w-4" />
                046 202 1430
              </Button>
            </Link>
            <Link href="/offerte">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white shadow-button">
                Gratis Offerte
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                className="text-gray-700"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 text-blue-600">
                  <AirVent className="h-6 w-6" />
                  <span className="font-bold">StayCool Airco</span>
                </div>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-4 py-3 text-lg font-medium rounded-lg transition-colors hover:bg-gray-100",
                      pathname === item.href && "bg-orange-50 text-orange-600"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Mobile Actions */}
              <div className="mt-8 space-y-4">
                <Link href="tel:0462021430" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full gap-2">
                    <Phone className="h-4 w-4" />
                    046 202 1430
                  </Button>
                </Link>
                <Link href="/offerte" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Gratis Offerte Aanvragen
                  </Button>
                </Link>
              </div>

              {/* Mobile Footer Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                  Ma-Vr: 09:00 - 17:00<br />
                  Za-Zo: Gesloten
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}