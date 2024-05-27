import type { Metadata } from "next";
import { Container } from "@/components/ui/container/Container";
import { Navigation } from "@/components/nav/Navigation";
import { ContainerCenter } from "@/components/ui/container/ContainerCenter";

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
      <Container>
        <ContainerCenter>
          <Navigation cta={false} />
        </ContainerCenter>
      </Container>
      {children}
    </>
  );
}
