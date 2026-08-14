import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Analytics from "./components/Analytics";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import { UIProvider } from "./i18n/UIContext";
import Home from "./pages/Home";

// Sample modal only matters 45s into the session — load it on demand so the
// critical main bundle stays small (Lighthouse: critical request chains).
const LazySampleModal = lazy(() => import("./components/SampleRequestModal"));

const SerumBottles = lazy(() => import("./pages/SerumBottles"));
const CreamJars = lazy(() => import("./pages/CreamJars"));
const SupplierComparison = lazy(() => import("./pages/SupplierComparison"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Process = lazy(() => import("./pages/Process"));
const About = lazy(() => import("./pages/About"));
const Privacy = lazy(() => import("./pages/Privacy"));
// Blog.tsx only has named exports — map them to default for React.lazy.
const BlogIndex = lazy(() => import("./pages/Blog").then((m) => ({ default: m.BlogIndex })));
const BlogPostPage = lazy(() => import("./pages/Blog").then((m) => ({ default: m.BlogPost })));
const Contact = lazy(() => import("./pages/Contact"));
const Certifications = lazy(() => import("./pages/Certifications"));

function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-gold/30 border-t-gold" />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <UIProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Analytics />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/serum-bottles" element={<SerumBottles />} />
                  <Route path="/cream-jars" element={<CreamJars />} />
                  <Route path="/cosmetic-packaging-supplier-comparison-2026" element={<SupplierComparison />} />
                  <Route path="/products/:id" element={<ProductDetail />} />
                  <Route path="/process" element={<Process />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/blog" element={<BlogIndex />} />
                  <Route path="/blog/:slug" element={<BlogPostPage />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/certifications" element={<Certifications />} />
                  <Route path="/privacy" element={<Privacy />} />
                  {/* locale-prefixed SEO landing paths */}
                  <Route path="/kr" element={<Home />} />
                  <Route path="/kr/*" element={<Home />} />
                  <Route path="/jp" element={<Home />} />
                  <Route path="/jp/*" element={<Home />} />
                  <Route path="/tw" element={<Home />} />
                  <Route path="/tw/*" element={<Home />} />
                  <Route path="*" element={<Home />} />
                </Routes>
              </Suspense>
            </main>
            <Suspense fallback={null}>
              <LazySampleModal />
            </Suspense>
            <FloatingWhatsapp />
            <Footer />
          </div>
        </BrowserRouter>
      </UIProvider>
    </HelmetProvider>
  );
}
