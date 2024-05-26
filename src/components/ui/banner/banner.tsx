"use client";
import Image from "next/image";
import { useState } from "react";

type BannerProps = {
  children: React.ReactNode;
};
export const Banner = ({ children }: BannerProps) => {
  const [isDisplayed, setIsDisplayed] = useState(true);
  return (
    <>
      {isDisplayed && (
        <div className="bg-black px-4 md:px-8 py-4 flex justify-between gap-4">
          <div>{children}</div>

          <div>
            <Image
              src={"/vectors/cross-white.svg"}
              width={20}
              height={20}
              alt="close"
              className="cursor-pointer"
              onClick={() => setIsDisplayed(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};
