import { Link } from "react-router-dom";
import { useUI } from "../i18n/UIContext";
import { siteConfig } from "../config/site";
import { InstagramIcon, TiktokIcon, PinterestIcon, LinkedinIcon } from "./SocialIcons";

export default function Footer() {
  const { t, catLabel, localizePath } = useUI();
  return (
    <footer className="bg-ink text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 md:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center">
            <span className="font-serif text-2xl font-semibold text-white">Vesla</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-cream/60">{t("footer.tagline")}</p>
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
          <p className="mt-6 text-[10px] uppercase tracking-widest text-gold/80">
            ISO 9001 · SGS Audited
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">{t("footer.explore")}</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to={localizePath("/serum-bottles")} className="hover:text-gold">Serum Bottles</Link></li>
            <li><Link to={localizePath("/cream-jars")} className="hover:text-gold">Cream Jars</Link></li>
            <li><Link to={localizePath("/glass-vials")} className="hover:text-gold">Glass Vials</Link></li>
            <li><Link to={localizePath("/cosmetic-sets")} className="hover:text-gold">Cosmetic Sets</Link></li>
            <li><Link to={localizePath("/process")} className="hover:text-gold">{t("nav.process")}</Link></li>
            <li><Link to={localizePath("/blog")} className="hover:text-gold">Market Resources</Link></li>
            <li><Link to={localizePath("/contact")} className="hover:text-gold">{t("nav.quote")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">Best Sellers</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to={localizePath("/products/heart-shaped-glass-dropper-bottle-manufacturer")} className="hover:text-gold">Heart Shaped Bottles</Link></li>
            <li><Link to={localizePath("/products/custom-matte-black-glass-serum-bottle-manufacturer")} className="hover:text-gold">Matte Black Droppers</Link></li>
            <li><Link to={localizePath("/products/frosted-round-glass-cream-jar-woodgrain-lid-supplier")} className="hover:text-gold">Woodgrain Cream Jars</Link></li>
            <li><Link to={localizePath("/products/amber-glass-serum-vial-dropper-bottle-supplier")} className="hover:text-gold">Amber Serum Vials</Link></li>
            <li><Link to={localizePath("/products/red-gradient-round-cosmetic-set-bottle-manufacturer")} className="hover:text-gold">Red Gradient Sets</Link></li>
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
              Guangzhou, Guangdong, China
            </li>
            <li>
              <Link to={localizePath("/privacy")} className="text-cream/50 hover:text-gold">Privacy Policy</Link>
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
import { Link } from "react-router-dom";
import { useUI } from "../i18n/UIContext";
import { siteConfig } from "../config/site";
import { InstagramIcon, TiktokIcon, PinterestIcon, LinkedinIcon } from "./SocialIcons";

export default function Footer() {
  const { t, catLabel } = useUI();
  return (
    <footer className="bg-ink text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 md:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center">
            <span className="font-serif text-2xl font-semibold text-white">Vesla</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-cream/60">{t("footer.tagline")}</p>
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
          <p className="mt-6 text-[10px] uppercase tracking-widest text-gold/80">
            ISO 9001 · SGS Audited
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">{t("footer.explore")}</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/serum-bottles" className="hover:text-gold">Serum Bottles</Link></li>
            <li><Link to="/cream-jars" className="hover:text-gold">Cream Jars</Link></li>
            <li><Link to="/glass-vials" className="hover:text-gold">Glass Vials</Link></li>
            <li><Link to="/cosmetic-sets" className="hover:text-gold">Cosmetic Sets</Link></li>
            <li><Link to="/process" className="hover:text-gold">{t("nav.process")}</Link></li>
            <li><Link to="/blog" className="hover:text-gold">Market Resources</Link></li>
            <li><Link to="/contact" className="hover:text-gold">{t("nav.quote")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">Best Sellers</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/products/heart-shaped-glass-dropper-bottle-manufacturer" className="hover:text-gold">Heart Shaped Bottles</Link></li>
            <li><Link to="/products/custom-matte-black-glass-serum-bottle-manufacturer" className="hover:text-gold">Matte Black Droppers</Link></li>
            <li><Link to="/products/frosted-round-glass-cream-jar-woodgrain-lid-supplier" className="hover:text-gold">Woodgrain Cream Jars</Link></li>
            <li><Link to="/products/amber-glass-serum-vial-dropper-bottle-supplier" className="hover:text-gold">Amber Serum Vials</Link></li>
            <li><Link to="/products/red-gradient-round-cosmetic-set-bottle-manufacturer" className="hover:text-gold">Red Gradient Sets</Link></li>
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
              Guangzhou, Guangdong, China
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
