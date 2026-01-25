import "./input.css";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export function Input({ className = "", ...props }: InputProps) {
  return <input className={`ui-input ${className}`} {...props} />;
}
