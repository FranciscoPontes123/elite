"use client";

import Image from "next/image";
import { motion } from "framer-motion";
const staff = [
  {
    num: "S/01",
    nome: "Pedro Alves",
    foto: "/Pedro.jpeg",
    credenciais: ["Licenciado em Treino Desportivo", "UEFA C Coach"],
  },
  {
    num: "S/02",
    nome: "João Jacinto",
    foto: "/Jota.jpeg",
    credenciais: ["Especialização em Treinador de Futebol - Barça Innovation Hub"],
  },
];

export default function Staff() {
  return (
    <section id="staff" className="border-t border-rule">
      <div className="px-[clamp(20px,5vw,72px)] pt-[clamp(64px,10vw,140px)] pb-16">
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
              <Image
                src={pessoa.foto}
                alt={pessoa.nome}
                fill
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>

            {/* Info */}
            <div className="px-[clamp(20px,4vw,48px)] py-8 flex flex-col gap-4">
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
