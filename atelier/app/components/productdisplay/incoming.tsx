import Image from "next/image";
import React from "react";
import productimage from "@/public/assets/product.webp";
import { products } from "@/app/api/fakedb";
import Link from "next/link";

function Incoming() {
  const lastThreeProducts = products.slice(-3);
  return (
    <>
      <h2 className="font-bold text-2xl mt-4 md:text-4xl px-8 md:mt-20">INGRESOS</h2>
      <span className="text-sm px-8 md:text-lg">Nuestros ultimos ingresos</span>
      <div className="flex flex-col px-8 md:flex-row gap-4 justify-start items-center overflow-x-hidden  w-screen mt-4">
        {lastThreeProducts.map((product) => (
          <div key={product.id} className="!min-w-[50%]  ">
            <Link
              className="relative block aspect-square h-full w-full "
              href={`/product/${product.handle}`}
            >
              <div className="rounded-md min-w-[280px] md:w-full flex flex-col justify-center items-center ">
                <Image
                  src={productimage}
                  alt={product.title}
                  className="min-w-[280px] h-auto mb-4"
                  priority={true}
                />
                <span className="text-md mt-8 font-semibold text-black">{product.title}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Incoming;
