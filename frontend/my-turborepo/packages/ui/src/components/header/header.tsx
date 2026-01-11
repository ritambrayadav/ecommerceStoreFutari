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
            <Button className="btnGhost" appName="Futari Store">Sign in</Button>
            <Button className="btnPrimary" appName="Futari Store">Log in</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
