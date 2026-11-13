// FAQ entries rendered on the Contact & Home pages for SEO + UX (voice search & AI snippets).
// Split from content.ts so the 31-post blog library (with full EN bodies) is not pulled
// into the main bundle via tree-shaking-resistant named imports — faq.ts is tiny (~8 KB),
// while blogPosts.ts (~100 KB) stays in the route-lazy Blog chunks only.
export interface FaqItem {
  q: { en: string; kr: string; jp: string; tw: string };
  a: { en: string; kr: string; jp: string; tw: string };
}

export const faqItems: FaqItem[] = [
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
    a: { en: "Frosting, spray coating (solid + gradient), silk-screen printing, hot stamping, electroplated metal collars and inner-liner printing.", kr: "프로스팅, 스프레이 코팅(솔리드 + 그라데이션), 실크스크린 인쇄, 핫 스탬핑, 전기도금 메탈 칼라, 이너 라이너 인쇄.", jp: "フロスト、 spray coating（単色+グラデーション）、シルクスクリーン印刷、ホットスタンプ、電気めっきインナーライナー印刷。", tw: "磨砂、噴塗（純色 + 漸層）、絲印、燙金、電鍍金屬頸圈、內襯印刷。" },
  },
  {
    q: { en: "What is the lead time from deposit to delivery?", kr: "계약금 입금 후 납품까지 리드타임은 얼마나 걸리나요?", jp: "前入金から納品までのリードタイムは？", tw: "從訂金到交貨需要多久？" },
    a: { en: "5–7 days sampling + 7–15 days bulk production on stock molds (25–30 days for custom molds) + 18–30 days sea freight to the EU/US. Air freight cuts transit to 4–6 days.", kr: "샘플링 5–7일 + 본 생산 20–35일 + 해상 운송 18–30일(유럽/미국). 항공 운송은 4–6일로 단축 가능합니다.", jp: "サンプル5〜7日 + 量産20〜35日 + 海運18〜30日（欧州/米国）。航空便なら4〜6日。", tw: "打樣 5–7 天 + 量產 20–35 天 + 海運 18–30 天（歐美）。空運可縮短至 4–6 天。" },
  },
  {
    q: { en: "Do you handle DDP shipping to the EU and USA?", kr: "유럽·미국으로의 DDP 배송을 대행해 주시나요?", jp: "EU・米国へのDDP配送も対応していますか？", tw: "是否提供 DDP 雙清送到歐美倉庫？" },
    a: { en: "Yes — we have dedicated forwarders in Hamburg, Rotterdam and Long Beach for door-to-door DDP, including customs duties and EU VAT.", kr: "네 — 함부르크, 로테르담, 롱비치에 전용 포워더가 있어 관세·EU VAT 포함 도어 투 도어 DDP가 가능합니다.", jp: "はい — ハンブルク、ロッテルダム、ロングビーチに専任フォワーダーを配置し、関税・EU VATを含むドア・ツー・ドアDDPに対応します。", tw: "是的 — 我們在漢堡、鹿特丹、長灘設有專屬貨代，可提供含關稅與 EU VAT 的 DDP 雙清到倉服務。" },
  },
  {
    q: { en: "Are your materials FDA and EU-compliant?", kr: "소재가 FDA 및 EU 규정을 준수하나요?", jp: "素材はFDA・EU規制に対応していますか？", tw: "原料是否符合 FDA 與歐盟法規？" },
    a: { en: "Yes — all glass is Type III soda-lime, food & cosmetic safe. We provide SGS heavy-metal test reports and FDA compliance documentation on request.", kr: "네 — 모든 유리는 Type III 소다라임, 식품·화장품 안전. SGS 중금속 시험 보고서 및 FDA 컴플라이언스 문서를 요청 시 제공합니다.", jp: "はい — ガラスはすべてType III ソーダライム、食品・化粧品安全。SGS重金属試験レポートとFDAコンプライアンス資料をご要望に応じて提供します。", tw: "是的 — 所有玻璃均為 Type III 鈉鈣玻璃，符合食品與化妝品安全。SGS 重金屬測試報告與 FDA 合規文件可依需求提供。" },
  },
  {
    q: { en: "How quickly can I get physical samples for my brand pitch?", kr: "샘플 소요 시간?", jp: "サンプル所要時間？", tw: "樣品多快能拿到？" },
    a: { en: "We ship fully decorated sample kits (3-5 items) within 5-7 business days via DHL Express. Rush service (3 days) available for time-sensitive pitches. Kit includes MOQ pricing sheet and closure compatibility guide.", kr: "5~7 영업일 DHL Express. 긴급 3일 가능.", jp: "5~7営業日 DHL Express。特急3日対応可。", tw: "5-7 工作日 DHL Express。急件 3 天可。" },
  },
  {
    q: { en: "How long does DDP shipping to the USA actually take?", kr: "미국 DDP 소요 기간?", jp: "米国DDP所要日数？", tw: "美國 DDP 要多久？" },
    a: { en: "20-26 calendar days door-to-door: 14-18d sea freight + 3-5d US customs + 2-3d drayage. Add 5-7d during peak season August-October. Live container tracking provided throughout.", kr: "도어 투 도어 20~26일. 성수기 +5~7일.", jp: "ドアツードア20~26日。繁忙期+5~7일。", tw: "門到門 20-26 天。旺季加 5-7 天。" },
  },
  {
    q: { en: "Are your glass bottles EU cosmetic compliant (EC 1223/2009)?", kr: "EU 규정 준수?", jp: "EU規則準拠？", tw: "符合歐盟法規？" },
    a: { en: "Yes. Type III soda-lime glass complies with EU 1935/2004 and EC 1223/2009 migration limits. ISO 17025-accredited heavy metal test reports included with every EU shipment. REACH and RoHS declarations available on request.", kr: "네. Type III 소다라임 유리. ISO 17025 보고서 제공.", jp: "はい。Type IIIソーダライムガラス。ISO 17025報告書付き。", tw: "是的。Type III 鈉鈣玻璃。附 ISO 17025 測試報告。" },
  },
];
