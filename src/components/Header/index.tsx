'use client';
import { dataHeader } from '../../../@helpers/data';
import { Desktop } from '../../../@helpers/icons';
export default function Header() {
  return (
    <header className="flex justify-center w-full">
      <div className="flex h-[8vh] justify-between items-center text-[15px] text-black-100 max-w-6xl w-[95%]">
        <div className="flex flex-row gap-1 items-center">
          <Desktop size={28} color="#3f433d" weight="bold" />
          <h1 className="font-bold">Marcelo S Silva</h1>
        </div>
        <ul className="flex gap-2 ">
          {dataHeader.map((dataHeader, index, array) => (
            <li key={dataHeader.id} className={index === array.length - 1 ? 'font-bold' : ''}>
              <a
                href={dataHeader.href}
                className="hover:border-b-1 transition-opacity hover:shadow-md"
              >
                {dataHeader.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
