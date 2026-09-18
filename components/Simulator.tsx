"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faCheck,
  faArrowRight,
  faWandMagicSparkles,
  faClock,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Simulator() {
  const [area, setArea] = useState(480);
  const [terrainType, setTerrainType] = useState<"plano" | "moderado" | "acentuado">("moderado");
  const [suites, setSuites] = useState(4);
  const [amenities, setAmenities] = useState<string[]>([
    "piscina-infinita",
    "gourmet-integrado",
    "solar-cisterna",
  ]);

  const toggleAmenity = (id: string) => {
    setAmenities((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Dynamic calculations
  const baseCostPerSqm =
    terrainType === "plano" ? 6400 : terrainType === "moderado" ? 7200 : 8100;
  
  const amenitiesCostFactor = amenities.length * 180;
  const finalCostMin = (baseCostPerSqm + amenitiesCostFactor) * area;
  const finalCostMax = finalCostMin * 1.25;

  const estimatedMonths = area > 700 || terrainType === "acentuado" ? "4.5 a 6 meses" : "3.5 a 4.5 meses";

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const getTerrainName = () => {
    if (terrainType === "plano") return "Plano / Aclive Leve";
    if (terrainType === "moderado") return "Declive Médio com Vista";
    return "Declive Acentuado (Serra do Japi)";
  };

  const generateWhatsAppMessage = () => {
    const text = `Olá, Juliana Prado! Gostaria de conversar sobre a simulação que fiz no site do Studio Japi:\n\n- Área Estimada: ${area} m²\n- Terreno: ${getTerrainName()}\n- Suítes: ${suites}\n- Comodidades: ${amenities.length} selecionadas\n- Investimento Estimado: ${formatCurrency(finalCostMin)} a ${formatCurrency(finalCostMax)}\n\nGostaria de agendar uma Sessão de Diagnóstico para o meu lote em Jundiaí.`;
    return `https://wa.me/5511999998888?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="simulador" className="py-24 bg-white relative border-t border-japi-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-japi-forest/10 text-japi-forest text-xs font-semibold uppercase tracking-wider mb-2">
            <FontAwesomeIcon icon={faCalculator} className="w-3.5 h-3.5" />
            <span>Ferramenta Interativa de Planejamento</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-japi-charcoal leading-tight">
            Simulador de Estimativa e Viabilidade de Obra
          </h2>
          <p className="text-sm sm:text-base text-japi-muted mt-3">
            Ajuste a metragem, topografia do seu lote e comodidades desejadas para receber uma projeção realista de prazos de projeto e investimentos para o padrão de condomínios de Jundiaí.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-japi-sand/40 p-6 sm:p-8 rounded-2xl border border-japi-border space-y-8">
            
            {/* 1. Area Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-japi-charcoal">
                  1. Área Construída Desejada
                </label>
                <span className="font-serif text-2xl font-medium text-japi-forest">
                  {area} m²
                </span>
              </div>
              <input
                type="range"
                min="250"
                max="1200"
                step="10"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-2.5 bg-japi-cream rounded-lg appearance-none cursor-pointer accent-japi-forest"
              />
              <div className="flex justify-between text-[11px] text-japi-muted mt-1.5 font-medium">
                <span>250 m² (Compacta de Luxo)</span>
                <span>650 m²</span>
                <span>1.200 m² (Mansão Monumental)</span>
              </div>
            </div>

            {/* 2. Terrain Topography */}
            <div>
              <label className="block text-sm font-semibold text-japi-charcoal mb-3">
                2. Topografia do Terreno
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: "plano", label: "Plano / Aclive Leve", desc: "Menor custo de contenção" },
                  { id: "moderado", label: "Declive Moderado", desc: "Vista e integração vertical" },
                  { id: "acentuado", label: "Serra do Japi (Declive)", desc: "Balanços esculturais e mirante" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTerrainType(item.id as any)}
                    className={`p-3.5 rounded-xl text-left border text-xs transition-all ${
                      terrainType === item.id
                        ? "bg-white border-japi-forest shadow-sm ring-1 ring-japi-forest text-japi-charcoal"
                        : "bg-white/60 border-japi-border hover:bg-white text-japi-muted"
                    }`}
                  >
                    <p className="font-semibold text-japi-charcoal">{item.label}</p>
                    <p className="text-[11px] text-japi-muted mt-0.5">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Number of Suites */}
            <div>
              <label className="block text-sm font-semibold text-japi-charcoal mb-3">
                3. Quantidade de Suítes
              </label>
              <div className="flex gap-3">
                {[3, 4, 5, 6].map((num) => (
                  <button
                    key={num}
                    onClick={() => setSuites(num)}
                    className={`flex-1 py-3 rounded-xl border text-sm font-medium transition-all ${
                      suites === num
                        ? "bg-japi-forest text-white border-japi-forest shadow-sm"
                        : "bg-white text-japi-charcoal border-japi-border hover:bg-japi-sand"
                    }`}
                  >
                    {num} {num === 6 ? "+ Suítes" : "Suítes"}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Luxury Amenities */}
            <div>
              <label className="block text-sm font-semibold text-japi-charcoal mb-3">
                4. Comodidades & Estruturas Especiais
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: "piscina-infinita", label: "Piscina Borda Infinita + Spa" },
                  { id: "gourmet-integrado", label: "Espaço Gourmet & Churrasqueira" },
                  { id: "adega-subterranea", label: "Adega Climatizada em Rocha" },
                  { id: "garagem-subsolo", label: "Garagem Subterrânea (4+ vagas)" },
                  { id: "solar-cisterna", label: "Energia Solar + Reúso Pluvial" },
                  { id: "cinema-privativo", label: "Home Theater Acústico" },
                ].map((item) => {
                  const isChecked = amenities.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleAmenity(item.id)}
                      className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer text-xs font-medium transition-all ${
                        isChecked
                          ? "bg-white border-japi-forest text-japi-charcoal shadow-sm"
                          : "bg-white/60 border-japi-border text-japi-muted hover:bg-white"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center border ${
                          isChecked
                            ? "bg-japi-forest border-japi-forest text-white"
                            : "border-japi-muted/50 bg-white"
                        }`}
                      >
                        {isChecked && <FontAwesomeIcon icon={faCheck} className="w-2.5 h-2.5" />}
                      </div>
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Results Box */}
          <div className="lg:col-span-5 bg-japi-charcoal text-white p-6 sm:p-8 rounded-2xl shadow-elevated border border-white/10 space-y-6 sticky top-28">
            
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                Resultado da Projeção de Viabilidade
              </span>
              <h3 className="font-serif text-2xl font-light text-white mt-1">
                Estimativa para {area} m² em Jundiaí
              </h3>
            </div>

            {/* Estimated Budget Range */}
            <div className="space-y-1">
              <span className="text-xs text-gray-400">Faixa de Investimento Construtivo Estimado</span>
              <p className="font-serif text-3xl sm:text-4xl text-white font-normal">
                {formatCurrency(finalCostMin)}
              </p>
              <p className="text-xs text-gray-400">
                até {formatCurrency(finalCostMax)} (padrão alto luxo em condomínio)
              </p>
            </div>

            {/* Metric badges */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-1.5 text-xs text-emerald-300">
                  <FontAwesomeIcon icon={faClock} className="w-3.5 h-3.5" />
                  <span>Concepção & Aprovação</span>
                </div>
                <p className="font-serif text-base text-white mt-1">{estimatedMonths}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-1.5 text-xs text-amber-300">
                  <FontAwesomeIcon icon={faCoins} className="w-3.5 h-3.5" />
                  <span>Valorização Esperada</span>
                </div>
                <p className="font-serif text-base text-white mt-1">+35% a +45% pós-obra</p>
              </div>
            </div>

            {/* Insight recommendation */}
            <div className="p-4 rounded-xl bg-japi-forest/40 border border-japi-forest/60 text-xs text-emerald-100 leading-relaxed">
              <div className="flex items-center gap-1.5 font-semibold text-white mb-1">
                <FontAwesomeIcon icon={faWandMagicSparkles} className="w-3.5 h-3.5 text-japi-wood" />
                <span>Recomendação Técnica Studio Japi</span>
              </div>
              Para {area}m² com {suites} suítes em terreno {getTerrainName().toLowerCase()}, recomendamos volumetria em balanço que minimiza muros de arrimo dispendiosos e garante que todos os quartos aproveitem a ventilação natural da serra.
            </div>

            {/* Action CTA */}
            <div className="pt-2 space-y-3">
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-xl text-sm font-semibold transition-all shadow-md"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4 text-lg" />
                <span>Enviar Simulação no WhatsApp VIP</span>
              </a>

              <a
                href="#diagnostico"
                className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl text-xs font-medium transition-all"
              >
                <span>Agendar Sessão Presencial no Studio Japi</span>
                <FontAwesomeIcon icon={faArrowRight} className="w-3.5 h-3.5" />
              </a>
            </div>

            <p className="text-[10px] text-center text-gray-400">
              *Valores de obra baseados no CUB-SP médio para padrão alto luxo unifamiliar. O projeto arquitetônico e executivo é orçado sob medida após diagnóstico.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
