import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products, type Product } from "../data/products";
import { useUI } from "../i18n/UIContext";
import Seo from "../components/Seo";
import LazyImage from "../components/LazyImage";
import { trackEvent } from "../components/Analytics";
import { ProductSchema, OrganizationSchema } from "../components/Schema";
import { whatsappLink } from "../config/site";

function localizedName(p: Product, locale: "en" | "kr" | "jp" | "tw") {
  if (locale === "en") return p.name;
  return p.nameI18n[locale] ?? p.name;
}

function localizedDesc(p: Product, locale: "en" | "kr" | "jp" | "tw") {
  if (locale === "en") return p.description;
  return p.descriptionI18n[locale] ?? p.description;
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { t, catLabel, locale } = useUI();
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
    if (product) trackEvent("view_product", { id: product.id });
  }, [id, product]);

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <Seo title="Product not found" description="The requested product could not be found." path="/products" />
        <h1 className="font-serif text-4xl text-ink">{t("common.productNotFound")}</h1>
        <Link to="/products" className="mt-6 inline-block text-sm font-semibold text-gold-dark hover:underline">
          ← {t("common.backToProducts")}
        </Link>
      </div>
    );
  }

  const specs: [string, string][] = [
    [t("spec.capacity"), product.capacity],
    [t("spec.material"), product.material],
    [t("spec.neck"), product.neck],
    [t("spec.moq"), product.moq],
    [t("spec.leadTime"), product.leadTime],
    [t("spec.decoration"), product.decoration],
    [t("spec.sampling"), t("spec.sampling.value")],
    [t("spec.incoterms"), t("spec.incoterms.value")],
  ];

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
      <Seo
        title={`${localizedName(product, locale)} | Custom Cosmetic Glass Packaging — Vesla`}
        description={localizedDesc(product, locale).slice(0, 155)}
        path={`/products/${product.id}`}
        keywords={product.seoKeywords?.join(", ")}
      />
      <ProductSchema product={product} />
      <OrganizationSchema />

      <nav className="mb-10 text-xs uppercase tracking-widest text-ink-soft">
        <Link to="/" className="hover:text-gold-dark">Home</Link>
        <span className="mx-2 text-gold">/</span>
        <Link to="/products" className="hover:text-gold-dark">{t("nav.products")}</Link>
        <span className="mx-2 text-gold">/</span>
        <Link to={`/products?category=${product.category}`} className="hover:text-gold-dark">
          {catLabel(product.category)}
        </Link>
      </nav>

      <div className="grid gap-14 lg:grid-cols-2">
        {/* ── Gallery ──────────────────────────── */}
        <div>
          <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-gold/15">
            <LazyImage
              src={product.gallery[activeImage]}
              alt={`${localizedName(product, locale)} — view ${activeImage + 1}`}
              className="aspect-square w-full object-cover"
              eager
            />
          </div>
          {product.gallery.length > 1 && (
            <div className="mt-4 grid grid-cols-4 gap-3">
              {product.gallery.map((src, i) => (
                <button
                  key={src + i}
                  onClick={() => setActiveImage(i)}
                  className={`overflow-hidden rounded-xl bg-white ring-1 transition ${
                    activeImage === i ? "ring-2 ring-gold" : "ring-gold/15 hover:ring-gold/40"
                  }`}
                  aria-label={`View image ${i + 1}`}
                >
                  <LazyImage
                    src={src}
                    alt={`thumbnail ${i + 1}`}
                    className="aspect-square w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── Info ─────────────────────────────── */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
            {catLabel(product.category)}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
            {localizedName(product, locale)}
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
            {localizedDesc(product, locale)}
          </p>

          <ul className="mt-7 space-y-2.5">
            {product.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-ink">
                <span className="mt-0.5 text-gold">✦</span> {f}
              </li>
            ))}
          </ul>

          <div className="mt-10 overflow-hidden rounded-2xl ring-1 ring-gold/20">
            <table className="w-full text-sm">
              <tbody>
                {specs.map(([k, v], i) => (
                  <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-cream-dark/40"}>
                    <td className="w-40 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-ink-soft">
                      {k}
                    </td>
                    <td className="px-5 py-3.5 font-medium text-ink">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              to={`/contact?product=${encodeURIComponent(product.name)}`}
              onClick={() => trackEvent("click_inquiry", { product: product.id })}
              className="flex-1 rounded-full bg-gold px-8 py-4 text-center text-sm font-semibold tracking-wide text-white shadow-md transition hover:bg-gold-dark"
            >
              {t("common.sendInquiry")}
            </Link>
            <a
              href={whatsappLink(`Hi Vesla, I'm interested in the ${product.name}.`)}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("click_whatsapp", { product: product.id })}
              className="flex-1 rounded-full border border-gold px-8 py-4 text-center text-sm font-semibold tracking-wide text-gold-dark transition hover:bg-gold hover:text-white"
            >
              {t("common.chatWhatsapp")}
            </a>
          </div>
          <p className="mt-4 text-xs text-ink-soft">
            Free spec sheet & quotation within 24 hours · Physical samples available
          </p>
        </div>
      </div>

      {/* ── SEO keyword-rich section ───────────────── */}
      {product.seoTags && product.seoTags.length > 0 && (
        <section className="mt-16 border-t border-gold/15 pt-12">
          <h2 className="font-serif text-xl text-ink mb-4">
            {locale === "en" && "About This Product"}
            {locale === "kr" && "제품 정보"}
            {locale === "jp" && "この製品について"}
            {locale === "tw" && "關於此產品"}
          </h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {product.seoTags.map((tag) => (
              <span key={tag} className="inline-block rounded-full border border-gold/20 px-3 py-1 text-xs text-ink-soft bg-cream-dark/30">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-sm leading-relaxed text-ink-soft max-w-3xl">
            {product.seoKeywords?.join(" · ") || ""}
          </p>
        </section>
      )}

      {related.length > 0 && (
        <section className="mt-28">
          <h2 className="mb-10 font-serif text-3xl text-ink">{t("common.youMayLike")}</h2>
          <div className="grid gap-7 sm:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.id}
                to={`/products/${p.id}`}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gold/15 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-square overflow-hidden bg-cream-dark/40">
                  <LazyImage
                    src={p.image}
                    alt={localizedName(p, locale)}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg text-ink">{localizedName(p, locale)}</h3>
                  <p className="mt-1.5 text-xs text-ink-soft">
                    {p.capacity} · {p.material}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
