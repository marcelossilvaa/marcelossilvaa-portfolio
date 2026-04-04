'use client';

import {
  ArrowUpRight,
  CaretUp,
  EnvelopeSimple,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from '@phosphor-icons/react';
import Title from '../../components/Tittle';
import { getContactLinks, getSocialLinks } from '@/content/social';
import { getNavigationLinks } from '@/content/navigation';
import type { NavItem } from '@/types/portfolio';
import { useLocale } from '@/i18n/LocaleProvider';
import { translations } from '@/i18n/translations';

function contactChannelIcon(label: string) {
  const l = label.toLowerCase();
  if (l.includes('instagram')) return InstagramLogo;
  if (l.includes('whatsapp')) return WhatsappLogo;
  return EnvelopeSimple;
}

function socialIconFor(title: string) {
  const t = title.toLowerCase();
  if (t.includes('linkedin')) return LinkedinLogo;
  if (t.includes('github')) return GithubLogo;
  if (t.includes('whatsapp')) return WhatsappLogo;
  if (t.includes('instagram')) return InstagramLogo;
  return ArrowUpRight;
}

export default function Footer() {
  const { locale } = useLocale();
  const text = translations[locale];
  const contactLinks = getContactLinks(locale);
  const socialLinks = getSocialLinks(locale);

  const footerNav: NavItem[] = [
    ...getNavigationLinks(locale).filter((l) => l.id !== 6),
    { id: 7, href: '#clients', text: text.footer.brands },
  ];

  return (
    <footer
      id="contact"
      className="relative w-full overflow-hidden border-t border-border-soft bg-bg-secondary"
    >
      <div
        className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-accent-primary/12 blur-3xl dark:bg-accent-primary/18"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-accent-secondary/10 blur-3xl dark:bg-accent-secondary/15"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(var(--accent-primary),0.04)_45%,transparent_100%)] dark:bg-[linear-gradient(180deg,transparent_0%,rgba(var(--accent-primary),0.07)_50%,transparent_100%)]" />

      <div className="relative mx-auto flex w-[95%] max-w-6xl flex-col gap-12 py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col gap-5 lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-primary">{text.footer.tagline}</p>
            <Title title={text.sections.contact} />
            <p className="max-w-md text-base leading-relaxed text-text-secondary">{text.footer.cta}</p>
            <a
              href="#banner"
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-border-soft bg-surface/80 px-4 py-2 text-sm font-semibold text-text-primary shadow-soft backdrop-blur-sm transition hover:border-accent-primary/50 hover:bg-accent-primary/8 dark:bg-surface/50"
            >
              <CaretUp size={18} weight="bold" className="text-accent-primary transition group-hover:-translate-y-0.5" />
              {text.footer.backToTop}
            </a>
          </div>

          <nav className="lg:col-span-3" aria-label={text.footer.navTitle}>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-text-primary">{text.footer.navTitle}</h3>
            <ul className="flex flex-col gap-2.5">
              {footerNav.map((item) => (
                <li key={`${item.id}-${item.href}`}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-[15px] text-text-secondary transition hover:text-text-primary"
                  >
                    <span className="h-px w-0 bg-accent-primary transition-all duration-300 group-hover:w-4" aria-hidden />
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-text-primary">{text.footer.contactTitle}</h3>
            <ul className="flex flex-col gap-3">
              {contactLinks.map((contact) => {
                const Icon = contactChannelIcon(contact.label);
                const isExternal = contact.href.startsWith('http');
                return (
                  <li key={contact.id}>
                    <a
                      href={contact.href}
                      {...(isExternal
                        ? { target: '_blank' as const, rel: 'noopener noreferrer' }
                        : {})}
                      className="group flex items-center gap-3 rounded-xl border border-border-soft bg-surface/70 p-3 shadow-soft backdrop-blur-sm transition hover:border-accent-primary/45 hover:bg-accent-primary/[0.07] dark:bg-surface/40"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-primary/12 text-accent-primary transition group-hover:bg-accent-primary/20 dark:bg-accent-primary/18">
                        <Icon size={22} weight="duotone" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[11px] font-semibold uppercase tracking-wide text-text-secondary">
                          {contact.label}
                        </span>
                        <span className="block truncate text-sm font-semibold text-text-primary">{contact.value}</span>
                      </span>
                      <ArrowUpRight
                        size={18}
                        weight="bold"
                        className="shrink-0 text-accent-primary opacity-0 transition group-hover:opacity-100"
                        aria-hidden
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-8 border-t border-border-soft pt-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-text-secondary">{text.footer.socialLabel}</p>
            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map((s) => {
                const Icon = socialIconFor(s.title);
                return (
                  <a
                    key={s.id}
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border-soft bg-surface/80 text-text-secondary shadow-soft transition hover:border-accent-primary hover:text-accent-primary hover:shadow-glow dark:bg-surface/50"
                    aria-label={s.title}
                    title={s.title}
                  >
                    <Icon size={22} weight="duotone" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="font-semibold text-text-primary">{text.footer.developedBy}</p>
            <p className="mt-1 text-sm text-text-secondary">© {new Date().getFullYear()} Marcelo S Silva</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
