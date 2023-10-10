import Image from "next/image";
import React from "react";

import colors1 from "@/public/assets/colors1.webp";

import { products } from "@/app/api/fakedb";
import Link from "next/link";

function ColorSection() {
  return (
    <>
      {" "}
      <div className="flex gap-4 px-8 overflow-x-auto whitespace-no-wrap w-full mt-4">
        {products.map((color: any) => (
          <Link
            className="relative block aspect-square h-full w-full"
            href={`/product/${color.handle}`}
            key={color.id}
          >
            <div key={color.id} className="rounded-md min-w-[280px] md:min-w-[500px] pb-6">
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
    </>
  );
}

export default ColorSection;
