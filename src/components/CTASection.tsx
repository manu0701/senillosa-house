import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function CTASection() {
  const { t } = useLanguage();

  const handleReservation = () => {
    if ((window as any).navigateTo) {
      (window as any).navigateTo("reservations");
    }
  };

  return (
    <section className="py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center shadow-xl"
        >
          <h2 className="text-background mb-6">
            <span className="font-serif italic">{t("ctaTitle")}</span>
          </h2>
          
          <p className="text-xl text-background/80 mb-10 max-w-2xl mx-auto">
            {t("ctaDescription")}
          </p>
          
          <Button 
            size="lg" 
            onClick={handleReservation}
            className="bg-background hover:bg-background/90 text-foreground rounded-full px-8 py-6 group shadow-lg"
          >
            {t("scheduleVisit")}
            <div className="ml-3 w-6 h-6 rounded-full bg-foreground/10 flex items-center justify-center">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}