import Image from "next/image"

export default function Header() {
  return (
    <header className="flex justify-center w-full">
      <section className="flex justify-between w-[60%] py-10">
        <article className="w-[50%]">
          <Image src='/logo.png' alt="Logo" width={80} height={80} className="hover:scale-105 transition duration-500 ease-in-out" />
        </article>
        <nav className="flex items-center w-[50%]">
            <ul className="flex justify-around w-full items-center text-black text-lg">
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
      </section>
    </header>
  );
}
