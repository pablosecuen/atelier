import Image from "next/image";
import React from "react";
import productimage from "@/public/assets/product.webp";
import { products } from "@/app/api/fakedb";
import "./scrollbar.css";
import Link from "next/link";
function BestSellers() {
  return (
    <>
      <h2 className="font-bold text-2xl mt-4 md:text-4xl px-8 md:mt-20">POPULARES</h2>
      <span className="text-sm px-8 md:text-lg">Nuestros productos mas vendidos</span>
      <div className="custom-scrollbar flex gap-4 px-8 overflow-x-auto whitespace-no-wrap md:max-w-screen w-full mt-4 ">
        {products.map((product) => (
          <Link
            className="relative block aspect-square h-full w-full"
            href={`/product/${product.handle}`}
            key={product.id}
          >
            <div className="rounded-md min-w-[280px] md:min-w-[500px] pb-6 ">
              <Image
                src={productimage}
                alt={product.title}
                className="w-full h-auto mb-1"
                priority={true}
              />
              <span className="text-md mt-8 font-semibold">{product.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default BestSellers;
