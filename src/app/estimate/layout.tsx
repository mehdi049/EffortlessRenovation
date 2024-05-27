import { Container } from "@/components/ui/container/Container";
import { Navigation } from "@/components/nav/Navigation";
import { ContainerCenter } from "@/components/ui/container/ContainerCenter";
import { EstimateContextProvider } from "./context/EstimateContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <Container className="sticky top-0 bg-white z-50 border-b border-gray-100 shadow-sm">
        <ContainerCenter>
          <Navigation cta={false} />
        </ContainerCenter>
      </Container>
      <main>
        <Container className="bg-gray-100 min-h-screen flex flex-col items-center justify-center gap-4">
          <ContainerCenter className="flex flex-col gap-8 md:gap-20 w-full">
            <EstimateContextProvider>{children}</EstimateContextProvider>
          </ContainerCenter>
        </Container>
      </main>
    </div>
  );
}
