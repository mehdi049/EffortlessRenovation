type LabelProps = {
  children: React.ReactNode;
  className?: string;
  helper?: string;
};
export const Label = ({ children, helper, className }: LabelProps) => {
  return (
    <div>
      <label className={`font-medium text-3xl ${className}`}>{children}</label>
      {helper && <p className="text-gray-500 mt-4">{helper}</p>}
    </div>
  );
};
