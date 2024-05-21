"use client";
import GraficoComposto from "@/components/graficoComposto";
import HeaderCustom from "@/components/header";
import { useState } from "react";

type MensalAnual = "mensal" | "anual";

export default function CompostoPage() {
  const [valorInicial, setValorInicial] = useState<any>();
  const [taxaJuros, setTaxaJuros] = useState<any>();
  const [periodo, setPeriodo] = useState<any>();
  const [periodoSelect, setPeriodoSelect] = useState<MensalAnual>("mensal");
  const [mostrarGrafico, setMostrarGrafico] = useState<boolean>(false);
  const [dataComposto, setDataComposto] = useState<any>([]);
  const [dataSimples, setDataSimples] = useState<any>([]);
  const [label, setLabel] = useState<any>([]);
  const [valorFinalComposto, setValorFinalComposto] = useState<any>();
  const [valorFinalSimples, setValorFinalSimples] = useState<any>();

  function calcularJurosCompostos() {
    const C = parseFloat(valorInicial);
    const i = parseFloat(taxaJuros) / 100;
    var t = parseInt(periodo);

    if (periodoSelect == "anual") {
      t = t * 12;
    }

    const composto = C * Math.pow(1 + i, t);
    const simples = C + C * i * t;

    const label = [];
    const data1 = [];
    const data2 = [];

    for (let mes = 0; mes <= t; mes++) {
      label.push(mes);
      data1.push(C * Math.pow(1 + i, mes));
      data2.push(C + C * i * mes);
    }

    setLabel(label);
    setDataComposto(data1);
    setDataSimples(data2);

    setValorFinalComposto(composto);
    setValorFinalSimples(simples);

    setMostrarGrafico(true);
  }

  function limpar() {
    setValorInicial("");
    setTaxaJuros("");
    setPeriodo("");
    setPeriodoSelect("mensal");
    setMostrarGrafico(false);
  }

  return (
    <>
      <HeaderCustom />
      <div className="container mx-auto mt-40 md:mt-20 font-bold ">
        <h2 className="text-center md:text-left text-3xl">Calculo de Juros</h2>
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
                />
              </div>
            </div>
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
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                  />
                </div>
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
          <div className="flex gap-5 mt-10 md:mt-0">
            <button
              className="px-7 py-3 bg-blue-500 hover:bg-blue-600 shadow-md text-white rounded-md"
              onClick={calcularJurosCompostos}
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
      {mostrarGrafico && (
        <div className="container flex flex-col mx-auto px-10 py-5 border gap-5 border-zinc-300 rounded-md">
          <h3 className="font-bold text-xl text-blue-500">Resultado</h3>
          <div className="flex justify-evenly flex-col md:flex-row gap-5">
            {/*  */}
            <div className="flex flex-col justify-center items-center border border-zinc-300 rounded-md px-10 py-5">
              <h5 className="font-black text-zinc-600">Valor Inicial</h5>
              <p className="font-bold text-green-600">R$ {valorInicial}</p>
            </div>
            {/*  */}
            <div className="flex flex-col justify-center items-center border border-zinc-300 rounded-md px-10 py-5">
              <h5 className="font-black text-zinc-600">Valor Final Composto</h5>
              <p className="font-bold text-red-700">
                R$ {valorFinalComposto.toFixed(2)}
              </p>
            </div>
            {/*  */}
            <div className="flex flex-col justify-center items-center border border-zinc-300 rounded-md px-10 py-5">
              <h5 className="font-black text-zinc-600">Valor Final Simples</h5>
              <p className="font-bold text-blue-700">
                R$ {valorFinalSimples.toFixed(2)}
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <GraficoComposto
              data1={dataComposto}
              data2={dataSimples}
              labels={label}
            />
          </div>
        </div>
      )}
    </>
  );
}
