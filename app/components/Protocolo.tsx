"use client";

import { motion } from "framer-motion";

const fases = [
  {
    num: "P/01",
    label: "Avaliação",
    duracao: "45 min",
    status: "Gratuita",
    descricao:
      "Diagnóstico técnico individual. Análise de pontos fortes, lacunas e objectivos do atleta. A base de tudo o que se segue.",
  },
  {
    num: "P/02",
    label: "Plano",
    duracao: "48 h",
    status: "Personalizado",
    descricao:
      "Programa individual construído a partir da avaliação. Totalmente personalizado.",
  },
  {
    num: "P/03",
    label: "Treino",
    duracao: "Semanal",
    status: "1-on-1",
    descricao:
      "Sessões técnicas focadas no atleta. Intensidade com atenção ao detalhe.",
  },
  {
    num: "P/04",
    label: "Análise",
    duracao: "Mensal",
    status: "Contínua",
    descricao:
      "Filmagem, estatísticas e evolução. O atleta vê o que mudou e o que falta.",
  },
];

export default function Protocolo() {
  return (
    <section id="protocolo" className="border-t border-rule">
      {/* Header */}
      <div className="px-[clamp(20px,5vw,72px)] pt-[clamp(64px,10vw,140px)] pb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-label uppercase tracking-[0.22em] text-fg-dim mb-6"
        >
          // 02 — Protocolo
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] }}
          className="font-display font-black uppercase text-section text-fg leading-[0.9]"
        >
          QUATRO FASES.
        </motion.h2>
      </div>

      {/* Grid de fases */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-rule">
        {fases.map((fase, i) => (
          <motion.div
            key={fase.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number],
              delay: i * 0.08,
            }}
            className="border-r border-rule last:border-r-0 border-b md:border-b-0 px-[clamp(20px,4vw,48px)] py-10 flex flex-col gap-6"
          >
            {/* Topo */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-label uppercase tracking-[0.22em] text-fg-dim">
                {fase.num}
              </span>
              <div className="flex items-center gap-2">
                <span className="font-mono text-label text-fg-dim">{fase.duracao}</span>
                <span className="font-mono text-label text-accent uppercase tracking-[0.15em]">
                  {fase.status}
                </span>
              </div>
            </div>

            {/* Título */}
            <h3 className="font-display font-black uppercase text-card text-fg leading-none">
              {fase.label}
            </h3>

            {/* Descrição */}
            <p className="font-body text-[16px] leading-[1.55] text-fg-dim mt-auto">
              {fase.descricao}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
