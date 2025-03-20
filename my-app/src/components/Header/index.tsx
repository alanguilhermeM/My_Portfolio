"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import navList from "@/utils/navList";
import { useLocale } from "@/context/LocaleContext";
import { useIntl } from "react-intl";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale } = useLocale();
  const intl = useIntl();

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  return (
    <header className="flex justify-center w-full">
      <section className="flex justify-between xl:w-[70%] sm:w-[90%] ss:w-[90%] max-ss:w-[90%] pb-10">
        <article className="w-[50%] max-sm:w-[20%] max-sm:scale-150 max-ss:w-[25%]">
          <Image
            src="/purple-logo.svg"
            alt="Logo"
            width={150}
            height={150}
            className="hover:scale-105 transition duration-500 ease-in-out"
          />
        </article>
        <nav className="hidden font-zain font-medium md:flex items-center w-[50%] max-sm:w-[40%] ss:w-[80%]">
          <ul className="flex justify-around w-full items-center text-black dark:text-white text-2xl">
            {navList.map((nav) => (
              <li
                key={nav.id}
                className="hover:text-[#7A63FF] transition duration-200 ease-in-out"
              >
                {nav.path.startsWith("/") ? (
                  <a
                    href={nav.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:cursor-pointer"
                  >
                    {locale === "pt" ? (
                      <p>{nav.contentPt}</p>
                    ) : (
                      <p>{nav.contentEn}</p>
                    )}
                  </a>
                ) : (
                  <a
                    className="hover:cursor-pointer"
                    onClick={() => {
                      document
                        .getElementById(nav.path)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {locale === "pt" ? (
                      <p>{nav.contentPt}</p>
                    ) : (
                      <p>{nav.contentEn}</p>
                    )}
                  </a>
                )}
              </li>
            ))}
            <li className="text-[#7A63FF] hover:text-white hover:bg-[#7A63FF] transition duration-200 ease-in-out border-2 border-[#7A63FF] rounded-full">
              <a
                className="block w-full h-full p-3 text-center"
                href="/contact"
              >
                {intl.formatMessage({ id: "contact" })}
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
        <nav className="md:hidden font-zain font-medium absolute top-[4.5rem] left-0 w-full bg-[#F8F8FF] dark:bg-black shadow-md z-50">
          <ul className="flex flex-col items-center text-center text-black text-2xl pb-4 dark:text-white">
            {navList.map((nav) => (
              <li
                key={nav.id}
                className="hover:text-[#7A63FF] transition duration-200 ease-in-out"
              >
                {nav.path.startsWith("/") ? (
                  <a
                    href={nav.path}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {locale === "pt" ? (
                      <p>{nav.contentPt}</p>
                    ) : (
                      <p>{nav.contentEn}</p>
                    )}
                  </a>
                ) : (
                  <a
                    onClick={() => {
                      document
                        .getElementById(nav.path)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {locale === "pt" ? (
                      <p>{nav.contentPt}</p>
                    ) : (
                      <p>{nav.contentEn}</p>
                    )}
                  </a>
                )}
              </li>
            ))}
            <li className="w-[50%] max-ss:w-[70%] pt-6 pb-2">
              <a
                href="/contact"
                className="text-[#7A63FF] active:text-white active:bg-[#7A63FF] transition duration-200 ease-in-out border-2 border-[#7A63FF] rounded-xl px-3 py-2"
              >
                {intl.formatMessage({ id: "contact" })}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
