"use client";

import Image from "next/image";

import { useSearchParams } from "next/navigation";

export function Gallery({ images }: { images: { src: string; altText: string }[] }) {
  const searchParams = useSearchParams();
  const imageSearchParam = searchParams.get("image");
  const imageIndex = imageSearchParam ? parseInt(imageSearchParam) : 0;

  return (
    <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
      {images[imageIndex] && (
        <Image
          className="h-full w-full object-contain"
          fill
          sizes="(min-width: 1024px) 66vw, 100vw"
          alt={images[imageIndex].altText}
          src={images[imageIndex].src}
          priority={true}
        />
      )}
    </div>
  );
}
