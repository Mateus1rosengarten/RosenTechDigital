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

export const silverInclude: FeaturesIncluded = [
  {
    title:
      "Gerência completa das principais plataformas de marketplace, incluindo todos os serviços disponíveis no plano M2 Essencial.",
    description:
      "Desenvolvimento completo de um site moderno, responsivo e otimizado, com até 4 páginas personalizadas para destacar sua marca. Não inclui e-commerce",
  },
  {
    title: "Diagnóstico claro e preciso das necessidades reais do seu negócio",
    description:
      "Registro e configuração de um domínio profissional (.com, .com.br, etc.) incluso no pacote, garantindo presença online personalizada.",
  },
  {
    title:
      "Mapeamento dos pontos fortes e as áreas que necessitam de uma atenção em seu negócio",
    description:
      "Configuração estratégica de SEO para melhorar o posicionamento nos mecanismos de busca, além da otimização e gestão do perfil da sua empresa no Google.",
  },
  {
    title:
      "Construção de um plano estratégico que promove a transição do operacional para uma atuação gerencial no negócio",
    description:
      "Suporte contínuo com manutenção técnica, correções e melhorias, além de um relatório mensal sobre o desempenho do site e suporte técnico dedicado para suas dúvidas.",
  },
  {
    title:
      "Execução do plano estratégico, com análise constante do mercado para implementação de estratégias garantindo resultados de curto a longo prazo",
    description: "sadasd",
  },
  {
    title:
      "Definição de metas reais a serem alcançadas, buscando crescimento sustentável com base em dados gerenciais e ferramentas de IA",
    description:
      "Sessão fotográfica com edição profissional para destacar seu negócio e produtos no inicio do plano (1x)",
  },
];

// export const liteNotInclude: FeaturesNotIncluded = [
//   "Estratégias avançadas de SEO e Google Ads",
//   "Gestão de marketing digital para redes sociais(post + storys)",
//   "Consultoria e automação digital sob medida",
//   "Campanhas digitais avançadas de publicidade e marketing",
//   "Gestão completa de branding com análise de resultados",
//   "Produção personalizada de áudio e audiovisual",
// ];

export const liteInclude: FeaturesIncluded = [
  {
    title:
      "Presença nos maiores marketplaces, como Mercado Livre, Magalu, Shopee, Shein entre outros",
    description:
      "Desenvolvimento completo de um site moderno, responsivo e otimizado, com até 8 páginas personalizadas para destacar sua marca. Não inclui e-commerce",
  },
  {
    title: "Registro e catalogo de forma estratégica dos produtos",
    description:
      "Registro e configuração de um domínio profissional (.com, .com.br, etc.) incluso no pacote, garantindo presença online personalizada.",
  },
  {
    title:
      "Criação de modelo de crescimento personalizado a partir de análise e dados do mercado",
    description:
      "Configuração estratégica de SEO para melhorar o posicionamento nos mecanismos de busca, além da otimização e gestão do perfil da sua empresa no Google.",
  },
  {
    title: "Modelos de precificação e diferenciação frente aos concorrentes",
    description:
      "Suporte contínuo com manutenção técnica, correções e melhorias, além de um relatório mensal sobre o desempenho do site e suporte técnico dedicado para suas dúvidas.",
  },
  {
    title:
      "Estratégias para construção de reputação e aumento de avaliações positivas",
    description:
      "Sessões fotográficas sazonais com edição profissional para atualizar o visual do seu site e redes sociais.",
  },
  {
    title:
      "Gestão e acompanhamento de pedidos, trocas e suporte ao consumidor final",
    description:
      "Sessões fotográficas sazonais com edição profissional para atualizar o visual do seu site e redes sociais.",
  },

  {
    title: "Relatórios de desempenho e faturamento",
    description:
      "Sessões fotográficas sazonais com edição profissional para atualizar o visual do seu site e redes sociais.",
  },

  {
    title: "Suporte dedicado via WhatsApp",
    description:
      "Sessões fotográficas sazonais com edição profissional para atualizar o visual do seu site e redes sociais.",
  },
];

// export const silverNotInclude: FeaturesNotIncluded = [
//   "Consultoria e automação digital sob medida",
//   "Campanhas digitais avançadas de publicidade e marketing",
//   "Gestão completa de branding com análise de resultados",
//   "Produção personalizada de áudio e audiovisual",
// ];

export const goldInclude: FeaturesIncluded = [
  {
    title:
      "Gerência completa das principais plataformas de marketplace, incluindo todos os serviços disponíveis no plano M2 Essencial.",
    description:
      "Desenvolvimento completo de um site moderno, responsivo e otimizado, com até 12 páginas personalizadas para destacar sua marca. Não inclui e-commerce",
  },
  {
    title:
      "Consultoria Financeira completa e continua incluindo todos os serviços disponíveis no plano M2 Turbo",
    description:
      "Registro e configuração de um domínio profissional (.com, .com.br, etc.) incluso no pacote, garantindo presença online personalizada.",
  },
  {
    title:
      "Gestão de redes sociais, garantindo presença ativa onde seu público está",
    description:
      "Configuração estratégica de SEO para melhorar o posicionamento nos mecanismos de busca, além da otimização e gestão do perfil da sua empresa no Google.",
  },
  {
    title:
      "Criação de sites com otimização para buscas, fortalecendo a credibilidade da sua empresa",
    description:
      "Suporte contínuo com manutenção técnica, correções e melhorias, além de um relatório mensal sobre o desempenho do site e suporte técnico dedicado para suas dúvidas.",
  },
  {
    title:
      "Desenvolvimento de automações digitais para facilitar atendimentos e processos, tornando a operação mais rápida, organizada e eficiente.",
    description:
      "Sessões fotográficas bimestrais com edição profissional para manter sua comunicação visual sempre atualizada e de alta qualidade.",
  },
  {
    title:
      "Estratégias de autoridade da marca, revisando identidade visual e posicionamento para consolidar seu negocio.",
    description:
      "Planejamento e execução de campanhas publicitárias com foco em performance, combinando SEO e anúncios no Google Ads para atrair clientes qualificados com maior retorno sobre investimento.",
  },
];

export const planCards: PlanCardData[] = [
  {
    title: "M2 ESSENCIAL",
    oldPrice: "1200",
    newPrice: "980",
    description:
      "Mais do que simplesmente anunciar: você passa a atuar nos principais marketplaces com estratégia, posicionamento e autoridade, construindo base de clientes e faturamento sustentável.",
    featuresIncluded: liteInclude,
  },
  {
    title: "M2 TURBO",
    oldPrice: "1199",
    newPrice: "999",
    description:
      "Além de tudo incluido no MarketPlate Essential, você passa a ter uma experiencia integrada do negócio, unindo operação e financeiro. Com gestão centralizada e consultoria direcionada.",
    featuresIncluded: silverInclude,
  },
  {
    title: "M2 ELITE",
    oldPrice: "1799",
    newPrice: "1499",
    description:
      "Gestão completa do seu negócio, atuando em múltiplas frentes e centralizando tudo em um controle integrado. Unimos dados  e transformamos em estratégia e execução prática,",
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
    image: "/images/serviceCard/marketplace.png",
    title: "Gerenciamento Marketplace",
    description:
      "Esteja nas principais plataformas de marketplace com uma gestão profissional que otimiza anúncios, impulsiona vendas e gera crescimento.",
    features: [
      "Design responsivo e moderno",
      "Uso das mais avançadas tecnologias",
      "Performance otimizada para carregamento ágil",
      "Suporte e manutenção inclusos",
    ],
  },
  {
    image: "/images/serviceCard/financeiro.png",
    title: "Consultoria Financeira",
    description:
      "Tenha uma gestão financeira estratégica que mapeie o fluxo de caixa, orienta decisões com dados gerenciais, aumentando o lucro e reduzindo custos desnecessários.",
    features: [
      "Design responsivo e moderno",
      "Uso das mais avançadas tecnologias",
      "Performance otimizada para carregamento ágil",
      "Suporte e manutenção inclusos",
    ],
  },
  {
    image: "/images/serviceCard/web.jpeg",
    title: "Criação de Website + SEO",
    description:
      "Crie um site como portal digital do seu negócio, fortalecendo a credibilidade da sua marca e potencializando resultados em plataformas de venda com SEO e Google Ads.",
    features: [
      "Design responsivo e moderno",
      "Uso das mais avançadas tecnologias",
      "Performance otimizada para carregamento ágil",
      "Suporte e manutenção inclusos",
    ],
  },
  {
    image: "/images/serviceCard/meta.jpeg",
    title: "Marketing Digital & Redes Sociais",
    description:
      "Engaje seu público alvo, aumente sua presenca nas midias sociais e gere resultados.Esteja onde seu pulico se encontra e deixe sua marca.",
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
    title: "Consultoria &  Automação Digital",
    description:
      "Analisamos e automatizamos sistemas digitais para aumentar eficiência, reduzir custos e otimizar o atendimento ao cliente, com desenvolvimento de aplicativos sob medida quando necessário.",
    features: [
      "Diagnóstico completo de sistemas digitais",
      "Redução de custos operacionais",
      "Automação de respostas instantâneas",
      "Identificação de gargalos e melhorias",
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
