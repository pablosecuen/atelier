"use client";

import { ProductOption, ProductVariant } from "@/app/types/general";
import clsx from "clsx";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createUrl } from "../lib/utils";

type Combination = {
  id: string;
  availableForSale: boolean;
  [key: string]: string | boolean; // ie. { color: 'Red', size: 'Large', ... }
};

export function VariantSelector({
  options,
  variants,
}: {
  options: ProductOption[];
  variants: ProductVariant[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hasNoOptionsOrJustOneOption =
    !options.length || (options.length === 1 && options[0]?.values.length === 1);

  if (hasNoOptionsOrJustOneOption) {
    return null;
  }

  const combinations: Combination[] = variants.map((variant) => ({
    id: variant.id,
    availableForSale: variant.availableForSale,
    ...variant.selectedOptions.reduce(
      (accumulator: any, option: any) => ({
        ...accumulator,
        [option.title?.toLowerCase()]: option.value,
      }),
      {}
    ),
  }));

  return options.map((option) => (
    <dl className="mb-8 border-t-2 pt-4" key={option.id}>
      <dt className="mb-4 text-sm uppercase tracking-wide text-gray-500/40 font-semibold">
        {option.title}
      </dt>
      <dd className="flex flex-wrap gap-3">
        {option.values.map((value: any) => {
          const optionNameLowerCase = option.title.toLowerCase();
          const isColorOption = optionNameLowerCase === "color";

          // Base option params on current params so we can preserve any other param state in the url.
          const optionSearchParams = new URLSearchParams(searchParams.toString());

          // Update the option params using the current option to reflect how the url *would* change,
          // if the option was clicked.
          optionSearchParams.set(optionNameLowerCase, value);
          const optionUrl = createUrl(pathname, optionSearchParams);

          // In order to determine if an option is available for sale, we need to:
          //
          // 1. Filter out all other param state
          // 2. Filter out invalid options
          // 3. Check if the option combination is available for sale
          //
          // This is the "magic" that will cross check possible variant combinations and preemptively
          // disable combinations that are not available. For example, if the color gray is only available in size medium,
          // then all other sizes should be disabled.
          const filtered = Array.from(optionSearchParams.entries()).filter(([key, value]) =>
            options.find(
              (option) => option.title.toLowerCase() === key && option.values.includes(value)
            )
          );
          const isAvailableForSale = combinations.find((combination) =>
            filtered.every(
              ([key, value]) => combination[key] === value && combination.availableForSale
            )
          );

          // The option is active if it's in the url params.
          const isActive = searchParams.get(optionNameLowerCase) === value;
          // Obtener el color representado por el valor
          let colorSquare = null;
          if (optionNameLowerCase === "color") {
            colorSquare = (
              <span
                className="w-12 h-12 inline-block "
                style={{ backgroundColor: value }}
                title={value}
              ></span>
            );
          }
          return (
            <div key={value} className="flex ">
              <div className="w-full h-full flex flex-col justify-center items-center">
                {colorSquare}
                <button
                  aria-disabled={!isAvailableForSale}
                  disabled={!isAvailableForSale}
                  onClick={() => {
                    router.replace(optionUrl, { scroll: false });
                  }}
                  title={`${option.title} ${value}${!isAvailableForSale ? " (Out of Stock)" : ""}`}
                  className={clsx(
                    "flex min-w-[48px] items-center justify-center rounded-full  text-primario bg-white px-3 mt-2 pt-1 pb-1 text-sm border-primario",
                    {
                      "color-button rounded-none border-none outline-none text-gray-400 opacity-40 hover:ring-transparent":
                        isColorOption,
                      "size-button": !isColorOption,
                      "cursor-default ring-2 ring-primario": isActive,
                      "ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-primario":
                        !isActive && isAvailableForSale,
                      "relative z-10 cursor-not-allowed overflow-hidden bg-neutral-100 text-neutral-500 ring-1 ring-neutral-300 before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform  dark:text-neutral-400 before:dark:bg-neutral-400":
                        !isAvailableForSale,
                    }
                  )}
                >
                  {value}
                </button>
              </div>
            </div>
          );
        })}
      </dd>
    </dl>
  ));
}
