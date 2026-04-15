import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Speakers from "./pages/Speakers";
import Events from "./pages/Events";
import News from "./pages/News";
import Join from "./pages/Join";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-zinc-900 bg-white selection:bg-black selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/over-ons" element={<About />} />
            <Route path="/gastsprekers" element={<Speakers />} />
            <Route path="/events" element={<Events />} />
            <Route path="/nieuws" element={<News />} />
            <Route path="/aanmelden" element={<Join />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
