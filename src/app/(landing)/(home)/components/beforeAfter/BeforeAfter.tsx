"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { H2 } from "@/components/ui/typography/H2";
import Image from "next/image";

export const BeforeAfter = () => {
  /*const moveRight = () => {
    const el = document.getElementById(`hscroll`) as HTMLElement;
    el.scrollLeft += 170;
  };

  const moveLeft = () => {
    const el = document.getElementById(`hscroll`) as HTMLElement;
    el.scrollLeft -= 170;
  };*/

  const items = [
    "/images/ba1.png",
    "/images/ba2.png",
    "/images/ba3.png",
    "/images/ba4.png",
  ];
  return (
    <div>
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <H2>Before and After Transformation</H2>
        {/*  <div className="hidden md:flex items-center justify-end gap-2">
          <Image
            src={"/vectors/arrow-left-round.svg"}
            alt="previous"
            width={48}
            height={48}
            className="cursor-pointer"
            //onClick={moveLeft}
          />
          <Image
            src={"/vectors/arrow-right-round.svg"}
            alt="next"
            width={48}
            height={48}
            className="cursor-pointer"
            // onClick={moveRight}
          />
        </div>*/}
      </div>

      <hr className="my-12 hidden md:block" />

      <Carousel className="w-full mt-8 md:mt-16">
        <CarouselContent>
          {items.map((item, i) => (
            <CarouselItem key={i} className="sm:basis-1/2 lg:basis-1/4">
              <Image
                src={item}
                alt=""
                width={315}
                height={404}
                className="w-full rounded-lg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 2xl:-left-10" />
        <CarouselNext className="right-0 2xl:-right-10" />
      </Carousel>

      {/*  <div className="flex md:hidden items-center justify-center gap-2 mt-4">
        <Image
          src={"/vectors/arrow-left-round.svg"}
          alt="previous"
          width={48}
          height={48}
          className="cursor-pointer"
          // onClick={moveLeft}
        />
        <Image
          src={"/vectors/arrow-right-round.svg"}
          alt="next"
          width={48}
          height={48}
          className="cursor-pointer"
          // onClick={moveRight}
        />
      </div>*/}
    </div>
  );
};
