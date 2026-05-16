import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import Protocolo from "@/app/components/Protocolo";
import Staff from "@/app/components/Staff";
import Planos from "@/app/components/Planos";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Protocolo />
      <Staff />
      <Planos />
    </main>
  );
}
