import Image from "next/image";
import Slider from "@/components/Slider";
import Product from "@/components/Product";
import Product2 from "@/components/Product2";

export default function Home() {
  return (
    <div>
      <Slider />
      <Product />
      <Product2/>
    </div>
  );
}
