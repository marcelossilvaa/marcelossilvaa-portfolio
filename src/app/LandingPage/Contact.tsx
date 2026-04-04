'use client';

import { ArrowUpRight, Clock, EnvelopeSimple, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { getContactLinks, getSocialLinks } from '@/content/social';
import { useLocale } from '@/i18n/LocaleProvider';
import { translations } from '@/i18n/translations';

export default function Contact() {
  const { locale } = useLocale();
  const text = translations[locale];
  const contactLinks = getContactLinks(locale);
  const socialLinks = getSocialLinks(locale);

  const emailEntry = contactLinks.find((c) => c.href.startsWith('mailto:'));
  const whatsappUrl = socialLinks.find((s) => s.title.toLowerCase().includes('whatsapp'))?.link;
  const linkedinEntry = socialLinks.find((s) => s.title.toLowerCase().includes('linkedin'));

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden border-y border-border-soft bg-bg-secondary"
      aria-labelledby="contact-heading"
    >
      <div
        className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-primary/15 blur-3xl dark:bg-accent-primary/22"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-accent-secondary/12 blur-3xl dark:bg-accent-secondary/18"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,transparent_0%,rgba(var(--accent-primary),0.06)_40%,transparent_85%)] dark:bg-[linear-gradient(165deg,transparent_0%,rgba(var(--accent-primary),0.1)_45%,transparent_90%)]"
        aria-hidden
      />

      <RevealOnScroll
        className="relative mx-auto w-[95%] max-w-6xl py-[8vh] md:py-[10vh]"
        threshold={0.2}
        once={false}
      >
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex flex-col gap-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-primary">
              {text.contactSection.eyebrow}
            </p>
            <h2
              id="contact-heading"
              className="py-2 text-3xl font-bold tracking-tight text-text-primary md:text-4xl"
            >
              {text.sections.contact}
            </h2>
            <p className="mx-auto max-w-xl text-base leading-relaxed text-text-secondary">
              {text.contactSection.lead}
            </p>
            <div className="mx-auto flex max-w-md items-start gap-3 rounded-xl border border-border-soft bg-surface/60 px-4 py-3 text-left text-sm text-text-secondary backdrop-blur-sm dark:bg-surface/35">
              <Clock size={22} weight="duotone" className="mt-0.5 shrink-0 text-accent-primary" aria-hidden />
              <span>{text.contactSection.availability}</span>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {emailEntry && (
              <a
                href={emailEntry.href}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border-soft bg-surface/80 p-6 shadow-soft backdrop-blur-sm transition hover:border-accent-primary/50 hover:shadow-glow dark:bg-surface/45 sm:min-h-[168px]"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-primary/12 text-accent-primary transition group-hover:bg-accent-primary/22">
                    <EnvelopeSimple size={26} weight="duotone" />
                  </span>
                  <ArrowUpRight
                    size={22}
                    weight="bold"
                    className="text-accent-primary opacity-60 transition group-hover:opacity-100"
                    aria-hidden
                  />
                </div>
                <div className="mt-6 text-left">
                  <span className="text-xs font-bold uppercase tracking-wide text-text-secondary">
                    {emailEntry.value}
                  </span>
                  <span className="mt-1 block text-lg font-bold text-text-primary">{text.contactSection.emailButton}</span>
                </div>
              </a>
            )}
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-accent-primary/35 bg-gradient-to-br from-accent-primary/12 via-surface/90 to-accent-secondary/10 p-6 shadow-soft backdrop-blur-sm transition hover:border-accent-primary hover:shadow-glow dark:from-accent-primary/18 dark:via-surface/50 dark:to-accent-secondary/15 sm:min-h-[168px]"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-primary/20 text-accent-primary transition group-hover:bg-accent-primary/30">
                    <WhatsappLogo size={26} weight="duotone" />
                  </span>
                  <ArrowUpRight
                    size={22}
                    weight="bold"
                    className="text-accent-primary opacity-70 transition group-hover:opacity-100"
                    aria-hidden
                  />
                </div>
                <div className="mt-6 text-left">
                  <span className="text-xs font-bold uppercase tracking-wide text-text-secondary">WhatsApp</span>
                  <span className="mt-1 block text-lg font-bold text-text-primary">{text.contactSection.whatsappButton}</span>
                </div>
              </a>
            )}
            {linkedinEntry && (
              <a
                href={linkedinEntry.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex w-full flex-col justify-between overflow-hidden rounded-2xl border border-border-soft bg-surface/80 p-6 shadow-soft backdrop-blur-sm transition hover:border-[#0a66c2]/50 hover:shadow-glow dark:bg-surface/45 sm:col-span-2 sm:min-h-[168px] sm:max-w-md sm:justify-self-center lg:col-span-1 lg:max-w-none"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a66c2]/12 text-[#0a66c2] transition group-hover:bg-[#0a66c2]/20">
                    <LinkedinLogo size={26} weight="duotone" />
                  </span>
                  <ArrowUpRight
                    size={22}
                    weight="bold"
                    className="text-[#0a66c2] opacity-60 transition group-hover:opacity-100"
                    aria-hidden
                  />
                </div>
                <div className="mt-6 text-left">
                  <span className="text-xs font-bold uppercase tracking-wide text-text-secondary">LinkedIn</span>
                  <span className="mt-1 block text-lg font-bold text-text-primary">{text.contactSection.linkedinButton}</span>
                </div>
              </a>
            )}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
