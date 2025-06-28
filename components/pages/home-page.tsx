"use client"

import { HeroOptimizedV2 } from "@/components/sections/hero-optimized-v2"
import { ServicesOptimized } from "@/components/sections/services-optimized"
import { WhyUs } from "@/components/sections/why-us"
import { BrandLogos } from "@/components/sections/brand-logos"
import { ContactOptimizedV2 } from "@/components/sections/contact-optimized-v2"
import { CTABannerOptimized, StickyCTABar } from "@/components/sections/cta-banner-optimized"
import { ProductShowcaseV2 } from "@/components/sections/product-showcase-v2"
import { MainLayout } from "@/components/layout/main-layout"

export function HomePage() {
  return (
    <MainLayout>
      <HeroOptimizedV2 />
      <ServicesOptimized />
      <CTABannerOptimized variant="urgent" />
      <WhyUs />
      <BrandLogos />
      <ProductShowcaseV2 />
      <CTABannerOptimized variant="discount" />
      <ContactOptimizedV2 />
      <StickyCTABar />
    </MainLayout>
  )
}