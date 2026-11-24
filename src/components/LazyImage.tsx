import { useState } from "react";

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
 *  - native lazy loading + async decoding (allows browser lookahead preloading)
 *  - always sets real `src` immediately (never blocks on IntersectionObserver)
 *  - instant background placeholder without hiding progressive image paint
 *  - explicit width/height hints to prevent CLS
 */
export default function LazyImage({ src, alt, className = "", width, height, eager = false }: Props) {
  const [loaded, setLoaded] = useState(false);
  const dimW = width ?? 800;
  const dimH = height ?? 800;

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={eager ? "high" : "auto"}
      width={dimW}
      height={dimH}
      onLoad={() => setLoaded(true)}
      className={`${loaded ? "" : "bg-cream-dark/40"} ${className}`}
    />
  );
}
