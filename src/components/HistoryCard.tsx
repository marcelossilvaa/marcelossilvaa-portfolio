'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { HistoryItem } from '@/types/portfolio';
import { revealCardVars, staggerContainerVars } from '@/components/FrameMotion/revealVars';

interface HistoryCardProps {
  data: HistoryItem[];
}

export default function HistoryCard({ data }: HistoryCardProps) {
  return (
    <motion.div
      className="flex w-full flex-wrap gap-4 md:gap-[3.5%] justify-center items-stretch"
      variants={staggerContainerVars}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {data.map((item) => (
        <motion.article
          className="general-hover futuristic-card futuristic-card-purple flex justify-start flex-col w-[30%] min-w-[250px] mb-2 max-md:min-w-[47%] rounded-2xl p-3"
          key={item.id}
          variants={revealCardVars}
        >
          <div className="flex items-center justify-center bg-white/80 dark:bg-slate-900/45 border border-border-soft h-[24vh] my-1 rounded-xl max-md:h-[15vh]">
            <Image src={item.image} alt={item.institution} className="w-[150px] max-md:w-[100px]" />
          </div>
          <p className="text-base font-bold max-md:text-sm max-sm:text-xs text-text-primary">
            {item.title}
          </p>
          <p className="text-sm md:text-base text-text-secondary">{item.date}</p>
          <p className="text-sm md:text-base text-text-secondary">{item.institution}</p>
          {item.summary && item.summary.length > 0 && (
            <motion.ul
              className="mt-2 pl-4 text-xs md:text-sm text-text-secondary list-disc space-y-1"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              {item.summary.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </motion.ul>
          )}
        </motion.article>
      ))}
    </motion.div>
  );
}
