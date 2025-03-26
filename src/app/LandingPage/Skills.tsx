'use client';
import { useEffect, useState } from 'react';
import { dataSkills } from '../../../@helpers/data';
import SkillsCard from '../../components/SkillsCard';
import Title from '../../components/Tittle';
import { motion } from 'framer-motion';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById('skills');
    if (section) {
      const { top } = section.getBoundingClientRect();
      if (top < window.innerHeight && top > 0) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="skills" className="bg-white-200 w-full flex justify-center py-[8vh]">
      <div className="max-w-6xl w-[95%] flex justify-center flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Title title="Skills" />
        </motion.div>
        <div>
          <SkillsCard data={dataSkills} isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
}
