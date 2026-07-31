import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import LazyImage from "../components/LazyImage";
import { useUI } from "../i18n/UIContext";

const PEXEL = (id: number, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

const copy = {
  en: {
    eyebrow: "About Vesla",
    titleA: "Sixteen Years of",
    titleB: "Glass, in One Factory",
    intro:
      "We are a 280-person cosmetic glass packaging manufacturer based in Guangzhou, Guangdong. Every bottle, jar and vial we ship begins as molten glass on our own production lines — designed, decorated, inspected and exported under one roof.",
    factory: "Factory",
    factorySub: "32,000 m²",
    capacity: "Annual capacity",
    capacitySub: "60M units",
    sku: "Active SKUs",
    skuSub: "1,200+",
    team: "Team",
    teamSub: "280 people",
    timelineTitle: "How we got here",
    timeline: [
      { y: "2009", t: "Founded as a single-line glass workshop in Guangzhou, focused on perfume bottles." },
      { y: "2013", t: "Added in-house frosting & spray coating; first export to a French indie perfumery." },
      { y: "2017", t: "ISO 9001 certified; opened a dedicated cosmetic packaging line for droppers & jars." },
      { y: "2020", t: "Reached 40 export countries; launched our in-house decoration studio." },
      { y: "2024", t: "Annual capacity crossed 60 million units; opened DDP routes to Hamburg, Rotterdam and Long Beach." },
    ],
    certsTitle: "Certifications & Compliance",
    certs: [
      { name: "ISO 9001:2015", desc: "Quality management system — annual surveillance audit by SGS." },
      { name: "FDA 21 CFR", desc: "All glass conforms to FDA food-contact standards for cosmetics." },
      { name: "EU 1935/2004", desc: "Materials compliant for food and cosmetic contact in the European Union." },
      { name: "REACH & RoHS", desc: "No Substances of Very High Concern above 0.1% w/w threshold." },
      { name: "SGS Audited", desc: "Independent social-compliance audit refreshed every 12 months." },
      { name: "ISO 14001", desc: "Environmental management — recycling rate above 92% on glass cullet." },
    ],
    tourTitle: "Inside the factory",
    tourSub: "A walk through forming, annealing, decoration, assembly and inspection.",
    tour: [
      { caption: "Automated forming line — 6 IS machines running 24/7", image: PEXEL(36423805) },
      { caption: "Inline annealing lehr with PID-controlled temperature profile", image: PEXEL(36423801) },
      { caption: "Spray coating & color frosting booth", image: PEXEL(36423824) },
      { caption: "Silk-screen and hot-stamping decoration studio", image: PEXEL(36423800) },
      { caption: "QC lab — dimensional checks & cosmetic inspection", image: PEXEL(9574449) },
      { caption: "Drop-test certified export packing station", image: PEXEL(36423817) },
    ],
    modesTitle: "How We Work With You",
    modes: [
      { name: "OEM", desc: "You provide the design or CAD. We manufacture to your exact specifications — glass forming, decoration, assembly, export.", icon: "🛠" },
      { name: "ODM", desc: "Pick from our 300+ stock molds and customize the finish, color, cap, and decoration to match your brand.", icon: "🎨" },
      { name: "Stock Supply", desc: "Need a fast restock? We keep popular sizes in inventory for 2-week turnaround on standard finishes.", icon: "⚡" },
    ],
    clientsTitle: "What Our Clients Say",
    clients: [
      { name: "Sophie L., Paris", text: "We launched our 3-SKU serum line with Vesla's frosted droppers. The gold-collar set photographed beautifully for our website — customers thought the packaging alone justified the price.", brand: "French indie skincare brand" },
      { name: "Marcus T., Los Angeles", text: "As a first-time founder, I was terrified about MOQ and lead times. Vesla walked me through every step — from mold selection to DDP delivery. Our 50g cream jars arrived at our 3PL exactly on schedule.", brand: "US men's grooming brand" },
      { name: "Yuna K., Seoul", text: "We needed violet glass jars for our clean beauty line and every supplier we contacted said minimum 30,000. Vesla started us at 5,000 with custom silk-screen decoration. The QC reports came with every shipment.", brand: "K-beauty clean skincare brand" },
    ],
    ctaTitle: "Visit the factory",
    ctaBody: "We welcome brand owners and procurement teams to tour our Guangzhou facility. We'll arrange airport pickup, factory visit, and a same-day sampling session in our decoration studio. Video calls also available — ask your sales contact for a live line walkthrough.",
    cta: "Book a Factory Tour",
  },
  kr: {
    eyebrow: "Vesla 소개",
    titleA: "16년 경력의",
    titleB: "원스톱 유리 공장",
    intro:
      "저장성 광저우에 기반을 둔 280명 규모의 화장품 유리 포장 제조사입니다. 출하하는 모든 보틀, 자, 바이알은 자체 생산 라인에서 용융 유리로부터 시작되어, 디자인·데코레이션·검수·수출까지 한 지붕 아래에서 진행됩니다.",
    factory: "공장 면적", factorySub: "32,000 m²",
    capacity: "연간 생산 능력", capacitySub: "6,000만 개",
    sku: "운영 SKU", skuSub: "1,200+",
    team: "임직원", teamSub: "280명",
    timelineTitle: "여기까지의 여정",
    timeline: [
      { y: "2009", t: "광저우의 단일 라인 유리 공방으로 설립, 향수 보틀에 집중." },
      { y: "2013", t: "자체 프로스팅 및 스프레이 코팅 도입, 프랑스 인디 향수 브랜드로 첫 수출." },
      { y: "2017", t: "ISO 9001 인증, 드롭퍼·자 전용 화장품 포장 라인 신설." },
      { y: "2020", t: "수출 40개국 돌파, 사내 데코레이션 스튜디오 출범." },
      { y: "2024", t: "연간 생산 능력 6,000만 개 돌파, 함부르크·로테르담·롱비치 DDP 루트 개설." },
    ],
    certsTitle: "인증 및 컴플라이언스",
    certs: [
      { name: "ISO 9001:2015", desc: "품질경영시스템 — SGS 연차 심사." },
      { name: "FDA 21 CFR", desc: "모든 유리는 화장품용 FDA 식품접촉 기준을 충족." },
      { name: "EU 1935/2004", desc: "EU 식품·화장품 접촉 재료 규정 준수." },
      { name: "REACH & RoHS", desc: "고관심물질(SVHC) 0.1% w/w 미만." },
      { name: "SGS 감사", desc: "독립 사회적 컴플라이언스 감사 12개월 주기 갱신." },
      { name: "ISO 14001", desc: "환경경영 — 유리 컬렛 재활용률 92% 이상." },
    ],
    tourTitle: "공장 내부",
    tourSub: "성형, 어닐링, 데코레이션, 조립, 검수 라인 투어.",
    tour: [
      { caption: "자동 성형 라인 — IS 머신 6대 24/7 가동", image: PEXEL(36423805) },
      { caption: "PID 제어 어닐링 로", image: PEXEL(36423801) },
      { caption: "스프레이 코팅 & 컬러 프로스팅 부스", image: PEXEL(36423824) },
      { caption: "실크스크린 & 홋 스탬핑 데코레이션 스튜디오", image: PEXEL(36423800) },
      { caption: "QC 랩 — 치수 검사 & 외관 검수", image: PEXEL(9574449) },
      { caption: "드롭 테스트 인증 수출 포장 스테이션", image: PEXEL(36423817) },
    ],
    ctaTitle: "공장을 방문하세요",
    ctaBody: "브랜드 오너와 구매 담당자의 광저우 공장 방문을 환영합니다. 공항 픽업, 공장見学, 데코레이션 스튜디오에서 당일 샘플링까지安排해 드립니다.",
    cta: "공장 방문 계획",
  },
  jp: {
    eyebrow: "Veslaについて",
    titleA: "16年の実績、",
    titleB: "ワンストップのガラス工場",
    intro:
      "広東省広州に拠点を置く280名の化粧品ガラス包装メーカーです。出荷するすべてのボトル・ジャー・バイアルは、溶融ガラスから自社の生産ラインで始まり、設計・装飾・検品・輸出を一貫して行います。",
    factory: "工場", factorySub: "32,000 m²",
    capacity: "年間生産能力", capacitySub: "6,000万個",
    sku: "稼働SKU", skuSub: "1,200+",
    team: "従業員", teamSub: "280名",
    timelineTitle: "これまでの歩み",
    timeline: [
      { y: "2009", t: "広州の単一ラインガラス工房として設立。香水ボトルに集中。" },
      { y: "2013", t: "社内フロスト・スプレイコーティングを導入、フランスのインディーパフューマリーへ初輸出。" },
      { y: "2017", t: "ISO 9001認証取得。ドロッパー・ジャー専用の化粧品包装ラインを新設。" },
      { y: "2020", t: "輸出国40か国達成。社内装飾スタジオを稼働。" },
      { y: "2024", t: "年間生産能力6,000万個突破。ハンブルク・ロッテルダム・ロングビーチDDPルート開設。" },
    ],
    certsTitle: "認証・コンプライアンス",
    certs: [
      { name: "ISO 9001:2015", desc: "品質マネジメントシステム — SGSによる年次サーベイランス監査。" },
      { name: "FDA 21 CFR", desc: "全ガラスが化粧品向けFDA食品接触規格に準拠。" },
      { name: "EU 1935/2004", desc: "EU食品・化粧品接触材料規制に準拠。" },
      { name: "REACH & RoHS", desc: "高懸念物質（SVHC）0.1% w/w未満。" },
      { name: "SGS監査", desc: "独立した社会的コンプライアンス監査を12か月ごとに更新。" },
      { name: "ISO 14001", desc: "環境マネジメント — ガラスカレットのリサイクル率92%以上。" },
    ],
    tourTitle: "工場内観",
    tourSub: "成形・アニール・装飾・組立・検品ラインのご案内。",
    tour: [
      { caption: "自動成形ライン — ISマシン6台が24時間稼働", image: PEXEL(36423805) },
      { caption: "PID制御のアニール炉", image: PEXEL(36423801) },
      { caption: "スプレイコーティング・カラーフロストブース", image: PEXEL(36423824) },
      { caption: "シルクスクリーン・ホットスタンプ装飾スタジオ", image: PEXEL(36423800) },
      { caption: "QCラボ — 寸法検査・外観検査", image: PEXEL(9574449) },
      { caption: "落下試験合格の輸出包装ステーション", image: PEXEL(36423817) },
    ],
    ctaTitle: "工場見学へ",
    ctaBody: "ブランドオーナー・調達担当者の広州工場見学を歓迎します。空港送迎、工場見学、装飾スタジオでの当日サンプリングまで手配いたします。",
    cta: "工場訪問を計画する",
  },
  tw: {
    eyebrow: "關於 Vesla",
    titleA: "十六年玻璃功力,",
    titleB: "一廠全程把關",
    intro:
      "我們是位於廣東廣州、280 位同仁的化妝品玻璃包裝製造商。每一支瓶、罐、小瓶都從自有產線的融玻璃開始,於同一屋簷下完成設計、裝飾、驗貨與出口。",
    factory: "廠房", factorySub: "32,000 m²",
    capacity: "年產能", capacitySub: "6,000 萬瓶",
    sku: "在產 SKU", skuSub: "1,200+",
    team: "員工", teamSub: "280 人",
    timelineTitle: "一路走來",
    timeline: [
      { y: "2009", t: "於廣州成立,專注香水瓶的單線玻璃工坊。" },
      { y: "2013", t: "導入自有磨砂與噴塗工藝,首次出口至法國獨立香水品牌。" },
      { y: "2017", t: "通過 ISO 9001,增設滴管瓶與膏霜瓶專用化妝品包裝產線。" },
      { y: "2020", t: "出口突破 40 國,成立自有裝飾工作室。" },
      { y: "2024", t: "年產能突破 6,000 萬瓶,開通漢堡、鹿特丹、長灘 DDP 雙清路線。" },
    ],
    certsTitle: "認證與合規",
    certs: [
      { name: "ISO 9001:2015", desc: "品質管理系統 — SGS 年度監督稽核。" },
      { name: "FDA 21 CFR", desc: "全系列玻璃符合化妝品用 FDA 食品接觸標準。" },
      { name: "EU 1935/2004", desc: "符合歐盟食品與化妝品接觸材料規範。" },
      { name: "REACH 與 RoHS", desc: "高關注物質 (SVHC) 含量低於 0.1% w/w 閾值。" },
      { name: "SGS 稽核", desc: "獨立社會責任稽核每 12 個月更新。" },
      { name: "ISO 14001", desc: "環境管理 — 玻璃碎料回收率達 92% 以上。" },
    ],
    tourTitle: "工廠內部",
    tourSub: "成型、退火、裝飾、組裝與驗貨產線巡禮。",
    tour: [
      { caption: "自動成型產線 — 6 台 IS 機 24 小時不停機", image: PEXEL(36423805) },
      { caption: "PID 控制退火爐", image: PEXEL(36423801) },
      { caption: "噴塗與彩色磨砂工坊", image: PEXEL(36423824) },
      { caption: "絲印與燙金裝飾工作室", image: PEXEL(36423800) },
      { caption: "品管實驗室 — 尺寸量測與外觀檢驗", image: PEXEL(9574449) },
      { caption: "通過跌落測試的出口包裝工站", image: PEXEL(36423817) },
    ],
    ctaTitle: "蒞臨工廠",
    ctaBody: "我們歡迎品牌主與採購團隊蒞臨廣州廠區。我們將安排機場接送、工廠參觀,以及於裝飾工作室的當日打樣。",
    cta: "預約工廠參訪",
  },
};

export default function About() {
  const { locale } = useUI();
  const c = copy[locale];

  return (
    <div>
      <Seo
        title="About"
        description="Inside Vesla — 16 years, 280 people, 60M annual capacity. ISO 9001, FDA & EU compliant. Factory tours welcome."
        path="/about"
      />

      <section className="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">{c.eyebrow}</p>
            <h1 className="font-serif text-4xl font-medium leading-tight text-ink sm:text-6xl">
              {c.titleA}
              <br />
              <span className="italic text-gold-dark">{c.titleB}</span>
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-soft">{c.intro}</p>
            <div className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { v: c.factory, s: c.factorySub },
                { v: c.capacity, s: c.capacitySub },
                { v: c.sku, s: c.skuSub },
                { v: c.team, s: c.teamSub },
              ].map((stat) => (
                <div key={stat.s} className="border-t border-gold/30 pt-4">
                  <div className="font-serif text-2xl text-ink">{stat.v}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-widest text-ink-soft">{stat.s}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[PEXEL(36423805), PEXEL(36423800), PEXEL(36423801), PEXEL(36423824)].map((src, i) => (
              <div key={i} className={`overflow-hidden rounded-2xl ring-1 ring-gold/15 ${i % 2 ? "mt-8" : ""}`}>
                <LazyImage src={src} alt={`Factory ${i + 1}`} className="aspect-[4/5] w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-dark/60 py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="mb-12 text-center font-serif text-3xl text-ink sm:text-4xl">{c.timelineTitle}</h2>
          <ol className="relative space-y-10 border-l border-gold/30 pl-8">
            {c.timeline.map((t) => (
              <li key={t.y} className="relative">
                <span className="absolute -left-[37px] flex h-6 w-6 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-white">
                  ●
                </span>
                <div className="font-serif text-2xl text-gold-dark">{t.y}</div>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{t.t}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <h2 className="mb-12 text-center font-serif text-3xl text-ink sm:text-4xl">{c.certsTitle}</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {c.certs.map((cert) => (
            <div key={cert.name} className="rounded-2xl bg-white p-6 ring-1 ring-gold/20">
              <div className="font-serif text-lg text-gold-dark">{cert.name}</div>
              <p className="mt-2 text-sm text-ink-soft">{cert.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Cooperation Modes ─────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <h2 className="mb-12 text-center font-serif text-3xl text-ink sm:text-4xl">How We Work With You</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { name: "OEM", desc: "You provide the design or CAD. We manufacture to your exact specs — glass forming, decoration, assembly, export.", icon: "🛠" },
            { name: "ODM", desc: "Pick from our 300+ stock molds and customize the finish, color, cap and decoration to match your brand.", icon: "🎨" },
            { name: "Stock Supply", desc: "Need a fast restock? We keep popular sizes in inventory for 2-week turnaround on standard finishes.", icon: "⚡" },
          ].map((m) => (
            <div key={m.name} className="rounded-2xl bg-white p-8 text-center ring-1 ring-gold/20">
              <div className="text-4xl mb-4">{m.icon}</div>
              <div className="font-serif text-xl text-gold-dark">{m.name}</div>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 9-Step Process ─────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <h2 className="mb-4 text-center font-serif text-3xl text-ink sm:text-4xl">From Concept to Container</h2>
        <p className="mb-12 text-center text-sm text-ink-soft">Every VESLA bottle follows this 9-step journey — from your first sketch to the pallet leaving our Guangzhou facility.</p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {[
            { n: 1, title: "Idea", desc: "You share your vision, target audience & budget — we recommend the right glass type, shape and decoration.", img: "A714fe69e5f0c4660ad68d4afe3a14407F" },
            { n: 2, title: "3D Modeling", desc: "Our engineers build a precise CAD model of your bottle, showing every angle, neck finish and label recess.", img: "Abad35464fec74c6689591886a178361cG" },
            { n: 3, title: "3D Printing", desc: "A physical resin prototype is printed in-house so you can hold, test and photograph the bottle before cutting steel.", img: "A6734f2bc67c34e5598e0aece17798d79M" },
            { n: 4, title: "Trial Mold", desc: "We cut a trial mold and run a short batch on our IS forming line — same glass, same process as mass production.", img: "https://sc02.alicdn.com/kf/H507b403bcd8c49f18e0ef4b2dd0e9f1dw.jpg" },
            { n: 5, title: "Samples", desc: "Finished samples with your chosen decoration arrive at your door. Test fill, check cap torque, photograph for your launch.", img: "Abc9e1f5ec8f84484a9665349e9ac77eca" },
            { n: 6, title: "Confirm", desc: "You review the samples, request any tweaks, and give the green light. Production mold cutting begins.", img: "A0b845672bb6043ada33d694815768129H" },
            { n: 7, title: "Mass Production", desc: "Full batch runs on our 6 IS machines under ISO 9001 quality control. Inline inspection at every station.", img: "https://sc02.alicdn.com/kf/H3ed4c7e33e7444e0b8776874383d6c0d2.jpg" },
            { n: 8, title: "Quality Testing", desc: "AQL sampling, drop testing and dimensional checks before any bottle leaves the QC lab.", img: "A3fa0a4dee6c14803924e1a1558cc248c1" },
            { n: 9, title: "Packaging & Ship", desc: "Drop-test certified export cartons, palletized and strapped. EXW, FOB or DDP to your warehouse.", img: "Aa60728bf697d43b7a09df0c6f4990e1ck" },
          ].map((s) => (
            <div key={s.n} className="group overflow-hidden rounded-2xl bg-white ring-1 ring-gold/20 transition-shadow hover:shadow-lg">
              <div className="relative aspect-square overflow-hidden">
                <img src={s.img.startsWith("http") ? s.img : `https://sc02.alicdn.com/kf/${s.img}.png`} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute top-3 left-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-gold-dark shadow-sm">{s.n}</div>
              </div>
              <div className="p-4">
                <div className="font-serif text-base text-ink">{s.title}</div>
                <p className="mt-1 text-xs leading-relaxed text-ink-soft">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Client Testimonials ─────────────────────── */}
      <section className="bg-cream-dark/60 py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="mb-12 text-center font-serif text-3xl text-ink sm:text-4xl">What Our Clients Say</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { name: "Sophie L., Paris", text: "We launched our 3-SKU serum line with Vesla's frosted droppers. The gold-collar set photographed beautifully — customers thought the packaging alone justified the price.", brand: "French indie skincare" },
              { name: "Marcus T., Los Angeles", text: "As a first-time founder, I was terrified about MOQ. Vesla walked me through every step — from mold selection to DDP delivery. Our 50g cream jars arrived exactly on schedule.", brand: "US men's grooming" },
              { name: "Yuna K., Seoul", text: "Every supplier said minimum 30,000 for violet glass. Vesla started us at 5,000 with custom silk-screen. QC reports came with every shipment.", brand: "K-beauty clean skincare" },
            ].map((c) => (
              <div key={c.name} className="rounded-2xl bg-white p-8 ring-1 ring-gold/20">
                <div className="flex gap-1 mb-4 text-gold">{Array(5).fill("★").join("")}</div>
                <p className="text-sm leading-relaxed text-ink-soft italic">"{c.text}"</p>
                <div className="mt-5 border-t border-gold/15 pt-4">
                  <div className="font-semibold text-ink text-sm">{c.name}</div>
                  <div className="text-xs text-ink-soft mt-0.5">{c.brand}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-dark/60 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl text-ink sm:text-4xl">{c.tourTitle}</h2>
            <p className="mt-3 text-sm text-ink-soft">{c.tourSub}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.tour.map((t) => (
              <figure key={t.caption} className="overflow-hidden rounded-2xl bg-white ring-1 ring-gold/20">
                <LazyImage src={t.image} alt={t.caption} className="aspect-[4/3] w-full object-cover" />
                <figcaption className="p-4 text-xs font-medium text-ink-soft">{t.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="font-serif text-3xl text-ink sm:text-4xl">{c.ctaTitle}</h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-soft">{c.ctaBody}</p>
        <p className="mt-2 text-xs text-ink-soft">Video call walkthroughs also available — ask your sales contact.</p>
        <Link
          to="/contact"
          className="mt-8 inline-block rounded-full bg-gold px-10 py-4 text-sm font-semibold tracking-wide text-white shadow-md transition hover:bg-gold-dark"
        >
          {c.cta}
        </Link>
      </section>
    </div>
  );
}
