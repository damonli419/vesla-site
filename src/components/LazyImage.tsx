import { useEffect, useRef, useState } from "react";

interface Props {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  eager?: boolean;
}

/**
 * Lightweight image component with:
 *  - native lazy loading + async decoding
 *  - IntersectionObserver fade-in once in viewport
 *  - low-opacity placeholder while loading
 *  - optional width/height hints to prevent CLS
 */
export default function LazyImage({ src, alt, className = "", width, height, eager = false }: Props) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (eager) return;
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setLoaded(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoaded(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [eager]);

  const webpSrc = src.match(/\.(jpg|jpeg|png)(\?|$)/i)
    ? src.replace(/\.(jpg|jpeg|png)/i, ".webp")
    : null;
  const imgSrc = loaded || eager ? src : undefined;

  if (webpSrc && imgSrc) {
    return (
      <picture ref={ref}>
        <source srcSet={webpSrc} type="image/webp" />
        <img
          src={imgSrc}
          data-src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          width={width}
          height={height}
          onLoad={() => setLoaded(true)}
          className={`bg-cream-dark/40 transition-opacity duration-700 opacity-100 ${className}`}
        />
      </picture>
    );
  }

  return (
    <img
      ref={ref}
      src={imgSrc}
      data-src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      width={width}
      height={height}
      onLoad={() => setLoaded(true)}
      className={`bg-cream-dark/40 transition-opacity duration-700 ${
        loaded ? "opacity-100" : "opacity-0"
      } ${className}`}
    />
  );
}
