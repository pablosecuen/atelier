"use client";
import { Product } from "@/app/types/general";
import { AddToCart } from "../cart/add-to-cart";
import Price from "../price";
import Prose from "./prose";
import { VariantSelector } from "./variant-selector";
import { useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

export function ProductDescription({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700 text-black">
        <h1 className="mb-2 text-5xl font-medium text-black">{product.title}</h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <Price price={product.variants[0].price} currencyCode="$" />
        </div>
      </div>
      <VariantSelector options={product.options} variants={product.variants} />

      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight text-black/[60%]"
          html={product.descriptionHtml}
        />
      ) : null}
      <div className="mb-4 flex items-center w-full justify-center text-black">
        <MinusIcon
          onClick={decreaseQuantity}
          className=" border-black border rounded-l-3xl px-4  py-1 h-8 cursor-pointer"
        />
        <span className=" border-t pt-1 px-2 text-lg h-8 border-b border-black w-10 flex justify-center items-center">
          {quantity}
        </span>
        <PlusIcon
          onClick={increaseQuantity}
          className=" border border-black rounded-r-3xl px-4 py-1 h-8 cursor-pointer"
        />
      </div>
      <AddToCart
        product={product}
        variants={product.variants}
        availableForSale={product.availableForSale}
        quantity={quantity}
      />
    </>
  );
}
