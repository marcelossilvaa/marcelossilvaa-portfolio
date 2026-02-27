'use client';
import { getProfessionalData } from '@/content/experience';
import HistoryCard from '../../components/HistoryCard';
import Title from '../../components/Tittle';
import { motion } from 'framer-motion';
import { revealSectionVars } from '@/components/FrameMotion/revealVars';
import { useLocale } from '@/i18n/LocaleProvider';
import { translations } from '@/i18n/translations';

export default function Professional() {
  const { locale } = useLocale();
  const text = translations[locale];
  const professionalData = getProfessionalData(locale);

  return (
    <section id="professional" className="bg-bg-secondary w-full flex justify-center py-5 pb-[7vh]">
      <motion.div
        className="max-w-6xl w-[95%] flex justify-center flex-col items-center"
        variants={revealSectionVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <Title title={text.sections.professional} />
        <HistoryCard data={professionalData} />
      </motion.div>
    </section>
  );
}
