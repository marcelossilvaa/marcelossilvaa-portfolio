'use client';
import Link from 'next/link';
import Image from 'next/image';
import { dataBanner } from '../../../@helpers/data';
import { ArrowUpRight } from '../../../@helpers/icons';
import imageBanner from '../../../public/assets/marcelo-new.jpeg';
import SplitText from '../../components/SplitText';
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export default function Banner() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  return (
    <section id="banner" className=" max-w-6xl w-[95%] py-[32px]">
      <div className="h-[8vh]"></div>
      <div className="auto-transition flex items-start justify-between gap-5 flex-col-reverse md:items-center md:flex-row">
        <div className="flex flex-col gap-2">
          <SplitText
            text="Olá, me chamo Marcelo e sou Desenvolvedor Front-End"
            className="text-2xl md:text-5xl font-bold"
            delay={50}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing={easeOutCubic}
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <p className="max-md:text-base">
            Baiano, 25 anos, graduando em Ciência da Computação com foco em desenvolvimento front
            end.
          </p>
          <div className="flex gap-2 md:gap-4">
            {dataBanner.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className={` header-links flex items-center font-bold text-sm md:text-lg ${
                  item.id === 1 ? 'text-blue-300' : ''
                }`}
                target="_blank"
              >
                {item.title}
                {item.id === 1 ? (
                  <ArrowUpRight size={22} className="text-blue-300" weight="bold" />
                ) : (
                  <ArrowUpRight size={20} color="#3f433d" weight="bold" />
                )}
              </Link>
            ))}
          </div>
        </div>
        <Image
          className="general-hover rounded-full w-[250px] md:w-[370px] shadow-xl auto-transition-image"
          src={imageBanner}
          alt=""
        />
      </div>
    </section>
  );
}
