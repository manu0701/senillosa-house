import { createContext, useContext, useState, ReactNode } from "react";

type Currency = "ARS" | "USD";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (priceUSD: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

// Exchange rate (you can update this as needed)
const EXCHANGE_RATE = 1000; // 1 USD = 1000 ARS (example)

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("USD");

  const formatPrice = (priceUSD: number): string => {
    if (currency === "USD") {
      return `$${priceUSD}`;
    } else {
      const priceARS = priceUSD * EXCHANGE_RATE;
      return `$${priceARS.toLocaleString("es-AR")}`;
    }
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}
