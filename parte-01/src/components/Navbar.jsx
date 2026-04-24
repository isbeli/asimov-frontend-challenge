import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white   mt-10 left-0 w-full ">
      <div className="max-w-325 mx-22 px-3 py-5 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center">
          <img
            src="/images/logos/logo-positivus.svg"
            alt="logo"
            className="w-54.5"
          />
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden lg:flex ml-35 gap-10 font text-text text-xl">
          <nav className="flex gap-10 font text-text text-xl">
            <a
              href="#"
              className="hover:underline underline-offset-4 transition-all"
            >
              About us
            </a>
            <a
              href="#services"
              className="hover:underline underline-offset-4 transition-all"
            >
              Services
            </a>
            <a
              href=""
              className="hover:underline underline-offset-4 transition-all"
            >
              Use Cases
            </a>
            <a
              href="caseStud"
              className="hover:underline underline-offset-4 transition-all"
            >
              Pricing
            </a>
            <a
              href="#"
              className="hover:underline underline-offset-4 transition-all"
            >
              Blog
            </a>
          </nav>
        </div>

        {/* BOTÃO DESKTOP */}
        <div className="hidden lg:flex ml-2">
          <button
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "20px",
            }}
            className="border border-black px-9 py-5 rounded-2xl ml-auto
              transition-all duration-300 ease-in-out
              hover:bg-black hover:text-white hover:scale-105 hover:shadow-md
              active:scale-95 active:bg-gray-800 active:shadow-sm cursor-pointer"
          >
            Request a quote
          </button>
        </div>

        {/* HAMBURGUER — mobile e tablet */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* MENU MOBILE/TABLET */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-96 py-4" : "max-h-0"}`}
      >
        <nav className="flex flex-col items-center gap-6 text-xl pb-4 font text-text">
          <a
            href="#"
            className="hover:underline underline-offset-4 transition-all"
          >
            About us
          </a>
          <a
            href="#"
            className="hover:underline underline-offset-4 transition-all"
          >
            Services
          </a>
          <a
            href="#"
            className="hover:underline underline-offset-4 transition-all"
          >
            Use Cases
          </a>
          <a
            href="#"
            className="hover:underline underline-offset-4 transition-all"
          >
            Pricing
          </a>
          <a
            href="#"
            className="hover:underline underline-offset-4 transition-all"
          >
            Blog
          </a>

          <button
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "20px",
            }}
            className="border border-black px-9 py-5 rounded-2xl w-3/4
              transition-all duration-300 ease-in-out
              hover:bg-black hover:text-white hover:scale-105 hover:shadow-md
              active:scale-95 active:bg-gray-800 active:shadow-sm cursor-*"
          >
            Request a quote
          </button>
        </nav>
      </div>
    </header>
  );
}
