"use client";
import { notFound } from "next/navigation";
import { Suspense, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import { listProducts } from "@/app/redux/actions/productActions";
import { Gallery } from "@/app/components/product/gallery";
import { ProductDescription } from "@/app/components/product/product-description";
import { GridTileImage } from "@/app/components/grid/tile";
import GenerateMetadata from "./generate-metadata";

export default function ProductPage({ params }: { params: { handle: string } }) {
  const dispatch: AppDispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.products);
  const decodedHandle = params.handle ? decodeURIComponent(params.handle as string) : "";

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const product = products?.find((p) => p.handle === decodedHandle);

  if (!product) return notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.Desc1,
    description: product.Desc2,
    image: product.imagesURL[0],
    offers: {
      "@type": "AggregateOffer",
      availability: product.availableForSale
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      priceCurrency: "$",
      price: product.RetailPrice,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      />
      <GenerateMetadata handle={product.handle} />
      <div className="mx-auto max-w-screen-2xl px-4 ">
        <div className="pt-12">
          <div className="flex flex-col rounded-lg  mt-24   bg-white p-8  dark:bg-transparent md:p-12 lg:flex-row lg:gap-8">
            <div className="h-full w-full basis-full lg:basis-4/6 ">
              <Gallery
                images={product.imagesURL.map((image: any) => ({
                  src: image,
                  altText: image.Desc1,
                }))}
              />
            </div>

            <div className="basis-full lg:basis-2/6">
              <ProductDescription
                product={product}
                images={product.imagesURL.map((image: any) => ({
                  src: image,
                  altText: image.Desc1,
                }))}
              />
            </div>
          </div>
          <Suspense>
            <RelatedProducts id={product.id} />
          </Suspense>
        </div>
      </div>
    </>
  );
}

function RelatedProducts({ id }: { id: string }) {
  const dispatch: AppDispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  const relatedProducts = products.slice(0, 4);

  if (!relatedProducts.length) return null;

  return (
    <div className="py-8 w-full border-t-2 border-gray-400/40 mt-10">
      <h2 className="mb-4 text-xl tracking-wider text-center text-gray-400/80">
        Productos relacionados
      </h2>
      <ul className="flex flex-col md:flex-row w-full gap-4 overflow-x-auto justify-evenly pt-1">
        {relatedProducts.map((product) => (
          <li
            key={product.handle}
            className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
          >
            <Link className="relative h-full w-full" href={`/product/${product.handle}`}>
              <GridTileImage
                alt={product.Desc1}
                label={{
                  title: product.Desc1,
                  price: product.RetailPrice,
                  currencyCode: "$",
                }}
                src={product.imagesURL[0]}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
