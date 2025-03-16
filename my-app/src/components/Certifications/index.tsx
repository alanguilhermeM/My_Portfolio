"use client";
import React, { useState } from "react";
import certificationsList from "@/utils/certificationsList";
import Image from "next/image";
import { useIntl } from "react-intl";

export default function Certifications() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const intl = useIntl();

  return (
    <main className="flex-col justify-self-center text-center w-[75%] h-fit ">
      <h1 className="text-[#141c3a] dark:text-white font-zain font-bold text-5xl pb-6">
        {intl.formatMessage({ id: "certificateTitle" })}
      </h1>
      <span className="text-[#141c3a] dark:text-white font-zain text-2xl pb-10">
        {intl.formatMessage({ id: "certificateDescription" })}
      </span>
      <section className="grid lg:grid-cols-3 max-lg:grid-cols-1 gap-4 pt-10">
        {certificationsList.map((certification, index) => {
          return (
            <div key={certification.id} className="relative">
              <Image
                src={certification.src}
                width={650}
                height={450}
                alt="certificate"
                className={`rounded-xl transition-all duration-500 ${
                  hoveredIndex === index ? "blur-sm brightness-50" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(certification.id)}
                // onMouseLeave={() => setHoveredIndex(null)}
              />
              {hoveredIndex === index && (
                <div
                  className="absolute inset-0 flex flex-wrap items-center justify-center rounded-xl hover:scale-105 transition-all ease-in-out duration-500  "
                  //   onMouseEnter={() => setHoveredIndex(certification.id)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <span className="relative text-white max-xl:top-6 max-ss:top-2 ss:top-4 w-[80%] font-zain max-lg:text-5xl xl:text-3xl max-xl:text-xl max-md:text-xl">
                    {intl.formatMessage({ id: "certificateCredencials" })}
                  </span>
                  <a href={certification.link} target="_blank">
                    <button className="relative max-xl:bottom-2 ss:bottom-2 bg-transparent hover:bg-[#6E07F3] border-2 border-[#6E07F3] text-white md:text-5xl lg:text-2xl ss:text-xl font-zain px-4 py-2 rounded-3xl transition-colors duration-300">
                      {intl.formatMessage({ id: "certificateButton" })}
                    </button>
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </section>
      <div className="my-40 justify-self-center w-[133.3%]" />
    </main>
  );
}
