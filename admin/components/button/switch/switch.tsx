import { useEffect, useState } from "react";
import useGlobalStore from "@/store/zustand";

interface SwitchProps {
  productId: string;
  isAvailable: boolean;
}

export function Switch({ productId, isAvailable }: SwitchProps) {
  const { toggleAvailableForSale } = useGlobalStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [isAvailable]);

  const handleToggleChange = () => {
    // Llama a la función toggleAvailableForSale del global store con el productId
    toggleAvailableForSale(productId, isAvailable);
  };

  if (!mounted) return null;

  return (
    <label className="flex items-center cursor-pointer ">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        checked={isAvailable}
        onChange={handleToggleChange}
      />
      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    </label>
  );
}
