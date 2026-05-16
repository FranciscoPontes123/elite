"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const staff = [
  {
    num: "S/01",
    nome: "Pedro Alves",
    credenciais: ["Licenciado em Treino Desportivo", "UEFA C Coach"],
    foto: "/pedro.png",
  },
  {
    num: "S/02",
    nome: "João",
    credenciais: ["— informação pendente —"],
    foto: null,
  },
];

export default function Staff() {
  return (
    <section id="staff" className="border-t border-rule">
      <div className="px-[clamp(20px,5vw,72px)] pt-[clamp(64px,10vw,140px)] pb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-label uppercase tracking-[0.22em] text-fg-dim mb-6"
        >
          // 03 — Staff
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] }}
          className="font-display font-black uppercase text-section text-fg leading-[0.9]"
        >
          AS PESSOAS<br />POR TRÁS<br />DO MÉTODO.
        </motion.h2>
      </div>

      <div className="flex overflow-x-auto md:grid md:grid-cols-2 border-t border-rule snap-x snap-mandatory scrollbar-none">
        {staff.map((pessoa, i) => (
          <motion.div
            key={pessoa.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number],
              delay: i * 0.1,
            }}
            className="border-r border-rule last:border-r-0 flex flex-col shrink-0 w-[80vw] md:w-auto snap-start"
          >
            {/* Foto */}
            <div className="relative w-full aspect-[3/4] bg-bg-elev overflow-hidden">
              {pessoa.foto ? (
                <Image
                  src={pessoa.foto}
                  alt={pessoa.nome}
                  fill
                  className="object-cover object-top"
                  quality={90}
                  sizes="(max-width: 768px) 80vw, 50vw"
                />
              ) : (
                <>
                  <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id={`diag-${i}`} width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                        <line x1="0" y1="0" x2="0" y2="24" stroke="#f4f4f4" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#diag-${i})`} />
                  </svg>
                  <div className="absolute top-3 left-3 font-mono text-label text-fg-dim uppercase tracking-[0.22em]">
                    // foto — aguarda asset
                  </div>
                  <span className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-accent" />
                </>
              )}
            </div>

            {/* Info */}
            <div className="px-[clamp(20px,4vw,48px)] py-8 flex flex-col gap-4">
              <span className="font-mono text-label uppercase tracking-[0.22em] text-fg-dim">
                {pessoa.num}
              </span>
              <h3 className="font-display font-black uppercase text-card text-fg leading-none">
                {pessoa.nome}
              </h3>
              <ul className="flex flex-col gap-1">
                {pessoa.credenciais.map((c) => (
                  <li key={c} className="font-mono text-label text-fg-dim tracking-[0.15em]">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
