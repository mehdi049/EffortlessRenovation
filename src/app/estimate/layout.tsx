import { Container } from "@/components/ui/container/Container";
import { Navigation } from "@/components/nav/Navigation";
import { ContainerCenter } from "@/components/ui/container/ContainerCenter";
import { EstimateContextProvider } from "./context/EstimateContext";
import { ProgressBar } from "./components/progressBar/ProgressBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Container>
        <ContainerCenter>
          <Navigation cta={false} />
        </ContainerCenter>
      </Container>
      <EstimateContextProvider>
        <ProgressBar />
        <Container className="bg-gray-100 md:min-h-screen flex flex-col md:items-center md:justify-center gap-4 py-16 md:py-8">
          {children}
        </Container>
      </EstimateContextProvider>
    </div>
  );
}
