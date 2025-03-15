"use client";

import { useIntl } from "react-intl";
import Skills from "./skills";

export default function AboutMe() {
  const intl = useIntl();

  return (
    <main id='sobre' className="flex flex-wrap justify-center w-full h-fit ">
      <article className="justify-items-center md:h-[600px] max-sm:h-[800px] bg-[#6E07F3]">
        <section className="self-center content-center text-center text-white md:w-[45%] h-[70%] ss:w-[85%]">
          <h2 className="w-full font-zain font-bold md:text-4xl ss:text-4xl pb-4">{intl.formatMessage({ id: "about" })}</h2>
          <span className="w-full font-zain font-medium md:text-3xl ss:text-2xl pt-4">{intl.formatMessage({ id: "aboutDescription" })}</span>
        </section>
      </article>
      <Skills />
    </main>
  );
}
