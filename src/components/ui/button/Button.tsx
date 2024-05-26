import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  size?: "sm" | "lg";
}
export const Button = ({
  children,
  variant = "primary",
  iconLeft,
  iconRight,
  disabled,
  className = "",
  size = "lg",
  onClick,
}: ButtonProps) => {
  className += ` px-5 rounded-lg font-semibold ${
    size == "sm" ? "py-2" : "py-3"
  }`;
  switch (variant) {
    case "primary":
      className += " bg-black text-white";

      break;

    default:
      className += " bg-white text-black border border-gray-100";
      break;
  }

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`flex justify-center items-center gap-4 ${className}`}
    >
      {iconLeft && <span>{iconLeft}</span>}
      {children}
      {iconRight && <span>{iconRight}</span>}
    </button>
  );
};
