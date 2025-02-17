"use client";
import Image from "next/image";
// import { useState } from "react";

export default function Landing() {
  return (
    <main className="flex justify-center h-fit">
      <section className="justify-items-center">
        <h1 className="font-zain font-bold text-black text-6xl">Hello, im a Fullstack Developer</h1>

        <article className="flex relative top-[50px] bg-[#7A63FF] h-[300px] w-[300px] overflow-hidden rounded-full border-2 border-[#7A63FF] shadow-2xl shadow-[#7A63FF]">
          <Image src="/avatar.png" width={300} height={300} alt="avatar" className="object-cover" />
        </article>
        <article className="mt-16 flex justify-center">
          <Image 
            src="https://mattfarley.ca/img/hero-devices.svg" 
            width={1500} 
            height={1500} 
            alt="Img" 
            className="w-1/2 max-w-[1500px]"
          />
        </article>
      </section>
    </main>
  );
}
