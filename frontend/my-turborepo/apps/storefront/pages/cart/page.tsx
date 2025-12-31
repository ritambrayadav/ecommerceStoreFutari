import dynamic from "next/dynamic";

const CartMfe = dynamic(() => import("productMfe/ProductPage"), {
  ssr: false,
});

export default function CartPage() {
  return <CartMfe />;
}
