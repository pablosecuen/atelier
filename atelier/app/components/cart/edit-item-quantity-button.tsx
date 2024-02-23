import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { Product } from "@/app/types/general";
import { addQuantity, subtractQuantity } from "@/app/redux/slices/cartSlice";

export default function EditItemQuantityButton({
  item,
  type,
}: {
  item: Product;
  type: "plus" | "minus";
}) {
  const dispatch = useDispatch();
 

  const handleQuantityChange = () => {
    if (type === "plus") {
      // Si el tipo es "plus", llamamos a la acción addQuantity con el id del producto
      dispatch(addQuantity(item.id || ""));
    } else {
      // Si el tipo es "minus", llamamos a la acción subtractQuantity con el id del producto
      dispatch(subtractQuantity(item.id || ""));
    }
  };

  return (
    <button
      aria-label={type === "plus" ? "Increase item quantity" : "Reduce item quantity"}
      onClick={handleQuantityChange}
      disabled={type === "minus" && item.quantity === 1}
      className={clsx(
        "ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80",
        {
          "ml-auto": type === "minus",
        }
      )}
    >
      {type === "plus" ? (
        <PlusIcon className="h-4 w-4 dark:text-neutral-500" />
      ) : (
        <MinusIcon className="h-4 w-4 dark:text-neutral-500" />
      )}
    </button>
  );
}
