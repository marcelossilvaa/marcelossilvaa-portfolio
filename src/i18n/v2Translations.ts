import type { Locale } from '@/i18n/LocaleProvider';

export type V2TranslationSchema = {
  boot: {
    edition: string;
    skip: string;
    lines: string[];
    ready: string;
  };
  hud: {
    role: string;
    localTime: string;
    scroll: string;
    index: string;
    closeIndex: string;
    openIndex: string;
    switchLocale: string;
    backToClassic: string;
  };
  hero: {
    edition: string;
    statement: string;
    statementHighlight: string;
    support: string;
    ctaPrimary: string;
    ctaSecondary: string;
    availability: string;
  };
  signal: {
    eyebrow: string;
    title: string;
    lead: string;
    quote: string;
    archiveLabel: string;
    sequenceLabel: string;
    frames: string;
  };
  coordinates: {
    eyebrow: string;
    title: string;
  };
  system: {
    eyebrow: string;
    title: string;
    lead: string;
    pipelineLabel: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    lead: string;
    details: string;
    hide: string;
    now: string;
    visit: string;
  };
  education: {
    eyebrow: string;
    title: string;
    lead: string;
    nodeLabel: string;
  };
  brands: {
    eyebrow: string;
    title: string;
    lead: string;
  };
  work: {
    eyebrow: string;
    title: string;
    lead: string;
    tableProject: string;
    tableStack: string;
    tableYear: string;
    open: string;
    featured: string;
    challenge: string;
    strategy: string;
    impact: string;
    liveSite: string;
    appStore: string;
    playStore: string;
    frame: string;
    close: string;
    prev: string;
    next: string;
  };
  toolkit: {
    eyebrow: string;
    title: string;
    lead: string;
    capabilities: string;
  };
  services: {
    eyebrow: string;
    title: string;
    lead: string;
  };
  availability: {
    eyebrow: string;
    title: string;
    lead: string;
    pitch: string;
    status: string;
    cta: string;
    weekdays: string[];
    today: string;
    monthNames: string[];
  };
  contact: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    lead: string;
    email: string;
    whatsapp: string;
    linkedin: string;
    github: string;
    instagram: string;
    backToTop: string;
    builtWith: string;
  };
};

const pt: V2TranslationSchema = {
  boot: {
    edition: 'Portfólio / 2026',
    skip: 'Clique em qualquer lugar para pular',
    lines: [
      'inicializando índice do portfólio',
      'carregando stack · shopify · next.js · cro',
      'sincronizando marcas e projetos',
      'calibrando sinal',
    ],
    ready: 'pronto',
  },
  hud: {
    role: 'Front-end · E-commerce · CRO',
    localTime: 'Hora local',
    scroll: 'Rolar',
    index: 'Índice',
    closeIndex: 'Fechar índice',
    openIndex: 'Abrir índice',
    switchLocale: 'Trocar idioma',
    backToClassic: 'Versão clássica',
  },
  hero: {
    edition: 'Portfólio / 2026',
    statement: 'Eu transformo storefronts lentos em',
    statementHighlight: 'máquinas de conversão',
    support:
      'Arquitetura front-end, experimentação de CRO e automação com IA para e-commerces que precisam de velocidade, evidência e evolução contínua.',
    ctaPrimary: 'Falar no WhatsApp',
    ctaSecondary: 'Ver projetos',
    availability: 'Disponível para novos projetos',
  },
  signal: {
    eyebrow: 'Sinal',
    title: 'Performance é uma decisão de negócio',
    lead:
      'Cada milissegundo, cada teste A/B e cada componente reaproveitado são escolhas que aparecem na receita. Meu trabalho é conectar código a métrica.',
    quote: 'Construa sistemas em que o time consiga agir.',
    archiveLabel: 'Arquivo visual',
    sequenceLabel: 'Sequência automática / 3.4s',
    frames: 'quadros em rotação',
  },
  coordinates: {
    eyebrow: 'Coordenadas',
    title: 'Base fixa, alcance remoto',
  },
  system: {
    eyebrow: 'Sistema',
    title: 'Um sistema, duas frentes',
    lead:
      'Projetos diferentes, a mesma disciplina: estruturar o front-end, instrumentar a medição e testar hipóteses até a decisão ficar óbvia.',
    pipelineLabel: 'Fluxo de trabalho',
  },
  experience: {
    eyebrow: 'Experiência profissional',
    title: 'Trajetória',
    lead:
      'De MVP educacional a e-commerces de grande porte: entrega front-end conectada a produto, dados e conversão.',
    details: 'Ver detalhes',
    hide: 'Recolher',
    now: 'agora',
    visit: 'Visitar',
  },
  education: {
    eyebrow: 'Formação',
    title: 'Base técnica',
    lead:
      'Bacharelado em Ciência da Computação somado a formações intensivas de front-end e residência em software orientada a negócio.',
    nodeLabel: 'Nó',
  },
  brands: {
    eyebrow: 'Marcas',
    title: 'Onde o código foi para produção',
    lead: 'Marcas e operações que passaram pelas entregas de front-end, CRO e automação.',
  },
  work: {
    eyebrow: 'Projetos',
    title: 'Índice de projetos',
    lead: 'Selecione uma linha para abrir o visor de quadros com desafio, estratégia e impacto.',
    tableProject: 'Projeto',
    tableStack: 'Stack',
    tableYear: 'Tipo',
    open: 'Abrir',
    featured: 'Destaque',
    challenge: 'Desafio',
    strategy: 'Estratégia',
    impact: 'Impacto',
    liveSite: 'Ver site',
    appStore: 'App Store',
    playStore: 'Google Play',
    frame: 'Quadro',
    close: 'Fechar',
    prev: 'Anterior',
    next: 'Próximo',
  },
  toolkit: {
    eyebrow: 'Toolkit',
    title: 'Capacidades técnicas',
    lead:
      'Um sistema de capacidades que cobre fundamentos web, aplicação, commerce, medição, automação e plataforma.',
    capabilities: 'capacidades',
  },
  services: {
    eyebrow: 'Serviços',
    title: 'Como eu entro no seu time',
    lead: 'Três frentes de atuação, sempre amarradas a uma métrica que o negócio já acompanha.',
  },
  availability: {
    eyebrow: 'Agenda',
    title: 'Disponibilidade',
    lead:
      'Aberto a posições e projetos em front-end, e-commerce, CRO e automação. Português nativo, inglês profissional.',
    pitch: 'Escolha um dia útil e me conte qual métrica está travada.',
    status: 'Aceitando novos projetos',
    cta: 'Agendar uma conversa',
    weekdays: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],
    today: 'hoje',
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
  },
  contact: {
    eyebrow: 'Contato',
    titleLine1: 'VAMOS CONSTRUIR',
    titleLine2: 'O PRÓXIMO PASSO.',
    lead:
      'Tem um storefront travado, um funil furado ou uma ideia que precisa de evidência? Vamos transformar isso em um próximo passo claro.',
    email: 'Email',
    whatsapp: 'WhatsApp',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    instagram: 'Instagram',
    backToTop: 'Voltar ao topo',
    builtWith: 'Construído com Next.js, TypeScript e Tailwind',
  },
};

const en: V2TranslationSchema = {
  boot: {
    edition: 'Portfolio / 2026',
    skip: 'Click anywhere to skip',
    lines: [
      'initializing portfolio index',
      'loading stack · shopify · next.js · cro',
      'syncing brands and projects',
      'calibrating signal',
    ],
    ready: 'ready',
  },
  hud: {
    role: 'Front-end · E-commerce · CRO',
    localTime: 'Local time',
    scroll: 'Scroll',
    index: 'Index',
    closeIndex: 'Close index',
    openIndex: 'Open index',
    switchLocale: 'Switch language',
    backToClassic: 'Classic version',
  },
  hero: {
    edition: 'Portfolio / 2026',
    statement: 'I turn slow storefronts into',
    statementHighlight: 'conversion machines',
    support:
      'Front-end architecture, CRO experimentation and AI-assisted automation for e-commerce operations that need speed, evidence and continuous evolution.',
    ctaPrimary: 'Chat on WhatsApp',
    ctaSecondary: 'See projects',
    availability: 'Available for new projects',
  },
  signal: {
    eyebrow: 'Signal',
    title: 'Performance is a business decision',
    lead:
      'Every millisecond, every A/B test and every reusable component is a choice that shows up in revenue. My job is to connect code to metric.',
    quote: 'Build systems people can act on.',
    archiveLabel: 'Visual archive',
    sequenceLabel: 'Auto sequence / 3.4s',
    frames: 'rotating frames',
  },
  coordinates: {
    eyebrow: 'Coordinates',
    title: 'Fixed base, remote range',
  },
  system: {
    eyebrow: 'System',
    title: 'One system, two fronts',
    lead:
      'Different projects, the same discipline: structure the front-end, instrument the measurement and test hypotheses until the decision becomes obvious.',
    pipelineLabel: 'Workflow',
  },
  experience: {
    eyebrow: 'Professional experience',
    title: 'Track record',
    lead:
      'From an educational MVP to enterprise e-commerce: front-end delivery wired into product, data and conversion.',
    details: 'View details',
    hide: 'Collapse',
    now: 'now',
    visit: 'Visit',
  },
  education: {
    eyebrow: 'Education',
    title: 'Technical foundation',
    lead:
      "A Computer Science bachelor's degree plus intensive front-end tracks and a business-oriented software residency.",
    nodeLabel: 'Node',
  },
  brands: {
    eyebrow: 'Brands',
    title: 'Where the code went live',
    lead: 'Brands and operations touched by front-end, CRO and automation delivery.',
  },
  work: {
    eyebrow: 'Work',
    title: 'Project index',
    lead: 'Select a row to open the frame viewer with challenge, strategy and impact.',
    tableProject: 'Project',
    tableStack: 'Stack',
    tableYear: 'Type',
    open: 'Open',
    featured: 'Featured',
    challenge: 'Challenge',
    strategy: 'Strategy',
    impact: 'Impact',
    liveSite: 'Live site',
    appStore: 'App Store',
    playStore: 'Google Play',
    frame: 'Frame',
    close: 'Close',
    prev: 'Previous',
    next: 'Next',
  },
  toolkit: {
    eyebrow: 'Toolkit',
    title: 'Technical capabilities',
    lead:
      'A capability system covering web fundamentals, application, commerce, measurement, automation and platform.',
    capabilities: 'capabilities',
  },
  services: {
    eyebrow: 'Services',
    title: 'How I plug into your team',
    lead: 'Three engagement tracks, always tied to a metric the business already watches.',
  },
  availability: {
    eyebrow: 'Availability',
    title: 'Availability',
    lead:
      'Open to roles and projects in front-end, e-commerce, CRO and automation. Portuguese native, professional English.',
    pitch: 'Pick a weekday and tell me which metric is stuck.',
    status: 'Accepting new projects',
    cta: 'Schedule a conversation',
    weekdays: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
    today: 'today',
    monthNames: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  },
  contact: {
    eyebrow: 'Contact',
    titleLine1: "LET'S BUILD",
    titleLine2: "WHAT'S NEXT.",
    lead:
      'Got a stuck storefront, a leaking funnel or an idea that needs evidence? Let’s turn it into a clear next move.',
    email: 'Email',
    whatsapp: 'WhatsApp',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    instagram: 'Instagram',
    backToTop: 'Back to top',
    builtWith: 'Built with Next.js, TypeScript and Tailwind',
  },
};

export const v2Translations: Record<Locale, V2TranslationSchema> = { pt, en };
