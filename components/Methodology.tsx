"use client";

import React, { useState } from "react";
import { Compass, Box, Layers, FileCheck, HardHat, ChevronRight } from "lucide-react";

export default function Methodology() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      icon: Compass,
      title: "Diagnóstico Topoclimático do Lote",
      subtitle: "Leitura minuciosa da geografia e dos ventos",
      description:
        "Visitamos o terreno em Jundiaí antes de traçar o primeiro risco. Mapeamos as curvas de nível, a incidência solar nas quatro estações do ano e os pontos focais de vista para a Serra do Japi. Isso nos permite posicionar as áreas sociais e íntimas com conforto térmico natural supremo.",
      deliverable: "Relatório de Viabilidade & Estudo Solar Tridimensional",
    },
    {
      number: "02",
      icon: Box,
      title: "Concepção Autoral & Maquete 3D",
      subtitle: "Vivencie sua futura casa antes da obra",
      description:
        "Apresentamos a volumetria completa através de renderizações fotorrealistas e plantas humanizadas. Você caminha virtualmente pelos ambientes, entende a integração dos pátios e escolhe os acabamentos nobres com total segurança emocional.",
      deliverable: "Caderno Conceitual, Renders 4K e Animação em Vídeo",
    },
    {
      number: "03",
      icon: Layers,
      title: "Projeto Executivo & BIM Integrado",
      subtitle: "Precisão milimétrica que blinda seu orçamento",
      description:
        "Desenvolvemos centenas de pranchas técnicas detalhadas. Todos os projetos complementares (cálculo estrutural, instalações elétricas, hidráulica pressurizada, automação e ar-condicionado) são compatibilizados em software BIM para antecipar qualquer interferência física.",
      deliverable: "Caderno Executivo Completo para Orçamentação de Construtoras",
    },
    {
      number: "04",
      icon: FileCheck,
      title: "Aprovações no Condomínio & Prefeitura",
      subtitle: "Burocracia zero para o cliente",
      description:
        "Conduzimos todo o protocolo junto à associação de moradores do condomínio e à Prefeitura Municipal de Jundiaí. Nossa experiência prévia em dezenas de aprovações garante trâmite célere sem exigências de correções ou atrasos no cronograma.",
      deliverable: "Alvará de Construção e Aprovação do Comitê de Obras",
    },
    {
      number: "05",
      icon: HardHat,
      title: "Assessoria Técnica no Canteiro de Obras",
      subtitle: "A garantia de que o projeto será executado à risca",
      description:
        "Realizamos vistorias técnicas periódicas durante a fase de fundação, estrutura e acabamentos. Conferimos se a construtora está respeitando os detalhes de paginação de mármores, juntas de dilatação do concreto e esquadrias embutidas.",
      deliverable: "Relatórios de Vistoria Técnica e Validação de Etapas",
    },
  ];

  return (
    <section id="metodologia" className="py-24 bg-japi-warm relative border-t border-japi-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-widest text-japi-wood uppercase">
            Rigor & Previsibilidade
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-japi-charcoal mt-2 leading-tight">
            Nossa Metodologia em 5 Etapas: da terra virgem à entrega das chaves
          </h2>
          <p className="text-sm sm:text-base text-japi-muted mt-3">
            Construir uma casa de alto padrão não precisa ser sinônimo de estresse e imprevistos. Nosso método foi aperfeiçoado ao longo de 12 anos para garantir tranquilidade absoluta.
          </p>
        </div>

        {/* Step Tabs / Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  isActive
                    ? "bg-japi-forest text-white border-japi-forest shadow-md"
                    : "bg-white text-japi-charcoal border-japi-border hover:bg-japi-sand"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold font-serif ${isActive ? "text-emerald-300" : "text-japi-wood"}`}>
                    Etapa {s.number}
                  </span>
                  <Icon className="w-4 h-4 opacity-75" />
                </div>
                <p className={`text-xs font-semibold line-clamp-1 ${isActive ? "text-white" : "text-japi-charcoal"}`}>
                  {s.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        <div className="bg-white rounded-2xl border border-japi-border shadow-card p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-serif text-3xl sm:text-4xl font-light text-japi-wood">
                  {steps[activeStep].number}
                </span>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-japi-charcoal font-medium">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-xs text-japi-muted uppercase tracking-wider mt-0.5">
                    {steps[activeStep].subtitle}
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-japi-charcoal/90 leading-relaxed pt-2">
                {steps[activeStep].description}
              </p>

              {/* Deliverable Pill */}
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-2 text-xs">
                <span className="font-semibold text-japi-forest uppercase tracking-wider">
                  Entregável Formal desta etapa:
                </span>
                <span className="px-3 py-1 rounded-md bg-japi-sand text-japi-charcoal font-medium border border-japi-border">
                  {steps[activeStep].deliverable}
                </span>
              </div>
            </div>

            {/* Step Visual Highlight */}
            <div className="lg:col-span-4 bg-japi-sand/50 p-6 rounded-xl border border-japi-border space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-japi-charcoal">
                Diferencial Studio Japi
              </h4>
              <p className="text-xs text-japi-muted leading-relaxed">
                Nossos clientes recebem acesso a uma plataforma digital exclusiva onde acompanham cada prancha, reunião e checklist técnico em tempo real, mesmo se estiverem viajando a trabalho.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-japi-warm border border-japi-border text-japi-forest py-2.5 rounded-lg text-xs font-semibold transition-colors"
                >
                  <span>Próxima Etapa</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
