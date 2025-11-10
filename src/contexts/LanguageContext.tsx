import { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Navbar
    building: "Edificio",
    amenities: "Amenities",
    services: "Servicios",
    images: "Imágenes",
    conditions: "Condiciones",
    reservations: "Reservas",
    
    // Hero
    heroDiscover: "Descubre",
    heroPerfect: "el lugar perfecto",
    heroLive: "para vivir y prosperar",
    heroTitle: "Tu lugar relajado y cómodo en el corazón de Caballito",
    heroSubtitle: "Explora una selección curada de departamentos que se ajustan a tu estilo de vida y preferencias",
    knowMore: "Conocer más",
    privilegedLocation: "Ubicación privilegiada",
    paymentOptions: "Pesos y dólares",
    nearbyBusiness: "Negocios cerca",
    quietNeighborhood: "Barrio tranquilo",
    viewListings: "Ver listados",
    happyGuests: "huéspedes felices",
    startingFrom: "Desde",
    perNight: "por noche",
    featured: "Destacado",
    
    // Building
    aboutUs: "Sobre Nosotros",
    buildingTitle: "El edificio",
    buildingIntro: "Descubre espacios diseñados pensando en tu comodidad y bienestar",
    characteristics: "CARACTERÍSTICAS",
    feature1Title: "Elegancia y Estilo Moderno",
    feature2Title: "Amplitud y Preferencias",
    feature3Title: "Luminosidad y Tranquilidad",
    buildingDesc1: 'Los exclusivos departamentos de "Senillosa House", armonizan elegancia y un estilo moderno, en los cuales la calidez y belleza prevalecen. Contando con todas las comodidades necesarias para facilitar su descanso o su retiro del trabajo.',
    buildingDesc2: "Los departamentos cubren la mas completa gama de necesidades y preferencias de los clientes mas exigentes.",
    buildingDesc1En: '"The exclusive apartments of "Senillosa House", where warmth and beauty prevail, blend elegance and modern style. Provided with all the amenities needed to facilitate break or retirement from work, the apartments cover the widest range of needs and preferences of the most demanding customers."',
    buildingDesc3: "La luminosidad de sus ambientes, se debe a que TODOS los departamentos dan al exterior y tienen amplios balcones. Y la tranquilidad se logra por la instalación de carpintería de alta calidad, con doble vidrio hermético termoacústico.",
    buildingDesc3En: '"The brightness of the rooms is due to the fact that all the apartments face the exterior and have spacious balconies. Nevertheless, tranquility is achieved by the installation of high quality carpentry framing, with thermo-acoustic double glazing sealed units, prepared for the different seasons of the year including air conditioning and underfloor central heating."',
    learnMore: "Conocer más",
    
    // Amenities
    amenitiesTitle: "Amenities",
    amenitiesSubtitle: "Brindamos la experiencia más completa para que disfrutes cada momento",
    amenityDeck: "Deck con Reposeras",
    amenityDeckDesc: "Espacio al aire libre con reposeras para relajarte y disfrutar del sol",
    amenityPool: "Piscina",
    amenityPoolDesc: "Piscina climatizada disponible todo el año para tu disfrute",
    amenityGrill: "Parrilla",
    amenityGrillDesc: "Área de parrilla equipada para compartir momentos únicos",
    amenityGym: "Gimnasio",
    amenityGymDesc: "Gimnasio completamente equipado para mantenerte en forma",
    
    // Gallery
    imagesTitle: "Galería de Imágenes",
    
    // Reservations
    reservationsTitle: "Reserva tu estadía",
    reservationsSubtitle: "Completa el formulario y nos pondremos en contacto contigo a la brevedad",
    nameLabel: "Nombre",
    lastNameLabel: "Apellido",
    namePlaceholder: "Juan",
    lastNamePlaceholder: "Pérez",
    addressLabel: "Domicilio",
    addressPlaceholder: "Calle Falsa 123",
    cityLabel: "Ciudad",
    cityPlaceholder: "Buenos Aires",
    provinceLabel: "Provincia",
    provincePlaceholder: "Buenos Aires",
    countryLabel: "País",
    countryPlaceholder: "Selecciona un país",
    phoneLabel: "Teléfono",
    phonePlaceholder: "+54 11 1234-5678",
    emailLabel: "Email",
    emailPlaceholder: "tu@email.com",
    messageLabel: "Motivo de consulta",
    messagePlaceholder: "Cuéntanos sobre tu estadía...",
    consultLabel: "Consulta",
    consultPlaceholder: "Escribe tu consulta aquí...",
    submitButton: "Enviar consulta",
    successTitle: "¡Mensaje enviado!",
    successMessage: "Gracias por contactarnos. Te responderemos pronto.",
    requiredFields: "* Campos obligatorios",
    
    // Testimonials
    testimonialsTitle: "Lo que dicen nuestros huéspedes",
    verifiedGuest: "Huésped verificado",
    
    // CTA Section
    ctaTitle: "¿Listo para encontrar tu hogar ideal?",
    ctaDescription: "Programa una visita y descubre en persona todos los beneficios de vivir en Senillosa Homes",
    scheduleVisit: "Programar visita",
    requestReservation: "Solicita tu reserva",
    seePhotos: "Ver fotos",
    
    // Footer
    rights: "Todos los derechos reservados",
  },
  en: {
    // Navbar
    building: "Building",
    amenities: "Amenities",
    services: "Services",
    images: "Images",
    conditions: "Conditions",
    reservations: "Reservations",
    
    // Hero
    heroDiscover: "Discover",
    heroPerfect: "the perfect place",
    heroLive: "to live and thrive",
    heroTitle: "Your relaxed and comfortable place in the heart of Caballito",
    heroSubtitle: "Explore a curated selection of apartments that fit your lifestyle and preferences",
    knowMore: "Learn more",
    privilegedLocation: "Privileged location",
    paymentOptions: "Pesos and dollars",
    nearbyBusiness: "Nearby business",
    quietNeighborhood: "Quiet neighborhood",
    viewListings: "View listings",
    happyGuests: "happy guests",
    startingFrom: "Starting from",
    perNight: "per night",
    featured: "Featured",
    
    // Building
    aboutUs: "About Us",
    buildingTitle: "The building",
    buildingIntro: "Discover spaces designed with your comfort and well-being in mind",
    characteristics: "CHARACTERISTICS",
    feature1Title: "Elegance and Modern Style",
    feature2Title: "Amplitude and Preferences",
    feature3Title: "Brightness and Tranquility",
    buildingDesc1: 'The exclusive apartments of "Senillosa House", where warmth and beauty prevail, blend elegance and modern style. Provided with all the amenities needed to facilitate break or retirement from work.',
    buildingDesc2: "The apartments cover the most complete range of needs and preferences of the most demanding clients.",
    buildingDesc1En: '"The exclusive apartments of "Senillosa House", where warmth and beauty prevail, blend elegance and modern style. Provided with all the amenities needed to facilitate break or retirement from work, the apartments cover the widest range of needs and preferences of the most demanding customers."',
    buildingDesc3: "The brightness of the rooms is due to the fact that all the apartments face the exterior and have spacious balconies. Nevertheless, tranquility is achieved by the installation of high quality carpentry framing, with thermo-acoustic double glazing sealed units, prepared for the different seasons of the year including air conditioning and underfloor central heating.",
    buildingDesc3En: '"The brightness of the rooms is due to the fact that all the apartments face the exterior and have spacious balconies. Nevertheless, tranquility is achieved by the installation of high quality carpentry framing, with thermo-acoustic double glazing sealed units, prepared for the different seasons of the year including air conditioning and underfloor central heating."',
    learnMore: "Learn more",
    
    // Amenities
    amenitiesTitle: "Amenities",
    amenitiesSubtitle: "We provide the most complete experience so you can enjoy every moment",
    amenityDeck: "Deck with Loungers",
    amenityDeckDesc: "Outdoor space with loungers to relax and enjoy the sun",
    amenityPool: "Swimming Pool",
    amenityPoolDesc: "Heated pool available all year round for your enjoyment",
    amenityGrill: "Grill",
    amenityGrillDesc: "Equipped grill area to share unique moments",
    amenityGym: "Gym",
    amenityGymDesc: "Fully equipped gym to keep you in shape",
    
    // Gallery
    imagesTitle: "Image Gallery",
    
    // Reservations
    reservationsTitle: "Book your stay",
    reservationsSubtitle: "Fill out the form and we will contact you shortly",
    nameLabel: "Name",
    lastNameLabel: "Last Name",
    namePlaceholder: "John",
    lastNamePlaceholder: "Doe",
    addressLabel: "Address",
    addressPlaceholder: "123 Main Street",
    cityLabel: "City",
    cityPlaceholder: "New York",
    provinceLabel: "State/Province",
    provincePlaceholder: "New York",
    countryLabel: "Country",
    countryPlaceholder: "Select a country",
    phoneLabel: "Phone",
    phonePlaceholder: "+1 234 567-8900",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    messageLabel: "Reason for inquiry",
    messagePlaceholder: "Tell us about your stay...",
    consultLabel: "Inquiry",
    consultPlaceholder: "Write your inquiry here...",
    submitButton: "Submit inquiry",
    successTitle: "Message sent!",
    successMessage: "Thank you for contacting us. We will respond soon.",
    requiredFields: "* Required fields",
    
    // Testimonials
    testimonialsTitle: "What our guests say",
    verifiedGuest: "Verified guest",
    
    // CTA Section
    ctaTitle: "Ready to find your ideal home?",
    ctaDescription: "Schedule a visit and discover in person all the benefits of living at Senillosa Homes",
    scheduleVisit: "Schedule visit",
    requestReservation: "Request your reservation",
    seePhotos: "See photos",
    
    // Footer
    rights: "All rights reserved",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}