import React from "react";

export function Nav({ items }: { items?: { href: string; label: string }[] }) {
  const links = items ?? [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/cart", label: "Cart" },
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
