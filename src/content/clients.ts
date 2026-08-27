import type { StaticImageData } from 'next/image';
import AuriLogo from '../../public/assets/clients/auri-trim.png';
import AzulLogo from '../../public/assets/clients/azul-logo.png';
import BjjFanatics from '../../public/assets/clients/bjjfanatics-trim.png';
import FtdLogo from '../../public/assets/clients/ftd-trim.png';
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
  { id: 'azul', name: 'Azul', logo: AzulLogo, maxHeight: 56, maxWidth: 150 },
  { id: 'nespresso', name: 'Nespresso', logo: NespressoWordmark, scale: 1.15, maxHeight: 54, maxWidth: 176 },
  { id: 'votorantim', name: 'Votorantim Cimentos', logo: VotorantimLogo, maxHeight: 54, maxWidth: 156 },
  { id: 'ftd', name: 'FTD', logo: FtdLogo, scale: 1.2, maxHeight: 72, maxWidth: 168 },
  { id: 'vitamin-energy', name: 'Vitamin Energy', logo: VitaminEnergyLogo, maxHeight: 54, maxWidth: 160 },
  { id: 'auri', name: 'Auri', logo: AuriLogo, scale: 1.12, maxHeight: 52, maxWidth: 140 },
  { id: 'bjj-fanatics', name: 'BJJ Fanatics', logo: BjjFanatics, scale: 1.25, maxHeight: 64, maxWidth: 190 },
  { id: 'primal-queen', name: 'Primal Queen', logo: PrimalQueenLogo, maxHeight: 54, maxWidth: 156 },
];
