type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};
export const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <>
      <div className={`px-4 md:px-8 ${className}`}>{children}</div>
    </>
  );
};
