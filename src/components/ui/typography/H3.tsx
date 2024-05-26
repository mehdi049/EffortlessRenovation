import { HProps } from "./H1";

export const H3 = ({ children, className }: HProps) => {
  return (
    <h3 className={`font-ht text-4xl md:text-5xl ${className}`}>{children}</h3>
  );
};
