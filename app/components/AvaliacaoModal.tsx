"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/app/context/ModalContext";

const planoOpcoes = ["1-on-1", "Pack Mensal", "Grupo Reduzido", "Ainda não sei"];

export default function AvaliacaoModal() {
  const { open, closeModal } = useModal();
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fechar com ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeModal]);

  // Bloquear scroll quando aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);
    const res = await fetch("https://formspree.io/f/mdabqqdn", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    setLoading(false);
    if (res.ok) setEnviado(true);
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            onClick={closeModal}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-lg bg-bg-elev border border-rule z-[101] p-8 md:p-10"
          >
            {/* Fechar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 font-mono text-label text-fg-dim hover:text-fg transition-colors uppercase tracking-[0.2em]"
            >
              ✕ Fechar
            </button>

            {enviado ? (
              <div className="flex flex-col gap-4 py-8">
                <span className="font-mono text-label uppercase tracking-[0.22em] text-accent">// Enviado</span>
                <p className="font-display font-black uppercase text-[clamp(24px,4vw,40px)] text-fg leading-tight">
                  Obrigado pelo interesse. A nossa equipa entrará em contacto consigo em breve.
                </p>
                <button
                  onClick={() => { setEnviado(false); closeModal(); }}
                  className="mt-4 font-mono text-label uppercase tracking-[0.18em] text-fg-dim hover:text-fg transition-colors"
                >
                  Fechar
                </button>
              </div>
            ) : (
              <>
                <p className="font-mono text-label uppercase tracking-[0.22em] text-fg-dim mb-6">
                  // Marcar treino
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <Field label="Telemovel" name="telemovel" type="tel" placeholder="9XX XXX XXX" required />
                  <Field label="Email" name="email" type="email" placeholder="o teu email" required />
                  <Field label="Idade" name="idade" type="number" placeholder="ex: 16" required />
                  <Field label="Onde jogas" name="clube" type="text" placeholder="Clube / Escola / Sem equipa" required />
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-label uppercase tracking-[0.22em] text-fg-dim">
                      Plano de interesse
                    </label>
                    <select
                      name="plano"
                      required
                      defaultValue=""
                      className="bg-bg border border-rule text-fg font-mono text-[13px] px-4 py-3 focus:outline-none focus:border-accent transition-colors appearance-none"
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
                    className="mt-2 bg-accent text-bg font-mono text-label uppercase tracking-[0.18em] px-6 py-3.5 hover:bg-fg transition-colors duration-150 disabled:opacity-50"
                  >
                    {loading ? "A enviar..." : "+ Marcar treino"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function Field({ label, name, type, placeholder, required }: {
  label: string; name: string; type: string; placeholder: string; required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-mono text-label uppercase tracking-[0.22em] text-fg-dim">
        {label}
      </label>
      <input
        id={name} name={name} type={type} placeholder={placeholder} required={required}
        className="bg-bg border border-rule text-fg font-mono text-[13px] px-4 py-3 placeholder:text-fg-dim focus:outline-none focus:border-accent transition-colors"
      />
    </div>
  );
}
