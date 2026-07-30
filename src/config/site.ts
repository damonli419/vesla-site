// Centralized, env-driven site configuration. All contact details, social
// links and analytics keys flow from here so the rest of the app never
// hard-codes a phone number or email.
const env = import.meta.env;

export const siteConfig = {
  name: "Vesla",
  legalName: "Vesla Co., Ltd.",
  url: "https://veslapack.com",
  email: env.VITE_COMPANY_EMAIL || "sales@veslapack.com",
  phone: env.VITE_COMPANY_PHONE || "+86-138-0000-0000",
  // WhatsApp numbers must be digits only, no plus sign.
  whatsapp: env.VITE_COMPANY_WHATSAPP || "8613800000000",
  whatsappDisplay: env.VITE_COMPANY_WHATSAPP
    ? `+${env.VITE_COMPANY_WHATSAPP}`
    : "+86 138 0000 0000",
  address: {
    street: "Vesla Industrial Park",
    city: "Xuzhou",
    region: "Jiangsu",
    country: "China",
    postal: "221000",
  },
  social: {
    instagram: "https://instagram.com/veslapack",
    tiktok: "https://tiktok.com/@veslapack",
    pinterest: "https://pinterest.com/veslapack",
    linkedin: "https://linkedin.com/company/veslapack",
  },
  contactEndpoint: env.VITE_CONTACT_ENDPOINT || "/api/contact",
} as const;

export const whatsappLink = (msg = "Hi Vesla, I'd like to know more about your packaging.") =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`;
