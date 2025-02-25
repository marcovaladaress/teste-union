import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";

const dadosFormShema = z.object({
  name: z.string().min(3, "Nome é Obrigatório"),
  idade: z
    .string()
    .min(1, "A idade é obrigatória")
    .refine((val) => parseInt(val) >= 18, {
      message: "A idade deve ser maior ou igual a 18 anos",
    }),
  email: z
    .string()
    .min(1, "O campo e-mail é obrigatório")
    .email("E-mail inválido"),
  github: z
    .string()
    .min(1, "O campo Github é Obrigatório")
    .url("Usuário inválido"),
  linkedin: z
    .string()
    .min(1, "O campo e-mail é obrigatório")
    .url("URL inválida do LinkedIn"),
  profissao: z.string(),
});

type FormShema = z.infer<typeof dadosFormShema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormShema>({
    resolver: zodResolver(dadosFormShema),
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      github: "",
      linkedin: "",
      profissao: "",
    },
  });

  const onSubmit = (data: FormShema) => {
   localStorage.setItem("formData", JSON.stringify(data));
   alert("Dados salvos com sucesso!");
  };

  useEffect(() => {

    const savedData = localStorage.getItem("formData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      
    }
  }, []);

  
  return (
    <section id="form" className="max-w-7xl mx-auto  mt-[4rem]">
      <article className=" p-[2rem]  ml-4 mr-4 relative rounded-md   bg-[linear-gradient(225deg,rgba(0,72,254,0.2)0%,rgba(133,29,134,0.2)100%)]">
        <h2 className="text-center mb-[2rem] font-extrabold text-[21px] md:text-[2.7rem] ">
          Junta-se ao time!
        </h2>
        <p className="text-center mb-4 text-[15px] w-[300px] mx-auto md:w-[600px] ">
          Ficamos felizes em saber que você tem interesse em fazer parte do
          Union! Agora é só responder o nosso formulário
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="mt-[4rem] max-w-[350px] md:max-w-[900px] mx-auto">
              <div className="flex gap-1 mb-2">
                <span className="text-red-600  ">*</span>
                <label className="text-[16px]  "> Nome Completo</label>
              </div>
              <div className="w-full ">
                <input
                  className="w-full rounded-md p-[0.80rem] bg-transparent border text-[18px] border-zinc-500"
                  type="text"
                  placeholder="Qual seu nome completo?"
                  id="name"
                  {...register("name", { required: "O nome é obrigatório" })}
                />
                <ErrorMessage
                  errors={errors}
                  name="name"
                  render={({ message }) => (
                    <p className="text-red-600 text-sm mt-1">
                      Campo obrigatório!
                    </p>
                  )}
                />
              </div>
            </div>
            <div className="mt-[2rem] max-w-[350px]  md:max-w-[900px] mx-auto">
              <div className="flex gap-1 mb-2">
                <span className="text-red-600  ">*</span>
                <label className="text-[16px]  ">Idade</label>
              </div>
              <div className="w-full ">
                <input
                  className="w-full rounded-md p-[0.80rem] bg-transparent border border-zinc-500 text-[18px] "
                  type="text"
                  placeholder="Qual a sua idade?"
                  id="idade"
                  {...register("idade", {
                    required: "A idade é obrigatória",
                    validate: (value) => {
                      const idade = parseInt(value);
                      return idade >= 18;
                    },
                  })}
                />
              </div>
              {errors.idade && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.idade.message}
                </p>
              )}
            </div>
            <div className="mt-[2rem] max-w-[350px]  md:max-w-[900px] mx-auto">
              <div className="flex gap-1 mb-2">
                <span className="text-red-600  ">*</span>
                <label className="text-[16px]  ">Email</label>
              </div>
              <div className="w-full ">
                <input
                  className="w-full rounded-md p-[0.80rem] bg-transparent border border-zinc-500 text-[18px]"
                  type="text"
                  placeholder="Qual seu email de contato?"
                  id="email"
                  {...register("email", {
                    required: "O e-mail é obrigatório",
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                      message: "E-mail inválido",
                    },
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="email"
                  render={({ message }) => (
                    <p className="text-red-500 text-[15px] mt-2 ">{message}</p>
                  )}
                />
              </div>
            </div>
            <div className="mt-[2rem] max-w-[350px]  md:max-w-[900px] mx-auto">
              <div className="flex gap-1 mb-2">
                <span className="text-red-600  ">*</span>
                <label className="text-[16px]  ">Github</label>
              </div>
              <div className="w-full ">
                <input
                  className="w-full rounded-md p-[0.80rem] bg-transparent border border-zinc-500 text-[18px]"
                  type="text"
                  placeholder="Qual seu GitHub?"
                  id="github"
                  {...register("github")}
                />
              </div>
              <ErrorMessage
                errors={errors}
                name="github"
                render={({ message }) => (
                  <p className="text-red-600 text-[15px] mt-2">{message}</p>
                )}
              />
            </div>
            <div className="mt-[2rem] max-w-[350px]  md:max-w-[900px] mx-auto">
              <div className="flex gap-1 mb-2">
                <span className="text-red-600  ">*</span>
                <label className="text-[16px]  ">Linkedin</label>
              </div>
              <div className="w-full ">
                <input
                  className="w-full rounded-md p-[0.80rem] bg-transparent border border-zinc-500 text-[18px] "
                  type="text"
                  placeholder="Qual seu Linkedin?"
                  id="linkedin"
                  {...register("linkedin")}
                />
              </div>
              <ErrorMessage
                errors={errors}
                name="linkedin"
                render={({ message }) => (
                  <p className="text-red-600 text-[15px] mt-2">{message}</p>
                )}
              />
            </div>

            <div className="mt-[2rem] max-w-[350px]  mx-auto md:ml-[9rem]">
              <input
                type="radio"
                id="profissao"
                value="Frontend"
                {...register("profissao")}
              />
              <label className="text-[17px] ml-3">Frontend</label>
            </div>
            <div className="mt-[0.56rem] max-w-[350px] md:ml-[9rem] mx-auto">
              <input type="radio" id="profissao" value="Backend" />
              <label className="text-[17px] ml-3">Backend</label>
            </div>

            <div className=" max-w-[250px] md:max-w-[400px] mx-auto mt-[5rem]">
              <button
                type="submit"
                className="p-4 bg-gradient-to-r from-[#0048fe] to-[#851d86]  rounded-md px-20 w-full text-xl font-bold"
              >
                Enviar
              </button>
            </div>
          </div>
        </form>
      </article>
    </section>
  );
}
function zordResolver(
  dadosFormShema: z.ZodObject<
    {
      name: z.ZodString;
      idade: z.ZodString;
      email: z.ZodString;
      github: z.ZodString;
      linkedin: z.ZodString;
    },
    "strip",
    z.ZodTypeAny,
    {
      name: string;
      idade: string;
      email: string;
      github: string;
      linkedin: string;
    },
    {
      name: string;
      idade: string;
      email: string;
      github: string;
      linkedin: string;
    }
  >
):
  | import("react-hook-form").Resolver<
      import("react-hook-form").FieldValues,
      any
    >
  | undefined {
  throw new Error("Function not implemented.");
}
