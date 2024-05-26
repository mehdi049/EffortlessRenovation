import { H2 } from "@/components/ui/typography/H2";
import Image from "next/image";

export const Testimonials = () => {
  return (
    <div
      className="bg-center bg-cover relative mb-12 grid grid-cols-1 md:grid-cols-2"
      style={{ backgroundImage: "url(/images/hero-bg-2.png)" }}
    >
      <div className=" bg-black bg-opacity-90 flex flex-col gap-8 px-16 py-32">
        <p className="text-xs uppercase text-white">Featured Testimonial</p>
        <H2 className="text-white">
          My husband and I <br />
          love our new home.
        </H2>
        <p className="text-2xl text-white">
          &quot;I extend my compliments to everyone at Effortless Renovation
          both for the quality of the home&apos;s workmanship and the entire
          renovation process. Unquestionably, renovation of our home was the
          most pleasant and easiest thing we have done.&quot;
        </p>

        <div className="flex gap-4 items-center mt-16">
          <Image
            src={"/vectors/arrow-next-white.svg"}
            height={48}
            width={48}
            alt="next"
          />
          <Image
            src={"/vectors/arrow-previous-white.svg"}
            height={48}
            width={48}
            alt="previous"
          />
        </div>
      </div>
    </div>
  );
};
