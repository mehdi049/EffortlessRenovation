import { HProps } from "./H1";

export const H2 = ({ children, className }: HProps) => {
  return <h2 className={`font-ht text-6xl ${className}`}>{children}</h2>;
};
