'use client';
import { dataHeader } from '../../../@helpers/data';
import { Desktop } from '../../../@helpers/icons';
import { AnimatePresence, motion } from "framer-motion";
import Link from 'next/link';
import { useEffect, useState } from "react";
import { menuVars } from '@/components/FrameMotion/menuVars'
import { containerVars } from '@/components/FrameMotion/containerVars'




export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  useEffect(() => {
    const setResize = () => innerWidth >= 768 && menuOpen ? setMenuOpen(false) : null

    window.addEventListener('resize', setResize)
  }, [menuOpen])

  const menuClose = () => setMenuOpen(false)
  
  return (
    <header className="z-10 flex justify-center w-full fixed backdrop-blur-md bg-opacity-50 bg-white">
      <div className="flex h-[8vh] justify-between items-center text-[15px] text-black-100 max-w-6xl w-[95%]">
        <Link href={'/#banner'} className="auto-transition flex flex-row gap-1 items-center z-10">
          <Desktop size={28} color="#3f433d" weight="bold" />
          <h1 className="font-bold">Marcelo S Silva</h1>
        </Link>
        <div className='hidden md:block'> 
            <ul className=" flex space-x-4 ">
              {dataHeader.map((dataHeader, index, array) => (
                <li key={dataHeader.id} className={`auto-transition ${index === array.length - 1 ? 'font-bold' : ''}`}>
                  <a
                    href={dataHeader.href}
                    className="header-links"
                  >
                    {dataHeader.text}
                  </a>
                </li>
              ))}  
            </ul>
          </div>
        
          <div className="flex md:hidden z-10 scale-150">
              <motion.button 
                type="button"
                animate={menuOpen ? 'open' : 'closed'}
                onClick={toggleMenu} 
                className='flex flex-col space-y-1'
                >
                  <motion.span variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 5 },
                  }} 
                    className='w-5 h-px bg-black-100 block'></motion.span>
                  <motion.span variants={{ 
                    closed: { opacity: 1, transition: { duration: 0.1 } },
                    open: { opacity: 0, transition: { duration: 0.1 } },
                  }} 
                  className='w-5 h-px bg-black-100 block'></motion.span>
                  <motion.span variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -5 },
                  }} 
                  className='w-5 h-px bg-black-100 block'></motion.span>
              </motion.button>
          </div> 
        <AnimatePresence>
          { menuOpen && ( 
              <motion.div id="mobile-menu" variants={menuVars} 
              initial="initial" 
              animate="animate" 
              exit="exit"
              className='fixed md:hidden top-0 origin-top left-0 bg-primary-900 w-full h-[28rem] rounded-br-2xl rounded-bl-2xl bg-white backdrop-blur-md bg-opacity-90'
              >
                <motion.div 
                  variants={containerVars} 
                  initial="initial" 
                  animate="open" 
                  exit="initial"
                  className="md:hidden font-poppins w-full gap-10 flex flex-col items-center xs:text-xl md:text-base py-20 px-4">
                    {dataHeader.map((dataHeader, index, array) => (
                      
                      <div key={dataHeader.id} className={`overflow-hidden text-lg ${index === array.length - 1 ? 'font-bold' : ''}`}>
                      <a
                        href={dataHeader.href}
                        className="hover:border-b-1 transition-opacity hover:shadow-md"
                      >
                        {dataHeader.text}
                      </a>
                    </div>              
                    ))}
                </motion.div>
              </motion.div>
          )}
          </AnimatePresence>
        </div>
    </header>
  );
}
