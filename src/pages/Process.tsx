import { Link } from "react-router-dom";
import { useUI } from "../i18n/UIContext";
import Seo from "../components/Seo";
import LazyImage from "../components/LazyImage";
import { caseStudies } from "../data/products";

const processCopy = {
  en: {
    eyebrow: "How We Work",
    titleA: "From Idea to ",
    titleB: "Finished Bottle",
    intro:
      "A clear, five-step process refined over 13+ years and hundreds of beauty brand launches. You always know what happens next — and when.",
    timeline: "Deadline CTA",
    timelineTitle: "Have a Deadline in Mind?",
    timelineBody:
      "Tell us your target launch date and we'll build a production calendar backwards from it — including sampling, decoration, inspection and transit time.",
    timelineCta: "Plan My Timeline",
    casesEyebrow: "Selected Work",
    casesTitle: "Brands We've Helped Launch",
    casesSub: "A small selection of recent collaborations. Full case studies available on request.",
  },
  kr: {
    eyebrow: "작업 방식",
    titleA: "아이디어에서 ",
    titleB: "완성된 보틀까지",
    intro: "16년과 수백 건의 뷰티 브랜드 런칭을 통해 다듬어진 명확한 4단계 프로세스. 다음에 무엇이 일어날지 — 그리고 언제 — 항상 알 수 있습니다.",
    timeline: "일정 CTA",
    timelineTitle: "마감일이 정해져 있나요?",
    timelineBody: "목표 런칭 일정을 알려주시면, 샘플링 · 데코레이션 · 검수 · 운송 시간을 포함한 역산 생산 일정을 수립해 드립니다.",
    timelineCta: "일정 계획하기",
    casesEyebrow: "선정 프로젝트",
    casesTitle: "런칭을 함께한 브랜드들",
    casesSub: "최근 협업 사례의 일부입니다. 전체 사례는 요청 시 제공됩니다.",
  },
  jp: {
    eyebrow: "私たちの進め方",
    titleA: "アイデアから",
    titleB: "完成ボトルへ",
    intro: "16年と数百件のビューティーブランド立ち上げを通じて磨かれた、明確な4ステップのプロセス。次のステップと時期を常にご確認いただけます。",
    timeline: "スケジュール",
    timelineTitle: "発売日は決まっていますか？",
    timelineBody: "発売目標日をお知らせいただければ、サンプルリング・デコレーション・検品・輸送期間を含めた逆算生産カレンダーを作成します。",
    timelineCta: "スケジュールを計画する",
    casesEyebrow: "選定事例",
    casesTitle: "立ち上げをサポートしたブランド",
    casesSub: "最近のコラボレーションの一部をご紹介します。詳細事例はご希望に応じてご提供します。",
  },
  tw: {
    eyebrow: "我們的流程",
    titleA: "從構思到",
    titleB: "成品瓶身",
    intro: "經 16 年與數百個美妝品牌上市經驗淬煉的清晰四步流程，您隨時都能掌握下一步 — 以及時程。",
    timeline: "時程規劃",
    timelineTitle: "已有上市時程？",
    timelineBody: "告訴我們您的目標上市日，我們將為您逆向規劃完整生產日程 — 包含打樣、裝飾、驗貨與運輸時間。",
    timelineCta: "規劃我的時程",
    casesEyebrow: "精選案例",
    casesTitle: "我們協助上市的品牌",
    casesSub: "近期合作案例節錄，完整案例可依需求提供。",
  },
};

export default function Process() {
  const { locale } = useUI();
  const c = processCopy[locale];

  return (
    <div>
      <Seo
        title="Custom Process"
        description="Vesla's five-step custom packaging process: requirement, design & quote, sampling, production and global shipping. ISO 9001, AQL inspection, EXW/FOB/DDP."
        path="/process"
      />

      <section className="mx-auto max-w-7xl px-6 pb-8 pt-16 text-center lg:px-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">{c.eyebrow}</p>
        <h1 className="font-serif text-4xl font-medium text-ink sm:text-6xl">
          {c.titleA}
          <span className="italic text-gold-dark">{c.titleB}</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-soft">{c.intro}</p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="relative">
          <div className="absolute bottom-8 left-8 top-8 hidden w-px bg-gold/30 md:block" />
          <div className="space-y-10">
            {[
              { num: "01", title: "Send Requirement", duration: "1–2 days", icon: "✉", text: "Share your bottle type, capacity, target quantity and decoration needs. Our engineers recommend stock molds or a private mold plan with transparent pricing and a decoration feasibility review.", points: ["Free spec consultation", "Stock mold library of 300+ shapes", "Quotation within 24 hours"] },
              { num: "02", title: "Design & Quote", duration: "24 hours", icon: "◈", text: "We confirm the design — shape, neck finish, surface finish and closures — and send a detailed quotation. Pantone color matching and artwork proofs are prepared before sampling.", points: ["Pantone color matching", "3D model on request", "Detailed itemized quote"] },
              { num: "03", title: "Sample Approval", duration: "5–10 days", icon: "❖", text: "Physical samples with your chosen decoration — frosting, spray color, silk-screen artwork or hot stamping — are shipped by express for your approval before any bulk production begins.", points: ["Fully decorated samples", "Express shipping", "Compatibility test with your fillings"] },
              { num: "04", title: "Mass Production", duration: "7–15 days (stock)", icon: "⚙", text: "Bulk manufacturing under ISO 9001 with inline QC at forming, annealing, decoration and assembly. AQL 1.5/2.5/4.0 inspection standard and third-party inspection (SGS/BV) welcomed.", points: ["ISO 9001 certified factory", "AQL sampling inspection", "Weekly photo & video updates"] },
              { num: "05", title: "Global Shipping", duration: "By sea or air", icon: "⛴", text: "Drop-test-certified export cartons with foam or divider protection. We handle booking, customs documents and can deliver EXW, FOB Shanghai/Qingdao, or DDP to your warehouse in the EU or USA.", points: ["EXW / FOB / DDP terms", "Drop-test certified packaging", "Breakage guarantee on sea freight"] },
            ].map((s) => (
              <div key={s.num} className="relative md:pl-24">
                <div className="absolute left-0 top-0 hidden h-16 w-16 items-center justify-center rounded-full bg-gold font-serif text-xl text-white shadow-md md:flex">
                  {s.num}
                </div>
                <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gold/15 md:p-10">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h2 className="font-serif text-2xl text-ink sm:text-3xl">
                      <span className="mr-3 text-gold md:hidden">{s.num}</span>
                      {s.title}
                    </h2>
                    <span className="rounded-full bg-cream px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-dark ring-1 ring-gold/30">
                      {s.duration}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">{s.text}</p>
                  <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-xs font-medium text-ink">
                        <span className="text-gold">✦</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case studies ─────────────────────────────── */}
      <section className="bg-cream-dark/60 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">{c.casesEyebrow}</p>
            <h2 className="font-serif text-3xl font-medium text-ink sm:text-5xl">{c.casesTitle}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-ink-soft">{c.casesSub}</p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {caseStudies.map((cs) => (
              <article
                key={cs.brand}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gold/15 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <LazyImage
                    src={cs.image}
                    alt={cs.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-dark">
                    {cs.brand}
                  </p>
                  <h3 className="mt-2 font-serif text-lg leading-snug text-ink">{cs.title}</h3>
                  <ul className="mt-3 flex-1 space-y-1.5">
                    {cs.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs text-ink-soft">
                        <span className="mt-0.5 text-gold">✦</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl text-ink sm:text-4xl">{c.timelineTitle}</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">{c.timelineBody}</p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-gold px-10 py-4 text-sm font-semibold tracking-wide text-white shadow-md transition hover:bg-gold-dark"
          >
            {c.timelineCta}
          </Link>
        </div>
      </section>
    </div>
  );
}
