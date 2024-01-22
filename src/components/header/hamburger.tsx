import { motion } from "framer-motion"

export const HamburgerMenu = () => {
  return(
    <motion.div
      initial={{opacity: 0, x: 20}}
      whileInView={{opacity: 1, x: 0}}
      viewport={{once: true}}
      transition={{duration: 0.6, delay: 3.6}}
      className="w-[56px] h-[56px] px-[16px] group hover:bg-black bg-white rounded-[50%] 
        cursor-pointer transition-colors items-center justify-center flex gap-[8px] flex-col z-10 duration-[0.8s]">
      <div className="h-[3px] w-full bg-black rounded-md group-hover:bg-white 
        transition-colors z-0">
      </div>
      <div className="h-[6px] w-full bg-black rounded-md  group-hover:bg-white
       transition-colors z-0">
      </div>
    </motion.div>
  )
}