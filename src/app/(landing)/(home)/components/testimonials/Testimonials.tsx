"use client";
import { Animate } from "@/components/ui/animation/Animate";
import { H2 } from "@/components/ui/typography/H2";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    title: (
      <>
        My husband and I <br />
        love our new home.
      </>
    ),
    text: '"I extend my compliments to everyone at Effortless Renovation both for the quality of the home\'s workmanship and the entire renovation process. Unquestionably, renovation of our home was the most pleasant and easiest thing we have done."',
  },
  {
    title: (
      <>
        My husband and I <br />
        love our new home. (2)
      </>
    ),
    text: '"I extend my compliments to everyone at Effortless Renovation both for the quality of the home\'s workmanship and the entire renovation process. Unquestionably, renovation of our home was the most pleasant and easiest thing we have done."',
  },
  {
    title: (
      <>
        My husband and I <br />
        love our new home. (3)
      </>
    ),
    text: '"I extend my compliments to everyone at Effortless Renovation both for the quality of the home\'s workmanship and the entire renovation process. Unquestionably, renovation of our home was the most pleasant and easiest thing we have done."',
  },
  {
    title: (
      <>
        My husband and I <br />
        love our new home. (4)
      </>
    ),
    text: '"I extend my compliments to everyone at Effortless Renovation both for the quality of the home\'s workmanship and the entire renovation process. Unquestionably, renovation of our home was the most pleasant and easiest thing we have done."',
  },
];

export const Testimonials = () => {
  const [isMobileScreen] = useMediaQuery(768);
  const [index, setIndex] = useState(0);
  return (
    <div
      className="bg-center bg-cover relative grid grid-cols-1 md:grid-cols-2 pb-64 md:pb-0"
      style={{
        backgroundImage: isMobileScreen
          ? "url(/images/hero-bg-2-mobile.webp)"
          : "url(/images/hero-bg-2.webp)",
      }}
      id="testimonials"
    >
      <div className=" bg-black bg-opacity-90 flex flex-col gap-4 md:gap-8 px-8 md:px-16 py-8 md:py-32">
        <p className="text-xs uppercase text-white">Featured Testimonial</p>
        <Animate type="opacity" dep={index.toString()}>
          <H2 className="text-white">{testimonials[index].title}</H2>
          <p className="md:text-2xl text-white mt-4 md:mt-8">
            {testimonials[index].text}
          </p>
        </Animate>

        <div className="flex gap-4 items-center md:mt-16">
          <Image
            src={"/vectors/arrow-left-white-round.svg"}
            height={48}
            width={48}
            alt="previous"
            onClick={() => {
              if (index > 0) setIndex(index - 1);
              else setIndex(testimonials.length - 1);
            }}
            className="cursor-pointer"
          />
          <Image
            src={"/vectors/arrow-right-white-round.svg"}
            height={48}
            width={48}
            alt="next"
            onClick={() => {
              if (index < testimonials.length - 1) setIndex(index + 1);
              else setIndex(0);
            }}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
