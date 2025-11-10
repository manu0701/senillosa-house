import { useLanguage } from "../contexts/LanguageContext";
import { useCurrency } from "../contexts/CurrencyContext";
import { Button } from "./ui/button";
import { ArrowRight, MapPin, DollarSign, Store, TreePine, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const { t } = useLanguage();
  const { formatPrice, currency } = useCurrency();

  const scrollToGallery = () => {
    const element = document.getElementById("images");
    if (element) {
      const offset = 80; // navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/30 border border-accent"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">Caballito, Buenos Aires</span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-foreground leading-tight">
                <span className="block">{t("heroDiscover")}</span>
                <span className="block font-serif italic text-primary">{t("heroPerfect")}</span>
                <span className="block">{t("heroLive")}</span>
              </h1>
            </motion.div>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-foreground/70 max-w-xl"
            >
              {t("heroSubtitle")}
            </motion.p>

            {/* Feature Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-background-light border border-border">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/80">{t("privilegedLocation")}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-background-light border border-border">
                <DollarSign className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/80">{t("paymentOptions")}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-background-light border border-border">
                <Store className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/80">{t("nearbyBusiness")}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-background-light border border-border">
                <TreePine className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/80">{t("quietNeighborhood")}</span>
              </div>
            </motion.div>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                onClick={scrollToGallery}
                className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-8 py-6 group shadow-lg"
              >
                {t("viewListings")}
                <div className="ml-3 w-6 h-6 rounded-full bg-background/20 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Button>
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center gap-3 pt-4"
            >
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background"></div>
                <div className="w-10 h-10 rounded-full bg-secondary/20 border-2 border-background"></div>
                <div className="w-10 h-10 rounded-full bg-accent/40 border-2 border-background"></div>
              </div>
              <div>
                <p className="text-sm">
                  <span className="text-foreground">500+</span>{" "}
                  <span className="text-foreground/60">{t("happyGuests")}</span>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Senillosa Homes Building"
                className="w-full h-[600px] object-cover"
              />
              
              {/* Price Tag Overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute bottom-8 left-8 bg-background rounded-3xl p-6 shadow-xl"
              >
                <p className="text-sm text-foreground/60 mb-1">{t("startingFrom")}</p>
                <p className="text-3xl text-foreground">{formatPrice(450)}</p>
                <p className="text-xs text-foreground/50">{t("perNight")} • {currency}</p>
              </motion.div>
              
              {/* Featured Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute top-8 right-8 bg-primary text-background rounded-full px-5 py-2.5 shadow-lg"
              >
                <span className="text-sm">{t("featured")}</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}