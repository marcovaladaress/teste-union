
'use client'

import { useEffect, useState } from "react";
import Navbar from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Pilares from "./components/pilares";
import Beneficios from "./components/beneficios";
import Etapas from "./components/etapas";
import TestimonialCarousel from "./components/carrosel";
import Form from "./components/form";






export default function Page() {

  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {

    const sections = document.querySelectorAll('section')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(`Seção ${entry.target.id} visível? ${entry.isIntersecting}`);

          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.3  }
    );

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }

  }, [])
  
  return (
    <main>
      <Navbar activeLink={activeLink} />
      <Hero />
      <About />
      <Pilares />
      <Beneficios />
      <Etapas/>
      <TestimonialCarousel/>
      <Form/>
    </main>
  );

   
}
