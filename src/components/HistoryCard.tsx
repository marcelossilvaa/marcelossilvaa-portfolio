import Image from 'next/image';
import type { StaticImageData } from 'next/image';

type HistoryCardItem = {
  id: number;
  image: StaticImageData;
  title: string;
  date: string;
  institution: string;
};

interface HistoryCardProps {
  data: HistoryCardItem[];
}

export default function HistoryCard({ data }: HistoryCardProps) {

  return (
    <div className="flex w-full">
      <div className='flex w-full flex-wrap gap-[4%] justify-center items-center'>
        {Array.isArray(data) &&
          data.map(item => {
            return (
              <div
                className="general-hover flex justify-center flex-col w-[30%] min-w-[250px] mb-3 max-md:min-w-[47%]"
                key={item.id}
              >
                <div className="flex items-center justify-center bg-white-100 h-[24vh] my-3 rounded-md shadow-md max-md:h-[15vh]">
                  <Image src={item.image} alt={item.institution} className="w-[150px] max-md:w-[100px]" />
                </div>

                <p className="text-base font-bold max-md:text-sm">{item.title}</p>
                <p className="text-base max-md:text-sm">{item.date}</p>
                <p className="text-base max-md:text-sm">{item.institution}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
