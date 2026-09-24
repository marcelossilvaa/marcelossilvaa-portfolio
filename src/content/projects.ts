import React from '../../public/icons/react.png';
import Nextjs from '../../public/icons/nextjs.png';
import Tailwind from '../../public/icons/tailwind.png';
import Shopify from '../../public/icons/shopify-t.webp';
import Liquid from '../../public/icons/liquid.svg';
import TypeScript from '../../public/icons/typescript.svg';
import Firebase from '../../public/icons/firebase.svg';
import AGVeiculos from '../../public/assets/projectsImage/ag-veiculos.png';
import AluraGeek from '../../public/assets/projectsImage/AluraGeek.png';
import GDXConsultoria from '../../public/assets/projectsImage/GDXConsultoria.png';
import inkPenSite from '../../public/assets/projectsImage/inkPenSite.png';
import type { ProjectItem } from '@/types/portfolio';
import OutsetArquitetura from '../../public/assets/projectsImage/OutetArquiterura.png';
import Nodejs from '../../public/assets/node.svg';
import PostgreSQL from '../../public/assets/Postgres.png';
import OplabDash from '../../public/assets/projectsImage/oplab-dash.png';
import SaasSolar from '../../public/assets/projectsImage/saas-solar.png';
import ModelGrid from '../../public/assets/projectsImage/model-grid.png';
import CotacaoAutomation from '../../public/assets/projectsImage/cotacao-automation.png';
import SandroPrata from '../../public/assets/projectsImage/SandroPrates.png';
import UrkaApp from '../../public/assets/projectsImage/UrkaApp.png';
import BjjFanatics from '../../public/assets/Bjj-fanatics.png';
import PayloadLogo from '../../public/assets/payload-logo.png';
import type { Locale } from '@/i18n/LocaleProvider';

export function getProjectsData(locale: Locale): ProjectItem[] {
  const isEnglish = locale === 'en';

  return [
    {
      id: '9',
      title: 'Helix.Solar',
      subTitle: isEnglish
        ? 'Full-stack SaaS CRM for solar energy companies'
        : 'SaaS full stack de CRM para empresas de energia solar',
      challenge: isEnglish
        ? 'Solar operators needed a single product to manage leads, proposals, installations and support — not scattered spreadsheets.'
        : 'Operadores solares precisavam de um produto único para leads, propostas, instalações e atendimento — não planilhas espalhadas.',
      strategy: isEnglish
        ? 'Built end-to-end with Next.js, Node.js and PostgreSQL: auth, CRM pipelines, dashboards and AI-assisted workflows wired to business metrics from day one.'
        : 'Construí ponta a ponta com Next.js, Node.js e PostgreSQL: auth, pipelines de CRM, dashboards e fluxos com IA ligados a métricas de negócio desde o dia um.',
      impact: isEnglish
        ? 'A shippable SaaS operators can run daily — with conversion-oriented landing pages and a codebase ready to scale features and experiments.'
        : 'Um SaaS publicável que o time opera no dia a dia — com landing orientada a conversão e base pronta para escalar features e experimentos.',
      featured: true,
      repoLink: '',
      demoLink: 'https://saas-solar.vercel.app/',
      image: SaasSolar,
      technologies: [
        { name: 'Next.js', image: Nextjs },
        { name: 'React', image: React },
        { name: 'TypeScript', image: TypeScript },
        { name: 'Node.js', image: Nodejs },
        { name: 'PostgreSQL', image: PostgreSQL },
        { name: 'Tailwind', image: Tailwind },
      ],
    },
    {
      id: '6',
      title: 'StatTrade',
      subTitle: isEnglish
        ? 'Full-stack trading analytics platform for B3 options'
        : 'Plataforma full stack de analytics para opções na B3',
      challenge: isEnglish
        ? 'Traders needed dense market data views without sacrificing responsiveness or readability on critical screens.'
        : 'Traders precisavam de visualizações densas de mercado sem sacrificar responsividade ou legibilidade em telas críticas.',
      strategy: isEnglish
        ? 'Structured dashboard modules with performant rendering, clear hierarchy and full-stack delivery — front-end, APIs and data views designed for daily use.'
        : 'Estruturei módulos de dashboard com renderização performática, hierarquia clara e entrega full stack — front-end, APIs e visões de dados pensadas para uso diário.',
      impact: isEnglish
        ? 'More readable analytics flow, reduced friction in portfolio tracking and a product surface ready for new market modules.'
        : 'Leitura analítica mais fluida, menor fricção no acompanhamento de carteira e uma superfície de produto pronta para novos módulos.',
      featured: true,
      repoLink: '',
      demoLink: 'https://oplab-dash.vercel.app/',
      image: OplabDash,
      technologies: [
        { name: 'Next.js', image: Nextjs },
        { name: 'React', image: React },
        { name: 'TypeScript', image: TypeScript },
        { name: 'Tailwind', image: Tailwind },
        { name: 'Node.js', image: Nodejs },
      ],
    },
    {
      id: '10',
      title: 'Model GRID',
      subTitle: isEnglish
        ? 'Full-stack grid bot with SEO-first landing and CRO hooks'
        : 'Bot de grid full stack com LP SEO-first e ganchos de CRO',
      challenge: isEnglish
        ? 'Launch a crypto grid-trading product where the landing page had to rank, explain value fast and convert technical users.'
        : 'Lançar um produto de grid trading onde a landing precisava ranquear, explicar valor rápido e converter usuários técnicos.',
      strategy: isEnglish
        ? 'Combined a conversion-focused LP (technical SEO, clear CTAs, social proof blocks) with a full-stack control panel — auth, settings, calculators and price alerts.'
        : 'Combinei uma LP orientada a conversão (SEO técnico, CTAs claros, blocos de prova) com painel full stack — auth, configurações, calculadoras e alertas de preço.',
      impact: isEnglish
        ? 'Higher-intent traffic meets a product that explains, converts and retains — analytics wired to funnel steps from first visit to activation.'
        : 'Tráfego de maior intenção encontra um produto que explica, converte e retém — analytics ligados ao funil da primeira visita à ativação.',
      featured: true,
      repoLink: '',
      demoLink: 'https://model-grid.vercel.app/',
      image: ModelGrid,
      technologies: [
        { name: 'Next.js', image: Nextjs },
        { name: 'React', image: React },
        { name: 'TypeScript', image: TypeScript },
        { name: 'Node.js', image: Nodejs },
        { name: 'Tailwind', image: Tailwind },
      ],
    },
    {
      id: '8',
      title: 'BJJ Fanatics',
      subTitle: isEnglish
        ? 'Global Shopify ecommerce + mobile streaming app'
        : 'Ecommerce global Shopify + app mobile de streaming',
      challenge: isEnglish
        ? 'Scale a high-traffic ecommerce operation while supporting a streaming app experience for digital courses.'
        : 'Escalar uma operação de ecommerce com alto tráfego mantendo uma experiência sólida no app de streaming de cursos.',
      strategy: isEnglish
        ? 'Developed storefront features in Shopify Liquid and app modules with React, Tailwind, and TypeScript, including mobile workflows with Android Studio and Xcode, backed by Node.js services integrated with Firebase.'
        : 'Atuei no storefront em Shopify Liquid e no app com React, Tailwind e TypeScript, incluindo fluxos mobile com Android Studio e Xcode, com serviços backend em Node.js integrados ao Firebase.',
      impact: isEnglish
        ? 'Improved delivery velocity across web and mobile app surfaces, ensuring reliable publishing and streaming experiences while scaling features continuously.'
        : 'Aumentei a velocidade de entrega entre web e app mobile, garantindo experiências confiáveis de compra e streaming com evolução contínua de funcionalidades.',
      featured: true,
      repoLink: '',
      demoLink: 'https://bjjfanatics.com/',
      appStoreLink: 'https://apps.apple.com/us/app/bjj-fanatics/id1530956257',
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.infinixsoft.bjj&hl=pt',
      image: BjjFanatics,
      technologies: [
        { name: 'Shopify', image: Shopify },
        { name: 'Liquid', image: Liquid },
        { name: 'React', image: React },
        { name: 'Tailwind', image: Tailwind },
        { name: 'TypeScript', image: TypeScript },
        { name: 'Android Studio', image: TypeScript },
        { name: 'Xcode', image: TypeScript },
        { name: 'Node.js', image: Nodejs },
        { name: 'Firebase', image: Firebase },
      ],
    },
    {
      id: '11',
      title: isEnglish ? 'Quote Automation' : 'Cotação Automation',
      subTitle: isEnglish
        ? 'Full-stack price monitoring via WhatsApp and Telegram'
        : 'Monitoramento de preços full stack via WhatsApp e Telegram',
      challenge: isEnglish
        ? 'Teams needed automated price alerts across channels without manual polling or fragmented tools.'
        : 'Times precisavam de alertas automatizados de preço em múltiplos canais, sem polling manual ou ferramentas fragmentadas.',
      strategy: isEnglish
        ? 'Built a full-stack automation product: authenticated dashboard, notification rules, channel integrations and monitoring pipelines designed for reliable daily operation.'
        : 'Construí um produto de automação full stack: painel autenticado, regras de notificação, integrações de canal e pipelines de monitoramento pensados para operação diária confiável.',
      impact: isEnglish
        ? 'Faster reaction to market moves with a product surface teams can configure without touching code.'
        : 'Reação mais rápida a movimentos de mercado com uma superfície que o time configura sem mexer em código.',
      featured: true,
      repoLink: '',
      demoLink: 'https://cotacao-automation.vercel.app/',
      image: CotacaoAutomation,
      technologies: [
        { name: 'Next.js', image: Nextjs },
        { name: 'React', image: React },
        { name: 'TypeScript', image: TypeScript },
        { name: 'Node.js', image: Nodejs },
        { name: 'Tailwind', image: Tailwind },
      ],
    },
    {
      id: '5',
      title: 'OutsetArquitetura',
      subTitle: isEnglish ? 'Architecture CMS' : 'CMS de arquitetura',
      challenge: isEnglish
        ? 'The client needed autonomy to publish content without sacrificing performance and SEO.'
        : 'O cliente precisava de autonomia editorial sem comprometer performance e SEO.',
      strategy: isEnglish
        ? 'I built a headless architecture with Next.js, Payload CMS, Node.js, and PostgreSQL, focused on scalable content modeling and fast rendering.'
        : 'Estruturei uma arquitetura headless com Next.js, Payload CMS, Node.js e PostgreSQL, focada em modelagem escalável e renderização rápida.',
      impact: isEnglish
        ? 'Faster publication workflow, technical flexibility for growth, and a solid foundation for future marketing experiments.'
        : 'Publicação mais ágil, flexibilidade técnica para evolução e base sólida para futuras iniciativas de marketing.',
      featured: true,
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
      challenge: isEnglish
        ? 'Improve product discovery and reduce friction throughout the buying flow.'
        : 'Melhorar descoberta de produtos e reduzir fricção ao longo da jornada de compra.',
      strategy: isEnglish
        ? 'Implemented a modular front-end in Next.js integrated with Shopify, prioritizing responsive UX and reusable conversion-oriented components.'
        : 'Implementei um front-end modular em Next.js integrado ao Shopify, priorizando UX responsiva e componentes reutilizáveis orientados a conversão.',
      impact: isEnglish
        ? 'More consistent storefront experience and easier iteration of commercial pages and offers.'
        : 'Experiência de vitrine mais consistente e maior velocidade para iterar páginas comerciais e ofertas.',
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
      challenge: isEnglish
        ? 'Present a large inventory clearly while keeping navigation intuitive on mobile.'
        : 'Exibir grande volume de veículos com clareza e navegação intuitiva no mobile.',
      strategy: isEnglish
        ? 'Designed listing and detail templates focused on scanning, filter clarity, and faster route transitions.'
        : 'Projetei templates de listagem e detalhe com foco em escaneabilidade, clareza de filtros e transições rápidas.',
      impact: isEnglish
        ? 'Higher quality browsing flow and stronger trust perception for lead generation pages.'
        : 'Fluxo de navegação mais fluido e melhor percepção de confiança nas páginas de geração de lead.',
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
      challenge: isEnglish
        ? 'Build an educational e-commerce simulation with consistent component behavior.'
        : 'Criar uma simulação de e-commerce educacional com consistência de componentes.',
      strategy: isEnglish
        ? 'Applied reusable React components and utility-first styling to keep the UI predictable and easy to evolve.'
        : 'Apliquei componentes reutilizáveis em React e estilo utility-first para manter a UI previsível e fácil de evoluir.',
      impact: isEnglish
        ? 'Cleaner structure for feature evolution and better onboarding for contributors.'
        : 'Estrutura mais limpa para evolução de features e melhor onboarding de quem contribui no projeto.',
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
      challenge: isEnglish
        ? 'Translate a niche service offering into a trustworthy digital product.'
        : 'Traduzir uma oferta de serviço especializada em um produto digital confiável.',
      strategy: isEnglish
        ? 'Built a clear information architecture with performance-focused pages and objective user paths.'
        : 'Estruturei arquitetura de informação clara com páginas performáticas e jornadas objetivas para o usuário.',
      impact: isEnglish
        ? 'Improved clarity of value proposition and easier lead capture through focused pages.'
        : 'Maior clareza na proposta de valor e melhor captura de interesse por meio de páginas focadas.',
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
      challenge: isEnglish
        ? 'Showcase an app MVP clearly for stakeholders and potential users.'
        : 'Apresentar um MVP de app com clareza para stakeholders e potenciais usuários.',
      strategy: isEnglish
        ? 'Created a presentation-focused front-end with mobile-first adaptation and concise storytelling blocks.'
        : 'Desenvolvi um front-end de apresentação com adaptação mobile-first e blocos de narrativa objetiva.',
      impact: isEnglish
        ? 'Better communication of product vision and stronger support for commercial conversations.'
        : 'Melhor comunicação da visão do produto e mais apoio para conversas comerciais.',
      repoLink: '',
      demoLink: 'http://www.inkpen.com.br/',
      image: inkPenSite,
      technologies: [
        { name: 'Next.js', image: Nextjs },
        { name: 'Tailwind', image: Tailwind },
      ],
    },
    {
      id: '7',
      title: 'Sandro Portfolio',
      subTitle: isEnglish ? 'Portfolio for a photographer' : 'Apresentação de portfólio de fotógrafo',
      challenge: isEnglish
        ? 'Balance visual storytelling with loading performance for image-heavy pages.'
        : 'Equilibrar narrativa visual com performance de carregamento em páginas com muitas imagens.',
      strategy: isEnglish
        ? 'Optimized media rendering and crafted lightweight UI composition focused on visual impact.'
        : 'Otimizei renderização de mídia e montei uma composição leve de UI focada em impacto visual.',
      impact: isEnglish
        ? 'Stronger visual identity online and smoother navigation experience.'
        : 'Fortalecimento da identidade visual online e navegação mais fluida.',
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
