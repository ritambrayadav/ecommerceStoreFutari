export function Footer() {
  return (
    <footer className="w-full border-t px-6 py-4 mt-20">
      <div className="mx-auto max-w-7xl text-sm text-gray-500">
        © {new Date().getFullYear()} Futari. All rights reserved.
      </div>
    </footer>
  );
}
