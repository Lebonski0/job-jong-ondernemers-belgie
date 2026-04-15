import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { useEffect, Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";
import { Loader2 } from "lucide-react";

// Lazy load pages for code splitting (fixes Lighthouse TBT/Unused JS issues)
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Speakers = lazy(() => import("./pages/Speakers"));
const Events = lazy(() => import("./pages/Events"));
const News = lazy(() => import("./pages/News"));
const Join = lazy(() => import("./pages/Join"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Fallback loader while lazy chunks are downloading
const PageFallback = () => (
  <div className="flex h-[50vh] items-center justify-center text-zinc-500">
    <Loader2 className="h-8 w-8 animate-spin" />
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-zinc-900 bg-white selection:bg-black selection:text-white">
        <Navbar />
        <main className="flex-grow bg-[#020203]">
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/over-ons" element={<About />} />
              <Route path="/gastsprekers" element={<Speakers />} />
              <Route path="/events" element={<Events />} />
              <Route path="/nieuws" element={<News />} />
              <Route path="/aanmelden" element={<Join />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
