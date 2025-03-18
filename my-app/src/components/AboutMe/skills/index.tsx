"use client";
import Image from "next/image";
import { useIntl } from "react-intl";

export default function Skills() {
  const intl = useIntl();
  return (
    <main className="flex relative top-[-180px] md:w-[90%] max-sm:w-[84%] h-fit bg-[#F8F8FF] border-[1px] border-[#E6ECF8] rounded-2xl shadow-sm">
      <article className="flex ss:flex-col max-ss:flex-col md:flex-row w-full font-zain">
        <section className="flex flex-col justify-center items-center text-center md:w-1/3 ss:w-full py-16 px-12 text-black md:border-r-[1px] ss:border-b-[1px] max-ss:border-b-[1px] border-[#E6ECF8]">
          <div className="flex justify-center items-center w-[70px] h-[70px] p-4 rounded-full bg-[#5BE9B9] relative">
            <Image src='/front.svg' width={40} height={40} alt="frontend-logo" className="absolute inset-0 m-auto"/>
          </div>
          <h1 className="my-10 font-bold text-3xl md:h-[70px]">{intl.formatMessage({ id: "front" })}</h1>

          <p className="text-xl md:h-[400px] lg:h-fit">{intl.formatMessage({ id: "frontDescription" })}</p>

          <h2 className="mt-8 mb-4 font-medium text-2xl text-[#7A63FF]">{intl.formatMessage({ id: "stacks" })}</h2>
          <p className="text-xl md:h-[100px] lg:h-fit">HTML, CSS, TypeScript, React.js, Next.js, Jest</p>

          <h2 className="mt-8 mb-4 font-medium text-2xl text-[#7A63FF]">{intl.formatMessage({ id: "tools" })}</h2>
          <ul className="text-xl">
            <li>TailwindCSS</li>
            <li>Bootstrap</li>
            <li>Chrome DevTools</li>
            <li>VS Code</li>
            <li>React Developer Tools</li>
          </ul>
        </section>

        <section className="flex flex-col justify-center items-center text-center md:w-1/3 ss:w-full py-16 px-12 text-black md:border-r-[1px] ss:border-b-[1px] max-ss:border-b-[1px] border-[#E6ECF8]">
          <div className="flex justify-center items-center w-[70px] h-[70px] p-4 rounded-full bg-[#5BE9B9] relative">
            <Image src='/back.svg' width={40} height={40} alt="backend-logo" className="absolute inset-0 m-auto" />
          </div>
          <h1 className="my-10 font-bold text-3xl md:h-[70px]">{intl.formatMessage({ id: "back" })}</h1>

          <p className="text-xl md:h-[400px] lg:h-fit">{intl.formatMessage({ id: "backDescription" })}</p>

          <h2 className="mt-8 mb-4 font-medium text-2xl text-[#7A63FF]">{intl.formatMessage({ id: "stacks" })}</h2>
          <p className="text-xl md:h-[100px] lg:h-fit">Nest.js, Node.js, Express, MySQL, MongoDB, Prisma, TypeORM</p>

          <h2 className="mt-8 mb-4 font-medium text-2xl text-[#7A63FF]">{intl.formatMessage({ id: "tools" })}</h2>
          <ul className="text-xl">
            <li>Postman</li>
            <li>Beekeeper Studio</li>
            <li>Docker</li>
            <li>Prisma Studio</li>
          </ul>
        </section>

        <section className="flex flex-col justify-center items-center text-center md:w-1/3 ss:w-full py-16 px-12 text-black">
          <div className="flex justify-center items-center w-[70px] h-[70px] p-4 rounded-full bg-[#5BE9B9] relative">
            <Image src='/tech.svg' width={40} height={40} alt="tech-logo" className="absolute inset-0 m-auto" />
          </div>
          <h1 className="my-10 font-bold text-3xl md:h-[70px]">{intl.formatMessage({ id: "science" })}</h1>

          <p className="text-xl md:h-[400px] lg:h-fit">{intl.formatMessage({ id: "scienceDescription" })}</p>

          <h2 className="mt-8 mb-4 font-medium text-2xl text-[#7A63FF]">{intl.formatMessage({ id: "stacks" })}</h2>
          <p className="text-xl md:h-[100px] lg:h-fit">Git, GitHub, Docker, GitHub Actions, Vercel</p>

          <h2 className="mt-8 mb-4 font-medium text-2xl text-[#7A63FF]">{intl.formatMessage({ id: "tools" })}</h2>
          <ul className="text-xl">
            <li>Git</li>
            <li>GitHub</li>
            <li>Docker</li>
            <li>GitHub Actions</li>
            <li>Vercel</li>
          </ul>
        </section>
      </article>
    </main>
  );
}
