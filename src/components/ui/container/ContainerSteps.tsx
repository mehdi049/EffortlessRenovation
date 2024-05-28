import { ContainerProps } from "./Container";

export const ContainerSteps = ({
  children,
  className = "",
}: ContainerProps) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-20 items-center max-w-4xl mx-auto py-8 ${className}`}
    >
      {children}
    </div>
  );
};
