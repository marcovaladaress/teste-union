"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const testimonials = [
  {
    name: "Luiz Meraki",
    image: "user-1.png",
    text: "No Union você consegue ter muita evolução em pouco tempo, desenvolvendo tanto sua parte técnica como as habilidades interpessoais. No momento que você entra no Union, você mergulha a fundo nas tecnologias e vai aprendendo e aprimorando durante o dia a dia.",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Matheus Oliveira",
    image: "user-2.png",
    text: "Antes de participar do Union, eu não tinha a mínima ideia de como era trabalhar em equipe e foi muito importante ter essa experiência. Durante a participação, consegui desenvolver soft skills importantes para o mercado de trabalho, como organização, atenção e trabalho em equipe.",
    linkedin: "#",
    github: "#",
  },
  {
    name: "José Ronaldo",
    image: "user-3.png",
    text: "O principal benefício do Union é ter uma pessoa mais experiente junto, que vai te direcionando. No Union, você encontra um ambiente muito profissional, onde é cobrado que você tenha padrão de commit, testes e uma alta qualidade de escrita de código, aumentando muita sua qualidade técnica.",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Petrus Borges",
    image: "/user-4.jpeg",
    text: "No Union eu consegui desenvolver minhas hard skills, aprendendo novas tecnologias e melhorando a escrita do meu código. Eu percebi o quanto a parte de soft skills é importante para o mercado de tecnologia, como ter inteligência emocional, comunicação efetiva e resolução de problemas.",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Salomão Leal",
    image: "user-5.jpeg",
    text: "Eu estava preso em cursos e não sabia como que era o fluxo de trabalho de uma empresa, com o Union eu consegui aprender isso e hoje me sinto muito mais preparado para o mercado. Durante a experiência no Union, eu aprendi a como pesquisar e se virar para resolver minhas task.",
    linkedin: "#",
    github: "#",
  },
];

export default function TestimonialCarousel() {
  return (
    <section id="depoimentos">
      <div className="flex justify-between gap-8 md:gap-14 items-center max-w-7xl mx-auto p-7 mt-[5rem]">
        <div className="w-full h-[3px] bg-gradient-to-r from-[#851d86] to-[#0048fe] rounded-2xl"></div>
        <div className="text-xl  font-bold bg-gradient-to-r from-[#851d86] to-[#0048fe] bg-clip-text text-transparent md:text-3xl">
          Depoimentos
        </div>
        <div className="w-full h-[3px] bg-gradient-to-r from-[#851d86] to-[#0048fe] rounded-2xl"></div>
      </div>
      <div className="md:max-w-7xl mx-auto mt-[1rem]">
        <p className="text-center text-[17px] m-auto max-w-96 text-zinc-300 md:text-[1.7rem] md:max-w-4xl lg:mb-4">
          Conheça as etapas do nosso processo seletivo
        </p>

        <Carousel className="relative mt-[6rem]">
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((item, index) => (
              <CarouselItem
                key={index}
                className="flex justify-center md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4  "
              >
                <Card className=" relative bg-transparent text-white border-none p-6 rounded-xl w-80 h-[550px] overflow-hidden">
                  <div className="absolute inset-[1.4rem]  rounded-xl bg-gradient-to-r  from-[#851D86] to-[#0048FE]" />
                  <div className="relative flex flex-col items-center justify-center text-center p-[1rem] h-[31.3rem] bg-[#18181B] rounded-xl">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-full border-4 border-[#0048FE]"
                    />
                    <h3 className="mt-4 text-2xl font-extrabold">
                      {item.name}
                    </h3>
                    <p className="mt-4 text-[17px] leading-6 text-gray-300">
                      {item.text}
                    </p>
                    <div className="mt-4 flex gap-4">
                      <div className="flex flex-col gap-1 items-center ">
                        <img
                          src="/linkedin-icon.svg"
                          alt="logo linkedin"
                          className="w-[26px] "
                        />
                        <p className="text-[15px]">LinkedIn</p>
                      </div>
                      <div className="flex flex-col gap-1 items-center ">
                        <img
                          src="/github-icon.svg"
                          alt="logo linkedin"
                          className="w-[26px] "
                        />
                        <p className="text-[15px]">Github</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[1rem] bg-transparent" />
          <CarouselNext className="absolute right-[1rem] bg-transparent" />
        </Carousel>
      </div>
    </section>
  );
}
