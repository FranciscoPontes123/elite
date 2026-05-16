"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number], delay: i * 0.07 },
  }),
};

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-between pt-[calc(3.5rem+2rem)] pb-16 overflow-hidden">

      {/* Headline */}
      <div className="px-[clamp(20px,5vw,72px)] mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div className="flex-1">
          <motion.h1
            initial="hidden"
            animate="show"
            custom={0}
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
          custom={1}
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
              href="#contacto"
              className="inline-flex items-center justify-center bg-accent text-bg font-mono text-label uppercase tracking-[0.18em] px-6 py-3.5 hover:bg-fg transition-colors duration-150"
            >
              + Marcar avaliação
            </a>
            <a
              href="#protocolo"
              className="inline-flex items-center justify-center border border-rule font-mono text-label uppercase tracking-[0.18em] px-4 py-3 text-fg-dim hover:text-fg hover:border-fg transition-colors duration-150"
            >
              Ver método
            </a>
          </div>
        </motion.div>
      </div>

      {/* Media placeholder */}
      <motion.div
        initial="hidden"
        animate="show"
        custom={2}
        variants={fadeUp}
        className="mt-10 mx-[clamp(20px,5vw,72px)]"
      >
        <MediaPlaceholder />
      </motion.div>
    </section>
  );
}

function MediaPlaceholder() {
  return (
    <div className="relative w-full aspect-video bg-bg-elev overflow-hidden">
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

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-8 h-8">
          <span className="absolute inset-x-0 top-1/2 h-px bg-fg-dim" />
          <span className="absolute inset-y-0 left-1/2 w-px bg-fg-dim" />
          <span className="absolute inset-0 m-auto w-2 h-2 border border-fg-dim" />
        </div>
      </div>

      <div className="absolute top-3 left-3 font-mono text-label text-fg-dim uppercase tracking-[0.22em]">
        // foto / vídeo do atleta — aguarda asset
      </div>

      <span className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-accent" />
    </div>
  );
}
