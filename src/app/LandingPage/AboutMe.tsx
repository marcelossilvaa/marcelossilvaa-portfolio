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
    <section
      id="aboutMe"
      className="bg-bg-secondary w-full flex justify-center border-y border-border-soft">
      <motion.div
        className="auto-transition flex flex-col items-start max-w-6xl w-[95%] py-[8vh]"
        variants={revealSectionVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}>
        <Title title={text.sections.about} />
        <div className="w-full grid grid-cols-1 md:grid-cols-[1.45fr_1fr] gap-8 items-center">
          <div className="flex flex-col gap-4 text-text-secondary">
            {profileData.description.map((paragraph) => (
              <p key={paragraph} className="max-md:text-sm">
                {paragraph}
              </p>
            ))}
          </div>

          {/* <motion.div
            className="relative h-[260px] w-full hidden md:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="absolute h-44 w-44 rounded-full border border-accent-primary/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute h-60 w-60 rounded-full border border-accent-secondary/35"
              animate={{ rotate: -360 }}
              transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute h-20 w-20 rounded-full bg-gradient-to-br from-accent-primary/30 to-accent-secondary/30 blur-xl"
              animate={{ x: [0, 14, -10, 0], y: [0, -12, 9, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div> */}
        </div>
      </motion.div>
    </section>
  );
}
