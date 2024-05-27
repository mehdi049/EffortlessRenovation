"use client";
import { Button } from "@/components/ui/form/button/Button";
import Image from "next/image";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";

export const Navigation = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  return (
    <nav className="flex justify-between items-center gap-4 py-4">
      <ul className="flex gap-6 items-center">
        <li>
          <Image
            src={"/vectors/logo-black.svg"}
            width={250}
            height={36}
            alt="logo"
            className="cursor-pointer"
          />
        </li>
        <li className="hidden lg:block">
          <a href="#">Why us</a>
        </li>
        <li className="hidden lg:block">
          <a href="#">Our Process</a>
        </li>
        <li className="hidden lg:block">
          <a href="#">Testimonials</a>
        </li>
        <li className="hidden lg:block">
          <a href="#">FAQ</a>
        </li>
      </ul>

      <Button size="sm" className="hidden md:block">
        Contact us
      </Button>
      <Image
        src={"/vectors/bars.svg"}
        width={36}
        height={36}
        alt="bars"
        className="md:hidden cursor-pointer"
        onClick={() => setIsDisplayed(true)}
      />

      {isDisplayed && <MobileMenu onClose={() => setIsDisplayed(false)} />}
    </nav>
  );
};
