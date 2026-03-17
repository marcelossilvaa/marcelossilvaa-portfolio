'use client';
import Image from 'next/image';
import type { HistoryItem } from '@/types/portfolio';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { ArrowUpRight } from '@phosphor-icons/react';

interface HistoryCardProps {
  data: HistoryItem[];
  variant?: 'professional' | 'education';
}

export default function HistoryCard({ data, variant = 'professional' }: HistoryCardProps) {
  if (variant === 'professional') {
    return (
      <div className="w-full flex flex-col gap-4 md:gap-5 mt-4">
        {data.map((item, index) => (
          <RevealOnScroll
            key={item.id}
            once={false}
            threshold={0.2}
            delayMs={index * 80}
            className="w-full"
          >
            <article className="futuristic-card futuristic-card-purple rounded-2xl p-4 md:p-5 border-l-2 border-l-accent-primary/70">
              <div className="grid grid-cols-1 md:grid-cols-[170px_1fr] gap-4 md:gap-5 items-start">
                <div
                  className={`flex items-center justify-center border border-border-soft min-h-[110px] rounded-xl p-2 ${
                    item.logoOnDark
                      ? 'bg-slate-900'
                      : 'bg-white/80 dark:bg-slate-900/45'
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.institution}
                    className={`${item.institution === 'Webjump' ? 'w-[135px] max-md:w-[110px]' : 'w-[120px] max-md:w-[100px]'}`}
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base md:text-xl font-bold text-text-primary">{item.title}</h3>
                    <span className="futuristic-pill">{item.date}</span>
                  </div>
                  {item.companyLink ? (
                    <a
                      href={item.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center gap-1 text-sm md:text-base text-text-secondary mb-2 hover:text-text-primary underline-offset-4 hover:underline"
                      aria-label={`Abrir LinkedIn da empresa ${item.institution}`}
                    >
                      {item.institution}
                      <span className="text-xs md:text-sm opacity-80">(LinkedIn)</span>
                      <ArrowUpRight size={12} weight="bold" />
                    </a>
                  ) : (
                    <p className="text-sm md:text-base text-text-secondary mb-2">{item.institution}</p>
                  )}
                  {item.summary && item.summary.length > 0 && (
                    <ul className="pl-4 text-sm md:text-base text-text-secondary list-disc space-y-1.5">
                      {item.summary.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    );
  }

  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mt-4">
      {data.map((item, index) => (
        <RevealOnScroll
          key={item.id}
          once={false}
          threshold={0.2}
          delayMs={index * 90}
          className="w-full">
          <article className="futuristic-card futuristic-card-purple flex h-full justify-start flex-col rounded-2xl p-4">
            <div className="flex items-center justify-center bg-white/80 dark:bg-slate-900/45 border border-border-soft min-h-[120px] rounded-xl p-2">
              <Image
                src={item.image}
                alt={item.institution}
                className={`${
                  item.institution === 'Oracle + Alura' ? 'w-[190px] max-md:w-[150px]' : 'w-[130px] max-md:w-[100px]'
                }`}
              />
            </div>
            <p className="text-base md:text-lg font-bold text-text-primary mt-3">
              {item.title}
            </p>
            <p className="text-sm md:text-base text-text-secondary">{item.institution}</p>
            <div className="mt-2">
              <span className="futuristic-pill">{item.date}</span>
            </div>
            {item.summary && item.summary.length > 0 && (
              <p className="mt-3 text-sm md:text-base text-text-secondary">{item.summary[0]}</p>
            )}
          </article>
        </RevealOnScroll>
      ))}
    </div>
  );
}
