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
      <div className='flex w-full flex-wrap gap-[2%] justify-center items-center'>
        {Array.isArray(data) &&
          data.map(item => (
            <div
              className="flex justify-center-center flex-col w-[23.5%] min-w-[250px] rounded-md shadow-sm mb-3"
              key={item.id}
            >
              <div className="flex items-center justify-center bg-white-100 h-[24vh] my-3 rounded-md shadow-md">
                <Image src={item.image} alt={item.institution} className="w-[150px]" />
              </div>

              <p className="text-base font-bold">{item.title}</p>
              <p className="text-base">{item.date}</p>
              <p className="text-base">{item.institution}</p>
            </div>
          ))}
      </div>
    </div>
  );
}