import type { Metadata } from "next";
import "./globals.css";
import { Banner } from "@/components/ui/banner/banner";
import { Navigation } from "@/components/ui/nav/Navigation";
import { Container } from "@/components/ui/container/Container";
import { Footer } from "@/components/pages/home/footer/Footer";

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
    <html lang="en">
      <body>
        <Banner>
          <p className="text-white text-sm">
            Special Launch Promo: FREE inspections normally cost $100{" "}
            <a href="#" className="underline">
              Discover now
            </a>
          </p>
        </Banner>
        <Container>
          <Navigation />
        </Container>
        {children}
        <Footer />
      </body>
    </html>
  );
}
