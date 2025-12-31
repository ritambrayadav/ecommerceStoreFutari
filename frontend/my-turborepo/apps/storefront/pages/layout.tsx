import { ReactNode } from "react";
// import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        <h1>Header</h1>
        <main className="min-h-screen">{children}</main>
        {/* <Footer /> */}
        <h2>Footer</h2>
      </body>
    </html>
  );
}
