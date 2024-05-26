"use client";
import { useLayoutEffect, useState } from "react";

const useMediaQuery = (size: number) => {
  const [match, setMatch] = useState<boolean[]>([false]);

  useLayoutEffect(() => {
    const listener = () => {
      if (window) setMatch([window.innerWidth <= size]);
    };
    window.addEventListener("resize", listener);
    listener();
    return () => window.removeEventListener("resize", listener);
  }, [size]);

  return match;
};

export default useMediaQuery;
