import { FAQ } from "@/components/pages/home/FAQ/FAQ";
import { Allies } from "@/components/pages/home/allies/Allies";
import { BeforeAfter } from "@/components/pages/home/beforeAfter/BeforeAfter";
import { Feedback } from "@/components/pages/home/feedback/Feedback";
import { HassleFree } from "@/components/pages/home/hassleFree/HassleFree";
import { Hero } from "@/components/pages/home/hero/Hero";
import { LetsFind } from "@/components/pages/home/letsFind/LetsFind";
import { OurService } from "@/components/pages/home/ourService/OurService";
import { Protections } from "@/components/pages/home/protections/Protections";
import { Testimonials } from "@/components/pages/home/testimonials/Testimonials";
import { WhyUs } from "@/components/pages/home/whyUs/WhyUs";
import { Container } from "@/components/ui/container/Container";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 md:gap-20">
      <Container className="flex flex-col gap-8 md:gap-20">
        <Hero />
        <Container className="flex flex-col gap-8 md:gap-20">
          <Allies />
          <Protections />
          <HassleFree />
          <Feedback />
          <WhyUs />
        </Container>
      </Container>
      <Testimonials />
      <Container className="flex flex-col gap-8 md:gap-20">
        <FAQ />
        <OurService />
        <BeforeAfter />
      </Container>
      <LetsFind />
    </main>
  );
}
