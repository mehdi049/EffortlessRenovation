type ContainerProps = {
  children: React.ReactNode;
};
export const Container = ({ children }: ContainerProps) => {
  return (
    <>
      <div className="px-4 md:px-8 mx-auto">{children}</div>
    </>
  );
};