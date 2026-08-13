import { Link } from "react-router-dom";
import { useUI } from "../i18n/UIContext";
import { siteConfig } from "../config/site";
import { InstagramIcon, TiktokIcon, PinterestIcon, LinkedinIcon } from "./SocialIcons";

export default function Footer() {
  const { t, catLabel } = useUI();
  return (
    <footer className="bg-ink text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center">
            <span className="font-serif text-2xl font-semibold text-white">Vesla</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/60">{t("footer.tagline")}</p>
          <div className="mt-6 flex items-center gap-3">
            <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-cream/70 transition hover:bg-gold hover:text-white">
              <InstagramIcon />
            </a>
            <a href={siteConfig.social.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-cream/70 transition hover:bg-gold hover:text-white">
              <TiktokIcon />
            </a>
            <a href={siteConfig.social.pinterest} target="_blank" rel="noreferrer" aria-label="Pinterest" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-cream/70 transition hover:bg-gold hover:text-white">
              <PinterestIcon />
            </a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-cream/70 transition hover:bg-gold hover:text-white">
              <LinkedinIcon />
            </a>
          </div>
          <p className="mt-6 text-xs uppercase tracking-widest text-gold">
            ISO 9001 · SGS Audited · FDA-Compliant Materials
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">{t("footer.explore")}</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/products?category=dropper" className="hover:text-gold">{catLabel("dropper")}</Link></li>
            <li><Link to="/products?category=jar" className="hover:text-gold">{catLabel("jar")}</Link></li>
            <li><Link to="/products?category=oil" className="hover:text-gold">{catLabel("oil")}</Link></li>
            <li><Link to="/products?category=set" className="hover:text-gold">{catLabel("set")}</Link></li>
            <li><Link to="/process" className="hover:text-gold">{t("nav.process")}</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/certifications" className="hover:text-gold">Certifications</Link></li>
            <li><Link to="/blog" className="hover:text-gold">Resources</Link></li>
            <li><Link to="/contact" className="hover:text-gold">{t("nav.quote")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">{t("footer.contact")}</h4>
          <ul className="space-y-3 text-sm text-cream/70">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-gold">{siteConfig.email}</a>
            </li>
            <li>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-gold">
                WhatsApp {siteConfig.whatsappDisplay}
              </a>
            </li>
            <li className="leading-relaxed">
              {siteConfig.address.street},<br />{siteConfig.address.city}, {siteConfig.address.region}, {siteConfig.address.country}
            </li>
            <li>
              <Link to="/privacy" className="text-cream/50 hover:text-gold">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-cream/40">
        © {new Date().getFullYear()} Vesla Co., Ltd. {t("footer.rights")}
      </div>
    </footer>
  );
}
