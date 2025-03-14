"use client";
import Image from "next/image";
import { X } from "lucide-react";
import Link from "next/link";

export default function ContactHeader() {
  return (
    <main>
        <header className="flex justify-center w-full h-[150px] max-sm:h-[120px]">
          <section className="flex justify-between xl:w-[70%] max-sm:w-[90%]">
            <article className="w-[50%] max-sm:relative max-sm:right-10 self-center max-sm:w-[40%]">
              <Image
                src="/purple-logo.svg"
                alt="Logo"
                width={150}
                height={150}
                className="md:hover:scale-105 max-sm:scale-115 transition duration-500 ease-in-out"
              />
            </article>
            <nav className="md:flex w-[50%] max-sm:self-center max-sm:w-[40%]">
              <ul className="flex justify-end items-center  w-full text-black">
                <li>
                  <Link href="/">
                    <X size={24} className="text-[#7A63FF]" />
                  </Link>
                </li>
              </ul>
            </nav>
          </section>
        </header>
        <div className="justify-self-center w-[100%] border-[0.0001px] dark:border-gray-200" />
        <article className="flex justify-center w-full">
            <div className="flex relative top-[-75px] max-sm:top-[-55px] bg-[#7A63FF] md:h-[150px] md:w-[150px] max-sm:h-[100px] max-sm:w-[100px] overflow-hidden rounded-full border-2 border-[#7A63FF]">
            <Image src="/avatar.png" width={150} height={150} alt="avatar" className="object-cover" />
            </div>
        </article>
    </main>
  );
}
