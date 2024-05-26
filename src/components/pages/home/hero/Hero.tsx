import Image from "next/image";
import { Button } from "../../../ui/button/Button";
import { H1 } from "../../../ui/typography/H1";
import { ContainerCenter } from "@/components/ui/container/ContainerCenter";

export const Hero = () => {
  return (
    <div
      className="bg-center bg-cover md:rounded-lg -mx-4 md:mx-0"
      style={{ backgroundImage: "url(/images/hero-bg.png)" }}
    >
      <ContainerCenter className="relative px-4 md:px-8 md:pb-16 pt-64">
        <H1 className="text-white">
          Renovate <br />
          Effortlessly.
        </H1>
        <p className="text-white max-w-[650px] text-lg md:text-2xl mt-6">
          Effortlessly compare quotes from top quality contractors, and get
          peace of mind with warranty & price protections.
        </p>
        <Button
          className="mt-6 hidden md:flex"
          variant="secondary"
          iconRight={
            <Image
              src={"/vectors/arrow-right.svg"}
              alt=""
              width={16}
              height={16}
            />
          }
        >
          Get An Estimate
        </Button>

        <div className="bg-white -mx-4 md:mx-0 px-4 md:px-8 py-6 lg:py-12 rounded-tl-3xl rounded-tr-3xl md:rounded-tl-xl md:rounded-tr-none flex gap-4 md:gap-8 items-center justify-center md:max-w-[450px] md:absolute mt-8 md:mt-0 right-0 bottom-0">
          <div>
            <Image src={"/vectors/GAF.svg"} width={130} height={45} alt="GAF" />
          </div>

          <div>
            <Image
              src={"/vectors/preferred-contractor.svg"}
              width={130}
              height={45}
              alt="preferred contractor"
            />
          </div>
        </div>
      </ContainerCenter>
    </div>
  );
};
