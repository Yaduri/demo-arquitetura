export interface FaqItem {
  question: string;
  answer: string;
  category: "Aprovações & Prazos" | "Terreno & Topografia" | "Metodologia & Obra" | "Investimento";
}

export const FAQS: FaqItem[] = [
  {
    question: "Como funciona o processo de aprovação na Prefeitura de Jundiaí e nas Associações de Condomínio?",
    answer:
      "Cuidamos de 100% do trâmite burocrático. Nos condomínios de Jundiaí (como Fazenda Serrazul, Reserva da Serra, Paineiras), submetemos o projeto primeiro ao comitê de obras interno para respeitar recuos, taxa de ocupação e gabarito. Em seguida, protocolamos o processo na Secretaria de Planejamento Urbano e Meio Ambiente de Jundiaí com memorial descritivo completo, garantindo aprovação ágil sem idas e vindas de correções.",
    category: "Aprovações & Prazos",
  },
  {
    question: "O Studio Japi atende terrenos com declive acentuado ou aclive na Serra do Japi?",
    answer:
      "Essa é exatamente a nossa maior especialidade técnica. Topografias desafiadoras são oportunidades de ouro para criar arquiteturas memoráveis: garagens subterrâneas discretas, balanços esculturais, piscinas infinitas que flutuam sobre a copa das árvores e corte/aterro mínimo para reduzir custos de fundação e contenção.",
    category: "Terreno & Topografia",
  },
  {
    question: "Vocês já participam antes mesmo de eu comprar o lote?",
    answer:
      "Sim! Recomendamos vivamente a nossa 'Sessão de Diagnóstico de Terreno' prévia. Analisamos a carta topográfica, zoneamento, insolação real (face norte/leste) e restrições ambientais antes de você assinar a escritura, evitando a compra de terrenos que encareceriam a fundação ou teriam vistas bloqueadas por vizinhos.",
    category: "Terreno & Topografia",
  },
  {
    question: "Qual a diferença entre Projeto Arquitetônico e Projeto Executivo com Compatibilização BIM?",
    answer:
      "O projeto arquitetônico define o conceito, volumetria, plantas e estética. Já o Projeto Executivo com compatibilização BIM (Building Information Modeling) integra a arquitetura milimetricamente aos projetos estrutural, elétrico, hidráulico e de climatização em 3D. Isso elimina 98% dos imprevistos e retrabalhos no canteiro de obras, blindando o seu orçamento.",
    category: "Metodologia & Obra",
  },
  {
    question: "O escritório faz o acompanhamento técnico durante a construção?",
    answer:
      "Sim. Oferecemos a assessoria técnica periódica de obra, realizando visitas programadas para auditar se a construtora está executando fielmente os detalhes construtivos, alinhamentos, paginações de pedra e especificações de materiais homologados no caderno executivo.",
    category: "Metodologia & Obra",
  },
  {
    question: "Quanto custa construir uma casa de alto padrão em Jundiaí atualmente?",
    answer:
      "O custo de construção em condomínios de alto padrão na região varia de acordo com a complexidade do terreno e o nível de acabamentos especificado (geralmente entre R$ 5.500 e R$ 9.500 por m² de obra construída). Nosso papel como arquitetos é otimizar cada metro quadrado e planejar sistemas eficientes para que o valor investido se traduza em valorização patrimonial imediata superior a 35%.",
    category: "Investimento",
  },
];
