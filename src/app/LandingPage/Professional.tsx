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
    <section id="professional" className="bg-bg-secondary w-full flex justify-center py-[6vh]">
      <RevealOnScroll
        className="max-w-6xl w-[95%] flex justify-center flex-col items-center"
        threshold={0.2}
        once={false}>
        <Title title={text.sections.professional} />
        <p className="text-text-secondary text-center max-w-3xl mt-3 mb-2">
          {locale === 'en'
            ? 'Professional track focused on architecture decisions, experimentation, and measurable delivery in enterprise e-commerce environments.'
            : 'Trajetória com foco em decisões de arquitetura, experimentação e entrega mensurável em contextos enterprise de e-commerce.'}
        </p>
        <HistoryCard data={professionalData} variant="professional" />
      </RevealOnScroll>
    </section>
  );
}
