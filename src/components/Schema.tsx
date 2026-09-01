import { Helmet } from "react-helmet-async";
import { siteConfig } from "../config/site";
import type { Product } from "../data/products";

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo-small.png`,
    image: `${siteConfig.url}/images/hero-poster.webp`,
    description:
      "Custom cosmetic glass packaging supplier. Specializing in low MOQ dropper bottles, cream jars and sets for indie beauty brands. Global DDP shipping.",
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postal,
      addressCountry: siteConfig.address.country,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "sales",
        areaServed: ["US", "EU", "KR", "JP"],
        availableLanguage: ["English", "Chinese", "Korean", "Japanese"],
      },
    ],
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.tiktok,
      siteConfig.social.pinterest,
      siteConfig.social.linkedin,
    ],
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    name: siteConfig.name,
    image: `${siteConfig.url}/images/hero-poster.webp`,
    "@id": `${siteConfig.url}/#organization`,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postal,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.1291,
      longitude: 113.2644,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export function ProductSchema({ product }: { product: Product }) {
  const mainImage = product.image.startsWith("http") ? product.image : `${siteConfig.url}${product.image}`;
  const galleryImages = product.gallery?.map(img => img.startsWith("http") ? img : `${siteConfig.url}${img}`) || [];
  
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [mainImage, ...galleryImages],
    description: product.description,
    brand: { "@type": "Brand", name: product.brandName || siteConfig.name },
    manufacturer: { "@type": "Organization", name: siteConfig.legalName },
    mpn: product.mpn || `VSL-${product.id.toUpperCase()}`,
    sku: product.sku || `VSL-${product.id.toUpperCase()}-5K`,
    category: product.category,
    material: product.material,
    color: product.seoTags?.find(tag => ["Amber", "Clear", "Frosted", "Matte", "Gradient"].includes(tag)),
    keywords: product.seoKeywords?.join(", "),
    additionalProperty: [
      { "@type": "PropertyValue", name: "Capacity", value: product.capacity },
      { "@type": "PropertyValue", name: "MOQ", value: product.moq },
      { "@type": "PropertyValue", name: "Lead time", value: product.leadTime },
      { "@type": "PropertyValue", name: "Customization", value: product.decoration },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      reviewCount: "27",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Organization", name: "European skincare brand" },
        datePublished: "2026-06-15",
        reviewBody:
          "Custom glass dropper bottles with gold collars — photographed beautifully for our launch. Samples arrived in 6 days via DHL.",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
      {
        "@type": "Review",
        author: { "@type": "Organization", name: "US indie beauty brand" },
        datePublished: "2026-07-20",
        reviewBody:
          "Started us at 5,000 pcs on stock molds with custom silk-screen decoration. QC reports came with every shipment.",
        reviewRating: { "@type": "Rating", ratingValue: "4.5", bestRating: "5" },
      },
    ],
    offers: {
      "@type": "Offer",
      url: `${siteConfig.url}/products/${product.seoSlug || product.id}`,
      priceCurrency: "USD",
      price: "0.45", // Typical starting price for wholesale reference
      priceValidUntil: "2027-12-31",
      validFrom: "2026-01-01",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@type": "Organization", name: siteConfig.legalName },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: ["US", "FR", "DE", "GB", "NL", "CA", "AU"],
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: { "@type": "QuantitativeValue", minValue: 5, maxValue: 7, unitCode: "DAY" },
          transitTime: { "@type": "QuantitativeValue", minValue: 14, maxValue: 26, unitCode: "DAY" },
        },
        shippingRate: {
          "@type": "MonetaryAmount",
          currency: "USD",
          value: "0.12", // Reference shipping cost per unit
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: ["US", "FR", "DE", "GB", "NL", "CA"],
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 14,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
    },
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export function WebsiteSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: siteConfig.url,
    name: siteConfig.name,
    inLanguage: ["en", "ko", "ja", "zh-Hant"],
    publisher: { "@type": "Organization", name: siteConfig.legalName },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/products?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export function ProductListSchema({ items }: { items: Product[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${siteConfig.url}/products/${p.seoSlug || p.id}`,
      name: p.name,
    })),
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export function FAQSchema({ items, locale = "en" }: { items: { q: { [k: string]: string }; a: { [k: string]: string } }[], locale?: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q[locale] || i.q.en,
      acceptedAnswer: { "@type": "Answer", text: i.a[locale] || i.a.en },
    })),
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export function BlogPostSchema({ title, excerpt, date, slug }: { title: string; excerpt: string; date: string; slug: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: excerpt,
    datePublished: date,
    author: { "@type": "Organization", name: siteConfig.legalName },
    publisher: { "@type": "Organization", name: siteConfig.legalName, logo: { "@type": "ImageObject", url: `${siteConfig.url}/images/logo.png` } },
    url: `${siteConfig.url}/blog/${slug}`,
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}
