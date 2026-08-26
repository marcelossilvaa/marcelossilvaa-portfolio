'use client';

import { motion } from 'framer-motion';
import { getWhatsAppHref } from '@/content/whatsapp';
import type { Locale } from '@/i18n/LocaleProvider';
import type { V2TranslationSchema } from '@/i18n/v2Translations';
import { getV2Keywords } from '@/content/v2Content';
import { Marquee } from '../components/Marquee';
import { Reveal } from '../components/Reveal';
import { ScrambleText } from '../components/ScrambleText';
import { useScrollToSection } from '../lib/useV2Motion';

const EASE = [0.16, 1, 0.3, 1] as const;

type ContactSectionProps = {
  locale: Locale;
  text: V2TranslationSchema;
};

export function ContactSection({ locale, text }: ContactSectionProps) {
  const scrollTo = useScrollToSection();

  const channels = [
    { label: text.contact.whatsapp, value: '(77) 99121-9434', href: getWhatsAppHref(locale) },
    {
      label: text.contact.email,
      value: 'marcelo_810@hotmail.com',
      href: `mailto:marcelo_810@hotmail.com?subject=${encodeURIComponent(
        locale === 'en' ? 'Portfolio — contact' : 'Contato pelo portfólio'
      )}`,
    },
    {
      label: text.contact.linkedin,
      value: '/in/marcelossilva1',
      href: 'https://www.linkedin.com/in/marcelossilva1/',
    },
    { label: text.contact.github, value: '@marcelossilvaa', href: 'https://github.com/marcelossilvaa' },
    {
      label: text.contact.instagram,
      value: '@marcelossilva1',
      href: 'https://www.instagram.com/marcelossilva1/',
    },
  ];

  return (
    <section id="contact" className="v2-section !pb-0">
      <div className="v2-wrap">
        <Reveal>
          <div className="mb-10 flex items-center gap-3">
            <span className="v2-mono tabular-nums text-[var(--v2-signal)]">11</span>
            <span className="h-px w-8 bg-[var(--v2-line-strong)]" />
            <ScrambleText text={text.contact.eyebrow} className="v2-mono text-[var(--v2-muted)]" />
          </div>
        </Reveal>

        <div className="v2-contact__title">
          {[text.contact.titleLine1, text.contact.titleLine2].map((line, lineIndex) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: '105%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.1, delay: lineIndex * 0.12, ease: EASE }}
              >
                {lineIndex === 1 ? <span className="v2-signal-text">{line}</span> : line}
              </motion.span>
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <p className="max-w-md text-[1rem] leading-relaxed text-[var(--v2-muted)]">{text.contact.lead}</p>
            <a
              href={getWhatsAppHref(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="v2-cta mt-8"
            >
              {text.hero.ctaPrimary}
              <span aria-hidden="true">→</span>
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border-b border-[var(--v2-line)]">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="v2-contact__link px-3"
                >
                  <span className="v2-heading text-[clamp(1.05rem,2.2vw,1.5rem)]">{channel.label}</span>
                  <span className="v2-contact__value v2-mono truncate text-[var(--v2-muted)]">
                    {channel.value}
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-20 border-t border-[var(--v2-line)] py-3">
        <Marquee
          durationSeconds={40}
          items={getV2Keywords(locale).map((keyword) => (
            <span key={keyword} className="v2-mono text-[var(--v2-dim)]">
              {keyword}
            </span>
          ))}
        />
      </div>

      <footer className="border-t border-[var(--v2-line)]">
        <div className="v2-wrap flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1">
            <span className="v2-mono text-[var(--v2-fg)]">Marcelo Santana Silva</span>
            <span className="v2-mono text-[var(--v2-dim)]">{text.contact.builtWith}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="v2-mono text-[var(--v2-dim)]">© {new Date().getFullYear()}</span>
            <button type="button" className="v2-ghost-btn" onClick={() => scrollTo('index')}>
              {text.contact.backToTop}
              <span aria-hidden="true">↑</span>
            </button>
          </div>
        </div>
      </footer>
    </section>
  );
}
