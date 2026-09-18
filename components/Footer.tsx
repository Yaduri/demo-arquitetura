"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faLocationDot,
  faEnvelope,
  faPhone,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#101211] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-sm bg-japi-forest flex items-center justify-center text-white">
                <FontAwesomeIcon icon={faCompass} className="w-4 h-4 text-white" />
              </div>
              <span className="font-serif text-2xl tracking-tight text-white font-medium">
                STUDIO JAPI
              </span>
            </div>
            
            <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
              Arquitetura Residencial Contemporânea • Jundiaí - SP
            </p>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm pt-2">
              Casas autorais desenhadas sob medida para a topografia e a natureza exuberante da Serra do Japi. Projetos com rigor técnico BIM e excelência construtiva nos condomínios mais prestigiados da região.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li><a href="#sobre" className="hover:text-white transition-colors">O Estúdio</a></li>
              <li><a href="#projetos" className="hover:text-white transition-colors">Portfólio de Obras</a></li>
              <li><a href="#antes-depois" className="hover:text-white transition-colors">Fidelidade 3D vs Obra</a></li>
              <li><a href="#simulador" className="hover:text-white transition-colors">Simulador de Projeto</a></li>
              <li><a href="#metodologia" className="hover:text-white transition-colors">Metodologia 5 Etapas</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          {/* Condominiums Served */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Condomínios em Jundiaí
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-400">
              <li>• Fazenda Serrazul</li>
              <li>• Quinta das Paineiras</li>
              <li>• Bosque dos Jatobás</li>
              <li>• Reserva da Serra</li>
              <li>• Chácara Malota</li>
              <li>• Terras de São Carlos</li>
              <li>• Portal do Paraíso I e II</li>
              <li>• Parque da Fazenda</li>
            </ul>
          </div>

          {/* Contact Details & Office */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Ateliê & Atendimento
            </h4>
            
            <div className="space-y-2.5 text-xs text-gray-400">
              <div className="flex items-start gap-2">
                <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4 text-japi-wood flex-shrink-0 mt-0.5" />
                <span>
                  Av. Nove de Julho, 3500 • Edifício Nine Office Prime • Jundiaí - SP
                </span>
              </div>

              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>(11) 99999-8888 (WhatsApp VIP)</span>
              </div>

              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="w-3.5 h-3.5 text-japi-wood flex-shrink-0" />
                <span>contato@studiojapi.com.br</span>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 text-[11px] text-gray-500">
              <p>Segunda a Sexta: 09h às 18h30</p>
              <p>Atendimento exclusivo com hora marcada</p>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} Studio Japi Arquitetura Contemporânea. Todos os direitos reservados.
            <span className="block sm:inline sm:ml-2">Responsável Técnica: Arq. Juliana Prado • CAU/SP 148.921</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors text-xs"
          >
            <span>Voltar ao topo</span>
            <FontAwesomeIcon icon={faArrowUp} className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
}
