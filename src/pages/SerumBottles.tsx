import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { products } from "../data/products";
import { useUI } from "../i18n/UIContext";
import { FAQSchema } from "../components/Schema";

const serumProducts = products.filter((p) => p.category === "serum");

const faqItems = [
  {
    q: { en: "What types of serum and essential oil bottles do you supply?" },
    a: { en: "Vesla supplies a complete range of glass serum bottles (5ml-100ml) and essential oil bottles in clear, amber, violet, and matte finishes. Our collection includes classic dropper bottles, push-button sprayers, and specialized UV-protective glass for sensitive botanical formulas." },
  },
  {
    q: { en: "What is the minimum order quantity (MOQ) for custom serum bottles?" },
    a: { en: "Our MOQ is 5,000 pcs for stock molds with custom decoration (color spray, silk screen, hot stamping). For completely bespoke private molds, the MOQ starts at 10,000 pcs." },
  },
  {
    q: { en: "Can you provide DDP shipping to the USA and Europe?" },
    a: { en: "Yes. We specialize in DDP (Delivered Duty Paid) logistics. We handle sea freight, customs clearance, and local trucking, delivering directly to your warehouse in typically 20-26 days." },
  },
];

export default function SerumBottles() {
  const { locale } = useUI();

  return (
    <div dir={locale === "tw" ? "rtl" : "ltr"}>
      <Seo
        title="Serum & Essential Oil Bottle Manufacturers | Custom Glass Dropper Bottles — Vesla"
        description="Premium serum & essential oil bottle manufacturers. Custom glass dropper bottles from 5ml to 100ml with UV protection and in-house decoration. Low MOQ 5,000 pcs, DDP shipping."
        path="/serum-bottles"
      />
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="bg-ink py-20 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">Custom Glass Packaging · Made to Order</p>
          <h1 className="mt-4 font-serif text-4xl font-medium text-white sm:text-5xl">
            Serum & Essential Oil Bottle Manufacturers
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/70">
            Vesla manufactures custom glass packaging for high-performance serums, facial oils, and aromatherapy blends.
            From 5ml sample vials to 100ml retail sizes — with UV-protective amber glass, 
            DDP logistics, and factory-direct pricing for indie brands.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white hover:bg-gold-dark transition">
              Get a Free Quote
            </Link>
          </div>
          <p className="mt-5 text-xs font-medium uppercase tracking-wide text-gold/80">
            24h Quote Reply · MOQ 5,000 pcs · DDP to US &amp; EU
          </p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-gold/10 bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5 items-center opacity-70 grayscale hover:grayscale-0 transition-all text-ink">
            <div className="flex flex-col items-center text-center">
              <span className="text-xl font-bold">ISO 9001:2015</span>
              <span className="text-[10px] uppercase tracking-tighter">Quality Management</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-xl font-bold">FDA Compliant</span>
              <span className="text-[10px] uppercase tracking-tighter">Food Grade Glass</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-xl font-bold">SGS Audited</span>
              <span className="text-[10px] uppercase tracking-tighter">Verified Factory</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-xl font-bold">DDP Logistics</span>
              <span className="text-[10px] uppercase tracking-tighter">USA & EU Customs Paid</span>
            </div>
            <div className="hidden lg:block">
              <img src="https://sc02.alicdn.com/kf/H3ed4c7e33e7444e0b8776874383d6c0d2.jpg" alt="Vesla production" className="h-12 w-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="mb-2 font-serif text-2xl text-ink sm:text-3xl">Serum & Oil Bottle Collection</h2>
        <p className="mb-10 text-sm text-ink-soft">
          High-clarity and UV-shielding glass solutions for premium skincare and wellness lines.
        </p>
        <div className="grid grid-cols-2 gap-7 sm:grid-cols-3 lg:grid-cols-4">
          {serumProducts.map((p) => (
            <Link key={p.id} to={`/products/${p.seoSlug || p.id}`} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gold/15 transition duration-300 hover:-translate-y-1.5 hover:shadow-lg">
              <div className="aspect-square overflow-hidden bg-cream-dark/40">
                <img 
                  src={p.image} 
                  alt={`${p.name} wholesale manufacturer China`} 
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
                  View Details
                  <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-16 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-serif text-3xl font-medium text-white">Protect Your Formula Today</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70">
            Request a free sample kit with our latest serum and essential oil bottles. 
            Quotation and compatibility consultation within 24 hours.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-gold-dark transition">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
