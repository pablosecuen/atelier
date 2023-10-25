"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import colors1 from "@/public/assets/colors1.webp";
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
    <div className="relative md:px-16">
      <button
        onClick={scrollLeft}
        className="scroll-button left hidden md:block left-4 text-black text-3xl z-10 absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-transparent"
      >
        {"<"}
      </button>
      <button
        onClick={scrollRight}
        className="scroll-button right hidden md:block right-4  text-black text-3xl z-10 top-1/2 absolute -translate-y-1/2 w-8 h-8 rounded-full  bg-transparent"
      >
        {">"}
      </button>
      <div
        className="custom-scrollbar relative  flex gap-8 md:px-20 overflow-x-auto md:overflow-x-hidden whitespace-no-wrap md:max-w-screen w-full mt-4 scroll-smooth"
        ref={containerRef}
      >
        {products.map((product) => (
          <Link
            className=" block aspect-square h-full w-full product-item"
            href={`/product/${product.handle}`}
            key={product.id}
          >
            <div className="rounded-md min-w-[280px] px-2 md:px-0 md:min-w-[400px] pb-6 ">
              <Image
                src={colors1}
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
