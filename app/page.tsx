import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import Protocolo from "@/app/components/Protocolo";
import Staff from "@/app/components/Staff";
import Planos from "@/app/components/Planos";
import Contacto from "@/app/components/Contacto";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Protocolo />
        <Staff />
        <Planos />
        <Contacto />
      </main>
    </>
  );
}
