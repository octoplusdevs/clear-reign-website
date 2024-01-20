import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <header className="w-full h-[86px] grid place-items-center py-12">
        <div className="w-full max-w-[1296px] flex items-center justify-between">
          <div className="">
            <h1 className="text-[30px]">
              CLEAR
              <span className="font-thin"> REIGN</span>
            </h1>
          </div>

          <nav className="flex justify-start items-start gap-6">
            <a className="text-[18px] font-bold uppercase" href="#">Home</a>
            <a className="text-[18px] font-normal uppercase" href="#">Produtos</a>
            <a className="text-[18px] font-normal uppercase" href="#">Servicos</a>
            <a className="text-[18px] font-normal uppercase" href="#">Lojas</a>
          </nav>

          <div className="w-[86px] h-[86px] p-[24px] group hover:bg-black bg-white rounded-[50%] cursor-pointer transition-colors items-center justify-center flex gap[2px] flex-wrap z-10 duration-[0.8s]">
            <div className="h-[3px] w-full bg-black rounded-md group-hover:bg-white transition-colors z-0"></div>
            <div className="h-[6px] w-full bg-black rounded-md  group-hover:bg-white transition-colors z-0"></div>
          </div>
        </div>
      </header>

      <section className="flex justify-center items-center">
        <div className="w-full max-w-[1296px] relative">
          <div className="flex justify-center items-center flex-col my-[118px] gap-[48px] ">
            <h2 className="text-[56px] font-light uppercase">
              A próxima geração de cosméticos.
            </h2>

            <h1 className="text-[176px] font-semibold uppercase">
              CLEAR REIGN
            </h1>
          </div>
          <div 
            className="w-full h-[642px] flex justify-center items-center absolute top-[200px]"
          >
            <img src="/folha1.png" width={185} height={166.75} 
              className="absolute left-[40%] top-[43%] scale-[1.5] translate-x-[-50%]" 
            />
            <img src="/serum.png" width={358.8} height={642} 
              className="absolute left-[45%] translate-x-[-50%]" 
            />
            <img src="/folha.png" width={365} height={329} 
              className="absolute left-[60%] top-[37%] scale-[1.2] translate-x-[-50%]" 
            />
          </div>


          <div className="w-full flex justify-between items-end z-10 absolute">
            <div className="flex flex-col gap-4">
              <div className="max-w-[220px] w-full">
                <h3 className="text-[22px] font-bold">+13,000 Vendas</h3>
                <p className="text-xs leading-[130%] uppercase">Construímos os cosméticos 100% naturais para todos.</p>
              </div>
              <div className="">
                  <img src="/avatar.png" width={48} height={48} 
                  className="border-[#1AACFF] border-2 rounded-[50%] float-left" 
                  />
                  <img src="/avatar.png" width={48} height={48} 
                  className="border-[#1AACFF] border-2 rounded-[50%] float-left ml-[-16px]" 
                  />
                  <img src="/avatar.png" width={48} height={48} 
                  className="border-[#1AACFF] border-2 rounded-[50%] float-left ml-[-16px]" 
                  />
                  <img src="/avatar.png" width={48} height={48} 
                  className="border-[#1AACFF] border-2 rounded-[50%] float-left ml-[-16px]" 
                  />
              </div>
            </div>
            <a href="#" 
              className="bg-black px-6 max-h-[64px] py-4 rounded-lg flex gap-2 items-center justify-center cursor-pointer hover:bg-slate-900 transition-colors"
            >
              <span className="text-white uppercase text-[22px]">Explorar</span>
              <img src="/ArrowRight.png" alt="" />
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
