"use client";
import Image from "next/image";
import React, { useRef } from "react";
import "./scrollbar.css";
import colors1 from "@/public/assets/colors1.webp";
import { products } from "@/app/api/fakedb";
import Link from "next/link";

function ColorSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      const scrollAmount = getComputedStyle(document.documentElement).getPropertyValue(
        "--scroll-amount"
      );
      containerRef.current.scrollLeft -= parseFloat(scrollAmount);
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const scrollAmount = getComputedStyle(document.documentElement).getPropertyValue(
        "--scroll-amount"
      );
      containerRef.current.scrollLeft += parseFloat(scrollAmount);
    }
  };
  return (
    <div className="relative">
      <button
        onClick={scrollLeft}
        className="scroll-button left left-4 z-10 hidden md:block absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-500"
      >
        {"<"}
      </button>
      <button
        onClick={scrollRight}
        className="scroll-button right right-4 hidden md:block  z-10 top-1/2 absolute -translate-y-1/2 w-8 h-8 rounded-full  bg-blue-500"
      >
        {">"}
      </button>
      <div
        ref={containerRef}
        className="custom-scrollbar scroll-smooth flex gap-4 md:px-8 overflow-x-auto md:overflow-x-hidden whitespace-no-wrap w-full mt-4"
      >
        {products.map((color: any) => (
          <Link
            className="relative block aspect-square h-full w-full"
            href={`/product/${color.handle}`}
            key={color.id}
          >
            <div
              key={color.id}
              className="rounded-md px-2 md:px-0 min-w-[280px] md:min-w-[500px] pb-6"
            >
              <Image
                src={colors1}
                alt={color.name}
                className="w-full h-auto mb-1"
                priority={true}
              />
              <span className="text-md mt-8 font-semibold">{color.title}</span>
            </div>{" "}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ColorSection;
