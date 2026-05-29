import Link from "next/link";

export const metadata = {
  title: "Política de Cookies — Elite Football Lab",
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-bg text-fg px-[clamp(20px,5vw,72px)] py-[clamp(80px,12vw,160px)]">
      <div className="max-w-2xl">
        <Link
          href="/"
          className="inline-block font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim hover:text-fg transition-colors duration-150 mb-10"
        >
          ← Voltar
        </Link>

        <h1 className="font-display font-black uppercase text-[clamp(40px,6vw,80px)] text-fg leading-[0.9] mb-12">
          Política de<br />Cookies
        </h1>

        <div className="flex flex-col gap-10 font-mono text-[13px] text-fg-dim leading-relaxed">
          <Section title="1. O que são cookies">
            <p>
              Cookies são pequenos ficheiros de texto armazenados no seu dispositivo quando visita um website. Permitem que o site reconheça o seu browser e memorize determinadas informações sobre a sua visita.
            </p>
          </Section>

          <Section title="2. Cookies utilizados neste website">
            <p>Este website utiliza um número mínimo de cookies, descritos abaixo:</p>

            <div className="border border-rule overflow-auto mt-2">
              <table className="w-full text-[11px]">
                <thead>
                  <tr className="border-b border-rule">
                    <th className="text-left px-4 py-3 text-fg uppercase tracking-[0.15em]">Cookie</th>
                    <th className="text-left px-4 py-3 text-fg uppercase tracking-[0.15em]">Tipo</th>
                    <th className="text-left px-4 py-3 text-fg uppercase tracking-[0.15em]">Finalidade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-rule">
                    <td className="px-4 py-3 text-fg">_va_*</td>
                    <td className="px-4 py-3">Analítico</td>
                    <td className="px-4 py-3">Vercel Analytics — estatísticas de acesso anónimas</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-fg">Google Maps</td>
                    <td className="px-4 py-3">Funcional</td>
                    <td className="px-4 py-3">Apresentação do mapa de localização incorporado</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="3. Cookies de terceiros">
            <p>
              O mapa incorporado neste website é fornecido pelo Google Maps (Google LLC). A utilização do mapa pode implicar a definição de cookies pelo Google, sujeitos à Política de Privacidade da Google disponível em policies.google.com.
            </p>
            <p>
              As estatísticas de acesso são processadas pelo Vercel Analytics de forma anónima e agregada, não permitindo a identificação individual de visitantes.
            </p>
          </Section>

          <Section title="4. Como gerir cookies">
            <p>
              Pode controlar e eliminar cookies através das definições do seu browser. A desactivação de cookies pode afectar o funcionamento de algumas funcionalidades do website. Para mais informação, consulte a ajuda do seu browser:
            </p>
            <ul className="flex flex-col gap-1 list-none mt-1">
              {[
                "Chrome: Definições › Privacidade e segurança › Cookies",
                "Firefox: Opções › Privacidade e segurança",
                "Safari: Preferências › Privacidade",
                "Edge: Definições › Cookies e permissões do site",
              ].map((item) => (
                <li key={item} className="before:content-['—'] before:mr-2 before:text-accent">
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="5. Consentimento">
            <p>
              Ao continuar a navegar neste website, aceita o uso dos cookies descritos nesta política. Pode retirar o seu consentimento a qualquer momento, ajustando as definições do seu browser conforme indicado acima.
            </p>
          </Section>

          <Section title="6. Contacto">
            <p>
              Para qualquer questão sobre o uso de cookies, contacte-nos através de elitefootballlab26@gmail.com.
            </p>
          </Section>

          <p className="text-[11px] text-fg-dim/50 pt-4 border-t border-rule">
            Última actualização: Maio 2025
          </p>
        </div>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">{title}</h2>
      {children}
    </div>
  );
}
