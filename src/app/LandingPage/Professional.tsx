'use client';
import { getProfessionalData } from '@/content/experience';
import HistoryCard from '../../components/HistoryCard';
import Title from '../../components/Tittle';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { useLocale } from '@/i18n/LocaleProvider';
import { translations } from '@/i18n/translations';

export default function Professional() {
  const { locale } = useLocale();
  const text = translations[locale];
  const professionalData = getProfessionalData(locale);

  return (
    <section id="professional" className="bg-bg-secondary w-full flex justify-center py-5 pb-[7vh]">
      <RevealOnScroll
        className="max-w-6xl w-[95%] flex justify-center flex-col items-center"
        threshold={0.2}
        once={false}>
        <Title title={text.sections.professional} />
        <HistoryCard data={professionalData} />
      </RevealOnScroll>
    </section>
  );
}
