import testimonialsList from "@/utils/testimonialsList";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Testimonials() {
  return (
    <main className="flex-col justify-self-center text-center w-[75%] h-fit">
      <h1 className="text-[#141c3a] font-zain font-bold text-4xl pb-2">
        Testimonials
      </h1>
      <p className="text-[#141c3a] font-zain text-2xl pb-10">
        People I&apos;ve worked with have said some nice things...
      </p>
      <section className="md:w-1/2 max-sm:w-full justify-self-center">
        <Carousel>
          <CarouselContent>
            {testimonialsList.map((testimonial) => {
              return (
                <CarouselItem key={testimonial.id}>
                  <p className="font-zain text-2xl pb-10">{testimonial.quote}</p>
                  <h1 className="font-zain font-bold text-3xl">{testimonial.name}</h1>
                  <span className="font-zain text-xl">{testimonial.description}</span>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </main>
  );
}
