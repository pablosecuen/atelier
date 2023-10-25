import Link from "next/link";

import { Product } from "@/app/types/general";
import Grid from "../components/grid/Grid";
import { GridTileImage } from "../components/grid/tile";
import productimg from "@/public/assets/product.webp";

export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product: Product) => (
        <Grid.Item
          key={product.id}
          className="animate-fadeIn h-full font-atlas-grotesk-medium w-full flex items-center justify-center "
        >
          <Link className="relative inline-block h-full w-full" href={`/product/${product.handle}`}>
            <GridTileImage
              alt={product.title}
              label={{
                title: product.title,
                price: product.variants[0].price,
                currencyCode: "$",
              }}
              src={productimg}
              width={product.featuredImage.width}
              height={product.featuredImage.height}
              fill
              sizes="(min-width: 868px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
