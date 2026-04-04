'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from '../../../@helpers/icons';
import imageBanner from '../../../public/assets/marcelo-new.jpeg';
import SplitText from '../../components/SplitText';
import { getSocialLinks } from '@/content/social';
import { getWhatsAppHref } from '@/content/whatsapp';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { useLocale } from '@/i18n/LocaleProvider';
import { translations } from '@/i18n/translations';
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export default function Banner() {
  const { locale } = useLocale();
  const text = translations[locale];
  const socialLinks = getSocialLinks(locale);
  const heroHighlights =
    locale === 'en' ? ['e-commerce', 'performance', 'conversion'] : ['e-commerces', 'performance', 'conversão'];

  return (
    <section id="banner" className="max-w-6xl w-[95%] py-[32px]">
      <div className="h-[8vh]"></div>
      <RevealOnScroll
        className="auto-transition flex items-start justify-between gap-8 flex-col-reverse md:items-center md:flex-row"
        threshold={0.25}
        once={false}>
        <div className="flex flex-col gap-2">
          <SplitText
            text={text.banner.hero}
            className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary"
            highlightWords={heroHighlights}
            highlightClassName="bg-gradient-to-r from-violet-300 via-indigo-300 to-cyan-300 bg-clip-text text-transparent"
            delay={50}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing={easeOutCubic}
            threshold={0.2}
            rootMargin="-50px"
          />
          <p className="max-md:text-base text-text-secondary md:max-w-2xl">{text.banner.subtitle}</p>
          <div className="flex gap-3 md:gap-4 flex-wrap mt-2">
            <a
              href={getWhatsAppHref(locale)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={text.banner.ctaPrimaryAria}
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm md:text-base font-semibold bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500 text-white hover:opacity-90 transition-opacity shadow-[0_10px_25px_rgba(99,102,241,0.35)]"
            >
              {text.banner.ctaPrimary}
            </a>
            <Link
              href="/#projects"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm md:text-base font-semibold border border-border-soft text-text-primary hover:bg-surface-soft transition-colors"
            >
              {text.banner.ctaSecondary}
            </Link>
          </div>
          <p className="mt-2 max-w-xl text-sm text-text-secondary/90">{text.banner.heroTrust}</p>
          <div className="flex gap-2 md:gap-4 flex-wrap mt-1">
            {socialLinks.map((item, index) => (
              <RevealOnScroll
                key={item.id}
                variant="up"
                threshold={0.2}
                once={false}
                delayMs={index * 80}
                className="inline-flex">
                <Link
                  href={item.link}
                  className={`header-links flex items-center font-bold text-sm md:text-lg ${
                    item.id === 1 ? 'text-accent-primary' : ''
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={text.banner.openSocialAria.replace('{name}', item.title)}
                >
                  {item.title}
                  {item.id === 1 ? (
                    <ArrowUpRight size={22} className="text-accent-primary" weight="bold" />
                  ) : (
                    <ArrowUpRight size={20} color="#475569" weight="bold" />
                  )}
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
        <div className="profile-ring general-hover min-w-[250px] md:min-w-[350px] rounded-full">
          <Image
            className="relative z-[1] rounded-full w-[250px] md:w-[350px] border-2 border-surface shadow-soft"
            src={imageBanner}
            alt="Foto de Marcelo Santana Silva"
            priority
          />
        </div>
      </RevealOnScroll>
    </section>
  );
}
