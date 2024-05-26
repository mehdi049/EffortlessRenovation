import { Allies } from "@/components/pages/home/allies/Allies";
import { Hero } from "@/components/pages/home/hero/Hero";
import { Protections } from "@/components/pages/home/protections/Protections";
import { Banner } from "@/components/ui/banner/banner";
import { Container } from "@/components/ui/container/Container";
import { Navigation } from "@/components/ui/nav/Navigation";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Container>
        <Hero />
        <Container>
          <Allies />
          <Protections />
        </Container>
      </Container>
    </main>
  );
}
