"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) {
        setShowTooltip(true);
      }
    }, 4500);

    return () => clearTimeout(timer);
  }, [dismissed]);

  const message = encodeURIComponent(
    "Olá, Studio Japi! Gostaria de saber mais sobre projetos residenciais de alto padrão em Jundiaí."
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 pointer-events-auto">
      {/* Tooltip Popup */}
      {showTooltip && (
        <div className="relative bg-white text-japi-charcoal p-4 rounded-2xl shadow-elevated border border-japi-border max-w-xs animate-fade-in hidden sm:block">
          <button
            onClick={() => {
              setShowTooltip(false);
              setDismissed(true);
            }}
            className="absolute top-2 right-2 text-japi-muted hover:text-japi-charcoal p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-xs font-semibold text-japi-forest">Concierge Studio Japi</p>
          </div>
          <p className="text-xs text-japi-muted leading-relaxed">
            Dúvidas sobre o seu terreno em Jundiaí? Converse diretamente conosco no WhatsApp.
          </p>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/5511999998888?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-elevated flex items-center justify-center transition-transform hover:scale-110 active:scale-95 group relative"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-japi-wood rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-white">
          1
        </span>
      </a>
    </div>
  );
}
