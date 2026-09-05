import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Seo from "../components/Seo";
import { FAQSchema } from "../components/Schema";
import { trackEvent } from "../components/Analytics";
import { siteConfig, whatsappLink } from "../config/site";
import { faqItems } from "../data/content";
import { useUI } from "../i18n/UIContext";

const inputCls =
  "w-full rounded-xl border border-gold/25 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20";

const heroCopy = {
  en: { titleA: "Let's Talk ", titleB: "Packaging", body: "Send us your project details — we respond within 24 hours on business days, in English, with real answers from real packaging engineers." },
};

const formCopy = {
  en: {
    name: "Name *", email: "Work Email *", company: "Company / Brand", country: "Country",
    product: "Product of Interest", quantity: "Estimated Quantity", details: "Project Details *",
    selectRange: "Select a range", q1: "5,000 – 10,000 pcs", q2: "10,000 – 30,000 pcs", q3: "30,000 – 100,000 pcs", q4: "100,000+ pcs", q5: "Not sure yet",
    submit: "Send Inquiry", sending: "Sending…", success: "Inquiry Received", successBody: "Thank you for reaching out. Our export team will reply to your email within 24 hours. For urgent matters, message us on WhatsApp anytime.",
    again: "Send Another Inquiry", note: "We never share your information. NDA available on request.",
    hoursTitle: "Office Hours", hoursBody: "Mon – Sat · 9:00 – 18:00 (GMT+8)\nOverlap coverage for EU mornings and US East Coast evenings.", response: "Average response time", responseVal: "< 24 hours",
    direct: "Direct Channels", placeholder: "Tell us about capacity, colors, decoration, closures and your target launch date…",
    errTitle: "Something went wrong", errBody: "We couldn't deliver your message. Please email us directly or try again.", errRetry: "Try again", errMail: "Open my mail app",
    gotIt: "Got it",
  },
  kr: {
    name: "성함 *", email: "업무용 이메일 *", company: "회사 / 브랜드", country: "국가",
    product: "관심 제품", quantity: "예상 수량", details: "프로젝트 세부사항 *",
    selectRange: "범위 선택", q1: "5,000 – 10,000개", q2: "10,000 – 30,000개", q3: "30,000 – 100,000개", q4: "100,000개 이상", q5: "아직 미정",
    submit: "문의 보내기", sending: "전송 중…", success: "문의가 접수되었습니다", successBody: "문의해 주셔서 감사합니다. 수출팀이 24시간 이내에 이메일로 회신드립니다. 급한 건은 WhatsApp으로 연락 주세요.",
    again: "다른 문의 보내기", note: "귀하의 정보를 공유하지 않습니다. NDA 요청 가능.",
    hoursTitle: "영업 시간", hoursBody: "월 – 토 · 9:00 – 18:00 (GMT+8)\nEU 오전·미국 동부 저녁 시간대 커버", response: "평균 회신 시간", responseVal: "24시간 이내",
    direct: "직접 연락처", placeholder: "용량, 색상, 데코레이션, 클로저, 목표 런칭일 등을 알려주세요…",
    errTitle: "전송에 실패했습니다", errBody: "메시지를 전달하지 못했습니다. 직접 이메일을 보내시거나 다시 시도해 주세요.", errRetry: "다시 시도", errMail: "메일 앱 열기",
    gotIt: "확인",
  },
  jp: {
    name: "お名前 *", email: "勤務先メール *", company: "会社 / ブランド", country: "国",
    product: "ご関心製品", quantity: "想定数量", details: "プロジェクト詳細 *",
    selectRange: "範囲を選択", q1: "5,000 – 10,000個", q2: "10,000 – 30,000個", q3: "30,000 – 100,000個", q4: "100,000個以上", q5: "未定",
    submit: "お問い合わせを送信", sending: "送信中…", success: "お問合せを受け付けました", successBody: "お問合せありがとうございます。輸出チームより24時間以内にメールにてご返信します。お急ぎの場合は WhatsApp でもご連絡ください。",
    again: "別のお問合せを送る", note: "お客様の情報を第三者に共有することはありません。NDA のご提供も可能です。",
    hoursTitle: "営業時間", hoursBody: "月 – 土 · 9:00 – 18:00 (GMT+8)\nEU 午前・米国東海岸 夜も対応", response: "平均返信時間", responseVal: "24時間以内",
    direct: "直接連絡先", placeholder: "容量・色・デコレーション・クロージャー・発売予定日などをお書きください…",
    errTitle: "送信に失敗しました", errBody: "メッセージを送信できませんでした。直接メールをお送りいただくか、再度お試しください。", errRetry: "再試行", errMail: "メールアプリを開く",
    gotIt: "確認",
  },
  tw: {
    name: "姓名 *", email: "公司 email *", company: "公司 / 品牌", country: "國家",
    product: "感興趣的產品", quantity: "預估數量", details: "專案細節 *",
    selectRange: "選擇範圍", q1: "5,000 – 10,000 瓶", q2: "10,000 – 30,000 瓶", q3: "30,000 – 100,000 瓶", q4: "100,000 瓶以上", q5: "尚未決定",
    submit: "送出詢盤", sending: "傳送中…", success: "已收到您的詢盤", successBody: "感謝您的來信,出口團隊將於 24 小時內以 email 回覆。如有急件,歡迎隨時透過 WhatsApp 與我們聯繫。",
    again: "再發一則詢盤", note: "我們絕不分享您的資料,可依需求提供保密協議 (NDA)。",
    hoursTitle: "營業時間", hoursBody: "週一 – 週六 · 9:00 – 18:00 (GMT+8)\n覆蓋歐美上班時段", response: "平均回覆時間", responseVal: "24 小時內",
    direct: "直接聯繫", placeholder: "請提供容量、顏色、表面處理、瓶蓋配件與目標上市日…",
    errTitle: "傳送失敗", errBody: "訊息未能送達,請直接來信或稍後再試。", errRetry: "重試", errMail: "開啟我的郵件",
    gotIt: "我知道了",
  },
};

const TrustBadge = ({ title, sub }: { title: string; sub: string }) => (
  <div className="flex items-center gap-2.5 rounded-xl border border-gold/10 bg-gold/5 px-4 py-2.5">
    <div className="h-2 w-2 rounded-full bg-gold" />
    <div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-gold-dark">{title}</p>
      <p className="text-[9px] font-medium text-ink-soft/70 leading-none mt-0.5">{sub}</p>
    </div>
  </div>
);

export default function Contact() {
  const [searchParams] = useSearchParams();
  const prefilledProduct = searchParams.get("product") ?? "";
  const prefilledMessage = searchParams.get("source") === "sample"
    ? "I'd like to request a sample of this product. Please share the sample policy and cost."
    : "";
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorDetail, setErrorDetail] = useState<string>("");
  const [form, setForm] = useState({
    name: "", email: "", company: "", country: "",
    product: prefilledProduct, quantity: "", 
    capacity: "", decoration: "", market: "",
    message: prefilledMessage, hp: "",
  });
  const { locale } = useUI();
  const hero = heroCopy[locale];
  const fc = formCopy[locale];

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    setErrorDetail("");
    trackEvent("submit_inquiry", { product: form.product });
    try {
      const resp = await fetch(siteConfig.contactEndpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...form, locale }),
      });
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      setState("sent");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error("Contact form error", err);
      setErrorDetail(err instanceof Error ? err.message : "Network error");
      setState("error");
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <Seo
        title="Contact"
        description="Contact Vesla — request a quote, custom mold drawings or a sample shipment. Replies within 24 hours from real packaging engineers."
        path="/contact"
      />
      <div className="mb-14 max-w-2xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">Contact</p>
        <h1 className="font-serif text-4xl font-medium text-ink sm:text-6xl">
          {hero.titleA}
          <span className="italic text-gold-dark">{hero.titleB}</span>
        </h1>
        <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">{hero.body}</p>
      </div>

      <div className="grid gap-14 lg:grid-cols-[1fr_380px]">
        <div>
          {state === "sent" ? (
            <div className="rounded-3xl bg-white p-12 text-center ring-1 ring-gold/20">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-3xl text-gold-dark">✓</div>
              <h2 className="font-serif text-3xl text-ink">{fc.success}</h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-soft">{fc.successBody}</p>
               <button
                onClick={() => { setState("idle"); setForm({ name: "", email: "", company: "", country: "", product: "", quantity: "", capacity: "", decoration: "", market: "", message: "", hp: "" }); }}
                className="mt-8 rounded-full border border-gold px-8 py-3 text-sm font-semibold text-gold-dark transition hover:bg-gold hover:text-white"
              >

                {fc.again}
              </button>
            </div>
          ) : state === "error" ? (
            <div className="rounded-3xl bg-white p-12 text-center ring-1 ring-red-200">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-3xl text-red-600">!</div>
              <h2 className="font-serif text-3xl text-ink">{fc.errTitle}</h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-soft">{fc.errBody}</p>
              {errorDetail && <p className="mt-2 text-xs text-ink-soft">({errorDetail})</p>}
              <div className="mt-8 flex justify-center gap-3">
                <button onClick={() => setState("idle")} className="rounded-full border border-gold px-6 py-3 text-sm font-semibold text-gold-dark transition hover:bg-gold hover:text-white">
                  {fc.errRetry}
                </button>
                <a href={`mailto:${siteConfig.email}?subject=Inquiry&body=${encodeURIComponent(form.message)}`} className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink/80">
                  {fc.errMail}
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-8 ring-1 ring-gold/20 sm:p-10" noValidate>
              {/* Honeypot — hidden from real users, bots love filling every input. */}
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.hp}
                onChange={update("hp")}
                className="absolute h-0 w-0 opacity-0"
                aria-hidden
              />
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-ink">{fc.name}</label>
                  <input required value={form.name} onChange={update("name")} className={inputCls} placeholder="Jane Smith" />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-ink">{fc.email}</label>
                  <input required type="email" value={form.email} onChange={update("email")} className={inputCls} placeholder="jane@yourbrand.com" />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-ink">{fc.company}</label>
                  <input value={form.company} onChange={update("company")} className={inputCls} placeholder="Your Beauty Brand" />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-ink">{fc.country}</label>
                  <input value={form.country} onChange={update("country")} className={inputCls} placeholder="United States" />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-ink">{fc.product}</label>
                  <input value={form.product} onChange={update("product")} className={inputCls} placeholder="Frosted Dropper Bottle 30 ml" />
                </div>
                 <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-ink">{fc.quantity}</label>
                  <select value={form.quantity} onChange={update("quantity")} className={inputCls}>
                    <option value="">{fc.selectRange}</option>
                    <option>{fc.q1}</option>
                    <option>{fc.q2}</option>
                    <option>{fc.q3}</option>
                    <option>{fc.q4}</option>
                    <option>{fc.q5}</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-ink">{fc.capacity}</label>
                  <select value={form.capacity} onChange={update("capacity")} className={inputCls}>
                    <option value="">Select capacity</option>
                    <option>5 ml – 15 ml (Sample/Travel)</option>
                    <option>20 ml – 40 ml (Standard Serum)</option>
                    <option>50 ml – 100 ml (Large/Body)</option>
                    <option>Custom Size</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-ink">{fc.decoration}</label>
                  <select value={form.decoration} onChange={update("decoration")} className={inputCls}>
                    <option value="">Select technique</option>
                    <option>Clear / Natural</option>
                    <option>Frosting (Acid Etched)</option>
                    <option>Silk Screen Printing</option>
                    <option>Hot Stamping (Gold/Silver)</option>
                    <option>Color Spray / Gradient</option>
                    <option>Custom OEM Design</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-ink">{fc.market}</label>
                  <select value={form.market} onChange={update("market")} className={inputCls}>
                    <option value="">Select target region</option>
                    <option>North America (US/Canada)</option>
                    <option>Europe (EU/UK)</option>
                    <option>Middle East / Dubai</option>
                    <option>Southeast Asia</option>
                    <option>Australia / NZ</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-ink">{fc.details}</label>
                  <textarea required rows={5} value={form.message} onChange={update("message")} className={inputCls} placeholder={fc.placeholder} />
                </div>
              </div>
                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="w-full rounded-full bg-gold px-8 py-4 text-sm font-semibold tracking-wide text-white shadow-md transition hover:bg-gold-dark disabled:opacity-60 sm:w-auto sm:px-14"
                >
                  {state === "sending" ? fc.sending : fc.submit}
                </button>
                <div className="flex flex-wrap gap-3 mt-8 pt-8 border-t border-gold/10">
                  <TrustBadge title="ISO 9001:2015" sub="Certified Factory" />
                  <TrustBadge title="SGS Audited" sub="Verified Supplier" />
                  <TrustBadge title="AQL 1.5" sub="QC Standard" />
                  <TrustBadge title="DDP" sub="Customs Paid" />
                </div>

              <p className="mt-4 text-xs text-ink-soft">{fc.note}</p>
            </form>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl bg-ink p-8 text-cream">
            <h3 className="font-serif text-2xl text-white">{fc.direct}</h3>
            <div className="mt-6 space-y-5 text-sm">
              <a href={`mailto:${siteConfig.email}`} className="group flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold-light">✉</span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-cream/50">Email</span>
                  <span className="font-medium group-hover:text-gold-light">{siteConfig.email}</span>
                </span>
              </a>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="group flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold-light">✆</span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-cream/50">WhatsApp</span>
                  <span className="font-medium group-hover:text-gold-light">{siteConfig.whatsappDisplay}</span>
                </span>
              </a>
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold-light">◈</span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-cream/50">Factory</span>
                  <span className="font-medium leading-relaxed">
                    {siteConfig.address.street},<br />{siteConfig.address.city}, {siteConfig.address.region}, {siteConfig.address.country}
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 ring-1 ring-gold/20">
            <h3 className="font-serif text-xl text-ink">{fc.hoursTitle}</h3>
            <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-ink-soft">{fc.hoursBody}</p>
            <div className="mt-5 border-t border-gold/15 pt-5">
              <p className="text-xs uppercase tracking-widest text-gold-dark">{fc.response}</p>
              <p className="mt-1 font-serif text-3xl text-ink">{fc.responseVal}</p>
            </div>
          </div>
        </aside>
      </div>

      <FAQSchema items={faqItems} locale={locale} />
      {/* ── FAQ for SEO + UX ─────────────────────── */}
      <section className="mt-24">
        <h2 className="mb-10 text-center font-serif text-3xl text-ink sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto max-w-3xl divide-y divide-gold/20 rounded-3xl bg-white ring-1 ring-gold/20">
          {faqItems.map((f, i) => (
            <details key={i} className="group p-6 open:bg-cream-dark/30">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold text-ink">
                <span>{f.q.en}</span>
                <span className="ml-4 text-gold transition group-open:rotate-45 text-lg leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.a.en}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
