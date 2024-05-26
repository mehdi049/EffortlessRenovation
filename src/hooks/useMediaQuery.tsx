import { useLayoutEffect, useState } from "react";

const useMediaQuery = (size: number) => {
  const [match, setMatch] = useState([window.innerWidth <= size]);

  useLayoutEffect(() => {
    const listener = () => {
      setMatch([window.innerWidth <= size]);
    };
    window.addEventListener("resize", listener);
    listener();
    return () => window.removeEventListener("resize", listener);
  }, []);

  return match;
};

export default useMediaQuery;
