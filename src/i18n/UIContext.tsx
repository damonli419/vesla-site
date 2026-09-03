import { createContext, useContext, useMemo, useEffect, ReactNode } from "react";
import { categoryLabels, type Category } from "../data/products";

export type Locale = "en" | "kr" | "jp" | "tw";

export const localeMeta: Record<Locale, { label: string; flag: string; htmlLang: string }> = {
  en: { label: "English", flag: "EN", htmlLang: "en" },
  kr: { label: "한국어", flag: "KR", htmlLang: "ko" },
  jp: { label: "日本語", flag: "JP", htmlLang: "ja" },
  tw: { label: "繁體中文", flag: "TW", htmlLang: "zh-Hant" },
};

type Dict = Record<string, string>;

// English-only site — the UI is locked to "en", so only the English
// dictionary is shipped (no dead multilingual payload in the bundle).
const translations: Dict = {
  "nav.home": "Home",
  "nav.products": "Products",
  "nav.process": "Custom Process",
  "nav.about": "About",
  "nav.resources": "Resources",
  "nav.contact": "Contact",
  "nav.quote": "Get a Quote",
  "footer.explore": "Explore",
  "footer.contact": "Contact",
  "footer.tagline":
    "Custom cosmetic glass packaging supplier serving indie and emerging beauty brands across Europe and North America. From stock molds to fully bespoke bottles — one factory, end to end.",
  "footer.rights": "All rights reserved.",
  "common.viewCollection": "View collection",
  "common.viewAll": "View all",
  "common.sendInquiry": "Send Inquiry",
  "common.chatWhatsapp": "Chat on WhatsApp",
  "common.clearFilters": "Clear all filters",
  "common.backToProducts": "Back to all products",
  "common.youMayLike": "You May Also Like",
  "common.productNotFound": "Product not found",
  "products.title": "All Products",
  "products.subtitle":
    "Every item below is available with custom colors, decoration and closures. Can't find your shape? We build private molds from 10,000 pcs.",
  "products.filter": "Filters",
  "products.count": "product(s)",
  "products.noMatch": "No products match those filters.",
  "filter.category": "Category",
  "filter.material": "Material",
  "filter.capacity": "Capacity",
  "filter.use": "Use",
  "filter.allCategories": "All Categories",
  "filter.mini": "Mini (≤ 15 ml)",
  "filter.standard": "Standard (20 – 60 ml)",
  "filter.large": "Large (60 ml +)",
  "spec.capacity": "Capacity",
  "spec.material": "Material",
  "spec.neck": "Neck Finish",
  "spec.moq": "MOQ",
  "spec.leadTime": "Lead Time",
  "spec.decoration": "Decoration",
  "spec.sampling": "Sampling",
  "spec.incoterms": "Incoterms",
  "spec.sampling.value": "5–7 days · existing molds",
  "spec.incoterms.value": "EXW / FOB / DDP",
};

interface Ctx {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
  catLabel: (c: Category) => string;
  localizePath: (path: string) => string;
}

const UICtx = createContext<Ctx | null>(null);

export function UIProvider({ children }: { children: ReactNode }) {
  // English-only site. The locale is locked to "en": no URL-path detection,
  // no locale persistence and no locale switching (refactor: remove
  // multi-language support and language-prefixed routing).
  useEffect(() => {
    document.documentElement.lang = "en";
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      locale: "en",
      setLocale: () => {
        // No-op — the site is English only.
      },
      t: (key: string) => translations[key] ?? key,
      catLabel: (c: Category) => {
        const label = categoryLabels[c];
        if (!label) return c;
        return label.en ?? c;
      },
      localizePath: (path: string) => path,
    }),
    []
  );

  return <UICtx.Provider value={value}>{children}</UICtx.Provider>;
}

export function useUI() {
  const ctx = useContext(UICtx);
  if (!ctx) throw new Error("useUI must be used within UIProvider");
  return ctx;
}
