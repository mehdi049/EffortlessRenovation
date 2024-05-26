import { Hero } from "@/components/hero/Hero";
import { Banner } from "@/components/ui/banner/banner";
import { Container } from "@/components/ui/container/Container";
import { Navigation } from "@/components/ui/nav/Navigation";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Container>
        <Hero />
      </Container>
    </main>
  );
}
