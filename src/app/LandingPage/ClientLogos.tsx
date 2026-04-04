'use client';

import Image from 'next/image';
import { clientLogos } from '@/content/clients';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { useLocale } from '@/i18n/LocaleProvider';
import { translations } from '@/i18n/translations';

export default function ClientLogos() {
  const { locale } = useLocale();
  const text = translations[locale];

  return (
    <section
      id="clients"
      className="bg-bg-primary w-full flex justify-center border-b border-border-soft"
      aria-labelledby="clients-heading">
      <RevealOnScroll
        className="max-w-6xl w-[95%] py-[3vh] md:py-[5vh]"
        threshold={0.2}
        once={false}>
        <div className="flex flex-col gap-8 md:gap-10">
          <header className="max-w-2xl">
            <h2
              id="clients-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary py-2">
              {text.clients.title}
            </h2>
            <p className="mt-3 text-sm md:text-base text-text-secondary leading-relaxed">
              {text.clients.subtitle}
            </p>
          </header>

          <div className="rounded-2xl border border-border-soft bg-surface/40 dark:bg-surface/20 overflow-hidden shadow-soft">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {clientLogos.map((client) => (
                <div
                  key={client.id}
                  className="flex min-h-[100px] md:min-h-[120px] items-center justify-center px-4 py-6 md:px-6 md:py-8 border-border-soft border-r border-b max-md:[&:nth-child(2n)]:border-r-0 md:[&:nth-child(4n)]:border-r-0 max-md:[&:nth-child(n+7)]:border-b-0 md:[&:nth-child(n+5)]:border-b-0">
                  {client.logo ? (
                    <Image
                      src={client.logo}
                      alt={client.name}
                      className="max-h-[6rem] w-auto max-w-[140px] object-contain grayscale opacity-75 transition duration-300 hover:grayscale-0 hover:opacity-100"
                      sizes="(max-width: 768px) 140px, 160px"
                    />
                  ) : (
                    <span className="text-center text-sm md:text-base font-semibold tracking-tight text-text-secondary/80 grayscale select-none">
                      {client.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
