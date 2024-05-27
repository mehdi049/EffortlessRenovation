import Image from "next/image";
import { Button } from "@/components/ui/form/button/Button";

type Step0Props = {
  goNextStep: () => void;
};
export const Step0 = ({ goNextStep }: Step0Props) => {
  return (
    <>
      <div className="bg-white p-6 lg:p-8 rounded-lg border border-gray-200 shadow-sm flex flex-col gap-4 h-full">
        <Image
          src={"/images/step0-img-1.png"}
          alt=""
          width={148}
          height={148}
          className="mx-auto"
        />

        <p className="text-center">
          Answer a few questions to start on estimates for your renovation.
        </p>
        <Button onClick={() => goNextStep()} className="w-full">
          Get your estimates
        </Button>
      </div>
      <div
        className="bg-white p-6 lg:p-8 rounded-lg border border-gray-200 shadow-sm flex flex-col gap-4 justify-center h-full"
        onClick={() => goNextStep()}
      >
        <Image
          src={"/images/step0-img-2.png"}
          alt=""
          width={148}
          height={148}
          className="mx-auto"
        />

        <p className="text-center">
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
    </>
  );
};
