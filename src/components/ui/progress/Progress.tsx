type ProgressProps = {
  percentage: number;
};
export const Progress = ({ percentage }: ProgressProps) => {
  return (
    <div className="h-3 w-full border-b border-gray-200 bg-gray-200">
      <div
        className="bg-black h-full duration-300"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};
