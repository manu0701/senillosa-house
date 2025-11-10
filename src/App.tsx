import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Building } from "./components/Building";
import { Amenities } from "./components/Amenities";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CurrencyProvider } from "./contexts/CurrencyContext";
import Reservations from "./pages/Reservations";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "reservations">("home");

  // Simple routing based on hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "reservations") {
        setCurrentPage("reservations");
      } else {
        setCurrentPage("home");
      }
    };

    handleHashChange(); // Check initial hash
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Make navigation function globally available
  useEffect(() => {
    (window as any).navigateTo = (page: "home" | "reservations") => {
      if (page === "reservations") {
        window.location.hash = "reservations";
      } else {
        window.location.hash = "";
      }
      setCurrentPage(page);
    };
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <CurrencyProvider>
          {currentPage === "home" ? (
            <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
              <Navbar />
              <Hero />
              <Building />
              <Amenities />
              <Gallery />
              <Testimonials />
              <CTASection />
              <Footer />
            </div>
          ) : (
            <Reservations />
          )}
        </CurrencyProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
