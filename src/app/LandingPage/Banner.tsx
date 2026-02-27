'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from '../../../@helpers/icons';
import imageBanner from '../../../public/assets/marcelo-new.jpeg';
import SplitText from '../../components/SplitText';
import { getSocialLinks } from '@/content/social';
import { motion } from 'framer-motion';
import { revealSectionVars, staggerContainerVars } from '@/components/FrameMotion/revealVars';
import { useLocale } from '@/i18n/LocaleProvider';
import { translations } from '@/i18n/translations';
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export default function Banner() {
  const { locale } = useLocale();
  const text = translations[locale];
  const socialLinks = getSocialLinks(locale);

  return (
    <section id="banner" className="max-w-6xl w-[95%] py-[32px]">
      <div className="h-[8vh]"></div>
      <motion.div
        className="auto-transition flex items-start justify-between gap-8 flex-col-reverse md:items-center md:flex-row"
        variants={revealSectionVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}>
        <div className="flex flex-col gap-2">
          <SplitText
            text={text.banner.hero}
            className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary"
            delay={50}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing={easeOutCubic}
            threshold={0.2}
            rootMargin="-50px"
          />
          <p className="max-md:text-base text-text-secondary md:max-w-xl">{text.banner.subtitle}</p>
          <motion.div
            className="flex gap-2 md:gap-4 flex-wrap"
            variants={staggerContainerVars}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}>
            {socialLinks.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className={`header-links flex items-center font-bold text-sm md:text-lg ${
                  item.id === 1 ? 'text-accent-primary' : ''
                }`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir ${item.title} em nova aba`}>
                {item.title}
                {item.id === 1 ? (
                  <ArrowUpRight size={22} className="text-accent-primary" weight="bold" />
                ) : (
                  <ArrowUpRight size={20} color="#475569" weight="bold" />
                )}
              </Link>
            ))}
          </motion.div>
        </div>
        <div className="profile-ring general-hover min-w-[250px] md:min-w-[350px] rounded-full">
          <Image
            className="relative z-[1] rounded-full w-[250px] md:w-[350px] border-2 border-surface shadow-soft"
            src={imageBanner}
            alt="Foto de Marcelo Santana Silva"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
