import { ContainerProps } from "./Container";

export const ContainerCenter = ({
  children,
  className = "",
}: ContainerProps) => {
  return (
    <>
      <div className={`max-w-7xl mx-auto ${className}`}>{children}</div>
    </>
  );
};
