import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  products,
  materials,
  capacityGroups,
  type Category,
} from "../data/products";
import { useUI } from "../i18n/UIContext";
import LazyImage from "../components/LazyImage";
import Seo from "../components/Seo";
import { ProductListSchema, OrganizationSchema } from "../components/Schema";

function FilterGroup({
  title,
  options,
  selected,
  onToggle,
}: {
  title: string;
  options: { value: string; label: string }[];
  selected: string[];
  onToggle: (v: string) => void;
}) {
  return (
    <div className="border-b border-gold/15 pb-6">
      <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink">{title}</h4>
      <div className="space-y-2.5">
        {options.map((o) => (
          <label key={o.value} className="flex cursor-pointer items-center gap-3 text-sm text-ink-soft hover:text-ink">
            <input
              type="checkbox"
              checked={selected.includes(o.value)}
              onChange={() => onToggle(o.value)}
              className="h-4 w-4 rounded border-gold/40 accent-[#c8a96e]"
            />
            {o.label}
          </label>
        ))}
      </div>
    </div>
  );
}

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") as Category | null;
  const { t, catLabel } = useUI();

  const [selMaterials, setSelMaterials] = useState<string[]>([]);
  const [selCapacities, setSelCapacities] = useState<string[]>([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const toggle = (setter: React.Dispatch<React.SetStateAction<string[]>>) => (v: string) =>
    setter((prev) => (prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]));

  const filtered = useMemo(
    () => {
      /** Extract all numeric capacities (ml or g) from a capacity string */
      const parseMl = (cap: string): number[] => {
        const nums: number[] = [];
        const re = /(\d+(?:\.\d+)?)/g;
        let m: RegExpExecArray | null;
        while ((m = re.exec(cap)) !== null) {
          nums.push(parseFloat(m[1]));
        }
        return nums;
      };

      return products.filter((p) => {
        if (category && p.category !== category) return false;
        if (selMaterials.length && !selMaterials.includes(p.material)) return false;

        if (selCapacities.length) {
          // "set" filter: match by capacityGroup label
          if (selCapacities.includes("set") && p.capacityGroup === "set") return true;
          // Numeric range filters: extract ml values and check overlap
          const vals = parseMl(p.capacity);
          const ranges = selCapacities.filter((c) => c !== "set");
          if (ranges.length > 0) {
            const inRange = vals.some((v) =>
              ranges.some((r) => {
                if (r === "mini") return v <= 15;
                if (r === "standard") return v >= 20 && v <= 60;
                if (r === "large") return v >= 60;
                return false;
              })
            );
            if (!inRange) return false;
          }
        }

        return true;
      });
    },
    [category, selMaterials, selCapacities]
  );

  const clearAll = () => {
    setSelMaterials([]);
    setSelCapacities([]);
    setSearchParams({});
  };

  const filters = (
    <div className="space-y-6">
      <div className="border-b border-gold/15 pb-6">
        <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink">Category</h4>
        <div className="space-y-2.5">
          {(["dropper", "jar", "oil", "set"] as Category[]).map((c) => (
            <label key={c} className="flex cursor-pointer items-center gap-3 text-sm text-ink-soft hover:text-ink">
              <input
                type="radio"
                name="category"
                checked={category === c}
                onChange={() => setSearchParams({ category: c })}
                className="h-4 w-4 accent-[#c8a96e]"
              />
              {catLabel(c)}
            </label>
          ))}
          <label className="flex cursor-pointer items-center gap-3 text-sm text-ink-soft hover:text-ink">
            <input
              type="radio"
              name="category"
              checked={!category}
              onChange={() => setSearchParams({})}
              className="h-4 w-4 accent-[#c8a96e]"
            />
            {t("filter.allCategories")}
          </label>
        </div>
      </div>

      <FilterGroup
        title="Material"
        options={materials.map((m) => ({ value: m, label: m }))}
        selected={selMaterials}
        onToggle={toggle(setSelMaterials)}
      />
      <FilterGroup
        title="Capacity"
        options={capacityGroups.map((c) => ({ value: c.value, label: c.label }))}
        selected={selCapacities}
        onToggle={toggle(setSelCapacities)}
      />
      <button onClick={clearAll} className="text-sm font-semibold text-gold-dark underline-offset-4 hover:underline">
        {t("common.clearFilters")}
      </button>
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
      <div className="mb-12">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">Catalog</p>
        <h1 className="font-serif text-4xl font-medium text-ink sm:text-5xl">
          {category ? catLabel(category) : t("products.title")}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">{t("products.subtitle")}</p>
      </div>
      <Seo
        title="Cosmetic Glass Bottles Wholesale | Custom Packaging Supplier — Vesla"
        description="Wholesale cosmetic glass bottles: dropper bottles, cream jars, essential oil bottles, perfume vials &amp; gradient sets. Custom OEM/ODM from a China manufacturer. Low MOQ 5,000 pcs, DDP to EU &amp; USA."
        path="/products"
      />
      <ProductListSchema items={filtered} />
      <OrganizationSchema />

      <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
        {/* mobile filter toggle */}
        <button
          className="mb-6 w-full rounded-full border border-gold/40 py-3 text-sm font-semibold text-ink lg:hidden"
          onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
        >
          {mobileFiltersOpen ? "Hide Filters" : "Show Filters"} ({filtered.length} items)
        </button>
        {mobileFiltersOpen && <div className="mb-10 rounded-2xl bg-white p-6 ring-1 ring-gold/15 lg:hidden">{filters}</div>}

        <aside className="hidden lg:block">{filters}</aside>

        <div>
          <p className="mb-6 hidden text-xs uppercase tracking-widest text-ink-soft lg:block">
            {filtered.length} {filtered.length === 1 ? "product" : "products"}
          </p>

          {filtered.length === 0 ? (
            <div className="rounded-2xl bg-white p-16 text-center ring-1 ring-gold/15">
              <p className="font-serif text-2xl text-ink">{t("products.noMatch")}</p>
              <button onClick={clearAll} className="mt-4 text-sm font-semibold text-gold-dark hover:underline">
                {t("common.clearFilters")}
              </button>
            </div>
          ) : (
            <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((p) => (
                <Link
                  key={p.id}
                  to={`/products/${p.seoSlug || p.id}`}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gold/15 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="aspect-square overflow-hidden bg-cream-dark/40">
                    <LazyImage
                      src={p.image}
                      alt={`${p.name} wholesale manufacturer China - factory direct low MOQ`}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-gold-dark">
                      {catLabel(p.category)}
                    </p>
                    <h3 className="mt-1.5 font-serif text-lg leading-snug text-ink">{p.name}</h3>
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-soft">
                      <span>{p.capacity}</span>
                      <span>·</span>
                      <span>{p.material}</span>
                    </div>
                    <p className="mt-3 text-xs text-ink-soft">
                      MOQ <span className="font-semibold text-ink">{p.moq}</span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
