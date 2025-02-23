
'use client'

import { useEffect, useState } from "react";
import Navbar from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Pilares from "./components/pilares";
import Beneficios from "./components/beneficios";




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
      { threshold: 0.1  }
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

    </main>
  );

   
}
