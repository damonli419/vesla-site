import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Analytics from "./components/Analytics";
import SampleRequestModal from "./components/SampleRequestModal";
import { UIProvider } from "./i18n/UIContext";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Process from "./pages/Process";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import { BlogIndex, BlogPost } from "./pages/Blog";
import Contact from "./pages/Contact";

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
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/process" element={<Process />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<BlogIndex />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/contact" element={<Contact />} />
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
            </main>
            <SampleRequestModal />
            <Footer />
          </div>
        </BrowserRouter>
      </UIProvider>
    </HelmetProvider>
  );
}
