"use client";

import React, { useState } from "react";
import { FAQS } from "@/data/faq";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-white relative border-t border-japi-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-japi-sand border border-japi-border text-japi-forest text-xs font-semibold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Esclarecimento Técnico</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-japi-charcoal leading-tight">
            Perguntas Frequentes sobre Construir em Jundiaí
          </h2>
          <p className="text-sm sm:text-base text-japi-muted mt-3">
            Tudo o que você precisa saber sobre prazos, comitês de obras em condomínios, projetos executivos e viabilidade de terrenos.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-japi-border bg-japi-warm/50 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-japi-sand/60 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-japi-forest/10 text-japi-forest hidden sm:inline-block">
                      {faq.category}
                    </span>
                    <span className="font-serif text-base sm:text-lg text-japi-charcoal font-medium">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-japi-forest transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-japi-muted leading-relaxed border-t border-japi-border/40 bg-white/70">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra contact callout */}
        <div className="mt-12 p-6 rounded-2xl bg-japi-sand border border-japi-border text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-japi-forest text-white flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-japi-charcoal">Ficou com alguma dúvida específica sobre o seu lote?</p>
              <p className="text-xs text-japi-muted">Fale diretamente com a equipe técnica do Studio Japi.</p>
            </div>
          </div>
          <a
            href="https://wa.me/5511999998888?text=Ol%C3%A1%2C+Juliana%21+Tenho+uma+d%C3%BAvida+sobre+constru%C3%A7%C3%A3o+em+condom%C3%ADnio+em+Jundia%C3%AD."
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-5 py-2.5 bg-japi-forest text-white rounded-xl text-xs font-medium hover:bg-japi-forest-light transition-colors"
          >
            Tirar Dúvida no WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
