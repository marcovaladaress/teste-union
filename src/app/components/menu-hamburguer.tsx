"use client";

import { Menu } from "lucide-react";
import React, { useState } from "react";


interface HamburgerMenuProps {
  menuItems: { label: string; href: string }[]; 
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false); 


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="  flex flex-col items-center space-y-1 p-3 md:hidden"
      >
        <Menu size={28} />
      </button>

      {isOpen && (
        <div className="absolute top-19 -left-[330px] bg-[#121119]  w-[417px] p-8 shadow-lg md:hidden ">
          

          <ul className="flex flex-col gap-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-white font-extrabold text-[17px] "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button className="relative mt-8 -left-2 px-12 py-3 rounded-md text-white font-semibold border-2 border-transparent overflow-hidden transition-all duration-500 ease-in-out group">
            <span className="relative text-xl font-extrabold z-10">
              Junte-se a nós
            </span>

            <div
              className="absolute inset-0 bg-gradient-to-r from-[#851d86] to-[#0048fe] transition-all duration-500 ease-in-out 
                group-hover:translate-x-full group-hover:opacity-0"
            ></div>

            <div
              className="absolute inset-0 border-2 border-[#551256ca] rounded-md opacity-0 transition-all duration-500 ease-in-out 
                group-hover:opacity-100"
            ></div>
          </button>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
