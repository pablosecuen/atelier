"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import productimage from "@/public/assets/product.webp";
import { products } from "@/app/api/fakedb";
import "./scrollbar.css";
import Link from "next/link";

function BestSellers() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollAmount, setScrollAmount] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      // Calcular el ancho de un elemento en el contenedor
      const firstItem = containerRef.current.querySelector(".product-item");
      if (firstItem) {
        setScrollAmount(firstItem.clientWidth);
      }
    }
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= scrollAmount;
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="relative  text-black mt-16">
      <h2 className="font-bold text-2xl mt-4 md:text-4xl md:px-16 pl-2 md:mt-20  ">POPULARES</h2>
      <span className="text-sm md:px-16 pl-2  md:text-lg">Nuestros productos mas vendidos</span>

      <div className="flex justify-between items-center ">
        <button
          onClick={scrollLeft}
          className="scroll-button px-8 left hidden md:block left-4 z-10 text-3xl  w-8 h-8 rounded-full bg-transparent"
        >
          {"<"}
        </button>
        <button
          onClick={scrollRight}
          className="scroll-button px-8 left hidden md:block left-4 z-10 text-3xl  w-8 h-8 rounded-full bg-transparent order-last"
        >
          {">"}
        </button>
        <div
          className="custom-scrollbar relative h-full flex gap-4  overflow-x-auto md:overflow-x-hidden whitespace-no-wrap md:max-w-screen w-full mt-4 scroll-smooth"
          ref={containerRef}
        >
          {products.map((product: any) => (
            <Link
              className=" block aspect-square h-full w-full product-item"
              href={`/product/${product.handle}`}
              key={product.id}
            >
              <div className="rounded-md min-w-[280px] md:min-w-[450px] lg:min-w-[600px] px-2 md:px-0  pb-6 ">
                <Image
                  src={productimage}
                  alt={product.title}
                  className="w-full h-auto mb-1"
                  priority={true}
                />
                <span className="text-md mt-8 font-semibold text-black">{product.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestSellers;
