import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const images = [
  {
    id: 1,
    query: "modern apartment interior",
    alt: "Modern apartment interior",
  },
  {
    id: 2,
    query: "luxury bedroom",
    alt: "Luxury bedroom",
  },
  {
    id: 3,
    query: "modern kitchen",
    alt: "Modern kitchen",
  },
  {
    id: 4,
    query: "apartment balcony view",
    alt: "Apartment balcony",
  },
  {
    id: 5,
    query: "modern bathroom",
    alt: "Modern bathroom",
  },
  {
    id: 6,
    query: "living room design",
    alt: "Living room",
  },
];

export function Gallery() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setSelectedImage((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = images.length - 1;
      if (next >= images.length) next = 0;
      return next;
    });
  };

  return (
    <section id="images" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-foreground">
            {t("imagesTitle")}
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Main Image Viewer with Glass Effect */}
          <div className="relative mb-8 rounded-3xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-background/60 to-background/30 border border-foreground/10 shadow-2xl p-2">
            <div className="relative h-[500px] overflow-hidden rounded-2xl bg-background/50">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={selectedImage}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.3 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                  className="absolute inset-0"
                >
                  <ImageWithFallback
                    src={`https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080`}
                    alt={images[selectedImage].alt}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                  
                  {/* Image counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 backdrop-blur-md bg-background/40 px-4 py-2 rounded-full border border-foreground/10">
                    <span className="text-sm text-foreground">
                      {selectedImage + 1} / {images.length}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                onClick={() => paginate(-1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 backdrop-blur-xl bg-background/60 hover:bg-background/80 p-3 rounded-full border border-foreground/10 shadow-lg transition-all duration-300 hover:scale-110 z-10"
              >
                <ChevronLeft className="w-6 h-6 text-foreground" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 backdrop-blur-xl bg-background/60 hover:bg-background/80 p-3 rounded-full border border-foreground/10 shadow-lg transition-all duration-300 hover:scale-110 z-10"
              >
                <ChevronRight className="w-6 h-6 text-foreground" />
              </button>
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {images.map((image, index) => (
              <motion.button
                key={image.id}
                onClick={() => {
                  setDirection(index > selectedImage ? 1 : -1);
                  setSelectedImage(index);
                }}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                  selectedImage === index
                    ? "border-primary shadow-lg shadow-primary/25"
                    : "border-foreground/10 opacity-60 hover:opacity-100"
                }`}
              >
                <ImageWithFallback
                  src={`https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200`}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                {selectedImage === index && (
                  <motion.div
                    layoutId="selected-border"
                    className="absolute inset-0 border-2 border-primary rounded-2xl"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
