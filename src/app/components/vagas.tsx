

import React from 'react'

export default function Vagas() {
  return (
    <section className="max-w-7xl mx-auto px-4 pr-7">
      <div className="mt-[5rem] md:flex md:max-w-[1200px] bg-[#121119] h-[800px] md:h-full rounded-2xl md:p-6  ">
        <img
          src="/remember-action-logo.svg"
          alt=""
          className="move-up w-[340px] md:w-[300px] mx-auto"
        />
        <div className="flex flex-col gap-4 justify-center items-center ">
          <h2 className="text-center font-extrabold text-[2.8rem] md:w-[600px]">
            Vivencia na prática, ambiente imersivo, desafios e muito mais!
          </h2>
          <p className="mt-5 text-center font-extrabold text-red-700 text-[2.8rem] w-[400px]  mx-auto ">
            Inscreva-se já! Vagas limitadas
          </p>
        </div>
      </div>
    </section>
  );
}
