'use client';
import { getSkillsData } from '@/content/skills';
import SkillsCard from '../../components/SkillsCard';
import Title from '../../components/Tittle';
import { motion } from 'framer-motion';
import { revealSectionVars } from '@/components/FrameMotion/revealVars';
import { useLocale } from '@/i18n/LocaleProvider';
import { translations } from '@/i18n/translations';

export default function Skills() {
  const { locale } = useLocale();
  const text = translations[locale];
  const skillsData = getSkillsData(locale);

  return (
    <section id="skills" className="bg-bg-primary w-full flex justify-center py-[8vh]">
      <motion.div
        className="max-w-6xl w-[95%] flex justify-center flex-col items-center"
        variants={revealSectionVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div
          variants={revealSectionVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
        >
          <Title title={text.sections.skills} />
        </motion.div>
        <SkillsCard data={skillsData} />
      </motion.div>
    </section>
  );
}
