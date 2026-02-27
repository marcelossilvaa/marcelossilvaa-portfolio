'use client';
import { getNavigationLinks } from '@/content/navigation';
import { Desktop } from '../../../@helpers/icons';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { menuVars } from '@/components/FrameMotion/menuVars';
import { containerVars } from '@/components/FrameMotion/containerVars';
import { mobileLinkVars } from '@/components/FrameMotion/mobileLinkVars';
import ThemeToggle from '@/components/theme/ThemeToggle';
import LanguageToggle from '@/components/i18n/LanguageToggle';
import { useLocale } from '@/i18n/LocaleProvider';
import { translations } from '@/i18n/translations';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale } = useLocale();
  const text = translations[locale];
  const navigationLinks = getNavigationLinks(locale);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const setResize = () => (innerWidth >= 768 && menuOpen ? setMenuOpen(false) : null);

    window.addEventListener('resize', setResize);
    return () => window.removeEventListener('resize', setResize);
  }, [menuOpen]);

  return (
    <header className="auto-transition z-20 flex justify-center w-full fixed bg-surface/85 backdrop-blur-md border-b border-border-soft">
      <div className="flex h-[8vh] justify-between items-center text-[15px] text-text-primary max-w-6xl w-[95%]">
        <Link href="/#banner" className="flex flex-row gap-1 items-center z-10">
          <Desktop size={28} className="text-text-primary" weight="bold" />
          <h1 className="font-bold tracking-tight">Marcelo S Silva</h1>
        </Link>
        <div className="hidden md:flex items-center gap-4">
          <ul className="flex space-x-5">
            {navigationLinks.map((item, index, array) => (
              <li key={item.id} className={`${index === array.length - 1 ? 'font-bold' : ''}`}>
                <a href={item.href} className="header-links">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <div className="flex md:hidden z-10 scale-150">
          <label className="sus-hamburger-1a2b cursor-pointer" aria-label={text.header.openMenu}>
            <input
              type="checkbox"
              className="hidden peer"
              checked={menuOpen}
              onChange={toggleMenu}
              aria-label={menuOpen ? text.header.closeMenu : text.header.openMenu}
            />
            <svg
              viewBox="0 0 32 32"
              className="h-12 text-text-primary transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] peer-checked:rotate-[-45deg]"
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
            stroke: currentColor;
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
              className="fixed md:hidden top-0 origin-top left-0 w-full h-[28rem] rounded-br-2xl rounded-bl-2xl bg-surface/95 backdrop-blur-md border-b border-border-soft"
            >
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="md:hidden font-poppins w-full gap-10 flex flex-col items-center xs:text-xl md:text-base py-20 px-4"
              >
                {navigationLinks.map((item, index, array) => (
                  <motion.div
                    key={item.id}
                    variants={mobileLinkVars}
                    className={`overflow-hidden text-lg ${index === array.length - 1 ? 'font-bold' : ''}`}
                  >
                    <a
                      href={item.href}
                      className="header-links"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.text}
                    </a>
                  </motion.div>
                ))}
                <LanguageToggle />
                <ThemeToggle />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
