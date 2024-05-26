import { Allies } from "@/components/pages/home/allies/Allies";
import { Feedback } from "@/components/pages/home/feedback/Feedback";
import { HassleFree } from "@/components/pages/home/hassleFree/HassleFree";
import { Hero } from "@/components/pages/home/hero/Hero";
import { Protections } from "@/components/pages/home/protections/Protections";
import { WhyUs } from "@/components/pages/home/whyUs/WhyUs";
import { Container } from "@/components/ui/container/Container";

export default function Home() {
  return (
    <main>
      <Container>
        <Hero />
        <Container>
          <Allies />
          <Protections />
          <HassleFree />
          <Feedback />
          <WhyUs />
        </Container>
      </Container>
    </main>
  );
}
