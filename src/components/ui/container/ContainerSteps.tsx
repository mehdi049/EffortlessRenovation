import { ContainerProps } from "./Container";

export const ContainerSteps = ({
  children,
  className = "",
}: ContainerProps) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 gap-8 items-center ${className}`}
    >
      {children}
    </div>
  );
};
