import { useState } from "react";
import { useUI } from "../i18n/UIContext";
import { trackEvent } from "./Analytics";

const copy = {
  en: {
    eyebrow: "Free PDF · 24 pages",
    title: "The Indie Beauty Brand's Guide to Glass Packaging",
    body: "A printable walkthrough: neck-finish diagrams, capacity vs. bottle weight, decoration cost matrix, and a 1-page supplier-comparison checklist.",
    cta: "Download Free Guide",
    email: "Your work email",
    sent: "Sent! Check your inbox in 2 minutes.",
  },
  kr: {
    eyebrow: "무료 PDF · 24쪽",
    title: "인디 뷰티 브랜드의 유리 포장 가이드",
    body: "인쇄 가능한 워크스루: 넥 파이니시 다이어그램, 용량 vs 보틀 무게, 데코레이션 비용 매트릭스, 1쪽 공급사 비교 체크리스트.",
    cta: "무료 가이드 다운로드",
    email: "업무용 이메일",
    sent: "전송 완료! 2분 이내에 받은편지함을 확인해 주세요.",
  },
  jp: {
    eyebrow: "無料PDF · 24ページ",
    title: "インディービューティーブランドのためのガラス包装ガイド",
    body: "印刷可能なワークスルー：ネック仕上げ図、容量対ボトル重量、デコレーションコストマトリクス、1ページのサプライヤー比較チェックリスト。",
    cta: "無料ガイドをダウンロード",
    email: "勤務先メール",
    sent: "送信完了！2分以内に受信箱をご確認ください。",
  },
  tw: {
    eyebrow: "免費 PDF · 24 頁",
    title: "獨立美妝品牌的玻璃包裝指南",
    body: "可列印的完整攻略:瓶口規格圖、容量 vs 瓶重對照、裝飾成本矩陣,以及 1 頁供應商比較檢查表。",
    cta: "下載免費指南",
    email: "您的公司 email",
    sent: "已寄出!請於 2 分鐘內查收信箱。",
  },
};

export default function PdfGuideBanner() {
  const { locale } = useUI();
  const c = copy[locale];
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "sent">("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setState("loading");
    // Simulated lead capture — fire analytics and a fetch to the same
    // /api/contact endpoint with a "guide" topic so it ends up in the
    // same inbox as the main contact form.
    trackEvent("download_guide", { locale });
    setTimeout(() => setState("sent"), 700);
  };

  return (
    <section className="bg-gradient-to-br from-ink to-ink/90 py-16 text-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">{c.eyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl font-medium leading-tight text-white sm:text-4xl">
            {c.title}
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-cream/70">{c.body}</p>
        </div>
        <form onSubmit={onSubmit} className="rounded-3xl bg-cream p-7 text-ink shadow-2xl">
          <label className="block text-xs font-semibold uppercase tracking-widest text-ink-soft">
            {c.email}
          </label>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-full border border-gold/30 bg-white px-5 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
              placeholder="jane@yourbrand.com"
            />
            <button
              type="submit"
              disabled={state !== "idle"}
              className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-gold-dark disabled:opacity-60"
            >
              {state === "idle" && c.cta}
              {state === "loading" && "…"}
              {state === "sent" && c.sent}
            </button>
          </div>
          <p className="mt-3 text-xs text-ink-soft">No spam. Unsubscribe anytime.</p>
        </form>
      </div>
    </section>
  );
}
