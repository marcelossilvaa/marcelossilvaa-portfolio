import type { StaticImageData } from 'next/image';
import AuriLogo from '../../public/assets/clients/Auri-Transparent-Logo-2000x1000_b29ad931-e34a-4d8e-a1f1-ca0b161c5d01.webp';
import AzulLogo from '../../public/assets/clients/azul-logo.png';
import BjjFanatics from '../../public/assets/clients/bjjfanatics.webp';
import FtdLogo from '../../public/assets/clients/ftd.png';
import NespressoLogo from '../../public/assets/clients/Nespresso.png';
import PrimalQueenLogo from '../../public/assets/clients/Primal_Queen_Wordmark_Pink_on_Purple.webp';
import VitaminEnergyLogo from '../../public/assets/clients/vitamin-energy.webp';
import VotorantimLogo from '../../public/assets/clients/votarantim.png';

export type ClientLogoItem = {
  id: string;
  name: string;
  logo: StaticImageData | null;
};

/** Primeira linha (grid desktop): Azul → Nespresso → Votorantim → FTD; segunda: Vitamin Energy, Auri, BJJ Fanatics, Primal Queen. */
export const clientLogos: ClientLogoItem[] = [
  { id: 'azul', name: 'Azul', logo: AzulLogo },
  { id: 'nespresso', name: 'Nespresso', logo: NespressoLogo },
  { id: 'votorantim', name: 'Votorantim Cimentos', logo: VotorantimLogo },
  { id: 'ftd', name: 'FTD', logo: FtdLogo },
  { id: 'vitamin-energy', name: 'Vitamin Energy', logo: VitaminEnergyLogo },
  { id: 'auri', name: 'Auri', logo: AuriLogo },
  { id: 'bjj-fanatics', name: 'BJJ Fanatics', logo: BjjFanatics },
  { id: 'primal-queen', name: 'Primal Queen', logo: PrimalQueenLogo },
];
