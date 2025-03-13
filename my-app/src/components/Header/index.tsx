"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import navList from "@/utils/navList";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-center w-full">
      <section className="flex justify-between xl:w-[70%] sm:w-[90%] ss:w-[90%] pb-10">
        <article className="w-[50%] sm:w-[30%] ss:w-[20%]">
          <Image
            src="/purple-logo.svg"
            alt="Logo"
            width={150}
            height={150}
            className="hover:scale-105 transition duration-500 ease-in-out"
          />
        </article>
        <nav className="hidden font-zain font-medium md:flex items-center w-[50%] sm:w-[40%] ss:w-[80%]">
          <ul className="flex justify-around w-full items-center text-black dark:text-white text-2xl">
            {navList &&
              navList.map((nav) => {
                return (
                  <li
                    key={nav.id}
                    className="hover:text-[#7A63FF] transition duration-200 ease-in-out"
                  >
                    <a
                      className="hover:cursor-pointer"
                      onClick={() => {
                        document
                          .getElementById(`${nav.path}`)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {nav.content}
                    </a>
                  </li>
                );
              })}
            <li className="text-[#7A63FF] hover:text-white hover:bg-[#7A63FF] transition duration-200 ease-in-out border-2 border-[#7A63FF] rounded-full">
              <a
                className="block w-full h-full p-3 text-center"
                href="mailto:alanguilherme13@outlook.com?subject=Contato%20do%20Portfólio&body=Olá,%20gostaria%20de%20falar%20com%20você!"
              >
                Entre em Contato
              </a>
            </li>
          </ul>
        </nav>

        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X size={32} className="text-[#7A63FF]" />
            ) : (
              <Menu size={32} className="text-[#7A63FF]" />
            )}
          </button>
        </div>
      </section>
      {menuOpen && (
        <nav className="md:hidden font-zain font-medium fixed top-[6.5rem] left-0 w-full bg-[#F8F8FF] dark:bg-black shadow-md z-50">
          <ul className="flex flex-col items-center text-center text-black text-2xl pb-4 dark:text-white">
            {navList &&
              navList.map((nav) => {
                return (
                  <li
                    key={nav.id}
                    className="hover:text-[#7A63FF] transition duration-200 ease-in-out"
                  >
                    <a href={`${nav.path}`}>{nav.content}</a>
                  </li>
                );
              })}
            <li className="w-[40%] pt-6 pb-2">
              <a
                href="/contato"
                className="text-[#7A63FF] active:text-white active:bg-[#7A63FF] transition duration-200 ease-in-out border-2 border-[#7A63FF] rounded-xl px-11 py-2"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
