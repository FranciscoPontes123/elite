"use client";

import { motion } from "framer-motion";

const planos = [
  {
    num: "P/01",
    nome: "1-on-1",
    preco: "—",
    unidade: "/ sessão",
    descricao: "Sessão individual com coach dedicado. Foco total no teu desenvolvimento técnico.",
    items: ["60 min por sessão", "Plano personalizado", "Relatório de evolução", "Acesso à análise de vídeo"],
    destaque: false,
  },
  {
    num: "P/02",
    nome: "Pack Mensal",
    preco: "—",
    unidade: "/ mês",
    descricao: "O compromisso que gera resultados. Sessões semanais com acompanhamento contínuo.",
    items: ["4 sessões por mês", "Plano personalizado", "Relatório mensal", "Análise de vídeo incluída", "Prioridade na marcação"],
    destaque: true,
  },
  {
    num: "P/03",
    nome: "Grupo Reduzido",
    preco: "—",
    unidade: "/ sessão",
    descricao: "Treino técnico em grupo pequeno. Máximo 4 atletas. Mesma exigência, diferente dinâmica.",
    items: ["Máx. 4 atletas", "60 min por sessão", "Nível homogéneo", "Relatório partilhado"],
    destaque: false,
  },
];

export default function Planos() {
  return (
    <section id="planos" className="border-t border-rule">
      <div className="px-[clamp(20px,5vw,72px)] pt-[clamp(64px,10vw,140px)] pb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-label uppercase tracking-[0.22em] text-fg-dim mb-6"
        >
          // 04 — Planos
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] }}
          className="font-display font-black uppercase text-section text-fg leading-[0.9]"
        >
          O PLANO IDEAL<br />PARA TI.
        </motion.h2>
      </div>

      <div className="flex overflow-x-auto md:grid md:grid-cols-3 border-t border-rule snap-x snap-mandatory scrollbar-none">
        {planos.map((plano, i) => (
          <motion.div
            key={plano.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number],
              delay: i * 0.08,
            }}
            className={`relative border-r border-rule last:border-r-0 flex flex-col shrink-0 w-[80vw] md:w-auto snap-start px-[clamp(20px,4vw,48px)] py-10 gap-8 transition-colors duration-200 hover:-translate-y-1 hover:border-fg ${
              plano.destaque ? "bg-bg-elev" : ""
            }`}
          >
            {/* Badge mais procurado */}
            {plano.destaque && (
              <span className="absolute top-4 right-4 font-mono text-[10px] uppercase tracking-[0.2em] bg-accent text-bg px-3 py-1">
                Mais procurado
              </span>
            )}

            {/* Topo */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-label uppercase tracking-[0.22em] text-fg-dim">
                {plano.num}
              </span>
              <h3 className="font-display font-black uppercase text-card text-fg leading-none">
                {plano.nome}
              </h3>
              <p className="font-body text-[15px] leading-[1.55] text-fg-dim">
                {plano.descricao}
              </p>
            </div>

            {/* Preço */}
            <div className="flex items-end gap-2 border-t border-rule pt-6">
              <span className="font-display font-black text-[64px] leading-none text-fg">
                {plano.preco}
              </span>
              <span className="font-mono text-label text-fg-dim uppercase tracking-[0.15em] pb-2">
                {plano.unidade}
              </span>
            </div>

            {/* Items */}
            <ul className="flex flex-col gap-2">
              {plano.items.map((item) => (
                <li key={item} className="flex items-start gap-3 font-mono text-label text-fg-dim tracking-[0.1em]">
                  <span className="text-accent mt-px">+</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#formulario"
              className={`mt-auto inline-flex items-center justify-center font-mono text-label uppercase tracking-[0.18em] px-6 py-3.5 transition-colors duration-150 ${
                plano.destaque
                  ? "bg-accent text-bg hover:bg-fg"
                  : "border border-rule text-fg-dim hover:text-fg hover:border-fg"
              }`}
            >
              Marcar avaliação
            </a>
          </motion.div>
        ))}
      </div>

      {/* Nota de rodapé */}
      <div className="px-[clamp(20px,5vw,72px)] py-6 border-t border-rule">
        <p className="font-mono text-label text-fg-dim tracking-[0.15em]">
          Avaliação inicial — 35€. Reembolsada na inscrição em qualquer plano. · Resposta em 24h · Sem compromisso.
        </p>
      </div>
    </section>
  );
}
