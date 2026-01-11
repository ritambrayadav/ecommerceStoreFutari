"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  const base = "px-20 py-2 rounded bg-blue-600 text-white hover:bg-blue-700";
  return (
    <button
      className={`${base} ${className || ""}`}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};
