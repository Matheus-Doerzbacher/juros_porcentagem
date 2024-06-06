"use client";
import GraficoComposto from "@/components/graficoComposto";
import HeaderCustom from "@/components/header";
import { useState } from "react";

type MensalAnual = "mensal" | "anual";

export default function CompostoPage() {
  const [valorInicial, setValorInicial] = useState<any>();
  const [porcentagem, setPorcentagem] = useState<any>();
  const [valorFinal, setValorFinal] = useState<any>();

  function calcularValor(){
  const valorInicialNumerico = parseFloat(valorInicial);
  const porcentagemNumerica = parseFloat(porcentagem) / 100;
  const valorCalculado = valorInicialNumerico + (valorInicialNumerico * porcentagemNumerica);
  setValorFinal(valorCalculado);
  }

  function limpar() {
    setValorInicial("");
    setPorcentagem("");
    setValorFinal("");
  }

  return (
    <>
      <HeaderCustom />
      <div className="container mx-auto mt-40 md:mt-20 font-bold ">
        <h2 className="text-center md:text-left text-3xl">Calcular Valor</h2>
        <div className="p-10 w-full ">
          {/* LINHA - 1 */}
          <div className="flex flex-col md:flex-row w-full gap-2 md:gap-10">
            {/* INPUT - 1 */}
            <div className="flex flex-col flex-1">
              <label
                htmlFor="valor_inicial"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Valor Inicial
              </label>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <span className="">R$</span>
                </div>
                <input
                  value={valorInicial}
                  onChange={(e) => setValorInicial(e.target.value)}
                  type="number"
                  id="valor_inicial"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                />
              </div>
            </div>
            {/* INPUT - 2*/}
            <div className="flex flex-col flex-1">
              <label
                htmlFor="valor_mensal"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Porcentagem
              </label>
              <div className="flex">
                <div className="relative mb-6 flex-1">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <span className="">%</span>
                  </div>
                  <input
                    value={porcentagem}
                    onChange={(e) => setPorcentagem(e.target.value)}
                    type="number"
                    id="valor_mensal"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                  />
                </div>
              </div>
            </div>
            {/* INPUT - 4 */}
          </div>
          <div className="flex gap-5 mt-10 md:mt-0">
            <button
              className="px-7 py-3 bg-blue-500 hover:bg-blue-600 shadow-md text-white rounded-md"
              onClick={calcularValor}
            >
              Calcular
            </button>
            <button
              className="px-7 py-3 bg-zinc-400 hover:bg-zinc-500 shadow-md text-white rounded-md"
              onClick={limpar}
            >
              Limpar
            </button>
          </div>
        </div>
      </div>
      {valorFinal && 
      <div className="mt-10">
        <h3 className="text-center font-bold text-2xl text-blue-500">Resultado</h3>
        <p className="text-center font-bold text-2xl">R${" "}{valorFinal}</p>
      </div>
      }
    </>
  );
}
