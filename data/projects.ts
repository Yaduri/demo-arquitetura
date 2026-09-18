export interface Project {
  id: string;
  title: string;
  subtitle: string;
  condo: string;
  location: string;
  area: string;
  year: string;
  category: "Serra do Japi" | "Condomínio Fechado" | "Casa de Campo" | "Balanço Estrutural";
  tags: string[];
  coverImage: string;
  gallery: string[];
  concept: string;
  features: string[];
  terrainChallenge: string;
  architecturalHighlights: {
    label: string;
    value: string;
  }[];
}

export const PROJECTS: Project[] = [
  {
    id: "casa-mirante-japi",
    title: "Residência Mirante do Japi",
    subtitle: "Integração bioclimática e balanços esculturais sobre a mata nativa",
    condo: "Reserva da Serra",
    location: "Jundiaí - SP",
    area: "680 m²",
    year: "2024",
    category: "Serra do Japi",
    tags: ["Declive Acentuado", "Piscina com Borda Infinita", "Concreto Aparente", "Biofilia"],
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=85",
    ],
    concept:
      "Implantada em um lote com declive de 14 metros, a Residência Mirante do Japi foi concebida para que nenhum cômodo perdesse a vista perene para a reserva ecológica. O pavimento social paira sobre pilotis de concreto ripado, permitindo que a vegetação nativa continue fluindo sob a edificação.",
    features: [
      "Vãos livres de 12 metros sem pilares intermediários na área social",
      "Piscina em balanço com visor subaquático de acrílico",
      "Brises móveis de madeira Cumaru para controle de insolação poente",
      "Captação de águas pluviais de 15.000L para irrigação do jardim vertical",
    ],
    terrainChallenge: "Terreno em acentuado declive com solo rochoso e preservação estrita de árvores nativas no terço posterior.",
    architecturalHighlights: [
      { label: "Área Construída", value: "680 m²" },
      { label: "Área do Terreno", value: "1.450 m²" },
      { label: "Prazo de Concepção", value: "4 meses" },
      { label: "Orientação Solar", value: "Norte-Nordeste com vista Serra" },
    ],
  },
  {
    id: "casa-serrazul-horizonte",
    title: "Casa Serrazul Horizonte",
    subtitle: "Minimalismo horizontal e pátios internos com luz zenital",
    condo: "Fazenda Serrazul",
    location: "Jundiaí - SP",
    area: "820 m²",
    year: "2023",
    category: "Condomínio Fechado",
    tags: ["Térrea de Luxo", "Adega Subterrânea", "Pátios Internos", "Painéis Solares"],
    coverImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85",
    ],
    concept:
      "Localizada no prestigiado condomínio Fazenda Serrazul, esta residência unifamiliar adota uma volumetria horizontal pura. A planta se organiza ao redor de três pátios ajardinados que garantem ventilação cruzada e privacidade absoluta aos moradores.",
    features: [
      "Integração total entre living, cozinha gourmet e deck externo por esquadrias embutidas",
      "Adega climatizada para 800 garrafas em nível semi-enterrado de pedra moledo",
      "Suíte master de 95 m² com jardim privativo e banheira esculpida em granito preto são gabriel escovado",
      "Cobertura verde que reduz a amplitude térmica em até 5°C",
    ],
    terrainChallenge: "Lote de esquina plano com exigência de recuos generosos da associação do condomínio e proteção acústica.",
    architecturalHighlights: [
      { label: "Área Construída", value: "820 m²" },
      { label: "Área do Terreno", value: "2.100 m²" },
      { label: "Prazo de Concepção", value: "5 meses" },
      { label: "Orientação Solar", value: "Face Norte nos quartos" },
    ],
  },
  {
    id: "casa-paineiras-atrium",
    title: "Villa Quinta das Paineiras",
    subtitle: "Harmonia entre aço corten, pedra bruta e transparência",
    condo: "Quinta das Paineiras",
    location: "Jundiaí - SP",
    area: "540 m²",
    year: "2024",
    category: "Balanço Estrutural",
    tags: ["Aço Corten", "Pé-Direito Duplo", "Gourmet Integrado", "Lareira Externa"],
    coverImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85",
    ],
    concept:
      "Uma composição de caixas sobrepostas que criam generosos terraços e áreas sombreadas. O uso expressivo do aço corten em contraste com a pedra moledo de pedreiras regionais homenageia a textura terrosa de Jundiaí e a robustez do design moderno.",
    features: [
      "Living com pé-direito de 6,2 metros e esquadrias piso-teto de alto isolamento térmico",
      "Lareira ao ar livre (fire pit) esculpida no deck de madeira teca",
      "Garagem subterrânea para 4 veículos com tomada ultrarrápida para carros elétricos",
      "Automação luminotécnica com cenas programáveis via smartphone",
    ],
    terrainChallenge: "Lote em aclive moderado com desnível de 4,5m em relação à rua, solucionado com rampa suave ajardinada.",
    architecturalHighlights: [
      { label: "Área Construída", value: "540 m²" },
      { label: "Área do Terreno", value: "1.100 m²" },
      { label: "Prazo de Concepção", value: "3,5 meses" },
      { label: "Orientação Solar", value: "Leste-Oeste equilibrada" },
    ],
  },
  {
    id: "casa-jatobas-bosque",
    title: "Casa Bosque dos Jatobás",
    subtitle: "Arquitetura que abraça a copa das árvores centenárias",
    condo: "Bosque dos Jatobás",
    location: "Jundiaí - SP",
    area: "490 m²",
    year: "2023",
    category: "Casa de Campo",
    tags: ["Sustentabilidade", "Passarelas Aéreas", "Spa Aquecido", "Madeira Laminada"],
    coverImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1600&q=85",
    ],
    concept:
      "Construída com estrutura mista de madeira engenheirada (MLC) e concreto, esta residência se camufla perfeitamente na densa arborização do Bosque dos Jatobás. Grandes varandas e passarelas aéreas levam os moradores a vivenciarem a natureza em todos os pavimentos.",
    features: [
      "Estrutura aparente em madeira laminada colada de manejo sustentável",
      "Spa privativo ao ar livre integrado à vegetação existente",
      "Sistema de ventilação termo-sifão que dispensa ar-condicionado na maior parte do ano",
      "Cozinha orgânica conectada a horta medicinal elevada",
    ],
    terrainChallenge: "Preservação obrigatória de 6 árvores nativas de grande porte dentro do perímetro de implantação.",
    architecturalHighlights: [
      { label: "Área Construída", value: "490 m²" },
      { label: "Área do Terreno", value: "980 m²" },
      { label: "Prazo de Concepção", value: "3 meses" },
      { label: "Orientação Solar", value: "Nordeste privilegiada" },
    ],
  },
  {
    id: "casa-malota-escultura",
    title: "Residência Encosta da Malota",
    subtitle: "Geometria audaciosa em balanço panorâmico com vistas espetaculares",
    condo: "Chácara Malota",
    location: "Jundiaí - SP",
    area: "750 m²",
    year: "2024",
    category: "Balanço Estrutural",
    tags: ["Balanço de 7 Metros", "Cinema Acústico", "Piscina Aquecida", "Design Autoral"],
    coverImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85",
    ],
    concept:
      "Na prestigiada e arborizada região da Malota, a Residência Encosta é definida por uma suíte principal em balanço estrutural de 7 metros que desafia a gravidade sobre o jardim posterior. O piso de mármore travertino romano navona se estende continuamente de dentro para fora.",
    features: [
      "Balanço estrutural metálico revestido em alumínio ripado amadeirado sem manutenção",
      "Piscina com raia de 20 metros e prainha para crianças",
      "Sala de cinema privativa com isolamento acústico de estúdio profissional",
      "Paisagismo assinado com espécies da flora atlântica de baixa demanda hídrica",
    ],
    terrainChallenge: "Terreno em curva de nível complexa com restrições rígidas de altura máxima de cumeeira.",
    architecturalHighlights: [
      { label: "Área Construída", value: "750 m²" },
      { label: "Área do Terreno", value: "1.800 m²" },
      { label: "Prazo de Concepção", value: "4,5 meses" },
      { label: "Orientação Solar", value: "Norte puro" },
    ],
  },
];
