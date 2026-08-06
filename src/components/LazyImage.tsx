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
  // Explicit width/height reduce CLS (Lighthouse requirement). Defaults are safe
  // because images render inside fixed-aspect containers with object-cover.
  const dimW = width ?? 800;
  const dimH = height ?? 800;

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

  return (
    <img
      ref={ref}
      src={loaded || eager ? src : undefined}
      data-src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      width={dimW}
      height={dimH}
      onLoad={() => setLoaded(true)}
      className={`bg-cream-dark/40 transition-opacity duration-700 ${
        loaded ? "opacity-100" : "opacity-0"
      } ${className}`}
    />
  );
}
