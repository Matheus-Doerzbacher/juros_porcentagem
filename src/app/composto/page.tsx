"use client";
import HeaderCustom from "@/components/header";
import { useState } from "react";

type MensalAnual = "mensal" | "anual";

export default function CompostoPage() {
  const [valorInicial, setValorInicial] = useState<any>();
  const [valorMensal, setValorMensal] = useState<any>();
  const [taxaJuros, setTaxaJuros] = useState<any>();
  const [taxaJurosSelect, setTaxaJurosSelect] = useState<MensalAnual>("mensal");
  const [periodo, setPeriodo] = useState<any>();
  const [periodoSelect, setPeriodoSelect] = useState<MensalAnual>("mensal");

  function limpar() {
    setValorInicial("");
    setValorMensal("");
    setTaxaJuros("");
    setTaxaJurosSelect("mensal");
    setPeriodo("");
    setPeriodoSelect("mensal");
  }

  return (
    <>
      <HeaderCustom />
      <div className="container mx-auto mt-40 md:mt-20 font-bold ">
        <h2 className="text-center md:text-left text-4xl">Juros composto</h2>
        <div className="p-10 w-full ">
          {/* LINHA - 1 */}
          <div className="flex flex-col md:flex-row w-full gap-2 md:gap-10">
            {/* INPUT - 1 */}
            <div className="flex flex-col flex-1">
              <label
                htmlFor="valor_mensal"
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
                  id="valor_mensal"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                  placeholder="00,00"
                />
              </div>
            </div>
            {/* INPUT - 1 */}
            <div className="flex flex-col flex-1">
              <label
                htmlFor="valor_mensal"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Valor Mensal
              </label>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <span className="">R$</span>
                </div>
                <input
                  value={valorMensal}
                  onChange={(e) => setValorMensal(parseFloat(e.target.value))}
                  type="number"
                  id="valor_mensal"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                  placeholder="00,00"
                />
              </div>
            </div>
          </div>
          {/* LINHA - 2 */}
          <div className="flex flex-col md:flex-row w-full gap-2 md:gap-10">
            {/* INPUT - 3 */}
            <div className="flex flex-col flex-1">
              <label
                htmlFor="valor_mensal"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Taxa de juros
              </label>
              <div className="flex">
                <div className="relative mb-6 flex-1">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <span className="">%</span>
                  </div>
                  <input
                    value={taxaJuros}
                    onChange={(e) => setTaxaJuros(e.target.value)}
                    type="number"
                    id="valor_mensal"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-md focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                    placeholder="0%"
                  />
                </div>
                <select
                  value={taxaJurosSelect}
                  onChange={(e) =>
                    setTaxaJurosSelect(e.target.value as MensalAnual)
                  }
                  name="taxa_juros_select"
                  id="taxa_juros_select"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-md p-2.5 h-[42px]"
                >
                  <option value="mensal">Mensal</option>
                  <option value="anual">Anual</option>
                </select>
              </div>
            </div>
            {/* INPUT - 4 */}
            <div className="flex flex-col flex-1">
              <label
                htmlFor="valor_mensal"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Período
              </label>
              <div className="flex">
                <input
                  value={periodo}
                  onChange={(e) => setPeriodo(e.target.value)}
                  type="number"
                  id="valor_mensal"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  placeholder="0"
                />
                <select
                  value={periodoSelect}
                  onChange={(e) =>
                    setPeriodoSelect(e.target.value as MensalAnual)
                  }
                  name="taxa_juros_select"
                  id="taxa_juros_select"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-md p-2.5 h-[42px]"
                >
                  <option value="mensal">Mensal</option>
                  <option value="anual">Anual</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-10 md:mt-0">
            <button className="px-7 py-3 bg-blue-500 hover:bg-blue-600 shadow-md text-white rounded-md">
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
    </>
  );
}
