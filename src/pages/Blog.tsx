import { Link, useParams } from "react-router-dom";
import { useUI } from "../i18n/UIContext";
import Seo from "../components/Seo";
import { blogPosts, type BlogPost } from "../data/content";

function localizedTitle(p: BlogPost, locale: "en" | "kr" | "jp" | "tw") {
  return p.title[locale] ?? p.title.en;
}
function localizedExcerpt(p: BlogPost, locale: "en" | "kr" | "jp" | "tw") {
  return p.excerpt[locale] ?? p.excerpt.en;
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
                {localizedTitle(p, locale)}
              </h2>
              <p className="mt-2 flex-1 text-sm text-ink-soft">{localizedExcerpt(p, locale)}</p>
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
        title={localizedTitle(post, locale)}
        description={localizedExcerpt(post, locale)}
        path={`/blog/${post.slug}`}
      />
      <Link to="/blog" className="text-xs font-semibold uppercase tracking-widest text-gold-dark hover:underline">
        ← {copy[locale].eyebrow}
      </Link>
      <header className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
          {categoryLabels[post.category][locale]} · {post.readMinutes} {copy[locale].read}
        </p>
        <h1 className="mt-3 font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
          {localizedTitle(post, locale)}
        </h1>
        <p className="mt-4 text-sm text-ink-soft">
          {new Date(post.date).toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" })} · Vesla
        </p>
      </header>
      <div className="prose mt-10 text-[15px] leading-relaxed text-ink-soft">
        <p className="text-lg text-ink">{localizedExcerpt(post, locale)}</p>
        <p className="mt-6">
          {locale === "en" && "This guide is part of Vesla's ongoing series on cosmetic glass packaging. For project-specific questions, contact our packaging engineers at "}
          {locale === "kr" && "이 가이드는 Vesla의 화장품 유리 포장 시리즈의 일부입니다. 프로젝트별 문의는 "}
          {locale === "jp" && "本記事は Vesla の化粧品ガラス包装シリーズの一部です。プロジェクト別の質問は "}
          {locale === "tw" && "本篇為 Vesla 化妝品玻璃包裝系列文章之一。如需針對專案的諮詢,"}
          <a href="/contact" className="font-semibold text-gold-dark hover:underline">{locale === "en" ? "our team" : ""}</a>.
        </p>
        <p>
          {locale === "en" && "Our packaging engineers review every brief within 24 hours. For samples, we ship a labeled, fully decorated sample kit within 5–7 days via DHL or FedEx. For DDP shipping to the EU and US, we have dedicated routes through Hamburg, Rotterdam and Long Beach."}
          {locale === "kr" && "포장 엔지니어가 24시간 이내에 모든 문의를 검토합니다. 샘플은 5–7일 내 DHL 또는 FedEx로 라벨링 및 풀 데코레이션된 키트를 발송합니다. EU 및 미국 DDP 배송은 함부르크, 로테르담, 롱비치 전용 루트를 통해 진행됩니다."}
          {locale === "jp" && "パッケージエンジニアが 24 時間以内にすべてのお問い合わせをレビューします。サンプルは 5〜7 日で DHL または FedEx にてラベル・フル装飾済みキットを発送します。EU・米国向け DDP はハンブルク、ロッテルダム、ロングビーチの専用ルートで対応します。"}
          {locale === "tw" && "我們的包裝工程師會於 24 小時內回覆每份需求。打樣 5–7 天內以 DHL 或 FedEx 寄出已標籤、完整表面處理的樣品組。歐美 DDP 雙清走漢堡、鹿特丹、長灘專屬路線。"}
        </p>
        <p>
          {locale === "en" && "Want to read more? Browse the rest of our resources or jump straight into the product catalog."}
          {locale === "kr" && "더 많은 글을 읽고 싶으신가요? 다른 리소스를 둘러보거나 제품 카탈로그로 바로 이동하세요."}
          {locale === "jp" && "さらに記事をお読みになりたい方は、他のリソースをご覧いただくか、製品カタログへ直接お進みください。"}
          {locale === "tw" && "想看更多？請瀏覽其他資源,或直接前往產品型錄。"}
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
