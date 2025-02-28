"use client";
import React, { useEffect, useState } from "react";
import certificationsList from "@/utils/certificationsList";
import Image from "next/image";

export default function Certifications() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    certificationsList.map((certification) => {
      for (let i = 0; i <= certificationsList.length; i++) {
        console.log(certification);
      }
    });
  }, []);

  return (
    <main className="flex-col justify-self-center text-center w-[75%] h-fit">
      <h1 className="text-[#141c3a] font-zain font-bold text-5xl pb-6">
        My Certificates
      </h1>
      <span className="text-[#141c3a] font-zain text-2xl pb-10">
        Here are a few of of my certificates that i aquired around time.
      </span>
      <section className="grid md:grid-cols-3 ss:grid-cols-1 gap-4 pt-10">
        {certificationsList.map((certification, index) => {
          return (
            <div key={certification.id} className="relative">
              <Image
                src={certification.src}
                width={450}
                height={450}
                alt="certificate"
                className={`rounded-xl transition-all duration-500 ${
                  hoveredIndex === index ? "blur-sm" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(certification.id)}
                // onMouseLeave={() => setHoveredIndex(null)}
              />
              {hoveredIndex === index && (
                <div
                  className="absolute inset-0 flex flex-wrap items-center justify-center rounded-xl hover:scale-105 transition-all ease-in-out duration-500  bg-[#141c3a] "
                  //   onMouseEnter={() => setHoveredIndex(certification.id)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <span className="relative text-white md:top-10 ss:top-4 w-[80%] font-zain md:text-3xl ss:text-xl">
                    Click the button below to be redirected to the certificate
                    credentials
                  </span>
                  <a href={certification.link} target="_blank">
                    <button className="relative md:bottom-6 ss:bottom-2 bg-transparent hover:bg-[#6E07F3] border-2 border-[#6E07F3] text-white md:text-2xl ss:text-xl font-zain px-4 py-2 rounded-3xl transition-colors duration-300">
                        View Credentials
                    </button>
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </section>
      <div className="my-40 justify-self-center w-[133.3%] border-[0.0001px] border-gray-200" />
    </main>
  );
}
