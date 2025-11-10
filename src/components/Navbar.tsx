import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
import { useCurrency } from "../contexts/CurrencyContext";
import { Home, Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { currency, setCurrency } = useCurrency();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "reservations") {
      if ((window as any).navigateTo) {
        (window as any).navigateTo("reservations");
      }
      setIsMenuOpen(false);
      return;
    }
    
    // If we're on the reservations page, navigate home first
    if (window.location.hash === "#reservations") {
      if ((window as any).navigateTo) {
        (window as any).navigateTo("home");
      }
      setTimeout(() => {
        const element = document.getElementById(sectionId);
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
      setIsMenuOpen(false);
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { key: "building", id: "building" },
    { key: "amenities", id: "amenities" },
    { key: "images", id: "images" },
    { key: "reservations", id: "reservations" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
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

          {/* Navigation Items & Switches */}
          <div className="flex items-center gap-6">
            {/* Nav Items */}
            <div className="hidden md:flex items-center gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.key}
                  href={`#${item.id}`}
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  {t(item.key)}
                </a>
              ))}
            </div>

            {/* Language Switch */}
            <div className="flex items-center gap-2">
              <span className={`text-sm ${language === "es" ? "text-primary" : "text-foreground/50"}`}>
                ES
              </span>
              <Switch
                checked={language === "en"}
                onCheckedChange={toggleLanguage}
              />
              <span className={`text-sm ${language === "en" ? "text-primary" : "text-foreground/50"}`}>
                EN
              </span>
            </div>

            {/* Currency Selector */}
            <Select value={currency} onValueChange={(value) => setCurrency(value as "ARS" | "USD")}>
              <SelectTrigger className="w-[100px] bg-background/50 border-border rounded-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USD">USD $</SelectItem>
                <SelectItem value="ARS">ARS $</SelectItem>
              </SelectContent>
            </Select>

            {/* Theme Switch */}
            <div className="flex items-center gap-2">
              <Sun className={`w-4 h-4 ${theme === "light" ? "text-primary" : "text-foreground/50"}`} />
              <Switch
                checked={theme === "dark"}
                onCheckedChange={toggleTheme}
              />
              <Moon className={`w-4 h-4 ${theme === "dark" ? "text-primary" : "text-foreground/50"}`} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="py-4 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-foreground/70 hover:text-primary transition-colors py-2"
                >
                  {t(item.key)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}