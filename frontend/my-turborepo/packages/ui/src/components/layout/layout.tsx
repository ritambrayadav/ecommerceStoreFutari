"use client";
import "./layout.css";  
import { Header } from "../header";
import { Footer } from "../footer";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-">{children}</main>
      <Footer />
    </div>
  );
}
