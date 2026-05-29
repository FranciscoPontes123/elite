import Image from "next/image";
import Link from "next/link";

const legalLinks = [
  { label: "Termos e Condições", href: "/termos" },
  { label: "Política de Privacidade", href: "/privacidade" },
  { label: "Política de Cookies", href: "/cookies" },
];

export default function Footer() {
  return (
    <footer className="border-t border-rule mt-0">
      <div className="px-[clamp(20px,5vw,72px)] py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="Elite Football Lab"
            width={100}
            height={32}
            className="h-7 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-150"
          />
        </Link>

        <nav className="flex flex-wrap gap-6">
          {legalLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-dim hover:text-fg transition-colors duration-150"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-fg-dim">
          © {new Date().getFullYear()} Elite Football Lab
        </p>
      </div>
    </footer>
  );
}
