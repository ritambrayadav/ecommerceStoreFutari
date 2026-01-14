import "./header.css";
import { Logo } from "../logo";
import { Nav } from "../nav";
import { Button } from "../button";

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="left">
          <Logo />
        </div>
        <div className="right">
          <Nav />
          <div className="auth">
            <Button className="btnGhost" onClick={() => alert("Sign In clicked")}>Sign In</Button>
            <Button className="btnPrimary" onClick={() => alert("Login Now clicked")}>Login Now</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
