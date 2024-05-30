import Image from "next/image";
import { Button } from "@/components/ui/form/button/Button";
import { ContainerSteps } from "@/components/ui/container/ContainerSteps";

type Step0Props = {
  goNextStep: () => void;
};
export const Step0 = ({ goNextStep }: Step0Props) => {
  const className =
    "bg-white p-6 lg:p-8 rounded-lg border border-gray-200 shadow-sm flex flex-col gap-4 h-full";
  return (
    <>
      <ContainerSteps>
        <div className={className}>
          <Image
            src={"/images/step0-img-1.webp"}
            alt=""
            width={148}
            height={148}
            className="mx-auto"
          />

          <p className="text-center md:min-h-20">
            Answer a few questions to start on estimates for your renovation.
          </p>
          <Button onClick={() => goNextStep()} className="w-full">
            Get your estimates
          </Button>
        </div>
        <div className={className}>
          <Image
            src={"/images/step0-img-2.webp"}
            alt=""
            width={148}
            height={148}
            className="mx-auto"
          />

          <p className="text-center md:min-h-20">
            Book a complimentary consultation with a Block renovation consultant
            to discuss your remodel goals.
          </p>
          <a href="tel:+17189891378" className="w-full block">
            <Button className="w-full">Call (718) 989-1378</Button>
          </a>
          <Button className="w-full" variant="secondary">
            Book A Call
          </Button>
        </div>
      </ContainerSteps>
    </>
  );
};
