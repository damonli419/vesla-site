import { Helmet } from "react-helmet-async";
import { useUI } from "../i18n/UIContext";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  keywords?: string;
  preloadImage?: string;
}

export default function Seo({ title, description, path = "/", keywords, preloadImage }: SeoProps) {
  const { locale } = useUI();
  const site = "Vesla";
  const fullTitle = title === site ? title : `${title} · ${site}`;
  return (
    <Helmet>
      <html lang={locale === "tw" ? "zh-Hant" : locale === "kr" ? "ko" : locale === "jp" ? "ja" : "en"} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {preloadImage && <link rel="preload" as="image" href={preloadImage} fetchpriority="high" />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://www.veslapack.com${path}`} />
      <meta property="og:image" content="https://www.veslapack.com/og-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://www.veslapack.com/og-image.jpg" />
      <meta name="pinterest-rich-pin" content="true" />
      <link rel="canonical" href={`https://www.veslapack.com${path}`} />
      <link rel="alternate" hrefLang="en" href={`https://www.veslapack.com${path}`} />
      <link rel="alternate" hrefLang="ko" href={`https://www.veslapack.com${path}`} />
      <link rel="alternate" hrefLang="ja" href={`https://www.veslapack.com${path}`} />
      <link rel="alternate" hrefLang="zh-Hant" href={`https://www.veslapack.com${path}`} />
      <link rel="alternate" hrefLang="x-default" href={`https://www.veslapack.com${path}`} />
    </Helmet>
  );
}
