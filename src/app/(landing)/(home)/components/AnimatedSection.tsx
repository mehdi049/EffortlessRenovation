"use client";
import { Navigation } from "@/components/nav/Navigation";
import { Banner } from "@/components/ui/banner/banner";
import { Container } from "@/components/ui/container/Container";
import { ContainerCenter } from "@/components/ui/container/ContainerCenter";
import { useState, useEffect } from "react";

export const AnimatedSection = () => {
  const [anim, setAnim] = useState<boolean | undefined>(undefined);

  var lastScrollTop = 0;
  useEffect(() => {
    const onScroll = () => {
      var st = window.scrollY || document.documentElement.scrollTop;
      const scroll = window.scrollY;

      // if scroll up
      if (st < lastScrollTop) setAnim(true);
      else if (st > lastScrollTop) setAnim(false);

      // eslint-disable-next-line react-hooks/exhaustive-deps
      lastScrollTop = st <= 0 ? 0 : st;
    };

    addEventListener("touchmove", onScroll);
    addEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`fixed left-0 duration-500 w-full z-50 bg-white ${
        anim === true
          ? "animate-up-down top-0 shadow-sm"
          : anim === false
          ? "-top-40"
          : "top-0"
      }`}
    >
      <Banner>
        <p className="text-white text-sm">
          Special Launch Promo: FREE inspections normally cost $100{" "}
          <a href="#" className="underline">
            Discover now
          </a>
        </p>
      </Banner>
      <Container>
        <ContainerCenter>
          <Navigation />
        </ContainerCenter>
      </Container>
    </div>
  );
};
