import { FAQ } from "@/app/(landing)/(home)/components/FAQ/FAQ";
import { Allies } from "@/app/(landing)/(home)/components/allies/Allies";
import { BeforeAfter } from "@/app/(landing)/(home)/components/beforeAfter/BeforeAfter";
import { Feedback } from "@/app/(landing)/(home)/components/feedback/Feedback";
import { HassleFree } from "@/app/(landing)/(home)/components/hassleFree/HassleFree";
import { Hero } from "@/app/(landing)/(home)/components/hero/Hero";
import { LetsFind } from "@/app/(landing)/(home)/components/letsFind/LetsFind";
import { OurService } from "@/app/(landing)/(home)/components/ourService/OurService";
import { Protections } from "@/app/(landing)/(home)/components/protections/Protections";
import { Testimonials } from "@/app/(landing)/(home)/components/testimonials/Testimonials";
import { WhyUs } from "@/app/(landing)/(home)/components/whyUs/WhyUs";
import { Container } from "@/components/ui/container/Container";
import { ContainerCenter } from "@/components/ui/container/ContainerCenter";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 md:gap-20">
      <Container className="flex flex-col gap-8 md:gap-20">
        <Hero />
        <Container>
          <ContainerCenter className="flex flex-col gap-8 md:gap-20">
            <Allies />
            <Protections />
            <HassleFree />
            <Feedback />
            <WhyUs />
          </ContainerCenter>
        </Container>
      </Container>
      <Testimonials />
      <Container>
        <ContainerCenter className="flex flex-col gap-8 md:gap-20">
          <FAQ />
          <OurService />
          <BeforeAfter />
        </ContainerCenter>
      </Container>
      <LetsFind />
    </main>
  );
}
