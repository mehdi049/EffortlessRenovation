interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary" | "secondary";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  error?: string;
}
export const Input = ({
  type = "text",
  value,
  placeholder,
  onChange,
  className = "",
  error,
}: InputProps) => {
  className += `p-4 rounded-md  w-full ${
    error ? "border-2 border-red-500" : "border border-gray-400"
  }`;
  return (
    <div>
      <input
        type={type}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
        value={value}
      />
      {error && (
        <p className="mt-2 text-xs ml-4 text-red-500 font-medium">{error}</p>
      )}
    </div>
  );
};
