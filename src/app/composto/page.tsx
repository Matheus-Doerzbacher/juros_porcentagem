import HeaderCustom from "@/components/header";

export default function CompostoPage() {
  return (
    <>
      <HeaderCustom />
      <div className="container mx-auto mt-40 md:mt-20 font-bold ">
        <h2 className="text-center md:text-left text-4xl">Juros composto</h2>
        <div className="p-10 w-full ">
          <div className="flex flex-col md:flex-row w-full gap-2 md:gap-10">
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
                  type="number"
                  id="valor_mensal"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                  placeholder="00,00"
                />
              </div>
            </div>
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
                  type="number"
                  id="valor_mensal"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  "
                  placeholder="00,00"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
