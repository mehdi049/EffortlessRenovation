import Image from "next/image";
import { Button } from "../ui/button/Button";
import { H1 } from "../ui/typography/H1";

export const Hero = () => {
  return (
    <div
      className=" bg-center bg-cover pl-8 pb-16 pt-64 rounded-lg relative"
      style={{ backgroundImage: "url(/images/hero-bg.png)" }}
    >
      <H1 className="text-white">
        Renovate <br />
        Effortlessly.
      </H1>
      <p
        className="text-white max-w-[650px] text-2xl mt-6"
        style={{ lineHeight: "40px" }}
      >
        Effortlessly compare quotes from top quality contractors, and get peace
        of mind with warranty & price protections.
      </p>
      <Button
        className="mt-6"
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

      <div className="bg-white px-8 py-12 rounded-tl-xl flex gap-4 md:gap-8 items-center justify-center max-w-[450px] absolute right-0 bottom-0">
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
    </div>
  );
};
