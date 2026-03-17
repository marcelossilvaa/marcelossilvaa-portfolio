'use client';
import { getEducationData } from '@/content/education';
import HistoryCard from '../../components/HistoryCard';
import Title from '../../components/Tittle';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { useLocale } from '@/i18n/LocaleProvider';
import { translations } from '@/i18n/translations';

export default function AcademicEducation() {
  const { locale } = useLocale();
  const text = translations[locale];
  const educationData = getEducationData(locale);

  return (
    <section id="academicEducation" className="bg-bg-secondary w-full flex justify-center py-5 pt-[8vh]">
      <RevealOnScroll
        className="max-w-6xl w-[95%] flex justify-center flex-col items-center"
        threshold={0.2}
        once={false}>
        <Title title={text.sections.education} />
        <HistoryCard data={educationData} />
      </RevealOnScroll>
    </section>
  );
}
