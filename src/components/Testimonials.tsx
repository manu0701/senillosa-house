import { motion } from "motion/react";
import { User, Star, Quote } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const testimonials = [
  {
    id: 1,
    name: "María González",
    nameEn: "María González",
    rating: 5,
    comment: "Excelente ubicación y muy cómodo. El departamento superó mis expectativas.",
    commentEn: "Excellent location and very comfortable. The apartment exceeded my expectations.",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    nameEn: "Carlos Rodríguez",
    rating: 5,
    comment: "Muy buena atención y el lugar es tal como se muestra en las fotos. Totalmente recomendable.",
    commentEn: "Very good service and the place is exactly as shown in the photos. Highly recommended.",
  },
  {
    id: 3,
    name: "Ana Martínez",
    nameEn: "Ana Martínez",
    rating: 4,
    comment: "Perfecto para estadías largas. Todas las amenities necesarias y excelente conectividad.",
    commentEn: "Perfect for long stays. All necessary amenities and excellent connectivity.",
  },
];

export function Testimonials() {
  const { language, t } = useLanguage();

  return (
    <section className="py-24 bg-background-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-foreground mb-4">
              <span className="font-serif italic">{t("testimonialsTitle")}</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className="bg-background p-8 rounded-[2rem] shadow-sm border border-border h-full">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/20 mb-6" />

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "fill-primary text-primary"
                          : "text-border"
                      }`}
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-foreground/70 mb-8 leading-relaxed">
                  "{language === "es" ? testimonial.comment : testimonial.commentEn}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground">
                      {language === "es" ? testimonial.name : testimonial.nameEn}
                    </h4>
                    <p className="text-sm text-foreground/50">{t("verifiedGuest")}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}