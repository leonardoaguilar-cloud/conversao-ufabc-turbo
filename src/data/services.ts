import { LucideIcon } from "lucide-react";

export interface ServiceData {
  id: string;
  tab: string;
  eyebrow: string;
  Icon: LucideIcon;
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
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
    eyebrow: "Serviço 01 — Otimização",
    Icon: Workflow,
    hero: {
      headline: "Sua empresa perde dinheiro e tempo com processos ineficientes?",
      subheadline:
        "Mapeamos e otimizamos processos para reduzir falhas, aumentar a eficiência e melhorar os resultados da operação.",
      cta: "Quero diagnosticar minha operação",
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
        client: "CAS",
        segment: "Empresa de serviços tecnológicos",
        result: "​Índice de confiança dos nossos serviços (NPS - Net Promoter Score). Representa o quanto o cliente recomenda nossos serviços de 0 a 100%.",
        metric: "100%",
        quote: "Esta empresa cliente seguiu conosco em um processo de fidelização e nos contratou para 6 projetos no total.",
      },
      {
        client: "Lady Tecelagem",
        segment: "Empresa do ramo de vestuários",
        result: "​Coeficiente de satisfação do cliente (CSAT). Medido de 0 a 100%.",
        metric: "100%",
        quote: "Empresa familiar com 80 anos de mercado. Mapeamos 4 áreas da sua indústria, identificando gargalos processuais e aplicando melhorias que otimizaram a produção.",
      },
      {
        client: "Precificar",
        segment: "Indústria em comércio que atende mais de 1000 lojas no Brasil.",
        result: "Áreas da indústria mapeadas e otimizadas.",
        metric: "8",
        quote: "Aplicamos as etapas AS-IS e TO-BE em todas as áreas da empresa, atigindo sucesso total ao conseguir otimizar não só sua produção mas todos seus processos internos. Atingimos 100% de ambos os indíces (CSAT e NPS).",
      },
    ],
    cta: {
      headline: "Quero um diagnóstico gratuito.",
      subheadline:
        "Vamos identificar quais gargalos operacionais estão consumindo produtividade, dinheiro e previsibilidade na sua empresa.",
    },
  },

  // ============ ANÁLISE DE MERCADO ============
  {
    id: "mercado",
    tab: "Pesquisa de Mercado",
    eyebrow: "Serviço 02 — Estratégia",
    Icon: Target,
    hero: {
      headline: "Você está tomando decisões estratégicas sem informações confiáveis do mercado?",
      subheadline:
        "Entenda seu público, seus concorrentes e as oportunidades reais do seu setor para construir estratégias mais assertivas.",
      cta: "Descubra oportunidades no mercado",
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
        client: "Continental",
        segment: "Empresa do ramo Automotivo e Industrial",
        result: "NPS e CSAT com nota 10.",
        metric: "100%",
        quote: "A Continental buscava compreender as demandas do mercado para direcionar a evolução de seu sistema de rastreamento de veículos. Com a pesquisa de mercado realizada pela UFABC Jr., a empresa obteve insights estratégicos que orientaram o desenvolvimento de novas funcionalidades, aumentando a aderência da solução às necessidades dos clientes.",
      },
      {
        client: "Samsung SDS",
        segment: "Empresa de Tecnologia da Informação",
        result: "Frentes de análise foram feitas sobre o tema da pesquisa.",
        metric: "5",
        quote: "A Samsung SDS buscava compreender o mercado de Cloud Computing no Brasil e na América Latina para embasar sua estratégia de expansão. A UFABC Jr. realizou uma pesquisa de mercado aprofundada, entregando análises estratégicas que apoiaram a tomada de decisões e o planejamento de ingresso no mercado brasileiro.",
      },
      {
        client: "Aperam",
        segment: "Empresa Siderúrgica e Metalúrgica",
        result: "NPS 10, com mais de 5 projetos feitos em parceria.",
        metric: "100%",
        quote: "A Aperam buscava avaliar a viabilidade da substituição de matérias-primas pelo aço inox em um novo segmento de atuação. A UFABC Jr. realizou uma pesquisa de mercado que mapeou empresas, validou o potencial da troca de material e forneceu informações estratégicas para embasar a tomada de decisão.",
      },
    ],
    cta: {
      headline: "Quero entender meu mercado.",
      subheadline:
        "Vamos mapear quais perguntas estratégicas precisam ser respondidas para você decidir com mais segurança.",
    },
  },

  // ============ ANÁLISE DE DADOS ============
  {
    id: "dados",
    tab: "Análise de Dados",
    eyebrow: "Serviço 03 — Inteligência",
    Icon: BarChart3,
    hero: {
      headline: "Você tem dados, mas ainda não consegue transformá-los em decisões.",
      subheadline:
        "Transformamos dados e planilhas em dashboards e análises claras para apoiar decisões de negócio em tempo real.",
      cta: "Transforme dados em decisões",
    },
    problem: {
      headline: "Dados existem, mas não geram decisões pois são subutilizados ou incompreensíveis.",
      pains: [
        { text: "Planilhas e sistemas acumulam informação, mas não mostram claramente o que fazer." },
        { text: "Relatórios manuais chegam tarde e dificultam decisões rápidas." },
        { text: "Indicadores importantes ficam dispersos, sem uma fonte única de verdade." },
        { text: "O time percebe que há valor nos dados, mas não consegue traduzi-los em ação." },
        { text: "Sem visualização clara, reuniões continuam baseadas em opinião e urgência." },
        { text: "A empresa perde oportunidades porque não acompanha padrões, tendências e alertas em tempo real." },
      ],
    },
    solution: {
      eyebrow: "Como resolvemos",
      headline: "Transformamos dados em dashboards e insights que a empresa realmente usa.",
      description:
        "Estruturamos bases, automatizamos análises e construímos visualizações acessíveis para que os dados deixem de ser ruído e passem a orientar decisões.",
      steps: [
        {
          title: "Auditoria de dados",
          description: "Mapeamos fontes, qualidade, lacunas e perguntas de negócio que os dados precisam responder.",
        },
        {
          title: "Estruturação e ETL",
          description: "Limpamos e integramos bases para criar uma fonte confiável e utilizável no dia a dia.",
        },
        {
          title: "Análise estatística",
          description: "Geramos leituras estatísticas e insights que explicam o cenário atual e apontam oportunidades.",
        },
        {
          title: "Dashboards e capacitação",
          description: "Entregamos painéis visuais, atualizáveis e acessíveis para apoiar decisões contínuas.",
        },
      ],
    },
    benefits: {
      eyebrow: "O que você ganha",
      headline: "Inteligência visual, acessível e atualizada para decidir melhor.",
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
        client: "Rede Nacional de Moda",
        segment: "Varejo · 18 lojas",
        result: "Ruptura de estoque reduzida em 45% com modelo preditivo de demanda por SKU.",
        metric: "-45%",
        quote: "A empresa enfrentava dificuldades para equilibrar estoque entre lojas e evitar rupturas. Com a análise de dados da UFABC Jr., construímos um modelo preditivo por SKU e ponto de venda, permitindo reposição mais assertiva e redução significativa de perdas.",
      },
      {
        client: "Fintech B2B",
        segment: "Tecnologia Financeira · 1.500 contas",
        result: "Clientes em risco de churn identificados 50 dias antes, com retenção de 70%.",
        metric: "70%",
        quote: "A fintech queria reduzir a perda de clientes antes que eles tomassem a decisão de sair. Através de análise comportamental e modelagem preditiva, criamos alertas antecipados que permitiram ações de retenção direcionadas.",
      },
      {
        client: "Indústria de Autopeças",
        segment: "Automotivo · Nacional",
        result: "Tempo de geração de relatórios gerenciais reduzido em 60% com dashboard unificado.",
        metric: "-60%",
        quote: "A indústria tinha dados espalhados por planilhas e sistemas diferentes, dificultando a tomada de decisão. Desenvolvemos dashboards integrados que consolidaram indicadores-chave e aceleraram a análise gerencial.",
      },
    ],
    cta: {
      headline: "Quero ver meus dados funcionando.",
      subheadline:
        "Vamos entender como transformar suas bases atuais em análises, dashboards e decisões mais claras.",
    },
  },
];
