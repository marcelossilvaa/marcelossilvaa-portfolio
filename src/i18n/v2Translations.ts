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
    credentialsLabel: string;
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
    openSlots: string;
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
      'carregando stack · saas · full stack · cro',
      'sincronizando marcas e projetos',
      'calibrando sinal de conversão',
    ],
    ready: 'pronto',
  },
  hud: {
    role: 'Full stack · SaaS · CRO',
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
    statement: 'Eu transformo ideias em produtos digitais que',
    statementHighlight: 'convertem de verdade',
    support:
      'Dev full stack com visão analítica, estratégica e técnica: entrego SaaS ponta a ponta, storefronts de alto tráfego, sistemas de CRO e consultoria de e-commerce, com experimentação, métricas e automação assistida por IA.',
    ctaPrimary: 'Falar no WhatsApp',
    ctaSecondary: 'Ver projetos',
    availability: 'Disponível para novos projetos',
  },
  signal: {
    eyebrow: 'Sinal',
    title: 'Produto, dados e conversão no mesmo sistema',
    lead:
      'De SaaS full stack a e-commerce de escala: cada entrega conecta arquitetura, métrica e experimentação, porque performance e conversão são decisões de negócio.',
    quote: 'Construa produtos em que dados e decisões falem a mesma língua.',
    archiveLabel: 'Arquivo visual',
    sequenceLabel: 'Sequência automática / 3.4s',
    frames: 'quadros em rotação',
  },
  system: {
    eyebrow: 'Sistema',
    title: 'Três frentes, uma visão de produto',
    lead:
      'Full stack, commerce e CRO não são silos: são camadas do mesmo sistema. Arquiteto, construo, instrumento e testo até a decisão ficar óbvia.',
    pipelineLabel: 'Fluxo de trabalho',
  },
  experience: {
    eyebrow: 'Experiência profissional',
    title: 'Trajetória',
    lead:
      'De MVP educacional a SaaS em produção e e-commerces de grande porte: entrega conectada a produto, dados e conversão.',
    details: 'Ver detalhes',
    hide: 'Recolher',
    now: 'agora',
    visit: 'Visitar',
  },
  education: {
    eyebrow: 'Formação',
    title: 'Base técnica',
    lead:
      'Bacharelado em Ciência da Computação iniciado na UFS, somado a formação intensiva de front-end e residência em software orientada a negócio.',
    nodeLabel: 'Nó',
    credentialsLabel: 'Certificações',
  },
  brands: {
    eyebrow: 'Marcas',
    title: 'Marcas com quem já trabalhei',
    lead: 'Marcas e operações que passaram por entregas de desenvolvimento, CRO, commerce ou automação.',
  },
  work: {
    eyebrow: 'Projetos',
    title: 'Índice de projetos',
    lead: 'Selecione uma linha para abrir o visor com desafio, estratégia e impacto. SaaS, commerce e CRO no mesmo índice.',
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
      'Um sistema de capacidades que cobre SaaS full stack, commerce, CRO, medição, automação e plataforma.',
    capabilities: 'capacidades',
  },
  services: {
    eyebrow: 'Serviços',
    title: 'Como eu entro no seu time',
    lead: 'Quatro frentes de atuação: SaaS, CRO, commerce e consultoria de e-commerce. Todas amarradas a uma métrica que o negócio já acompanha.',
  },
  availability: {
    eyebrow: 'Agenda',
    title: 'Disponibilidade',
    lead:
      'Aberto a posições e projetos full stack, SaaS, e-commerce, CRO e automação. Português nativo, inglês profissional.',
    pitch: 'Escolha um dia útil e me conte qual métrica está travada.',
    status: 'Aceitando novos projetos',
    cta: 'Agendar uma conversa',
    weekdays: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],
    today: 'hoje',
    openSlots: 'horários livres',
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
      'Tem um SaaS para lançar, um funil furado ou um storefront travado? Vamos transformar isso em um próximo passo claro, com execução e métrica alinhadas.',
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
      'loading stack · saas · full stack · cro',
      'syncing brands and projects',
      'calibrating conversion signal',
    ],
    ready: 'ready',
  },
  hud: {
    role: 'Full stack · SaaS · CRO',
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
    statement: 'I turn ideas into digital products that',
    statementHighlight: 'actually convert',
    support:
      'Full-stack developer with analytical, strategic and technical vision: I ship end-to-end SaaS, high-traffic storefronts, CRO systems and e-commerce consulting, with experimentation, metrics and AI-assisted automation.',
    ctaPrimary: 'Chat on WhatsApp',
    ctaSecondary: 'See projects',
    availability: 'Available for new projects',
  },
  signal: {
    eyebrow: 'Signal',
    title: 'Product, data and conversion in one system',
    lead:
      'From full-stack SaaS to enterprise e-commerce: every delivery connects architecture, metrics and experimentation, because performance and conversion are business decisions.',
    quote: 'Build products where data and decisions speak the same language.',
    archiveLabel: 'Visual archive',
    sequenceLabel: 'Auto sequence / 3.4s',
    frames: 'rotating frames',
  },
  system: {
    eyebrow: 'System',
    title: 'Three fronts, one product vision',
    lead:
      'Full stack, commerce and CRO are not silos: they are layers of the same system. I architect, build, instrument and test until the decision becomes obvious.',
    pipelineLabel: 'Workflow',
  },
  experience: {
    eyebrow: 'Professional experience',
    title: 'Track record',
    lead:
      'From an educational MVP to production SaaS and enterprise e-commerce: delivery wired into product, data and conversion.',
    details: 'View details',
    hide: 'Collapse',
    now: 'now',
    visit: 'Visit',
  },
  education: {
    eyebrow: 'Education',
    title: 'Technical foundation',
    lead:
      "Computer Science bachelor's started at UFS, plus an intensive front-end track and a business-oriented software residency.",
    nodeLabel: 'Node',
    credentialsLabel: 'Certifications',
  },
  brands: {
    eyebrow: 'Brands',
    title: "Brands I've worked with",
    lead: 'Brands and operations touched by development, CRO, commerce or automation delivery.',
  },
  work: {
    eyebrow: 'Work',
    title: 'Project index',
    lead: 'Select a row to open the frame viewer with challenge, strategy and impact. SaaS, commerce and CRO in one index.',
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
      'A capability system covering full-stack SaaS, commerce, CRO, measurement, automation and platform.',
    capabilities: 'capabilities',
  },
  services: {
    eyebrow: 'Services',
    title: 'How I plug into your team',
    lead: 'Four engagement tracks: SaaS, CRO, commerce and e-commerce consulting. All tied to a metric the business already watches.',
  },
  availability: {
    eyebrow: 'Availability',
    title: 'Availability',
    lead:
      'Open to full-stack, SaaS, e-commerce, CRO and automation roles and projects. Portuguese native, professional English.',
    pitch: 'Pick a weekday and tell me which metric is stuck.',
    status: 'Accepting new projects',
    cta: 'Schedule a conversation',
    weekdays: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
    today: 'today',
    openSlots: 'open slots',
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
      'Launching a SaaS, fixing a leaking funnel or unblocking a storefront? Let’s turn it into a clear next move, with execution and metrics aligned.',
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
