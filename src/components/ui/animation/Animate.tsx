"use client";
import { useState, useEffect, useRef } from "react";
import { Transition } from "react-transition-group";

type AnimateProps = {
  children: React.ReactNode;
  dep?: string;
  type?: "slide" | "opacity";
  duration?: number;
};

export const Animate = ({
  children,
  dep,
  type = "slide",
  duration = 300,
}: AnimateProps) => {
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);

  const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
    opacity: 0,
    marginTop: type === "slide" ? "-20px" : "0px",
  };

  const transitionStyles: any = {
    entering: { opacity: 0 },
    entered: { opacity: 1, marginTop: "0px" },
    exiting: { opacity: 0, marginLeft: type === "slide" ? "-2000px" : "0px" },
    exited: { opacity: 0 },
  };

  useEffect(() => {
    setInProp(true);
  }, []);

  useEffect(() => {
    setInProp(false);
    setTimeout(() => {
      setInProp(true);
    }, duration);
  }, [dep]);

  return (
    <>
      <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
        {(state) => (
          <div
            ref={nodeRef}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            {children}
          </div>
        )}
      </Transition>
    </>
  );
};
