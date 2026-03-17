'use client';
import { getSkillsData } from '@/content/skills';
import SkillsCard from '../../components/SkillsCard';
import Title from '../../components/Tittle';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { useLocale } from '@/i18n/LocaleProvider';
import { translations } from '@/i18n/translations';

export default function Skills() {
  const { locale } = useLocale();
  const text = translations[locale];
  const skillsData = getSkillsData(locale);

  return (
    <section id="skills" className="bg-bg-primary w-full flex justify-center py-[8vh]">
      <RevealOnScroll
        className="max-w-6xl w-[95%] flex justify-center flex-col items-center"
        threshold={0.2}
        once={false}>
        <RevealOnScroll threshold={0.25} once={false}>
          <Title title={text.sections.skills} />
        </RevealOnScroll>
        <SkillsCard data={skillsData} />
      </RevealOnScroll>
    </section>
  );
}
