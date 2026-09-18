"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [phaseText, setPhaseText] = useState("01. Leitura Topográfica Serra do Japi");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Prevent body scroll during preload
    document.body.style.overflow = "hidden";

    const phases = [
      { threshold: 20, text: "01. Leitura Topográfica da Serra do Japi" },
      { threshold: 50, text: "02. Concepção Bioclimática & Rota Solar" },
      { threshold: 80, text: "03. Compatibilização Tridimensional BIM" },
      { threshold: 99, text: "04. Arquitetura Viva & Conexão Orgânica" },
    ];

    const startTime = performance.now();
    const duration = 2100; // 2.1 seconds total

    let animationFrameId: number;

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(1, elapsed / duration);
      
      // Easing curve (easeOutCubic)
      const easedProgress = Math.round((1 - Math.pow(1 - rawProgress, 3)) * 100);
      setProgress(easedProgress);

      for (let i = phases.length - 1; i >= 0; i--) {
        if (easedProgress >= phases[i].threshold) {
          setPhaseText(phases[i].text);
          break;
        }
      }

      if (rawProgress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setTimeout(() => {
          setIsDone(true);
          document.body.style.overflow = "unset";
          if (onComplete) onComplete();
        }, 250);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.body.style.overflow = "unset";
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsDone(true);
    document.body.style.overflow = "unset";
    if (onComplete) onComplete();
  };

  return (
    <AnimatePresence mode="wait">
      {!isDone && (
        <motion.div
          key="architectural-preloader"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1], // Luxury cubic-bezier curve
            },
          }}
          className="fixed inset-0 z-[9999] bg-[#141715] text-[#FAF8F5] flex flex-col justify-between p-6 sm:p-12 overflow-hidden select-none"
        >
          {/* Subtle architectural grid in background */}
          <div className="absolute inset-0 architectural-grid opacity-15 pointer-events-none" />

          {/* Top Brand & Location Header */}
          <div className="relative z-10 flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-sm bg-[#264234] flex items-center justify-center text-white border border-white/10">
                <FontAwesomeIcon icon={faCompass} className="w-4 h-4 text-emerald-300" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-wider text-white font-medium">
                  STUDIO JAPI
                </span>
                <span className="text-[9px] tracking-[0.25em] text-gray-400 uppercase">
                  Jundiaí - SP
                </span>
              </div>
            </motion.div>

            {/* Skip Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              onClick={handleSkip}
              className="group flex items-center gap-1.5 text-xs text-gray-400 hover:text-white px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 transition-all bg-white/5"
            >
              <span>Pular</span>
              <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
            </motion.button>
          </div>

          {/* Center Stage: Animated Compass Wireframe & Large Percentage */}
          <div className="relative z-10 max-w-xl mx-auto w-full text-center space-y-6">
            
            {/* Spinning Compass / Architectural Reticle */}
            <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
              {/* Outer dashed ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-emerald-500/40"
              />
              {/* Inner pulsed ring */}
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-2 rounded-full border border-[#B56636]/60"
              />
              <FontAwesomeIcon icon={faCompass} className="w-7 h-7 text-emerald-400" />
            </div>

            {/* Massive Serif Counter */}
            <div className="space-y-1">
              <motion.p
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="font-serif text-6xl sm:text-7xl md:text-8xl font-light text-white tracking-tight leading-none"
              >
                {progress < 10 ? `0${progress}` : progress}
                <span className="text-2xl sm:text-3xl font-serif text-emerald-400 ml-1 font-light">
                  %
                </span>
              </motion.p>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-sans">
                Carregando Experiência Arquitetônica
              </p>
            </div>

            {/* Architectural Technical Phase Tracker */}
            <div className="h-6 flex items-center justify-center">
              <motion.p
                key={phaseText}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="text-xs font-mono text-emerald-300/90 tracking-wider"
              >
                {phaseText}
              </motion.p>
            </div>

            {/* Fine Precision Progress Line */}
            <div className="w-full max-w-md mx-auto h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-[#264234] via-emerald-400 to-[#B56636]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

          </div>

          {/* Bottom Coordinates and Authority Statement */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 border-t border-white/10 pt-4 gap-2">
            <div>
              <span>23° 11' 11" S • 46° 53' 03" W</span>
              <span className="mx-2 hidden sm:inline">•</span>
              <span className="hidden sm:inline">Altitude: 761m • Serra do Japi</span>
            </div>
            <div className="text-gray-400 font-serif italic">
              "A precisão do projeto define a alma da obra."
            </div>
          </div>

          {/* Underlay shadow curtain for theatrical depth */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
