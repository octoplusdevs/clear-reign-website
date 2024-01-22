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
    <section className="flex justify-center items-center px-4">
    <div className="w-full max-w-[1296px] relative">
      <div className="flex justify-center items-center flex-col my-[68px] gap-[0] ">
        <motion.h2 
          initial={{opacity: 0, x: '-100%'}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}
          transition={{duration: 1.6, delay: 0.6}}
          className={`text-[3.5vw] font-light uppercase 
           ${visible && 'text-white text-center w-full max-w-[999px] font-thin'}`}>
          {visible ? 
            'Aproveite agora e dê um tom natural à sua pele.' 
            :
            'A próxima geração de cosméticos'}
        </motion.h2>

        <motion.h1 
          initial={{opacity: 0, x: '100%'}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}
          transition={{duration: 1.6, delay: 0.6}}
          className={`text-[6vw] sm:text-[9vw] z-[1] tracking-[16px] font-semibold uppercase 
            ${visible ? 'text-white': 'text-black'}`}
        >
          CLEAR REIGN
        </motion.h1>
      </div>

      <div 
        className="w-full h-[152px] flex justify-center items-center absolute top-[230px]"
      >
        <motion.img
          initial={{opacity: 0, scale: 0}}
          whileInView={{opacity: 1, scale: 1.5}}
          viewport={{once: true}}
          transition={{delay: 0.6}}
          src="/folha1.png" width={185} height={166.75} 
          className={`absolute duration-1000 left-[20%] z-0 top-[48%] translate-x-[-50%] 
            sm:left-[30%] lg:left-[35%] ${visible && 'top-[-80%] left-[-10%] lg:left-[6%] lg:top-[72%]'}`}
        />
        <motion.img 
          initial={{visibility: "hidden", y: '50%'}}
          whileInView={{visibility: "visible", y: 0}}
          viewport={{once: true}}
          transition={{duration: 1.6, delay: 0.6}}
          src="/serum.png" width={200.8} height={122} 
          className={`z-20 flex ml-[-80px] ${visible && 'hidden'}`} 
        />
        <motion.img
          initial={{opacity: 0, scale: 0}}
          whileInView={{opacity: 1, scale: 1.2}}
          viewport={{once: true}}
          transition={{delay: 0.6}}
          src="/folha.png" width={165} height={129} 
          className={`absolute duration-1000 w-full max-w-[165px] z-30 left-[50%] 
            top-[40%] translate-x-[-50%] ${visible && 'top-[-60%] sm:top-[-40%] lg:left-[70%] lg:top-[45%]'}`}
        />
      </div>


      <div 
        className={`w-full pt-[348px] sm:p-0 flex flex-wrap-reverse gap-6 
          sm:flex-nowrap justify-between items-end z-10 absolute ${visible ? 'hidden': 'flex'}`}
      >
        <div className="flex sm:flex-col flex-wrap justify-between w-full gap-4">
          <div className="max-w-[220px] w-full">
            <h3 className="text-[22px] font-bold">+13,000 Vendas</h3>
            <p className="text-xs leading-[130%] uppercase">
              Construímos os cosméticos 100% naturais para todos.
            </p>
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
          className="bg-black w-full sm:w-max px-6 max-h-[64px] py-[14px] rounded-lg flex gap-2 
          items-center justify-center cursor-pointer hover:bg-slate-900 transition-colors"
        >
          <span className="text-white uppercase text-[18px]">
            Explorar
          </span>
          <img src="/ArrowRight.png" alt="" />
        </Link>
      </div>

    </div>
  </section>
  )
}