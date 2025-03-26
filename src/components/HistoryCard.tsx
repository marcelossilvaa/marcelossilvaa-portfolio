'use client';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';

type HistoryCardItem = {
  id: number;
  image: StaticImageData;
  title: string;
  date: string;
  institution: string;
};

interface HistoryCardProps {
  data: HistoryCardItem[];
  isVisible: boolean;
}

export default function HistoryCard({ data, isVisible }: HistoryCardProps) {
  return (
    <div className="flex w-full">
      <div className="flex w-full flex-wrap gap-[4%] justify-center items-center">
        {Array.isArray(data) &&
          data.map((item) => (
            <motion.div
              className="general-hover flex justify-center max-sm:justify-start flex-col w-[30%] min-w-[250px] mb-3 max-md:min-w-[47%]"
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ opacity: { duration: 0.5 }, y: { duration: 0.7, ease: 'easeOut' } }} // Adjusted transition timings
            >
              <div className="flex items-center justify-center bg-white-100 h-[24vh] my-3 rounded-md shadow-md max-md:h-[15vh]">
                <Image
                  src={item.image}
                  alt={item.institution}
                  className="w-[150px] max-md:w-[100px]"
                />
              </div>
              <p className="text-base font-bold max-md:text-sm max-sm:text-xs">{item.title}</p>
              <p className="text-base max-md:text-sm max-sm:text-xs">{item.date}</p>
              <p className="text-base max-md:text-sm max-sm:text-xs">{item.institution}</p>
            </motion.div>
          ))}
      </div>
    </div>
  );
}
