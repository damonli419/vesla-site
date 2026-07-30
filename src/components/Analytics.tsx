import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Lightweight page-view analytics. Ships with two no-op adapters that you can
// replace with a real measurement ID. Defaults to console-logging in dev so
// the data flow is visible without third-party scripts.
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
const PLAUSIBLE_DOMAIN = import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined;

function trackPageview(path: string) {
  if (typeof window === "undefined") return;
  if (GA_ID && typeof window.gtag === "function") {
    window.gtag("config", GA_ID, { page_path: path });
  } else if (PLAUSIBLE_DOMAIN && typeof window.plausible === "function") {
    window.plausible("pageview");
  } else if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.info("[analytics]", { path });
  }
}

export function trackEvent(name: string, props?: Record<string, string>) {
  if (typeof window === "undefined") return;
  if (GA_ID && typeof window.gtag === "function") {
    window.gtag("event", name, props);
  } else if (PLAUSIBLE_DOMAIN && typeof window.plausible === "function") {
    window.plausible(name, { props });
  } else if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.info("[analytics:event]", name, props);
  }
}

export default function Analytics() {
  const { pathname } = useLocation();
  useEffect(() => {
    trackPageview(pathname);
  }, [pathname]);
  return null;
}
