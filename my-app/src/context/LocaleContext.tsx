"use client";
import { createContext, useContext, useState } from "react";
import { IntlProvider } from "react-intl";
import enMessages from "@/locales/en.json";
import ptMessages from "@/locales/pt.json";

// Definindo o tipo de mensagens com base nos arquivos JSON
type Messages = typeof enMessages; // ou typeof ptMessages, já que ambos têm o mesmo formato

const messages: { [key in 'en' | 'pt']: Messages } = {
  en: enMessages,
  pt: ptMessages,
};

interface LocaleContextType {
  locale: 'en' | 'pt';  // Definindo que o locale pode ser apenas 'en' ou 'pt'
  setLocale: (locale: 'en' | 'pt') => void;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: 'pt',
  setLocale: () => {},
});

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<'en' | 'pt'>('pt');  // Tipando o estado do locale

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
