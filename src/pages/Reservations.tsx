import { useState } from "react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const countries = [
  "Argentina", "Brasil", "Chile", "Colombia", "México", "Paraguay", "Perú", "Uruguay", "Venezuela",
  "Bolivia", "Costa Rica", "Cuba", "Ecuador", "El Salvador", "España", "Estados Unidos", "Guatemala",
  "Honduras", "Nicaragua", "Panamá", "Puerto Rico", "República Dominicana", "Otro"
];

export default function Reservations() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    address: "",
    city: "",
    province: "",
    country: "",
    phone: "",
    email: "",
    consult: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ 
        name: "",
        lastName: "",
        address: "",
        city: "",
        province: "",
        country: "",
        phone: "",
        email: "",
        consult: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex flex-col">
      <Navbar />
      
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
            {/* Left Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <div className="mb-8">
                <h1 className="text-foreground mb-4">
                  {t("reservationsTitle")}
                </h1>
                <p className="text-lg text-foreground/70">{t("reservationsSubtitle")}</p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name and Last Name Row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">
                        {t("nameLabel")}:*
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-background border-border focus:border-primary transition-colors h-11 rounded-xl"
                        placeholder={t("namePlaceholder")}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-foreground">
                        {t("lastNameLabel")}:*
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="bg-background border-border focus:border-primary transition-colors h-11 rounded-xl"
                        placeholder={t("lastNamePlaceholder")}
                      />
                    </div>
                  </div>

                  {/* Address Field */}
                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-foreground">
                      {t("addressLabel")}:*
                    </Label>
                    <Input
                      id="address"
                      name="address"
                      type="text"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="bg-background border-border focus:border-primary transition-colors h-11 rounded-xl"
                      placeholder={t("addressPlaceholder")}
                    />
                  </div>

                  {/* City, Province, Country Row */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-foreground">
                        {t("cityLabel")}:*
                      </Label>
                      <Input
                        id="city"
                        name="city"
                        type="text"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="bg-background border-border focus:border-primary transition-colors h-11 rounded-xl"
                        placeholder={t("cityPlaceholder")}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="province" className="text-foreground">
                        {t("provinceLabel")}:*
                      </Label>
                      <Input
                        id="province"
                        name="province"
                        type="text"
                        required
                        value={formData.province}
                        onChange={handleChange}
                        className="bg-background border-border focus:border-primary transition-colors h-11 rounded-xl"
                        placeholder={t("provincePlaceholder")}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country" className="text-foreground">
                        {t("countryLabel")}:*
                      </Label>
                      <Select
                        value={formData.country}
                        onValueChange={(value) => setFormData({ ...formData, country: value })}
                        required
                      >
                        <SelectTrigger className="bg-background border-border focus:border-primary h-11 rounded-xl">
                          <SelectValue placeholder={t("countryPlaceholder")} />
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map((country) => (
                            <SelectItem key={country} value={country}>
                              {country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Phone and Email Row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">
                        {t("phoneLabel")}:*
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-background border-border focus:border-primary transition-colors h-11 rounded-xl"
                        placeholder={t("phonePlaceholder")}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        {t("emailLabel")}:*
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-background border-border focus:border-primary transition-colors h-11 rounded-xl"
                        placeholder={t("emailPlaceholder")}
                      />
                    </div>
                  </div>

                  {/* Consult Field */}
                  <div className="space-y-2">
                    <Label htmlFor="consult" className="text-foreground">
                      {t("consultLabel")}:
                    </Label>
                    <Textarea
                      id="consult"
                      name="consult"
                      value={formData.consult}
                      onChange={handleChange}
                      rows={4}
                      className="bg-background border-border focus:border-primary transition-colors resize-none rounded-xl"
                      placeholder={t("consultPlaceholder")}
                    />
                  </div>

                  {/* Required Fields Notice */}
                  <p className="text-sm text-foreground/60">
                    {t("requiredFields")}
                  </p>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-auto px-12 bg-primary hover:bg-primary/90 text-white rounded-full group shadow-lg h-11"
                  >
                    {t("submitButton")}
                  </Button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-secondary/30 rounded-[2.5rem] p-12 text-center border border-border"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-foreground mb-2">
                    {t("successTitle")}
                  </h3>
                  <p className="text-foreground/70">
                    {t("successMessage")}
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2 md:sticky md:top-24"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1594873604892-b599f847e859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjI2OTI0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Modern apartment interior"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-background/95 backdrop-blur-md rounded-[1.5rem] p-6 border border-border shadow-xl">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        <span className="text-sm text-foreground/60 uppercase tracking-wider">
                          Disponible
                        </span>
                      </div>
                      <h4 className="text-foreground mb-1">
                        Senillosa Homes
                      </h4>
                      <p className="text-sm text-foreground/70">
                        Caballito, Buenos Aires
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
