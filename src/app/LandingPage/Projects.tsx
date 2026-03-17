'use client';

import ProjectDisplay from '../../components/ProjectDisplay';
import Title from '../../components/Tittle';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { useLocale } from '@/i18n/LocaleProvider';
import { translations } from '@/i18n/translations';

export default function Projects() {
  const { locale } = useLocale();
  const text = translations[locale];

  return (
    <section id="projects" className="bg-bg-primary w-full flex justify-center py-[6vh] border-y border-border-soft">
      <RevealOnScroll
        className="max-w-6xl w-[95%] flex justify-center flex-col items-center"
        threshold={0.2}>
        <div className="pb-4">
          <Title title={text.sections.projects} />
        </div>
        <p className="text-text-secondary text-center max-w-3xl mb-8">
          {locale === 'en'
            ? 'Selected case studies focused on architecture decisions, conversion strategy, and measurable delivery outcomes.'
            : 'Estudos de caso selecionados com foco em decisões de arquitetura, estratégia de conversão e resultados de entrega.'}
        </p>
        <ProjectDisplay />
      </RevealOnScroll>
    </section>
  );
}
