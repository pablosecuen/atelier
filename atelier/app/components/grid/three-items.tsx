"use client";

import Link from "next/link";
import { GridTileImage } from "./tile";
import { useEffect, useState } from "react";
import { Product } from "@/app/types/general";

interface ThreeItemsGrid {
  products: Product[];
  priority: boolean;
}

function ThreeItemGridItem({
  item,
  size,
  priority,
}: {
  item: Product;
  size: "full" | "half";
  priority?: boolean;
}) {
  return (
    <div
      className={size === "full" ? "md:col-span-4 md:row-span-2" : "md:col-span-2 md:row-span-1"}
    >
      <Link className="relative block aspect-square h-full w-full" href={`/product/${item.handle}`}>
        <GridTileImage
          src={item.images[0]}
          fill
          sizes={
            size === "full" ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"
          }
          priority={priority}
          alt={item.title}
          label={{
            position: size === "full" ? "center" : "bottom",
            title: item.title as string,
            price: item.price,
          }}
        />
      </Link>
    </div>
  );
}

export function ThreeItemGrid({ products, priority }: ThreeItemsGrid) {
  const [randomProducts, setRandomProducts] = useState<Product[]>([]);

  useEffect(() => {
    setRandomProducts(getRandomProducts(products, 3));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getRandomProducts(products: Product[], count: number) {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  if (!randomProducts || randomProducts.length < 3) {
    return null;
  }

  if (!randomProducts[0] || !randomProducts[1] || !randomProducts[2]) return null;

  const [firstProduct, secondProduct, thirdProduct] = randomProducts;

  return (
    <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2">
      <ThreeItemGridItem size="full" item={firstProduct} priority={true} />
      <ThreeItemGridItem size="half" item={secondProduct} priority={true} />
      <ThreeItemGridItem size="half" item={thirdProduct} />
    </section>
  );
}
