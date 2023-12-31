import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import Link from "next/link";
import { products } from "@/app/api/fakedb";
import { Gallery } from "@/app/components/product/gallery";
import { ProductDescription } from "@/app/components/product/product-description";
import { GridTileImage } from "@/app/components/grid/tile";
export const runtime = "edge";

export async function generateMetadata({
  params,
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = products?.find((p) => p.handle === params.handle);

  if (!product) return notFound();

  const { url, width, height, alt } = product.featuredImage || {};
  const indexable = !product.category;

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable,
      },
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt,
            },
          ],
        }
      : null,
  };
}

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = products.find((p) => p.handle === params.handle);

  if (!product) return notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.images[0],
    offers: {
      "@type": "AggregateOffer",
      availability: "true" ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      priceCurrency: "$",
      price: product.variants[0].price,
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
      <div className="mx-auto max-w-screen-2xl px-4 ">
        <div className="pt-12">
          <div className="flex flex-col rounded-lg  mt-24   bg-white p-8  dark:bg-transparent md:p-12 lg:flex-row lg:gap-8">
            <div className="h-full w-full basis-full lg:basis-4/6 ">
              <Gallery
                images={product.images.map((image: any) => ({
                  src: image.url,
                  altText: image.altText,
                }))}
              />
            </div>

            <div className="basis-full lg:basis-2/6">
              <ProductDescription
                product={product}
                images={product.images.map((image: any) => ({
                  src: image.url,
                  altText: image.altText,
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

async function RelatedProducts({ id }: { id: string }) {
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
                alt={product.title}
                label={{
                  title: product.title,
                  price: product.variants[0].price,
                  currencyCode: "$",
                }}
                src={product.images[0].src}
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
