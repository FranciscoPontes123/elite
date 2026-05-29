import Link from "next/link";

export const metadata = {
  title: "Política de Privacidade — Elite Football Lab",
};

export default function PrivacidadePage() {
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
          Política de<br />Privacidade
        </h1>

        <div className="flex flex-col gap-10 font-mono text-[13px] text-fg-dim leading-relaxed">
          <Section title="1. Responsável pelo tratamento">
            <p>
              Elite Football Lab, contactável através do email elitefootballlab26@gmail.com, é o responsável pelo tratamento dos dados pessoais recolhidos através deste website.
            </p>
          </Section>

          <Section title="2. Dados recolhidos">
            <p>
              Através do formulário de contacto, recolhemos os seguintes dados: número de telemóvel, endereço de email, idade, clube/escola onde pratica futebol e plano de interesse. Estes dados são fornecidos voluntariamente pelo utilizador.
            </p>
          </Section>

          <Section title="3. Finalidade do tratamento">
            <p>
              Os dados são utilizados exclusivamente para responder ao pedido de informação ou marcação submetido, gerir a relação comercial com o cliente e enviar comunicações relacionadas com os serviços da Elite Football Lab, quando autorizado.
            </p>
          </Section>

          <Section title="4. Base legal">
            <p>
              O tratamento baseia-se no consentimento do titular, prestado no momento do preenchimento do formulário, e na execução do contrato de prestação de serviços.
            </p>
          </Section>

          <Section title="5. Partilha de dados">
            <p>
              Os dados não são vendidos nem cedidos a terceiros. O formulário de contacto utiliza o serviço Formspree (formspree.io) para processamento técnico das submissões, sujeito à respectiva política de privacidade. O website utiliza Vercel Analytics para estatísticas de acesso anónimas e agregadas.
            </p>
          </Section>

          <Section title="6. Conservação dos dados">
            <p>
              Os dados são conservados pelo período necessário à prestação do serviço contratado ou, na ausência de contrato, por um máximo de 12 meses após o último contacto.
            </p>
          </Section>

          <Section title="7. Direitos do titular">
            <p>
              Tem direito a aceder, rectificar, apagar, limitar ou opor-se ao tratamento dos seus dados, bem como à portabilidade dos mesmos. Para exercer estes direitos, contacte elitefootballlab26@gmail.com. Pode também apresentar reclamação à Comissão Nacional de Protecção de Dados (CNPD) em cnpd.pt.
            </p>
          </Section>

          <Section title="8. Segurança">
            <p>
              Adoptamos medidas técnicas e organizativas adequadas para proteger os seus dados contra acesso não autorizado, perda ou destruição.
            </p>
          </Section>

          <Section title="9. Alterações a esta política">
            <p>
              Esta política pode ser actualizada. A versão mais recente estará sempre disponível nesta página, com a data de última actualização.
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
