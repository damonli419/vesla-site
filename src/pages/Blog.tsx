import { Link, useParams } from "react-router-dom";
import { useUI } from "../i18n/UIContext";
import Seo from "../components/Seo";
import { BlogPostSchema } from "../components/Schema";
import { blogPosts, type BlogPost } from "../data/content";

function local(p: BlogPost, field: "title" | "excerpt" | "body", locale: "en" | "kr" | "jp" | "tw") {
  return p[field][locale] ?? p[field].en;
}

const categoryLabels: Record<BlogPost["category"], { en: string; kr: string; jp: string; tw: string }> = {
  guide: { en: "Buyer's Guide", kr: "구매 가이드", jp: "バイヤーガイド", tw: "採購指南" },
  material: { en: "Materials", kr: "소재", jp: "素材", tw: "材質" },
  logistics: { en: "Logistics", kr: "물류", jp: "物流", tw: "物流" },
  trend: { en: "Trends", kr: "트렌드", jp: "トレンド", tw: "趨勢" },
};

const copy = {
  en: { eyebrow: "Resources", title: "Insights from the Glass Line", sub: "Practical guides for sourcing managers, founders and packaging designers.", read: "min read" },
  kr: { eyebrow: "리소스", title: "유리 라인에서의 인사이트", sub: "소싱 매니저, 창업자, 포장 디자이너를 위한 실용 가이드.", read: "분 소요" },
  jp: { eyebrow: "リソース", title: "ガラスラインからのインサイト", sub: "ソーシング担当者・創業者・パッケージデザイナー向け実務ガイド。", read: "分で読了" },
  tw: { eyebrow: "資源中心", title: "來自玻璃產線的觀察", sub: "為採購經理、品牌創辦人與包裝設計師準備的實務指南。", read: "分鐘閱讀" },
};

export function BlogIndex() {
  const { locale } = useUI();
  const c = copy[locale];
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <Seo
        title="Resources"
        description="Buyer's guides, material comparisons and trend reports on cosmetic glass packaging — written for indie beauty brand owners."
        path="/blog"
      />
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">{c.eyebrow}</p>
        <h1 className="font-serif text-4xl font-medium text-ink sm:text-5xl">{c.title}</h1>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{c.sub}</p>
      </div>

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((p) => (
          <Link
            key={p.slug}
            to={`/blog/${p.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gold/15 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-cream-dark to-cream">
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ink to-ink/70 p-8 text-center">
                <span className="font-serif text-2xl italic text-gold-light">
                  {categoryLabels[p.category][locale]}
                </span>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-gold-dark">
                {categoryLabels[p.category][locale]} · {p.readMinutes} {c.read}
              </p>
              <h2 className="mt-2 font-serif text-xl leading-snug text-ink group-hover:text-gold-dark">
                {local(p, "title", locale)}
              </h2>
              <p className="mt-2 flex-1 text-sm text-ink-soft">{local(p, "excerpt", locale)}</p>
              <p className="mt-4 text-xs text-ink-soft">{new Date(p.date).toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" })}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const { locale } = useUI();

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-serif text-4xl text-ink">Article not found</h1>
        <Link to="/blog" className="mt-6 inline-block text-sm font-semibold text-gold-dark hover:underline">
          ← Back to resources
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
      <Seo
        title={local(post, "title", locale)}
        description={local(post, "excerpt", locale)}
        path={`/blog/${post.slug}`}
      />
      <BlogPostSchema
        title={local(post, "title", locale)}
        excerpt={local(post, "excerpt", locale)}
        date={post.date}
        slug={post.slug}
      />
      <Link to="/blog" className="text-xs font-semibold uppercase tracking-widest text-gold-dark hover:underline">
        ← {copy[locale].eyebrow}
      </Link>
      <header className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
          {categoryLabels[post.category][locale]} · {post.readMinutes} {copy[locale].read}
        </p>
        <h1 className="mt-3 font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
          {local(post, "title", locale)}
        </h1>
        <p className="mt-4 text-sm text-ink-soft">
          {new Date(post.date).toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" })} · Vesla
        </p>
      </header>
      <div className="prose mt-10 text-[15px] leading-relaxed text-ink-soft">
        <p className="text-lg text-ink">{local(post, "excerpt", locale)}</p>
        {(local(post, "body", locale) || "").split("\n\n").filter(Boolean).map((para, i) => (
          <p key={i} className="mt-5">{para.trim()}</p>
        ))}
        <div className="mt-12 rounded-3xl bg-cream-dark/40 p-8 ring-1 ring-gold/15">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-md">
              <h3 className="font-serif text-xl text-ink">Ready to start your project?</h3>
              <p className="mt-2 text-sm text-ink-soft">
                Get a free technical consultation and a sample kit with our latest {post.category === "material" ? "glass bottles" : "packaging solutions"}.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact?source=blog_sample"
                className="rounded-full bg-gold px-7 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-gold-dark transition"
              >
                Request Free Sample
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-gold px-7 py-3 text-center text-sm font-semibold text-gold-dark hover:bg-gold hover:text-white transition"
              >
                Get a Quote
              </Link>
            </div>
          </div>
          <div className="mt-8 border-t border-gold/10 pt-6">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gold-dark mb-4">Related Categories</p>
            <div className="flex flex-wrap gap-2">
              <Link to="/serum-bottles" className="rounded-full bg-white px-4 py-1.5 text-xs font-medium text-ink ring-1 ring-gold/10 hover:ring-gold/30">Serum Bottles</Link>
              <Link to="/cream-jars" className="rounded-full bg-white px-4 py-1.5 text-xs font-medium text-ink ring-1 ring-gold/10 hover:ring-gold/30">Cream Jars</Link>
              <Link to="/glass-vials" className="rounded-full bg-white px-4 py-1.5 text-xs font-medium text-ink ring-1 ring-gold/10 hover:ring-gold/30">Glass Vials</Link>
              <Link to="/cosmetic-sets" className="rounded-full bg-white px-4 py-1.5 text-xs font-medium text-ink ring-1 ring-gold/10 hover:ring-gold/30">Cosmetic Sets</Link>
              <Link to="/certifications" className="rounded-full bg-white px-4 py-1.5 text-xs font-medium text-ink ring-1 ring-gold/10 hover:ring-gold/30">Certifications</Link>
              <Link to="/products" className="rounded-full bg-white px-4 py-1.5 text-xs font-medium text-ink ring-1 ring-gold/10 hover:ring-gold/30">Full Catalog →</Link>
            </div>
          </div>
        </div>

        <p className="mt-10 text-sm">
          {locale === "en" && "This guide is part of Vesla's ongoing series on cosmetic glass packaging. For project-specific questions, "}
          {locale === "kr" && "이 가이드는 Vesla의 화장품 유리 포장 시리즈의 일부입니다. 프로젝트별 문의는 "}
          {locale === "jp" && "本記事は Vesla の化粧品ガラス包装シリーズの一部です。プロジェクト別の質問は "}
          {locale === "tw" && "本篇為 Vesla 化妝品玻璃包裝系列文章之一。如需針對專案的諮詢，"}
          <Link to="/contact" className="font-semibold text-gold-dark hover:underline">
            {locale === "en" ? "contact our packaging engineers" : locale === "kr" ? "포장 엔지니어에게 문의하세요" : locale === "jp" ? "パッケージエンジニアにお問い合わせください" : "請聯繫我們的包裝工程師"}
          </Link>.
        </p>
      </div>
      <div className="mt-12 flex flex-col gap-4 sm:flex-row">
        <Link
          to="/products"
          className="flex-1 rounded-full bg-gold px-8 py-4 text-center text-sm font-semibold tracking-wide text-white shadow-md transition hover:bg-gold-dark"
        >
          {locale === "en" && "Browse Products"}
          {locale === "kr" && "제품 보기"}
          {locale === "jp" && "製品を見る"}
          {locale === "tw" && "瀏覽產品"}
        </Link>
        <Link
          to="/contact"
          className="flex-1 rounded-full border border-gold px-8 py-4 text-center text-sm font-semibold tracking-wide text-gold-dark transition hover:bg-gold hover:text-white"
        >
          {locale === "en" && "Request a Quote"}
          {locale === "kr" && "견적 요청"}
          {locale === "jp" && "見積もり依頼"}
          {locale === "tw" && "索取報價"}
        </Link>
      </div>
    </article>
  );
}
