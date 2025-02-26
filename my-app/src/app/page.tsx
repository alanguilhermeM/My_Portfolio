// import Image from "next/image";

import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Landing from "@/components/Landing";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Landing />
      <AboutMe />
      <Footer />
    </div>
  );
}
