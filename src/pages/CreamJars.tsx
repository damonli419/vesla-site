import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { products } from "../data/products";
import { useUI } from "../i18n/UIContext";
import { FAQSchema } from "../components/Schema";

const jarProducts = products.filter((p) => p.category === "jar");

const faqItems = [
  {
    q: { en: "What is the minimum order quantity (MOQ) for custom cream jars?" },
    a: { en: "Our MOQ is 5,000 pcs for stock molds with standard finishes (clear, frosted, matte). Custom colors, woodgrain water-transfer lids, silk-screen logos and hot stamping are available at the same 5,000 pcs MOQ. Private molds start from 10,000 pcs." },
  },
  {
    q: { en: "What sizes of glass cream jars are available?" },
    a: { en: "We stock 5g, 10g, 15g, 20g, 30g, 50g, 100g and 120g cream jars in clear, frosted, matte black and gradient finishes. Wide-mouth designs accept woodgrain, matte, metallic and double-wall lids." },
  },
  {
    q: { en: "Can you do woodgrain lids and custom branding on cream jars?" },
    a: { en: "Yes. Our water-transfer printing creates realistic woodgrain lids, and we offer silk screen, hot stamping and gold foil logos on both jar body and lid. Custom Pantone colors and gradient coating are handled in-house." },
  },
  {
    q: { en: "How much do custom glass cream jars cost?" },
    a: { en: "A standard 30g frosted cream jar with a matte lid costs $0.25-0.50 per unit at 5,000 pcs. Woodgrain water-transfer lids and custom decoration add $0.05-0.15 per unit depending on complexity. Silk-screen setup is $80-120 per color per SKU." },
  },
  {
    q: { en: "How fast can I get cream jar samples?" },
    a: { en: "We ship a fully decorated sample kit within 5-7 business days via DHL Express, including woodgrain and matte lid options plus MOQ pricing. Rush service (3 days) is available for time-sensitive launches." },
  },
  {
    q: { en: "Are your cream jars suitable for creams, butters and balms?" },
    a: { en: "Yes. Thick-wall jars from 15g to 120g hold high-viscosity formulas — moisturizers, face creams, body butters, balms and masks. Wide mouths make filling and scooping easy, and Type III soda-lime glass is compliant with FDA 21 CFR and EU 1935/2004." },
  },
];

export default function CreamJars() {
  const { locale, catLabel } = useUI();
  const lang = (obj: Record<string, string>) => obj[locale] ?? obj.en;

  return (
    <div dir={locale === "tw" ? "rtl" : "ltr"}>
      <Seo
        title="Cream Jar Manufacturers & Suppliers | Custom Glass Cosmetic Jars — Vesla"
        description="Cream jar manufacturers & suppliers — custom glass cosmetic jars from 15g to 120g with woodgrain, matte & metallic lids. Low MOQ 5,000 pcs, free samples, in-house decoration, DDP to EU & USA. ISO 9001."
        path="/cream-jars"
      />
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="bg-ink py-20 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">Custom Glass Packaging · Made to Order</p>
          <h1 className="mt-4 font-serif text-4xl font-medium text-white sm:text-5xl">
            Cream Jar Manufacturers & Suppliers
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/70">
            Vesla manufactures custom glass cream jars for moisturizer, face cream and body care brands.
            From 15g travel jars to 120g family sizes — with woodgrain water-transfer lids, matte finishes,
            free sample kits and DDP shipping to Europe and North America. ISO 9001 certified Guangzhou factory.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white hover:bg-gold-dark transition">
              Get a Free Quote
            </Link>
            <Link to="/process" className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition">
              See Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="mb-2 font-serif text-2xl text-ink sm:text-3xl">Our Glass Cream Jars</h2>
        <p className="mb-10 text-sm text-ink-soft">
          Stocked molds in clear, frosted, matte and gradient finishes — all customizable with woodgrain or metallic lids.
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {jarProducts.map((p) => (
            <Link key={p.id} to={`/products/${p.seoSlug || p.id}`} className="group rounded-2xl bg-white p-4 ring-1 ring-gold/15 transition hover:shadow-lg">
              <div className="aspect-square overflow-hidden rounded-xl bg-cream-dark/40">
                <img src={p.image} alt={`${p.name} wholesale manufacturer China - factory direct low MOQ`} width={800} height={800} className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <h3 className="mt-3 text-sm font-medium text-ink">{p.name}</h3>
              <p className="mt-1 text-xs text-ink-soft">{p.capacity}</p>
              <p className="mt-2 text-xs font-semibold text-gold-dark">View Details →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Buyer guide */}
      <section className="bg-cream-dark/60 py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="mb-8 font-serif text-2xl text-ink sm:text-3xl">Choosing the Right Cream Jar Supplier</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold-dark">Why Buy Direct from a Manufacturer</h3>
              <ul className="space-y-3 text-sm leading-relaxed text-ink-soft">
                <li>• <strong className="text-ink">Factory pricing</strong> — save 30-50% vs distributors on 5,000+ pcs runs</li>
                <li>• <strong className="text-ink">In-house lid decoration</strong> — woodgrain water transfer, matte & metallic finishes</li>
                <li>• <strong className="text-ink">Direct QC oversight</strong> — AQL sampling and photos before shipping</li>
                <li>• <strong className="text-ink">Custom development</strong> — private jar molds from 10,000 pcs</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold-dark">What to Verify Before Ordering</h3>
              <ul className="space-y-3 text-sm leading-relaxed text-ink-soft">
                <li>• Live video factory tour — real manufacturers show forming lines</li>
                <li>• Lid compatibility — woodgrain, double-wall & airless lid samples for your formula</li>
                <li>• Certification numbers — verify ISO 9001, FDA, EU 1935/2004</li>
                <li>• Payment terms — industry standard is 30% deposit / 70% against documents</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-16 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-serif text-3xl font-medium text-white">Ready to Bottle Something Beautiful?</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70">
            Send us your jar size, lid finish and quantity — our packaging engineers reply within 24 hours
            with recommendations, pricing and a free sample kit offer.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-gold-dark transition">
              Start Your Project
            </Link>
            <Link to="/products?category=jar" className="rounded-full border border-white/40 px-8 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition">
              Browse All Jars
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
