import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useUI } from "../i18n/UIContext";
import { trackEvent } from "./Analytics";
import { siteConfig } from "../config/site";

const copy = {
  en: {
    badge: "Free for new brands",
    title: "Get a Free Sample Kit",
    body: "We'll ship 3–5 fully decorated sample bottles (with your logo) within 5–7 days. You only cover DHL express.",
    cta: "Request Sample Kit",
    skip: "Not now",
  },
  kr: {
    badge: "신규 브랜드 무료",
    title: "무료 샘플 키트를 받아보세요",
    body: "5–7일 내에 로고까지 적용된 풀 데코 샘플 보틀 3–5개를 발송해 드립니다. DHL 익스프레스 비용만 부담해 주세요.",
    cta: "샘플 키트 신청",
    skip: "다음에",
  },
  jp: {
    badge: "新規ブランド無料",
    title: "無料サンプルキットを進呈",
    body: "貴社ロゴ入りフル装飾サンプル3〜5点を5〜7日でお届けします。DHL速達送料のみご負担ください。",
    cta: "サンプルキットを申請",
    skip: "あとで",
  },
  tw: {
    badge: "新品牌免費",
    title: "領取免費樣品組",
    body: "5–7 天內寄出 3–5 支完整表面處理(可加上您的 logo)的樣品瓶,您只需負擔 DHL 速遞費用。",
    cta: "申請樣品組",
    skip: "稍後再說",
  },
};

const DISMISS_KEY = "yt-sample-dismissed";
const SESSION_KEY = "yt-sample-shown";
const SHOW_DELAY_MS = 45_000; // 45s

export default function SampleRequestModal() {
  const { locale } = useUI();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Don't show on the contact page itself — there's already a form.
    if (location.pathname === "/contact") return;
    if (typeof window === "undefined") return;

    const dismissed = sessionStorage.getItem(SESSION_KEY);
    if (dismissed) return;
    const lastDismissed = localStorage.getItem(DISMISS_KEY);
    if (lastDismissed) {
      const days = (Date.now() - Number(lastDismissed)) / (1000 * 60 * 60 * 24);
      if (days < 14) return; // suppress for 14 days after dismissal
    }

    const t = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(SESSION_KEY, "1");
      trackEvent("show_sample_modal", { locale });
    }, SHOW_DELAY_MS);

    return () => clearTimeout(t);
  }, [location.pathname, locale]);

  const dismiss = (permanent: boolean) => {
    setOpen(false);
    if (permanent) {
      localStorage.setItem(DISMISS_KEY, String(Date.now()));
    }
    trackEvent("dismiss_sample_modal", { permanent: String(permanent) });
  };

  if (!open) return null;
  const c = copy[locale];

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/60 p-4 backdrop-blur-sm sm:items-center">
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-cream shadow-2xl ring-1 ring-gold/30">
        <button
          onClick={() => dismiss(true)}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-ink-soft hover:bg-cream-dark hover:text-ink"
        >
          ×
        </button>
        <div className="bg-gradient-to-br from-ink to-ink/80 px-8 pt-10 pb-6 text-center text-white">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-light">{c.badge}</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight">{c.title}</h2>
        </div>
        <div className="px-8 py-7 text-center">
          <p className="text-sm leading-relaxed text-ink-soft">{c.body}</p>
          <div className="mt-7 flex flex-col gap-3">
            <Link
              to="/contact?source=sample-modal"
              onClick={() => {
                trackEvent("click_sample_kit");
                dismiss(true);
              }}
              className="rounded-full bg-gold px-6 py-3.5 text-sm font-semibold tracking-wide text-white shadow-md transition hover:bg-gold-dark"
            >
              {c.cta}
            </Link>
            <a
              href={siteConfig.whatsapp ? `https://wa.me/${siteConfig.whatsapp}` : undefined}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("click_sample_whatsapp")}
              className="rounded-full border border-gold/40 px-6 py-3 text-sm font-semibold text-gold-dark transition hover:bg-gold/10"
            >
              WhatsApp
            </a>
            <button onClick={() => dismiss(false)} className="mt-1 text-xs text-ink-soft hover:text-ink">
              {c.skip}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
