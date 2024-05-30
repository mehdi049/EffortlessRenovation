"use client";
import { Button } from "@/components/ui/form/button/Button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MobileMenu } from "./MobileMenu";
import Link from "next/link";
import { ROUTES } from "@/routes";

type NavigationProps = {
  cta?: boolean;
};
export const Navigation = ({ cta = true }: NavigationProps) => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [isNavDisplayed, setIsNavDisplayed] = useState(true);

  var lastScrollTop = 0;
  useEffect(() => {
    addEventListener("scroll", () => {
      var st = window.scrollY || document.documentElement.scrollTop;
      const scroll = window.scrollY;
      console.log(scroll);

      // if scroll up
      if (st < lastScrollTop && scroll === 0) {
        setIsNavDisplayed(true);
      } else if (scroll > 170) setIsNavDisplayed(false);

      // eslint-disable-next-line react-hooks/exhaustive-deps
      lastScrollTop = st <= 0 ? 0 : st;
    });
  }, []);

  return (
    <nav
      className={`flex justify-between items-center gap-4 py-4 duration-500 ${
        isNavDisplayed ? "-mt-0" : "-mt-40"
      }`}
    >
      <ul className="flex gap-6 items-center">
        <li>
          <Link href={ROUTES.HOME}>
            <Image
              src={"/vectors/logo-black.svg"}
              width={250}
              height={36}
              alt="logo"
              className="cursor-pointer"
            />
          </Link>
        </li>
        <li className="hidden lg:block">
          <a href={ROUTES.HOME + "#why-us"}>Why us</a>
        </li>
        <li className="hidden lg:block">
          <a href={ROUTES.HOME + "#our-process"}>Our Process</a>
        </li>
        <li className="hidden lg:block">
          <a href={ROUTES.HOME + "#testimonials"}>Testimonials</a>
        </li>
        <li className="hidden lg:block">
          <a href={ROUTES.HOME + "#faq"}>FAQ</a>
        </li>
      </ul>

      {cta && (
        <Button size="sm" className="hidden md:block">
          Contact us
        </Button>
      )}
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
