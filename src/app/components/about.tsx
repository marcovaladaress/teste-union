export default function About() {
  return (
    <section id="about" className= "  mt-20 ml-6 mr-6  max-w-7xl  md:ml-6 lg:mx-auto lg:mt-60  relative rounded-3xl   bg-[#1f1d2b] after:absolute after:inset-[-4px] after:bg-gradient-to-r after:from-[#851d86]  after:to-[#0048fe] after:rounded-3xl after:-z-10 after:content-[''] ">
         
      <div className="  pt-14 pb-10 pl-6 pr-6  relative ">
        <article className="">
          <div className="absolute bg-[#1f1d2b]  -top-5 left-7 pl-2 pr-2 lg:-top-6 lg:left-16 ">
          <b className="bg-gradient-to-r from-[#0048fe] to-[#851d86] bg-clip-text text-transparent text-xl md:text-4xl  font-bold">
                Quem somos?
              </b>
          </div>
          <div className="text-center md:text-start lg:pl-12 md:pr-4">
            <p className="text-sm leading-[150%] pb-10 md:text-2xl lg:leading-[150%] lg:text-[1.7rem] lg:w-11/12  ">
              O Union é uma oportunidade única para desenvolvedores juniors,
              nossa missão é proporcionar a você um ambiente prático e imersivo,
              semelhante ao que você encontrará no mercado. Aqui, você vai
              vivenciar como é o dia a dia de um desenvolvedor de software,
              trabalhando lado a lado com líderes experientes e outros
              talentosos desenvolvedores que estão no mesmo caminho que você. 
            </p>
            <p className="text-sm leading-[150%] md:text-2xl lg:leading-[150%] lg:text-[1.7rem] lg:w-11/12">No
              Union, você não apenas ganhará experiência, mas também estará
              pronto para enfrentar as demandas do mercado de tecnologia. Nossa
              abordagem holística enfatiza não apenas o conhecimento técnico,
              mas também habilidades interpessoais e práticas ágeis.</p>
          </div>
        </article>
            <div className="w-1 h-12 border-none absolute -bottom-12 right-2/4 bg-gradient-to-t from-[#471648] to-[#4E36C4]"></div>
      </div>
    </section>
  );
}
