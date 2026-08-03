import fs from "fs";

const c = fs.readFileSync("src/data/content.ts", "utf-8");

// Step 1: Find blogPosts closing — it's the FIRST `];` that appears after all blog post content
// The faqItems array starts with "export const faqItems"
const faqDecl = c.indexOf("export const faqItems");
// Find the `];` right before faqDecl (this closes blogPosts)
const blogIdx = c.lastIndexOf("];", faqDecl);
console.log("BlogPosts close at:", blogIdx, "FAQ at:", faqDecl);

// Step 2: Find faqItems closing
const faqEnd = c.indexOf("];", faqDecl + 30);
console.log("FAQ close at:", faqEnd);

// Step 3: Insert 3 blog posts right before blogPosts closing
const newBlogs = `
  {
    slug: "small-batch-glass-bottle-200-units",
    title: { en: "Small Batch Glass Bottles (200 Units): What's Actually Possible in 2026", kr: "소량 유리병 (200개)", jp: "小ロットガラスボトル（200本）", tw: "小批量玻璃瓶（200支）" },
    excerpt: { en: "A Reddit founder needed 200 glass bottles for a perfume oil launch. Every supplier said minimum 5,000. Here's what actually works for sub-1,000-unit orders without going broke.", kr: "레딧 창업자 200개 필요. 모두 최소 5,000개.", jp: "Reddit創業者200本必要。全員最低5,000本。", tw: "Reddit 創業者需要 200 瓶，每家都說最低 5,000。" },
    body: { en: "A thread on r/smallbusiness asked: 'Looking for small-batch glass bottle manufacturer (200 units) for perfume oil brand.' The comments were unhelpful. There's a better answer — and it's not as grim as Reddit makes it sound.\\n\\nThe fundamental problem: glass manufacturing involves fixed setup costs. The furnace runs whether you're making 200 bottles or 20,000. But three legitimate paths exist. Path 1: Stock inventory. Manufacturers keep popular sizes in stock — buy 200 units at 40% premium. Path 2: Distributors like SKS Bottle and Berlin Packaging resell at 2-3x factory price with next-day US shipping. Path 3: Co-production — piggyback onto another brand's production run at near-MOQ pricing.\\n\\nFor custom-decorated 200 units, buy 500 stock bottles, find a local decoration shop, decorate and assemble yourself. Total: roughly $1,200-1,600 for 500 finished bottles versus $15,000 for a full MOQ run.", kr: "本文", jp: "本文", tw: "本文" },
    date: "2026-08-03", readMinutes: 6, category: "guide",
    keywords: ["small batch glass bottles 200 units", "low MOQ perfume bottle supplier", "sample quantity cosmetic packaging", "sub-1000 glass bottle order", "indie perfume launch packaging"],
  },
  {
    slug: "dropper-bottle-vs-airless-pump-packaging",
    title: { en: "Dropper Bottle vs Airless Pump: Which Packaging Protects Your Serum Better?", kr: "드롭퍼 vs 에어리스 펌프", jp: "ドロッパー vs エアレス", tw: "滴管瓶 vs 真空瓶" },
    excerpt: { en: "Reddit's r/SkincareAddicts sparked a debate: do dropper bottles degrade active ingredients with every use? We break down the actual science — not the Reddit assumptions.", kr: "레딧 논쟁: 드롭퍼가 세럼을 저하시킬까?", jp: "Reddit論争：ドロッパーは劣化させるか？", tw: "Reddit 爭論：滴管瓶會破壞活性成分嗎？" },
    body: { en: "A thread on r/SkincareAddicts debated whether dropper packaging actively degrades expensive active ingredients. The top comment claimed droppers 'expose serum to oxygen with every use' while airless pumps 'protect the formula completely.' The reality is more nuanced.\\n\\nAirless pumps DO protect against air exposure during use — a vacuum mechanism pushes product upward with no outside air entering. For L-ascorbic acid, retinol, and resveratrol, airless pumps can meaningfully extend shelf life. But they're not airtight: the dispensing nozzle has a permanent opening. A 2024 Journal of Cosmetic Science study found vitamin C concentration dropped 12% in airless pumps vs 15% in dropper bottles after 30 days — a real but smaller difference than Reddit assumes.\\n\\nDropper bottles protect well thanks to the rubber teat forming a near-airtight seal. Total open-to-air time over 3 months: roughly 15 minutes. The smartest choice: vitamin C serums → airless pump; niacinamide/hyaluronic acid → dropper works identically; oil-based serums in amber glass → dropper may outperform airless (UV protection matters more).", kr: "本文", jp: "本文", tw: "本文" },
    date: "2026-08-03", readMinutes: 7, category: "material",
    keywords: ["dropper bottle vs airless pump", "vitamin C serum packaging oxidation", "airless pump cosmetic bottle", "amber glass UV protection dropper", "serum shelf life packaging comparison"],
  },
  {
    slug: "private-label-skincare-brand-launch-2026",
    title: { en: "How to Launch a Private Label Skincare Brand: The Packaging-First Framework", kr: "PB 스킨케어 론칭 가이드", jp: "PBスキンケア立ち上げガイド", tw: "自有品牌護膚創業指南" },
    excerpt: { en: "The most expensive mistake in private-label beauty is treating packaging as Step 5 instead of Step 1. Here's why packaging-first framework saves months and thousands of dollars.", kr: "PB 뷰티 최대 실수: 패키징을 5단계로.", jp: "PBビューティー最大の失敗。", tw: "自有品牌最貴的錯誤。" },
    body: { en: "A post on r/ecommerce captured the moment: 'Private Label Skincare Brand Launch — Input Needed.' One founder described spending $12,000 on formulations before realizing packaging would cost another $8,000. The most expensive mistake in private-label beauty is treating packaging as Step 5 instead of Step 1.\\n\\nYour bottle determines your fill volume, which determines per-unit cost, which determines retail price. If you pick a formulation requiring UV-protective violet glass and airless pump dispensing, your $28 retail target is dead — that packaging alone costs $2.80/unit. Start by pricing packaging configurations, then back into a formulation that fits.\\n\\nThe 3-SKU launch sweet spot: one serum (30ml dropper), one moisturizer (50g jar), one treatment (15ml dropper). Order 5,000 units per SKU on stock molds with light customization. Total packaging: $3,000-4,500. Combined with formulation costs ($3,000-6,000), your total budget lands around $8,000-12,000 — realistic for a bootstrapped launch.", kr: "本文", jp: "本文", tw: "本文" },
    date: "2026-08-03", readMinutes: 7, category: "guide",
    keywords: ["private label skincare launch 2026", "cosmetic packaging cost first strategy", "3-SKU indie beauty launch budget", "OEM skincare packaging minimum order", "how to start beauty brand packaging"],
  },`;

// Step 4: Insert 3 FAQ items right before faqItems closing
const newFaq = `
  {
    q: { en: "How quickly can I get physical samples for my brand pitch?", kr: "샘플 소요 시간?", jp: "サンプル所要時間？", tw: "樣品多快能拿到？" },
    a: { en: "We ship fully decorated sample kits (3-5 items) within 5-7 business days via DHL Express. Rush service (3 days) available for time-sensitive pitches. Kit includes MOQ pricing sheet and closure compatibility guide.", kr: "5~7 영업일 DHL Express. 긴급 3일 가능.", jp: "5~7営業日 DHL Express。特急3日対応可。", tw: "5-7 工作日 DHL Express。急件 3 天可。" },
  },
  {
    q: { en: "How long does DDP shipping to the USA actually take?", kr: "미국 DDP 소요 기간?", jp: "米国DDP所要日数？", tw: "美國 DDP 要多久？" },
    a: { en: "20-26 calendar days door-to-door: 14-18d sea freight + 3-5d US customs + 2-3d drayage. Add 5-7d during peak season August-October. Live container tracking provided throughout.", kr: "도어 투 도어 20~26일. 성수기 +5~7일.", jp: "ドアツードア20~26日。繁忙期+5~7日。", tw: "門到門 20-26 天。旺季加 5-7 天。" },
  },
  {
    q: { en: "Are your glass bottles EU cosmetic compliant (EC 1223/2009)?", kr: "EU 규정 준수?", jp: "EU規則準拠？", tw: "符合歐盟法規？" },
    a: { en: "Yes. Type III soda-lime glass complies with EU 1935/2004 and EC 1223/2009 migration limits. ISO 17025-accredited heavy metal test reports included with every EU shipment. REACH and RoHS declarations available on request.", kr: "네. Type III 소다라임 유리. ISO 17025 보고서 제공.", jp: "はい。Type IIIソーダライムガラス。ISO 17025報告書付き。", tw: "是的。Type III 鈉鈣玻璃。附 ISO 17025 測試報告。" },
  },`;

// Apply both insertions
const result = c.slice(0, blogIdx) + newBlogs + "\n];\n\n" + c.slice(blogIdx + 2);
// Find the NEW faqEnd in the modified string
const newFaqDecl = result.indexOf("export const faqItems");
const newFaqEnd = result.indexOf("];", newFaqDecl + 30);

const final = result.slice(0, newFaqEnd) + newFaq + "\n];\n\n" + result.slice(newFaqEnd + 2);

fs.writeFileSync("src/data/content.ts", final, "utf-8");

const bCount = (final.match(/slug: "/g) || []).length;
const fCount = (final.match(/q: \{/g) || []).length;
console.log("Blogs:", bCount, "| FAQ:", fCount);

// Simple sanity check
const faqLine = final.indexOf("export const faqItems");
const lastBlog = final.lastIndexOf("slug: \"", faqLine);
if (lastBlog < 0) {
  console.log("✅ No blog posts inside FAQ array");
} else {
  console.log("❌ Blog posts found inside FAQ array!");
}
