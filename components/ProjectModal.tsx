"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faLocationDot,
  faCheck,
  faArrowRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div
        className="relative w-full max-w-5xl bg-japi-warm rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col border border-japi-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-japi-border bg-white sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-japi-forest px-2.5 py-1 rounded bg-japi-forest/10">
              {project.condo}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-japi-muted">
              <FontAwesomeIcon icon={faLocationDot} className="w-3.5 h-3.5 text-japi-wood" />
              <span>{project.location}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-japi-sand text-japi-charcoal transition-colors"
            aria-label="Fechar modal"
          >
            <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Main Gallery Showcase */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[16/8] bg-black group">
              <img
                src={project.gallery[activeImageIndex]}
                alt={project.title}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              
              {/* Navigation arrows */}
              {project.gallery.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white hover:bg-black/70 backdrop-blur-sm transition-colors flex items-center justify-center"
                  >
                    <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white hover:bg-black/70 backdrop-blur-sm transition-colors flex items-center justify-center"
                  >
                    <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
                  </button>
                </>
              )}

              {/* Photo indicator */}
              <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] text-white">
                Foto {activeImageIndex + 1} de {project.gallery.length}
              </div>
            </div>

            {/* Thumbnail Row */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {project.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative flex-shrink-0 w-20 sm:w-24 aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all ${
                    activeImageIndex === idx
                      ? "border-japi-forest shadow-md scale-105"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="Miniatura" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Title & Concept */}
          <div className="space-y-4">
            <div>
              <h2 className="font-serif text-2xl sm:text-4xl text-japi-charcoal font-medium">
                {project.title}
              </h2>
              <p className="text-base text-japi-muted mt-1 italic font-serif">
                {project.subtitle}
              </p>
            </div>
            
            <p className="text-japi-charcoal/90 leading-relaxed text-sm sm:text-base">
              {project.concept}
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white border border-japi-border">
            {project.architecturalHighlights.map((item, idx) => (
              <div key={idx} className="space-y-0.5">
                <span className="text-[11px] uppercase tracking-wider text-japi-muted font-medium">
                  {item.label}
                </span>
                <p className="font-serif text-lg text-japi-charcoal font-medium">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Terrain Challenge and Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-japi-sand border border-japi-border">
              <h3 className="font-serif text-lg text-japi-charcoal font-medium mb-2">
                O Desafio Topográfico
              </h3>
              <p className="text-xs sm:text-sm text-japi-muted leading-relaxed">
                {project.terrainChallenge}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-japi-border">
              <h3 className="font-serif text-lg text-japi-charcoal font-medium mb-3">
                Soluções & Destaques de Engenharia
              </h3>
              <ul className="space-y-2">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-japi-charcoal">
                    <FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5 text-japi-forest flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Modal Action CTA */}
          <div className="pt-4 border-t border-japi-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-japi-muted text-center sm:text-left">
              Possui um lote com características semelhantes em Jundiaí?
            </div>
            <a
              href={`#diagnostico`}
              onClick={onClose}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-japi-forest text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-japi-forest-light transition-colors"
            >
              <span>Solicitar Diagnóstico para Terreno Similar</span>
              <FontAwesomeIcon icon={faArrowRight} className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
