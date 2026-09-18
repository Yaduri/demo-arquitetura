"use client";

import React from "react";
import { Sun, Layers, Cpu, CheckCircle2, Compass, Quote } from "lucide-react";

export default function AboutArchitect() {
  const pillars = [
    {
      icon: Sun,
      title: "Bioclimatismo & Topografia Autoral",
      description:
        "Cada projeto nasce do estudo dos ventos canalizados pela Serra do Japi e da rota solar anual. Desenhamos beirais calculados para captar o sol agradável do inverno e bloquear o calor do poente, reduzindo o consumo de climatização em até 40%.",
    },
    {
      icon: Layers,
      title: "Verdade dos Materiais & Texturas Nobres",
      description:
        "Rejeitamos revestimentos sintéticos e tendências efêmeras. Trabalhamos com a sobriedade do concreto ripado, pedras naturais regionais (como moledo e granito escovado) e madeiras nobres que ganham ainda mais beleza com o passar dos anos.",
    },
    {
      icon: Cpu,
      title: "Tecnologia BIM & Orçamento Blindado",
      description:
        "Modelamos a edificação milimetricamente antes do primeiro tijolo ser assentado. A compatibilização tridimensional entre estrutura, elétrica, hidráulica e climatização elimina 98% dos conflitos e desperdícios no canteiro.",
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-japi-sand/50 relative overflow-hidden border-t border-japi-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold tracking-widest text-japi-wood uppercase">
            Filosofia & Liderança
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-japi-charcoal mt-2 leading-tight">
            Casas desenhadas para pertencer à paisagem, não para impor-se a ela.
          </h2>
        </div>

        {/* Architect Profile + Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Architect Photo Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card border-2 border-white aspect-[3/4] bg-japi-cream">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85"
                  alt="Arq. Juliana Prado - Arquiteta Fundadora do Studio Japi"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Float Card Quote */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 max-w-xs bg-japi-charcoal text-white p-5 rounded-2xl shadow-elevated border border-white/10">
                <Quote className="w-6 h-6 text-japi-wood mb-2 opacity-80" />
                <p className="font-serif text-sm italic leading-relaxed text-gray-200">
                  "Um projeto só é verdadeiramente bem-sucedido quando a família acorda e sente a paz de estar no melhor lugar do mundo."
                </p>
                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-medium text-emerald-300">Juliana Prado</span>
                  <span className="text-[10px] text-gray-400">CAU/SP 148.921</span>
                </div>
              </div>
            </div>
          </div>

          {/* Story & Philosophy */}
          <div className="lg:col-span-7 lg:pl-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-japi-forest/10 text-japi-forest text-xs font-medium">
              <Compass className="w-3.5 h-3.5" />
              <span>ARQ. JULIANA PRADO • FUNDADORA & DIRETORA CRIATIVA</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-japi-charcoal font-normal">
              12 anos transformando as paisagens de Jundiaí em refúgios contemporâneos
            </h3>

            <p className="text-japi-muted leading-relaxed">
              Formada pela <strong>Faculdade de Arquitetura e Urbanismo da USP (FAU-USP)</strong> com especialização em Arquitetura Sustentável em Milão, Juliana Prado fundou o Studio Japi com uma premissa clara: criar residências que dialoguem visceralmente com o microclima e a exuberância da Mata Atlântica de Jundiaí.
            </p>

            <p className="text-japi-muted leading-relaxed">
              Ao longo de mais de uma década, conduziu projetos de alta complexidade em terrenos com declives desafiadores, sempre priorizando a iluminação zenital, a privacidade entre vizinhos e o respeito rigoroso às diretrizes dos principais condomínios da região.
            </p>

            {/* Checklist items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-japi-border">
              {[
                "Projetos personalizados do croqui à entrega de chaves",
                "Acompanhamento e assessoria técnica no canteiro de obras",
                "Total domínio das leis de zoneamento de Jundiaí",
                "Compatibilização multidisciplinar em plataforma BIM",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-japi-charcoal font-medium">
                  <CheckCircle2 className="w-4 h-4 text-japi-forest flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-japi-border shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-japi-sand flex items-center justify-center text-japi-forest mb-6">
                    <Icon className="w-6 h-6 stroke-[1.7]" />
                  </div>
                  <h4 className="font-serif text-xl font-medium text-japi-charcoal mb-3">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-japi-muted leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-japi-sand flex items-center text-xs font-semibold text-japi-forest uppercase tracking-wider">
                  Pilar de Excelência 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
