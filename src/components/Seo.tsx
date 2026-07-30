import { Helmet } from "react-helmet-async";
import { useUI } from "../i18n/UIContext";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
}

export default function Seo({ title, description, path = "/" }: SeoProps) {
  const { locale } = useUI();
  const site = "Vesla";
  const fullTitle = title === site ? title : `${title} · ${site}`;
  return (
    <Helmet>
      <html lang={locale === "tw" ? "zh-Hant" : locale === "kr" ? "ko" : locale === "jp" ? "ja" : "en"} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://veslapack.com${path}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={`https://veslapack.com${path}`} />
    </Helmet>
  );
}
