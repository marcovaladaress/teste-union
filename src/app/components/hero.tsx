export default function Hero() {
  return (
    <section className="max-h-max bg-cover pt-32 lg:pt-8  bg-[url('/hero.jpg')]  md:bg-[url('/background.jpg')]  bg-center bg-no-repeat text-white ">
      <div className="max-w-7xl mx-auto  pl-6 relative">
        <article className="grid grid-cols-1  lg:grid-cols-2 gap-5 lg:pt-60  ">
          <div className="">
            <h1 className="text-2xl leading-[150%]  w-96 md:text-5xl md:w-3/4 mb-4 md:mb-14 lg:w-full lg:text-5xl  font-bold left-10">
              Ganhe
              <b className="bg-gradient-to-r leading-[150%] ml-[6px] mr-[6px] from-[#0048fe] to-[#851d86] bg-clip-text text-transparent  font-bold">
                experiência
              </b>
       
              como desenvolvedor júnior
            </h1>
            <p className="text-base w-80 md:w-4/5 md:text-2xl lg:text-2xl lg:w-full ">
              Descubra como o Union oferece um ambiente prático e imersivo para
              desenvolvedores juniors ganharem experiência de mercado, mesmo sem
              estar em uma empresa. Participe dessa experiência única e
              impulsione sua carreira como desenvolvedor!
            </p>

            <button
             
              className="bg-gradient-to-r from-[#851d86] to-[#0048fe] px-24 py-4 rounded-md mt-12 "
            >
              <a className=" text-xl font-bold " href="#form">
                Quero Participar
              </a>
            </button>
          </div>

          <div className="hidden move-up relative  lg:block max-w-lg h-[500px] bg-cover bg-center bg-no-repeat ml-14  ">
            <img src="/Render.svg" alt="img-hero" />
          </div>
        </article>
      </div>
    </section>
  );
}
