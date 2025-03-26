import Image from 'next/image';
import { motion } from 'framer-motion';

interface SkillsCardProps {
  data: any[];
  isVisible: boolean;
}

export default function SkillsCard({ data, isVisible }: SkillsCardProps) {

  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-wrap gap-[2%] justify-center items-center mt-3">
        {Array.isArray(data) &&
          data.map((item) => (
            <motion.div
              className="general-hover flex flex-col justify-end bg-white-100 w-[23.5%] min-w-[170px] h-[170px] p-2 pl-4 max-sm:pl-2 rounded-md shadow-sm mb-6 max-sm:mb-3 max-md:min-w-[30%] max-md:h-[120px]"
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3 }}
            >
              <Image src={item.icon} alt={item.text} className="w-7 max-md:w-6" />
              <p className="text-base font-bold max-md:text-sm">{item.text}</p>
              {item.optionalText && <p className="text-sm text-gray-500">{item.optionalText}</p>}
            </motion.div>
          ))}
      </div>
    </div>
  );
}
