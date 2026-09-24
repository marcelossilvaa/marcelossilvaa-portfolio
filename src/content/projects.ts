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
import ModelGridCrm from '../../public/assets/projectsImage/modelgrid-crm.png';
import CotacaoAutomation from '../../public/assets/projectsImage/cotacao-automation.png';
import SandroPrata from '../../public/assets/projectsImage/SandroPrates.png';
import UrkaApp from '../../public/assets/projectsImage/UrkaApp.png';
import BjjFanatics from '../../public/assets/Bjj-fanatics.png';
import PrimalQueen from '../../public/assets/projectsImage/primal-queen.png';
import PayloadLogo from '../../public/assets/payload-logo.png';
import type { Locale } from '@/i18n/LocaleProvider';

export function getProjectsData(locale: Locale): ProjectItem[] {
  const isEnglish = locale === 'en';

  return [
    {
      id: '9',
      title: 'Solar',
      subTitle: isEnglish
        ? 'Full-stack SaaS for solar ops, from quote to installation'
        : 'SaaS full stack para operação solar, do orçamento à instalação',
      challenge: isEnglish
        ? 'Solar operators needed one place for projects, quotes, work orders, inventory and finance instead of scattered tools.'
        : 'Operadores solares precisavam de um lugar só para projetos, orçamentos, OS, estoque e financeiro, sem ferramentas espalhadas.',
      strategy: isEnglish
        ? 'Built end-to-end with Next.js, TypeScript and PostgreSQL: free-tier board, operational modules and a conversion-oriented marketing surface on Vercel.'
        : 'Construí ponta a ponta com Next.js, TypeScript e PostgreSQL: quadro gratuito, módulos operacionais e superfície de marketing orientada a conversão na Vercel.',
      impact: isEnglish
        ? 'A shippable SaaS teams can start free and grow into, with funnel clarity from first visit to activation.'
        : 'Um SaaS publicável que o time começa grátis e escala, com clareza de funil da primeira visita à ativação.',
      featured: true,
      repoLink: '',
      demoLink: 'https://saas-solar-one.vercel.app/',
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
      id: '12',
      title: 'ModelGrid CRM',
      subTitle: isEnglish
        ? 'Full-stack admin CRM for solar sales and site content'
        : 'CRM administrativo full stack para vendas solares e conteúdo do site',
      challenge: isEnglish
        ? 'The commercial team needed proposals, quotes, leads and website CMS in one operational panel, without leaving the sales workflow.'
        : 'O time comercial precisava de propostas, cotações, leads e CMS do site em um painel operacional, sem sair do fluxo de vendas.',
      strategy: isEnglish
        ? 'Delivered a Next.js + TypeScript + PostgreSQL CRM on Vercel: overview dashboards, quote pipelines, multi-branch profiles and editable site content modules.'
        : 'Entreguei um CRM em Next.js + TypeScript + PostgreSQL na Vercel: visão geral, pipelines de cotação, perfis/filiais e módulos editáveis do conteúdo do site.',
      impact: isEnglish
        ? 'Sales and content operations in one full-stack product, with metrics, shortcuts and daily workflows wired to the business.'
        : 'Operação comercial e de conteúdo em um produto full stack, com métricas, atalhos e rotinas diárias ligadas ao negócio.',
      featured: true,
      repoLink: '',
      image: ModelGridCrm,
      technologies: [
        { name: 'Next.js', image: Nextjs },
        { name: 'React', image: React },
        { name: 'TypeScript', image: TypeScript },
        { name: 'PostgreSQL', image: PostgreSQL },
        { name: 'Tailwind', image: Tailwind },
      ],
    },
    {
      id: '6',
      title: 'StatTrade',
      subTitle: isEnglish
        ? 'Private full-stack platform for B3 market, portfolio and options'
        : 'Plataforma full stack particular para mercado B3, carteira e opções',
      challenge: isEnglish
        ? 'Give traders a single dark-mode cockpit for rankings, volume, portfolio, options chains and watchlists: dense data without losing clarity.'
        : 'Dar aos traders um cockpit dark-mode único para rankings, volume, carteira, cadeia de opções e favoritos: dados densos sem perder clareza.',
      strategy: isEnglish
        ? 'Built a full-stack dashboard with Next.js and TypeScript: Mercado snapshots, Carteira, Opções (PUT/CALL + chain), Delta screener, news/calendar and Favoritos with sparklines, plus performant tables and live API status.'
        : 'Construí um dashboard full stack com Next.js e TypeScript: visão de Mercado, Carteira, Opções (PUT/CALL + chain), screener Delta, notícias/calendário e Favoritos com sparklines, além de tabelas performáticas e status de API ao vivo.',
      impact: isEnglish
        ? 'A private product operators can use daily: market scan, options analysis and watchlist in one responsive interface.'
        : 'Um produto particular para uso diário: leitura de mercado, análise de opções e watchlist em uma interface responsiva.',
      featured: true,
      repoLink: '',
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
      title: 'ModelGrid',
      subTitle: isEnglish
        ? 'High-conversion solar LP with SEO and full-stack delivery'
        : 'LP solar de alta conversão com SEO e entrega full stack',
      challenge: isEnglish
        ? 'Turn a local solar business into a digital acquisition channel: rank for high-intent searches and convert visitors into quote requests.'
        : 'Transformar um negócio local de energia solar em canal de aquisição digital: ranquear buscas de alta intenção e converter visitas em pedidos de orçamento.',
      strategy: isEnglish
        ? 'Built an SEO-first, CRO-oriented landing with clear CTAs, social proof, savings simulator hooks and performance-focused Next.js delivery.'
        : 'Construí uma landing SEO-first e orientada a CRO, com CTAs claros, prova social, ganchos de simulador de economia e entrega Next.js focada em performance.',
      impact: isEnglish
        ? 'A conversion-ready surface for Vitória da Conquista & region, with technical SEO, funnel clarity and a stack ready to iterate experiments.'
        : 'Uma superfície pronta para converter em Vitória da Conquista e região, com SEO técnico, clareza de funil e stack pronta para iterar experimentos.',
      featured: true,
      repoLink: '',
      demoLink: 'https://www.modelgrid.com.br/',
      image: ModelGrid,
      technologies: [
        { name: 'Next.js', image: Nextjs },
        { name: 'React', image: React },
        { name: 'TypeScript', image: TypeScript },
        { name: 'Tailwind', image: Tailwind },
      ],
    },
    {
      id: '8',
      title: 'BJJ Fanatics',
      subTitle: isEnglish
        ? 'Global Shopify ecommerce & CRO consulting and A/B tests'
        : 'Ecommerce global Shopify & consultoria CRO e testes A/B',
      challenge: isEnglish
        ? 'Scale a high-traffic ecommerce and streaming app while improving conversion with disciplined experimentation.'
        : 'Escalar um ecommerce e app de streaming de alto tráfego enquanto melhora conversão com experimentação disciplinada.',
      strategy: isEnglish
        ? 'Built storefront and app surfaces (Shopify Liquid, React, TypeScript) and led CRO consulting, running A/B tests and experiment ops with Shoplift on the commercial funnel.'
        : 'Atuei no storefront e no app (Shopify Liquid, React, TypeScript) e na consultoria de CRO, com testes A/B e operação de experimentos com Shoplift no funil comercial.',
      impact: isEnglish
        ? 'Faster product delivery across web/mobile plus a conversion practice backed by live A/B evidence, not guesswork.'
        : 'Entrega mais rápida entre web/mobile e uma prática de conversão sustentada por evidência de testes A/B, não por achismo.',
      featured: true,
      repoLink: '',
      demoLink: 'https://bjjfanatics.com/',
      appStoreLink: 'https://apps.apple.com/us/app/bjj-fanatics/id1530956257',
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.infinixsoft.bjj&hl=pt',
      image: BjjFanatics,
      technologies: [
        { name: 'Shopify', image: Shopify },
        { name: 'Liquid', image: Liquid },
        { name: 'Shoplift', image: Shopify },
        { name: 'React', image: React },
        { name: 'Tailwind', image: Tailwind },
        { name: 'TypeScript', image: TypeScript },
        { name: 'Node.js', image: Nodejs },
        { name: 'Firebase', image: Firebase },
      ],
    },
    {
      id: '13',
      title: 'Primal Queen',
      subTitle: isEnglish
        ? 'Shopify CRO consulting: development and A/B experimentation'
        : 'Consultoria CRO em Shopify: desenvolvimento e experimentação A/B',
      challenge: isEnglish
        ? 'A high-intent DTC storefront needed faster iteration on offers, messaging and funnel steps without slowing the commercial calendar.'
        : 'Uma storefront DTC de alta intenção precisava iterar ofertas, messaging e etapas de funil sem travar o calendário comercial.',
      strategy: isEnglish
        ? 'Provided development and CRO consulting: hypothesis-driven A/B tests run with Intelligems, aligned to conversion metrics on Shopify.'
        : 'Atuei em consultoria de desenvolvimento e CRO: testes A/B orientados por hipótese rodando no Intelligems, alinhados a métricas de conversão no Shopify.',
      impact: isEnglish
        ? 'A clearer experimentation loop (ship, measure, decide) connecting storefront changes to conversion signals.'
        : 'Um ciclo de experimentação mais claro (publicar, medir, decidir) conectando mudanças de storefront a sinais de conversão.',
      featured: true,
      repoLink: '',
      demoLink: 'https://primalqueen.com/',
      image: PrimalQueen,
      technologies: [
        { name: 'Shopify', image: Shopify },
        { name: 'Liquid', image: Liquid },
        { name: 'Intelligems', image: Shopify },
        { name: 'CRO', image: TypeScript },
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
        ? 'Faster reaction to market moves with a product surface teams can configure on their own, without depending on developers.'
        : 'Reação mais rápida a movimentos de mercado com uma superfície que o time configura sozinho, sem depender de desenvolvimento.',
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
