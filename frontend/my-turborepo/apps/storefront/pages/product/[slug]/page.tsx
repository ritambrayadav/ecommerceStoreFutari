import dynamic from "next/dynamic";

const ProductPage = dynamic(
  () => import("productMfe/ProductPage"),
  { ssr: false }
);

export default function ProductDetail() {
  return <ProductPage />;
}
