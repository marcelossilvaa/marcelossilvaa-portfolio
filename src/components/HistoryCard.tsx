'use client';
import Image from 'next/image';
import type { HistoryItem } from '@/types/portfolio';
import { RevealOnScroll } from '@/components/RevealOnScroll';

interface HistoryCardProps {
  data: HistoryItem[];
}

export default function HistoryCard({ data }: HistoryCardProps) {
  return (
    <div className="flex w-full flex-wrap gap-4 md:gap-[3.5%] justify-center items-stretch">
      {data.map((item, index) => (
        <RevealOnScroll
          key={item.id}
          once={false}
          threshold={0.2}
          delayMs={index * 90}
          className="w-[30%] min-w-[250px] mb-2 max-md:min-w-[47%]">
          <article className="general-hover futuristic-card futuristic-card-purple flex h-full justify-start flex-col rounded-2xl p-3">
            <div className="flex items-center justify-center bg-white/80 dark:bg-slate-900/45 border border-border-soft h-[24vh] my-1 rounded-xl max-md:h-[15vh]">
              <Image src={item.image} alt={item.institution} className="w-[150px] max-md:w-[100px]" />
            </div>
            <p className="text-base font-bold max-md:text-sm max-sm:text-xs text-text-primary">
              {item.title}
            </p>
            <p className="text-sm md:text-base text-text-secondary">{item.date}</p>
            <p className="text-sm md:text-base text-text-secondary">{item.institution}</p>
            {item.summary && item.summary.length > 0 && (
              <RevealOnScroll
                className="w-full"
                threshold={0.5}
                delayMs={150}
                durationMs={400}
                variant="up">
                <ul className="mt-2 pl-4 text-xs md:text-sm text-text-secondary list-disc space-y-1">
                  {item.summary.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </RevealOnScroll>
            )}
          </article>
        </RevealOnScroll>
      ))}
    </div>
  );
}
