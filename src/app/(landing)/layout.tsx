import type { Metadata } from "next";
import { Container } from "@/components/ui/container/Container";
import { Navigation } from "@/components/nav/Navigation";
import { ContainerCenter } from "@/components/ui/container/ContainerCenter";
import { Banner } from "@/components/ui/banner/banner";
import { Button } from "@/components/ui/form/button/Button";
import { ROUTES } from "@/routes";
import Link from "next/link";

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
    <div className="relative overflow-x-hidden">
      <Banner>
        <p className="text-white text-sm">
          Special Launch Promo: FREE inspections normally cost $100{" "}
          <a href="#" className="underline">
            Discover now
          </a>
        </p>
      </Banner>
      <Container className="sticky top-0 bg-white z-50 border-b border-gray-100 shadow-sm">
        <ContainerCenter>
          <Navigation />
        </ContainerCenter>
      </Container>
      {children}

      <Link
        href={ROUTES.ESTIMATE}
        className="fixed bottom-10 right-10 sm:hidden z-20"
      >
        <Button size="sm">Get An Estimate</Button>
      </Link>
    </div>
  );
}
