'use client';

import { MotionConfig } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { getV2Sections } from '@/content/v2Content';
import { useLocale, type Locale } from '@/i18n/LocaleProvider';
import { v2Translations } from '@/i18n/v2Translations';
import { BootSequence } from './components/BootSequence';
import { HudFrame } from './components/HudFrame';
import { AvailabilitySection } from './sections/AvailabilitySection';
import { BrandsSection } from './sections/BrandsSection';
import { ContactSection } from './sections/ContactSection';
import { CoordinatesSection } from './sections/CoordinatesSection';
import { EducationSection } from './sections/EducationSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { HeroSection } from './sections/HeroSection';
import { ServicesSection } from './sections/ServicesSection';
import { SignalSection } from './sections/SignalSection';
import { SystemSection } from './sections/SystemSection';
import { ToolkitSection } from './sections/ToolkitSection';
import { WorkSection } from './sections/WorkSection';

type V2ExperienceProps = {
  /** Idioma determinado pela rota (/v2 = pt, /v2/us = en), não por localStorage. */
  locale: Locale;
};

export default function V2Experience({ locale }: V2ExperienceProps) {
  const { setLocale } = useLocale();
  const [bootDone, setBootDone] = useState(false);
  const text = v2Translations[locale];
  const sections = getV2Sections(locale);

  // Mantém o provider global alinhado à rota, o que também ajusta <html lang>.
  useEffect(() => {
    setLocale(locale);
  }, [locale, setLocale]);

  // A classe no <html> neutraliza o tema claro global enquanto /v2 está montada.
  useEffect(() => {
    document.documentElement.classList.add('v2-page');
    return () => document.documentElement.classList.remove('v2-page');
  }, []);

  const handleBootFinish = useCallback(() => setBootDone(true), []);

  return (
    // reducedMotion="user" deixa o framer-motion trocar transform/layout por
    // fade quando o sistema pede menos movimento.
    <MotionConfig reducedMotion="user">
      <div className="v2-shell">
        <BootSequence text={text} onFinish={handleBootFinish} />

        <div className="v2-atmosphere" aria-hidden="true" />
        <div className="v2-glow v2-glow--signal" aria-hidden="true" />
        <div className="v2-glow v2-glow--violet" aria-hidden="true" />

        <HudFrame sections={sections} text={text} locale={locale} />

        <main className="v2-content">
          <HeroSection locale={locale} text={text} bootDone={bootDone} />
          <SignalSection locale={locale} text={text} />
          <CoordinatesSection locale={locale} text={text} />
          <SystemSection locale={locale} text={text} />
          <ExperienceSection locale={locale} text={text} />
          <EducationSection locale={locale} text={text} />
          <BrandsSection text={text} />
          <WorkSection locale={locale} text={text} />
          <ToolkitSection locale={locale} text={text} />
          <ServicesSection locale={locale} text={text} />
          <AvailabilitySection locale={locale} text={text} />
          <ContactSection locale={locale} text={text} />
        </main>
      </div>
    </MotionConfig>
  );
}
