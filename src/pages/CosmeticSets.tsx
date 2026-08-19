import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { products } from "../data/products";
import { useUI } from "../i18n/UIContext";
import { FAQSchema } from "../components/Schema";

const setProducts = products.filter((p) => p.category === "set");

const faqItems = [
  {
    q: { en: "What is included in a typical cosmetic glass set?" },
    a: { en: "A standard skincare regimen set typically includes 2-3 lotion/serum bottles (30ml, 50ml, 100ml) and 1-2 cream jars (30g, 50g). We can also include glass vials or toner bottles to create a complete 5-SKU or 7-SKU collection." },
  },
  {
    q: { en: "Can you match Pantone colors across different bottle types?" },
    a: { en: "Yes. Our in-house color spray and gradient lines are calibrated to ensure a 100% color match between bottles and jars, even if they have different glass weights or shapes, ensuring a consistent brand identity." },
  },
  {
    q: { en: "What is the MOQ for a coordinated glass set?" },
    a: { en: "The MOQ for stock-mold sets is 5,000 units per SKU. This allows you to launch a complete coordinated line with a manageable total inventory. Custom mold sets start from 10,000 units per item." },
  },
];

export default function CosmeticSets() {
  const { locale } = useUI();

  return (
    <div dir={locale === "tw" ? "rtl" : "ltr"}>
      <Seo
        title="Cosmetic Glass Set Manufacturers | Coordinated Skincare Collections — Vesla"
        description="Premium cosmetic glass set manufacturers. Coordinated skincare collections including lotion bottles, serum droppers & cream jars with matching gradient finishes. Low MOQ 5,000 pcs."
        path="/cosmetic-sets"
      />
      <FAQSchema items={faqItems} locale={locale} />

      {/* Hero */}
      <section className="bg-ink py-20 text-center text-white">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">Turnkey Brand Identity</p>
          <h1 className="mt-4 font-serif text-4xl font-medium sm:text-5xl">
            Cosmetic Glass Set Manufacturers
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/70">
            Vesla manufactures coordinated glass packaging sets for premium skincare lines. 
            Achieve a consistent brand look across your entire regimen with matching gradient coatings, 
            silk-screen logos, and luxury closures — all under one ISO 9001 factory roof.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white hover:bg-gold-dark transition">
              Request a Set Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-gold/10 bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5 items-center opacity-70 grayscale hover:grayscale-0 transition-all text-ink">
            <div className="flex flex-col items-center text-center">
              <span className="text-xl font-bold">Matching QC</span>
              <span className="text-[10px] uppercase tracking-tighter">Color Consistency</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-xl font-bold">ISO 9001</span>
              <span className="text-[10px] uppercase tracking-tighter">Certified Process</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-xl font-bold">DDP USA/EU</span>
              <span className="text-[10px] uppercase tracking-tighter">Duty Paid Logistics</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-xl font-bold">Low MOQ</span>
              <span className="text-[10px] uppercase tracking-tighter">5k Units per SKU</span>
            </div>
            <div className="hidden lg:block">
              <img src="https://sc02.alicdn.com/kf/Hba8e5303cb1d4ac9afaf69ef5ec30362e.jpg" alt="Vesla set decoration" className="h-12 w-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="mb-2 font-serif text-2xl text-ink sm:text-3xl">Coordinated Glass Collections</h2>
        <p className="mb-10 text-sm text-ink-soft">
          Explore our signature coordinated sets or build your own from our stock mold library.
        </p>
        <div className="grid grid-cols-2 gap-7 sm:grid-cols-3 lg:grid-cols-4">
          {setProducts.map((p) => (
            <Link key={p.id} to={`/products/${p.seoSlug || p.id}`} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gold/15 transition duration-300 hover:-translate-y-1.5 hover:shadow-lg">
              <div className="aspect-square overflow-hidden bg-cream-dark/40">
                <img 
                  src={p.image} 
                  alt={`${p.name} collection`} 
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
                  View Set Specs
                  <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Set Customization Specs */}
      <section className="bg-cream-dark/60 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl text-ink mb-12">One Brand, One Identity</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-8 rounded-3xl shadow-sm ring-1 ring-gold/15">
              <h3 className="text-gold-dark font-semibold uppercase tracking-widest text-xs mb-4">Gradient Calibration</h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                We calibrate our automated spray lines to ensure the gradient transition is identical 
                across your 30ml serum bottle and 50g face cream jar.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm ring-1 ring-gold/15">
              <h3 className="text-gold-dark font-semibold uppercase tracking-widest text-xs mb-4">Closure Matching</h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                Source matching pumps, droppers, and screw-caps with identical metal finishes (gold, silver, or matte black).
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm ring-1 ring-gold/15">
              <h3 className="text-gold-dark font-semibold uppercase tracking-widest text-xs mb-4">Custom Molds</h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                Need a unique silhouette? We build private mold sets from 10,000 pcs per item, giving you total brand exclusivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-serif text-3xl font-medium">Ready to Bottle Your Regimen?</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70">
            Share your collection requirements and get a turnkey quote including custom decoration and DDP shipping.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-gold-dark transition">
              Get My Set Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
