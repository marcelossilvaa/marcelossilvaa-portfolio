'use client';

import ProjectDisplay from '../../components/ProjectDisplay';
import Title from '../../components/Tittle';
import { motion } from 'framer-motion';
import { revealSectionVars } from '@/components/FrameMotion/revealVars';
import { useLocale } from '@/i18n/LocaleProvider';
import { translations } from '@/i18n/translations';

export default function Projects() {
  const { locale } = useLocale();
  const text = translations[locale];

  return (
    <section id="projects" className="bg-bg-primary w-full flex justify-center py-[8vh] border-y border-border-soft">
      <motion.div
        className="max-w-6xl w-[95%] flex justify-center flex-col items-center"
        variants={revealSectionVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="pb-4">
          <Title title={text.sections.projects} />
        </div>
        <ProjectDisplay />
      </motion.div>
    </section>
  );
}
