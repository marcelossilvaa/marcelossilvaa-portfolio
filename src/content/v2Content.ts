import type { Locale } from '@/i18n/LocaleProvider';

/**
 * Conteúdo exclusivo da experiência /v2. Reaproveita os dados canônicos de
 * src/content/* e adiciona apenas o que a narrativa "mission control" exige.
 */

export type V2SectionId =
  | 'index'
  | 'signal'
  | 'brands'
  | 'system'
  | 'experience'
  | 'education'
  | 'work'
  | 'toolkit'
  | 'services'
  | 'availability'
  | 'contact';

export type V2SectionMeta = {
  id: V2SectionId;
  index: string;
  label: string;
};

export function getV2Sections(locale: Locale): V2SectionMeta[] {
  const isEn = locale === 'en';

  return [
    { id: 'index', index: '00', label: isEn ? 'Index' : 'Índice' },
    { id: 'signal', index: '01', label: isEn ? 'Signal' : 'Sinal' },
    { id: 'brands', index: '02', label: isEn ? 'Brands' : 'Marcas' },
    { id: 'system', index: '03', label: isEn ? 'System' : 'Sistema' },
    { id: 'experience', index: '04', label: isEn ? 'Experience' : 'Experiência' },
    { id: 'education', index: '05', label: isEn ? 'Education' : 'Formação' },
    { id: 'work', index: '06', label: isEn ? 'Work' : 'Projetos' },
    { id: 'toolkit', index: '07', label: 'Toolkit' },
    { id: 'services', index: '08', label: isEn ? 'Services' : 'Serviços' },
    { id: 'availability', index: '09', label: isEn ? 'Availability' : 'Agenda' },
    { id: 'contact', index: '10', label: isEn ? 'Contact' : 'Contato' },
  ];
}

export function getV2SectionIndex(locale: Locale, id: V2SectionId): string {
  return getV2Sections(locale).find((section) => section.id === id)?.index ?? '00';
}

export function getV2Keywords(locale: Locale): string[] {
  const isEn = locale === 'en';

  return [
    'FULL STACK',
    'CRO',
    isEn ? 'CONVERSION' : 'CONVERSÃO',
    'SAAS',
    'E-COMMERCE',
    'NEXT.JS',
    'SHOPIFY',
    isEn ? 'A/B TESTING' : 'TESTES A/B',
    isEn ? 'FUNNEL OPTIMIZATION' : 'OTIMIZAÇÃO DE FUNIL',
    'ADOBE TARGET',
    'GA4',
    isEn ? 'APPLIED AI' : 'IA APLICADA',
    isEn ? 'AUTOMATION' : 'AUTOMAÇÃO',
  ];
}

/** Nuvem densa de capacidades exibida no hero — stack, SaaS, CRO e IA. */
export function getV2TagCloud(locale: Locale): string[] {
  const isEn = locale === 'en';

  return [
    'Full Stack',
    'SaaS',
    'CRO',
    isEn ? 'Conversion Rate Optimization' : 'Otimização de conversão',
    isEn ? 'Landing Pages' : 'Landing pages',
    isEn ? 'Funnel Analysis' : 'Análise de funil',
    'A/B Testing',
    'Adobe Target',
    'Adobe Analytics',
    'GA4',
    'GTM',
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'Shopify',
    'Liquid',
    'Payload CMS',
    'Core Web Vitals',
    isEn ? 'Technical SEO' : 'SEO técnico',
    isEn ? 'Product Analytics' : 'Analytics de produto',
    'n8n',
    'Cursor',
    'Claude Code',
    isEn ? 'AI-assisted Delivery' : 'Entrega assistida por IA',
    isEn ? 'Business Metrics' : 'Métricas de negócio',
    isEn ? 'Strategic Experiments' : 'Experimentos estratégicos',
  ];
}

export type V2Stat = {
  value: number;
  suffix: string;
  label: string;
};

export function getV2Stats(locale: Locale): V2Stat[] {
  const isEn = locale === 'en';

  return [
    { value: 4, suffix: '+', label: isEn ? 'years shipping product' : 'anos entregando produto' },
    { value: 8, suffix: '', label: isEn ? 'brands in production' : 'marcas em produção' },
    { value: 12, suffix: '', label: isEn ? 'projects in this index' : 'projetos neste índice' },
    { value: 4, suffix: '', label: isEn ? 'SaaS / full-stack builds' : 'SaaS / builds full stack' },
  ];
}

export type V2SystemPillar = {
  index: string;
  kicker: string;
  title: string;
  description: string;
  tags: string[];
  outcomeLabel: string;
  outcome: string;
};

export function getV2SystemPillars(locale: Locale): V2SystemPillar[] {
  if (locale === 'en') {
    return [
      {
        index: '01',
        kicker: 'Full stack',
        title: 'SaaS & digital products end-to-end',
        description:
          'From landing page and auth flows to dashboards, APIs and data models — I ship complete products with Next.js, Node.js and PostgreSQL, not just UI slices.',
        tags: ['Next.js / React', 'Node.js / PostgreSQL', 'SaaS architecture'],
        outcomeLabel: 'Product outcome',
        outcome: 'Working software your team can operate, measure and evolve.',
      },
      {
        index: '02',
        kicker: 'Commerce',
        title: 'Storefronts built to convert',
        description:
          'Shopify, headless storefronts and high-traffic ecommerce with component systems tuned for Core Web Vitals, checkout clarity and iteration speed.',
        tags: ['Shopify / Liquid', 'Headless CMS', 'Core Web Vitals'],
        outcomeLabel: 'Engineering outcome',
        outcome: 'Faster storefronts that stay editable under real traffic.',
      },
      {
        index: '03',
        kicker: 'CRO',
        title: 'Experimentation & conversion intelligence',
        description:
          'A/B tests, personalization and funnel instrumentation with Adobe Target, GA4 and reporting automation — connecting code changes to revenue signals.',
        tags: ['A/B Testing', 'Adobe Target / GA4', 'Funnel & LP optimization'],
        outcomeLabel: 'Business outcome',
        outcome: 'Decisions backed by evidence, not opinion.',
      },
    ];
  }

  return [
    {
      index: '01',
      kicker: 'Full stack',
      title: 'SaaS e produtos digitais ponta a ponta',
      description:
        'Da landing page e autenticação aos dashboards, APIs e modelagem de dados — entrego produto completo com Next.js, Node.js e PostgreSQL, não só fatias de UI.',
      tags: ['Next.js / React', 'Node.js / PostgreSQL', 'Arquitetura SaaS'],
      outcomeLabel: 'Resultado de produto',
      outcome: 'Software funcionando que o time consegue operar, medir e evoluir.',
    },
    {
      index: '02',
      kicker: 'Commerce',
      title: 'Storefronts feitos para converter',
      description:
        'Shopify, storefronts headless e e-commerce de alto tráfego com sistemas de componentes afinados para Core Web Vitals, clareza de checkout e velocidade de iteração.',
      tags: ['Shopify / Liquid', 'CMS Headless', 'Core Web Vitals'],
      outcomeLabel: 'Resultado de engenharia',
      outcome: 'Storefronts mais rápidos e editáveis sob tráfego real.',
    },
    {
      index: '03',
      kicker: 'CRO',
      title: 'Experimentação e inteligência de conversão',
      description:
        'Testes A/B, personalização e instrumentação de funil com Adobe Target, GA4 e automação de reporte — conectando mudança de código a sinal de receita.',
      tags: ['Testes A/B', 'Adobe Target / GA4', 'Funil & otimização de LP'],
      outcomeLabel: 'Resultado de negócio',
      outcome: 'Decisão sustentada por evidência, não por opinião.',
    },
  ];
}

export function getV2Pipeline(locale: Locale): string[] {
  if (locale === 'en') {
    return [
      'Diagnose',
      'Prioritize',
      'Architect',
      'Build',
      'Instrument',
      'Experiment',
      'Optimize',
      'Scale',
    ];
  }

  return [
    'Diagnosticar',
    'Priorizar',
    'Arquitetar',
    'Construir',
    'Instrumentar',
    'Experimentar',
    'Otimizar',
    'Escalar',
  ];
}

export type V2ToolkitGroup = {
  letter: string;
  kicker: string;
  title: string;
  summary: string;
  capabilities: string[];
};

export function getV2Toolkit(locale: Locale): V2ToolkitGroup[] {
  if (locale === 'en') {
    return [
      {
        letter: 'A',
        kicker: 'Product / Full stack',
        title: 'SaaS & application delivery',
        summary: 'Next.js · APIs · data · auth',
        capabilities: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'REST APIs', 'SaaS workflows'],
      },
      {
        letter: 'B',
        kicker: 'Conversion / CRO',
        title: 'Experimentation & analytics',
        summary: 'A/B testing · funnels · LPs',
        capabilities: ['CRO', 'A/B Testing', 'Adobe Target', 'GA4', 'GTM', 'Funnel analysis'],
      },
      {
        letter: 'C',
        kicker: 'Commerce / Storefront',
        title: 'E-commerce engineering',
        summary: 'Shopify · Liquid · headless',
        capabilities: ['Shopify', 'Liquid', 'Hydrogen', 'Checkout UX', 'Storefront API', 'Custom themes'],
      },
      {
        letter: 'D',
        kicker: 'Front-end / UI',
        title: 'Modern interfaces',
        summary: 'TypeScript · Tailwind · systems',
        capabilities: ['TypeScript', 'TailwindCSS', 'Design System', 'Accessibility', 'Performance', 'Mobile'],
      },
      {
        letter: 'E',
        kicker: 'Automation / AI',
        title: 'Applied AI & automation',
        summary: 'n8n · agents · AI delivery',
        capabilities: ['n8n', 'Cursor', 'Claude Code', 'GitHub Copilot', 'Prompt engineering', 'AI code review'],
      },
      {
        letter: 'F',
        kicker: 'Platform / Content',
        title: 'Systems & CMS',
        summary: 'Payload · Firebase · mobile',
        capabilities: ['Payload CMS', 'Firebase', 'Ionic & Capacitor', 'Technical SEO', 'Git / GitHub', 'Native mobile'],
      },
    ];
  }

  return [
    {
      letter: 'A',
      kicker: 'Produto / Full stack',
      title: 'Entrega SaaS e aplicações',
      summary: 'Next.js · APIs · dados · auth',
      capabilities: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'REST APIs', 'Fluxos SaaS'],
    },
    {
      letter: 'B',
      kicker: 'Conversão / CRO',
      title: 'Experimentação e analytics',
      summary: 'testes A/B · funis · LPs',
      capabilities: ['CRO', 'Testes A/B', 'Adobe Target', 'GA4', 'GTM', 'Análise de funil'],
    },
    {
      letter: 'C',
      kicker: 'Commerce / Storefront',
      title: 'Engenharia de e-commerce',
      summary: 'Shopify · Liquid · headless',
      capabilities: ['Shopify', 'Liquid', 'Hydrogen', 'Checkout UX', 'Storefront API', 'Temas customizados'],
    },
    {
      letter: 'D',
      kicker: 'Front-end / UI',
      title: 'Interfaces modernas',
      summary: 'TypeScript · Tailwind · systems',
      capabilities: ['TypeScript', 'TailwindCSS', 'Design System', 'Acessibilidade', 'Performance', 'Mobile'],
    },
    {
      letter: 'E',
      kicker: 'Automação / IA',
      title: 'IA aplicada e automação',
      summary: 'n8n · agentes · entrega assistida',
      capabilities: ['n8n', 'Cursor', 'Claude Code', 'GitHub Copilot', 'Prompt engineering', 'Code review com IA'],
    },
    {
      letter: 'F',
      kicker: 'Plataforma / Conteúdo',
      title: 'Sistemas e CMS',
      summary: 'Payload · Firebase · mobile',
      capabilities: ['Payload CMS', 'Firebase', 'Ionic & Capacitor', 'SEO técnico', 'Git / GitHub', 'Mobile nativo'],
    },
  ];
}

/** Rótulo curto de tipo por projeto para a coluna "Tipo" do índice /v2. */
export function getV2ProjectKinds(locale: Locale): Record<string, string> {
  const isEn = locale === 'en';

  return {
    '8': isEn ? 'Commerce + App' : 'Commerce + App',
    '9': isEn ? 'SaaS Full Stack' : 'SaaS Full Stack',
    '10': isEn ? 'CRO Landing + SEO' : 'LP CRO + SEO',
    '11': isEn ? 'Automation SaaS' : 'Automação SaaS',
    '5': isEn ? 'Headless CMS' : 'CMS headless',
    '0': isEn ? 'Storefront' : 'Storefront',
    '1': isEn ? 'Catalog' : 'Catálogo',
    '2': isEn ? 'Front-end' : 'Front-end',
    '3': isEn ? 'Institutional' : 'Institucional',
    '4': isEn ? 'Product site' : 'Site de produto',
    '6': isEn ? 'Trading SaaS' : 'SaaS Trading',
    '7': isEn ? 'Portfolio' : 'Portfólio',
  };
}

export type V2Service = {
  index: string;
  title: string;
  promise: string;
  description: string;
};

export function getV2Services(locale: Locale): V2Service[] {
  if (locale === 'en') {
    return [
      {
        index: '01',
        title: 'Full-stack SaaS & products',
        promise: 'Turn a business problem into a shippable product.',
        description:
          'End-to-end delivery: discovery, architecture, front-end, APIs, data modeling and dashboards — with a product mindset and metrics wired from day one.',
      },
      {
        index: '02',
        title: 'CRO & conversion systems',
        promise: 'Make every release accountable to a metric.',
        description:
          'Landing pages, funnels, A/B tests and personalization with Adobe Target, GA4 and Adobe Analytics — from hypothesis to readable impact.',
      },
      {
        index: '03',
        title: 'Commerce & storefront engineering',
        promise: 'Ship storefronts that convert under real traffic.',
        description:
          'Shopify, Next.js and headless architectures with Core Web Vitals, experimentation hooks and a codebase your squad can keep evolving.',
      },
    ];
  }

  return [
    {
      index: '01',
      title: 'SaaS e produtos full stack',
      promise: 'Transformar um problema de negócio em produto publicável.',
      description:
        'Entrega ponta a ponta: discovery, arquitetura, front-end, APIs, modelagem de dados e dashboards — com visão de produto e métricas ligadas desde o dia um.',
    },
    {
      index: '02',
      title: 'CRO e sistemas de conversão',
      promise: 'Fazer cada release responder por uma métrica.',
      description:
        'Landing pages, funis, testes A/B e personalização com Adobe Target, GA4 e Adobe Analytics — da hipótese ao impacto legível.',
    },
    {
      index: '03',
      title: 'Commerce e engenharia de storefront',
      promise: 'Publicar storefronts que convertem sob tráfego real.',
      description:
        'Shopify, Next.js e arquiteturas headless com Core Web Vitals, ganchos de experimentação e um código que o squad consegue evoluir.',
    },
  ];
}
