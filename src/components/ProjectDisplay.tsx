'use client';
import Image from 'next/image';
import { getProjectsData } from '@/content/projects';
import type { ProjectItem } from '@/types/portfolio';
import { useEffect, useMemo, useState } from 'react';
import { useLocale } from '@/i18n/LocaleProvider';
import { translations } from '@/i18n/translations';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { ArrowUpRight } from '@phosphor-icons/react';

interface ProjectCardProps {
  item: ProjectItem;
  index: number;
}

function truncateText(value: string, maxLength = 165) {
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength).trimEnd()}...`;
}

const ProjectCard = ({
  item,
  index,
  text,
}: ProjectCardProps & {
  text: {
    sections: { projects: string };
    project: {
      demo: string;
      all: string;
      noResults: string;
      challenge: string;
      strategy: string;
      impact: string;
      featured: string;
      seeMore: string;
      seeLess: string;
    };
  };
}) => {
  return (
    <RevealOnScroll
      once={false}
      threshold={0.15}
      delayMs={Math.min(index, 6) * 90}
      className="w-full">
      <div className="w-full overflow-hidden rounded-2xl border border-border-soft shadow-soft">
        <Image
          src={item.image}
          alt={item.title}
          className="general-hover w-full aspect-video object-cover object-top rounded-none border-0 shadow-none"
        />
        <div className="flex flex-col w-full p-4 md:p-5 backdrop-blur-sm bg-[linear-gradient(140deg,rgba(168,85,247,0.14)_0%,rgba(236,72,153,0.08)_30%,rgba(15,23,42,0.02)_100%)] dark:bg-[linear-gradient(140deg,rgba(168,85,247,0.2)_0%,rgba(236,72,153,0.12)_30%,rgba(15,23,42,0.35)_100%)]">
          {item.featured && (
            <span className="futuristic-pill mb-3 text-text-primary border-accent-primary/70">
              {text.project.featured}
            </span>
          )}
          <h3 className="text-xl font-bold text-text-primary">{item.title}</h3>
          <p className="text-base text-text-secondary">{item.subTitle}</p>
          <p className="text-sm md:text-[15px] text-text-secondary pt-2 pb-3">
            {truncateText(item.impact)}
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href={item.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${text.project.demo} ${item.title}`}
            >
              <button className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 text-slate-100 border border-slate-700 whitespace-nowrap px-7 py-2.5 rounded-xl text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(124,58,237,0.6)]">
                {text.project.demo}
              </button>
            </a>
            {item.appStoreLink && (
              <a href={item.appStoreLink} target="_blank" rel="noopener noreferrer" aria-label={`App Store ${item.title}`}>
                <button className="inline-flex items-center gap-1.5 rounded-full border border-accent-primary bg-surface px-3 py-1 text-sm font-semibold text-text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-primary/12 hover:shadow-[0_0_16px_rgba(124,58,237,0.35)] dark:border-accent-primary/70 dark:bg-surface-soft/80 dark:text-slate-100 dark:hover:bg-accent-primary/25">
                  App Store
                  <ArrowUpRight size={12} weight="bold" />
                </button>
              </a>
            )}
            {item.playStoreLink && (
              <a href={item.playStoreLink} target="_blank" rel="noopener noreferrer" aria-label={`Google Play ${item.title}`}>
                <button className="inline-flex items-center gap-1.5 rounded-full border border-accent-primary bg-surface px-3 py-1 text-sm font-semibold text-text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-primary/12 hover:shadow-[0_0_16px_rgba(124,58,237,0.35)] dark:border-accent-primary/70 dark:bg-surface-soft/80 dark:text-slate-100 dark:hover:bg-accent-primary/25">
                  Google Play
                  <ArrowUpRight size={12} weight="bold" />
                </button>
              </a>
            )}
          </div>
          <div className="flex flex-wrap gap-2 py-3">
            {item.technologies.map((tech) => (
              <span key={tech.name} className="futuristic-pill text-xs md:text-sm">
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default function ProjectDisplay() {
  const { locale } = useLocale();
  const text = translations[locale];
  const projectsData = getProjectsData(locale);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [mobileProjectsExpanded, setMobileProjectsExpanded] = useState(false);

  useEffect(() => {
    setMobileProjectsExpanded(false);
  }, [selectedTech]);

  const techFilters = useMemo(() => {
    const uniqueTechs = Array.from(new Set(projectsData.flatMap((project) => project.technologies.map((tech) => tech.name))));
    return uniqueTechs;
  }, [projectsData]);

  const filteredProjects = useMemo(() => {
    if (!selectedTech) return projectsData;
    return projectsData.filter((project) =>
      project.technologies.some((tech) => tech.name === selectedTech)
    );
  }, [projectsData, selectedTech]);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        <button
          type="button"
          onClick={() => setSelectedTech(null)}
          className={`futuristic-pill transition-colors ${
            selectedTech === null
              ? '!border-accent-primary !bg-accent-primary !text-white shadow-glow'
              : 'hover:text-text-primary'
          }`}
          aria-label={text.project.all}
        >
          {text.project.all}
        </button>
        {techFilters.map((tech) => (
          <button
            key={tech}
            type="button"
            onClick={() => setSelectedTech(tech)}
            className={`futuristic-pill transition-colors ${
              selectedTech === tech
                ? '!border-accent-primary !bg-accent-primary !text-white shadow-glow'
                : 'hover:text-text-primary'
            }`}
            aria-label={`${text.sections.projects}: ${tech}`}
          >
            {tech}
          </button>
        ))}
      </div>

      <div
        id="projects-grid"
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
      >
        {filteredProjects.length > 0 ? (
          filteredProjects.map((item, index) => (
            <div
              key={item.id}
              className={
                index >= 2 && !mobileProjectsExpanded ? 'hidden w-full md:block' : 'w-full'
              }
            >
              <ProjectCard item={item} index={index} text={text} />
            </div>
          ))
        ) : (
          <p className="text-center text-text-secondary">{text.project.noResults}</p>
        )}
      </div>

      {filteredProjects.length > 2 ? (
        <div className="mt-8 flex w-full justify-center md:hidden">
          <button
            type="button"
            onClick={() => setMobileProjectsExpanded((v) => !v)}
            className="rounded-xl border border-accent-primary/60 bg-surface px-8 py-3 text-base font-semibold text-text-primary shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-primary/12 hover:shadow-[0_0_20px_rgba(124,58,237,0.35)] dark:border-accent-primary/50 dark:bg-surface-soft/80 dark:hover:bg-accent-primary/20"
            aria-expanded={mobileProjectsExpanded}
            aria-controls="projects-grid"
          >
            {mobileProjectsExpanded ? text.project.seeLess : text.project.seeMore}
          </button>
        </div>
      ) : null}
    </>
  );
}
