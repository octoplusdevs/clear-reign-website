import { motion } from "framer-motion"
import { PropsType } from "../interface"
import Link from "next/link"

export const Headline = ({ visible }: PropsType) => {
  const IMAGES = [
    {id: 0, src: '/avatar.png'},
    {id: 1, src: '/avatar.png'},
    {id: 2, src: '/avatar.png'},
    {id: 3, src: '/avatar.png'},
  ]

  return(
    <section className="flex justify-center items-center">
    <div className="w-full max-w-[1296px] relative">
      <div className="flex justify-center items-center flex-col my-[118px] gap-[48px] ">
        <motion.h2 
          initial={{opacity: 0, x: '-100%'}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}
          transition={{duration: 1.6, delay: 0.6}}
          className={`text-[56px] font-light uppercase 
           ${visible && 'text-white text-center font-thin'}`}>
          {visible ? 'Aproveite agora e dê um tom natural à sua pele.' : 'A próxima geração de cosméticos.'}
        </motion.h2>

        <motion.h1 
          initial={{opacity: 0, x: '100%'}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}
          transition={{duration: 1.6, delay: 0.6}}
          className={`text-[176px] z-[1] font-semibold uppercase ${visible ? 'text-white': 'text-black'}`}>
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
          transition={{delay: 0.6}}
          src="/folha1.png" width={185} height={166.75} 
          className={`absolute duration-1000 left-[35%] top-[48%] translate-x-[-50%] 
          ${visible && 'left-[-1%]  z-[0]'} `}
        />
        <motion.img 
          initial={{opacity: 0, y: '50%'}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 1.6, delay: 0.6}}
          src="/serum.png" width={358.8} height={642} 
          className={`absolute z-20 flex left-[32%] translate-x-[-50%] ${visible && 'hidden'}`} 
        />
        <motion.img
          initial={{opacity: 0, scale: 0}}
          whileInView={{opacity: 1, scale: 1.2}}
          viewport={{once: true}}
          transition={{delay: 0.6}}
          src="/folha.png" width={365} height={329} 
          className={`absolute duration-1000  z-30 left-[50%] top-[40%] translate-x-[-50%] ${visible && 'left-[68%] top-[45%]'}`}
        />
      </div>


      <div 
        className={`w-full flex justify-between items-end z-10 absolute 
          ${visible ? 'hidden': 'flex'}`}
      >
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
               src={src} 
               width={48} 
               height={48} 
               className={`border-[#1AACFF] border-2 rounded-[50%] float-left 
                ${id != 0 && 'ml-[-16px]'}`} 
              />
            ))}
          </div>
        </div>

        <Link 
          href="#" 
          className="bg-black px-6 max-h-[64px] py-4 rounded-lg flex gap-2 items-center justify-center cursor-pointer hover:bg-slate-900 transition-colors"
        >
          <span className="text-white uppercase text-[22px]">
            Explorar
          </span>
          <img src="/ArrowRight.png" alt="" />
        </Link>
      </div>

    </div>
  </section>
  )
}