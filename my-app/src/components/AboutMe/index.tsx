"use client";

import Skills from "./skills";

// import Image from "next/image";

export default function AboutMe() {
  return (
    <main className="flex flex-wrap justify-center w-full h-fit ">
      <article className="justify-items-center h-[600px] bg-[#6E07F3]">
        <section className="self-center content-center text-center text-white md:w-[45%] h-[70%] ss:w-[85%]">
          <h2 className="w-full font-zain font-bold md:text-4xl ss:text-4xl pb-4">Hi, I&apos;m Guilherme. Nice to meet you.</h2>
          <span className="w-full font-zain font-medium md:text-3xl ss:text-2xl pt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, facilis possimus quo inventore voluptas adipisci aut officia optio velit esse assumenda blanditiis mollitia et quibusdam doloremque, exercitationem voluptates pariatur provident!</span>
        </section>
      </article>
      <Skills />
    </main>
  );
}
