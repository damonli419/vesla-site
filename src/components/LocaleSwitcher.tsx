import { useState } from "react";
import { useUI, localeMeta, Locale } from "../i18n/UIContext";

export default function LocaleSwitcher() {
  const { locale, setLocale } = useUI();
  const [open, setOpen] = useState(false);

  const choose = (l: Locale) => {
    setLocale(l);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-full border border-gold/30 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink-soft transition hover:border-gold hover:text-ink"
      >
        <span className="text-gold-dark">{localeMeta[locale].flag}</span>
        <span className="hidden sm:inline">{localeMeta[locale].label}</span>
        <span className={`text-[8px] transition ${open ? "rotate-180" : ""}`}>▼</span>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-30" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full z-40 mt-2 min-w-[160px] overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-gold/20">
            {(Object.keys(localeMeta) as Locale[]).map((l) => (
              <button
                key={l}
                onClick={() => choose(l)}
                className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition ${
                  locale === l ? "bg-cream text-ink" : "text-ink-soft hover:bg-cream hover:text-ink"
                }`}
              >
                <span className="text-xs font-bold text-gold-dark">{localeMeta[l].flag}</span>
                <span>{localeMeta[l].label}</span>
                {locale === l && <span className="ml-auto text-gold">✓</span>}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
