'use client';
import { useEffect, useState } from 'react';
import { dataProfessional } from '../../../@helpers/data';
import HistoryCard from '../../components/HistoryCard';
import Title from '../../components/Tittle';

export default function Professional() {
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

    const section = document.getElementById('professional');
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
    <section id="professional" className="bg-blue-50 w-full flex justify-center py-5 pb-[5vh]">
      <div className="max-w-6xl w-[95%] flex justify-center flex-col items-center">
        <Title title="Histórico Profissional" />
        <HistoryCard data={dataProfessional} isVisible={isVisible} />
      </div>
    </section>
  );
}
