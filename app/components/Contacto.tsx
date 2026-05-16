"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const planoOpcoes = ["1-on-1", "Pack Mensal", "Grupo Reduzido", "Ainda não sei"];

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mdabqqdn", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setLoading(false);
    if (res.ok) {
      setEnviado(true);
      form.reset();
    }
  }

  return (
    <section id="contacto" className="border-t border-rule">
      {/* Header */}
      <div className="px-[clamp(20px,5vw,72px)] pt-[clamp(64px,10vw,140px)] pb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-label uppercase tracking-[0.22em] text-fg-dim mb-6"
        >
          // 05 — Contacto
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] }}
          className="font-display font-black uppercase text-section text-fg leading-[0.9]"
        >
          VEM AO LAB.
        </motion.h2>
      </div>

      {/* Mapa */}
      <div className="border-t border-rule">
        <div className="px-[clamp(20px,5vw,72px)] py-4 flex items-center gap-3">
          <span className="font-mono text-label uppercase tracking-[0.22em] text-fg-dim">Localização</span>
          <span className="font-mono text-label text-fg-dim">·</span>
          <span className="font-mono text-label text-fg tracking-[0.1em]">Parque de Jogos do CER Tenente Valdez, Telheiras, Lisboa</span>
        </div>
        <div className="w-full h-[360px]">
          <iframe
            src="https://maps.google.com/maps?q=38.7782963,-9.2050189&z=16&output=embed"
            width="100%"
            height="360"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Elite Football Lab"
          />
        </div>
      </div>

      <div className="border-t border-rule grid grid-cols-1 md:grid-cols-2">
        {/* Contactos directos */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] }}
          className="border-r border-rule px-[clamp(20px,4vw,72px)] py-12 flex flex-col gap-8"
        >
          <div className="flex flex-col gap-2">
            <span className="font-mono text-label uppercase tracking-[0.22em] text-fg-dim">WhatsApp</span>
            <a
              href="https://wa.me/351969422723"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-black text-[clamp(28px,4vw,56px)] uppercase text-fg leading-none hover:text-accent transition-colors duration-150"
            >
              +351 969 422 723
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-mono text-label uppercase tracking-[0.22em] text-fg-dim">Instagram</span>
            <a
              href="https://instagram.com/elite.football_lab"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-black text-[clamp(28px,4vw,56px)] uppercase text-fg leading-none hover:text-accent transition-colors duration-150"
            >
              @elite.football_lab
            </a>
          </div>

          <p className="font-mono text-label text-fg-dim tracking-[0.15em] mt-auto">
            Resposta em 24h · Sem compromisso.<br />
            Avaliação inicial — 35€, reembolsada na inscrição.
          </p>
        </motion.div>

        {/* Formulário */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number], delay: 0.1 }}
          className="px-[clamp(20px,4vw,72px)] py-12"
        >
          {enviado ? (
            <div className="h-full flex flex-col justify-center gap-4">
              <span className="text-accent font-mono text-label uppercase tracking-[0.22em]">// Enviado</span>
              <p className="font-display font-black uppercase text-[clamp(32px,4vw,64px)] text-fg leading-none">
                Obrigado pelo interesse. A nossa equipa entrará em contacto consigo em breve.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <Field label="Telemovel" name="telemovel" type="tel" placeholder="9XX XXX XXX" required />
              <Field label="Email" name="email" type="email" placeholder="o teu email" required />
              <Field label="Idade" name="idade" type="number" placeholder="ex: 16" required />
              <Field label="Onde jogas" name="clube" type="text" placeholder="Clube / Escola / Sem equipa" required />

              {/* Plano */}
              <div className="flex flex-col gap-2">
                <label className="font-mono text-label uppercase tracking-[0.22em] text-fg-dim">
                  Plano de interesse
                </label>
                <select
                  name="plano"
                  required
                  defaultValue=""
                  className="bg-bg-elev border border-rule text-fg font-mono text-[13px] px-4 py-3 focus:outline-none focus:border-accent transition-colors duration-150 appearance-none"
                >
                  <option value="" disabled>Selecciona</option>
                  {planoOpcoes.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 inline-flex items-center justify-center bg-accent text-bg font-mono text-label uppercase tracking-[0.18em] px-6 py-3.5 hover:bg-fg transition-colors duration-150 disabled:opacity-50"
              >
                {loading ? "A enviar..." : "+ Marcar avaliação"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-mono text-label uppercase tracking-[0.22em] text-fg-dim">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="bg-bg-elev border border-rule text-fg font-mono text-[13px] px-4 py-3 placeholder:text-fg-dim focus:outline-none focus:border-accent transition-colors duration-150"
      />
    </div>
  );
}
