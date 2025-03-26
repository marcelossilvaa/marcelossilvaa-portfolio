'use client';
import { useEffect, useState } from 'react';
import { dataAcademic } from '../../../@helpers/data';
import HistoryCard from '../../components/HistoryCard';
import Title from '../../components/Tittle';

export default function AcademicEducation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('academicEducation');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="academicEducation" className="bg-blue-50 w-full flex justify-center py-5 pt-[8vh]">
      <div className="max-w-6xl w-[95%] flex justify-center flex-col items-center">
        <Title title="Formação Acadêmica" />
        <HistoryCard data={dataAcademic} isVisible={isVisible} />
      </div>
    </section>
  );
}
