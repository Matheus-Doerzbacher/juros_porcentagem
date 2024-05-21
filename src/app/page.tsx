"use client";
import Image from "next/image";
import img_composto from "../../public/images/svg/juros_composto.svg";
import img_simples from "../../public/images/svg/juros_simples.svg";
import HeaderCustom from "@/components/header";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <HeaderCustom />
      {/* COMPOSTO */}
      <div className="container mx-auto px-10 md:px-10 xl:px-32 flex items-center gap-20 pt-40 border-b-2 pb-20">
        <div className="flex flex-col gap-10 w-full md:w-1/2 text-center">
          <h3 className="font-bold text-right text-2xl xl:text-3xl">
            Juros composto
          </h3>
          <p className="text-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            ducimus ut, facere at neque numquam, fugiat aliquam veritatis
            repudiandae aperiam sit voluptatum recusandae. Omnis dignissimos
            quidem ab doloribus, cum sed.
          </p>
          <Link
            href="/composto"
            className="py-2 px-5 bg-blue-500 rounded-md text-white hover:bg-blue-600 transition-colors"
          >
            Calcular juros composto
          </Link>
        </div>
        <Image
          className="w-1/2 hidden md:block"
          src={img_composto}
          alt="Imagem juros composto"
        />
      </div>
      {/* SIMPLES */}
      <div
        className="container mx-auto px-10 md:px-10 xl:px-32 flex items-center gap-20 pt-40 border-b-2 pb-20"
        id="simples"
      >
        <Image
          className="w-1/2 hidden md:block"
          src={img_simples}
          alt="Imagem juros composto"
        />
        <div className="flex flex-col gap-10 w-full md:w-1/2 order-1 text-center">
          <h3 className="font-bold text-left text-3xl xl:text-4xl">
            Juros Simples
          </h3>
          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            ducimus ut, facere at neque numquam, fugiat aliquam veritatis
            repudiandae aperiam sit voluptatum recusandae. Omnis dignissimos
            quidem ab doloribus, cum sed.
          </p>
          <a
            href="#"
            className="py-2 px-5 bg-blue-500 rounded-md text-white hover:bg-blue-600 transition-colors"
          >
            Calcular juros simples
          </a>
        </div>
      </div>
      {/* PORCENTAGEM */}
      <div className=" container mx-auto flex flex-col">
        <h3 className="text-3xl md:4xl font-bold mt-20 text-center md:text-left">
          Porcentagens
        </h3>
        <div
          className=" flex flex-col md:flex-row mt-10 mb-20 gap-20 md:gap-0"
          id="porcentagem"
        >
          <div className="flex flex-col md:w-1/2 md:border-r-2 px-10 gap-10">
            <h4 className="text-2xl xl:text-3xl text-right md:text-left font-semibold">
              Calcular Valor
            </h4>
            <p>
              Aqui você pode passar um valor inicial e uma porcentagem para
              fazer um calculo e obter o resultado. Muito usado para calcular o
              valor de um produto com 15% de desconto por exemplo.
            </p>
            <a
              href="#"
              className="py-2 px-5 bg-blue-500 rounded-md text-white hover:bg-blue-600 transition-colors text-center"
            >
              Calcular Valor
            </a>
          </div>
          <div className="flex flex-col md:w-1/2 px-10 gap-10">
            <h4 className="text-2xl xl:text-3xl font-semibold">
              Calcular Porcentagem
            </h4>
            <p>
              Aqui você pode calcular a porcentagem de um produto passando 2
              valores, o Valor inicial e o Valor final, Esse cálculo é muito
              útil para saber quanto foi a porcentagem de desconto de um produto
              por exemplo.
            </p>
            <a
              href="#"
              className="py-2 px-5 bg-blue-500 rounded-md text-white hover:bg-blue-600 transition-colors text-center"
            >
              Calcular porcentagens
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
