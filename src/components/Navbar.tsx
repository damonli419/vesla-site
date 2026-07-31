import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useUI } from "../i18n/UIContext";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useUI();

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/products", label: t("nav.products") },
    { to: "/process", label: t("nav.process") },
    { to: "/about", label: t("nav.about") },
    { to: "/blog", label: t("nav.resources") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src="https://sc02.alicdn.com/kf/Hcc089be0a0ae44d9baa468f72fe095cfI.jpg" alt="Vesla" className="h-12 w-auto" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors ${
                  isActive ? "text-gold-dark" : "text-ink-soft hover:text-ink"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <LocaleSwitcher />
          <Link
            to="/contact"
            className="rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-gold-dark"
          >
            {t("nav.quote")}
          </Link>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <LocaleSwitcher />
          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-6 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-gold/20 bg-cream px-6 pb-6 pt-2 lg:hidden">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-3 text-base font-medium ${isActive ? "text-gold-dark" : "text-ink-soft"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-gold px-6 py-3 text-center text-sm font-semibold text-white"
          >
            {t("nav.quote")}
          </Link>
        </nav>
      )}
    </header>
  );
}
