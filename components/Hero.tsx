"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faLocationDot,
  faShieldHalved,
  faAward,
} from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#FAF8F5]">
      {/* Decorative architectural grid background */}
      <div className="absolute inset-0 architectural-grid opacity-60 pointer-events-none" />

      {/* Subtle organic light accent */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-japi-forest/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-4 sm:pt-8">
          
          {/* Left Column: Copywriting and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-japi-sand border border-japi-border text-japi-forest text-xs font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-japi-wood animate-pulse" />
              <span>ARQUITETURA RESIDENCIAL DE ALTO PADRÃO • JUNDIAÍ - SP</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-light tracking-tight text-japi-charcoal leading-[1.1]">
              Arquitetura viva que dialoga com a imponência da{" "}
              <span className="italic font-normal text-japi-forest font-serif underline decoration-japi-wood/40 decoration-wavy decoration-1 underline-offset-8">
                Serra do Japi.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-japi-muted max-w-xl font-normal leading-relaxed">
              Projetamos residências unifamiliares exclusivas nos principais condomínios de Jundiaí e região. Unimos o calor dos materiais naturais à precisão tecnológica do BIM para criar lares atemporais.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
              <a
                href="#diagnostico"
                className="inline-flex items-center justify-center gap-3 bg-japi-forest text-white px-7 py-4 rounded-xl text-sm font-medium hover:bg-japi-forest-light transition-all shadow-card hover:shadow-elevated group"
              >
                <span>Agendar Sessão de Diagnóstico de Terreno</span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a
                href="#projetos"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-medium text-japi-charcoal bg-white border border-japi-border hover:bg-japi-sand transition-colors"
              >
                <span>Explorar Projetos</span>
              </a>
            </div>

            {/* Trust badges */}
            <div className="pt-4 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-japi-muted border-t border-japi-border/70 w-full">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faLocationDot} className="w-3.5 h-3.5 text-japi-wood" />
                <span>Fazenda Serrazul, Paineiras, Bosque dos Jatobás e Malota</span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faShieldHalved} className="w-3.5 h-3.5 text-japi-forest" />
                <span>100% de aprovação em comitês de obras e prefeitura</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame with Luxury Border */}
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border-4 border-white aspect-[4/5] sm:aspect-[3/4] bg-japi-cream group">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                  alt="Residência contemporânea de alto padrão com vista para a Serra do Japi"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-japi-charcoal/80 via-transparent to-black/10" />

                {/* Overlaid project caption */}
                <div className="absolute bottom-5 left-5 right-5 text-white p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-emerald-300 font-medium">Obra Concluída • Reserva da Serra</p>
                      <p className="font-serif text-lg font-medium text-white">Residência Mirante do Japi</p>
                    </div>
                    <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full text-white/90">680 m²</span>
                  </div>
                </div>
              </div>

              {/* Floating Architectural Badge */}
              <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-card border border-japi-border hidden sm:flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-japi-forest/10 flex items-center justify-center text-japi-forest">
                  <FontAwesomeIcon icon={faAward} className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-serif text-2xl font-light text-japi-charcoal leading-none">FAU-USP</p>
                  <p className="text-xs text-japi-muted mt-1">12 Anos de Excelência Residencial</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Metrics Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 pt-8 border-t border-japi-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="space-y-1">
            <p className="font-serif text-3xl sm:text-4xl text-japi-forest font-light">+80.000m²</p>
            <p className="text-xs text-japi-muted uppercase tracking-wider">De Área Projetada e Construída</p>
          </div>
          <div className="space-y-1">
            <p className="font-serif text-3xl sm:text-4xl text-japi-charcoal font-light">12 Anos</p>
            <p className="text-xs text-japi-muted uppercase tracking-wider">Dedicados ao Alto Padrão</p>
          </div>
          <div className="space-y-1">
            <p className="font-serif text-3xl sm:text-4xl text-japi-wood font-light">100%</p>
            <p className="text-xs text-japi-muted uppercase tracking-wider">Aprovações em Condomínios</p>
          </div>
          <div className="space-y-1">
            <p className="font-serif text-3xl sm:text-4xl text-japi-forest font-light">BIM 3D</p>
            <p className="text-xs text-japi-muted uppercase tracking-wider">Compatibilização sem Retrabalho</p>
          </div>
        </div>
      </div>
    </section>
  );
}
