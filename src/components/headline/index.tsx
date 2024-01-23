import { motion } from "framer-motion"
import { PropsType } from "../interface"
import Link from "next/link"
import { useEffect, useState } from "react"

export const Headline = ({ visible }: PropsType) => {

  const [activeDuration, setActiveDuration] = useState(false)

  const IMAGES = [
    {id: 0, src: '/avatar.png'},
    {id: 1, src: '/avatar.png'},
    {id: 2, src: '/avatar.png'},
    {id: 3, src: '/avatar.png'},
  ]


  useEffect(()=>{
    setTimeout(()=>{
      setActiveDuration(true)
    }, 2500)
  }, [])

  return(
    <section className="flex justify-center items-center px-4">
    <div className="w-full max-w-[1296px] relative">
      <div className="flex justify-center items-center flex-col my-[68px] gap-[0] ">
        <motion.h2 
          initial={{opacity: 0, x: '-100%'}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}
          transition={{duration: 1.6, delay: 0.6}}
          className={`text-[24px] font-light uppercase 
           ${visible && 'text-white text-center'}`}>
          {visible ? 
            <motion.span
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{once: true}}
              transition={{duration: 1.8}}
              >
                Aproveite agora e dê um tom natural à sua pele.
            </motion.span> 
            :
            <span>
              A próxima geração de cosméticos  
            </span>}
        </motion.h2>

        <motion.h1 
          initial={{opacity: 0, x: '100%'}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}
          transition={{duration:1.6, delay: 0.6}}
          className={`text-[100px] z-[1] tracking-[16px] font-semibold uppercase 
            ${activeDuration && 'duration-[1.6s]'}
            ${visible ? 'text-white mt-9': 'text-black'}`}
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
          src="/folha1.png" width={85} height={166.75} 
          className={`absolute duration-1000 z-0 top-[48%] translate-x-[-50%] left-[42%] 
            ${visible && 'left-[15%] top-[4%]'}`}
        />
        <motion.img 
          initial={{visibility: "hidden", y: '50%'}}
          whileInView={{visibility: "visible", y: 0}}
          viewport={{once: true}}
          transition={{duration: 1.6, delay: 0.6}}
          src="/serum.png" width={200.8} height={122} 
          className={`z-20 opacity-1 ml-[-80px] ${visible && 'opacity-0'}`} 
        />
        <motion.img
          initial={{opacity: 0, scale: 0}}
          whileInView={{opacity: 1, scale: 1.2}}
          viewport={{once: true}}
          transition={{delay: 0.6}}
          src="/folha.png" width={165} height={129} 
          className={`absolute duration-1000 w-full max-w-[165px] z-30 left-[50%] 
            top-[40%] translate-x-[-50%] 
            ${visible && 'left-[67%] top-0'}`}
        />
      </div>


      <div 
        className={`w-full flex justify-between items-end z-10 absolute 
        ${visible ? 'hidden': 'flex'}`}
      >
        <div className="flex flex-col gap-4">
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
          className="bg-black px-6 py-[14px] rounded-lg flex gap-2 items-center 
            justify-center cursor-pointer hover:bg-slate-900 transition-colors"
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