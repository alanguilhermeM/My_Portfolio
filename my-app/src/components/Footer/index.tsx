"use client";
import Image from "next/image";
// import { icons } from "lucide-react";
import Link from "next/link";
import { useIntl } from "react-intl";

export default function Footer() {
  const intl = useIntl();

  return (
    <main className="grid w-full">
      <aside className="max-xl:w-[90%] ss:w-[90%] max-ss:w-[95%] relative md:top-[55%] ss:top-[70%] max-ss:top-[50%] justify-self-center h-fit rounded-xl bg-[#141c3a] shadow-sm shadow-[#141c3a]">
        <div className="md:flex ss:grid md:justify-around ss:justify-center py-8 px-10 items-center text-white text-center">
          <h1 className="md:w-1/3 ss:w-full max-ss:w-full font-zain max-ss:mb-2  font-bold text-4xl">
            {intl.formatMessage({ id: "startProject" })}
          </h1>
          <p className="md:w-1/3 ss:w-full max-ss:w-[90%] max-ss:py-4 py-4 flex-wrap font-zain text-2xl">
            {intl.formatMessage({ id: "startDescription" })}
          </p>
          <div className="md:w-1/3 ss:w-full max-ss:w-full ">
            <button className="flex justify-self-center items-center px-6 py-2 font-zain text-3xl border-[2px] border-[#5BE9B9] rounded-full hover:bg-[#5be9b9] hover:text-[#141c3a] transition-colors duration-300">
              <svg
                className=""
                width="22"
                height="22"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="hand-horns"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M80 48c8.8 0 16 7.2 16 16l0 144 0 32-16 0c-5.5 0-10.8 .6-16 1.6L64 64c0-8.8 7.2-16 16-16zM16 64l0 208C6 285.4 0 302 0 320c0 0 0 0 0 0l0 24c0 92.8 75.2 168 168 168l48 0c92.8 0 168-75.2 168-168l0-56 0-32 0-128c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 50c-5.1-1.3-10.5-2-16-2c-7.9 0-15.4 1.4-22.4 4c-10.4-21.3-32.3-36-57.6-36c-5.5 0-10.9 .7-16 2l0-82c0-35.3-28.7-64-64-64S16 28.7 16 64zM336 256l0 32 0 56c0 66.3-53.7 120-120 120l-48 0c-66.3 0-120-53.7-120-120l0-24s0 0 0 0c0-17.7 14.3-32 32-32l40 0 40 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c15.1 0 29-5.3 40-14c11 8.8 24.9 14 40 14c35.3 0 64-28.7 64-64l0-48 0-16 0-112c0-8.8 7.2-16 16-16s16 7.2 16 16l0 128zM160 240l-16 0 0-32c0-8.8 7.2-16 16-16s16 7.2 16 16l0 32 0 2c-5.1-1.3-10.5-2-16-2zm96 16l0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-40 0-24c0-8.8 7.2-16 16-16s16 7.2 16 16l0 16z"
                ></path>
              </svg>
              <Link href='/contact'>{intl.formatMessage({ id: "startButton" })}</Link>
            </button>
          </div>
        </div>
      </aside>
      <footer className="grid justify-center justify-items-center bg-[#6E07F3] w-full md:h-fit max-md:h-[700px] py-10">
        <Image
          src="white-logo.svg"
          width={200}
          height={200}
          alt="logo"
          className="md:pt-10 max-md:relative max-md:top-[45%]"
        />
        <span className="ss:w-[70%] md:w-full flex-wrap font-zain font-medium text-3xl text-white text-center">
        {intl.formatMessage({ id: "footer" })}
        </span>
        <article className="flex justify-around w-1/2 md:p-10">
          <a href="https://github.com/alanguilhermeM">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="text-[#6E07F3] bg-white border-[1px] border-white rounded-full hover:text-[white] hover:bg-[#7A63FF] hover:border-transparent transition-colors duration-300"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/mansur/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="text-[#6E07F3] bg-white  border-[1px] border-white rounded-full hover:text-[white] hover:bg-[#7A63FF] hover:border-transparent transition-colors duration-300"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </a>
        </article>
      </footer>
    </main>
  );
}
