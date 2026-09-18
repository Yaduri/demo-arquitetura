"use client";

import React from "react";
import { Star, Quote, Award } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Dr. Roberto & Vanessa Mendonça",
      condo: "Fazenda Serrazul • Jundiaí",
      role: "Médico Cirurgião & Empresária",
      text: "Compramos um lote em declive com medo de a obra virar um pesadelo. A Juliana e a equipe do Studio Japi transformaram o que parecia um problema no ponto alto da casa: uma piscina em balanço com borda infinita que nos faz sentir num resort privativo todos os dias.",
      project: "Residência Serrazul Horizonte",
      year: "2023",
    },
    {
      name: "Marcelo Albuquerque",
      condo: "Quinta das Paineiras • Jundiaí",
      role: "Diretor de Multinacional",
      text: "O nível de detalhamento do caderno executivo BIM foi algo que nunca vi antes. A construtora orçou a obra sem nenhuma surpresa de tubulação ou viga fora do lugar. O custo planejado no início foi exatamente o executado. Recomendo de olhos fechados.",
      project: "Villa Quinta das Paineiras",
      year: "2024",
    },
    {
      name: "Carla & Fernando Siqueira",
      condo: "Bosque dos Jatobás • Jundiaí",
      role: "Advogados",
      text: "O cuidado com o conforto térmico e a luz natural é impecável. A nossa casa quase não precisa de ar-condicionado mesmo nos dias mais quentes do verão de Jundiaí. A brisa da Serra do Japi circula livremente pela sala e pelos pátios.",
      project: "Casa Bosque dos Jatobás",
      year: "2023",
    },
  ];

  return (
    <section className="py-24 bg-japi-sand/50 relative border-t border-japi-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-japi-wood uppercase">
            Confiança & Reconhecimento
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-japi-charcoal mt-2 leading-tight">
            A satisfação de viver em uma obra autoral assinada
          </h2>
          <p className="text-sm sm:text-base text-japi-muted mt-3">
            O que dizem os proprietários que escolheram o Studio Japi para erguer o patrimônio de suas famílias.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-japi-border shadow-soft flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-japi-wood/30 mb-3" />
                <p className="font-serif italic text-sm sm:text-base text-japi-charcoal/90 leading-relaxed mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-japi-sand">
                <p className="font-semibold text-sm text-japi-charcoal">{rev.name}</p>
                <p className="text-xs text-japi-forest font-medium mt-0.5">{rev.condo}</p>
                <p className="text-[11px] text-japi-muted mt-0.5">{rev.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Press and Authority Logos */}
        <div className="pt-8 border-t border-japi-border flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-xs uppercase tracking-widest text-japi-muted font-semibold text-center md:text-left">
            Projetos Reconhecidos & Publicados em:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all">
            <span className="font-serif text-lg tracking-widest text-japi-charcoal font-semibold">CASA VOGUE</span>
            <span className="font-serif text-lg tracking-widest text-japi-charcoal font-bold">ARCHDAILY</span>
            <span className="font-sans text-sm tracking-wider uppercase text-japi-charcoal font-bold">ARQUITETURA & CONSTRUÇÃO</span>
            <span className="font-serif text-lg tracking-wider text-japi-charcoal italic">REVISTA KAZA</span>
          </div>
        </div>

      </div>
    </section>
  );
}
