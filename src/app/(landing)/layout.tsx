import type { Metadata } from "next";
import { Container } from "@/components/ui/container/Container";
import { Navigation } from "@/components/nav/Navigation";
import { ContainerCenter } from "@/components/ui/container/ContainerCenter";
import { Banner } from "@/components/ui/banner/banner";

export const metadata: Metadata = {
  title: "EffortlessRenovation",
  description: "We're Your Renovation Allies, Not Salespeople",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Banner>
        <p className="text-white text-sm">
          Special Launch Promo: FREE inspections normally cost $100{" "}
          <a href="#" className="underline">
            Discover now
          </a>
        </p>
      </Banner>
      <Container>
        <ContainerCenter>
          <Navigation />
        </ContainerCenter>
      </Container>
      {children}
    </>
  );
}
