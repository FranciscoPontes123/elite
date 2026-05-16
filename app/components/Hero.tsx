"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "320", label: "Atletas no programa" },
  { value: "12y", label: "Anos de método" },
  { value: "1:1", label: "Ratio coach/atleta" },
  { value: "96%", label: "Recomendam" },
  { value: "8.4", label: "Score médio NPS" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.07 },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-[calc(3.5rem+2rem)] pb-0 overflow-hidden">
      {/* Section label */}
      <motion.div
        initial="hidden"
        animate="show"
        custom={0}
        variants={fadeUp}
        className="px-[clamp(20px,5vw,72px)] flex items-center justify-between"
      >
        <span className="font-mono text-label uppercase text-fg-dim tracking-[0.22em]">
          // CP. 01 — Hero
        </span>
        <span className="font-mono text-label uppercase text-fg-dim tracking-[0.22em] hidden md:block">
          PESO · KBFC · MYIO
          <br />
          <span className="text-accent">SERIAL: TE 96238 2</span>
        </span>
      </motion.div>

      {/* Headline */}
      <div className="px-[clamp(20px,5vw,72px)] mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div className="flex-1">
          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            className="font-display font-black uppercase text-hero text-fg leading-[0.86] tracking-[-0.02em]"
          >
            ELITE
            <br />
            FOOTBALL
            <br />
            <span className="text-accent italic">LAB.</span>
          </motion.h1>
        </div>

        {/* Right column — sub + CTAs */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={2}
          variants={fadeUp}
          className="md:max-w-xs flex flex-col gap-6 pb-2"
        >
          <p className="font-body text-[17px] leading-[1.55] text-fg-dim">
            Não treinamos equipas. Treinamos o atleta. Um laboratório de
            desenvolvimento técnico individual, com método mensurável e linguagem
            de elite.
          </p>

          <div className="flex flex-col gap-3">
            <a
              href="#inscricao"
              className="inline-flex items-center justify-center bg-accent text-bg font-mono text-label uppercase tracking-[0.18em] px-6 py-3.5 hover:bg-fg transition-colors duration-150"
            >
              + Marcar avaliação
            </a>
            <div className="flex gap-3">
              <a
                href="#protocolo"
                className="flex-1 inline-flex items-center justify-center border border-rule font-mono text-label uppercase tracking-[0.18em] px-4 py-3 text-fg-dim hover:text-fg hover:border-fg transition-colors duration-150"
              >
                Protocolo completo
              </a>
              <a
                href="#staff"
                className="flex-1 inline-flex items-center justify-center border border-rule font-mono text-label uppercase tracking-[0.18em] px-4 py-3 text-fg-dim hover:text-fg hover:border-fg transition-colors duration-150"
              >
                Falar com coach
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Media placeholder + overlay buttons */}
      <div className="mt-8 mx-[clamp(20px,5vw,72px)] flex gap-4 items-end">
        <motion.div
          initial="hidden"
          animate="show"
          custom={3}
          variants={fadeUp}
          className="flex-1 relative"
        >
          <MediaPlaceholder />
          {/* Floating overlay CTA */}
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div className="font-mono text-label text-fg-dim uppercase tracking-[0.22em]">
              <span className="block">Telheiras Lab · 2024 · Sessão 24:0</span>
              <span className="block text-fg-dim/60">31:06 · HGPF · CAPF CARDGPV</span>
            </div>
          </div>
        </motion.div>

        {/* Quick action sidebar */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={4}
          variants={fadeUp}
          className="hidden md:flex flex-col gap-2 w-48 shrink-0"
        >
          <a
            href="#inscricao"
            className="flex items-center justify-between bg-accent text-bg font-mono text-label uppercase tracking-[0.15em] px-4 py-3.5 hover:bg-fg transition-colors duration-150"
          >
            <span>Iniciar avaliação</span>
            <span className="text-base leading-none">→</span>
          </a>
          <a
            href="#protocolo"
            className="flex items-center justify-between border border-rule font-mono text-label uppercase tracking-[0.15em] px-4 py-3.5 text-fg-dim hover:text-fg hover:border-fg transition-colors duration-150"
          >
            <span>Protocolo completo</span>
            <span className="text-base leading-none">+</span>
          </a>
          <a
            href="#staff"
            className="flex items-center justify-between border border-rule font-mono text-label uppercase tracking-[0.15em] px-4 py-3.5 text-fg-dim hover:text-fg hover:border-fg transition-colors duration-150"
          >
            <span>Falar com coach</span>
            <span className="text-base leading-none">↗</span>
          </a>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial="hidden"
        animate="show"
        custom={5}
        variants={fadeUp}
        className="mt-4 border-t border-rule grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5"
      >
        {stats.map((s, i) => (
          <div
            key={i}
            className="border-r border-rule last:border-r-0 px-[clamp(20px,5vw,72px)] py-6 flex flex-col gap-1"
          >
            <span className="font-mono text-label uppercase tracking-[0.22em] text-fg-dim">
              Métric 0{i + 1}
            </span>
            <span className="font-display font-black text-stat text-fg leading-none">
              {s.value}
            </span>
            <span className="font-mono text-label text-fg-dim tracking-[0.15em]">
              {s.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function MediaPlaceholder() {
  return (
    <div className="relative w-full aspect-video bg-bg-elev overflow-hidden">
      {/* Diagonal stripes */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="diag"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line x1="0" y1="0" x2="0" y2="24" stroke="#f4f4f4" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diag)" />
      </svg>

      {/* Center crosshair */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-8 h-8">
          <span className="absolute inset-x-0 top-1/2 h-px bg-fg-dim" />
          <span className="absolute inset-y-0 left-1/2 w-px bg-fg-dim" />
          <span className="absolute inset-0 m-auto w-2 h-2 border border-fg-dim" />
        </div>
      </div>

      {/* Label */}
      <div className="absolute top-3 left-3 font-mono text-label text-fg-dim uppercase tracking-[0.22em]">
        // MEDIA — aguarda asset
      </div>

      {/* Corner dots */}
      <span className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-accent" />
      <span className="absolute bottom-3 right-3 w-1.5 h-1.5 rounded-full bg-fg-dim" />
      <span className="absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full bg-fg-dim" />
    </div>
  );
}
