"use client";

import { useIntl } from "react-intl";
import Skills from "./skills";

export default function AboutMe() {
  const intl = useIntl();

  return (
    <main id="sobre" className="flex flex-col justify-center items-center w-full h-fit py-20">
      <article className="flex flex-col items-center justify-center w-full max-lg:h-[600px] lg:h-[500px] xl:h-[450px] bg-[#6E07F3]">
        <section className="flex flex-col items-center text-center text-white max-ss:w-[80%] md:w-[70%] lg:w-[50%] ss:w-[85%]">
          <h2 className="w-full font-zain font-bold max-ss:text-2xl md:text-4xl ss:text-4xl pb-4">
            {intl.formatMessage({ id: "about" })}
          </h2>
          <span className="w-full font-zain font-medium md:text-3xl ss:text-2xl pt-4">
            {intl.formatMessage({ id: "aboutDescription" })}
          </span>
        </section>
      </article>
      <div className="w-full h-[200px] bg-[#6e07f3]" />
      <Skills />
    </main>
  );
}
