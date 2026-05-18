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
            Focamo-nos no atleta. No seu desenvolvimento individual — técnico, táctico, mental. Uma equipa de especialistas que vivem o futebol, dedicada a jovens que querem mais.
          </p>

          <div className="flex flex-col gap-3">
            <a
              href="#formulario"
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
        <video
          src="/video_4k.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full aspect-video object-cover"
        />
      </motion.div>
    </section>
  );
}
