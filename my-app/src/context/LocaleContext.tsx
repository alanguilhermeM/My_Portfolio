"use client";
import { createContext, useContext, useState } from "react";
import { IntlProvider } from "react-intl";
import enMessages from "@/locales/en.json";
import ptMessages from "@/locales/pt.json";

// Tipando a estrutura do contexto
interface LocaleContextType {
  locale: string;
  setLocale: (locale: string) => void;
}

const messages = { en: enMessages, pt: ptMessages };

// Criando o contexto com o tipo
const LocaleContext = createContext<LocaleContextType>({
  locale: "pt",
  setLocale: () => {} // Função vazia por padrão
});

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState("pt");

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
