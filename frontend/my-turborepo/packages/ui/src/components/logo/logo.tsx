import "./logo.css";


type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <div className={`logo ${className ?? ""}`}>
      <img
        src="/images/logo.png"
        alt="Brand logo"
        className="logo-first"
      />
      <img
        src="/images/Futari Jewells.png"
        alt="Futari Jewells"
        className="logo-text"
      />
    </div>
  );
}
