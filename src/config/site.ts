// Centralized, env-driven site configuration. All contact details, social
// links and analytics keys flow from here so the rest of the app never
// hard-codes a phone number or email.
const env = import.meta.env;

export const siteConfig = {
  name: "Vesla",
  legalName: "Vesla Co., Ltd.",
  url: "https://veslapack.com",
  email: env.VITE_COMPANY_EMAIL || "yitengglass3@gmail.com",
  phone: env.VITE_COMPANY_PHONE || "+86 18165681131",
  // WhatsApp numbers must be digits only, no plus sign.
  whatsapp: env.VITE_COMPANY_WHATSAPP || "8618165681131",
  whatsappDisplay: env.VITE_COMPANY_WHATSAPP
    ? `+${env.VITE_COMPANY_WHATSAPP}`
    : "+86 18165681131",
  address: {
    street: "11th Floor, Building 5, Baiyun Financial Holdings Intelligent Connected Vehicle Industrial Park, No. 66-4 Zhihong Road, Jianggao Town, Baiyun District",
    city: "Guangzhou",
    region: "Guangdong",
    country: "China",
    postal: "510000",
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
