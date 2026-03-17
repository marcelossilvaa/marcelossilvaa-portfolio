'use client';

import Title from '../../components/Tittle';
import { getProfileData } from '@/content/profile';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { useLocale } from '@/i18n/LocaleProvider';
import { translations } from '@/i18n/translations';

export default function AboutMe() {
  const { locale } = useLocale();
  const profileData = getProfileData(locale);
  const text = translations[locale];

  return (
    <section
      id="aboutMe"
      className="bg-bg-secondary w-full flex justify-center border-y border-border-soft">
      <RevealOnScroll
        className="auto-transition flex flex-col items-start max-w-6xl w-[95%] py-[6vh]"
        threshold={0.25}
        once={false}>
        <Title title={text.sections.about} />
        <div className="w-full grid grid-cols-1 md:grid-cols-[1.45fr_1fr] gap-8 items-center">
          <div className="flex flex-col gap-4 text-text-secondary">
            {profileData.description.map((paragraph) => (
              <p key={paragraph} className="max-md:text-sm">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
