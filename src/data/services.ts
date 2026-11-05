export type Package = {name: string; price: number; quantity: string; delivery: string; revisions: number; active: boolean};
export type Service = {slug: string; name: string; short: string; description: string; category: string; image?: string; alt: string; kind: 'product'|'portrait'|'video'|'resume'|'audio'|'campaign'|'web'|'search'; uses: string[]; materials: string; note: string; packages: Package[]; faq: [string,string][]};
const pack = (price: number, quantity: string, delivery = 'Até 3 dias úteis', revisions = 1): Package => ({name:'Básico',price,quantity,delivery,revisions,active:true});
export const services: Service[] = [
  {
    "slug": "artes-comerciais",
    "name": "Artes e kits de divulgação",
    "short": "Sua próxima promoção merece chamar atenção.",
    "description": "Envie fotos do seu estabelecimento e sua oferta. Criamos uma campanha profissional para Instagram, Stories e WhatsApp.",
    "category": "PARA NEGÓCIOS LOCAIS",
    "kind": "campaign",
    "image": "campanha-barbearia.jpg",
    "alt": "Conceito demonstrativo IA Fácil: Artes e kits de divulgação",
    "uses": [
      "Artes de ofertas e promoções",
      "Campanhas para comércios locais",
      "Adaptações para feed e Stories",
      "Legenda de apoio",
      "Pacotes mensais sob orçamento"
    ],
    "materials": "Envie 1 ou 2 fotos nítidas do estabelecimento, nome, logotipo se houver, oferta, preço e contato autorizado. Podemos solicitar imagens adicionais.",
    "note": "O kit adapta uma mesma campanha a diferentes formatos. O exemplo é fictício e não representa trabalho entregue a um cliente.",
    "packages": [
      {
        "name": "Projeto personalizado",
        "price": 0,
        "quantity": "1 arte principal + adaptações para feed e Stories",
        "delivery": "Prazo definido no orçamento",
        "revisions": 1,
        "active": true
      }
    ],
    "faq": [
      [
        "Como o projeto começa?",
        "Envie seu material e objetivo pelo Direct. Confirmamos viabilidade, entregas, valor e prazo antes de começar."
      ],
      [
        "O que está incluído?",
        "1 arte principal + adaptações para feed e Stories. Uma rodada de ajustes dentro do escopo aprovado. O kit adapta uma mesma campanha a diferentes formatos. O exemplo é fictício e não representa trabalho entregue a um cliente."
      ]
    ]
  },
  {
    "slug": "fotos-comerciais",
    "name": "Kit de fotos comerciais para produtos",
    "short": "3 imagens comerciais para apresentar melhor o seu produto.",
    "description": "Transformamos as fotos de um mesmo produto em 3 imagens comerciais com cenários e iluminação planejados. Alimentos também podem ser atendidos dentro do escopo combinado.",
    "category": "PARA NEGÓCIOS LOCAIS",
    "kind": "product",
    "image": "pizza-comercial.jpg",
    "alt": "Conceito demonstrativo IA Fácil: Fotos comerciais de produtos",
    "uses": [
      "Produtos e cosméticos",
      "Alimentos e gastronomia",
      "Catálogos e lojas virtuais",
      "Redes sociais",
      "Composições para anúncios"
    ],
    "materials": "Envie fotos nítidas do mesmo produto em diferentes ângulos e referências do visual desejado. Confirmamos formatos, cenas e escopo antes de começar.",
    "note": "Características essenciais do produto devem ser preservadas. Detalhes e textos são conferidos na aprovação. As imagens do portfólio são conceitos fictícios.",
    "packages": [
      {
        "name": "Kit com 3 imagens",
        "price": 99,
        "quantity": "3 imagens comerciais finalizadas de um mesmo produto",
        "delivery": "Até 3 dias úteis",
        "revisions": 1,
        "active": true
      }
    ],
    "faq": [
      [
        "Como o projeto começa?",
        "Envie seu material e objetivo pelo Direct. Confirmamos viabilidade, entregas, valor e prazo antes de começar."
      ],
      [
        "O que está incluído?",
        "3 imagens comerciais finalizadas. Uma rodada de ajustes dentro do escopo aprovado. Características essenciais do produto devem ser preservadas. Detalhes e textos são conferidos na aprovação. As imagens do portfólio são conceitos fictícios."
      ]
    ]
  },
  {
    "slug": "sites-catalogos",
    "name": "Sites, cardápios e catálogos",
    "short": "Seu negócio com endereço próprio na internet.",
    "description": "Reúna serviços, produtos, preços e contato em uma página profissional que funciona no celular e facilita o próximo passo do cliente.",
    "category": "PARA NEGÓCIOS LOCAIS",
    "kind": "web",
    "image": "site-cardapio.svg",
    "alt": "Conceito demonstrativo IA Fácil: Sites, cardápios e catálogos",
    "uses": [
      "Página comercial responsiva",
      "Cardápio ou catálogo simples",
      "Botão para contato e pedidos",
      "Apresentação de serviços",
      "Atualizações sob orçamento"
    ],
    "materials": "Envie nome, identidade visual, fotos autorizadas, itens, preços, horários e contatos que deseja publicar.",
    "note": "Domínio, hospedagem, quantidade de itens e manutenção são definidos no orçamento. O escopo inicial não inclui checkout, estoque ou pagamentos automáticos.",
    "packages": [
      {
        "name": "Projeto personalizado",
        "price": 0,
        "quantity": "1 página comercial com catálogo simples e contato",
        "delivery": "Prazo definido no orçamento",
        "revisions": 1,
        "active": true
      }
    ],
    "faq": [
      [
        "Como o projeto começa?",
        "Envie seu material e objetivo pelo Direct. Confirmamos viabilidade, entregas, valor e prazo antes de começar."
      ],
      [
        "O que está incluído?",
        "1 página comercial com catálogo simples e contato. Uma rodada de ajustes dentro do escopo aprovado. Domínio, hospedagem, quantidade de itens e manutenção são definidos no orçamento. O escopo inicial não inclui checkout, estoque ou pagamentos automáticos."
      ]
    ]
  },
  {
    "slug": "presenca-digital",
    "name": "Presença digital no Google e nas IAs",
    "short": "Seu negócio está fácil de encontrar e entender?",
    "description": "Analisamos as informações públicas da sua empresa, identificamos obstáculos e organizamos um plano de melhorias para Google e buscas com IA.",
    "category": "PARA NEGÓCIOS LOCAIS",
    "kind": "search",
    "image": "presenca-digital.svg",
    "alt": "Conceito demonstrativo IA Fácil: Presença digital no Google e nas IAs",
    "uses": [
      "Diagnóstico com evidências",
      "Análise de site e perfis públicos",
      "Coerência de horários e contatos",
      "Prioridades de melhoria",
      "Implementação e acompanhamento opcionais"
    ],
    "materials": "Envie nome e localização do negócio, site e links dos perfis públicos. Acessos administrativos só serão necessários para correções autorizadas.",
    "note": "Não garantimos inclusão, posição ou recomendações em respostas de IA. Diagnóstico, implementação e acompanhamento têm escopos separados.",
    "packages": [
      {
        "name": "Projeto personalizado",
        "price": 0,
        "quantity": "Diagnóstico + relatório de prioridades",
        "delivery": "Prazo definido no orçamento",
        "revisions": 1,
        "active": true
      }
    ],
    "faq": [
      [
        "Como o projeto começa?",
        "Envie seu material e objetivo pelo Direct. Confirmamos viabilidade, entregas, valor e prazo antes de começar."
      ],
      [
        "O que está incluído?",
        "Diagnóstico + relatório de prioridades. Uma rodada de ajustes dentro do escopo aprovado. Não garantimos inclusão, posição ou recomendações em respostas de IA. Diagnóstico, implementação e acompanhamento têm escopos separados."
      ]
    ]
  },
  {
    "slug": "videos-curtos",
    "name": "Vídeos curtos comerciais",
    "short": "Coloque sua promoção em movimento.",
    "description": "Vídeos verticais para apresentar produtos, serviços e novidades com roteiro, edição e textos que comunicam sua oferta com clareza.",
    "category": "PARA NEGÓCIOS LOCAIS",
    "kind": "video",
    "image": "video-conceito.svg",
    "alt": "Conceito demonstrativo IA Fácil: Vídeos curtos comerciais",
    "uses": [
      "Reels e Stories",
      "Promoções e lançamentos",
      "Apresentação de produtos",
      "Animação de fotos e textos",
      "Legendas para vídeos curtos"
    ],
    "materials": "Envie fotos ou vídeos autorizados, oferta, logotipo e referências. Informe se deseja música ou locução.",
    "note": "Serviço em preparação: contratação depende de disponibilidade e validação técnica. A imagem é um conceito visual; nenhum vídeo final é apresentado como entrega real.",
    "packages": [
      {
        "name": "Projeto personalizado",
        "price": 0,
        "quantity": "Conceito inicial: vídeo vertical de até 15 segundos",
        "delivery": "Prazo definido no orçamento",
        "revisions": 1,
        "active": true
      }
    ],
    "faq": [
      [
        "Como o projeto começa?",
        "Envie seu material e objetivo pelo Direct. Confirmamos viabilidade, entregas, valor e prazo antes de começar."
      ],
      [
        "O que está incluído?",
        "Conceito inicial: vídeo vertical de até 15 segundos. Uma rodada de ajustes dentro do escopo aprovado. Serviço em preparação: contratação depende de disponibilidade e validação técnica. A imagem é um conceito visual; nenhum vídeo final é apresentado como entrega real."
      ]
    ]
  }
];
export const currency = (value: number) => new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(value);
export const activePackages = (s: Service) => s.packages.filter(p=>p.active);
export const fromPrice = (s: Service) => Math.min(...activePackages(s).map(p=>p.price));
