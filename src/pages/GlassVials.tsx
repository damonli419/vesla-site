import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { products } from "../data/products";
import { useUI } from "../i18n/UIContext";
import { FAQSchema } from "../components/Schema";

const vialProducts = products.filter((p) => p.category === "vial");

const faqItems = [
  {
    q: { en: "What is the minimum order quantity (MOQ) for custom glass vials?" },
    a: { en: "Our MOQ for stock glass vials is 5,000 pcs with custom printing. For completely bespoke sizes or private molds, the MOQ starts at 10,000 pcs. Free sample kits are available for pitch meetings." },
  },
  {
    q: { en: "What glass materials are used for your vials?" },
    a: { en: "We use high-clarity borosilicate glass and Type III soda-lime glass. Borosilicate is ideal for high-precision pharmaceutical and discovery sets, while soda-lime offers excellent chemical resistance for essential oil samples." },
  },
  {
    q: { en: "Can you provide custom gift boxes for discovery sets?" },
    a: { en: "Yes. We offer turnkey discovery set packaging, including custom-sized vials, insert trays (foam or cardboard), and branded exterior gift boxes — delivered DDP to your warehouse." },
  },
];

export default function GlassVials() {
  const { locale } = useUI();

  return (
    <div dir={locale === "tw" ? "rtl" : "ltr"}>
      <Seo
        title="Glass Vial Manufacturers & Suppliers | Custom Sample Vials — Vesla"
        description="Premium glass vial manufacturers & suppliers. 2ml-10ml precision vials for discovery sets, travel sizes & essential oils. Low MOQ 5,000 pcs, DDP shipping to USA & EU."
        path="/glass-vials"
      />
      <FAQSchema items={faqItems} locale={locale} />

      {/* Hero */}
      <section className="bg-ink py-20 text-center text-white">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">Agile Sample Solutions</p>
          <h1 className="mt-4 font-serif text-4xl font-medium sm:text-5xl">
            Glass Vial Manufacturers & Suppliers
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/70">
            Vesla manufactures high-precision glass vials for discovery sets, travel collections, and aromatherapy samples. 
            From 2ml micro-vials to 10ml large sample tubes — featuring in-house printing, luxury closures, and global DDP logistics.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white hover:bg-gold-dark transition">
              Get a Sample Kit Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-gold/10 bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5 items-center opacity-70 grayscale hover:grayscale-0 transition-all text-ink">
            <div className="flex flex-col items-center text-center">
              <span className="text-xl font-bold">ISO 9001</span>
              <span className="text-[10px] uppercase tracking-tighter">Quality Standard</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-xl font-bold">FDA Grade</span>
              <span className="text-[10px] uppercase tracking-tighter">Certified Materials</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-xl font-bold">DDP USA/EU</span>
              <span className="text-[10px] uppercase tracking-tighter">Duty Paid Shipping</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-xl font-bold">Low MOQ</span>
              <span className="text-[10px] uppercase tracking-tighter">From 5,000 Units</span>
            </div>
            <div className="hidden lg:block">
              <img src="https://sc02.alicdn.com/kf/A3fa0a4dee6c14803924e1a1558cc248c1.png" alt="Vesla QC lab" className="h-12 w-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="mb-2 font-serif text-2xl text-ink sm:text-3xl">Glass Vial Collection</h2>
        <p className="mb-10 text-sm text-ink-soft">
          Precision-molded and tubular glass vials with crimp, screw-neck, or roll-on finishes.
        </p>
        <div className="grid grid-cols-2 gap-7 sm:grid-cols-3 lg:grid-cols-4">
          {vialProducts.map((p) => (
            <Link key={p.id} to={`/products/${p.seoSlug || p.id}`} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gold/15 transition duration-300 hover:-translate-y-1.5 hover:shadow-lg">
              <div className="aspect-square overflow-hidden bg-cream-dark/40">
                <img 
                  src={p.image} 
                  alt={`${p.name} manufacturer`} 
                  width={800} 
                  height={800} 
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105" 
                  loading="lazy" 
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg text-ink line-clamp-1">{p.name}</h3>
                <p className="mt-1 text-xs text-ink-soft">{p.capacity}</p>
                <div className="mt-5 flex gap-2 flex-wrap">
                  {(p.features || []).slice(0, 3).map(f => (
                    <span key={f} className="text-[10px] font-semibold bg-gold/5 text-gold-dark px-2.5 py-1 rounded-md border border-gold/10 line-clamp-1">{f}</span>
                  ))}
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark">
                  Specs & Quote
                  <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Technical Specs */}
      <section className="bg-cream-dark/60 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl text-ink sm:text-4xl">Technical Sourcing Specs</h2>
          </div>
          <div className="overflow-x-auto rounded-3xl bg-white shadow-sm ring-1 ring-gold/15">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-ink text-white">
                  <th className="p-5 font-semibold">Standard Volumes</th>
                  <th className="p-5 font-semibold">Glass Type</th>
                  <th className="p-5 font-semibold">Neck Diameter</th>
                  <th className="p-5 font-semibold">Primary Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gold/10">
                <tr><td className="p-5 text-ink font-medium">2 ml – 3 ml</td><td className="p-5 text-ink-soft">Borosilicate</td><td className="p-5 text-ink-soft">9mm / 11mm</td><td className="p-5 text-ink-soft">Perfume Samples</td></tr>
                <tr><td className="p-5 text-ink font-medium">5 ml</td><td className="p-5 text-ink-soft">Soda-Lime (Clear/Amber)</td><td className="p-5 text-ink-soft">13mm</td><td className="p-5 text-ink-soft">Essential Oil Samples</td></tr>
                <tr><td className="p-5 text-ink font-medium">10 ml</td><td className="p-5 text-ink-soft">Soda-Lime (Clear/Amber)</td><td className="p-5 text-ink-soft">18mm</td><td className="p-5 text-ink-soft">Discovery Sets</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-serif text-3xl font-medium">Ready to Build Your Discovery Set?</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70">
            Request a free tech-pack and pricing for your custom vial project. 
            We offer full branding from vial printing to custom exterior gift boxes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-gold-dark transition">
              Start Sourcing
            </Link>
            <Link to="/products" className="rounded-full border border-white/30 px-8 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition">
              All Vials
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
