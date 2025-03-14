"use client"
import ContactForm from "@/components/Contact";
import { LanguageToggle } from "@/components/ui/languageToggle";
import { ModeToggle } from "@/components/ui/modeToggle";
import React from "react";

export default function Contact() {
  return (
    <main>
      <ContactForm />
      <section className="fixed bottom-6 right-6">
        <LanguageToggle />
        <ModeToggle />
      </section>
    </main>
  );
}
