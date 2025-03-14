"use client";
import Image from "next/image";
import { useIntl } from "react-intl";

export default function Skills() {
  const intl = useIntl();
  return (
    <main className="flex relative top-[-180px] md:w-[74%] ss:w-[84%] h-fit bg-[#F8F8FF] border-[1px] border-[#E6ECF8] rounded-2xl shadow-sm">
      <article className="flex ss:flex-col md:flex-row w-full font-zain">
        <section className="flex-col justify-items-center text-center md:w-1/3 ss:w-full py-16 px-12 text-black md:border-r-[1px] ss:border-b-[1px] border-[#E6ECF8]">
          <div className="w-fit h-fit p-4 rounded-full bg-[#5BE9B9]">
            <Image src='/front.svg' width={40} height={40} alt="backend-logo" className="" />
          </div>
          <h1 className="my-10 font-bold text-3xl">{intl.formatMessage({ id: "front" })}</h1>

          <p className="text-xl">
            {intl.formatMessage({ id: "frontDescription" })}
          </p>

          <h2 className="mt-8 mb-4 font-medium text-2xl text-[#7A63FF]">{intl.formatMessage({ id: "stacks" })}</h2>
          <span className="text-xl">exemple 1, exemple 2, exemple 3, exemple 4</span>

          <h2 className="mt-8 mb-4 font-medium text-2xl text-[#7A63FF]">{intl.formatMessage({ id: "tools" })}</h2>
          <ul className="text-xl">
            <li>One</li>
            <li>One</li>
            <li>One</li>
            <li>One</li>
            <li>One</li>
            <li>One</li>
            <li>One</li>
          </ul>
        </section>

        <section className="flex-col justify-items-center text-center md:w-1/3 ss:w-full py-16 px-12 text-black md:border-r-[1px] ss:border-b-[1px] border-[#E6ECF8]">
          <div className="w-fit h-fit p-4 rounded-full bg-[#5BE9B9]">
            <Image src='/back.svg' width={40} height={40} alt="backend-logo" className="" />
          </div>
          <h1 className="my-10 font-bold text-3xl">{intl.formatMessage({ id: "back" })}</h1>

          <p className="text-xl">
            {intl.formatMessage({ id: "backDescription" })}
          </p>

          <h2 className="mt-8 mb-4 font-medium text-2xl text-[#7A63FF]">{intl.formatMessage({ id: "stacks" })}</h2>
          <span className="text-xl">exemple 1, exemple 2, exemple 3, exemple 4</span>

          <h2 className="mt-8 mb-4 font-medium text-2xl text-[#7A63FF]">{intl.formatMessage({ id: "tools" })}</h2>
          <ul className="text-xl">
            <li>One</li>
            <li>One</li>
            <li>One</li>
            <li>One</li>
            <li>One</li>
            <li>One</li>
            <li>One</li>
          </ul>
        </section>

        <section className="flex-col justify-items-center text-center md:w-1/3 ss:w-full py-16 px-12 text-black">
          <div className="w-fit h-fit p-4 rounded-full bg-[#5BE9B9]">
            <Image src='/front.svg' width={40} height={40} alt="backend-logo" className="" />
          </div>
          <h1 className="my-10 font-bold text-3xl">{intl.formatMessage({ id: "science" })}</h1>

          <p className="text-xl">
            {intl.formatMessage({ id: "scienceDescription" })}
          </p>

          <h2 className="mt-8 mb-4 font-medium text-2xl text-[#7A63FF]">{intl.formatMessage({ id: "stacks" })}</h2>
          <span className="text-xl">exemple 1, exemple 2, exemple 3, exemple 4</span>

          <h2 className="mt-8 mb-4 font-medium text-2xl text-[#7A63FF]">{intl.formatMessage({ id: "tools" })}</h2>
          <ul className="text-xl">
            <li>One</li>
            <li>One</li>
            <li>One</li>
            <li>One</li>
            <li>One</li>
            <li>One</li>
            <li>One</li>
          </ul>
        </section>
      </article>
    </main>
  );
}
