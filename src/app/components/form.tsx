
import React from 'react'

export default function Form() {
  return (
    <section className="max-w-7xl mx-auto ">
      <article className=" p-[2rem]  ml-4 mr-4 relative rounded-md   bg-[linear-gradient(225deg,rgba(0,72,254,0.2)0%,rgba(133,29,134,0.2)100%)]">
        <h2 className="text-center mb-[2rem] font-extrabold text-[21px] ">
          Junta-se ao time!
        </h2>
        <p className="text-center mb-4 text-[15px] w-[300px] mx-auto">
          Ficamos felizes em saber que você tem interesse em fazer parte do
          Union! Agora é só responder o nosso formulário
        </p>
        <div>
          <div className="mt-[4rem] max-w-[350px] mx-auto">
            <div className="flex gap-1 mb-2">
              <span className="text-red-600  ">*</span>
              <label className="text-[16px]  "> Nome Completo</label>
            </div>
            <div className="w-full ">
              <input
                className="w-full rounded-md p-[0.80rem] bg-transparent border text-[18px]  border-zinc-500 "
                type="text"
                placeholder="Qual seu nome competo?"
              />
            </div>
          </div>
          <div className="mt-[2rem] max-w-[350px] mx-auto">
            <div className="flex gap-1 mb-2">
              <span className="text-red-600  ">*</span>
              <label className="text-[16px]  ">Idade</label>
            </div>
            <div className="w-full ">
              <input
                className="w-full rounded-md p-[0.80rem] bg-transparent border border-zinc-500 text-[18px] "
                type="text"
                placeholder="Qual a sua idade?"
              />
            </div>
          </div>
          <div className="mt-[2rem] max-w-[350px] mx-auto">
            <div className="flex gap-1 mb-2">
              <span className="text-red-600  ">*</span>
              <label className="text-[16px]  ">Email</label>
            </div>
            <div className="w-full ">
              <input
                className="w-full rounded-md p-[0.80rem] bg-transparent border border-zinc-500 text-[18px] "
                type="text"
                placeholder="Qual seu email de contato?"
              />
            </div>
          </div>
          <div className="mt-[2rem] max-w-[350px] mx-auto">
            <div className="flex gap-1 mb-2">
              <span className="text-red-600  ">*</span>
              <label className="text-[16px]  ">Github</label>
            </div>
            <div className="w-full ">
              <input
                className="w-full rounded-md p-[0.80rem] bg-transparent border border-zinc-500 text-[18px] "
                type="text"
                placeholder="Qual seu Github?"
              />
            </div>
          </div>
          <div className="mt-[2rem] max-w-[350px] mx-auto">
            <div className="flex gap-1 mb-2">
              <span className="text-red-600  ">*</span>
              <label className="text-[16px]  ">Linkedin</label>
            </div>
            <div className="w-full ">
              <input
                className="w-full rounded-md p-[0.80rem] bg-transparent border border-zinc-500 text-[18px] "
                type="text"
                placeholder="Qual seu Linkedin?"
              />
            </div>
          </div>
          <div className="mt-[2rem] max-w-[350px] mx-auto">
            <div className="flex gap-1 mb-2">
              <span className="text-red-600  ">*</span>
              <label className="text-[16px]  ">Idade</label>
            </div>
            <div className="w-full ">
              <input
                className="w-full rounded-md p-[0.80rem] bg-transparent border border-zinc-500 text-[18px] "
                type="text"
                placeholder="Qual seu nome competo?"
              />
            </div>
          </div>

          <div className="mt-[2rem] max-w-[350px] mx-auto">
            <input type="checkbox" />
          </div>
        </div>
      </article>
    </section>
  );
}
