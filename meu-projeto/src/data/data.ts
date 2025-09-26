import { Variants } from "framer-motion";
import {
  CarouselSlide,
  FaqItem,
  FeaturesIncluded,
  FeaturesNotIncluded,
  PlanCardData,
  ServiceCardProps,
  TechCarouselIcon,
} from "./types";

// ABOUT SECTION

export const techsCarouselItems: TechCarouselIcon[] = [
  { src: "/images/techCarousel/react.svg", name: "React" },
  { src: "/images/techCarousel/nodejs.svg", name: "Node.js" },
  { src: "/images/techCarousel/analytics.svg", name: "Google Analytics" },
  { src: "/images/techCarousel/ads.svg", name: "Google Ads" },
  { src: "/images/techCarousel/adobe.svg", name: "Photoshop" },
  { src: "/images/techCarousel/meta.svg", name: "Meta" },
  { src: "/images/techCarousel/figma.svg", name: "Figma" },
  { src: "/images/techCarousel/aws.svg", name: "AWS" },
  { src: "/images/techCarousel/ableton.svg", name: "Ableton" },
];

// PLANS SECTION

export const liteInclude: FeaturesIncluded = [
  {
    title: "Design e Criação de website desktop + mobile (até 4 páginas)",
    description:
      "Desenvolvimento completo de um site moderno, responsivo e otimizado, com até 4 páginas personalizadas para destacar sua marca. Não inclui e-commerce",
  },
  {
    title: "Registro de domínio exclusivo incluído",
    description:
      "Registro e configuração de um domínio profissional (.com, .com.br, etc.) incluso no pacote, garantindo presença online personalizada.",
  },
  {
    title: "SEO para ranqueamento no Google + Gestão Google Business",
    description:
      "Configuração estratégica de SEO para melhorar o posicionamento nos mecanismos de busca, além da otimização e gestão do perfil da sua empresa no Google.",
  },
  {
    title: "Manutenção, Suporte técnico e Relatórios",
    description:
      "Suporte contínuo com manutenção técnica, correções e melhorias, além de um relatório mensal sobre o desempenho do site e suporte técnico dedicado para suas dúvidas.",
  },
  {
    title: "Ensaio Fotográfico e Edição Profissional (a cada 8 meses)",
    description:
      "Sessão fotográfica com edição profissional para destacar seu negócio e produtos no inicio do plano (1x)",
  },
];

export const liteNotInclude: FeaturesNotIncluded = [
  "Estratégias avançadas de SEO e Google Ads",
  "Gestão de marketing digital para redes sociais(post + storys)",
  "Consultoria e automação digital sob medida",
  "Campanhas digitais avançadas de publicidade e marketing",
  "Gestão completa de branding com análise de resultados",
  "Produção personalizada de áudio e audiovisual",
];

export const silverInclude: FeaturesIncluded = [
  {
    title: "Design e Criação de website desktop + mobile (até 8 páginas)",
    description:
      "Desenvolvimento completo de um site moderno, responsivo e otimizado, com até 8 páginas personalizadas para destacar sua marca. Não inclui e-commerce",
  },
  {
    title: "Registro de domínio exclusivo incluído",
    description:
      "Registro e configuração de um domínio profissional (.com, .com.br, etc.) incluso no pacote, garantindo presença online personalizada.",
  },
  {
    title: "SEO para ranqueamento no Google + Gestão Google Business",
    description:
      "Configuração estratégica de SEO para melhorar o posicionamento nos mecanismos de busca, além da otimização e gestão do perfil da sua empresa no Google.",
  },
  {
    title: "Manutenção, Suporte técnico e Relatórios",
    description:
      "Suporte contínuo com manutenção técnica, correções e melhorias, além de um relatório mensal sobre o desempenho do site e suporte técnico dedicado para suas dúvidas.",
  },
  {
    title: "Ensaio Fotográfico e Edição Profissional (a cada 3 meses)",
    description:
      "Sessões fotográficas sazonais com edição profissional para atualizar o visual do seu site e redes sociais.",
  },
  {
    title: "Estratégias avançadas de SEO e GoogleAds",
    description:
      "Planejamento e execução de campanhas publicitárias com foco em performance, combinando SEO e anúncios no Google Ads para atrair clientes qualificados com maior retorno sobre investimento",
  },
  {
    title: "Gestão de marketing digital para redes sociais (post + storys)",
    description:
      "Criação, planejamento e publicação de até 12 conteúdos mensais otimizados para redes sociais, com foco em engajamento e alcance.",
  },
];

export const silverNotInclude: FeaturesNotIncluded = [
  "Consultoria e automação digital sob medida",
  "Campanhas digitais avançadas de publicidade e marketing",
  "Gestão completa de branding com análise de resultados",
  "Produção personalizada de áudio e audiovisual",
];

export const goldInclude: FeaturesIncluded = [
  {
    title: "Design e Criação de website desktop + mobile (até 12 páginas)",
    description:
      "Desenvolvimento completo de um site moderno, responsivo e otimizado, com até 12 páginas personalizadas para destacar sua marca. Não inclui e-commerce",
  },
  {
    title: "Registro de domínio exclusivo incluído",
    description:
      "Registro e configuração de um domínio profissional (.com, .com.br, etc.) incluso no pacote, garantindo presença online personalizada.",
  },
  {
    title: "SEO para ranqueamento no Google + Gestão Google Business",
    description:
      "Configuração estratégica de SEO para melhorar o posicionamento nos mecanismos de busca, além da otimização e gestão do perfil da sua empresa no Google.",
  },
  {
    title: "Manutenção, Suporte técnico e Relatórios",
    description:
      "Suporte contínuo com manutenção técnica, correções e melhorias, além de um relatório mensal sobre o desempenho do site e suporte técnico dedicado para suas dúvidas.",
  },
  {
    title: "Ensaio Fotográfico e Edição Profissional (a cada 2 meses)",
    description:
      "Sessões fotográficas bimestrais com edição profissional para manter sua comunicação visual sempre atualizada e de alta qualidade.",
  },
  {
    title: "Estratégias avançadas de SEO e GoogleAds",
    description:
      "Planejamento e execução de campanhas publicitárias com foco em performance, combinando SEO e anúncios no Google Ads para atrair clientes qualificados com maior retorno sobre investimento.",
  },
  {
    title: "Gestão de marketing digital para redes sociais (post/story)",
    description:
      "Criação, planejamento e publicação de até 24 conteúdos mensais otimizados para redes sociais, com foco em engajamento e alcance.",
  },
  {
    title: "Consultoria e automação digital sob medida",
    description:
      "Diagnóstico completo do seu negócio e aplicação de ferramentas de automação para melhorar a eficiência e os resultados das suas estratégias digitais.",
  },
  {
    title: "Campanhas digitais avançadas de publicidade e marketing",
    description:
      "Elaboração de campanhas personalizadas com foco em vendas, engajamento e fortalecimento da marca em diversos canais digitais.",
  },
  {
    title: "Gestão completa de branding com análise de resultados",
    description:
      "Cuidado estratégico com a sua marca, desde o posicionamento visual até a comunicação, com análises de impacto e melhorias constantes.",
  },
  {
    title: "Produção personalizada de áudio e audiovisual",
    description:
      "Criação de trilhas sonoras, locuções, vídeos institucionais e promocionais com identidade única e profissional.",
  },
];

export const planCards: PlanCardData[] = [
  {
    title: "LITE",
    oldPrice: "598",
    newPrice: "499",
    description:
      "Plano ideal para começar sua presença digital com um site responsivo, domínio incluso, SEO para ranqueamento no Google, suporte técnico contínuo e ensaio fotográfico profissional para destacar sua marca com qualidade.",
    featuresIncluded: liteInclude,
    featuresNotIncluded: liteNotInclude,
  },
  {
    title: "SILVER",
    oldPrice: "1199",
    newPrice: "999",
    description:
      "Além de tudo oferecido no plano Lite, a assinatura Silver amplia sua presença com estratégias avançadas de SEO e Google ADS , campanhas de anúncios de alta conversao e gestão ativa nas redes sociais.",
    featuresIncluded: silverInclude,
    featuresNotIncluded: silverNotInclude,
  },
  {
    title: "GOLD",
    oldPrice: "1799",
    newPrice: "1499",
    description:
      "Com todos os benefícios dos planos anteriores, o Pro traz uma solução completa: automações inteligentes, campanhas digitais estratégicas, rebranding profissional e produção audiovisual completa",
    featuresIncluded: goldInclude,
  },
];

export const containerPlanSectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const planCardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// SERVICE SECTION

export const serviceCardVariants: Variants = {
  hidden: { opacity: 0, y: 200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const serviceCards: ServiceCardProps[] = [
  {
    image: "/images/serviceCard/web.jpeg",
    title: "Criação de Website",
    description:
      "Crie um site exclusivo para seu negócio atraindo clientes, impulsionando suas vendas e gerando lucros",
    features: [
      "Design responsivo e moderno",
      "Uso das mais avançadas tecnologias",
      "Performance otimizada para carregamento ágil",
      "Suporte e manutenção inclusos",
    ],
  },
  {
    image: "/images/serviceCard/ads.jpeg",
    title: "SEO & Google Ads",
    description:
      "Apareça no Google, atraia os clientes certos e aumente suas vendas com SEO e anúncios eficazes.",
    features: [
      "SEO Técnico e de Conteúdo",
      "Campanhas no Google Ads de Alta Conversão",
      "Estratégias Personalizadas",
      "Relatórios e Acompanhamento Mensal",
    ],
  },
  {
    image: "/images/serviceCard/meta.jpeg",
    title: "Marketing Digital & Redes Sociais",
    description:
      "Engaje seu público, aumente sua presenca digital e gere resultados.Esteja onde seu pulico se encontra",
    features: [
      "Gestão e Monitoramento de Redes Sociais",
      "Planejamento Estratégico de Conteúdo",
      "Campanhas Organicas/Pagas Otimizadas",
      "Relatorios Semanais de Engajamento",
    ],
  },
  {
    image: "/images/serviceCard/brand.jpeg",
    title: "Branding e Rebranding",
    description:
      "Gestão analitica para construir ou fortalecer e renovar a identidade visual da sua marca conectando-se mais ao seu publico alvo",
    features: [
      "Identidade visual única e memorável",
      "Conexão emocional com seu público-alvo",
      "Melhora da percepção/reputação da marca",
      "Otimização da experiência do cliente",
    ],
  },
  {
    image: "/images/serviceCard/consultoria.jpeg",
    title: "Consultoria e Automação Digital",
    description:
      "Analise e Automatização de sistemas digitais para melhorar eficiência, agilizar tarefas e otimizar atendimento ao cliente",
    features: [
      "Diagnóstico completo de sistemas digitais",
      "Redução de custos operacionais",
      "Automação de respostas instantâneas",
      "Identificação de gargalos e melhorias",
    ],
  },
  {
    image: "/images/serviceCard/app.jpeg",
    title: "Criação de Aplicativo",
    description:
      "Criamos aplicativos personalizados baseados na sua ideia para transformar conceitos em soluções digitais reais",
    features: [
      "Desenvolvimento exclusivo e sob medida",
      "Uso de tecnologias modernas e escaláveis",
      "Suporte durante todas fases do projeto",
      "Segurança, privacidade e proteção criativa",
    ],
  },
];

// FAQ SECTION
export const faqs: FaqItem[] = [
  {
    question: "Como faço para contratar algum serviço?",
    answer:
      "Você pode nos contratar clicando em qualquer botão de contato espalhado pelo site, usando o formulário ao lado, o WhatsApp ou nossas redes sociais. Após o primeiro contato, alinhamos suas necessidades e iniciamos o projeto.",
  },
  {
    question: "Por que investir em presença digital?",
    answer:
      "Uma presença digital bem construída — com site, SEO, redes sociais ativas e marketing digital — aumenta sua visibilidade, atrai mais clientes e gera retorno financeiro.",
  },
  {
    question: "Que tipo de serviços vocês oferecem?",
    answer:
      "Oferecemos nossos serviços de forma avulsa via orçamento personalizado ou por meio de planos completos (recomendado), que reúnem tudo o que sua empresa precisa para ter sucesso no digital.",
  },
  {
    question: "Posso criar ou personalizar um plano ?",
    answer:
      "Sim! Você pode ajustar ou criar plano, incluindo serviços adicionais ou alterando a frequência e intensidade conforme suas necessidades. Tudo isso pode ser negociado via orçamento personalizado para garantir a melhor solução para sua empresa.",
  },
  {
    question: "Terei acompanhamento e suporte constante?",
    answer:
      "Sim! Estamos disponíveis diariamente para responder suas dúvidas e alinhar estratégias. Além disso, entregamos relatórios regulares que mostram os resultados de cada campanha.",
  },
  {
    question: "Como funciona o serviço de website nos planos?",
    answer:
      "Criaremos seu site moderno e responsivo, desenvolvido com SEO otimizado para melhor posicionamento. Inclui formulários de contato, botão de acesso ao WhatsApp, imagens de seus produtos e do seu espaço, promoções e outras funcionalidades personalizadas conforme suas necessidades.",
  },

  {
    question: "Como funciona o marketing via redes sociais?",
    answer:
      "Estaremos presentes nas redes sociais que você escolher — Instagram, TikTok, Facebook, entre outras — e, através da identidade visual e comunicação estratégica, criaremos conteúdos constantes para gerar engajamento e aumentar a visibilidade da sua empresa..",
  },
  {
    question: "O que é SEO? ( Search Optimizer Enginne )",
    answer:
      "SEO (Search Engine Optimization) é o conjunto de estratégias para otimizar seu site e conteúdos para que apareçam melhor nos resultados dos buscadores, como o Google. É um trabalho de médio a longo prazo, que normalmente começa a gerar resultados visíveis após alguns meses de aplicação contínua.",
  },
];

// CAROUSEL SECTION

export const CarouselSlides: CarouselSlide[] = [
  {
    image: "images/sectionsImages/slidec1.png",
    link: "https://research.hubspot.com",
  },
  {
    image: "images/sectionsImages/slidec1.png",
    link: "https://research.hubspot.com",
  },
];
