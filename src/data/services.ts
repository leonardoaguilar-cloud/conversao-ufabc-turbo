import { LucideIcon } from "lucide-react";

export interface ServiceData {
  id: string;
  tab: string;
  eyebrow: string;
  Icon: LucideIcon;
  hero: {
    headline: string;
    subheadline: string;
  };
  problem: {
    headline: string;
    pains: { text: string }[];
  };
  solution: {
    eyebrow: string;
    headline: string;
    description: string;
    steps: { title: string; description: string }[];
  };
  benefits: {
    eyebrow: string;
    headline: string;
    items: { title: string; description: string; Icon: LucideIcon }[];
  };
  cases: {
    client: string;
    segment: string;
    result: string;
    metric: string;
    quote: string;
  }[];
  cta: {
    headline: string;
    subheadline: string;
  };
}

import {
  Workflow, Map, Target, BarChart3, Zap, Clock, Users, TrendingUp, Compass, Eye, Lightbulb, Shield,
  Database, LineChart, Sparkles, Gauge, Search, Layers, Brain,
} from "lucide-react";

export const services: ServiceData[] = [
  // ============ MAPEAMENTO DE PROCESSOS ============
  {
    id: "processos",
    tab: "Mapeamento de Processos",
    eyebrow: "Serviço 01 — Operação",
    Icon: Workflow,
    hero: {
      headline: "Seus processos estão travando seu crescimento — e você provavelmente ainda não sabe onde.",
      subheadline:
        "Identificamos os gargalos que consomem tempo, dinheiro e produtividade na sua operação — com metodologia acadêmica e mais de 210 projetos de experiência.",
    },
    problem: {
      headline: "Crescimento travado por processos obsoletos ou não documentados.",
      pains: [
        { text: "Ineficiências operacionais aparecem no dia a dia, mas os gargalos seguem invisíveis." },
        { text: "Processos sem documentação fazem o conhecimento depender de pessoas específicas." },
        { text: "Retrabalho, atrasos e ruídos de responsabilidade consomem tempo e margem." },
        { text: "A operação cresce no esforço humano, não em um método replicável." },
        { text: "Sem fluxos claros, treinar equipe e manter padrão vira um desafio constante." },
        { text: "A falta de previsibilidade operacional limita decisões comerciais e estratégicas." },
      ],
    },
    solution: {
      eyebrow: "Como resolvemos",
      headline: "Identificamos e eliminamos os gargalos que custam produtividade e dinheiro.",
      description:
        "Aplicamos metodologia acadêmica para mapear o funcionamento real da empresa, redesenhar fluxos e transformar processos soltos em uma operação documentada, clara e escalável.",
      steps: [
        {
          title: "Diagnóstico imersivo",
          description: "Entendemos como o trabalho acontece na prática e quais pontos impedem produtividade, padrão e crescimento.",
        },
        {
          title: "Mapeamento AS-IS",
          description: "Documentamos o fluxo atual para revelar gargalos, retrabalhos e responsabilidades pouco claras.",
        },
        {
          title: "Redesenho TO-BE",
          description: "Propomos uma estrutura otimizada, com responsáveis claros, indicadores e menos dependência de improviso.",
        },
        {
          title: "Documentação e implantação",
          description: "Organizamos materiais e orientações para que a equipe sustente o novo fluxo no dia a dia.",
        },
      ],
    },
    benefits: {
      eyebrow: "O que você ganha",
      headline: "Produtividade, clareza e escala com menos desperdício operacional.",
      items: [
        { title: "Reduz custo operacional", description: "Identificamos atividades sem valor que somam até 30% do tempo da equipe.", Icon: TrendingUp },
        { title: "Acelera o tempo de entrega", description: "Processos enxutos entregam mais rápido com a mesma equipe.", Icon: Zap },
        { title: "Equipe destravada", description: "Cada pessoa sabe exatamente o que fazer, quando e como.", Icon: Users },
        { title: "Pronto para escalar", description: "Sua operação aguenta dobrar de tamanho sem dobrar o caos.", Icon: TrendingUp },
        { title: "Onboarding 3x mais rápido", description: "Novos contratados produzem em semanas, não meses.", Icon: Clock },
        { title: "Decisões fora do operacional", description: "Você volta a olhar pra estratégia em vez de apagar incêndios.", Icon: Compass },
      ],
    },
    cases: [
      {
        client: "Empresa de Logística",
        segment: "Transporte · 45 funcionários",
        result: "Reduziu o tempo de despacho em 42% após o redesenho dos fluxos operacionais.",
        metric: "-42%",
        quote: "Saímos do achismo. Hoje cada etapa tem dono e prazo. Isso mudou tudo.",
      },
      {
        client: "Indústria Alimentícia",
        segment: "Produção · ABC Paulista",
        result: "Aumento de 28% na produtividade do chão de fábrica em 90 dias.",
        metric: "+28%",
        quote: "A UFABC Jr. trouxe um olhar técnico que nossa equipe interna não tinha.",
      },
      {
        client: "Clínica de Saúde",
        segment: "Saúde · Multi-unidades",
        result: "Padronizou atendimento entre 3 unidades e elevou NPS de 52 para 81.",
        metric: "+29 NPS",
        quote: "Hoje qualquer unidade nossa entrega o mesmo nível de serviço. Antes era loteria.",
      },
    ],
    cta: {
      headline: "Vamos achar onde sua operação está vazando dinheiro.",
      subheadline:
        "Em 30 minutos, identificamos os 3 maiores gargalos da sua operação e te entregamos um mini-plano de ação. Sem custo, sem compromisso.",
    },
  },

  // ============ ANÁLISE DE MERCADO ============
  {
    id: "mercado",
    tab: "Análise de Mercado",
    eyebrow: "Serviço 02 — Estratégia",
    Icon: Target,
    hero: {
      headline: "Você está tomando decisões estratégicas sem dados confiáveis de mercado?",
      subheadline:
        "Entenda seu público, seus concorrentes e as oportunidades reais do seu setor — com pesquisas conduzidas por alunos da UFABC com suporte de professores doutores.",
    },
    problem: {
      headline: "Incerteza na entrada em novos mercados ou no lançamento de produtos custa caro.",
      pains: [
        { text: "Decisões de expansão, produto e posicionamento ainda são tomadas com pouca evidência." },
        { text: "O público parece conhecido, mas seus reais critérios de compra não estão claros." },
        { text: "Concorrentes avançam e fica difícil entender qual diferencial realmente pesa no mercado." },
        { text: "Há oportunidades no setor, mas falta dimensionar tamanho, risco e prioridade." },
        { text: "Campanhas e ações comerciais perdem força quando não partem do cliente certo." },
        { text: "Sem pesquisa, preço, canal e mensagem acabam dependendo mais de intuição do que de validação." },
      ],
    },
    solution: {
      eyebrow: "Como resolvemos",
      headline: "Dados de mercado confiáveis para decisões mais assertivas e menor risco.",
      description:
        "Combinamos pesquisa, análise competitiva e suporte acadêmico para transformar incerteza em direcionamento estratégico claro para o seu negócio.",
      steps: [
        {
          title: "Briefing estratégico",
          description: "Definimos quais decisões precisam de evidência e quais perguntas devem orientar a pesquisa.",
        },
        {
          title: "Pesquisa de campo",
          description: "Coletamos dados sobre público, concorrência, setor e oportunidades reais de atuação.",
        },
        {
          title: "Análise e cruzamento",
          description: "Cruzamos informações para identificar personas, oportunidades, ameaças e diferenciais competitivos.",
        },
        {
          title: "Relatório executivo",
          description: "Entregamos recomendações objetivas para reduzir risco e orientar próximos passos comerciais.",
        },
      ],
    },
    benefits: {
      eyebrow: "O que você ganha",
      headline: "Mais clareza sobre público, concorrência e oportunidades reais.",
      items: [
        { title: "Cliente ideal mapeado", description: "Personas reais com dores, gatilhos e jornada de compra documentadas.", Icon: Users },
        { title: "Concorrência radiografada", description: "Posicionamento, pricing, canais e pontos vulneráveis do seu mercado.", Icon: Eye },
        { title: "Tamanho do mercado (TAM/SAM/SOM)", description: "Saiba exatamente onde estão R$ X milhões de oportunidade real.", Icon: Target },
        { title: "Posicionamento afiado", description: "Mensagem que conecta porque parte do que o cliente realmente quer ouvir.", Icon: Compass },
        { title: "Validação antes de investir", description: "Teste hipóteses ANTES de gastar com produto, marketing ou expansão.", Icon: Shield },
        { title: "Insights novos toda semana", description: "Você sai da pesquisa enxergando seu negócio de um jeito novo.", Icon: Lightbulb },
      ],
    },
    cases: [
      {
        client: "Startup de Educação",
        segment: "Edtech · Pré-Series A",
        result: "Identificou nicho desatendido e cresceu MRR em 3x após repivotar posicionamento.",
        metric: "3x MRR",
        quote: "A pesquisa nos mostrou que estávamos vendendo pra quem não comprava. Mudou nosso jogo.",
      },
      {
        client: "Marca de Cosméticos",
        segment: "DTC · E-commerce",
        result: "Reduziu CAC em 38% ao reposicionar para a persona correta identificada no estudo.",
        metric: "-38% CAC",
        quote: "Paramos de gastar com público errado. ROAS dobrou no primeiro mês.",
      },
      {
        client: "Indústria B2B",
        segment: "Equipamentos · Nacional",
        result: "Validou entrada em novo mercado regional com projeção de R$ 8M em 12 meses.",
        metric: "R$ 8M",
        quote: "Tínhamos medo de errar a entrada. A análise nos deu segurança para investir alto.",
      },
    ],
    cta: {
      headline: "Pare de apostar. Comece a saber.",
      subheadline:
        "Em uma conversa de 30 minutos, mapeamos as 3 perguntas estratégicas mais críticas do seu negócio hoje — e te mostramos como respondê-las com dados.",
    },
  },

  // ============ ANÁLISE DE DADOS ============
  {
    id: "dados",
    tab: "Análise de Dados",
    eyebrow: "Serviço 03 — Inteligência",
    Icon: BarChart3,
    hero: {
      headline: "Você tem dados, mas não consegue transformá-los em decisão.",
      subheadline:
        "Estruturamos, analisamos e visualizamos os dados da sua empresa para que cada decisão deixe de ser palpite e passe a ser evidência.",
    },
    problem: {
      headline: "Dados acumulados em planilhas não geram valor — geram ansiedade.",
      pains: [
        { text: "Tem planilhas espalhadas em vários setores e ninguém sabe qual versão é a verdadeira." },
        { text: "Relatórios manuais consomem horas por semana e ainda chegam atrasados." },
        { text: "Não consegue prever vendas, churn ou demanda com nenhum nível de precisão." },
        { text: "Sente que poderia tomar decisões melhores se enxergasse os dados — mas eles estão dispersos e crus." },
        { text: "Investiu em sistema (ERP, CRM) mas usa só 10% do que ele oferece em informação." },
        { text: "Reuniões viram debate de opinião porque não há dado em comum sobre a mesa." },
      ],
    },
    solution: {
      eyebrow: "Como resolvemos",
      headline: "Do caos de planilhas ao dashboard que decide por você.",
      description:
        "Conectamos suas fontes de dados, modelamos as informações e construímos painéis interativos que mostram o que importa — quando importa.",
      steps: [
        {
          title: "Auditoria de dados",
          description: "Mapeamos todas as fontes, qualidade e lacunas dos dados que sua empresa já gera (e dos que deveria estar gerando).",
        },
        {
          title: "Estruturação e ETL",
          description: "Limpamos, integramos e organizamos as bases para que toda análise futura parta de uma fonte confiável e única.",
        },
        {
          title: "Análise estatística",
          description: "Usamos estatística e modelos preditivos para responder perguntas de negócio: o que está acontecendo, por quê e o que vem a seguir.",
        },
        {
          title: "Dashboards e capacitação",
          description: "Entregamos painéis vivos (Power BI, Looker ou similares) e treinamos seu time para ler e agir sobre eles.",
        },
      ],
    },
    benefits: {
      eyebrow: "O que você ganha",
      headline: "Visibilidade total. Reação rápida. Previsão real.",
      items: [
        { title: "Dashboards em tempo real", description: "KPIs do negócio em um único lugar, atualizados automaticamente.", Icon: Gauge },
        { title: "Previsões confiáveis", description: "Modelos estatísticos para vendas, demanda, churn e estoque.", Icon: LineChart },
        { title: "Fonte única da verdade", description: "Acabou debate sobre 'qual é o número certo' nas reuniões.", Icon: Database },
        { title: "Insights ocultos revelados", description: "Cruzamentos que sua equipe nunca teve tempo de fazer.", Icon: Search },
        { title: "Time data-driven", description: "Capacitação para que sua equipe pense com dados no dia a dia.", Icon: Brain },
        { title: "Decisão em horas, não semanas", description: "Pergunta de manhã, resposta com gráfico à tarde.", Icon: Sparkles },
      ],
    },
    cases: [
      {
        client: "Varejo Multicanal",
        segment: "Moda · 12 lojas",
        result: "Reduziu ruptura de estoque em 47% com modelo preditivo de demanda por SKU.",
        metric: "-47%",
        quote: "Hoje compramos o que vai vender, não o que achamos que vai. Diferença brutal no caixa.",
      },
      {
        client: "SaaS B2B",
        segment: "Software · 800 contas",
        result: "Identificou clientes em risco de churn 60 dias antes — e reteve 73% deles.",
        metric: "73% retidos",
        quote: "Antes a gente descobria churn na fatura. Agora a gente age antes do cliente decidir sair.",
      },
      {
        client: "Rede de Restaurantes",
        segment: "Food Service · 6 unidades",
        result: "Aumentou ticket médio em 18% com análise comportamental de pedidos.",
        metric: "+18% ticket",
        quote: "Os dados mostraram combinações de produto que nunca tínhamos pensado em sugerir.",
      },
    ],
    cta: {
      headline: "Seus dados já têm a resposta. Falta organizá-los.",
      subheadline:
        "Em 30 minutos, identificamos as 3 perguntas de negócio mais valiosas que seus dados atuais podem responder — e te mostramos como.",
    },
  },
];
