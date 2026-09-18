"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";
import { ArrowUpRight, Eye, MapPin } from "lucide-react";

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    "Todos",
    "Serra do Japi",
    "Condomínio Fechado",
    "Casa de Campo",
    "Balanço Estrutural",
  ];

  const filteredProjects =
    selectedCategory === "Todos"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projetos" className="py-24 bg-japi-warm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Description */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest text-japi-wood uppercase">
              Portfólio Selecionado
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-japi-charcoal mt-2 leading-tight">
              Obras e projetos autorais nos condomínios de Jundiaí
            </h2>
          </div>
          <p className="text-sm text-japi-muted max-w-md">
            Cada residência é concebida como uma peça única, respeitando a rota solar, o declive do lote e o estilo de vida da família.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-japi-forest text-white shadow-sm"
                  : "bg-white text-japi-charcoal/80 hover:bg-japi-sand border border-japi-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-japi-border shadow-soft hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative aspect-[4/3] overflow-hidden bg-japi-sand">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Badges on Image */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-japi-charcoal text-[11px] font-semibold tracking-wide">
                    {project.condo}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                  <span className="text-xs text-emerald-300 font-medium">{project.area}</span>
                  <span className="text-xs text-white/80">{project.year}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl text-japi-charcoal font-medium group-hover:text-japi-forest transition-colors mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-xs text-japi-muted line-clamp-2 leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>

                {/* Tags and CTA */}
                <div className="mt-6 pt-4 border-t border-japi-sand flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 2).map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] uppercase tracking-wider text-japi-muted bg-japi-sand px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-medium text-japi-forest group-hover:translate-x-1 transition-transform">
                    Ver detalhes <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal when project selected */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />

      </div>
    </section>
  );
}
