"use client";

import AboutMe from "@/components/AboutMe";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import MyProjects from "@/components/MyProjects";
import Testimonials from "@/components/Testimonials";
import { LanguageToggle } from "@/components/ui/languageToggle";
import { ModeToggle } from "@/components/ui/modeToggle";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Landing />
      <AboutMe />
      <Certifications />
      <MyProjects />
      <Testimonials />
      <Footer />
      <section className="fixed bottom-6 right-6">
        <LanguageToggle />
        <ModeToggle />
      </section>
    </div>
  );
}
