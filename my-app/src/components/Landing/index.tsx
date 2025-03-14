"use client";
import Image from "next/image";
import { useIntl } from "react-intl";

export default function Landing() {
  const intl = useIntl();

  return (
    <main className="flex justify-center">
      <section className="justify-items-center">
        <h1 className="font-zain font-bold dark:text-white text-[#141c3a] md:text-6xl ss:text-3xl">{intl.formatMessage({ id: "welcome" })}</h1>

        <article className="flex relative md:top-[50px] ss:top-[30px] bg-[#7A63FF] md:h-[300px] md:w-[300px] ss:h-[250px] ss:w-[250px] overflow-hidden rounded-full border-2 border-[#7A63FF] shadow-2xl shadow-[#7A63FF]">
          <Image src="/avatar.png" width={300} height={300} alt="avatar" className="object-cover" />
        </article>
        <article className="md:mt-16 ss:mt-12 flex justify-center">
          <Image 
            src="https://mattfarley.ca/img/hero-devices.svg" 
            width={1500} 
            height={1500} 
            alt="Img" 
            className="md:w-1/2 ss:w-[90%] max-w-[1500px]"
          />
        </article>
      </section>
    </main>
  );
}
