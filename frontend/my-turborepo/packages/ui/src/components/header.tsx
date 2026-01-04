export function Header() {
  return (
    <header className="w-full border-b px-6 py-4">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <h1 className="text-xl font-bold">Futari Store</h1>

        <nav className="flex gap-6 text-sm">
          <a href="/" className="hover:underline">Home</a>
          <a href="/products" className="hover:underline">Products</a>
          <a href="/cart" className="hover:underline">Cart</a>
        </nav>
      </div>
    </header>
  );
}
