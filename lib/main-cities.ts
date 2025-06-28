// Main cities for SEO focus - avoiding mass generation
export interface MainCity {
  name: string
  slug: string
  region: string
  population: number
  postal_codes: string
  description: string
  highlights: string[]
  testimonial: string
  customerName: string
  popularProducts?: Array<{
    name: string
    image: string
  }>
}

export const mainCities: MainCity[] = [
  {
    name: "Landgraaf",
    slug: "landgraaf",
    region: "Parkstad",
    population: 37457,
    postal_codes: "6371-6374",
    description: "Ons hoofdwerkgebied met de snelste service",
    highlights: [
      "Binnen 30 minuten ter plaatse",
      "50+ installaties in 2024",
      "Kennis van lokale woningtypen"
    ],
    testimonial: "Super snelle service, binnen een dag geïnstalleerd!",
    customerName: "Familie Janssen, Landgraaf",
    popularProducts: [
      { name: "Daikin Comfora", image: "/images/brands/products/daikin-comfora-left.webp" },
      { name: "Samsung WindFree", image: "/images/brands/products/samsung/windfreeElite/WindFree Elite_S2_Front_Web_RGB.webp" }
    ]
  },
  {
    name: "Heerlen", 
    slug: "heerlen",
    region: "Parkstad",
    population: 86832,
    postal_codes: "6411-6419",
    description: "Veel ervaring met appartementen en historische panden",
    highlights: [
      "Specialist in monumentale panden",
      "40+ installaties in centrum",
      "Samenwerking met woningcorporaties"
    ],
    testimonial: "Perfecte oplossing voor ons appartement in het centrum",
    customerName: "M. Peters, Heerlen",
    popularProducts: [
      { name: "LG ArtCool Gallery", image: "/images/brands/products/lg-artcool-mirror.webp" },
      { name: "Toshiba Haori", image: "/images/brands/products/Haori-zwart-vooraanzicht_3_11zon.webp" }
    ]
  },
  {
    name: "Kerkrade",
    slug: "kerkrade",
    region: "Parkstad",
    population: 45744,
    postal_codes: "6461-6469",
    description: "Grensregio specialist met Duitse producten",
    highlights: [
      "Ook Duitse merken leverbaar",
      "30+ tevreden klanten",
      "Tweetalige service"
    ],
    testimonial: "Fijn dat ze ook Duits spreken voor mijn Duitse airco",
    customerName: "H. Schmidt, Kerkrade",
    popularProducts: [
      { name: "Mitsubishi Titanium", image: "/images/brands/products/Mitsubishi heavy indus/Mitsubishi-titanium-zs-wft.webp" },
      { name: "Daikin Stylish", image: "/images/brands/products/daikin-stylish-wit.webp" }
    ]
  },
  {
    name: "Maastricht",
    slug: "maastricht",
    region: "Zuid-Limburg",
    population: 120227,
    postal_codes: "6211-6229",
    description: "Premium installaties voor de hoofdstad van Limburg",
    highlights: [
      "Design modellen populair",
      "Ervaring met studentenwoningen",
      "Historisch centrum expertise"
    ],
    testimonial: "Prachtige Daikin Emura past perfect in ons interieur",
    customerName: "Drs. Van der Berg, Maastricht",
    popularProducts: [
      { name: "Daikin Stylish", image: "/images/brands/products/daikin-stylish-wit.webp" },
      { name: "LG ArtCool Gallery", image: "/images/brands/products/lg-artcool-mirror.webp" }
    ]
  },
  {
    name: "Sittard-Geleen",
    slug: "sittard-geleen",
    region: "Westelijke Mijnstreek",
    population: 93055,
    postal_codes: "6131-6139",
    description: "Groot werkgebied met snelle service",
    highlights: [
      "Industriële installaties",
      "Nieuwbouwprojecten",
      "25+ bedrijfsinstallaties"
    ],
    testimonial: "Professionele installatie in ons bedrijfspand",
    customerName: "DirectiePrint BV, Sittard",
    popularProducts: [
      { name: "Samsung WindFree", image: "/images/brands/products/samsung/windfreeElite/WindFree Elite_S2_Front_Web_RGB.webp" },
      { name: "Mitsubishi Titanium", image: "/images/brands/products/Mitsubishi heavy indus/Mitsubishi-titanium-zs-wft.webp" }
    ]
  },
  {
    name: "Brunssum",
    slug: "brunssum",
    region: "Parkstad",
    population: 27821,
    postal_codes: "6441-6446",
    description: "Veel ervaring met jaren '70 woningen",
    highlights: [
      "Specialist in split-level woningen",
      "20+ installaties in 2024",
      "Populair: Tosot Clivia"
    ],
    testimonial: "De Tosot Clivia was perfect voor onze woning",
    customerName: "Familie De Vries, Brunssum",
    popularProducts: [
      { name: "Tosot Clivia", image: "/images/brands/products/724-clivia-wit-vooraanzicht.webp" },
      { name: "Daikin Comfora", image: "/images/brands/products/daikin-comfora-left.webp" }
    ]
  },
  {
    name: "Venlo",
    slug: "venlo",
    region: "Noord-Limburg",
    population: 101603,
    postal_codes: "5911-5928",
    description: "Noord-Limburg specialist met snelle service",
    highlights: [
      "Ervaring met kassenbouw",
      "35+ installaties in 2024",
      "Industriële expertise"
    ],
    testimonial: "Perfect klimaat voor ons bedrijf, vakkundig geïnstalleerd",
    customerName: "VenloTech BV",
    popularProducts: [
      { name: "Daikin VRV", image: "/images/brands/products/daikin-comfora-left.webp" },
      { name: "Samsung WindFree", image: "/images/brands/products/samsung/windfreeElite/WindFree Elite_S2_Front_Web_RGB.webp" }
    ]
  },
  {
    name: "Roermond",
    slug: "roermond",
    region: "Midden-Limburg",
    population: 58254,
    postal_codes: "6041-6049",
    description: "Designer Outlet en centrum specialist",
    highlights: [
      "Retail expertise",
      "30+ winkelinstallaties",
      "Weekend service mogelijk"
    ],
    testimonial: "Onze winkel blijft nu perfect gekoeld, zelfs tijdens de outlet dagen",
    customerName: "Fashion Store Roermond",
    popularProducts: [
      { name: "LG Multi Split", image: "/images/brands/products/lg-artcool-mirror.webp" },
      { name: "Daikin Stylish", image: "/images/brands/products/daikin-stylish-wit.webp" }
    ]
  },
  {
    name: "Weert",
    slug: "weert",
    region: "Midden-Limburg",
    population: 50105,
    postal_codes: "6001-6006",
    description: "Betrouwbare partner in Midden-Limburg",
    highlights: [
      "25+ installaties in 2024",
      "Kennis van lokale bouw",
      "Snelle levertijden"
    ],
    testimonial: "Vriendelijke monteurs, alles netjes achtergelaten",
    customerName: "Familie Hendrix, Weert",
    popularProducts: [
      { name: "Tosot Clivia", image: "/images/brands/products/724-clivia-wit-vooraanzicht.webp" },
      { name: "Mitsubishi Heavy", image: "/images/brands/products/Mitsubishi heavy indus/Mitsubishi-titanium-zs-wft.webp" }
    ]
  }
];

export function getMainCityBySlug(slug: string): MainCity | undefined {
  return mainCities.find(city => city.slug === slug);
}

export function getAllMainCities(): MainCity[] {
  return mainCities;
}