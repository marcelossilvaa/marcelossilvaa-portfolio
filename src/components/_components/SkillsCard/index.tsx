import Image from 'next/image';

interface SkillsCardProps {
  data: any[];
}

export default function SkillsCard({ data }: SkillsCardProps) {
  return (
    <div className="flex  flex-col">
      <div className='flex w-full flex-wrap gap-[2%] justify-center items-center'>
      {Array.isArray(data) &&
        data.map(item => (
          
            <div
              className="flex flex-col justify-end bg-white-100 w-[23.5%] min-w-[170px] h-[170px] p-2 pl-4 rounded-md shadow-sm my-3"
              key={item.id}
            >
              <Image src={item.icon} alt={item.text} className="w-7" />
              <p className="text-base font-bold">{item.text}</p>
              {item.optionalText && <p className="text-sm text-gray-500">{item.optionalText}</p>}
            </div>
          
          
        ))}
    </div>
  </div>

  );
}
