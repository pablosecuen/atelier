"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { GridTileImage } from "../grid/tile";
import { createUrl } from "../lib/utils";
import productiamge from "@/public/assets/product.webp";
export function Gallery({ images }: { images: { src: string; altText: string }[] }) {
  const searchParams = useSearchParams();
  const imageSearchParam = searchParams.get("image");
  const imageIndex = imageSearchParam ? parseInt(imageSearchParam) : 0;

  return (
    <>
      <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
        {images[imageIndex] && (
          <Image
            className="h-full w-full object-contain"
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            alt="alt text"
            src={productiamge}
            priority={true}
          />
        )}
      </div>
    </>
  );
}
