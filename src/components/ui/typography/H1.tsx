export type HProps = {
  children: React.ReactNode;
  className?: string;
};
export const H1 = ({ children, className }: HProps) => {
  return <h1 className={`font-ht text-8xl ${className}`}>{children}</h1>;
};
