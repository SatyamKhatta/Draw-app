"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  variant?: "primary" | "outline" | "secondary" | "ghost";
  size?: "lg" | "sm";
  className?: string;
  onClick?: () => void;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  size = "sm",
  variant = "primary",
  className = "",
  onClick,
  children,
  type = "button"
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none";

  const sizeStyles = {
    lg: "h-12 px-6 text-base",
    sm: "h-10 px-4 text-sm",
  };

  const variantStyles = {
    primary: "bg-cyan-500 text-black hover:scale-105 hover:shadow-cyan-500 glow",
    secondary:
      "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
    outline:
      "border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black",
    ghost:
      "border border-cyan-500 text-cyan-300 hover:bg-cyan-500 hover:text-black",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      {children}
    </button>
  );
};
