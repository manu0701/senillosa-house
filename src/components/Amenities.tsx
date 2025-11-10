import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { Waves, Flame, Dumbbell, Armchair } from "lucide-react";

export function Amenities() {
  const { t } = useLanguage();

  const amenities = [
    {
      icon: Armchair,
      titleKey: "amenityDeck",
      descKey: "amenityDeckDesc",
      bgColor: "bg-[#E8F5E9]",
      iconColor: "text-[#4CAF50]",
    },
    {
      icon: Waves,
      titleKey: "amenityPool",
      descKey: "amenityPoolDesc",
      bgColor: "bg-[#E1F5FE]",
      iconColor: "text-[#03A9F4]",
    },
    {
      icon: Flame,
      titleKey: "amenityGrill",
      descKey: "amenityGrillDesc",
      bgColor: "bg-[#FFF3E0]",
      iconColor: "text-[#FF9800]",
    },
    {
      icon: Dumbbell,
      titleKey: "amenityGym",
      descKey: "amenityGymDesc",
      bgColor: "bg-[#F3E5F5]",
      iconColor: "text-[#9C27B0]",
    },
  ];

  return (
    <section id="amenities" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-foreground">
              <span className="font-serif italic">{t("amenitiesTitle")}</span>
            </h2>
            <p className="text-xl text-foreground/70">
              {t("amenitiesSubtitle")}
            </p>
          </motion.div>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className={`${amenity.bgColor} rounded-[2rem] p-8 h-full shadow-sm hover:shadow-lg transition-all duration-300`}>
                {/* Icon */}
                <div className="mb-6">
                  <amenity.icon className={`w-12 h-12 ${amenity.iconColor}`} />
                </div>

                {/* Content */}
                <h4 className="text-foreground mb-3">
                  {t(amenity.titleKey)}
                </h4>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {t(amenity.descKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}