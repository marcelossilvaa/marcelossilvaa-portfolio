'use client';
import { getEducationData } from '@/content/education';
import HistoryCard from '../../components/HistoryCard';
import Title from '../../components/Tittle';
import { motion } from 'framer-motion';
import { revealSectionVars } from '@/components/FrameMotion/revealVars';
import { useLocale } from '@/i18n/LocaleProvider';
import { translations } from '@/i18n/translations';

export default function AcademicEducation() {
  const { locale } = useLocale();
  const text = translations[locale];
  const educationData = getEducationData(locale);

  return (
    <section id="academicEducation" className="bg-bg-secondary w-full flex justify-center py-5 pt-[8vh]">
      <motion.div
        className="max-w-6xl w-[95%] flex justify-center flex-col items-center"
        variants={revealSectionVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <Title title={text.sections.education} />
        <HistoryCard data={educationData} />
      </motion.div>
    </section>
  );
}
