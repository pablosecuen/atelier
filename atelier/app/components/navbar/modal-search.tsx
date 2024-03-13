/* eslint-disable @next/next/no-img-element */

import { Product } from "@/app/types/general";
import Link from "next/link";
import productimge from "@/public/assets/product.webp";
import Image from "next/image";

function ModalSearch({ products, closeModal }: { products: Product[]; closeModal: () => void }) {
  return (
    <div className="absolute h-auto right-0 w-full min-w-[350px] max-w-[550px] overflow-hidden  text-secundario">
      {products?.slice(0, 5)?.map((product: Product) => (
        <Link
          key={product?.id}
          href={`/product/${product.StyleName}`}
          className="relative h-full w-full  "
        >
          <div
            onClick={closeModal}
            className="h-24  cursor-pointer border-2 overflow-hidden my-2 border-terciario text-black  bg-white/80 filter backdrop-filter backdrop-blur-3xl pr-2 items-center rounded-md  flex justify-between"
          >
            <Image
              src={productimge}
              alt={product?.StyleName}
              className=" h-full w-auto border border-primario rounded-r-xl"
            />
            <h3 className="  tracking-wide !font-cabinet-grotesk-regular text-md  font-atlas-grotesk-medium underline underline-offset-4 mr-2 capitalize">
              {product?.Desc1}
            </h3>
            <span className=" border border-black rounded-sm text-md px-2">
              ${product?.RetailPrice}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ModalSearch;
