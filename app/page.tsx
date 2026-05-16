import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import Protocolo from "@/app/components/Protocolo";
import Staff from "@/app/components/Staff";
import Planos from "@/app/components/Planos";
import Contacto from "@/app/components/Contacto";
import AvaliacaoModal from "@/app/components/AvaliacaoModal";
import { ModalProvider } from "@/app/context/ModalContext";

export default function Home() {
  return (
    <ModalProvider>
      <Nav />
      <main>
        <Hero />
        <Protocolo />
        <Staff />
        <Planos />
        <Contacto />
      </main>
      <AvaliacaoModal />
    </ModalProvider>
  );
}
