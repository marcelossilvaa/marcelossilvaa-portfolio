import Link from 'next/link';
import Image from 'next/image';
import { dataBanner } from '../../../@helpers/data';
import { ArrowUpRight } from '../../../@helpers/icons';
import imageBanner from '../../../public/assets/marceloImage.jpg';

export default function Banner() {
  return (
    <section className="max-w-6xl w-[95%] py-[32px]">
      <div className="flex items-center justify-between gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold">
            Olá, me chamo Marcelo e sou Desenvolvedor Front-End
          </h1>
          <p>
            Baiano, 23 anos, graduando em Ciência da Computação e especialista como desenvolvedor
            Front-End.
          </p>
          <div className="flex gap-4">
            {dataBanner.map(item => (
              <Link
                key={item.id}
                href={item.link}
                className={`flex items-center font-bold hover:shadow-md ${
                  item.id === 1 ? 'text-blue-300' : ''
                }`}
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
        <Image className="flex w-[25vw] rounded-full max-w-[370px] shadow-xl" src={imageBanner} alt="" />
      </div>
    </section>
  );
}
