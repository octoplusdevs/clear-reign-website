import { motion } from "framer-motion"
import { PropsType } from "../interface"
import Link from "next/link"
import { HamburgerMenu } from "./hamburger"

export const Header = ({visible}: PropsType) => {

  const MENU = [
    {id: 0, content: 'Home', href: '#'},
    {id: 1, content: 'Produtos', href: '#'},
    {id: 2, content: 'Serviços', href: '#'},
    {id: 3, content: 'Lojas', href: '#'},
  ]

  return(
    <header
      className={`w-full duration-300 h-[86px] grid place-items-center px-4 py-[48px] 
        ${visible ? 'opacity-0 pointer-events-none': 'opacity-1 pointer-events-auto'}`}
    >
        <motion.div
          initial={{y: -30}}
          whileInView={{y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 3.6}}
          className="w-full max-w-[1296px] flex items-center justify-between">
          <motion.div
            initial={{x: -20}}
            whileInView={{ x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 3.6}}
            className="">
            <motion.h1 
              initial={{opacity: 0, scale: 0}}
              whileInView={{opacity: 1, scale: 1}}
              viewport={{once: true}}
              transition={{duration: 0.6, delay: 2.6}}
              className="text-[30px] font-bold">
              CLEAR
              <span className="font-thin"> REIGN</span>
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ x: 0}}
            whileInView={{ x: 30}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 2.6}}
          >
            <motion.nav 
              initial={{opacity: 0, y: -50, x: -30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 1.6, delay: 0.6}}
              className="flex justify-start items-start gap-6">
                {MENU.map(({id, content, href})=>(
                  <Link 
                    key={id}
                    className={`text-base font-normal uppercase ${id === 0 && "font-semibold"}`} 
                    href="#"
                  >
                    {content}
                  </Link>
                ))}
            </motion.nav>
          </motion.div>

         <HamburgerMenu />
        </motion.div>
      </header>
  )
}