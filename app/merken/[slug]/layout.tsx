import { Metadata } from "next"
import brandsData from "@/data/brands.json"

interface LayoutProps {
  children: React.ReactNode
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return brandsData.brands.map((brand) => ({
    slug: brand.slug,
  }))
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const brand = brandsData.brands.find((b) => b.slug === params.slug)

  if (!brand) {
    return {
      title: "Merk niet gevonden | StayCool Airco",
      description: "Het opgevraagde merk kon niet worden gevonden.",
    }
  }

  return {
    title: `${brand.name} Airconditioners | StayCool Airco Landgraaf`,
    description: `${brand.description} ✓ Officiële dealer ✓ Professionele installatie ✓ 5 jaar garantie. Bel: 046 202 1430`,
    openGraph: {
      title: `${brand.name} Airconditioners | StayCool Airco Landgraaf`,
      description: brand.description,
      images: [brand.image]
    }
  }
}

export default function BrandLayout({ children }: LayoutProps) {
  return children
}