import type { Metadata } from "next";
import { Button } from "@/components/ui/form/button/Button";
import { ROUTES } from "@/routes";
import Link from "next/link";
import { AnimatedSection } from "./(home)/components/AnimatedSection";

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
    <div className="relative">
      <AnimatedSection />
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
