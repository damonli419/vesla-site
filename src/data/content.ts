export interface BlogPost {
  slug: string;
  title: { en: string; kr: string; jp: string; tw: string };
  excerpt: { en: string; kr: string; jp: string; tw: string };
  date: string;
  readMinutes: number;
  category: "guide" | "material" | "logistics" | "trend";
  // Estimated SEO keywords the article targets.
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
    keywords: ["frosted glass bottle photography", "luxury cosmetic packaging"],
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
    keywords: ["low MOQ cosmetic packaging", "indie beauty supplier"],
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
    keywords: ["shipping glass bottles internationally", "EXW FOB DDP packaging"],
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
    keywords: ["K-beauty packaging 2026", "Korean indie beauty brand"],
  },
  {
    slug: "glass-dropper-bottle-shapes-guide",
    title: {
      en: "5 Glass Dropper Bottle Shapes That Sell Best on Instagram",
      kr: "인스타그램에서 가장 잘 팔리는 유리 드롭퍼 보틀 5가지 쉐입",
      jp: "インスタグラムで最も売れるガラスドロッパーボトル5つの形状",
      tw: "Instagram 上最暢銷的 5 種玻璃滴管瓶形狀",
    },
    excerpt: {
      en: "From flat-shoulder to square to heart-shaped — which dropper bottle silhouette gets the most clicks, saves, and DMs from indie beauty buyers.",
      kr: "플랫 숄더부터 스퀘어, 하트 실루엣까지 — 어떤 드롭퍼 보틀이 인디 뷰티 바이어들의 클릭, 저장, DM을 가장 많이 받을까요.",
      jp: "フラットショルダーからスクエア、ハート型まで — どのドロッパーボトルのシルエットがインディービューティーバイヤーから最もクリック・保存・DMを得られるか。",
      tw: "從平肩到方形到愛心形——哪種滴管瓶輪廓最能獲得獨立美妝買家的點擊、收藏與私訊。",
    },
    date: "2026-08-01",
    readMinutes: 5,
    category: "trend",
    keywords: ["glass dropper bottle shapes", "instagram packaging design", "indie beauty packaging trend", "serum bottle photography", "best selling dropper bottle silhouette"],
  },
  {
    slug: "frosted-vs-clear-glass-packaging",
    title: {
      en: "Frosted vs Clear Glass Packaging: A 2026 Brand Buyer's Guide",
      kr: "프로스트 vs 클리어 글래스 포장: 2026년 브랜드 바이어 가이드",
      jp: "フロストガラス vs クリアガラス：2026年版ブランドバイヤーズガイド",
      tw: "磨砂 vs 透明玻璃包裝：2026 品牌買家指南",
    },
    excerpt: {
      en: "Photography, perceived value, scratch resistance, cost — we break down when frosted glass wins and when clear glass is still the smarter choice for your skincare line.",
      kr: "촬영, 인지 가치, 스크래치 저항성, 비용 — 프로스트 글래스가 유리한 시기와 클리어 글래스가 스킨케어 라인에 더 현명한 선택인 시기를 분석합니다.",
      jp: "撮影、知覚価値、耐傷性、コスト — フロストガラスが勝るケースと、クリアガラスがスキンケアラインにとって依然賢い選択であるケースを詳しく解説。",
      tw: "拍攝效果、品牌感知價值、耐刮度、成本——我們拆解何時磨砂玻璃勝出、何時透明玻璃仍是護膚線的聰明選擇。",
    },
    date: "2026-08-01",
    readMinutes: 6,
    category: "material",
    keywords: ["frosted glass packaging", "clear glass packaging comparison", "cosmetic glass finish guide", "matte glass bottle", "skincare packaging material choice"],
  },
  {
    slug: "ship-glass-bottles-china-usa",
    title: {
      en: "How to Ship Glass Bottles from China to the USA Without Breakage",
      kr: "중국에서 미국까지 깨짐 없이 유리병 배송하는 방법",
      jp: "ガラスボトルを中国から米国へ破損なく配送する方法",
      tw: "如何從中國安全運送玻璃瓶到美國：零破損指南",
    },
    excerpt: {
      en: "Drop-test certified cartons, DDP customs clearance, freight options (sea vs air) — everything a brand founder needs to know before ordering 5,000+ glass bottles from China.",
      kr: "낙하 테스트 인증 카톤, DDP 통관, 해상 vs 항공 운송 옵션 — 중국에서 5,000개 이상 유리병을 주문하기 전 브랜드 창업자가 알아야 할 모든 것.",
      jp: "落下試験認定カートン、DDP通関、海上 vs 航空輸送オプション — 中国から5,000本以上のガラスボトルを発注する前にブランド創業者が知っておくべき全て。",
      tw: "通過跌落測試的出口紙箱、DDP 雙清關、海運 vs 空運選項——從中國下單 5,000 瓶以上之前品牌創辦人必須知道的一切。",
    },
    date: "2026-08-01",
    readMinutes: 7,
    category: "logistics",
    keywords: ["ship glass bottles China USA", "DDP glass packaging shipping", "glass bottle export carton", "sea freight cosmetic packaging", "USA cosmetic packaging logistics"],
  },
];

// FAQ entries rendered on the contact page for SEO + UX.
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
