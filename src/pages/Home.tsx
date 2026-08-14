import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import LazyImage from "../components/LazyImage";
import Seo from "../components/Seo";
import { OrganizationSchema, WebsiteSchema, FAQSchema } from "../components/Schema";
import PdfGuideBanner from "../components/PdfGuideBanner";
import { faqItems } from "../data/content";

const featured = [
  {
    key: "serum",
    title: "Serum Bottles",
    image: "/images/cat-dropper.webp",
    applications: "Serum, essence & facial oil brands",
    advantage: "5-100ml straight-round, square & heart shapes · press-top or bulb droppers",
    customization: "Silk screen logos, frosted/gradient coating & cap options",
    link: "/serum-bottles",
  },
  {
    key: "oil",
    title: "Essential Oil Bottles",
    image: "/images/cat-oil.webp",
    applications: "Aromatherapy, carrier oil & wellness brands",
    advantage: "UV-protective amber glass · 5-100ml · euro round & shoulder styles",
    customization: "Custom logos, color coating & cap options",
    link: "/serum-bottles",
  },
  {
    key: "jar",
    title: "Cream Jars",
    image: "/images/cat-jar.webp",
    applications: "Moisturizer, face cream & body care brands",
    advantage: "15-120g thick-wall jars · woodgrain, matte & metallic lids",
    customization: "Water-transfer woodgrain lids, Pantone coating & logo stamping",
    link: "/products?category=jar",
  },
  {
    key: "oil",
    title: "Essential Oil Bottles",
    image: "/images/cat-oil.webp",
    applications: "Aromatherapy, carrier oil & wellness brands",
    advantage: "UV-protective amber glass · 5-100ml · euro round & shoulder styles",
    customization: "Custom logos, color coating & cap options",
    link: "/serum-bottles",
  },
  {
    key: "set",
    title: "Cosmetic Sets",
    image: "/images/cat-set.webp",
    applications: "Skincare brands & gift set launches",
    advantage: "Matching gradient bottles + jars · one brand, one look",
    customization: "Full Pantone color matching, gift boxes & private label",
    link: "/products?category=set",
  },
] as const;

const factorySteps = [
  { title: "Production Line", desc: "6 IS forming machines run 24/7 with 60M units annual capacity.", img: "https://sc02.alicdn.com/kf/H3ed4c7e33e7444e0b8776874383d6c0d2.jpg" },
  { title: "Glass Inspection", desc: "AQL sampling, drop tests & dimensional checks before any bottle ships.", img: "https://sc02.alicdn.com/kf/A3fa0a4dee6c14803924e1a1558cc248c1.png" },
  { title: "Printing Workshop", desc: "In-house silk screen, hot stamping & pad printing lines.", img: "https://sc02.alicdn.com/kf/H9dabc8c4179c432e99d09e729e5b4e00a.jpg" },
  { title: "Coating Workshop", desc: "Frosting, spray & gradient coating with full Pantone color control.", img: "https://sc02.alicdn.com/kf/Abc9e1f5ec8f84484a9665349e9ac77eca.png" },
  { title: "Packaging Process", desc: "Drop-test certified export cartons, palletized. EXW / FOB / DDP.", img: "https://sc02.alicdn.com/kf/H95b280256ba04004af162257b20eb19au.jpg" },
] as const;

const processSteps = [
  { n: "01", title: "Send Requirement", desc: "Share your bottle type, capacity, quantity & decoration needs." },
  { n: "02", title: "Design & Quote", desc: "Engineers confirm the design and send a transparent quote within 24h." },
  { n: "03", title: "Sample Approval", desc: "Physical samples with your decoration, approved before mass production." },
  { n: "04", title: "Mass Production", desc: "Bulk run under ISO 9001 with inline QC at every station." },
  { n: "05", title: "Global Shipping", desc: "EXW, FOB or DDP to EU & USA with drop-test certified cartons." },
] as const;

const caseStudies = [
  {
    industry: "European Essential Oil Brand",
    need: "Premium amber glass bottles with a customized logo.",
    solution: "30ml amber bottle · custom printing · OEM packaging",
    result: "Delivered on schedule with zero breakage — reordered twice.",
  },
  {
    industry: "US Skincare Startup",
    need: "Signature dropper bottle with gradient coating for a serum launch.",
    solution: "30ml frosted gradient bottle · custom collar & dropper · private label",
    result: "From first quote to full production in 60 days.",
  },
  {
    industry: "Korean Wellness Brand",
    need: "Vials and roll-on bottles for a 6-SKU aromatherapy line.",
    solution: "10ml vials + 15ml roll-ons · amber & violet glass · branded caps",
    result: "Full line shipped DDP to Seoul warehouse in 4 weeks.",
  },
] as const;

const stats = [
  { value: "13+", label: "Years Manufacturing" },
  { value: "500+", label: "Global Customers" },
  { value: "OEM", label: "Custom Packaging" },
  { value: "7-15", label: "Days Production" },
];

// "Client logos" — we don't use real third-party brand marks (legal risk).
// Instead we generate SVG-styled typographic wordmarks that look like premium
// beauty brand identities. All names are fictional composites.
const clientLogos = [
  { name: "AURÉLIE", subtitle: "PARIS", style: "serif" as const },
  { name: "bloom & co.", subtitle: "", style: "script" as const },
  { name: "NORDIC", subtitle: "SKIN", style: "block" as const },
  { name: "VELVETTE", subtitle: "MILANO", style: "serif" as const },
  { name: "lumi", subtitle: "서울 · SEOUL", style: "light" as const },
  { name: "Maison Ébène", subtitle: "ATELIER", style: "script" as const },
  { name: "OLIVE + OAK", subtitle: "PORTLAND", style: "block" as const },
  { name: "PALOMA", subtitle: "EST. 2021", style: "serif" as const },
];

function LogoMark({ name, subtitle, style }: { name: string; subtitle: string; style: "serif" | "block" | "script" | "light" }) {
  const base = "flex flex-col items-center justify-center text-ink-soft transition group-hover:text-ink";
  const titleCls =
    style === "serif"
      ? "font-serif text-xl tracking-wide"
      : style === "block"
      ? "text-base font-bold tracking-[0.25em]"
      : style === "script"
      ? "font-serif text-xl italic"
      : "text-base font-light tracking-[0.3em]";
  return (
    <div className={`group ${base}`}>
      <span className={titleCls}>{name}</span>
      {subtitle && (
        <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.35em] text-ink-soft/70">
          {subtitle}
        </span>
      )}
    </div>
  );
}

const heroCopy = {
  eyebrow: "Cosmetic Glass Packaging · Made to Order",
  titleA: "Premium Glass Packaging",
  titleB: "for Beauty & Wellness Brands",
  body: "13+ Years Experience · OEM/ODM Customization · Factory Direct Supply",
  cta1: "Get Factory Quote",
  cta2: "Explore Products",
};

const whyStats = [
  { value: "13+", title: "Years Glass Packaging Experience", text: "Decades of manufacturing expertise serving indie & established beauty brands." },
  { value: "500+", title: "Global Customers", text: "Beauty brands across Europe, North America & Asia trust Veslapack." },
  { value: "OEM", title: "Custom Packaging Solution", text: "Bespoke molds, Pantone colors and full private-label support." },
  { value: "7-15", title: "Days Production", text: "Fast turnaround on stock molds with strict inline QC." },
  { value: "QC", title: "Strict QC System", text: "ISO 9001, AQL sampling & drop tests on every order." },
];

const ctaCopy = {
  titleA: "Ready to Bottle ",
  titleB: "Something Beautiful?",
  body: "Send us your capacity, finish and quantity — our packaging engineers will reply with recommendations and pricing within 24 hours.",
  cta: "Start Your Project",
};

export default function Home() {
  const hero = heroCopy;
  const why = whyStats;
  const cta = ctaCopy;
  const isRtl = false;
  const videoEl = useRef<HTMLVideoElement | null>(null);
  const [panoOpen, setPanoOpen] = useState(false);

  // Defer hero video until page is fully idle (12s) or first user interaction —
  // keeps the 11MB video out of the critical path (LCP/payload).
  useEffect(() => {
    let cancelled = false;
    let started = false;
    const startVideo = () => {
      if (started || cancelled || !videoEl.current) return;
      started = true;
      videoEl.current.src = "/factory-hero.mp4";
      videoEl.current.play().catch(() => {});
    };
    const t = window.setTimeout(startVideo, 12000);
    const kick = () => startVideo();
    window.addEventListener("scroll", kick, { once: true, passive: true });
    window.addEventListener("touchstart", kick, { once: true, passive: true });
    window.addEventListener("click", kick, { once: true });
    return () => {
      cancelled = true;
      window.clearTimeout(t);
      window.removeEventListener("scroll", kick);
      window.removeEventListener("touchstart", kick);
      window.removeEventListener("click", kick);
    };
  }, []);

  return (
    <div dir={isRtl ? "rtl" : "ltr"}>
      <Seo
        title="Vesla — China Glass Packaging Manufacturer | Cosmetic Bottle Supplier"
        description="Vesla provides premium glass packaging solutions for cosmetics, essential oils and beauty brands. OEM &amp; ODM available — dropper bottles, cream jars &amp; vials. Low MOQ 5,000 pcs, in-house decoration, DDP to EU &amp; USA."
        path="/"
      />
      <OrganizationSchema />
      <WebsiteSchema />

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/90 to-ink/70" />
        <video
          ref={(el) => { videoEl.current = el; }}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          loop
          playsInline
          preload="none"
          fetchPriority="high"
          poster="/images/hero-poster.webp"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink/70" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-gold-light">
            {hero.eyebrow}
          </p>
          <h1 className="font-serif text-4xl font-medium leading-tight text-white sm:text-6xl lg:text-7xl">
            {hero.titleA}
            <br />
            <span className="italic text-gold-light">{hero.titleB}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/85 sm:text-lg">
            {hero.body}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/products"
              className="w-full rounded-full bg-gold px-9 py-4 text-sm font-semibold tracking-wide text-white shadow-lg transition hover:bg-gold-dark sm:w-auto"
            >
              {hero.cta1}
            </Link>
            <Link
              to="/contact"
              className="w-full rounded-full border border-white/60 px-9 py-4 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition hover:border-gold hover:text-gold-light sm:w-auto"
            >
              {hero.cta2}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 hidden border-t border-white/15 bg-ink/40 backdrop-blur-md md:block">
          <div className="mx-auto grid max-w-6xl grid-cols-4 divide-x divide-white/10 px-6">
            {stats.map((s) => (
              <div key={s.label.en} className="py-6 text-center">
                <div className="font-serif text-3xl text-gold-light">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-cream/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Virtual Factory Tour (360°) ───────────────── */}
      <section className="bg-ink py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-light">360° Virtual Tour</p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-white sm:text-4xl">
              Walk Through Our Factory
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60">
              See our glass forming lines and decoration studios up close. Drag to look around — click the
              arrows to switch between scenes.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-2xl">
            {panoOpen ? (
              <iframe
                src="https://preview-lyj.aliyuncs.com/preview/b834db813e104d698bd00acb90b72a8a?lang=en"
                title="Vesla Virtual Factory Tour 360"
                className="h-[420px] w-full sm:h-[520px]"
                allow="fullscreen; gyroscope; accelerometer"
                allowFullScreen
                referrerPolicy="no-referrer"
              />
            ) : (
              <button
                type="button"
                onClick={() => setPanoOpen(true)}
                className="group relative block h-[420px] w-full cursor-pointer sm:h-[520px]"
                aria-label="Enter 360 virtual factory tour"
              >
                <img
                  src="/images/hero-poster.webp"
                  alt="Vesla cosmetic glass packaging factory - premium manufacturer"
                  width={800}
                  height={520}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/40 transition group-hover:bg-black/30">
                  <span className="flex flex-col items-center gap-3 rounded-2xl border border-white/30 bg-black/50 px-8 py-5 backdrop-blur-sm">
                    <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v10M7 12h10" strokeLinecap="round" />
                    </svg>
                    <span className="text-sm font-semibold text-white">
                      Enter 360° Factory Tour
                    </span>
                    <span className="text-xs text-white/70">Drag to look around</span>
                  </span>
                </span>
              </button>
            )}
          </div>
          <p className="mt-6 text-center text-xs text-white/40">
            Can't wait?{" "}
            <Link to="/contact" className="text-gold-light underline hover:text-gold">
              Book a live video factory tour
            </Link>{" "}
            with our engineers.
          </p>
        </div>
      </section>

      {/* ── Why Global Brands Choose Veslapack ────────── */}
      <section className="bg-cream-dark/60">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
              Why Veslapack
            </p>
            <h2 className="font-serif text-3xl font-medium text-ink sm:text-4xl">
              Why Global Brands Choose Veslapack
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {why.map((f) => (
              <div key={f.title} className="rounded-2xl bg-white p-7 text-center shadow-sm ring-1 ring-gold/15">
                <div className="font-serif text-4xl text-gold">{f.value}</div>
                <h3 className="mt-3 text-sm font-semibold leading-snug text-ink">{f.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-soft">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Products ────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
            Featured Products
          </p>
          <h2 className="font-serif text-3xl font-medium text-ink sm:text-5xl">
            Built for Your Market,
            <br className="hidden sm:block" /> Customized to Your Brand
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {featured.map((f) => (
            <Link
              key={f.key}
              to={f.link}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gold/15 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <LazyImage src={f.image} alt={`${f.title} wholesale manufacturer China - factory direct low MOQ`} className="h-full w-full object-cover" />
              </div>
              <div className="p-7">
                <h3 className="font-serif text-2xl text-ink">{f.title}</h3>
                <dl className="mt-4 space-y-2 text-sm">
                  <div>
                    <dt className="inline font-semibold text-gold-dark">Applications: </dt>
                    <dd className="inline text-ink-soft">{f.applications}</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-gold-dark">Advantage: </dt>
                    <dd className="inline text-ink-soft">{f.advantage}</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-gold-dark">Customization: </dt>
                    <dd className="inline text-ink-soft">{f.customization}</dd>
                  </div>
                </dl>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark">
                  View Range
                  <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Inside Veslapack Factory ─────────────────── */}
      <section className="bg-ink py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
              Factory Capability
            </p>
            <h2 className="font-serif text-3xl font-medium sm:text-4xl">Inside Veslapack Factory</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60">
              One integrated facility — from molten glass to decorated, export-ready bottles.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {factorySteps.map((s) => (
              <div key={s.title} className="group overflow-hidden rounded-2xl ring-1 ring-white/10">
                <div className="aspect-square overflow-hidden">
                  <LazyImage
                    src={s.img}
                    alt={`Inside Vesla Factory: ${s.title} - ISO 9001 certified manufacturer China`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg text-gold-light">{s.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center">
            <Link to="/about" className="text-sm font-semibold text-gold-light underline-offset-4 hover:underline">
              Take a virtual tour of our factory →
            </Link>
          </p>
        </div>
      </section>

      {/* ── From Idea To Production ──────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
            Customization Process
          </p>
          <h2 className="font-serif text-3xl font-medium text-ink sm:text-4xl">From Idea To Production</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-5">
          {processSteps.map((s) => (
            <div key={s.n} className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gold/15">
              <div className="font-serif text-3xl text-gold/70">{s.n}</div>
              <h3 className="mt-3 font-serif text-lg text-ink">{s.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-ink-soft">{s.desc}</p>
              {s.n !== "05" && (
                <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-gold md:block">→</span>
              )}
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/process" className="text-sm font-semibold text-gold-dark underline-offset-4 hover:underline">
            Learn more about our process →
          </Link>
        </div>
      </section>

      {/* ── Customer Case Study ──────────────────────── */}
      <section className="bg-cream-dark/60">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
              Customer Case Study
            </p>
            <h2 className="font-serif text-3xl font-medium text-ink sm:text-4xl">From Brief to Delivery</h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {caseStudies.map((c) => (
              <div key={c.industry} className="flex flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gold/15">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold-dark">{c.industry}</p>
                <h3 className="mt-4 font-serif text-lg text-ink">Need</h3>
                <p className="mt-1 text-sm text-ink-soft">{c.need}</p>
                <h3 className="mt-5 font-serif text-lg text-ink">Solution</h3>
                <p className="mt-1 text-sm text-ink-soft">{c.solution}</p>
                <p className="mt-auto pt-5 text-sm font-semibold text-gold-dark">✦ {c.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
        <FAQSchema items={faqItems} />
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">FAQ</p>
          <h2 className="font-serif text-3xl font-medium text-ink sm:text-4xl">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqItems.slice(0, 6).map((f) => (
            <details key={f.q.en} className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gold/15">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-serif text-lg text-ink">
                {f.q.en}
                <span className="shrink-0 text-gold transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.a.en}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── Client logo wall (typographic wordmarks) ──── */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <p className="mb-12 text-center text-xs font-semibold uppercase tracking-[0.3em] text-ink-soft">
          Trusted by beauty brands worldwide
        </p>
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4">
          {clientLogos.map((c) => (
            <LogoMark key={c.name + c.subtitle} {...c} />
          ))}
        </div>
      </section>

      {/* ── PDF Guide capture ──────────────────────────── */}
      <PdfGuideBanner />

      {/* ── Bottom CTA ───────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="font-serif text-3xl font-medium text-white sm:text-5xl">
            {cta.titleA}
            <span className="italic text-gold-light">{cta.titleB}</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream/70">{cta.body}</p>
          <Link
            to="/contact"
            className="mt-9 inline-block rounded-full bg-gold px-10 py-4 text-sm font-semibold tracking-wide text-white shadow-lg transition hover:bg-gold-dark"
          >
            {cta.cta}
          </Link>
        </div>
      </section>
    </div>
  );
}
