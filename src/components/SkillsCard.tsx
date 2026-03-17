import Image, { type StaticImageData } from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import type { SkillItem } from '@/types/portfolio';
import { useEffect, useState, type ElementType } from 'react';
import { useLocale } from '@/i18n/LocaleProvider';
import { translations } from '@/i18n/translations';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { ChartBar, ChatTeardropText, GitPullRequest, Target } from '@phosphor-icons/react';
import CursorLogo from '../../public/assets/Cursor_Vector_Logo.png';
import ClaudeLogo from '../../public/assets/claude-color.png';
import CopilotLogo from '../../public/assets/GitHub-Copilot-logo-1040x650-1.png';
import AntigravityLogo from '../../public/assets/google-antigravity-logo-icon-png.webp';
import N8nLogo from '../../public/assets/n8n-color.png';
import Ga4Logo from '../../public/assets/Google-Analytics-Logo.png';

interface SkillsCardProps {
  data: SkillItem[];
}

export default function SkillsCard({ data }: SkillsCardProps) {
  const { locale } = useLocale();
  const text = translations[locale];
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);
  const isEnglish = locale === 'en';

  const aiCapabilities: { label: string; Icon?: ElementType; logo?: StaticImageData }[] = isEnglish
    ? [
        { label: 'Cursor', logo: CursorLogo },
        { label: 'Claude Code', logo: ClaudeLogo },
        { label: 'GitHub Copilot', logo: CopilotLogo },
        { label: 'Antigravity', logo: AntigravityLogo },
        { label: 'n8n', logo: N8nLogo },
        { label: 'AI-assisted code review', Icon: GitPullRequest },
        { label: 'Prompt engineering', Icon: ChatTeardropText },
      ]
    : [
        { label: 'Cursor', logo: CursorLogo },
        { label: 'Claude Code', logo: ClaudeLogo },
        { label: 'GitHub Copilot', logo: CopilotLogo },
        { label: 'Antigravity', logo: AntigravityLogo },
        { label: 'n8n', logo: N8nLogo },
        { label: 'Code review assistido por IA', Icon: GitPullRequest },
        { label: 'Prompt engineering', Icon: ChatTeardropText },
      ];

  const croCapabilities: { label: string; Icon?: ElementType; logo?: StaticImageData }[] = [
    { label: 'GA4', logo: Ga4Logo },
    { label: 'Adobe Target', Icon: Target },
    { label: 'Adobe Analytics', Icon: ChartBar },
  ];

  useEffect(() => {
    if (!selectedSkill) return;

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedSkill(null);
      }
    };

    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, [selectedSkill]);

  const groupDefinitions = [
    {
      id: 'headless',
      title: isEnglish ? 'Headless architecture' : 'Arquitetura headless',
      predicate: (item: SkillItem) =>
        ['Next.js', 'TypeScript', 'React', 'TailwindCSS', 'Hydrogen', 'Payload CMS'].includes(item.text),
    },
    {
      id: 'ecommerce',
      title: isEnglish ? 'E-commerce ecosystem' : 'Ecossistema e-commerce',
      predicate: (item: SkillItem) => ['Shopify', 'Liquid', 'Ionic & Capacitor'].includes(item.text),
    },
  ];

  return (
    <>
      <div className="w-full mt-6 space-y-4">
        {groupDefinitions.map((group, index) => {
          const groupedSkills = data.filter(group.predicate);
          if (groupedSkills.length === 0) return null;

          return (
            <RevealOnScroll
              key={group.id}
              once={false}
              threshold={0.2}
              delayMs={index * 80}
              className="w-full"
            >
              <article className="futuristic-card rounded-2xl p-4 md:p-5">
                <h3 className="text-base md:text-lg font-bold text-text-primary mb-3">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {groupedSkills.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className="futuristic-pill hover:text-text-primary inline-flex items-center gap-2"
                      onClick={() => setSelectedSkill(item)}
                      aria-label={`Abrir detalhes da skill ${item.text}`}
                    >
                      <Image src={item.icon} alt={item.text} className="w-4 h-4 object-contain" />
                      <span>{item.text}</span>
                    </button>
                  ))}
                </div>
              </article>
            </RevealOnScroll>
          );
        })}

        <RevealOnScroll once={false} threshold={0.2} delayMs={160} className="w-full">
          <article className="futuristic-card rounded-2xl p-4 md:p-5">
            <h3 className="text-base md:text-lg font-bold text-text-primary mb-3">
              {isEnglish ? 'Applied AI and automation' : 'IA aplicada e automação'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {aiCapabilities.map(({ label, Icon, logo }) => (
                <span key={label} className="futuristic-pill inline-flex items-center gap-1.5">
                  {logo ? (
                    <Image src={logo} alt={label} className="w-3.5 h-3.5 rounded-sm object-cover" />
                  ) : Icon ? (
                    <Icon size={14} weight="bold" />
                  ) : null}
                  {label}
                </span>
              ))}
            </div>
          </article>
        </RevealOnScroll>

        <RevealOnScroll once={false} threshold={0.2} delayMs={240} className="w-full">
          <article className="futuristic-card rounded-2xl p-4 md:p-5">
            <h3 className="text-base md:text-lg font-bold text-text-primary mb-3">
              {isEnglish ? 'CRO and analytics' : 'CRO e analytics'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {croCapabilities.map(({ label, Icon, logo }) => (
                <span key={label} className="futuristic-pill inline-flex items-center gap-1.5">
                  {logo ? (
                    <Image src={logo} alt={label} className="w-3.5 h-3.5 rounded-sm object-cover" />
                  ) : Icon ? (
                    <Icon size={14} weight="bold" />
                  ) : null}
                  {label}
                </span>
              ))}
            </div>
          </article>
        </RevealOnScroll>
      </div>

      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSkill(null)}
          >
            <motion.article
              className="w-full max-w-xl futuristic-card rounded-2xl p-6 md:p-7"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <Image src={selectedSkill.icon} alt={selectedSkill.text} className="w-10 h-10" />
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">{selectedSkill.text}</h3>
                    <p className="text-sm text-text-secondary">{selectedSkill.category}</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="futuristic-pill hover:text-text-primary"
                  onClick={() => setSelectedSkill(null)}
                >
                  {text.skills.close}
                </button>
              </div>

              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span className="futuristic-pill">{selectedSkill.level}</span>
                <span className="futuristic-pill">{selectedSkill.experience}</span>
              </div>

              <p className="text-text-secondary mb-4">{selectedSkill.description}</p>

              <div className="flex flex-wrap gap-2">
                {selectedSkill.highlights.map((highlight) => (
                  <span key={highlight} className="futuristic-pill">
                    {highlight}
                  </span>
                ))}
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
