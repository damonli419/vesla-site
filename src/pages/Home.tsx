import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useUI } from "../i18n/UIContext";
import LazyImage from "../components/LazyImage";
import Seo from "../components/Seo";
import { OrganizationSchema, WebsiteSchema } from "../components/Schema";
import PdfGuideBanner from "../components/PdfGuideBanner";

const categories = [
  {
    key: "dropper",
    image: "/images/cat-dropper.webp",
    blurb: "Serum & facial oil droppers with 20+ cap and pipette combinations.",
  },
  {
    key: "vial",
    image: "https://sc02.alicdn.com/kf/H27e01174162a48ce8efb4aa97bdb82c07.jpg",
    blurb: "Roll-on vials, sample tubes and injection glass vials for serums, perfumes and wellness.",
  },
  {
    key: "jar",
    image: "https://sc02.alicdn.com/kf/H609e157916a5449fbf4c69ca8d800bb2m.jpg",
    blurb: "Thick-wall cream jars from 15 g to 120 g with premium lid options.",
  },
  {
    key: "oil",
    image: "/images/cat-oil.webp",
    blurb: "Euro rounds, roll-ons and vials for aromatherapy & wellness lines.",
  },
  {
    key: "set",
    image: "https://sc02.alicdn.com/kf/Hba8e5303cb1d4ac9afaf69ef5ec30362e.jpg",
    blurb: "Coordinated bottle + jar collections in matching gradient finishes — one brand, one look.",
  },
] as const;

const stats = [
  { value: "16+", label: "Years Manufacturing" },
  { value: "300+", label: "Stock Molds" },
  { value: "40+", label: "Export Countries" },
  { value: "5,000", label: "Minimum Order Qty" },
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
  titleA: "Glass That Tells",
  titleB: "Your Brand's Story",
  body: "Vesla partners with indie and emerging beauty brands across Europe and North America to design, decorate and deliver custom glass packaging — from a single sample to a million units.",
  cta1: "Explore Products",
  cta2: "Request a Quote",
};

const whyCopy = [
  { title: "Built for Small Brands", text: "MOQs from 5,000 pcs on stock molds and low-cost sampling, so you can launch without warehouse-scale commitments.", icon: "◈" },
  { title: "In-House Decoration", text: "Frosting, spray coating, silk screen, hot stamping and electroplating under one roof — full color control, one QC standard.", icon: "✦" },
  { title: "Export-Ready Logistics", text: "EXW, FOB or DDP to the EU and USA. Drop-test-certified export cartons and experienced freight partners on both coasts.", icon: "❖" },
];

const ctaCopy = {
  titleA: "Ready to Bottle ",
  titleB: "Something Beautiful?",
  body: "Send us your capacity, finish and quantity — our packaging engineers will reply with recommendations and pricing within 24 hours.",
  cta: "Start Your Project",
};

export default function Home() {
  const { catLabel } = useUI();
  const hero = heroCopy;
  const why = whyCopy;
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
        title="Vesla | Custom Cosmetic Glass Packaging Manufacturer for Indie Beauty Brands"
        description="Custom glass dropper bottles, cream jars, essential oil bottles &amp; vials for indie beauty brands. Low MOQ 5,000 pcs, in-house decoration, free sample kit, DDP to EU &amp; USA. ISO 9001 certified Guangzhou factory."
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
          fetchpriority="high"
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
                  alt="Vesla factory virtual tour preview"
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

      {/* ── Categories ───────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
            Our Collections
          </p>
          <h2 className="font-serif text-3xl font-medium text-ink sm:text-5xl">
            Core Collections,
            <br className="hidden sm:block" /> Endless Customization
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.key}
              to={`/products?category=${c.key}`}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gold/15 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <LazyImage
                  src={c.image}
                  alt={catLabel(c.key)}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="p-7">
                <h3 className="font-serif text-2xl text-ink">{catLabel(c.key)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.blurb}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark">
                  View collection
                  <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Why Vesla ───────────────────────────────── */}
      <section className="bg-cream-dark/60">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-3 lg:px-8">
          {why.map((f) => (
            <div key={f.title} className="text-center lg:text-left">
              <div className="mb-5 text-3xl text-gold">{f.icon}</div>
              <h3 className="font-serif text-2xl text-ink">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.text}</p>
            </div>
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
