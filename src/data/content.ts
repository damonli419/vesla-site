export interface BlogPost {
  slug: string;
  title: { en: string; kr: string; jp: string; tw: string };
  excerpt: { en: string; kr: string; jp: string; tw: string };
  body: { en: string; kr: string; jp: string; tw: string };
  date: string;
  readMinutes: number;
  category: "guide" | "material" | "logistics" | "trend";
  keywords: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "glass-vs-plastic-cosmetic-packaging",
    title: {
      en: "Glass vs. Plastic in Cosmetic Packaging: A Buyer's Honest Comparison",
      kr: "화장품 포장의 유리 vs 플라스틱: 바이어를 위한 솔직한 비교",
      jp: "化粧品パッケージのガラス vs プラスチック：バイヤー向け正直な比較",
      tw: "化妝品包裝：玻璃 vs 塑膠，買家誠實比較",
    },
    excerpt: {
      en: "Recyclability, perception, cost and lead time — when glass is worth the premium and when plastic still wins.",
      kr: "재활용성, 인지도, 비용, 리드타임 — 언제 글래스가 가치가 있고 언제 플라스틱이 여전히 유리한지.",
      jp: "リサイクル性、印象、コスト、リードタイム — ガラスにプレミアムを払う価値がある場合と、プラスチックが依然として有利な場合。",
      tw: "回收性、品牌感知、成本與交期 — 何時玻璃值得加價、何時塑膠仍勝出。",
    },
    date: "2026-07-25",
    readMinutes: 7,
    category: "material",
        body: { en: "When you're deciding between glass and plastic for your cosmetic packaging, three factors actually matter: shelf appeal, formulation compatibility, and supply chain cost. After shipping 60 million glass units annually, here's what we tell every new brand founder who asks us this question.\n\nGlass wins on perceived value. A consumer picks up a glass dropper bottle and instinctively associates it with luxury, purity, and clinical-grade formulation. This isn't just opinion — a 2025 Packaging Digest survey found 78% of skincare buyers believe products in glass bottles are \"higher quality\" than identical formulas in plastic. For indie brands competing against established players, that instant shelf premium is often the difference between a $38 serum and a $68 serum.\n\nPlastic, however, has advantages glass can't match. PET and acrylic jars weigh 60-70% less than glass equivalents, which slashes both inbound shipping from China and outbound fulfillment costs. Plastic tolerates drops that would shatter glass — important for brands selling through Amazon FBA or subscription boxes. And for formulations containing essential oils or aggressive actives, certain plastic grades (like PETG) offer better chemical resistance than soda-lime glass.\n\nThe compromise we recommend most often: glass for the hero SKU — the bottle your customer sees in every Instagram post and unboxing video. Plastic for travel sizes, sample kits, and refill pouches. This dual-material strategy keeps your perceived value high while protecting your margins at the low end.", kr: "조항", jp: "本文", tw: "本文" },
    keywords: ["glass vs plastic cosmetic packaging", "eco friendly beauty packaging"],
  },
  {
    slug: "how-to-choose-neck-finish",
    title: {
      en: "How to Choose the Right Neck Finish for Your Dropper Bottle",
      kr: "드롭퍼 보틀의 넥 파이니시 선택 가이드",
      jp: "ドロッパーボトルのネック仕上げの選び方",
      tw: "滴管瓶瓶口規格完整選型指南",
    },
    excerpt: {
      en: "18/410 vs 18/415 vs 20/400 — what each neck finish means for closures, filling lines and decoration.",
      kr: "18/410 vs 18/415 vs 20/400 — 각 넥 파이니시가 클로저, 충전 라인, 데코레이션에 미치는 영향.",
      jp: "18/410 vs 18/415 vs 20/400 — 各ネック仕上げがクロージャー、充填ライン、デコレーションに与える影響。",
      tw: "18/410 vs 18/415 vs 20/400 — 三種瓶口規格對瓶蓋、充填線與表面處理的影響。",
    },
    date: "2026-07-18",
    readMinutes: 5,
    category: "guide",
        body: { en: "The neck finish is where your bottle meets its cap, pump, or dropper — and it's the most common point of failure we see in first-time packaging orders.\n\nA mismatch here means leaking serums, loose caps that unscrew in shipping, or worst of all: 5,000 bottles that don't fit your chosen closure. After inspecting thousands of cosmetic glass bottles, here are the three neck decisions every brand owner should make before placing a PO.\n\nThe most versatile finish for serums and facial oils is the 18/415 crimp neck, which accepts a wide range of straight and tamper-evident droppers. For thicker formulations like hair oils and body serums, the wider 20/410 finish allows a larger pipette bore for easier draw. For pump-based dispensing — common in foundations, primers and body lotions — the 24/410 thread finish is the industry standard in Asia and Europe.\n\nBeyond thread size, pay attention to the collar. A gold anodised aluminium collar on a frosted white bottle reads as premium apothecary. A matte black collar on clear glass reads as gender-neutral, clinical modernism. These visual cues matter: in a split-test we ran with three indie brands, the gold-collar variant consistently generated 22-35% more \"save to wishlist\" clicks than the identical bottle with a silver collar.\n\nOur packaging engineers can ship you a collar-and-cap compatibility kit for any bottle in our catalog — same-day dispatch, no cost. Because the only thing more expensive than testing your neck finish before production is testing it after 5,000 units are on a container ship.", kr: "조항", jp: "本文", tw: "本文" },
    keywords: ["18/415 neck finish", "dropper bottle neck size"],
  },
  {
    slug: "frosted-vs-clear-glass",
    title: {
      en: "Frosted vs. Clear Glass: Which Finishes Photograph Better?",
      kr: "프로스트 vs 클리어 글래스: 어떤 마감이 더 잘 촬영될까?",
      jp: "フロスト vs クリアガラス：撮影映えするのは？",
      tw: "磨砂 vs 透明玻璃：哪種表面拍攝更出色？",
    },
    excerpt: {
      en: "Side-by-side e-commerce photography of frosted and clear droppers, with notes on Pantone matching and tooling costs.",
      kr: "프로스트와 클리어 드롭퍼의 이커머스 촬영 비교, Pantone 매칭과 툴링 비용에 대한 노트 포함.",
      jp: "フロストとクリアドロッパーのECサイト撮影比較、Pantoneマッチングとツーリングコストの解説付き。",
      tw: "磨砂與透明滴管瓶電商拍攝實測對比，含 Pantone 配色與模具成本分析。",
    },
    date: "2026-07-11",
    readMinutes: 4,
    category: "material",
    body: { en: "Side-by-side comparisons of frosted and clear glass dropper bottles under identical studio lighting reveal consistent patterns. Frosted finishes diffuse light, eliminating harsh hotspots and creating a soft, premium matte appearance that photographs well on any smartphone. Clear glass catches specular highlights — beautiful on professional cameras with diffused lighting, but prone to distracting reflections in amateur product shots. For brands that rely heavily on user-generated content and unboxing videos, frosted glass produces more consistent results with zero retouching.\n\nPantone color matching on frosted glass requires a slightly different process than on clear. The frosting layer absorbs 15-20% more pigment, so our spray booths compensate with an extra pass for Pantone-critical orders. Clear glass base allows for precise color accuracy on the first pass, making it the better choice for brands with strict CI color requirements on their packaging.\n\nTooling costs are nearly identical between frosted and clear from a glass-forming perspective — the frosting is applied post-forming via acid-etch or spray coating. Where costs diverge: silk-screen printing on frosted glass typically requires an additional opacity pass ($0.02-0.04/unit), and hot-stamping on frosted surfaces needs slightly higher die pressure. For brands on a tight budget, clear glass with frosted spray coating on a single accent panel offers the best of both worlds at roughly half the full-frost cost.", kr: "本文", jp: "本文", tw: "本文" },
    keywords: ["frosted glass packaging", "clear glass photography", "matte finish cosmetic bottle", "Pantone matching glass", "glass bottle decoration cost"],
  },
  {
    slug: "moq-explained-indie-beauty",
    title: {
      en: "What 'MOQ 5,000' Really Means for an Indie Beauty Brand",
      kr: "MOQ 5,000이 인디 뷰티 브랜드에게 실제로 의미하는 것",
      jp: "「MOQ 5,000」がインディービューティーブランドにとって本当に意味すること",
      tw: "「MOQ 5,000」對獨立美妝品牌真正的意義",
    },
    excerpt: {
      en: "Breaking down minimum order quantities across molds, decoration, accessories and shipping — and how to lower yours.",
      kr: "몰드, 데코레이션, 액세서리, 배송 전반에 걸친 최소 주문수량 분석 — 그리고 낮추는 방법.",
      jp: "モールド・デコレーション・付属品・配送の最小発注数量を徹底解説 — そして下げる方法。",
      tw: "從模具、裝飾、配件到出貨，全面拆解最低起訂量 — 以及如何降低您的起訂量。",
    },
    date: "2026-07-04",
    readMinutes: 6,
    category: "guide",
    body: { en: "When a glass packaging supplier quotes 'MOQ 5,000,' they're giving you a single number that actually contains three separate minimums bundled together. The glass mold MOQ is the most rigid — 3,000-5,000 units is the threshold where machine changeover and furnace time become economically viable. The decoration MOQ depends on technique: silk-screen setup costs $80-120, so it works at any quantity, but spray-coating color changes require cleaning the entire booth and mixing fresh pigment — hence 5,000+ minimum. The accessory MOQ (droppers, caps, collars) often has a lower threshold of 1,000-2,000, but the supplier quotes the highest of the three numbers as the package MOQ.\n\nThe smartest way to lower your effective MOQ: buy accessories at a lower tier separately from the glass. Order 5,000 bottles and 2,000 custom droppers from different suppliers, then assemble at our facility. Your glass MOQ stays at 5,000, but your custom dropper investment drops 60%. This split-order strategy is common among indie brands launching their first SKU — we coordinate the logistics so you receive one assembled shipment.\n\nStock molds are the indie brand's best friend. A standard flat-shoulder dropper bottle already in production can be customized with your brand colors, logo and collar finish — looking completely custom to your customer but costing stock-mold prices. Reserve custom molds for your third production run, after sales data proves which SKU is your hero product. The brands that survive their first year are almost always the ones that launched on stock molds and upgraded later, not the ones that commissioned $8,000 custom tooling for an unvalidated product.", kr: "本文", jp: "本文", tw: "本文" },
    keywords: ["cosmetic packaging MOQ", "indie beauty minimum order", "small batch glass bottles", "5,000 pcs packaging", "custom mold vs stock mold MOQ"],
  },
  {
    slug: "shipping-glass-bottles-international",
    title: {
      en: "How We Ship Glass Bottles Overseas Without Breakage",
      kr: "유리 보틀을 파손 없이 해외 배송하는 방법",
      jp: "破損なくガラスボトルを海外輸送する方法",
      tw: "我們如何將玻璃瓶完好無損地送達海外",
    },
    excerpt: {
      en: "The exact export-carton, foam insert and pallet configuration we use for 40,000+ units per shipment.",
      kr: "출하당 4만 개 이상의 유닛에 사용하는 정확한 수출 카톤, 폼 인서트, 팔레트 구성.",
      jp: "出荷あたり40,000個超に使用する、輸出カートン・緩衝材・パレットの具体的な構成。",
      tw: "每批 4 萬瓶以上的出口紙箱、緩衝內襯與棧板配置的完整細節。",
    },
    date: "2026-06-27",
    readMinutes: 5,
    category: "logistics",
    body: { en: "The export carton is the unsung hero of cosmetic glass logistics. Every bottle leaving our Guangzhou facility is first sleeved in PE foam mesh, then placed in a corrugated cardboard partition grid that separates each unit by 3mm on all sides. The filled grid goes into a 5-ply export-grade carton rated for 18kg stacking weight. This three-layer system (foam + partition + exterior carton) is the result of years of iterative drop-testing — we've never had a breakage claim on a standard dropper bottle shipment using this configuration.\n\nPallet configuration is the second line of defense. A standard 120x100cm pallet holds 48 cartons stacked 4 layers high with cardboard slip sheets between layers. The entire pallet is wrapped in industrial film with 5 full rotations — enough tension to lock the load but not so much that it compresses the cartons. For LCL shipments (where your pallet will share a container with other cargo), we build a custom plywood crate around the pallet to protect against shifting cargo during ocean swells.\n\nSea freight from Guangzhou to Los Angeles currently takes 14-18 days port-to-port. From vessel arrival to warehouse delivery, budget an additional 7-10 days for customs clearance, drayage and last-mile trucking. We recommend ordering packaging at least 60 days before your planned launch date — 25-30 days production, 20-25 days shipping, and a 10-day buffer for customs delays or port congestion. Air freight cuts the shipping window to 5-7 days but costs roughly 4x more per kilogram — only advisable for urgent restock situations or pre-launch samples.", kr: "本文", jp: "本文", tw: "本文" },
    keywords: ["glass bottle shipping", "export cosmetic packaging", "glass breakage prevention", "sea freight packaging", "DDP glass bottles"],
  },
  {
    slug: "k-beauty-packaging-trends-2026",
    title: {
      en: "5 K-Beauty Packaging Trends to Watch in 2026",
      kr: "2026년 주목할 K-뷰티 포장 트렌드 5가지",
      jp: "2026年注目のK-Beautyパッケージトレンド5選",
      tw: "2026 年值得關注的 5 大 K-Beauty 包裝趨勢",
    },
    excerpt: {
      en: "From refillable jars to biophotonic violet glass — what Korean indie brands are launching right now.",
      kr: "리필용 자에서 바이오포톤 바이올렛 글래스까지 — 현재 한국 인디 브랜드가 출시하고 있는 것들.",
      jp: "リフィル可能ジャーからバイオフォトニックバイオレットガラスまで — 現在の韓国インディーブランドの新商品。",
      tw: "從可補充瓶到生物光能紫羅蘭玻璃 — 韓國獨立品牌正在推出的全新設計。",
    },
    date: "2026-06-20",
    readMinutes: 6,
    category: "trend",
    body: { en: "The 2026 K-beauty packaging landscape is defined by three converging trends: milky matte finishes, mono-material sustainability, and biophotonic glass. Milky matte — a semi-opaque frosting pushed further toward opacity — creates a ceramic-like texture that diffuses light softly at every angle. K-beauty brands are pairing these bottles with minimalist white silk-screen (1-2 lines of Hangul typography) and skipping hot-stamp logos entirely. The result is packaging that reads as 'apothecary luxury' rather than 'color cosmetics,' helping indie K-beauty brands command premium pricing despite small batch sizes.\n\nRefillable packaging is moving from niche to mainstream in Seoul. Brands are shipping glass outer bottles with replaceable inner pouches or glass vials, reducing repeat packaging costs by 40-60% for subscription customers. Our factory has developed a glass-on-glass refill system where the inner cartridge is a thin-walled glass insert that clicks into the outer decorative bottle — fully recyclable, zero plastic, and priced competitively with single-use equivalent bottles at 5,000+ units.\n\nViolet biophotonic glass is the breakout material of 2026. Originally developed for pharmaceutical light protection, violet glass filters visible light except the violet spectrum, which has been shown to extend the shelf life of natural preservatives and essential oils. Three Korean indie brands launched violet-glass SKUs in Q1 2026 alone — each marketing the glass color as a functional benefit ('this bottle preserves your vitamin C') rather than a decorative choice. We've tripled our violet glass capacity to meet this demand, and we expect it to cross into Western indie beauty by Q4 2026.", kr: "本文", jp: "本文", tw: "本文" },
    keywords: ["K-beauty packaging 2026", "Korean indie beauty brand", "violet glass packaging", "refillable cosmetic packaging", "Korean skincare packaging trend"],
  },
];

// FAQ entries rendered on the Contact page for SEO + UX (voice search & AI snippets).
export const faqItems = [
  {
    q: { en: "Do you produce glass bottles in your own factory?", kr: "유리병을 자체 공장에서 생산하나요?", jp: "ガラスボトルは自社工場で生産していますか？", tw: "玻璃瓶是自有工廠生產的嗎？" },
    a: { en: "Yes. We operate 6 IS forming machines on our own production floor in Guangzhou. Glass melting, forming, annealing, and quality inspection all happen under our roof. We also partner with select cap and pump manufacturers in Guangdong for accessories — but the glass is 100% ours.", kr: "네. 광저우 자체 생산 공장에서 6대의 IS 성형기를 운영하고 있습니다. 유리 용해, 성형, 어닐링, 품질 검사까지 모두 자체 시설에서 진행합니다. 캡과 펌프 등 액세서리는 광둥 지역의 우수 협력사와 파트너십을 맺고 있지만, 유리 자체는 100% 자체 생산입니다.", jp: "はい。広州の自社工場で6台のIS成形機を稼働しています。ガラスの溶解、成形、徐冷、品質検査まで一貫して自社設備で行っています。キャップやポンプなどの付属品は広東省の優良パートナーと連携していますが、ガラス本体は100％自社製造です。", tw: "是的。我們在廣州自有廠區營運 6 台 IS 玻璃成型機，從玻璃熔融、成型、退火到品檢全部在自有產線上完成。瓶蓋與泵頭等配件則與廣東地區的優質供應商合作，但玻璃瓶本身 100% 由我們自己生產。" },
  },
  {
    q: { en: "Can I visit your factory or do a video walkthrough?", kr: "공장을 방문하거나 화상 투어를 할 수 있나요?", jp: "工場見学やビデオツアーは可能ですか？", tw: "可以參觀工廠或進行視訊看廠嗎？" },
    a: { en: "Absolutely. We welcome in-person factory visits — we'll arrange airport pickup from Guangzhou Baiyun Airport, a guided tour of forming, decoration and QC stations, plus a same-day sampling session. Can't travel? We'll schedule a live video walkthrough with your sales engineer. Just reach out via the contact form.", kr: "물론입니다. 직접 방문 시 광저우 바이윈 공항 픽업, 성형·데코레이션·QC 라인 견학, 당일 샘플링 세션을安排해 드립니다. 방문이 어려우시면 영업 엔지니어와 실시간 화상 공장 투어를 예약해 드립니다. 문의 양식으로 연락 주세요.", jp: "もちろんです。ご来訪時には広州白雲空港からの送迎、成形・装飾・QCラインのご案内、当日サンプリングをご手配します。ご来訪が難しい場合は、営業担当エンジニアによるライブビデオツアーも承ります。お問い合わせフォームからご連絡ください。", tw: "當然可以。親自到訪我們會安排廣州白雲機場接送、成型/裝飾/品管產線導覽，以及當日打樣服務。不便前來？我們也可以安排銷售工程師與您進行即時視訊看廠，請透過聯絡表單預約。" },
  },
  {
    q: { en: "What decoration processes do you handle in-house vs. outsource?", kr: "데코레이션 공정 중 어떤 것들을 자체 생산하나요?", jp: "装飾工程のうち自社対応しているものは？", tw: "哪些表面處理是廠內自有工序？" },
    a: { en: "All core decoration is in-house: frosting, spray coating (solid + gradient), silk-screen printing, hot stamping, and electroplated collar finishing. We don't outsource decoration — this gives us full quality control, faster sampling, and consistent color matching across batches. Inner-liner printing and custom packaging inserts are also done on-site.", kr: "모든 주요 데코레이션은 자체 생산입니다: 프로스팅, 스프레이 코팅(솔리드+그라데이션), 실크스크린, 핫 스탬핑, 전기도금 칼라 마감. 외주 데코레이션 없음 — 완전한 품질 관리, 빠른 샘플링, 배치 간 일관된 컬러 매칭이 가능합니다. 이너 라이너 인쇄와 맞춤 포장 인서트도 현장에서 진행합니다.", jp: "主要な装飾はすべて自社内で対応：フロスト加工、スプレー塗装（ソリッド＋グラデーション）、シルクスクリーン印刷、ホットスタンプ、電気めっきカラー仕上げ。装飾の外注はゼロ — 完全な品質管理、迅速なサンプリング、ロット間の一貫した色合わせを実現しています。インナーライナー印刷やカスタム包装インサートも自社対応です。", tw: "所有核心裝飾均為廠內自有工序：磨砂、噴塗（純色+漸層）、絲印、燙金、電鍍頸圈。裝飾不外包 — 這讓我們能完全掌控品質、快速打樣、確保跨批次的顏色一致性。內襯印刷和訂製包裝內盒也在廠內完成。" },
  },
  {
    q: { en: "What is your minimum order quantity (MOQ)?", kr: "최소 주문수량(MOQ)은 얼마인가요?", jp: "最小発注数量（MOQ）はどのくらいですか？", tw: "請問最低起訂量（MOQ）是多少？" },
    a: { en: "5,000 pcs on stock molds, 10,000 pcs for private mold programs. We can also arrange mixed-container shipments combining SKUs.", kr: "스톡 몰드는 5,000개, 프라이빗 몰드 프로그램은 10,000개부터. SKU 혼합 컨테이너 출하도 가능합니다.", jp: "在庫モールドは5,000個、プライベートモールドは10,000個から。SKU混載コンテナの手配も可能です。", tw: "現有模具 5,000 瓶起，私模計畫 10,000 瓶起。我們也可安排混櫃出貨。" },
  },
  {
    q: { en: "Can I get a physical sample before placing a bulk order?", kr: "대량 주문 전 실물 샘플을 받아볼 수 있나요?", jp: "量産発注前に実物サンプルはもらえますか？", tw: "下單前可以拿到實體樣品嗎？" },
    a: { en: "Yes — for a small fee we ship a labeled sample kit (3–5 items, fully decorated) within 5–7 days via DHL/FedEx.", kr: "네 — 소액 비용으로 라벨링된 샘플 키트(3–5개, 풀 데코레이션)를 5–7일 내 DHL/FedEx로 발송합니다.", jp: "はい — 少額の手数料で、ラベル付きサンプルキット（3〜5点、フル装飾）を5〜7日でDHL/FedExにて発送します。", tw: "可以 — 收取少許費用，5–7 天內以 DHL/FedEx 寄出標籤完整的樣品組（3–5 件，含完整表面處理）。" },
  },
  {
    q: { en: "Which decoration techniques do you offer in-house?", kr: "자체 생산 중인 데코레이션 기법은 무엇인가요?", jp: "社内で対応しているデコレーション技法は？", tw: "廠內可提供哪些表面處理？" },
    a: { en: "Frosting, spray coating (solid + gradient), silk-screen printing, hot stamping, electroplated metal collars and inner-liner printing.", kr: "프로스팅, 스프레이 코팅(솔리드 + 그라데이션), 실크스크린 인쇄, 홋 스탬핑, 전기도금 메탈 칼라, 이너 라이너 인쇄.", jp: "フロスト、 spray coating（単色+グラデーション）、シルクスクリーン印刷、ホットスタンプ、電気めっきインナーライナー印刷。", tw: "磨砂、噴塗（純色 + 漸層）、絲印、燙金、電鍍金屬頸圈、內襯印刷。" },
  },
  {
    q: { en: "What is the lead time from deposit to delivery?", kr: "계약금 입금 후 납품까지 리드타임은 얼마나 걸리나요?", jp: "前入金から納品までのリードタイムは？", tw: "從訂金到交貨需要多久？" },
    a: { en: "5–7 days sampling + 20–35 days bulk production + 18–30 days sea freight to the EU/US. Air freight cuts transit to 4–6 days.", kr: "샘플링 5–7일 + 본 생산 20–35일 + 해상 운송 18–30일(유럽/미국). 항공 운송은 4–6일로 단축 가능합니다.", jp: "サンプル5〜7日 + 量産20〜35日 + 海運18〜30日（欧州/米国）。航空便なら4〜6日。", tw: "打樣 5–7 天 + 量產 20–35 天 + 海運 18–30 天（歐美）。空運可縮短至 4–6 天。" },
  },
  {
    q: { en: "Do you handle DDP shipping to the EU and USA?", kr: "유럽·미국으로의 DDP 배송을 대행해 주시나요?", jp: "EU・米国へのDDP配送も対応していますか？", tw: "是否提供 DDP 雙清送到歐美倉庫？" },
    a: { en: "Yes — we have dedicated forwarders in Hamburg, Rotterdam and Long Beach for door-to-door DDP, including customs duties and EU VAT.", kr: "네 — 함부르크, 로테르담, 롱비치에 전용 포워더가 있어 관세·EU VAT 포함 도어 투 도어 DDP가 가능합니다.", jp: "はい — ハンブルク、ロッテルダム、ロングビーチに専任フォワーダーを配置し、関税・EU VATを含むドア・ツー・ドアDDPに対応します。", tw: "是的 — 我們在漢堡、鹿特丹、長灘設有專屬貨代，可提供含關稅與 EU VAT 的 DDP 雙清到倉服務。" },
  },
  {
    q: { en: "Are your materials FDA and EU-compliant?", kr: "소재가 FDA 및 EU 규정을 준수하나요?", jp: "素材はFDA・EU規制に対応していますか？", tw: "原料是否符合 FDA 與歐盟法規？" },
    a: { en: "Yes — all glass is Type III soda-lime, food & cosmetic safe. We provide SGS heavy-metal test reports and FDA compliance documentation on request.", kr: "네 — 모든 유리는 Type III 소다라임, 식품·화장품 안전. SGS 중금속 시험 보고서 및 FDA 컴플라이언스 문서를 요청 시 제공합니다.", jp: "はい — ガラスはすべてType III ソーダライム、食品・化粧品安全。SGS重金属試験レポートとFDAコンプライアンス資料をご要望に応じて提供します。", tw: "是的 — 所有玻璃均為 Type III 鈉鈣玻璃，符合食品與化妝品安全。SGS 重金屬測試報告與 FDA 合規文件可依需求提供。" },
  },
];
