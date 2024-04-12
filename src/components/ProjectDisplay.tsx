'use client'
import Image, { StaticImageData } from 'next/image';
import { projectsData } from '../../@helpers/data';
import { motion } from 'framer-motion';

interface Technology {
  image: StaticImageData;
  name: string;
}

interface Project {
  id: string;
  image: StaticImageData;
  title: string;
  subTitle: string;
  repoLink: string;
  demoLink: string;
  technologies: Technology[];
}

interface ProjectCardProps {
  item: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ item, index }) => {
  const variants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? '-20%' : '20%' },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.div
      key={item.id}
      className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
      variants={variants}
    >
      <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
        <Image src={item.image} alt={item.title} className='general-hover w-full md:w-[70%] shadow-black shadow-lg max-md:mb-3 rounded-xl' />
        <div className={`flex flex-col w-full md:w-[30%] justify-center ${index % 2 !== 0 ? 'items-end' : ''}`}>
          <h1 className='text-xl font-bold'>{item.title}</h1>
          <p className='text-base pb-2'>{item.subTitle}</p>
          <div className='flex gap-4'>
            <a href={item.repoLink} target="_blank">
              <button className="text-blue-300 font-medium border border-blue-300 w-28 px-2 py-1 transition duration-300 hover:text-white hover:bg-blue-600 max-md:w-24 max-md:text-sm">
                Repositório
              </button>
            </a>
            <a href={item.demoLink} target="_blank">
              <button className="bg-blue-300 text-white border border-blue-300 w-28 p-1 cursor-pointer transition duration-300 hover:bg-blue-200 hover:text-blue-120 max-md:w-24 max-md:text-sm">
                Ver demo
              </button>
            </a>
          </div>
          <div className='flex items-center flex-row gap-2 py-2'>
            {item.technologies.map((tech, techIndex) => (
              <div key={techIndex} className='flex flex-col items-center h-full'>
                <div className='flex justify-center items-center w-9 h-9'>
                  <Image src={tech.image} alt={tech.name} className='w-9 max-md:w-7' />
                </div>
                <p className='text-sm'>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectDisplay() {
  return (
    <div className='flex flex-col gap-4 md:gap-16'>
      {projectsData.map((item, index) => (
        <ProjectCard key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}