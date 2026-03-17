'use client';

import Title from '../../components/Tittle';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { useLocale } from '@/i18n/LocaleProvider';
import { translations } from '@/i18n/translations';

export default function Process() {
  const { locale } = useLocale();
  const text = translations[locale];
  const isEnglish = locale === 'en';

  const steps = [
    {
      title: text.process.introTitle,
      description: text.process.introDescription,
      outcome: isEnglish ? 'Clarity on priorities and roadmap.' : 'Clareza de prioridade e roadmap.',
    },
    {
      title: text.process.experimentationTitle,
      description: text.process.experimentationDescription,
      outcome: isEnglish
        ? 'Validated improvements with lower product risk.'
        : 'Melhorias validadas com menor risco de produto.',
    },
    {
      title: text.process.automationTitle,
      description: text.process.automationDescription,
      outcome: isEnglish ? 'Faster operation and decision cycle.' : 'Operação e decisão mais rápidas.',
    },
    {
      title: text.process.architectureTitle,
      description: text.process.architectureDescription,
      outcome: isEnglish ? 'Sustainable delivery speed with quality.' : 'Velocidade de entrega sustentável com qualidade.',
    },
  ];

  return (
    <section id="process" className="w-full bg-bg-primary flex justify-center py-[6vh] border-y border-border-soft">
      <RevealOnScroll
        className="max-w-6xl w-[95%] flex flex-col items-center"
        threshold={0.2}
        once={false}
      >
        <Title title={text.sections.process} />
        <p className="text-text-secondary text-center max-w-3xl mt-3">
          {isEnglish
            ? 'Simple and objective flow focused on delivery quality and business impact.'
            : 'Fluxo simples e objetivo para garantir qualidade técnica e impacto de negócio.'}
        </p>
        <div className="mt-6 grid w-full grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {steps.map((step, index) => (
            <RevealOnScroll
              key={step.title}
              once={false}
              threshold={0.2}
              delayMs={index * 80}
              className="h-full"
            >
              <article className="futuristic-card rounded-2xl p-5 h-full border-l-2 border-l-accent-primary/70">
                <p className="text-xs font-semibold text-accent-primary mb-2 uppercase tracking-wide">
                  {isEnglish ? 'Step' : 'Etapa'} 0{index + 1}
                </p>
                <h3 className="text-lg md:text-xl font-bold text-text-primary mb-2">{step.title}</h3>
                <p className="text-sm md:text-base text-text-secondary">{step.description}</p>
                <p className="text-sm md:text-base text-text-primary mt-3">
                  <span className="font-semibold">{isEnglish ? 'Outcome: ' : 'Resultado: '}</span>
                  {step.outcome}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
