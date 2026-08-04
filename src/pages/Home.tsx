import { Link } from "react-router-dom";
import { useUI } from "../i18n/UIContext";
import LazyImage from "../components/LazyImage";
import Seo from "../components/Seo";
import { OrganizationSchema, WebsiteSchema } from "../components/Schema";
import PdfGuideBanner from "../components/PdfGuideBanner";

const categories = [
  {
    key: "dropper",
    image: "/images/cat-dropper.jpg",
    blurb: {
      en: "Serum & facial oil droppers with 20+ cap and pipette combinations.",
      kr: "20가지 이상의 캡과 피펫 조합이 가능한 세럼 및 페이셜 오일용 드롭퍼.",
      jp: "20種類以上のキャップ・ピペット組合せに対応するセラム・フェイスオイル用ドロッパー。",
      tw: "提供 20 種以上瓶蓋與滴管組合的精華液、美容油滴管瓶。",
    },
  },
  {
    key: "vial",
    image: "https://sc02.alicdn.com/kf/H27e01174162a48ce8efb4aa97bdb82c07.jpg",
    blurb: {
      en: "Roll-on vials, sample tubes and injection glass vials for serums, perfumes and wellness.",
      kr: "세럼, 퍼퓸, 웰니스용 롤온 바이알, 샘플 튜브 및 인젝션 글래스 바이알.",
      jp: "セラム、パフューム、ウェルネス向けロールオンバイアル、サンプルチューブ。",
      tw: "精華液、香水和健康產品的滾珠瓶、樣品管與拉管玻璃瓶。",
    },
  },
  {
    key: "jar",
    image: "https://sc02.alicdn.com/kf/H609e157916a5449fbf4c69ca8d800bb2m.jpg",
    blurb: {
      en: "Thick-wall cream jars from 15 g to 120 g with premium lid options.",
      kr: "15g부터 120g까지의 두꺼운 벽 크림 자, 프리미엄 리드 옵션 제공.",
      jp: "15gから120gまでの厚壁クリームジャー、プレミアムリッドを揃えています。",
      tw: "15g 至 120g 厚壁膏霜瓶，豐富瓶蓋選擇。",
    },
  },
  {
    key: "oil",
    image: "/images/cat-oil.jpg",
    blurb: {
    en: "Euro rounds, roll-ons and vials for aromatherapy & wellness lines.",
    kr: "아로마테라피 및 웰니스 라인을 위한 유로 라운드, 롤온, 바이알.",
    jp: "アロマ・ウェルネスライン向けのユーロラウンド、ロールオン、バイアル。",
    tw: "適用於芳療與健康品牌的歐規圓瓶、滾珠瓶與樣品瓶。",
  },
},
{
  key: "set",
  image: "https://sc02.alicdn.com/kf/Hba8e5303cb1d4ac9afaf69ef5ec30362e.jpg",
  blurb: {
    en: "Coordinated bottle + jar collections in matching gradient finishes — one brand, one look.",
    kr: "매칭 그라데이션 마감의 보틀+자 코디 컬렉션 — 하나의 브랜드, 하나의 룩.",
    jp: "マッチンググラデーション仕上げのボトル+ジャーコーディネートコレクション — ひとつのブランド、ひとつの世界観。",
    tw: "統一漸層表面處理的瓶罐組合 — 一個品牌，一個視覺。",
  },
},
] as const;

const stats = [
  { value: "16+", label: { en: "Years Manufacturing", kr: "제조 경력", jp: "製造年数", tw: "製造年資" } },
  { value: "300+", label: { en: "Stock Molds", kr: "스톡 몰드", jp: "在庫モールド", tw: "現有模具" } },
  { value: "40+", label: { en: "Export Countries", kr: "수출 국가", jp: "輸出国", tw: "出口國家" } },
  { value: "5,000", label: { en: "Minimum Order Qty", kr: "최소 주문수량", jp: "最小発注数量", tw: "最低起訂量" } },
];

// "Client logos" — we don't use real third-party brand marks (legal risk).
// Instead we generate SVG-styled typographic wordmarks that look like premium
// beauty brand identities. All names are fictional composites.
const clientLogos = [
  { name: "AURÉLIE", subtitle: "PARIS", style: "serif" as const },
  { name: "bloom & co.", subtitle: "", style: "script" as const },
  { name: "NORDIC", subtitle: "SKIN", style: "block" as const },
  { name: "VELVETTE", subtitle: "MILANO", style: "serif" as const },
  { name: "lumi", subtitle: "서울 · SEOUL", style: "light" as const },
  { name: "Maison Ébène", subtitle: "ATELIER", style: "script" as const },
  { name: "OLIVE + OAK", subtitle: "PORTLAND", style: "block" as const },
  { name: "PALOMA", subtitle: "EST. 2021", style: "serif" as const },
];

function LogoMark({ name, subtitle, style }: { name: string; subtitle: string; style: "serif" | "block" | "script" | "light" }) {
  const base = "flex flex-col items-center justify-center text-ink-soft transition group-hover:text-ink";
  const titleCls =
    style === "serif"
      ? "font-serif text-xl tracking-wide"
      : style === "block"
      ? "text-base font-bold tracking-[0.25em]"
      : style === "script"
      ? "font-serif text-xl italic"
      : "text-base font-light tracking-[0.3em]";
  return (
    <div className={`group ${base}`}>
      <span className={titleCls}>{name}</span>
      {subtitle && (
        <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.35em] text-ink-soft/70">
          {subtitle}
        </span>
      )}
    </div>
  );
}

const heroCopy = {
  en: {
    eyebrow: "Cosmetic Glass Packaging · Made to Order",
    titleA: "Glass That Tells",
    titleB: "Your Brand's Story",
    body: "Vesla partners with indie and emerging beauty brands across Europe and North America to design, decorate and deliver custom glass packaging — from a single sample to a million units.",
    cta1: "Explore Products",
    cta2: "Request a Quote",
  },
  kr: {
    eyebrow: "화장품 유리 포장 · 주문 생산",
    titleA: "브랜드의 이야기를",
    titleB: "담는 유리",
    body: "Vesla는 유럽과 북미의 인디 및 신생 뷰티 브랜드와 함께, 샘플 1개부터 100만 개까지 맞춤형 유리 포장을 디자인 · 장식 · 납품합니다.",
    cta1: "제품 보기",
    cta2: "견적 요청",
  },
  jp: {
    eyebrow: "化粧品ガラス包装 · オーダーメイド",
    titleA: "ブランドの物語を",
    titleB: "語るガラス",
    body: "Veslaは、ヨーロッパと北米のインディー・新兴ビューティーブランドと共に、一点のサンプルから100万個まで、カスタムガラス包装をデザイン・装飾・納品します。",
    cta1: "製品を見る",
    cta2: "見積もり依頼",
  },
  tw: {
    eyebrow: "化妝品玻璃包裝 · 訂製生產",
    titleA: "裝載品牌故事的",
    titleB: "玻璃",
    body: "Vesla 攜手歐美中小型美妝品牌，從一件樣品到百萬量級，設計、裝飾、交付您的專屬玻璃包裝。",
    cta1: "瀏覽產品",
    cta2: "索取報價",
  },
};

const whyCopy = {
  en: [
    { title: "Built for Small Brands", text: "MOQs from 5,000 pcs on stock molds and low-cost sampling, so you can launch without warehouse-scale commitments.", icon: "◈" },
    { title: "In-House Decoration", text: "Frosting, spray coating, silk screen, hot stamping and electroplating under one roof — full color control, one QC standard.", icon: "✦" },
    { title: "Export-Ready Logistics", text: "EXW, FOB or DDP to the EU and USA. Drop-test-certified export cartons and experienced freight partners on both coasts.", icon: "❖" },
  ],
  kr: [
    { title: "소규모 브랜드를 위한 설계", text: "스톡 몰드는 5,000개부터, 저가 샘플링 — 대규모 재고 없이도 신제품을 출시할 수 있습니다.", icon: "◈" },
    { title: "자체 데코레이션 라인", text: "프로스팅, 스프레이 코팅, 실크스크린, 홋 스탬핑, 전기도금을 한 곳에서 — 컬러 컨트롤과 QC 기준을 통일.", icon: "✦" },
    { title: "수출 특화 물류", text: "EU · 미국향 EXW, FOB, DDP 모두 가능. 드롭 테스트 인증 수출 카톤과 양 대륙 모두의 경험 있는 포워더.", icon: "❖" },
  ],
  jp: [
    { title: "小規模ブランド向け", text: "在庫モールドは5,000個から、低コストサンプル。大規模な在庫を持たずに新商品を開始できます。", icon: "◈" },
    { title: "社内デコレーション", text: "フロスト、 spray coating、シルクスクリーン、ホットスタンプ、電気めっきを一貫対応。色管理とQC基準を統一。", icon: "✦" },
    { title: "輸出対応物流", text: "EU・米国向け EXW・FOB・DDP に対応。落下試験合格的輸出カートン、両海岸の経験豊富なフォワーダー。", icon: "❖" },
  ],
  tw: [
    { title: "為中小品牌而生", text: "現有模具最低 5,000 瓶起，低成本打樣，無需倉儲級備貨即可上市。", icon: "◈" },
    { title: "廠內一條龍裝飾", text: "磨砂、噴塗、絲印、燙金、電鍍全程自有產線，色彩與品檢標準一致。", icon: "✦" },
    { title: "出口就緒物流", text: "EXW、FOB、DDP 直送歐美，通過跌落測試的出口紙箱與兩岸資深貨代。", icon: "❖" },
  ],
};

const ctaCopy = {
  en: { titleA: "Ready to Bottle ", titleB: "Something Beautiful?", body: "Send us your capacity, finish and quantity — our packaging engineers will reply with recommendations and pricing within 24 hours.", cta: "Start Your Project" },
  kr: { titleA: "아름다운 병을 ", titleB: "만들 준비 되셨나요?", body: "용량, 마감, 수량을 알려주세요. 포장 엔지니어가 24시간 이내에 추천과 견적을 회신드립니다.", cta: "프로젝트 시작" },
  jp: { titleA: "美しいボトルを", titleB: "始める準備はできましたか？", body: "容量・仕上げ・数量をお知らせください。パッケージエンジニアが24時間以内にご提案とお見積りをご返信します。", cta: "プロジェクトを始める" },
  tw: { titleA: "準備好打造 ", titleB: "您的美麗瓶身了嗎？", body: "請提供容量、表面處理與數量 — 我們的包裝工程師將於 24 小時內回覆建議與報價。", cta: "開始您的專案" },
};

export default function Home() {
  const { catLabel, locale } = useUI();
  const hero = heroCopy[locale];
  const why = whyCopy[locale];
  const cta = ctaCopy[locale];
  const isRtl = false;

  return (
    <div dir={isRtl ? "rtl" : "ltr"}>
      <Seo
        title="Vesla | Custom Cosmetic Glass Packaging Manufacturer for Indie Beauty Brands"
        description="Custom glass dropper bottles, cream jars, essential oil bottles &amp; vials for indie beauty brands. Low MOQ 5,000 pcs, in-house decoration, free sample kit, DDP to EU &amp; USA. ISO 9001 certified Guangzhou factory."
        path="/"
      />
      <OrganizationSchema />
      <WebsiteSchema />

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/90 to-ink/70" />
        <video
          ref={(el) => { if (el) { el.play().catch(() => {}); el.onloadeddata = () => el.play().catch(() => {}); } }}
          className="absolute inset-0 h-full w-full object-cover"
          src="/factory-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          fetchpriority="low"
          poster="https://sc02.alicdn.com/kf/A65f39345c3d842e4a580477a679d11c1G.png"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink/70" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-gold-light">
            {hero.eyebrow}
          </p>
          <h1 className="font-serif text-4xl font-medium leading-tight text-white sm:text-6xl lg:text-7xl">
            {hero.titleA}
            <br />
            <span className="italic text-gold-light">{hero.titleB}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/85 sm:text-lg">
            {hero.body}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/products"
              className="w-full rounded-full bg-gold px-9 py-4 text-sm font-semibold tracking-wide text-white shadow-lg transition hover:bg-gold-dark sm:w-auto"
            >
              {hero.cta1}
            </Link>
            <Link
              to="/contact"
              className="w-full rounded-full border border-white/60 px-9 py-4 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition hover:border-gold hover:text-gold-light sm:w-auto"
            >
              {hero.cta2}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 hidden border-t border-white/15 bg-ink/40 backdrop-blur-md md:block">
          <div className="mx-auto grid max-w-6xl grid-cols-4 divide-x divide-white/10 px-6">
            {stats.map((s) => (
              <div key={s.label.en} className="py-6 text-center">
                <div className="font-serif text-3xl text-gold-light">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-cream/60">{s.label[locale]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Categories ───────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
            Our Collections
          </p>
          <h2 className="font-serif text-3xl font-medium text-ink sm:text-5xl">
            Core Collections,
            <br className="hidden sm:block" /> Endless Customization
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.key}
              to={`/products?category=${c.key}`}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gold/15 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <LazyImage
                  src={c.image}
                  alt={catLabel(c.key)}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="p-7">
                <h3 className="font-serif text-2xl text-ink">{catLabel(c.key)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.blurb[locale]}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark">
                  View collection
                  <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Why Vesla ───────────────────────────────── */}
      <section className="bg-cream-dark/60">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-3 lg:px-8">
          {why.map((f) => (
            <div key={f.title} className="text-center lg:text-left">
              <div className="mb-5 text-3xl text-gold">{f.icon}</div>
              <h3 className="font-serif text-2xl text-ink">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Client logo wall (typographic wordmarks) ──── */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <p className="mb-12 text-center text-xs font-semibold uppercase tracking-[0.3em] text-ink-soft">
          Trusted by beauty brands worldwide
        </p>
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4">
          {clientLogos.map((c) => (
            <LogoMark key={c.name + c.subtitle} {...c} />
          ))}
        </div>
      </section>

      {/* ── PDF Guide capture ──────────────────────────── */}
      <PdfGuideBanner />

      {/* ── Bottom CTA ───────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="font-serif text-3xl font-medium text-white sm:text-5xl">
            {cta.titleA}
            <span className="italic text-gold-light">{cta.titleB}</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream/70">{cta.body}</p>
          <Link
            to="/contact"
            className="mt-9 inline-block rounded-full bg-gold px-10 py-4 text-sm font-semibold tracking-wide text-white shadow-lg transition hover:bg-gold-dark"
          >
            {cta.cta}
          </Link>
        </div>
      </section>
    </div>
  );
}
