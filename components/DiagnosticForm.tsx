"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, ShieldCheck, MapPin, Calendar, Compass, Phone } from "lucide-react";

export default function DiagnosticForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    condo: "Fazenda Serrazul",
    lotStatus: "Já sou proprietário do lote",
    estimatedArea: "500",
    timeline: "Imediato (próximos 30 dias)",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const text = `*SOLICITAÇÃO DE DIAGNÓSTICO DE TERRENO - STUDIO JAPI*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*WhatsApp:* ${formData.phone}\n` +
      `*Condomínio:* ${formData.condo}\n` +
      `*Situação do Lote:* ${formData.lotStatus}\n` +
      `*Metragem Prevista:* ${formData.estimatedArea} m²\n` +
      `*Previsão de Início:* ${formData.timeline}\n` +
      (formData.notes ? `*Observações:* ${formData.notes}\n` : "") +
      `\n_Solicitado via Landing Page do Studio Japi Jundiaí_`;

    const url = `https://wa.me/5511999998888?text=${encodeURIComponent(text)}`;
    
    // Open in new tab after 800ms
    setTimeout(() => {
      window.open(url, "_blank");
    }, 600);
  };

  return (
    <section id="diagnostico" className="py-24 bg-[#141715] text-white relative overflow-hidden">
      {/* Background architectural glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-japi-forest/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-japi-wood/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>Atendimento Exclusivo sob Agendamento</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight">
              Sessão de Diagnóstico de Terreno & Projeto
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Antes de contratar projetos ou iniciar terraplenagens caras, receba uma avaliação técnica personalizada com a <strong>Arq. Juliana Prado</strong>.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Análise de Insolação e Topografia Real</h4>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Orientação estratégica para maximizar a vista da serra e a ventilação natural.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Zoneamento e Diretrizes do Condomínio</h4>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Validação prévia de recuos obrigatórios, taxas de ocupação e gabaritos de altura.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Estimativa de Investimento e Cronograma</h4>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Previsibilidade financeira completa para evitar estouro orçamentário.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-xs text-gray-300">
              <ShieldCheck className="w-5 h-5 text-japi-wood flex-shrink-0" />
              <span>Atendemos um número restrito de projetos simultâneos para garantir acompanhamento autoral e exclusivo.</span>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-japi-dark-surface/90 backdrop-blur-md p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-light">
                    Diagnóstico Encaminhado com Sucesso!
                  </h3>
                  <p className="text-sm text-gray-300 max-w-md mx-auto">
                    Se a janela do WhatsApp não tiver aberto automaticamente, clique no botão abaixo para iniciar o atendimento VIP.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleSubmit}
                      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3.5 rounded-xl text-sm font-medium transition-colors"
                    >
                      <span>Abrir WhatsApp VIP Agora</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-white/10 pb-4 mb-6">
                    <h3 className="font-serif text-2xl text-white font-light">
                      Agendar Diagnóstico Personalizado
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                      Preencha os dados do seu terreno ou projeto abaixo. Resposta em até 4 horas úteis.
                    </p>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                        Seu Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Carlos Eduardo Silveira"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                        WhatsApp com DDD *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ex: (11) 98765-4321"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Condo Dropdown & Lot Status */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                        Condomínio / Local em Jundiaí
                      </label>
                      <select
                        value={formData.condo}
                        onChange={(e) => setFormData({ ...formData, condo: e.target.value })}
                        className="w-full bg-[#2A2E2B] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400 transition-colors cursor-pointer"
                      >
                        <option value="Fazenda Serrazul">Fazenda Serrazul</option>
                        <option value="Quinta das Paineiras">Quinta das Paineiras</option>
                        <option value="Bosque dos Jatobás">Bosque dos Jatobás</option>
                        <option value="Reserva da Serra">Reserva da Serra</option>
                        <option value="Chácara Malota">Chácara Malota</option>
                        <option value="Terras de São Carlos">Terras de São Carlos</option>
                        <option value="Portal do Paraíso">Portal do Paraíso</option>
                        <option value="Outro Condomínio em Jundiaí">Outro Condomínio em Jundiaí</option>
                        <option value="Ainda procurando terreno">Ainda procurando terreno</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                        Situação do Terreno
                      </label>
                      <select
                        value={formData.lotStatus}
                        onChange={(e) => setFormData({ ...formData, lotStatus: e.target.value })}
                        className="w-full bg-[#2A2E2B] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400 transition-colors cursor-pointer"
                      >
                        <option value="Já sou proprietário do lote">Já sou proprietário do lote</option>
                        <option value="Estou negociando a compra">Estou negociando a compra</option>
                        <option value="Desejo reforma em casa existente">Desejo reforma em casa existente</option>
                      </select>
                    </div>
                  </div>

                  {/* Estimated Area & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                        Metragem Prevista (m²)
                      </label>
                      <input
                        type="number"
                        placeholder="Ex: 500"
                        value={formData.estimatedArea}
                        onChange={(e) => setFormData({ ...formData, estimatedArea: e.target.value })}
                        className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                        Previsão de Início
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full bg-[#2A2E2B] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400 transition-colors cursor-pointer"
                      >
                        <option value="Imediato (próximos 30 dias)">Imediato (próximos 30 dias)</option>
                        <option value="Em até 3 meses">Em até 3 meses</option>
                        <option value="Segundo semestre / Próximo ano">Segundo semestre / Próximo ano</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                      Conte-nos sobre suas expectativas ou desafios do lote (opcional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Ex: Terreno com declive para o fundo e vista para a Serra do Japi, gostaríamos de piscina em balanço..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-japi-forest hover:bg-japi-forest-light text-white py-4 rounded-xl text-sm font-semibold transition-all shadow-card hover:shadow-elevated"
                  >
                    <span>Solicitar Agendamento de Diagnóstico</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-center text-gray-400">
                    Seus dados estão protegidos. Não enviamos spam nem compartilhamos informações com terceiros.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
