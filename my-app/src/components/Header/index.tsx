"use client"
import Image from "next/image"
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-center w-full">
      <section className="flex justify-between xl:w-[70%] sm:w-[90%] ss:w-[90%] pb-10">
        <article className="w-[50%] sm:w-[30%] ss:w-[20%]">
          <Image src='/purple-logo.svg' alt="Logo" width={150} height={150} className="hover:scale-105 transition duration-500 ease-in-out" />
        </article>
        <nav className="hidden font-zain font-medium md:flex items-center w-[50%] sm:w-[40%] ss:w-[80%]">
            <ul className="flex justify-around w-full items-center text-black text-2xl">
              <li className="hover:text-[#7A63FF] transition duration-200 ease-in-out">
                  <a href="/projetos">Projetos</a>
              </li>
              {/* <li className="hover:text-[#7A63FF] transition duration-200 ease-in-out">
                  <a href="/skills">Skills</a>
              </li> */}
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
        <nav className="md:hidden font-zain font-medium fixed top-[6.5rem] left-0 w-full bg-[#F8F8FF] shadow-md z-50">
          <ul className="flex flex-col items-center text-center text-black text-2xl pb-4">
            <li className="w-[40%] pb-2 border-b-[2px] border-[#7A63FF]">
              <a href="/projetos">Projetos</a>
            </li>
            {/* <li className="w-[40%] py-2 border-b-[2px] border-[#7A63FF]">
              <a href="/skills">Skills</a>
            </li> */}
            <li className="w-[40%] py-2 border-b-[2px] border-[#7A63FF]">
              <a href="/sobre">Sobre Mim</a>
            </li>
            <li className="w-[40%] pt-6 pb-2">
              <a href="/contato" className="text-[#7A63FF] active:text-white active:bg-[#7A63FF] transition duration-200 ease-in-out border-2 border-[#7A63FF] rounded-xl px-11 py-2">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
