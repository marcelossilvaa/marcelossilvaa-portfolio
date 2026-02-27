import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import type { SkillItem } from '@/types/portfolio';
import { revealCardVars, staggerContainerVars } from '@/components/FrameMotion/revealVars';
import { useEffect, useState } from 'react';
import { useLocale } from '@/i18n/LocaleProvider';
import { translations } from '@/i18n/translations';

interface SkillsCardProps {
  data: SkillItem[];
}

export default function SkillsCard({ data }: SkillsCardProps) {
  const { locale } = useLocale();
  const text = translations[locale];
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  useEffect(() => {
    if (!selectedSkill) return;

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedSkill(null);
      }
    };

    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, [selectedSkill]);

  return (
    <>
      <motion.div
        className="flex w-full flex-wrap gap-4 md:gap-5 justify-center items-center mt-4"
        variants={staggerContainerVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.18 }}
      >
        {data.map((item) => (
          <motion.button
            type="button"
            className="group general-hover futuristic-card futuristic-card-purple flex flex-col justify-end items-start w-[23.5%] min-w-[170px] h-[170px] p-3 md:p-4 rounded-xl mb-3 max-md:min-w-[30%] max-md:h-[125px] text-left cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-glow hover:border-accent-primary/70"
            key={item.id}
            variants={revealCardVars}
            onClick={() => setSelectedSkill(item)}
            aria-label={`Abrir detalhes da skill ${item.text}`}
          >
            <Image
              src={item.icon}
              alt={item.text}
              className="w-7 max-md:w-6 transition-transform duration-300 group-hover:scale-110"
            />
            <p className="text-base font-bold max-md:text-sm text-text-primary transition-colors group-hover:text-accent-primary">
              {item.text}
            </p>
            <p className="text-xs text-text-secondary transition-colors group-hover:text-text-primary">
              {item.category}
            </p>
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSkill(null)}
          >
            <motion.article
              className="w-full max-w-xl futuristic-card rounded-2xl p-6 md:p-7"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <Image src={selectedSkill.icon} alt={selectedSkill.text} className="w-10 h-10" />
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">{selectedSkill.text}</h3>
                    <p className="text-sm text-text-secondary">{selectedSkill.category}</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="futuristic-pill hover:text-text-primary"
                  onClick={() => setSelectedSkill(null)}
                >
                  {text.skills.close}
                </button>
              </div>

              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span className="futuristic-pill">{selectedSkill.level}</span>
                <span className="futuristic-pill">{selectedSkill.experience}</span>
              </div>

              <p className="text-text-secondary mb-4">{selectedSkill.description}</p>

              <div className="flex flex-wrap gap-2">
                {selectedSkill.highlights.map((highlight) => (
                  <span key={highlight} className="futuristic-pill">
                    {highlight}
                  </span>
                ))}
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
