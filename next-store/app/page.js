import Image from "next/image";
import Hero from "./_components/hero";
import ProductSction from "./_components/productSction";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductSction />
    </div>
  );
}
