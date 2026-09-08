import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { BreadcrumbSchema, FAQSchema, ProductListSchema } from "../components/Schema";
import { products, type Category } from "../data/products";

export type HubKey = "glass" | "lowMoq" | "custom";

type HubConfig = {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  categories: Category[];
  specs: { label: string; value: string }[];
  steps: { title: string; text: string }[];
  faqs: { q: { en: string }; a: { en: string } }[];
  related: { label: string; to: string }[];
};

const hubs: Record<HubKey, HubConfig> = {
  glass: {
    path: "/cosmetic-glass-packaging-manufacturer",
    eyebrow: "Factory-direct cosmetic packaging",
    title: "Cosmetic Glass Packaging Manufacturer",
    description: "Factory-direct cosmetic glass packaging for skincare brands: serum bottles, cream jars, vials and coordinated sets. Stock molds from 5,000 pcs and private-mold development from 10,000 pcs.",
    intro: "Vesla helps skincare, fragrance and wellness brands source glass bottles, jars, vials and matching sets from one manufacturing partner. Start with a stock mold for a lower-risk launch, then move to private-mold development when a proprietary silhouette is justified.",
    categories: ["serum", "jar", "vial", "set"],
    specs: [
      { label: "Packaging formats", value: "Serum bottles, cream jars, vials and coordinated sets" },
      { label: "Stock-mold MOQ", value: "5,000 pcs with custom decoration" },
      { label: "Private-mold MOQ", value: "From 10,000 pcs" },
      { label: "Decoration options", value: "Frosting, spray coating, silk screen and hot stamping" },
      { label: "Sampling", value: "Confirm specifications and decoration before production" },
      { label: "Shipping options", value: "EXW, FOB or DDP quotation on request" },
    ],
    steps: [
      { title: "Define the range", text: "Share your formula type, capacity, target quantity and whether you need a single SKU or a coordinated family." },
      { title: "Choose the route", text: "Compare available stock molds with a private-mold brief before committing to tooling." },
      { title: "Approve samples", text: "Review the bottle, closure and decoration together before mass production." },
    ],
    faqs: [
      { q: { en: "Can one supplier provide bottles, jars and matching sets?" }, a: { en: "Yes. This page brings together Vesla's serum bottles, cream jars, vials and cosmetic-set options so a brand can compare formats before requesting a specification review." } },
      { q: { en: "What information is needed for a packaging quote?" }, a: { en: "Provide the product type, capacity, quantity, preferred decoration, destination country and whether you are using a stock mold or considering a private mold." } },
      { q: { en: "Do you support small brand launches?" }, a: { en: "Stock-mold projects with custom decoration start from 5,000 pieces. Private-mold projects begin from 10,000 pieces." } },
    ],
    related: [
      { label: "Serum Bottle Manufacturer", to: "/serum-bottles" },
      { label: "Cream Jar Manufacturer", to: "/cream-jars" },
      { label: "Low MOQ Cosmetic Packaging", to: "/low-moq-cosmetic-packaging" },
    ],
  },
  lowMoq: {
    path: "/low-moq-cosmetic-packaging",
    eyebrow: "Lower-risk packaging for new launches",
    title: "Low MOQ Cosmetic Packaging",
    description: "Low MOQ cosmetic glass packaging for indie beauty brands: stock-mold serum bottles, cream jars, vials and sets from 5,000 pcs with custom decoration and a clear path to private molds.",
    intro: "A lower MOQ does not mean a generic launch. Choose an available bottle or jar mold, then build differentiation through color, surface finish, printing, closures and a coordinated product range. This approach separates the cost of customization from the cost of creating a new glass silhouette.",
    categories: ["serum", "jar", "vial", "set"],
    specs: [
      { label: "Stock-mold MOQ", value: "5,000 pcs" },
      { label: "Private-mold MOQ", value: "From 10,000 pcs" },
      { label: "Best for", value: "First launches, limited runs and SKU validation" },
      { label: "Customizable elements", value: "Color, frosting, print, hot stamp and closure finish" },
      { label: "Quote inputs", value: "SKU, capacity, decoration, quantity and destination" },
      { label: "Next decision", value: "Use stock mold now or scope a private mold" },
    ],
    steps: [
      { title: "Start with the formula", text: "Select the bottle or jar format based on fill volume, formula viscosity, light sensitivity and dispensing method." },
      { title: "Use stock geometry", text: "Keep the glass body on an available mold while customizing decoration and closures for brand distinction." },
      { title: "Plan the scale-up", text: "Use initial demand to decide whether a private mold is commercially justified for the next production cycle." },
    ],
    faqs: [
      { q: { en: "What does low MOQ mean for cosmetic packaging?" }, a: { en: "For Vesla stock-mold packaging with custom decoration, the starting MOQ is 5,000 pieces. A new private mold starts from 10,000 pieces." } },
      { q: { en: "Can a stock bottle still look custom?" }, a: { en: "Yes. A stock glass body can be differentiated with custom color, frosting, silk screen, hot stamping and compatible closure options." } },
      { q: { en: "When should a brand consider a private mold?" }, a: { en: "Consider a private mold when a distinct bottle silhouette is central to the brand and forecast demand supports the tooling and minimum production commitment." } },
    ],
    related: [
      { label: "MOQ and Mold Budget Guide", to: "/blog/indie-beauty-brand-budgeting-2026-moq-mold-guide" },
      { label: "Custom Cosmetic Packaging", to: "/custom-cosmetic-packaging-manufacturer" },
      { label: "Browse Serum Bottles", to: "/serum-bottles" },
    ],
  },
  custom: {
    path: "/custom-cosmetic-packaging-manufacturer",
    eyebrow: "Private-mold packaging development",
    title: "Custom Cosmetic Packaging Manufacturer",
    description: "Custom cosmetic packaging manufacturer for brands developing private-mold glass bottles, jars and matching sets. Compare stock-mold customization with private-mold development from 10,000 pcs.",
    intro: "Custom packaging decisions work best when the visual brief, formula requirements, closure choice and production volume are considered together. Vesla's process begins by identifying whether a custom finish on a stock mold or a private-mold program is the appropriate route.",
    categories: ["serum", "jar", "set"],
    specs: [
      { label: "Private-mold MOQ", value: "From 10,000 pcs" },
      { label: "Stock-mold alternative", value: "5,000 pcs with custom decoration" },
      { label: "Development inputs", value: "Capacity, visual brief, closure, formula and forecast" },
      { label: "Customization", value: "Bottle silhouette, decoration, color and closure selection" },
      { label: "Approval milestone", value: "Technical review and physical sample approval" },
      { label: "Production route", value: "Private-mold development or customized stock mold" },
    ],
    steps: [
      { title: "Build the brief", text: "Define the capacity, target user experience, formula needs, decoration and expected production volume." },
      { title: "Review feasibility", text: "Compare a private-mold concept against the fastest viable stock-mold alternatives." },
      { title: "Sample before scale", text: "Approve the combined glass body, closure and decoration before committing to the production run." },
    ],
    faqs: [
      { q: { en: "What is the difference between custom decoration and a private mold?" }, a: { en: "Custom decoration changes the finish, print or closure on an existing bottle or jar. A private mold creates a dedicated glass-body geometry and requires a higher minimum order." } },
      { q: { en: "What information should I provide for a custom packaging project?" }, a: { en: "Provide a reference image or drawing, required capacity, formula type, closure preference, decoration needs, target quantity and destination market." } },
      { q: { en: "Can a skincare set use different packaging formats?" }, a: { en: "Yes. A coordinated set can combine serum bottles, cream jars and other formats through shared color, print, cap finish and proportional design choices." } },
    ],
    related: [
      { label: "Cosmetic Glass Packaging Manufacturer", to: "/cosmetic-glass-packaging-manufacturer" },
      { label: "Low MOQ Cosmetic Packaging", to: "/low-moq-cosmetic-packaging" },
      { label: "Cosmetic Sets", to: "/cosmetic-sets" },
    ],
  },
};

export default function CommercialHub({ hub }: { hub: HubKey }) {
  const config = hubs[hub];
  const hubProducts = products.filter((product) => config.categories.includes(product.category)).slice(0, 8);

  return (
    <>
      <Seo title={`${config.title} | Vesla`} description={config.description} path={config.path} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.veslapack.com/" },
        { name: config.title, url: `https://www.veslapack.com${config.path}` },
      ]} />
      <ProductListSchema items={hubProducts} />
      <FAQSchema items={config.faqs} />

      <section className="bg-ink py-20 text-center text-white">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">{config.eyebrow}</p>
          <h1 className="mt-4 font-serif text-4xl font-medium sm:text-5xl">{config.title}</h1>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-white/75">{config.intro}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white transition hover:bg-gold-dark">Request Specifications & Quote</Link>
            <Link to="/products" className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10">Browse Available Packaging</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-gold/10 bg-white py-10">
        <div className="mx-auto grid max-w-6xl gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {config.specs.map((spec) => (
            <div key={spec.label} className="rounded-2xl bg-cream/50 p-5 ring-1 ring-gold/10">
              <p className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">{spec.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink">{spec.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-9 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-dark">Relevant packaging formats</p>
          <h2 className="mt-3 font-serif text-3xl text-ink">Compare real product options before requesting a quote</h2>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {hubProducts.map((product) => (
            <Link key={product.id} to={`/products/${product.seoSlug || product.id}`} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gold/15 transition hover:-translate-y-1 hover:shadow-lg">
              <img src={product.image} alt={`${product.name} — ${product.capacity}`} className="aspect-square w-full object-cover" loading="lazy" width={800} height={800} />
              <div className="p-4">
                <h3 className="font-serif text-base text-ink">{product.name}</h3>
                <p className="mt-1 text-xs text-ink-soft">{product.capacity} · MOQ {product.moq}</p>
                <span className="mt-4 inline-block text-xs font-semibold text-gold-dark">View specification →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-cream-dark/40 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-gold-dark">A practical sourcing workflow</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {config.steps.map((step, index) => (
              <div key={step.title} className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gold/10">
                <p className="text-sm font-bold text-gold-dark">0{index + 1}</p>
                <h2 className="mt-3 font-serif text-xl text-ink">{step.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="font-serif text-3xl text-ink">Frequently asked sourcing questions</h2>
        <div className="mt-7 space-y-4">
          {config.faqs.map((faq) => (
            <details key={faq.q.en} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gold/15">
              <summary className="cursor-pointer font-serif text-lg text-ink">{faq.q.en}</summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{faq.a.en}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-ink py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-serif text-3xl">Ready to review your packaging brief?</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70">Send the product type, capacity, quantity, decoration requirement and destination country. We will route the request to the relevant packaging option.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-white transition hover:bg-gold-dark">Contact Packaging Team</Link>
            {config.related.map((link) => <Link key={link.to} to={link.to} className="rounded-full border border-white/30 px-5 py-3 text-sm text-white transition hover:bg-white/10">{link.label}</Link>)}
          </div>
        </div>
      </section>
    </>
  );
}
