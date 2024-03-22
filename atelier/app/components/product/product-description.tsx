"use client";
import { Product } from "@/app/types/general";
import { AddToCart } from "../cart/add-to-cart";
import Price from "../price";
import Prose from "./prose";
import { VariantSelector } from "./variant-selector";
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { createUrl } from "../lib/utils";
import { GridTileImage } from "../grid/tile";
import productiamge from "@/public/assets/product.webp";
export function ProductDescription({
  products,
  images,
}: {
  products: Product[];
  images: { src: string; altText: string }[];
}) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const imageSearchParam = searchParams.get("image");
  const imageIndex = imageSearchParam ? parseInt(imageSearchParam) : 0;

  const nextSearchParams = new URLSearchParams(searchParams.toString());
  const nextImageIndex = imageIndex + 1 < images?.length ? imageIndex + 1 : 0;
  nextSearchParams.set("image", nextImageIndex.toString());

  const previousSearchParams = new URLSearchParams(searchParams.toString());
  const previousImageIndex = imageIndex === 0 ? images?.length - 1 : imageIndex - 1;
  previousSearchParams.set("image", previousImageIndex.toString());

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
      <div className=" flex flex-col md:ap-8 pb-6  text-black">
        <h1 className="mb-2 text-3xl font-medium text-black uppercase tracking-tighter ">
          {products[0]?.Desc1}
        </h1>
        <div className="mr-auto w-auto rounded-full bg-white p-2 text-xl font-inter-bold text-black ">
          <Price price={products[0]?.RetailPrice} currencyCode="$" />
        </div>
        <hr className="md:my-4 hidden md:block"></hr>
        <p className="text-black">{products[0]?.StyleNote}</p>
        <div className=" w-full bg-white p-2  font-inter-bold text-black mx-auto ">
          <span className="font-bold">Talle </span>
          <div className="font-bold flex">
            {" "}
            {products.map((product, index) => (
              <span
                key={index}
                className={`border text-2xl px-2 cursor-pointer ${
                  selectedProduct?.SizeCode === product.SizeCode ? "bg-gray-200" : ""
                }`}
                onClick={() => setSelectedProduct(product)}
              >
                {product.SizeCode}
              </span>
            ))}
          </div>
        </div>
      </div>

      {products[0]?.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight text-gray-400/[60%]"
          html={products[0]?.descriptionHtml}
        />
      ) : null}
      {images?.length > 1 ? (
        <ul className="my-12 flex items-center justify-center gap-2 overflow-auto py-1 lg:mb-0">
          {images?.map((image, index) => {
            const isActive = index === imageIndex;
            const imageSearchParams = new URLSearchParams(searchParams.toString());

            imageSearchParams.set("image", index.toString());

            return (
              <li key={index} className="h-20 w-20">
                <Link
                  aria-label="Enlarge product image"
                  href={createUrl(pathname, imageSearchParams)}
                  scroll={false}
                  className="h-full w-full"
                >
                  <GridTileImage
                    alt={image.altText}
                    src={productiamge}
                    width={80}
                    height={80}
                    active={isActive}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
      <>
        <hr className="md:my-4 hidden md:block"></hr>
        <div className="mb-4 mt-4 flex items-center w-full justify-center text-black  gap-2">
          <div className="relative flex w-32 items-center justify-center  bg-white border-2 border-black/40 p-1 font-black text-stroke text-stroke-2 text-black  uppercase hover:opacity-90">
            {" "}
            <MinusIcon onClick={decreaseQuantity} className="px-2 cursor-pointer" />
            <span className="  w-20 text-lg flex justify-center items-center">{quantity}</span>
            <PlusIcon onClick={increaseQuantity} className=" px-2 cursor-pointer" />
          </div>

          <AddToCart
            product={selectedProduct}
            availableForSale={selectedProduct?.availableForSale}
            quantity={quantity}
          />
        </div>
      </>
    </>
  );
}
