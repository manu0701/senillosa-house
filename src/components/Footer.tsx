import { Home } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const navItems = [
    { key: "building", label: t("building") },
    { key: "amenities", label: t("amenities") },
    { key: "images", label: t("images") },
    { key: "reservations", label: t("reservations") },
  ];

  const handleNavigation = (key: string) => {
    if (key === "reservations") {
      if ((window as any).navigateTo) {
        (window as any).navigateTo("reservations");
      }
      return;
    }
    
    // If we're on the reservations page, navigate home first
    if (window.location.hash === "#reservations") {
      if ((window as any).navigateTo) {
        (window as any).navigateTo("home");
      }
      setTimeout(() => {
        const element = document.getElementById(key);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
      return;
    }
    
    const element = document.getElementById(key);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <button 
            onClick={() => {
              if ((window as any).navigateTo) {
                (window as any).navigateTo("home");
              }
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full"></div>
              <div className="relative bg-gradient-to-br from-primary to-primary/80 p-2 rounded-xl shadow-lg">
                <Home className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold tracking-tight text-foreground" style={{ letterSpacing: '0.02em' }}>
                Senillosa
              </span>
              <span className="text-xs text-primary tracking-wider uppercase">Homes</span>
            </div>
          </button>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavigation(item.key)}
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-foreground/60 text-sm">
            © 2025 Senillosa Homes. {t("rights")}.
          </div>
        </div>
      </div>
    </footer>
  );
}