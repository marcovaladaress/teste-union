
'use client'

import { useEffect, useState } from "react";
import Navbar from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";




export default function Page() {

  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {

    const sections = document.querySelectorAll('section')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting){
            setActiveLink(entry.target.id)
          }
        })
      },
      { threshold:0.5}
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }

  }, [])
  
  return (
    <main>
        <Navbar activeLink={activeLink}  />
        <Hero/>
        <About/>

        
        
    </main>
  )

   
}
