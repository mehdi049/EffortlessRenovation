interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary" | "secondary";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}
export const Input = ({
  type = "text",
  value,
  placeholder,
  onChange,
  className = "",
}: InputProps) => {
  className += "p-4 rounded-md border border-gray-400 w-full";
  return (
    <input
      type={type}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
    >
      {value}
    </input>
  );
};
