import "./nav.css";
import { ReactNode } from "react";
import { Icons } from "../../icons";

export function Nav({
  items,
}: {
  items?: { href: string; label: string | ReactNode }[];
}) {
  const links = items ?? [
    { href: "/", label: "Categories" },
    { href: "/wish-list", label: <Icons.Wishlist /> },
    { href: "/cart", label: <Icons.Cart /> },
  ];

  return (
    <nav className="nav">
      {links.map((l) => (
        <a key={l.href} href={l.href} className="navLink">
          {l.label}
        </a>
      ))}
    </nav>
  );
}
