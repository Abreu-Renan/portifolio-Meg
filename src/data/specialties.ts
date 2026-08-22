import type { LucideIcon } from "lucide-react";
import { BarChart3, Megaphone, PenTool, ThumbsUp } from "lucide-react";

export type Specialty = {
  slug: string;
  title: string;
  backgroundColor: string;
  textColor: string;
  icon: LucideIcon;
  summary: string;
  intro: string;
  focusAreas: string[];
  details: string[];
  gallery: Array<{
    type: "image" | "video";
    url: string;
    alt: string;
    caption: string;
  }>;
};

export const specialtyCards: Specialty[] = [
  {
    slug: "analise-de-midias",
    title: "ANÁLISE DE MÍDIAS",
    backgroundColor: "#f3e8dc",
    textColor: "#000000",
    icon: BarChart3,
    summary: "Estratégias, posicionamento e comunicação que geram presença e resultado.",
    intro:
      "A análise de mídias transforma dados em direção estratégica, ajudando marcas a entenderem audiência, coberturas e oportunidades de comunicação.",
    focusAreas: [
      "Monitoramento de cobertura e reputação",
      "Análise de audiência e comportamento",
      "Leitura de tendências e contexto editorial",
      "Indicadores de performance e comunicação",
    ],
    details: [
      "Acompanhei e interpretei informações relevantes para orientar decisões de comunicação, marcas e posicionamento com base em dados e contexto do mercado.",
      "A leitura estratégica do cenário permite criar mensagens mais certeiras, ajustar táticas e reforçar a presença da marca em canais e narrativas relevantes.",
      "Cada diagnóstico é pensado para transformar informação em ação, conectando dados, percepção pública e objetivos de negócio.",
    ],
    gallery: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
        alt: "Equipe trabalhando em análise de mídias",
        caption: "Diagnóstico de cenário e inteligência de marca.",
      },
      {
        type: "video",
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        alt: "Vídeo de apresentação de comunicação",
        caption: "Materiais de apresentação e storytelling estratégico.",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
        alt: "Pessoas reunidas em reunião de planejamento",
        caption: "Estratégia com foco em relevância e presença digital.",
      },
    ],
  },
  {
    slug: "jornalismo",
    title: "JORNALISMO",
    backgroundColor: "#c578d3",
    textColor: "#ffffff",
    icon: PenTool,
    summary: "Narrativas com apuração, clareza e perspectiva editorial fortes.",
    intro:
      "O jornalismo é o pilar que une rigor, contexto e linguagem clara, criando conteúdos que informam, inspiram e ajudam pessoas a entenderem o mundo.",
    focusAreas: [
      "Reportagem e cobertura editorial",
      "Produção de textos e entrevistas",
      "Estrutura narrativa e linguagem clara",
      "Contextualização e apuração com senso crítico",
    ],
    details: [
      "Trabalho com produção editorial que busca equilíbrio entre abordagem factual e empatia, sem perder a relevância para o público.",
      "Cada peça é desenvolvida para transmitir contexto, dar profundidade e transformar informação em conexão com a audiência.",
      "A prática jornalística também fortalece a comunicação de marcas e projetos que precisam de narrativas autênticas e confiáveis.",
    ],
    gallery: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80",
        alt: "Mesa de trabalho com pautas e material de reportagem",
        caption: "Produção editorial com apuração e contexto.",
      },
      {
        type: "video",
        url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        alt: "Vídeo inspirador de conteúdo editorial",
        caption: "Materiais em movimento para dar vida à narrativa.",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
        alt: "Pessoa escrevendo e editando reportagem",
        caption: "Edição e apuração com olhar estratégico.",
      },
    ],
  },
  {
    slug: "social-media",
    title: "SOCIAL MEDIA",
    backgroundColor: "#ffffff",
    textColor: "#000000",
    icon: ThumbsUp,
    summary: "Conteúdo para engajamento, posicionamento e presença de marca nos canais digitais.",
    intro:
      "A comunicação em redes sociais exige criatividade, estratégia e consistência para gerar conexão real com as pessoas e fortalecer a imagem da marca.",
    focusAreas: [
      "Planejamento de conteúdo e calendário",
      "Criação de roteiros e campanhas",
      "Gestão de engajamento e comunidade",
      "Estratégia de presença com tom de marca",
    ],
    details: [
      "Crio e organizo conteúdos que dialogam com o público de forma clara, humana e alinhada à identidade da marca.",
      "A partir da análise de comportamento e dos objetivos de comunicação, a estratégia ganha propostas criativas com foco em relevância e conversão.",
      "O resultado é uma presença digital mais coesa, memorável e capaz de gerar relacionamento duradouro.",
    ],
    gallery: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80",
        alt: "Tela com conteúdo de redes sociais",
        caption: "Planejamento visual e storytelling digital.",
      },
      {
        type: "video",
        url: "https://www.w3schools.com/html/movie.mp4",
        alt: "Vídeo de campanha em redes sociais",
        caption: "Campanhas com ritmo, clareza e presença digital.",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
        alt: "Equipe discutindo campanha digital",
        caption: "Produção orientada por objetivos e audiência.",
      },
    ],
  },
  {
    slug: "comunicacao-corporativa",
    title: "COMUNICAÇÃO CORPORATIVA",
    backgroundColor: "#000000",
    textColor: "#ffffff",
    icon: Megaphone,
    summary: "Posicionamento institucional, reputação e presença forte em todos os pontos de contato.",
    intro:
      "A comunicação corporativa é a base para fortalecer a identidade, a reputação e a clareza das mensagens que uma organização transmite ao mercado e à sociedade.",
    focusAreas: [
      "Posicionamento e marca institucional",
      "Assessoria e relacionamento com imprensa",
      "Narrativas internas e externas",
      "Estratégia de reputação e presença",
    ],
    details: [
      "A comunicação institucional precisa ser estratégica, consistente e alinhada ao contexto em que a organização atua.",
      "Trabalho com discursos, campanhas e materiais que ajudam marcas a se comunicar de forma madura, clara e com identidade forte.",
      "Quando o objetivo é conectar visão, valor e relevância, a comunicação corporativa vira ferramenta de diferenciação e credibilidade.",
    ],
    gallery: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80",
        alt: "Pessoa em reunião corporativa",
        caption: "Estratégia institucional com foco em clareza e marca.",
      },
      {
        type: "video",
        url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
        alt: "Vídeo institucional com movimento e identidade visual",
        caption: "Conteúdo para apresentar marca, propósito e impacto.",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
        alt: "Equipe em ambiente de comunicação corporativa",
        caption: "Relacionamento com público, imprensa e stakeholders.",
      },
    ],
  },
];

export const specialtyBySlug = Object.fromEntries(
  specialtyCards.map((item) => [item.slug, item]),
) as Record<string, Specialty>;
