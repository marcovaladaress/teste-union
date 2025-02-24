

import { Menu } from "lucide-react";

import React from 'react';

interface HeaderProps {
  activeLink: string;
}

const Navbar:React.FC<HeaderProps> =({ activeLink }) => {
  return (
    <header className="bg-[#121119] w-full fixed z-10">
      <nav className=" max-w-7xl mx-auto ">
        <div className="px-9 py-6  flex flex-wrap w-ful  justify-between items-center   ">
          <div>
            <img
              className="max-w-[200px] md:max-w-[400px] lg:max-w-[600px] "
              src="logo-union-developers.svg"
              alt="logo"
            />
          </div>

          <div className="hidden md:flex  ">
            <ul className=" flex  gap-4">
              <li>
                <a
                  href="#about"
                  className={activeLink === "about" ? "active" : "off"}
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  className={activeLink === "pilares" ? "active" : "off"}
                  href="#pilares"
                >
                  Pilares
                </a>
              </li>
              <li>
                <a
                  href="#beneficio"
                  className={activeLink === "beneficio" ? "active" : "off"}
                >
                  Beneficios
                </a>
              </li>
              <li>
                <a
                  className={activeLink === "etapa" ? "active" : "off"}
                  href="#etapa"
                >
                  Etapas
                </a>
              </li>
              <li>
                <a
                  className={activeLink === "section5" ? "active" : "off"}
                  href="#"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  className={activeLink === "section6" ? "active" : "off"}
                  href="#"
                >
                  Dúvidas
                </a>
              </li>
            </ul>
          </div>
          <button className="bg-gradient-to-r from-[#851d86] to-[#0048fe] px-14 py-4 rounded-md  hidden md:flex ">
            <a className=" text-xl font-semibold " href="#">
              Junta-se a nós
            </a>
          </button>
          <button className="md:hidden">
            <Menu size={28} />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;