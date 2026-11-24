import { useMemo, useState, type ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import { BlogPostSchema } from "../components/Schema";
import { blogPosts, type BlogPost } from "../data/content";
import { products } from "../data/products";

const recommendedProducts = [
  products.find(p => p.id === "heart-dropper-30ml"),
  products.find(p => p.id === "flat-square-dropper"),
  products.find(p => p.id === "square-serum-dropper")
].filter(Boolean);

const categoryLabels: Record<BlogPost["category"], string> = {
  guide: "Buyer's Guide",
  material: "Materials",
  logistics: "Logistics",
  trend: "Trends",
};

// Contextual keyword → internal page mapping. First occurrence per paragraph is
// linked (SEO internal-link matrix: blog bodies → money/category/product pages).
const inlineLinks: { pattern: RegExp; to: string; label: string }[] = [
  { pattern: /dropper bottles?/i, to: "/serum-bottles", label: "dropper bottles" },
  { pattern: /serum bottles?/i, to: "/serum-bottles", label: "serum bottles" },
  { pattern: /cream jars?/i, to: "/cream-jars", label: "cream jars" },
  { pattern: /glass vials?/i, to: "/glass-vials", label: "glass vials" },
  { pattern: /cosmetic packaging sets?|packaging sets?/i, to: "/cosmetic-sets", label: "cosmetic packaging sets" },
  { pattern: /low (?:minimum order|MOQ)/i, to: "/low-moq-cosmetic-packaging", label: "low MOQ cosmetic packaging" },
  { pattern: /custom (?:glass )?(?:packaging|bottles?)/i, to: "/custom-cosmetic-packaging-manufacturer", label: "custom cosmetic packaging" },
  { pattern: /amber glass/i, to: "/products/amber-glass-serum-vial-dropper-bottle-supplier", label: "amber glass serum vials" },
];

function renderInlineMarkdown(text: string, allowAutoLink = true): ReactNode[] {
  // Parse [label](url) and **bold** tokens first.
  const tokenRe = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g;
  const parts = text.split(tokenRe);
  let autoLinked = !allowAutoLink;

  return parts.map((part, idx) => {
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      const internal = href.startsWith("https://www.veslapack.com")
        ? href.replace("https://www.veslapack.com", "") || "/"
        : href.startsWith("/")
        ? href
        : null;
      if (internal) {
        return (
          <Link key={idx} to={internal} className="font-medium text-gold-dark underline decoration-gold/40 underline-offset-2 hover:text-gold">
            {label}
          </Link>
        );
      }
      return (
        <a key={idx} href={href} target="_blank" rel="noreferrer" className="font-medium text-gold-dark underline decoration-gold/40 underline-offset-2 hover:text-gold">
          {label}
        </a>
      );
    }

    const boldMatch = part.match(/^\*\*([^*]+)\*\*$/);
    if (boldMatch) {
      return <strong key={idx} className="font-semibold text-ink">{boldMatch[1]}</strong>;
    }

    if (!autoLinked) {
      let best: { index: number; length: number; to: string; label: string } | null = null;
      for (const rule of inlineLinks) {
        const m = part.match(rule.pattern);
        if (m && m.index !== undefined && (best === null || m.index < best.index)) {
          best = { index: m.index, length: m[0].length, to: rule.to, label: m[0] };
        }
      }
      if (best) {
        autoLinked = true;
        return (
          <span key={idx}>
            {part.slice(0, best.index)}
            <Link to={best.to} className="font-medium text-gold-dark underline decoration-gold/40 underline-offset-2 hover:text-gold">
              {best.label}
            </Link>
            {part.slice(best.index + best.length)}
          </span>
        );
      }
    }

    return <span key={idx}>{part}</span>;
  });
}

function RichBlogBody({ body }: { body: string }) {
  const blocks = body.split("\n\n").map((b) => b.trim()).filter(Boolean);
  return (
    <>
      {blocks.map((block, i) => {
        const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);

        // Markdown table
        if (lines.length >= 2 && lines[0].startsWith("|") && lines[1].startsWith("|")) {
          const parseRow = (r: string) => r.replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
          const headers = parseRow(lines[0]);
          const rows = lines.slice(2).map(parseRow);
          return (
            <div key={i} className="my-8 overflow-x-auto rounded-2xl ring-1 ring-gold/15">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-ink text-white">
                    {headers.map((h, hi) => (
                      <th key={hi} className="px-4 py-3 text-xs font-semibold uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gold/10 bg-white">
                  {rows.map((row, ri) => (
                    <tr key={ri} className="hover:bg-cream/30">
                      {row.map((cell, ci) => (
                        <td key={ci} className="px-4 py-3 text-ink-soft">{renderInlineMarkdown(cell, false)}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        // Heading + optional trailing lines in same block
        if (lines[0].startsWith("### ") || lines[0].startsWith("## ")) {
          const headingText = lines[0].replace(/^#{2,3}\s+/, "");
          const rest = lines.slice(1);
          return (
            <div key={i} className="mt-9">
              <h2 className="font-serif text-2xl font-medium text-ink">{headingText}</h2>
              {rest.length > 0 && (
                rest.every((l) => /^-\s+/.test(l)) ? (
                  <ul className="mt-3 list-disc space-y-2 pl-5">
                    {rest.map((l, li) => (
                      <li key={li}>{renderInlineMarkdown(l.replace(/^-\s+/, ""))}</li>
                    ))}
                  </ul>
                ) : rest.every((l) => /^\d+\.\s+/.test(l)) ? (
                  <ol className="mt-3 list-decimal space-y-2 pl-5">
                    {rest.map((l, li) => (
                      <li key={li}>{renderInlineMarkdown(l.replace(/^\d+\.\s+/, ""))}</li>
                    ))}
                  </ol>
                ) : (
                  <p className="mt-3">{renderInlineMarkdown(rest.join(" "))}</p>
                )
              )}
            </div>
          );
        }

        // Pure bullet list
        if (lines.every((l) => /^-\s+/.test(l))) {
          return (
            <ul key={i} className="mt-5 list-disc space-y-2 pl-5">
              {lines.map((l, li) => (
                <li key={li}>{renderInlineMarkdown(l.replace(/^-\s+/, ""))}</li>
              ))}
            </ul>
          );
        }

        // Pure numbered list
        if (lines.every((l) => /^\d+\.\s+/.test(l))) {
          return (
            <ol key={i} className="mt-5 list-decimal space-y-2 pl-5">
              {lines.map((l, li) => (
                <li key={li}>{renderInlineMarkdown(l.replace(/^\d+\.\s+/, ""))}</li>
              ))}
            </ol>
          );
        }

        return <p key={i} className="mt-5">{renderInlineMarkdown(block)}</p>;
      })}
    </>
  );
}

const copy = {
  eyebrow: "Resources",
  title: "Insights from the Glass Line",
  sub: "Practical guides for sourcing managers, founders and packaging designers.",
  read: "min read",
};

export function BlogIndex() {
  const [selectedCat, setSelectedCat] = useState<"all" | BlogPost["category"]>("all");
  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return [...blogPosts]
      .sort((a, b) => (a.date < b.date ? 1 : -1))
      .filter((p) => {
        if (selectedCat !== "all" && p.category !== selectedCat) return false;
        if (!q) return true;
        return (
          p.title.en.toLowerCase().includes(q) ||
          p.excerpt.en.toLowerCase().includes(q) ||
          p.keywords.some((k) => k.toLowerCase().includes(q))
        );
      });
  }, [selectedCat, query]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <Seo
        title="Resources"
        description="Buyer's guides, material comparisons and trend reports on cosmetic glass packaging — written for indie beauty brand owners."
        path="/blog"
      />
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">{copy.eyebrow}</p>
          <h1 className="font-serif text-4xl font-medium text-ink sm:text-5xl">{copy.title}</h1>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{copy.sub}</p>
        </div>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search guides (e.g. DDP, MOQ, frosting)..."
          aria-label="Search blog articles"
          className="w-full rounded-full border border-gold/25 bg-white px-5 py-2.5 text-sm text-ink placeholder:text-ink-soft/60 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 md:w-72"
        />
      </div>

      <div className="mb-10 flex flex-wrap gap-2">
        {(["all", "guide", "material", "logistics", "trend"] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCat(cat)}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
              selectedCat === cat
                ? "bg-ink text-white"
                : "bg-white text-ink-soft ring-1 ring-gold/20 hover:text-ink"
            }`}
          >
            {cat === "all" ? `All Guides (${blogPosts.length})` : categoryLabels[cat]}
          </button>
        ))}
      </div>

      {filteredPosts.length === 0 ? (
        <div className="rounded-2xl bg-white p-12 text-center ring-1 ring-gold/15">
          <p className="text-sm text-ink-soft">No guides match "{query}".</p>
          <button
            type="button"
            onClick={() => { setSelectedCat("all"); setQuery(""); }}
            className="mt-4 text-xs font-semibold text-gold-dark hover:underline"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gold/15 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-cream-dark to-cream">
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ink to-ink/70 p-8 text-center">
                  <span className="font-serif text-2xl italic text-gold-light">
                    {categoryLabels[p.category]}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-gold-dark">
                  {categoryLabels[p.category]} · {p.readMinutes} {copy.read}
                </p>
                <h2 className="mt-2 font-serif text-xl leading-snug text-ink group-hover:text-gold-dark">
                  {p.title.en}
                </h2>
                <p className="mt-2 flex-1 text-sm text-ink-soft">{p.excerpt.en}</p>
                <p className="mt-4 text-xs text-ink-soft">{new Date(p.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

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
        title={post.title.en}
        description={post.excerpt.en}
        path={`/blog/${post.slug}`}
      />
      <BlogPostSchema
        title={post.title.en}
        excerpt={post.excerpt.en}
        date={post.date}
        slug={post.slug}
      />
      <Link to="/blog" className="text-xs font-semibold uppercase tracking-widest text-gold-dark hover:underline">
        ← {copy.eyebrow}
      </Link>
      <header className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
          {categoryLabels[post.category]} · {post.readMinutes} {copy.read}
        </p>
        <h1 className="mt-3 font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
          {post.title.en}
        </h1>
        <p className="mt-4 text-sm text-ink-soft">
          {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} · Vesla
        </p>
      </header>
      <div className="prose mt-10 text-[15px] leading-relaxed text-ink-soft">
        <p className="text-lg text-ink">{post.excerpt.en}</p>
        <RichBlogBody body={post.body.en || ""} />
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
          <div className="mt-8 border-t border-gold/10 pt-8">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gold-dark mb-5">Top Packaging Recommendations</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {recommendedProducts.map((rp) => (
                rp && (
                  <Link 
                    key={rp.id}
                    to={`/products/${rp.seoSlug}`}
                    className="group block rounded-2xl bg-white p-4 ring-1 ring-gold/10 hover:ring-gold/30 transition shadow-sm"
                  >
                    <div className="aspect-square overflow-hidden rounded-lg bg-cream-dark/30">
                      <img src={rp.image} alt={rp.name} className="h-full w-full object-cover transition group-hover:scale-105" />
                    </div>
                    <p className="mt-3 text-xs font-bold text-ink group-hover:text-gold-dark truncate">{rp.name}</p>
                    <p className="mt-1 text-[10px] text-ink-soft">MOQ: {rp.moq}</p>
                  </Link>
                )
              ))}
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
          This guide is part of Vesla's ongoing series on cosmetic glass packaging. For project-specific questions,{" "}
          <Link to="/contact" className="font-semibold text-gold-dark hover:underline">
            contact our packaging engineers
          </Link>
          .
        </p>
      </div>
      <div className="mt-12 flex flex-col gap-4 sm:flex-row">
        <Link
          to="/products"
          className="flex-1 rounded-full bg-gold px-8 py-4 text-center text-sm font-semibold tracking-wide text-white shadow-md transition hover:bg-gold-dark"
        >
          Browse Products
        </Link>
        <Link
          to="/contact"
          className="flex-1 rounded-full border border-gold px-8 py-4 text-center text-sm font-semibold tracking-wide text-gold-dark transition hover:bg-gold hover:text-white"
        >
          Request a Quote
        </Link>
      </div>
    </article>
  );
}
