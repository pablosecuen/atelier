import { addToCart } from "@/app/redux/slices/cartSlice";
import { Product } from "@/app/types/general";
import { PlusIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import LoadingDots from "../loading-dots";
import { useDispatch } from "react-redux";
import { Toaster, toast } from "sonner";

export function AddToCart({
  availableForSale,
  product,
  quantity,
}: {
  availableForSale: boolean;
  product: Product;
  quantity: number;
}) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const title = !availableForSale ? "Out of stock" : undefined;

  return (
    <>
      <Toaster richColors position="top-center" />
      <button
        aria-label="Add item to cart"
        disabled={isPending || !availableForSale}
        title={title}
        onClick={() => {
          // Safeguard in case someone messes with `disabled` in devtools.
          if (!availableForSale) return;

          startTransition(() => {
            dispatch(
              addToCart({
                ...product,
                quantity: quantity,
              })
            );
            toast.success("Producto agregado al carrito");
            router.refresh();
          });
        }}
        className={clsx(
          "relative flex w-full items-center justify-center bg-white border-2 border-primario p-2 font-black text-stroke text-stroke-2 text-primario tracking-widest uppercase hover:opacity-90",
          {
            "cursor-not-allowed opacity-60 hover:opacity-60": !availableForSale,
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
