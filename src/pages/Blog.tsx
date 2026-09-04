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

const copy = {
  eyebrow: "Resources",
  title: "Insights from the Glass Line",
  sub: "Practical guides for sourcing managers, founders and packaging designers.",
  read: "min read",
};

export function BlogIndex() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <Seo
        title="Resources"
        description="Buyer's guides, material comparisons and trend reports on cosmetic glass packaging — written for indie beauty brand owners."
        path="/blog"
      />
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">{copy.eyebrow}</p>
        <h1 className="font-serif text-4xl font-medium text-ink sm:text-5xl">{copy.title}</h1>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{copy.sub}</p>
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
        {(post.body.en || "").split("\n\n").filter(Boolean).map((para, i) => (
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
