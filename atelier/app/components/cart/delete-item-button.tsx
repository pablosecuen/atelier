import { XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useTransition } from "react";

import { CartItem } from "@/app/types/general";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/app/helpers/useCartHook";
import { removeFromCart } from "@/app/redux/slices/cartSlice";
import LoadingDots from "../loading-dots";
import { Toaster, toast } from "sonner";

export default function DeleteItemButton({ item }: { item: CartItem }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleDeleteClick = async () => {
    startTransition(async () => {
      try {
        dispatch(removeFromCart(item.id));
        router.refresh();
        toast.success("Producto eliminado del carrito");
      } catch (error) {
        console.error("Error al eliminar el producto al carrito:", error);
        toast.error("Error al eliminar el producto al carrito");
      }
    });
  };

  return (
    <>
      <Toaster richColors position="top-center" />
      <button
        aria-label="Remove cart item"
        onClick={handleDeleteClick}
        disabled={isPending}
        className={clsx(
          "ease flex h-[17px] w-[17px] items-center justify-center rounded-full bg-neutral-500 transition-all duration-200",
          {
            "cursor-not-allowed px-0": isPending,
          }
        )}
      >
        {isPending ? (
          <LoadingDots className="bg-white" />
        ) : (
          <XMarkIcon className="hover:text-accent-3 mx-[1px] h-4 w-4 text-white dark:text-black" />
        )}
      </button>
    </>
  );
}
