'use client';

import Title from '../../components/Tittle';
import { getProfileData } from '@/content/profile';
import { motion } from 'framer-motion';
import { revealSectionVars } from '@/components/FrameMotion/revealVars';
import { useLocale } from '@/i18n/LocaleProvider';
import { translations } from '@/i18n/translations';

export default function AboutMe() {
  const { locale } = useLocale();
  const profileData = getProfileData(locale);
  const text = translations[locale];

  return (
    <section id="aboutMe" className="bg-bg-secondary w-full flex justify-center border-y border-border-soft">
      <motion.div
        className="auto-transition flex flex-col items-start max-w-6xl w-[95%] py-[8vh]"
        variants={revealSectionVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
      >
        <Title title={text.sections.about} />
        <div className="flex flex-col gap-4 w-full md:w-[70%] text-text-secondary">
          {profileData.description.map((paragraph) => (
            <p key={paragraph} className="max-md:text-sm">
              {paragraph}
            </p>
          ))}
          <p className="font-marcelo text-4xl text-text-primary">{profileData.signature}</p>
        </div>
      </motion.div>
    </section>
  );
}
