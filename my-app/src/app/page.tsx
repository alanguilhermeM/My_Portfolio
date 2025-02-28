// import Image from "next/image";

import AboutMe from "@/components/AboutMe";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Landing />
      <AboutMe />
      <Certifications />
      <Testimonials />
      <Footer />
    </div>
  );
}
