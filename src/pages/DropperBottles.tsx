import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { products, categoryLabels } from "../data/products";
import { useUI } from "../i18n/UIContext";
import { FAQSchema } from "../components/Schema";

const dropperProducts = products.filter((p) => p.category === "dropper");

const faqItems = [
  {
    q: { en: "What is the minimum order quantity (MOQ) for custom dropper bottles?" },
    a: { en: "Our MOQ is 5,000 pcs for stock molds with standard finishes (clear, frosted, amber). Custom colors, silk-screen logos and hot-stamping are available at the same 5,000 pcs MOQ. Private molds start from 10,000 pcs." },
  },
  {
    q: { en: "How much do custom glass dropper bottles cost?" },
    a: { en: "A standard 30ml frosted dropper bottle with gold collar and pipette costs $0.38-0.65 per unit at 5,000 pcs, depending on decoration complexity. Silk-screen setup is $80-120 per color per SKU. Hot-stamping dies run $150-300 per design." },
  },
  {
    q: { en: "How fast can I get dropper bottle samples?" },
    a: { en: "We ship a fully decorated sample kit within 5-7 business days via DHL Express. Rush service (3 days) is available for time-sensitive brand pitches. The kit includes MOQ pricing and decoration samples." },
  },
  {
    q: { en: "Can you do custom colors and branding on dropper bottles?" },
    a: { en: "Yes. We offer custom Pantone color frosting, spray coating (solid + gradient), silk-screen printing, hot stamping, and electroplated collar finishes. All decoration is handled in-house for full color control." },
  },
  {
    q: { en: "What sizes of dropper bottles are available?" },
    a: { en: "We stock 5ml, 10ml, 15ml, 20ml, 30ml, 50ml, 60ml and 100ml dropper bottles in clear, frosted, amber, violet and matte black glass. All sizes support custom decoration." },
  },
  {
    q: { en: "Do you ship dropper bottles to the USA and Europe?" },
    a: { en: "Yes. We offer EXW, FOB and DDP shipping. DDP door-to-door to the USA takes 20-26 days (sea freight through Los Angeles/Long Beach). EU deliveries route through Rotterdam or Hamburg." },
  },
  {
    q: { en: "Are your dropper bottles FDA and EU compliant?" },
    a: { en: "Yes. Type III soda-lime glass complies with FDA 21 CFR, EU 1935/2004 and EC 1223/2009. ISO 17025-accredited test reports and REACH/RoHS declarations are included with every shipment." },
  },
];

export default function DropperBottles() {
  const { locale, catLabel } = useUI();
  const lang = (obj: Record<string, string>) => obj[locale] ?? obj.en;

  return (
    <div dir={locale === "tw" ? "rtl" : "ltr"}>
      <Seo
        title="Dropper Bottles Suppliers & Manufacturers | Custom Glass Serum Bottles — Vesla"
        description="Dropper bottles suppliers & manufacturers — custom glass serum dropper bottles from 5ml to 100ml. Low MOQ 5,000 pcs, free samples, in-house decoration, DDP to EU & USA. ISO 9001 certified."
        path="/dropper-bottles"
      />
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="bg-ink py-20 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">Custom Glass Packaging · Made to Order</p>
          <h1 className="mt-4 font-serif text-4xl font-medium text-white sm:text-5xl">
            Dropper Bottles Suppliers & Manufacturers
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/70">
            Vesla manufactures custom glass dropper bottles for indie and emerging beauty brands. From 5ml
            sample vials to 100ml professional sizes — with in-house decoration, free sample kits, and DDP
            shipping to Europe and North America. ISO 9001 certified Guangzhou factory.
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
        <h2 className="mb-2 font-serif text-2xl text-ink sm:text-3xl">Our Dropper Bottles</h2>
        <p className="mb-10 text-sm text-ink-soft">
          Stocked molds in clear, frosted, amber, violet and matte black — all customizable.
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {dropperProducts.map((p) => (
            <Link key={p.id} to={`/products/${p.seoSlug || p.id}`} className="group rounded-2xl bg-white p-4 ring-1 ring-gold/15 transition hover:shadow-lg">
              <div className="aspect-square overflow-hidden rounded-xl bg-cream-dark/40">
                <img src={p.image} alt={p.name} width={800} height={800} className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105" loading="lazy" />
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
          <h2 className="mb-8 font-serif text-2xl text-ink sm:text-3xl">Choosing the Right Dropper Bottle Supplier</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold-dark">Why Buy Direct from a Manufacturer</h3>
              <ul className="space-y-3 text-sm leading-relaxed text-ink-soft">
                <li>• <strong className="text-ink">Save 30-50%</strong> vs resellers — buy at factory pricing, not distributor markup</li>
                <li>• <strong className="text-ink">Full decoration control</strong> — frosting, silk screen, hot stamping all in-house</li>
                <li>• <strong className="text-ink">Direct quality oversight</strong> — QC reports and photos before shipping</li>
                <li>• <strong className="text-ink">Custom development</strong> — private molds from 10,000 pcs</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold-dark">What to Verify Before Ordering</h3>
              <ul className="space-y-3 text-sm leading-relaxed text-ink-soft">
                <li>• Live video factory tour — real manufacturers show forming lines</li>
                <li>• Specimen samples — request your exact size + decoration, not a demo</li>
                <li>• Certification numbers — verify ISO 9001, FDA, EU 1935/2004</li>
                <li>• Payment terms — industry standard is 30% deposit / 70% against documents</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <h2 className="mb-8 font-serif text-2xl text-ink sm:text-3xl">Dropper Bottle FAQ</h2>
        <div className="space-y-4">
          {faqItems.map((f) => (
            <details key={f.q.en} className="group rounded-2xl bg-white p-6 ring-1 ring-gold/15">
              <summary className="cursor-pointer text-sm font-semibold text-ink">{f.q.en}</summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.a.en}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-14 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif text-2xl text-white">Ready to Source Custom Dropper Bottles?</h2>
          <p className="mt-3 text-sm text-white/70">Free sample kit for new brands · 24-hour quotation · DDP to EU & USA</p>
          <Link to="/contact" className="mt-6 inline-block rounded-full bg-gold px-8 py-3 text-sm font-semibold text-white hover:bg-gold-dark transition">
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
