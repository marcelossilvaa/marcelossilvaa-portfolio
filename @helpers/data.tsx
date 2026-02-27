import Html from '../public/icons/html-5.png';
import Javascript from '../public/icons/js.png';
import React from '../public/icons/react.png';
import Nextjs from '../public/icons/nextjs.png';
import Git from '../public/icons/git.png';
import TypeScript from '../public/icons/typescript.svg';
import Css from '../public/icons/css-3.png';
import Tailwind from '../public/icons/tailwind.png';
import Shopify from '../public/icons/shopify-t.webp';
import Hydrogen from '../public/icons/hydrogen.svg';
import Ionic from '../public/icons/ionic.svg';
import Liquid from '../public/icons/liquid.svg';

import UFS from '../public/assets/ufs.png';
import UniAmerica from '../public/assets/uniamerica.png';
import Alura from '../public/assets/alura.png';
import XPe from '../public/assets/xpe.png';
import DIO from '../public/assets/dio.png';
import Cepedi from '../public/assets/cepedi.png';

import inkPen from '../public/assets/inkPen.jpg';
import Vasta from '../public/assets/vasta.png';

import AGVeiculos from '../public/assets/projectsImage/ag-veiculos.png';
import AluraGeek from '../public/assets/projectsImage/AluraGeek.png';
import GDXConsultoria from '../public/assets/projectsImage/GDXConsultoria.png';
import inkPenSite from '../public/assets/projectsImage/inkPenSite.png';
import Webjump from '../public/assets/logo_webjump.webp';

export const dataHeader = [
  {
    id: 1,
    href: '#aboutMe',
    text: 'Sobre mim',
  },
  {
    id: 2,
    href: '#skills',
    text: 'Skills',
  },
  {
    id: 3,
    href: '#academicEducation',
    text: 'Formação',
  },
  {
    id: 4,
    href: '#projects',
    text: 'Projetos',
  },
  {
    id: 5,
    href: '#contact',
    text: 'marcelo_810@hotmail.com',
  },
];

export const dataBanner = [
  {
    id: 1,
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/marcelossilva1/',
  },
  {
    id: 2,
    title: 'GitHub',
    link: 'https://github.com/marcelossilvaa',
  },
  {
    id: 3,
    title: 'Currículo',
    link: 'https://drive.google.com/drive/folders/1ALrPuM_eH1-gyth63X7OcetRmCWdrWlY?usp=share_link',
  },
  {
    id: 4,
    title: 'Instagram',
    link: 'https://www.instagram.com/marcelossilva1/',
  },
];

export const dataSkills = [
  {
    id: 1,
    icon: Html,
    text: 'HTML',
  },
  {
    id: 2,
    icon: Css,
    text: 'CSS',
  },
  {
    id: 3,
    icon: Javascript,
    text: 'JavaScript',
  },
  {
    id: 4,
    icon: Git,
    text: 'Git e GitHub',
  },
  {
    id: 5,
    icon: TypeScript,
    text: 'TypeScript',
  },
  {
    id: 6,
    icon: Tailwind,
    text: 'TailwindCSS',
  },
  {
    id: 7,
    icon: React,
    text: 'React',
  },
  {
    id: 9,
    icon: Nextjs,
    text: 'NextJs',
  },
  {
    id: 10,
    icon: Shopify,
    text: 'Shopify',
  },
  {
    id: 11,
    icon: Liquid,
    text: 'Liquid',
  },
  {
    id: 12,
    icon: Hydrogen,
    text: 'Hydrogen',
  },
  {
    id: 13,
    icon: Ionic,
    text: 'Ionic & Capacitor',
  },
];

export const dataAcademic = [
  {
    id: 1,
    image: UFS,
    title: 'Engenharia de Petróleo',
    date: '2019 - 2022 | trancado',
    institution: 'UFS',
  },
  {
    id: 2,
    image: UniAmerica,
    title: 'Ciência da Computação',
    date: '2021 - 2025',
    institution: 'UniAmerica',
  },
  {
    id: 3,
    image: Alura,
    title: 'Formação Front-End',
    date: '2022 - 2023',
    institution: 'Alura',
  },
  {
    id: 4,
    image: XPe,
    title: 'Bootcamp React',
    date: '2023',
    institution: 'XPe',
  },
  {
    id: 5,
    image: DIO,
    title: 'Bootcamp TypeScript',
    date: '2024',
    institution: 'DIO',
  },
  {
    id: 6,
    image: Cepedi,
    title: 'Residência em Software',
    date: '2024 - 2025',
    institution: 'Cepedi',
  },
];

export const dataProfessional = [
  {
    id: 1,
    image: inkPen,
    title: 'Co Founder & Dev Front End',
    date: '2023 - 2024',
    institution: 'inkPen',
  },
  {
    id: 2,
    image: Vasta,
    title: 'Desenvolvedor Front End',
    date: '2024 - até o momento',
    institution: 'Vasta',
  },
  {
    id: 3,
    image: Webjump,
    title: 'Desenvolvedor Front End',
    date: '2025 - até o momento',
    institution: 'Webjump',
  },
];

export const projectsData = [
  {
    id: '1',
    title: 'AG Veículos',
    subTitle: 'Catálogo de concessionária',
    repoLink: '',
    demoLink: 'https://agveiculosba.com/',
    image: AGVeiculos,
    technologies: [
      {
        name: 'Shopify',
        image: Shopify,
      },
      {
        name: 'NextJs',
        image: Nextjs,
      },
      {
        name: 'Tailwind',
        image: Tailwind,
      },
    ],
  },
  {
    id: '2',
    title: 'Alura Geek',
    subTitle: 'Simulação ecommerce',
    repoLink: '',
    demoLink: 'https://alura-geek-ruby.vercel.app/',
    image: AluraGeek,
    technologies: [
      {
        name: 'React',
        image: React,
      },
      {
        name: 'Tailwind',
        image: Tailwind,
      },
    ],
  },
  {
    id: '6',
    title: 'GDX Consultoria',
    subTitle: 'Resolução de problemas aereos',
    repoLink: '',
    demoLink: 'http://www.aerodemandas.com.br/',
    image: GDXConsultoria,
    technologies: [
      {
        name: 'NextJs',
        image: Nextjs,
      },
      {
        name: 'Tailwind',
        image: Tailwind,
      },
    ],
  },
  {
    id: '7',
    title: 'inkPen',
    subTitle: 'Site de apresentação do MVP',
    repoLink: '',
    demoLink: 'http://www.inkpen.com.br/',
    image: inkPenSite,
    technologies: [
      {
        name: 'NextJs',
        image: Nextjs,
      },
      {
        name: 'Tailwind',
        image: Tailwind,
      },
    ],
  },
];
