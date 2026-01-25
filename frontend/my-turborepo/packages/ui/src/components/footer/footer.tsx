import './footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        © {new Date().getFullYear()} Futari. All rights reserved.
      </div>
    </footer>
  );
}
