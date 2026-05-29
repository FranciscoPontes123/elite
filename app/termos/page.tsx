import Link from "next/link";

export const metadata = {
  title: "Termos e Condições — Elite Football Lab",
};

export default function TermosPage() {
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
          Termos e<br />Condições
        </h1>

        <div className="flex flex-col gap-10 font-mono text-[13px] text-fg-dim leading-relaxed">
          <Section title="1. Identificação">
            <p>
              Elite Football Lab, com sede em Odivelas, Lisboa, é responsável pela prestação dos serviços de treino técnico individual de futebol descritos neste website.
            </p>
          </Section>

          <Section title="2. Objecto dos serviços">
            <p>
              Os serviços prestados consistem em sessões de treino técnico individual de futebol, realizadas no Parque de Jogos do CER Tenente Valdez, Odivelas. As sessões podem ser marcadas através do formulário de contacto, WhatsApp ou email indicados no website.
            </p>
          </Section>

          <Section title="3. Marcação e confirmação">
            <p>
              A marcação de uma sessão só se considera confirmada após resposta explícita da equipa Elite Football Lab. O preenchimento do formulário de contacto não garante, por si só, a reserva de qualquer sessão.
            </p>
          </Section>

          <Section title="4. Pagamento">
            <p>
              Os valores dos planos são os indicados na página de Planos no momento da marcação. O pagamento é efectuado de acordo com as condições acordadas directamente com a equipa. Os preços podem ser alterados sem aviso prévio, não afectando sessões já confirmadas e pagas.
            </p>
          </Section>

          <Section title="5. Cancelamento e faltas">
            <p>
              O cancelamento de uma sessão deve ser comunicado com um mínimo de 24 horas de antecedência. Faltas sem aviso prévio ou cancelamentos tardios poderão ser descontados do plano contratado, sem direito a reposição.
            </p>
          </Section>

          <Section title="6. Responsabilidade">
            <p>
              O cliente declara estar em condições físicas adequadas para a prática de exercício físico. A Elite Football Lab não se responsabiliza por lesões decorrentes de condições médicas pré-existentes não comunicadas. É recomendada avaliação médica prévia a qualquer programa de treino.
            </p>
          </Section>

          <Section title="7. Propriedade intelectual">
            <p>
              Todo o conteúdo deste website — textos, imagens, logótipo e metodologia — é propriedade da Elite Football Lab e não pode ser reproduzido ou utilizado sem autorização expressa.
            </p>
          </Section>

          <Section title="8. Alterações">
            <p>
              A Elite Football Lab reserva-se o direito de alterar estes Termos e Condições a qualquer momento. As alterações entram em vigor na data de publicação no website.
            </p>
          </Section>

          <Section title="9. Lei aplicável">
            <p>
              Estes termos são regidos pela lei portuguesa. Em caso de litígio, o foro competente é o da comarca de Lisboa, com renúncia a qualquer outro.
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
