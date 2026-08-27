import type { StaticImageData } from 'next/image';
import AuriLogo from '../../public/assets/clients/Auri-Transparent-Logo-2000x1000_b29ad931-e34a-4d8e-a1f1-ca0b161c5d01.webp';
import AzulLogo from '../../public/assets/clients/azul-logo.png';
import BjjFanatics from '../../public/assets/clients/bjjfanatics.webp';
import FtdLogo from '../../public/assets/clients/ftd.png';
import NespressoWordmark from '../../public/assets/clients/nespresso-wordmark-trim.png';
import PrimalQueenLogo from '../../public/assets/clients/Primal_Queen_Wordmark_Pink_on_Purple.webp';
import VitaminEnergyLogo from '../../public/assets/clients/vitamin-energy.webp';
import VotorantimLogo from '../../public/assets/clients/votarantim.png';

export type ClientLogoItem = {
  id: string;
  name: string;
  logo: StaticImageData | null;
  /** Compensa PNGs com padding extra ou wordmarks finos. */
  scale?: number;
  maxHeight?: number;
  maxWidth?: number;
};

/** Primeira linha (grid desktop): Azul → Nespresso → Votorantim → FTD; segunda: Vitamin Energy, Auri, BJJ Fanatics, Primal Queen. */
export const clientLogos: ClientLogoItem[] = [
  { id: 'azul', name: 'Azul', logo: AzulLogo, maxHeight: 44, maxWidth: 120 },
  { id: 'nespresso', name: 'Nespresso', logo: NespressoWordmark, scale: 1.28, maxHeight: 46, maxWidth: 160 },
  { id: 'votorantim', name: 'Votorantim Cimentos', logo: VotorantimLogo, maxHeight: 42, maxWidth: 130 },
  { id: 'ftd', name: 'FTD', logo: FtdLogo, maxHeight: 40, maxWidth: 110 },
  { id: 'vitamin-energy', name: 'Vitamin Energy', logo: VitaminEnergyLogo, scale: 1.05, maxHeight: 40, maxWidth: 140 },
  { id: 'auri', name: 'Auri', logo: AuriLogo, maxHeight: 34, maxWidth: 90 },
  { id: 'bjj-fanatics', name: 'BJJ Fanatics', logo: BjjFanatics, maxHeight: 38, maxWidth: 130 },
  { id: 'primal-queen', name: 'Primal Queen', logo: PrimalQueenLogo, scale: 1.08, maxHeight: 40, maxWidth: 130 },
];
