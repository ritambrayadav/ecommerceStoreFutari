import dynamic from "next/dynamic";

const ProductMfe = dynamic(
  () => import("productMfe/ProductGrid"),
  { ssr: false }
);

export default function HomePage() {
  return (
    <section className="px-8 py-16">
      <h1 className="font-serif text-4xl mb-8">
        Timeless Gold, Modern Soul
      </h1>

      <ProductMfe />
    </section>
  );
}
