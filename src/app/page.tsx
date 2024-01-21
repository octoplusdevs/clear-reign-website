'use client'
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {

  const [olderTheme, setOlderTheme] = useState(false)

  const IMAGES = [
    {id: 0, src: '/avatar.png'},
    {id: 1, src: '/avatar.png'},
    {id: 2, src: '/avatar.png'},
    {id: 3, src: '/avatar.png'},
  ]

  const handleScrollPage = (e: any) => {
    if (e.deltaY < 0) {
     return setOlderTheme(false)
    }      
    setOlderTheme(true)
  };

  useEffect(() => {
    window.document.addEventListener('wheel',(e)=> handleScrollPage(e));
  
    return () => {
      window.document.removeEventListener('wheel', handleScrollPage);
    };
  }, [olderTheme]);

  return (
    <main>
      <div className={`duration-300 ${olderTheme && 'bg-black absolute top-0 h-[100vh] w-full'}`}></div>
      <header className={`w-full duration-300 h-[86px] grid place-items-center py-[48px] ${olderTheme ? 'opacity-0 pointer-events-none': 'opacity-1 pointer-events-auto'}`}>
        <motion.div
          initial={{y: -30, width: '120%'}}
          whileInView={{y: 0, width: '100%'}}
          viewport={{once: true}}
          transition={{duration: 1, delay: 4}}
          className="w-full max-w-[1296px] flex items-center justify-between">
          <motion.div
            initial={{x: -20}}
            whileInView={{ x: 0}}
            viewport={{once: true}}
            transition={{duration: 1, delay: 4}}
            className="">
            <motion.h1 
              initial={{opacity: 0, scale: 0}}
              whileInView={{opacity: 1, scale: 1}}
              viewport={{once: true}}
              transition={{duration: 1, delay: 2.6}}
              className="text-[30px] font-bold">
              CLEAR
              <span className="font-thin"> REIGN</span>
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ x: 0}}
            whileInView={{ x: 30}}
            viewport={{once: true}}
            transition={{duration: 0.8, delay: 2.6}}
          >
            <motion.nav 
              initial={{opacity: 0, y: -50, x: -30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 1.6, delay: 0.6}}
              className="flex justify-start items-start gap-6">
              <a className="text-[18px] font-bold uppercase" href="#">Home</a>
              <a className="text-[18px] font-normal uppercase" href="#">Produtos</a>
              <a className="text-[18px] font-normal uppercase" href="#">Servicos</a>
              <a className="text-[18px] font-normal uppercase" href="#">Lojas</a>
            </motion.nav>
          </motion.div>

          <motion.div
           initial={{opacity: 0, x: 20}}
           whileInView={{opacity: 1, x: 0}}
           viewport={{once: true}}
           transition={{duration: 1, delay: 4}}
           className="w-[86px] h-[86px] p-[24px] group hover:bg-black bg-white rounded-[50%] cursor-pointer transition-colors items-center justify-center flex gap[2px] flex-wrap z-10 duration-[0.8s]">
            <div className="h-[3px] w-full bg-black rounded-md group-hover:bg-white transition-colors z-0"></div>
            <div className="h-[6px] w-full bg-black rounded-md  group-hover:bg-white transition-colors z-0"></div>
          </motion.div>
        </motion.div>
      </header>

      <section className="flex justify-center items-center">
        <div className="w-full max-w-[1296px] relative">
          <div className="flex justify-center items-center flex-col my-[118px] gap-[48px] ">
            <motion.h2 
              initial={{opacity: 0, x: '-100%'}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{duration: 1.6, delay: 0.6}}
              className={`text-[56px] font-light uppercase ${olderTheme ? 'text-white text-center font-light': 'text-black'}`}>
              {olderTheme ? 'Aproveite agora e dê um tom natural à sua pele.' : 'A próxima geração de cosméticos.'}
            </motion.h2>

            <motion.h1 
              initial={{opacity: 0, x: '100%'}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{duration: 1.6, delay: 0.6}}
              className={`text-[176px] z-[1] font-semibold uppercase ${olderTheme ? 'text-white': 'text-black'}`}>
              CLEAR REIGN
            </motion.h1>
          </div>
          <div 
            className="w-full h-[642px] flex justify-center items-center absolute top-[200px]"
          >
            <motion.img
              initial={{opacity: 0, scale: 0}}
              whileInView={{opacity: 1, scale: 1.5}}
              viewport={{once: true}}
              transition={{duration: 1.2, delay: 0.6}}
              src="/folha1.png" width={185} height={166.75} 
              className={`absolute duration-[1.2s] left-[35%] top-[48%] translate-x-[-50%] ${olderTheme && 'left-[-6%] z-[0]'} `}
            />
            <motion.img 
              initial={{opacity: 0, y: '50%'}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 1.6, delay: 0.6}}
              src="/serum.png" width={358.8} height={642} 
              className={`absolute z-20 flex left-[32%] duration-300 translate-x-[-50%] ${olderTheme && 'hidden'}`} 
            />
            <motion.img
              initial={{opacity: 0, scale: 0}}
              whileInView={{opacity: 1, scale: 1.2}}
              viewport={{once: true}}
              transition={{duration: 1.2, delay: 0.6}}
              src="/folha.png" width={365} height={329} 
              className={`absolute z-30 duration-[1.2s] left-[50%] top-[40%] translate-x-[-50%] ${olderTheme && 'left-[68%] top-[45%]'}`}
            />
          </div>


          <div className={`w-full flex justify-between items-end z-10 absolute ${olderTheme ? 'hidden': 'flex'}`}>
            <div className="flex flex-col gap-4">
              <div className="max-w-[220px] w-full">
                <h3 className="text-[22px] font-bold">+13,000 Vendas</h3>
                <p className="text-xs leading-[130%] uppercase">Construímos os cosméticos 100% naturais para todos.</p>
              </div>
              <div className=''>
                {IMAGES.map(({id, src})=>(
                  <motion.img
                   key={id}
                   initial={{opacity: 0, y: 10}}
                   whileInView={{opacity: 1, y: 0}}
                   viewport={{once: true}}
                   transition={{duration: 1.6, delay: id / 6 + 0.9}}
                   src="/avatar.png" width={48} height={48} 
                   className={`border-[#1AACFF] border-2 rounded-[50%] float-left ${id != 0 && 'ml-[-16px]'}`} 
                  />
                ))}
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
