export default function Pilares() {
  return (
    <section
      id="pilares"
      className="  mt-20 ml-6 mr-6  max-w-7xl md:mt-40  md:ml-6 lg:mx-auto lg:mt-40 relative rounded-3xl   bg-[#1f1d2b] before:absolute before:inset-[-4px] before:bg-gradient-to-r before:from-[#851d86]  before:to-[#0048fe] before:rounded-3xl before:-z-10 before:content-['']  after:absolute after:inset-[-5px] after:bg-[linear-gradient(360deg,_rgb(31,29,43)_75%,_rgba(31,29,43,0)_100%)] after:-z-10 after:content-[''] "
    >
      <div className="relative ">
        <article className="">
          <div className="absolute bg-[#1f1d2b]  -top-5 left-[130px] pl-2 pr-2 md:left-[44%] lg:-top-6 lg:left-[45%] ">
            <b className="bg-gradient-to-r from-[#0048fe] to-[#851d86] bg-clip-text text-transparent text-2xl md:text-4xl  font-bold">
              Pilares
            </b>
          </div>
          <div className=" p-3 pt-8 md:pb-28">
            <p className="text-xl text-center  mx-auto leading-[150%] pb-10 md:text-2xl lg:leading-[150%] lg:text-[1.7rem] lg:w-2/3  ">
              Os pilares que sustentam o formato inovador de aprendizagem do
              Union é a junção de incríveis metodologias!
            </p>
          </div>

          <div className=" h-auto rounded-xl grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <div className="">
              <div className=" text-center bg-gradient-to-r from-[#851d86] to-[#0048fe] rounded-t-lg ">
                <h1 className="text-2xl h-auto p-5 font-bold   rounded-t-lg ">
                  Ativa
                </h1>
              </div>
              <div className="bg-[linear-gradient(225deg,_rgba(0,72,254,0.1)_0%,_rgba(133,29,134,0.1)_100%)] rounded-b-lg">
                <p className="text-center  text-sm md:text-xl p-6  ">
                  Metodologia ativa é uma abordagem educacional que coloca o
                  aluno como protagonista, onde ele é o responsável por ir atrás
                  dos conhecimentos necessários, ficando o professor como um
                  mentor, que vai mostrar o caminho para que ele possa ter
                  sucesso no aprendizado.
                </p>
              </div>
            </div>

            <div>
              <div className="w-full text-center ">
                <h1 className="text-2xl h-auto p-5 font-bold bg-gradient-to-r from-[#851d86] to-[#0048fe] rounded-t-lg ">
                  Andragogia
                </h1>
              </div>
              <div className="bg-[linear-gradient(225deg,_rgba(0,72,254,0.1)_0%,_rgba(133,29,134,0.1)_100%)] rounded-b-lg">
                <p className="text-center text-sm md:text-xl p-6">
                  É uma metodologia de ensino para adultos, que tem mais
                  liberdade e colaboração, permitindo que o aluno decida quando,
                  como e o que estudar, tornando o processo de aprendizagem mais
                  sólido e eficaz, a andragogia valoriza a autonomia e a
                  experiência dos adultos como base para a aprendizagem.
                </p>
              </div>
            </div>
            <div>
              <div className="w-full text-center ">
                <h1 className="text-2xl h-auto p-5 font-bold bg-gradient-to-r from-[#851d86] to-[#0048fe] rounded-t-lg ">
                  Ágil
                </h1>
              </div>
              <div className="bg-[linear-gradient(225deg,_rgba(0,72,254,0.1)_0%,_rgba(133,29,134,0.1)_100%)] rounded-b-lg">
                <p className="text-center text-sm md:text-xl p-6">
                  A metodologia ágil é uma metodologia que estimula a
                  colaboração entre o time, permitindo que tenha uma visão mais
                  transparente, liberdade para fazer escolhas e tomar decisões,
                  buscando a melhora continua entre os membros, os processos e a
                  qualidade geral do trabalho.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
