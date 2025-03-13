"use client";
import projectsList from "@/utils/projectsList";
import Image from "next/image";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPreviousSeta,
  CarouselNextSeta,
} from "../ui/carousel";

export default function MyProjects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main id="projetos" className="flex-col w-full h-fit text-center pb-40">
      <section className="justify-items-center md:h-[450px] max-sm:h-[300px] bg-[#6E07F3] ">
        <h1 className="text-white font-zain font-bold text-5xl pb-6 pt-24">
          My Projects
        </h1>
        <span className="text-white font-zain text-2xl pb-10">
          A few of my proojects that i&apos;ve already work on in.
        </span>
      </section>
      <section className="relative md:top-[-150px] max-sm:top-[-100px] md:w-[75%] max-sm:w-[115%] justify-self-center">
        <Carousel className="h-fit max-sm:scale-75">
          <CarouselContent className="md:w-[700px] h-[340px] ">
            {projectsList.map((projects) => {
              return (
                <CarouselItem
                  className="flex justify-center relative group h-[340px]"
                  key={projects.id}
                >
                  <div className="relative w-[550px] h-full">
                    <Image
                      src={projects.image}
                      width={550}
                      height={400}
                      alt={projects.project}
                      onMouseEnter={() => setHoveredIndex(projects.id)}
                      className={`rounded-xl transition-all duration-500 h-full w-full object-cover ${
                        projects.image === "/" ? "bg-[#141c3a]" : null
                      }
                      ${
                        hoveredIndex === projects.id ? "blur-sm brightness-50" : ""
                      } pointer-events-auto`}
                    />
                    {hoveredIndex === projects.id && (
                      <div
                        className="absolute inset-0 flex flex-col items-start justify-between p-6 rounded-xl transition-all ease-in-out duration-300 opacity-0 
                        group-hover:opacity-100 pointer-events-auto text-white text-start font-zain"
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <h1 className="w-[60%] md:text-5xl ss:text-3xl">
                          {projects.project}
                        </h1>
                        <p className="text-lg">{projects.description}</p>
                        <section>
                          <ul className="flex flex-wrap">
                            {projects.stacks.map((stack) => {
                              return (
                                <li 
                                className="px-2 py-1 mx-2 my-1 border border-[#6E07F3] rounded-lg hover:bg-[#6E07F3] transition-all duration-300 text-lg" 
                                key={stack}>{stack}</li>
                              )
                            })}
                          </ul>
                        </section>
                        <section className="flex justify-between w-[55%]">
                          <a href={projects.deploy} target="_blank">
                            <button 
                              disabled={projects.deploy === ''}
                              className="relative bg-transparent hover:bg-[#6E07F3] border-2 border-[#6E07F3] text-white md:text-3xl ss:text-2xl font-zain px-6 py-2 rounded-3xl transition-colors duration-300">
                              Deploy
                            </button>
                          </a>
                          <a href={projects.github} target="_blank">
                            <button className="relative bg-transparent hover:bg-[#6E07F3] border-2 border-[#6E07F3] text-white md:text-3xl ss:text-2xl font-zain px-6 py-2 rounded-3xl transition-colors duration-300">
                              Github
                            </button>
                          </a>
                        </section>
                      </div>
                    )}
                    
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPreviousSeta />
          <CarouselNextSeta />
        </Carousel>
      </section>
      <div className="justify-self-center w-[100%] border-[0.0001px] dark:border-gray-600" />
    </main>
  );
}
