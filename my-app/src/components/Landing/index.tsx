"use client";
import Image from "next/image";
import { useIntl } from "react-intl";

export default function Landing() {
  const intl = useIntl();

  return (
    <main className="flex justify-center max-ss:h-[500px]">
      <section className="justify-items-center">
        <h1 className="font-zain font-bold dark:text-white text-[#141c3a] md:text-6xl max-sm:text-3xl max-ss:text-xl text-center">{intl.formatMessage({ id: "welcome" })}</h1>

        <article className="flex relative md:top-[50px] max-ss:top-[30px] ss:top-[30px] bg-[#7A63FF] max-ss:h-[200px] max-ss:w-[200px] md:h-[300px] md:w-[300px] ss:h-[250px] ss:w-[250px] overflow-hidden rounded-full border-2 border-[#7A63FF] shadow-2xl shadow-[#7A63FF]">
          <Image src="/avatar.png" width={300} height={300} alt="avatar" className="object-cover" />
        </article>
        <article className="md:mt-16 ss:mt-12 flex justify-center max-ss:relative max-ss:top-[142px]">
          <Image 
            src="https://mattfarley.ca/img/hero-devices.svg" 
            width={1500} 
            height={1500} 
            alt="Img" 
            className="md:w-1/2 ss:w-[90%] max-w-[1500px] max-ss:w-[100%] "
          />
        </article>
      </section>
    </main>
  );
}
