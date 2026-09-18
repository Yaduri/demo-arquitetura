"use client";

import React, { useState, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWandMagicSparkles,
  faCircleCheck,
  faLeftRight,
} from "@fortawesome/free-solid-svg-icons";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = () => {
    isDragging.current = true;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleClick = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  return (
    <section id="antes-depois" className="py-24 bg-japi-sand/40 border-t border-japi-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-japi-warm border border-japi-border text-japi-wood text-xs font-semibold tracking-wider uppercase mb-3">
            <FontAwesomeIcon icon={faWandMagicSparkles} className="w-3.5 h-3.5" />
            <span>Fidelidade Construtiva Milimétrica</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-japi-charcoal leading-tight">
            O que você aprova no 3D é exatamente o que é entregue na obra.
          </h2>
          <p className="text-sm sm:text-base text-japi-muted mt-4 leading-relaxed">
            Arraste o controle interativo abaixo para comparar a maquete tridimensional fotorrealista aprovada pela família com a fotografia da residência finalizada no condomínio Fazenda Serrazul.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onClick={handleClick}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerUp}
            className="relative w-full aspect-[16/9] sm:aspect-[16/9] rounded-2xl overflow-hidden select-none cursor-ew-resize shadow-elevated border-4 border-white bg-black"
          >
            {/* Base Image: Real Delivered House (Right / After) */}
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85"
              alt="Fotografia da Obra Finalizada e Entregue"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />

            {/* Top Image Clipped: 3D Render (Left / Before) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85"
                alt="Maquete 3D Fotorrealista do Projeto"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : "100%",
                  height: "100%",
                }}
                draggable={false}
              />
              
              {/* Badge Left (Render) */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-japi-charcoal/80 backdrop-blur-md text-white px-3.5 py-1.5 rounded-lg text-xs font-medium tracking-wide border border-white/20 shadow-md">
                  1. Maquete 3D / Anteprojeto
                </span>
              </div>
            </div>

            {/* Badge Right (Real House) */}
            <div className="absolute top-4 right-4 z-10 pointer-events-none">
              <span className="bg-japi-forest/90 backdrop-blur-md text-white px-3.5 py-1.5 rounded-lg text-xs font-medium tracking-wide border border-white/20 shadow-md">
                2. Obra Construída & Concluída
              </span>
            </div>

            {/* Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Center Circular Handle */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white text-japi-charcoal shadow-2xl flex items-center justify-center border-2 border-japi-forest cursor-grab active:cursor-grabbing">
                <FontAwesomeIcon icon={faLeftRight} className="w-4 h-4 text-japi-forest" />
              </div>
            </div>

            {/* Bottom Hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none bg-black/60 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-[11px] sm:text-xs">
              ↔ Arraste ou clique para alternar entre Maquete 3D e Realidade
            </div>
          </div>

          {/* Value Highlights Beneath */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="flex items-start gap-3.5 p-5 rounded-xl bg-white border border-japi-border">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-japi-forest flex items-center justify-center flex-shrink-0">
                <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-japi-charcoal">Zero Conflitos de Fachada</h4>
                <p className="text-xs text-japi-muted mt-1 leading-relaxed">
                  Trabalhamos com catálogos reais de fornecedores regionais para que materiais e texturas existam no mercado.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-5 rounded-xl bg-white border border-japi-border">
              <div className="w-9 h-9 rounded-lg bg-amber-50 text-japi-wood flex items-center justify-center flex-shrink-0">
                <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-japi-charcoal">Paginação Precisa de Pedras</h4>
                <p className="text-xs text-japi-muted mt-1 leading-relaxed">
                  Cada detalhe de corte, friso de concreto e encontro de madeira é especificado no caderno executivo de obra.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-5 rounded-xl bg-white border border-japi-border">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-japi-forest flex items-center justify-center flex-shrink-0">
                <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-japi-charcoal">Auditoria Periódica de Obra</h4>
                <p className="text-xs text-japi-muted mt-1 leading-relaxed">
                  Nossa equipe visita o canteiro para garantir que a construtora não altere especificações sem consentimento.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
