import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
