import { useRef } from "react";

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export const Radio = ({
  value,
  onChange,
  className = "",
  label,
  name,
  onSelect,
  checked,
}: RadioProps) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div
      className={`flex gap-4 items-center justify-start border-2 border-gray-300 rounded-lg p-4 cursor-pointer hover:border-gray-500 hover:shadow-md ${className}`}
      onClick={() => {
        ref?.current?.click();
        onChange;
      }}
    >
      <div>
        <input
          type="radio"
          onChange={onChange}
          value={value}
          name={name}
          ref={ref}
          checked={checked}
        />
      </div>
      <div>{label}</div>
    </div>
  );
};
