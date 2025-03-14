import testimonialsList from "@/utils/testimonialsList";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIntl } from "react-intl";
import { useLocale } from "@/context/LocaleContext";

export default function Testimonials() {
  const intl = useIntl();
  const { locale } = useLocale();

  return (
    <main className="flex-col justify-self-center text-center w-[75%] h-fit pb-14">
      <h1 className="text-[#141c3a] dark:text-white font-zain font-bold text-4xl pb-2">
        {intl.formatMessage({ id: "testimonialsTitle" })}
      </h1>
      <p className="text-[#141c3a] dark:text-white font-zain text-2xl pb-10">
        {intl.formatMessage({ id: "testimonialsDescription" })}
      </p>
      <section className="md:w-1/2 max-sm:w-full justify-self-center">
        <Carousel>
          <CarouselContent>
            {testimonialsList.map((testimonial) => {
              return (
                <CarouselItem key={testimonial.id}>
                  {locale === "pt" ? (
                    <p className="font-zain text-2xl pb-10">
                      {testimonial.quotePt}
                    </p>
                  ) : (
                    <p className="font-zain text-2xl pb-10">
                      {testimonial.quoteEn}
                    </p>
                  )}

                  <h1 className="font-zain font-bold text-3xl">
                    {testimonial.name}
                  </h1>
                  <span className="font-zain text-xl">
                    {testimonial.description}
                  </span>
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
