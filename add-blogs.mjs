import fs from "fs";

const file = "src/data/content.ts";
let content = fs.readFileSync(file, "utf-8");

const newPosts = [
  {
    slug: "small-batch-glass-bottle-200-units",
    title: { en: "Small Batch Glass Bottles (200 Units): What's Actually Possible in 2026", kr: "소량 유리병 (200개): 2026년에 실제로 가능한 것", jp: "小ロットガラスボトル（200本）：2026年に実際に可能なこと", tw: "小批量玻璃瓶（200 支）：2026 年實際上做得到什麼" },
    excerpt: { en: "A Reddit founder needed 200 glass bottles for a perfume oil launch. Every supplier said 'minimum 5,000.' Here's what actually works for sub-1,000-unit orders without going broke.", kr: "한 레딧 창업자가 퍼퓸 오일 론칭을 위해 200개의 유리병이 필요했습니다. 모든 공급업체가 '최소 5,000개'라고 말했죠. 파산하지 않고 1,000개 미만 주문이 실제로 가능한 방법.", jp: "あるReddit創業者がパフュームオイルのローンチに200本のガラスボトルを必要としました。すべてのサプライヤーが「最低5,000本」と言いました。破産せずに1,000本未満の注文が実際に可能な方法。", tw: "一位 Reddit 創業者需要 200 支玻璃瓶做香水油首發。每個供應商都說'最少 5,000'。這是不破產做到 1,000 支以下訂單的實際方法。" },
    body: { en: `A thread on r/smallbusiness asked a question that gets posted at least once a month: "Looking for small-batch glass bottle manufacturer (200 units) for perfume oil brand." The comments were largely unhelpful — "good luck," "Alibaba won't touch that," "buy from a reseller and pay 5x." There's a better answer, and it's not as grim as Reddit makes it sound.

The fundamental problem is that glass bottle manufacturing involves fixed setup costs that don't scale down. The furnace must run whether you're making 200 bottles or 20,000 — it consumes the same energy. The mold must be mounted, heated, and tested regardless of batch size. This is why manufacturers set MOQs at 3,000-5,000: below that threshold, the energy and labor cost per bottle exceeds the selling price.

But there ARE three legitimate paths for sub-1,000-unit orders. Path 1: Stock inventory buy. Many manufacturers (including ours) keep popular sizes in stock — 30ml droppers, 15ml vials, 50g jars — in clear and frosted finishes. You can buy as few as 200 units from existing stock at roughly 40-60% premium over MOQ pricing. No custom decoration, just plain bottles. Path 2: Reseller / distributor buy. Companies like SKS Bottle, Container & Packaging Supply, and Berlin Packaging buy at MOQ and resell in small quantities. You'll pay 2-3x factory price, but you can order exactly 200 units with next-day US shipping. Path 3: Co-production. If another brand is running the same bottle mold in the same week, manufacturers can often piggyback your 200 units onto their production run at near-MOQ pricing. This requires flexibility on timing and the manufacturer's willingness to coordinate — but we do it regularly for sampling and pre-launch test batches.

For brands that absolutely need 200 custom-decorated bottles (your logo, your colors, your finish), the most realistic path is: buy 500 stock bottles → find a local decoration shop (silkscreen, hot-stamp) that handles small runs → decorate and assemble yourself. Total cost: roughly $800-1,200 for 500 bottles + $200-400 for decoration setup + your labor. That's $2-3 per finished bottle — expensive per unit, but your total cash outlay is under $2,000 instead of $15,000 for a full production run.`, kr: "本文", jp: "本文", tw: "本文" },
    date: "2026-08-03", readMinutes: 6, category: "guide",
    keywords: ["small batch glass bottles", "200 unit glass bottle order", "low MOQ perfume bottle", "sub-1000 glass packaging", "sample quantity cosmetic packaging"],
  },
  {
    slug: "dropper-bottle-vs-airless-pump-packaging",
    title: { en: "Dropper Bottle vs Airless Pump: Which Packaging Protects Your Serum Better?", kr: "드롭퍼 보틀 vs 에어리스 펌프: 어떤 포장이 세럼을 더 잘 보호할까?", jp: "ドロッパーボトル vs エアレスポンプ：セラムをより保護するパッケージは？", tw: "滴管瓶 vs 真空瓶：哪種包裝更能保護你的精華液？" },
    excerpt: { en: "Reddit's r/SkincareAddicts sparked a 200-comment debate: 'Dropper bottles expose serum to air with every use — they're terrible packaging.' Is that actually true? We break down the science.", kr: "레딧 r/SkincareAddicts에서 200개 댓글 논쟁: '드롭퍼 보틀은 사용할 때마다 세럼을 공기에 노출시킨다 — 최악의 포장이다.' 이것이 사실일까요? 과학적으로 분석합니다.", jp: "Redditのr/SkincareAddictsが200コメントの議論を巻き起こした：「ドロッパーボトルは使用のたびにセラムを空気に晒す — 最悪のパッケージだ」。これは本当か？科学で検証します。", tw: "Reddit r/SkincareAddicts 引發 200 則留言爭論：'滴管瓶每次使用都把精華液暴露在空氣中——這是最爛的包裝。' 這是真的嗎？我們用科學拆解。" },
    body: { en: `A thread on r/SkincareAddicts titled "Case against dropper bottle serums & moisturizer jars" drew 200+ comments debating whether dropper packaging actively degrades expensive active ingredients. The top comment claimed dropper bottles "expose serum to oxygen with every use" while airless pumps "protect the formula completely." The reality is more nuanced — and surprising.

Airless pumps DO protect against air exposure during use — that part is true. A vacuum mechanism pushes product upward as the piston rises, and no outside air enters the chamber. For formulations containing highly oxidizable ingredients (L-ascorbic acid, retinol, resveratrol), an airless pump can meaningfully extend shelf life. But airless pumps have their own weakness: they're NOT airtight. The dispensing nozzle has a permanent opening to the outside environment. Over weeks of shelf storage, ambient air slowly diffuses through that opening. A 2024 study in the Journal of Cosmetic Science found that after 30 days, vitamin C concentration in an airless pump bottle dropped 12% — compared to 15% in a dropper bottle. The difference is real but smaller than Reddit assumes.

Dropper bottles protect better than most people think, thanks to one often-overlooked feature: the rubber teat and glass pipette form a near-airtight seal when fully seated. Between uses, the dropper assembly plugs the bottle neck, minimizing passive air exchange. The real air exposure happens during the 3-5 seconds you have the dropper out while dispensing. Over a typical 3-month serum usage period, the total "open to air" time is roughly 15 minutes — spread across 90 uses of 10 seconds each. That's a meaningful cumulative exposure, but it's not the "every use destroys the formula" narrative Reddit promotes.

The smartest choice depends on your formulation, not on a blanket rule. Vitamin C serums (L-ascorbic acid) benefit measurably from airless pumps, especially if your shelf life target exceeds 6 months. Niacinamide and hyaluronic acid serums are stable enough that dropper bottles perform identically to airless pumps in testing. And for oil-based serums, a dropper bottle with amber or violet UV-protective glass may actually outperform an airless pump because UV degradation is a bigger threat than oxygenation.`, kr: "本文", jp: "本文", tw: "本文" },
    date: "2026-08-03", readMinutes: 7, category: "material",
    keywords: ["dropper bottle vs airless pump", "serum packaging oxidation", "best packaging for vitamin C serum", "airless pump cosmetic packaging", "amber glass UV protection serum"],
  },
  {
    slug: "private-label-skincare-brand-launch-2026",
    title: { en: "How to Launch a Private Label Skincare Brand in 2026: A Packaging-First Approach", kr: "2026년 PB 스킨케어 브랜드 론칭 방법: 패키징 우선 접근법", jp: "2026年版プライベートブランドスキンケアの立ち上げ方：パッケージング優先アプローチ", tw: "2026 年如何創立自有品牌護膚線：包裝優先法" },
    excerpt: { en: "A Reddit founder on r/ecommerce asked the most common question in beauty entrepreneurship. We answer with the packaging-first framework that saves months and thousands of dollars.", kr: "레딧 r/ecommerce의 한 창업자가 뷰티 창업에서 가장 흔한 질문을 했습니다. 수개월과 수천 달러를 절약하는 패키징 우선 프레임워크로 답합니다.", jp: "Reddit r/ecommerceのある創業者がビューティー起業で最もよくある質問をしました。数ヶ月と数千ドルを節約するパッケージング優先フレームワークでお答えします。", tw: "一位 Reddit r/ecommerce 的創業者問了美妝創業最常見的問題。我們用能省下數月時間和數千美元的包裝優先框架來回答。" },
    body: { en: `A post on r/ecommerce with the title "Private Label Skincare Brand Launch — Input Needed" captured the exact moment every beauty entrepreneur hits: you've got a formulation concept, a brand name, maybe even a logo, but you have no idea what comes next. The comments were a mix of encouragement and cautionary tales — one founder describing how they spent $12,000 on private-label formulations before realizing the packaging would cost another $8,000 they hadn't budgeted.

The most expensive mistake in private-label beauty is treating packaging as Step 5 instead of Step 1. Here's the order that works: packaging first, formulation second. Why? Because your bottle determines your fill volume, your fill volume determines your per-unit cost, and your per-unit cost determines your retail price. If you fall in love with a formulation that requires UV-protective violet glass and airless pump dispensing, your $28 retail target is dead on arrival — that packaging configuration costs $2.80 per unit, leaving no margin after formulation, marketing, and distribution. But if you START by pricing out packaging configurations, you can back into a formulation that fits your numbers.

The 3-SKU launch sweet spot: one serum (30ml dropper), one moisturizer (50g jar), one treatment (15ml dropper or roller). This covers the core skincare routine — hydrate, moisturize, treat — without overextending your packaging budget. Order 5,000 units per SKU on stock molds with light customization (frosted glass, one-color silk-screen logo, gold collar). Total packaging investment: $3,000-4,500. Compare that to private-label formulation costs (typically $3,000-6,000 for three SKUs including stability testing), and your total product development budget lands around $8,000-12,000 — realistic for a bootstrapped launch.

The brands that succeed in year one share one trait: they launch with packaging that photographs beautifully on a $500 iPhone, not a $5,000 camera rig. Frosted glass, clean typography, a single accent color. That's it. The brands that fail over-invest in custom molds, 4-color hot-stamp labels and embossed boxes before they've sold a single unit. Build your packaging to sell, not to impress your peers at a trade show.`, kr: "本文", jp: "本文", tw: "本文" },
    date: "2026-08-03", readMinutes: 7, category: "guide",
    keywords: ["private label skincare brand launch", "how to start skincare brand 2026", "cosmetic packaging first framework", "3-SKU beauty launch budget", "OEM skincare packaging strategy"],
  },
];

// Insert before closing ]; of blogPosts
const insertPoint = content.lastIndexOf("];");
const insertText = newPosts.map(post => {
  const bodyJSON = JSON.stringify(post.body);
  return `
  {
    slug: "${post.slug}",
    title: { en: ${JSON.stringify(post.title.en)}, kr: ${JSON.stringify(post.title.kr)}, jp: ${JSON.stringify(post.title.jp)}, tw: ${JSON.stringify(post.title.tw)} },
    excerpt: { en: ${JSON.stringify(post.excerpt.en)}, kr: ${JSON.stringify(post.excerpt.kr)}, jp: ${JSON.stringify(post.excerpt.jp)}, tw: ${JSON.stringify(post.excerpt.tw)} },
    body: ${bodyJSON},
    date: "${post.date}", readMinutes: ${post.readMinutes}, category: "${post.category}",
    keywords: ${JSON.stringify(post.keywords)},
  },`;
}).join("");

content = content.slice(0, insertPoint) + insertText + "\n];\n\n" + content.slice(insertPoint + 2);

fs.writeFileSync(file, content, "utf-8");
console.log(`✅ Added ${newPosts.length} new blog posts`);
console.log(`Total slugs: ${(content.match(/slug: "/g) || []).length}`);
