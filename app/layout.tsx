import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme-provider"
import { NavbarOptimized } from "@/components/layout/navbar-optimized"
import { FooterOptimized } from "@/components/layout/footer-optimized"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata = {
  metadataBase: new URL('https://aircoinstallatielandgraaf.nl'),
  title: {
    default: 'Airco Landgraaf €1299 | Direct Contact | StayCool ⚡',
    template: '%s | StayCool Airco'
  },
  description: '✓ 163+ reviews (4.7★) ✓ Morgen geïnstalleerd ✓ 5 jaar garantie ✓ Erkend installateur Limburg. Bel: 046-202-1430',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icon-192.png' },
    ],
  },
  keywords: [
    // Hoofdzoektermen
    'airco limburg',
    'airco service limburg',
    'aircoservice limburg',
    'airco specialist limburg',
    'klimaatbeheersing limburg',
    
    // Steden specifiek
    'airco landgraaf',
    'airco heerlen',
    'split airco brunssum',
    'airco geleen',
    'airco sittard',
    'airconditioning kerkrade',
    'airco kerkrade',
    'airco voerendaal',
    'airco zuid limburg',
    'airco hoensbroek',
    'airco parkstad',
    'airco roermond',
    'airco maastricht',
    
    // Service en installatie
    'airco plaatsen limburg',
    'airco kopen limburg',
    'airco service geleen',
    'aircospecialist limburg',
    'airco limburg aanbieding',
    'airco direct geleen',
    'airco bedrijf limburg',
    'airco kopen en laten installeren limburg',
    'airco installateur limburg',
    'airco installatie limburg',
    'airco bedrijven limburg',
    'airco onderhoud limburg',
    'airco montage limburg',
    'airco service sittard',
    'airco service voerendaal',
    'airco service achterhoek',
    
    // Merken
    'mitsubishi airco limburg',
    'daikin airco limburg',
    'airco kopen en laten installeren mitsubishi',
    'profi airco',
    
    // Algemeen
    'air conditioning near me',
    'air conditioning installation near me',
    'airconditioning sittard',
    'airco zuid'
  ],
  authors: [{ name: 'StayCool Airco' }],
  creator: 'StayCool Airco',
  publisher: 'StayCool Airco',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
    openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: '/',
    siteName: 'StayCool Airco Landgraaf',
    title: 'Airco Installatie Landgraaf & Limburg | StayCool Airco | 5 Jaar Garantie',
    description: 'Professionele airco installatie in Landgraaf en heel Limburg. ✓ Gecertificeerde monteurs ✓ Alle topmerken ✓ Binnen 24u reactie ✓ 4.7/5 reviews ✓ Vanaf €11/maand',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'StayCool Airco Landgraaf - Professionele Airconditioning Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Airco Installatie Landgraaf & Limburg | StayCool Airco | 5 Jaar Garantie',
    description: 'Professionele airco installatie in Landgraaf en heel Limburg. ✓ Gecertificeerde monteurs ✓ Alle topmerken ✓ Binnen 24u reactie ✓ 4.7/5 reviews',
    images: ['/opengraph-image'],
    creator: '@staycoolairco',
    site: '@staycoolairco'
  },
  alternates: {
    canonical: 'https://aircoinstallatielandgraaf.nl'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'VqmFL-unI3_O0s0gZt3xlHbtr1BhNTCdBj9lTzZK-p4',
    yandex: 'verification_token',
    yahoo: 'verification_token',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="nl" 
      suppressHydrationWarning
      className="scroll-smooth antialiased"
    >
      <head />
      <body 
        className={`${inter.variable} font-sans min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <NavbarOptimized />
            <main className="flex-1" id="main-content">
              {children}
            </main>
            <FooterOptimized />
          </div>
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}
