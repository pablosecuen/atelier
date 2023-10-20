"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import productimage from "@/public/assets/product.webp";
import { products } from "@/app/api/fakedb";
import "./scrollbar.css";
import Link from "next/link";
import { addToCart } from "@/app/redux/slices/cartSlice";

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
    <div className="relative md:px-16">
      <h2 className="font-bold text-2xl mt-4 md:text-4xl px-8 md:mt-20">POPULARES</h2>
      <span className="text-sm px-8 md:text-lg">Nuestros productos mas vendidos</span>
      <button
        onClick={scrollLeft}
        className="scroll-button left hidden md:block left-4 z-10 absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primario"
      >
        {"<"}
      </button>
      <button
        onClick={scrollRight}
        className="scroll-button right hidden md:block right-4  z-10 top-1/2 absolute -translate-y-1/2 w-8 h-8 rounded-full  bg-primario"
      >
        {">"}
      </button>
      <div
        className="custom-scrollbar relative flex gap-4 md:px-20 overflow-x-auto md:overflow-x-hidden whitespace-no-wrap md:max-w-screen w-full mt-4 scroll-smooth"
        ref={containerRef}
      >
        {products.map((product) => (
          <Link
            className=" block aspect-square h-full w-full product-item"
            href={`/product/${product.handle}`}
            key={product.id}
          >
            <div className="rounded-md min-w-[280px] px-2 md:px-0 md:min-w-[600px] pb-6 ">
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
  );
}

export default BestSellers;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
