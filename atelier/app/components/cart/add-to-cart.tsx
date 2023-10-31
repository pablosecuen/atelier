"use client";

import { addToCart } from "@/app/redux/slices/cartSlice";
import { Product, ProductVariant } from "@/app/types/general";
import { PlusIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import LoadingDots from "../loading-dots";
import { useDispatch } from "react-redux";
import { Toaster, toast } from "sonner";

export function AddToCart({
  variants,
  availableForSale,
  product,
  quantity,
}: {
  variants: ProductVariant[];
  availableForSale: boolean;
  product: Product;
  quantity: number;
}) {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === searchParams.get(option.title?.toLowerCase())
    )
  );

  const selectedVariantId = variant?.id || defaultVariantId;
  const title = !availableForSale
    ? "Out of stock"
    : !selectedVariantId
    ? "Please select options"
    : undefined;

  //encontramos la variante completa comparando el id recibido, luego en el dispatch, reemplazamos las props para dejar solamente la encontrada por la comparacion y despachamos el producto al carrito
  const selectedVariant = variants.find((variant) => variant.id === selectedVariantId);

  return (
    <>
      <Toaster richColors position="top-center" />
      <button
        aria-label="Add item to cart"
        disabled={isPending || !availableForSale || !selectedVariantId}
        title={title}
        onClick={() => {
          // Safeguard in case someone messes with `disabled` in devtools.
          if (!availableForSale || !selectedVariantId) return;

          startTransition(() => {
            dispatch(
              addToCart({
                ...product,
                variants: [
                  {
                    ...selectedVariant,
                    quantity: quantity,
                  },
                ],
              })
            );
            toast.success("Producto agregado al carrito");
            router.refresh();
          });
        }}
        className={clsx(
          "relative flex w-full items-center justify-center  bg-white border-2 border-primario p-4 font-black text-stroke text-stroke-2 text-primario tracking-widest uppercase hover:opacity-90",
          {
            "cursor-not-allowed opacity-60 hover:opacity-60":
              !availableForSale || !selectedVariantId,
            "cursor-not-allowed": isPending,
          }
        )}
      >
        <div className="absolute left-0 ml-4">
          {!isPending ? <PlusIcon className="h-5" /> : <LoadingDots className="mb-3 bg-white" />}
        </div>
        <span>{availableForSale ? "Add To Cart" : "Out Of Stock"}</span>
      </button>
    </>
  );
}
