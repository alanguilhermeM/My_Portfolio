"use client"
import Image from "next/image"
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-center w-full">
      <section className="flex justify-between xl:w-[70%] sm:w-[90%] ss:w-[90%] py-10">
        <article className="w-[50%] sm:w-[30%] ss:w-[20%]">
          <Image src='/logo.png' alt="Logo" width={80} height={80} className="hover:scale-105 transition duration-500 ease-in-out" />
        </article>
        <nav className="hidden font-zain font-medium md:flex items-center w-[50%] sm:w-[70%] ss:w-[80%]">
            <ul className="flex justify-around w-full items-center text-black text-2xl">
              <li className="hover:text-[#7A63FF] transition duration-200 ease-in-out">
                  <a href="/projetos">Projetos</a>
              </li>
              <li className="hover:text-[#7A63FF] transition duration-200 ease-in-out">
                  <a href="/skills">Skills</a>
              </li>
              <li className="hover:text-[#7A63FF] transition duration-200 ease-in-out">
                  <a href="/sobre">Sobre Mim</a>
              </li>
              <li className="text-[#7A63FF] hover:text-white hover:bg-[#7A63FF] transition duration-200 ease-in-out border-2 border-[#7A63FF] rounded-full">
                  <a className="block w-full h-full p-3 text-center" href="/contato">Entre em Contato</a>
              </li>
            </ul>
        </nav>

        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={32} className="text-[#7A63FF]" /> : <Menu size={32} className="text-[#7A63FF]" />}
          </button>
        </div>
      </section>
      { menuOpen && (
        <nav className="md:hidden absolute top-28 left-0 w-full bg-transparent shadow-md">
          <ul className="flex flex-col items-center text-center text-black text-lg py-4">
            <li className="py-2">
              <a href="/projetos">Projetos</a>
            </li>
            <li className="py-2">
              <a href="/skills">Skills</a>
            </li>
            <li className="py-2">
              <a href="/sobre">Sobre Mim</a>
            </li>
            <li className="py-2">
              <a href="/contato" className="text-[#7A63FF] active:text-white active:bg-[#7A63FF] transition duration-200 ease-in-out border-2 border-[#7A63FF] rounded-xl px-4 py-2">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
