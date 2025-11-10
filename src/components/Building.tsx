import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "motion/react";
import { Building2, Sun, Thermometer, ArrowRight } from "lucide-react";

export function Building() {
  const { language, t } = useLanguage();

  const features = [
    {
      icon: Building2,
      titleKey: "feature1Title",
      descKey: "buildingDesc1",
      color: "bg-[#E8F5E9]",
    },
    {
      icon: Sun,
      titleKey: "feature2Title",
      descKey: "buildingDesc2",
      color: "bg-[#FFF3E0]",
    },
    {
      icon: Thermometer,
      titleKey: "feature3Title",
      descKey: "buildingDesc3",
      color: "bg-[#E3F2FD]",
    },
  ];

  return (
    <section id="building" className="py-24 bg-background-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 border border-accent">
              <span className="text-sm text-foreground/70">{t("aboutUs")}</span>
            </div>
            <h2 className="text-foreground">
              <span className="font-serif italic">{t("buildingTitle")}</span>
            </h2>
            <p className="text-lg text-foreground/70">
              {t("buildingIntro")}
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-background rounded-[2rem] p-8 h-full shadow-sm border border-border hover:shadow-xl transition-all duration-500">
                {/* Icon */}
                <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h4 className="text-foreground mb-4">
                  {t(feature.titleKey)}
                </h4>
                <p className="text-foreground/60 leading-relaxed mb-6">
                  {t(feature.descKey)}
                </p>

                {/* Learn More Link */}
                <button className="text-sm text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                  {t("learnMore")}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}