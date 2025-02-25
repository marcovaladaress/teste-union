


import React from 'react'





export default function Footer() {
  return (
    <section>
      <div className="bg-[#121119] p-4  md:flex md:justify-between md:px-[4rem] md:py-[4rem] ">
        <div className="flex flex-col gap-4 md:gap-6 text-center md:text-start  ">
          <img
            src="/logo-union-developers.svg"
            alt="logo"
            className="w-[250px] mx-auto md:ml-0 md:w-[290px]"
          />
          <p className="text-[17px] leading-6 w-[400px] mx-auto md:text-[20px] md:leading-7  ">
            O Union proporciona experiência para desenvolvedores juniors,
            transformando-os em profissionais preparados para o mercado.
          </p>
        </div>

        <nav className="flex gap-6 justify-center items-center mt-6 p-4">
          <div>
            <h3 className="font-extrabold text-xl md:text-2xl">Saiba mais</h3>
            <p className="text-[18px] mt-4">Sobre</p>
            <p className="text-[18px] mt-1">Depoimentos</p>
          </div>
          <div>
            <h3 className="font-extrabold text-xl md:text-2xl">Dúvidas</h3>
            <p className="text-[18px] mt-4">FAQ</p>
            <p className="text-[18px] mt-1">Como funciona</p>
          </div>
        </nav>

        <div className="flex  gap-7 justify-center items-center">
          <div className="flex flex-col items-center ">
            <img src="/envelope-icon.svg" alt="icone envelope" />
            <p className="text-[15px] mt-1">Email</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/linkedin-icon.svg" alt="icone envelope" />
            <p className="text-[15px] mt-1">LinkedIn</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/github-icon.svg" alt="icone envelope" />
            <p className="text-[15px] mt-1">Github</p>
          </div>
        </div>
      </div>
      <div className="bg-[#1f1d2b]">
        <p className=" p-3 text-center text-[15px]">
          @ Union Developers - 2025
        </p>
      </div>
    </section>
  );
}
