'use client';
import { dataHeader } from '../../../@helpers/data';
import { Desktop } from '../../../@helpers/icons';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { menuVars } from '@/components/FrameMotion/menuVars';
import { containerVars } from '@/components/FrameMotion/containerVars';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const setResize = () => (innerWidth >= 768 && menuOpen ? setMenuOpen(false) : null);

    window.addEventListener('resize', setResize);
  }, [menuOpen]);

  const menuClose = () => setMenuOpen(false);

  return (
    <header className="auto-transition z-10 flex justify-center w-full fixed backdrop-blur-md bg-opacity-50 bg-white">
      <div className="flex h-[8vh] justify-between items-center text-[15px] text-black-100 max-w-6xl w-[95%]">
        <Link href={'/#banner'} className=" flex flex-row gap-1 items-center z-10">
          <Desktop size={28} color="#3f433d" weight="bold" />
          <h1 className="font-bold">Marcelo S Silva</h1>
        </Link>
        <div className="hidden md:block">
          <ul className=" flex space-x-4 ">
            {dataHeader.map((dataHeader, index, array) => (
              <li
                key={dataHeader.id}
                className={` ${index === array.length - 1 ? 'font-bold' : ''}`}
              >
                <a href={dataHeader.href} className="header-links">
                  {dataHeader.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex md:hidden z-10 scale-150">
          <label className="sus-hamburger-1a2b cursor-pointer">
            <input
              type="checkbox"
              className="hidden peer"
              checked={menuOpen}
              onChange={toggleMenu}
            />
            <svg
              viewBox="0 0 32 32"
              className="h-12 transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] peer-checked:rotate-[-45deg]"
            >
              <path
                className="sus-line-1a2b sus-line-top-bottom-1a2b"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path className="sus-line-1a2b" d="M7 16 27 16"></path>
            </svg>
          </label>
        </div>

        <style jsx>{`
          .sus-line-1a2b {
            fill: none;
            stroke: #464646;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 2;
            transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
              stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
          }

          .sus-line-top-bottom-1a2b {
            stroke-dasharray: 12 63;
          }

          .peer:checked + svg .sus-line-top-bottom-1a2b {
            stroke-dasharray: 20 300;
            stroke-dashoffset: -32.42;
          }
        `}</style>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed md:hidden top-0 origin-top left-0 bg-primary-900 w-full h-[28rem] rounded-br-2xl rounded-bl-2xl bg-white backdrop-blur-md bg-opacity-90"
            >
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="md:hidden font-poppins w-full gap-10 flex flex-col items-center xs:text-xl md:text-base py-20 px-4"
              >
                {dataHeader.map((dataHeader, index, array) => (
                  <div
                    key={dataHeader.id}
                    className={`overflow-hidden text-lg ${
                      index === array.length - 1 ? 'font-bold' : ''
                    }`}
                  >
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
