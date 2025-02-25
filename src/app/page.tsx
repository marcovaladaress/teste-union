
'use client'

import { SetStateAction, useEffect, useState } from "react";
import Navbar from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Pilares from "./components/pilares";
import Beneficios from "./components/beneficios";
import Etapas from "./components/etapas";
import TestimonialCarousel from "./components/carrosel";
import Form from "./components/form";
import Accordion from "./components/accordion";
import Footer from "./components/footer";
import Vagas from "./components/vagas";



export default function Page() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);


  const accordionItems = [
    {
      title: "Oque é o Union?",
      content:
        "O Union é um ambiente prático e imersivo que busca simular o mais próximo do que você vai encontrar nas empresas, desafiando seus membros a resolver problemas reais, com cronogramas e prazos de entrega No Union, você desenvolve as skills mais procuradas pelo mercado, trabalha com ferramentas e metodologias utilizada pelas empresas, além de ganhar experiência trabalhando com outras pessoas de diferentes partes do Brasil.Você vivência na prática como é o dia a dia de um desenvolver em uma empresa e fica mais preparado para conquistar uma vaga.",
    },
    {
      title: "Quanto custa para fazer parte do Union?",
      content: "Nada! O Union é 100% gratuito.",
    },
    {
      title: "Quem pode participar?",
      content:
        "Pessoas que ainda não trabalham na área e que não participem de bootcamps ou plataformas de capacitação.",
    },
    {
      title: "Qual a idade mínima para fazer parte do Union?",
      content: "Você precisa ter no mínimo 18 anos.",
    },
    {
      title: "Preciso ter experiência na área?",
      content:
        "Sim. Você precisa ter no mínimo 1 ano de estudo em programação, além disso é necessário que já tenha criado algum projeto sozinho, sem que seja projetos guiados, como de cursos e eventos.",
    },
    {
      title: "Como me inscrevo??",
      content:
        "Se você se encaixa nos requisitos obrigatórios basta preencher o nosso formulário e fazer sua pré-inscrição.",
    },
    {
      title: "Existe algum processo seletivo? Como funciona ?",
      content:
        "Nosso processo seletivo consiste em algumas etapas, que são: pré-inscrição pelo formulário da página, análise de suas informações no formulário, desafio técnico e uma entrevista com nosso time.Nosso objetivo é entender seu momento profissional e avaliar se você tem o perfil que buscamos para o Union.",
    },
    {
      title: "Oque vou Aprender?",
      content:
        "Você aprenderá como trabalhar com metodologias e ferramentas utilizadas pelas empresas, desenvolver hard e soft skills, tudo de forma prática e mão na massa!",
    },
    {
      title: "Quanto tempo por dia preciso me dedicar aos projetos?",
      content:"Você precisa ter disponibilidade de trabalhar no mínimo 1 hora por dia no projeto, é importante também ter disponibilidade para participar das reuniões do time, que acontecem diariamente e aos finais de semana."
    }

    ];

    

  
  return (
    <main>
      <Navbar activeLink={activeLink} />
      <Hero />
      <About />
      <Pilares />
      <Vagas/>
      <Beneficios />
      <Etapas />
      <TestimonialCarousel />
      <Form />
      <Accordion items={accordionItems} />
     <Footer/>
    </main>
  );
}
function setAccordion(arg0: null) {
  throw new Error("Function not implemented.");
}

