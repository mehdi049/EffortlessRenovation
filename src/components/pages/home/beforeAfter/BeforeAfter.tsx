import { H2 } from "@/components/ui/typography/H2";
import Image from "next/image";

export const BeforeAfter = () => {
  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <H2>Before and After Transformation</H2>
        <div className="flex items-center justify-end gap-2">
          <Image
            src={"/vectors/arrow-next.svg"}
            alt="next"
            width={48}
            height={48}
          />
          <Image
            src={"/vectors/arrow-previous.svg"}
            alt="previous"
            width={48}
            height={48}
          />
        </div>
      </div>

      <hr className="my-12" />

      <div className="flex justify-around gap-2">
        <Image
          src={"/images/ba1.png"}
          alt="ba1"
          width={315}
          height={404}
          className="rounded-lg w-1/4 min-w-max"
        />
        <Image
          src={"/images/ba2.png"}
          alt="ba2"
          width={315}
          height={404}
          className="rounded-lg w-1/4 min-w-max"
        />
        <Image
          src={"/images/ba3.png"}
          alt="ba3"
          width={315}
          height={404}
          className="rounded-lg w-1/4 min-w-max"
        />
        <Image
          src={"/images/ba4.png"}
          alt="ba4"
          width={315}
          height={404}
          className="rounded-lg w-1/4 min-w-max"
        />
      </div>
    </div>
  );
};