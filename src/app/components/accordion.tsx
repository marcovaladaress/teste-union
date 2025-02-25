
import React, { useState } from "react";


interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[]; // Um array de objetos contendo título e conteúdo
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="duvidas">
      <div className="flex justify-between gap-8 md:gap-14 items-center max-w-7xl mx-auto p-7 mt-[5rem]">
        <div className="w-full h-[3px] bg-gradient-to-r from-[#851d86] to-[#0048fe] rounded-2xl"></div>
        <div className="text-xl  font-bold bg-gradient-to-r from-[#851d86] to-[#0048fe] bg-clip-text text-transparent md:text-3xl">
          Dúvidas
        </div>
        <div className="w-full h-[3px] bg-gradient-to-r from-[#851d86] to-[#0048fe] rounded-2xl"></div>
      </div>
      <article className="max-w-7xl mx-auto ">
        <div className="w-full mt-[5rem] p-4 ">
          {items.map((item, index) => (
            <div key={index} className=" mb-7">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full rounded-2xl text-left p-4  bg-gradient-to-r from-[#851d86] to-[#0048fe] text-white font-bold flex justify-between gap-4 items-center"
              >
                <span className="text-[18px]">{item.title}</span>
                <span className="text-2xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="p-4 bg-gray-100">
                  <p className="text-black leading-7 text-[18px]">
                    {item.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Accordion;
