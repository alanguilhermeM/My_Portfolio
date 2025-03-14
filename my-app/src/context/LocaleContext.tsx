"use client";
import { createContext, useContext, useState } from "react";
import { IntlProvider } from "react-intl";
import enMessages from "@/locales/en.json";
import ptMessages from "@/locales/pt.json";

const messages = { en: enMessages, pt: ptMessages };

const LocaleContext = createContext({
  locale: "pt",
  setLocale: (locale: string) => {}
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
