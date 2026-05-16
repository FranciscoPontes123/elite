import type { Metadata } from "next";
import localFont from "next/font/local";
import { Big_Shoulders_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const bigShoulders = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  variable: "--font-big-shoulders",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elite Football Lab — Treino técnico individual de futebol em Lisboa",
  description:
    "Laboratório de desenvolvimento técnico individual. Método personalizado, 1-on-1, para jovens atletas e profissionais em Lisboa (Telheiras).",
  openGraph: {
    title: "Elite Football Lab",
    description: "Trabalhamos o atleta. Não o jogador médio.",
    siteName: "Elite Football Lab",
    locale: "pt_PT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bigShoulders.variable} font-body antialiased bg-bg text-fg`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
