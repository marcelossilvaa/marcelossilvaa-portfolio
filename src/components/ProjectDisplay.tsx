'use client';
import Image from 'next/image';
import { getProjectsData } from '@/content/projects';
import { motion } from 'framer-motion';
import type { ProjectItem } from '@/types/portfolio';
import { revealCardVars, staggerContainerVars } from '@/components/FrameMotion/revealVars';
import { useMemo, useState } from 'react';
import { useLocale } from '@/i18n/LocaleProvider';
import { translations } from '@/i18n/translations';

interface ProjectCardProps {
  item: ProjectItem;
  index: number;
}

const ProjectCard = ({
  item,
  index,
  text,
}: ProjectCardProps & {
  text: {
    sections: { projects: string };
    project: { repository: string; demo: string; all: string; noResults: string };
  };
}) => {
  return (
    <motion.div
      key={item.id}
      className={`w-full flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
      variants={revealCardVars}
    >
      <div
        className={`w-full flex flex-col md:flex-row ${
          index % 2 === 0 ? 'md:flex-row-reverse' : ''
        }`}
      >
        <Image
          src={item.image}
          alt={item.title}
          className="general-hover w-full lg:w-[70%] md:w-[65%] shadow-soft border border-border-soft max-md:mb-3 rounded-2xl"
        />
        <div
          className={`flex flex-col w-full lg:w-[30%] md:w-[35%] justify-center ${
            index % 2 !== 0 ? 'items-end' : ''
          } rounded-2xl p-4 md:p-5 border border-border-soft shadow-soft backdrop-blur-sm bg-[linear-gradient(140deg,rgba(168,85,247,0.14)_0%,rgba(236,72,153,0.08)_30%,rgba(15,23,42,0.02)_100%)] dark:bg-[linear-gradient(140deg,rgba(168,85,247,0.2)_0%,rgba(236,72,153,0.12)_30%,rgba(15,23,42,0.35)_100%)]`}
        >
          <h3 className="text-xl font-bold text-text-primary">{item.title}</h3>
          <p className="text-base pb-3 text-text-secondary">{item.subTitle}</p>
          <div className="flex gap-4">
            {item.repoLink?.length > 5 ? (
              <a
                href={item.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${text.project.repository} ${item.title}`}
              >
                <button className="text-accent-primary font-medium border border-accent-primary w-28 px-2 py-1 rounded-md transition duration-300 hover:text-white hover:bg-accent-primary max-md:w-24 max-md:text-sm">
                  {text.project.repository}
                </button>
              </a>
            ) : (
              <button className="font-medium border border-border-soft w-28 px-2 py-1 rounded-md max-md:w-24 max-md:text-sm bg-surface-soft cursor-default text-text-secondary">
                {text.project.repository}
              </button>
            )}
            <a
              href={item.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${text.project.demo} ${item.title}`}
            >
              <button className="bg-accent-primary text-white border border-accent-primary w-28 p-1 rounded-md cursor-pointer transition duration-300 hover:bg-accent-secondary max-md:w-24 max-md:text-sm">
                {text.project.demo}
              </button>
            </a>
          </div>
          <div className="flex items-center flex-row flex-wrap gap-2 py-3">
            {item.technologies.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center h-full">
                <div className="flex justify-center items-center w-9 h-9">
                  <Image src={tech.image} alt={tech.name} className="w-9 max-md:w-7" />
                </div>
                <p className="text-xs md:text-sm text-text-secondary">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectDisplay() {
  const { locale } = useLocale();
  const text = translations[locale];
  const projectsData = getProjectsData(locale);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

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
              ? 'text-text-primary border-accent-primary shadow-glow'
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
                ? 'text-text-primary border-accent-primary shadow-glow'
                : 'hover:text-text-primary'
            }`}
            aria-label={`${text.sections.projects}: ${tech}`}
          >
            {tech}
          </button>
        ))}
      </div>

      <motion.div
        className="w-full flex flex-col gap-14 md:gap-16"
        variants={staggerContainerVars}
        initial="hidden"
        animate="visible"
      >
        {filteredProjects.length > 0 ? (
          filteredProjects.map((item, index) => (
            <ProjectCard key={item.id} item={item} index={index} text={text} />
          ))
        ) : (
          <p className="text-center text-text-secondary">{text.project.noResults}</p>
        )}
      </motion.div>
    </>
  );
}
