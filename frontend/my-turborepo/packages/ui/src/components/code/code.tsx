import { type JSX } from "react";

export function Code({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return <code className={`font-mono text-sm bg-gray-100 px-1 py-0.5 rounded ${className || ""}`}>{children}</code>;
}
