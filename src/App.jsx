// src/App.jsx
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./layout.jsx";
import ScrollToTop from "./components/ui/ScrollToTop.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Programmes from "./pages/Programmes.jsx";
import Roadmap from "./pages/Roadmap.jsx";
import Rates from "./pages/Rates.jsx";
import FAQ from "./pages/FAQ.jsx";
import Contact from "./pages/Contact.jsx";
import CoachPortal from "./pages/CoachPortal";
import Terms from "./pages/Terms.jsx";
import Reviews from "./pages/Reviews.jsx";
import CondoKidsSwimmingLessonsSingapore from "./pages/CondoKidsSwimmingLessonsSingapore.jsx";
import PrivateVsGroupKidsSwimmingLessons from "./pages/PrivateVsGroupKidsSwimmingLessons.jsx";
import KidsSwimmingSafetySOP from "./pages/KidsSwimmingSafetySOP.jsx";
import BestKidsSwimmingLessonsSingapore from "./pages/BestKidsSwimmingLessonsSingapore.jsx";
import PunggolSwimmingLessons from "./pages/PunggolSwimmingLessons.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";

function App() {
  // ✅ Auto-hide WhatsApp button on scroll down, show on scroll up
  const [showWhatsApp, setShowWhatsApp] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      // show if scrolling up (or near top), hide if scrolling down
      if (currentScrollY < 80 || currentScrollY < lastScrollY) {
        setShowWhatsApp(true);
      } else {
        setShowWhatsApp(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
       <Route path="/programmes" element={<Programmes />} />
       <Route path="/Programmes" element={<Programmes />} />
      <Route path="/Roadmap" element={<Roadmap />} />
      <Route path="/Rates" element={<Rates />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/coach-portal" element={<CoachPortal />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/Reviews" element={<Reviews />} />
      <Route path="/condo-kids-swimming-lessons-singapore" element={<CondoKidsSwimmingLessonsSingapore />} />
      <Route path="/private-vs-group-kids-swimming-lessons" element={<PrivateVsGroupKidsSwimmingLessons />} />
      <Route path="/kids-swimming-safety-sop" element={<KidsSwimmingSafetySOP />} />
      <Route path="/best-kids-swimming-lessons-singapore" element={<BestKidsSwimmingLessonsSingapore />} />
      <Route path="/punggol-kids-swimming-lessons" element={<PunggolSwimmingLessons />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );

  return (
    <>
      <ScrollToTop />
      <Layout>
        {routes}

        {/* WhatsApp floating button (bottom-right) + auto-hide */}
        <div
          className={`fixed bottom-10 right-5 z-50 transition-all duration-300 ${
            showWhatsApp ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
          }`}
        >
          <a
            href="https://api.whatsapp.com/send?phone=6589510121&text=Hi%20Harry,%20I%20would%20like%20to%20enquire%20more%20about%20your%20swimming%20programmes%20available!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-base font-bold text-white shadow-lg transition hover:scale-105 hover:bg-[#20ba5a] hover:text-white"
            aria-label="Chat with us on WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.966 0c3.179.001 6.169 1.24 8.419 3.496 2.248 2.253 3.487 5.244 3.485 8.421-.003 6.615-5.34 11.963-11.91 11.963-2.004-.001-3.971-.51-5.713-1.48L0 24zm6.59-3.835c1.644.975 3.51 1.49 5.409 1.491 5.433 0 9.853-4.415 9.856-9.847.002-2.63-1.023-5.102-2.89-6.97C17.157 2.971 14.681 1.94 12.05 1.94 6.618 1.94 2.2 6.354 2.198 11.787c-.001 1.97.513 3.894 1.49 5.612l-.994 3.63 3.72-.976zm11.233-6.006c-.3-.15-1.773-.875-2.043-.974-.27-.099-.467-.15-.662.15-.195.3-.755.949-.927 1.149-.172.199-.344.225-.644.075-.3-.15-1.267-.467-2.414-1.492-.893-.797-1.496-1.783-1.672-2.083-.176-.3-.019-.461.13-.61l.443-.517c.15-.199.2-.34.3-.51.1-.171.05-.327-.026-.477-.075-.15-.662-1.597-.907-2.187-.238-.574-.48-.496-.662-.505-.171-.007-.367-.008-.563-.008-.196 0-.514.073-.784.364-.269.291-1.026 1.003-1.026 2.447 0 1.444 1.053 2.839 1.2 3.039.146.199 2.072 3.164 5.019 4.436.701.303 1.248.483 1.674.619.704.224 1.346.193 1.853.117.565-.085 1.772-.725 2.022-1.425.25-.7.25-1.299.175-1.425-.076-.125-.27-.199-.57-.349z" />
            </svg>
            <span>Chat with us</span>
          </a>
        </div>
      </Layout>
    </>
  );
}

export default App;
