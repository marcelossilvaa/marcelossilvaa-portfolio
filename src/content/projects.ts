import React from '../../public/icons/react.png';
import Nextjs from '../../public/icons/nextjs.png';
import Tailwind from '../../public/icons/tailwind.png';
import Shopify from '../../public/icons/shopify-t.webp';
import AGVeiculos from '../../public/assets/projectsImage/ag-veiculos.png';
import AluraGeek from '../../public/assets/projectsImage/AluraGeek.png';
import GDXConsultoria from '../../public/assets/projectsImage/GDXConsultoria.png';
import inkPenSite from '../../public/assets/projectsImage/inkPenSite.png';
import type { ProjectItem } from '@/types/portfolio';
import OutsetArquitetura from '../../public/assets/projectsImage/OutetArquiterura.png';
import Nodejs from '../../public/assets/node.svg';
import PostgreSQL from '../../public/assets/Postgres.png';
import Oplab from '../../public/assets/projectsImage/Oplab.png';
import SandroPrata from '../../public/assets/projectsImage/SandroPrates.png';
import UrkaApp from '../../public/assets/projectsImage/UrkaApp.png';
import PayloadLogo from '../../public/assets/payload-logo.png';
import type { Locale } from '@/i18n/LocaleProvider';

export function getProjectsData(locale: Locale): ProjectItem[] {
  const isEnglish = locale === 'en';

  return [
    {
      id: '5',
      title: 'OutsetArquitetura',
      subTitle: isEnglish ? 'Architecture CMS' : 'CMS de arquitetura',
      repoLink: '',
      demoLink: 'https://outsetarquitetura.com.br/',
      image: OutsetArquitetura,
      technologies: [
        { name: 'Next.js', image: Nextjs },
        { name: 'Tailwind', image: Tailwind },
        { name: 'Node.js', image: Nodejs },
        { name: 'PostgreSQL', image: PostgreSQL },
        { name: 'Payload', image: PayloadLogo },
      ],
    },
    {
      id: '0',
      title: 'Urka App',
      subTitle: isEnglish ? 'Electronics ecommerce' : 'Ecommerce de eletronicos',
      repoLink: '',
      demoLink: 'https://urka.vercel.app/',
      image: UrkaApp,
      technologies: [
        { name: 'Next.js', image: Nextjs },
        { name: 'Tailwind', image: Tailwind },
        { name: 'Shopify', image: Shopify },
      ],
    },
    {
      id: '1',
      title: 'AG Veículos',
      subTitle: isEnglish ? 'Dealership catalog' : 'Catálogo de concessionária',
      repoLink: '',
      demoLink: 'https://agveiculosba.com/',
      image: AGVeiculos,
      technologies: [
        { name: 'Shopify', image: Shopify },
        { name: 'Next.js', image: Nextjs },
        { name: 'Tailwind', image: Tailwind },
      ],
    },
    {
      id: '2',
      title: 'Alura Geek',
      subTitle: isEnglish ? 'Ecommerce simulation' : 'Simulação de ecommerce',
      repoLink: '',
      demoLink: 'https://alura-geek-ruby.vercel.app/',
      image: AluraGeek,
      technologies: [
        { name: 'React', image: React },
        { name: 'Tailwind', image: Tailwind },
      ],
    },
    {
      id: '3',
      title: 'GDX Consultoria',
      subTitle: isEnglish ? 'Aviation problem-solving platform' : 'Resolução de problemas aéreos',
      repoLink: '',
      demoLink: 'http://www.aerodemandas.com.br/',
      image: GDXConsultoria,
      technologies: [
        { name: 'Next.js', image: Nextjs },
        { name: 'Tailwind', image: Tailwind },
      ],
    },
    {
      id: '4',
      title: 'inkPen',
      subTitle: isEnglish ? 'App showcase website' : 'Site de apresentação de APP',
      repoLink: '',
      demoLink: 'http://www.inkpen.com.br/',
      image: inkPenSite,
      technologies: [
        { name: 'Next.js', image: Nextjs },
        { name: 'Tailwind', image: Tailwind },
      ],
    },
    {
      id: '6',
      title: 'Oplab',
      subTitle: isEnglish ? 'Dashboard for traders' : 'Dashboard voltado para traders',
      repoLink: '',
      demoLink: 'https://oplab-dash.vercel.app/',
      image: Oplab,
      technologies: [
        { name: 'Next.js', image: Nextjs },
        { name: 'Tailwind', image: Tailwind },
        { name: 'Node.js', image: Nodejs },
      ],
    },
    {
      id: '7',
      title: 'Sandro Portfolio',
      subTitle: isEnglish ? 'Portfolio for a photographer' : 'Apresentação de portfólio de fotógrafo',
      repoLink: '',
      demoLink: 'https://sandro-portfolio.vercel.app/',
      image: SandroPrata,
      technologies: [
        { name: 'Next.js', image: Nextjs },
        { name: 'Tailwind', image: Tailwind },
      ],
    },
  ];
}
