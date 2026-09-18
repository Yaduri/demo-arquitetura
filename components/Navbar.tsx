"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowUpRight, Compass } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "O Estúdio", href: "#sobre" },
    { label: "Projetos", href: "#projetos" },
    { label: "Fidelidade Construtiva", href: "#antes-depois" },
    { label: "Simulador", href: "#simulador" },
    { label: "Metodologia", href: "#metodologia" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-panel py-3.5 shadow-soft border-b border-japi-border/70"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-sm bg-japi-forest flex items-center justify-center text-white transition-transform group-hover:scale-105">
                <Compass className="w-5 h-5 text-[#FAF8F5] stroke-[1.5]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl tracking-tight text-japi-charcoal font-medium leading-none">
                  STUDIO JAPI
                </span>
                <span className="text-[10px] tracking-[0.25em] text-japi-muted uppercase font-sans mt-0.5">
                  Arquitetura • Jundiaí
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-japi-charcoal/80 hover:text-japi-forest transition-colors relative py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-japi-forest transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="#diagnostico"
                className="inline-flex items-center gap-2 bg-japi-forest text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium hover:bg-japi-forest-light transition-all shadow-sm group"
              >
                <span>Agendar Diagnóstico</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="#diagnostico"
                className="text-xs bg-japi-forest text-white px-3 py-1.5 rounded-full font-medium"
              >
                Diagnóstico
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-japi-charcoal hover:text-japi-forest transition-colors"
                aria-label="Alternar menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-japi-charcoal/40 backdrop-blur-sm lg:hidden">
          <div className="fixed top-0 right-0 bottom-0 w-[82%] max-w-sm bg-japi-warm p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div className="flex flex-col gap-6 pt-16">
              <div className="flex items-center gap-2 pb-4 border-b border-japi-border">
                <div className="w-8 h-8 rounded-sm bg-japi-forest flex items-center justify-center text-white">
                  <Compass className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-serif text-lg font-medium text-japi-charcoal leading-tight">STUDIO JAPI</p>
                  <p className="text-[10px] tracking-widest text-japi-muted uppercase">Arquitetura Contemporânea</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-serif text-japi-charcoal hover:text-japi-forest py-1 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-japi-border space-y-4">
              <div className="flex items-center gap-2 text-xs text-japi-forest font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Agenda aberta para projetos 2024/2025
              </div>
              <a
                href="#diagnostico"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-japi-forest text-white py-3 rounded-xl text-sm font-medium hover:bg-japi-forest-light transition-all shadow-sm"
              >
                <span>Agendar Sessão de Diagnóstico</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-center text-xs text-japi-muted">
                Jundiaí - SP • Atendimento Exclusivo
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
