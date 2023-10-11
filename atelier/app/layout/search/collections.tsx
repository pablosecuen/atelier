"use client";
import clsx from "clsx";
import { Suspense, useEffect, useState } from "react";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { listProducts } from "@/app/redux/actions/productActions";
import { Product } from "@/app/types/general";

const skeleton = "mb-3 h-4 w-5/6 animate-pulse rounded";
const activeAndTitles = "bg-neutral-800 dark:bg-neutral-300";
const items = "bg-neutral-400 dark:bg-neutral-700";

export default function Collections() {
  const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch();
  const { products } = useSelector((state: RootState) => state.products);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);

  useEffect(() => {
    const filters: any = {};
    if (selectedCategory) {
      filters.category = selectedCategory;
    }
    const filteredProductsList = products.filter((product: Product) => {
      if (selectedCategory && product.category !== selectedCategory) {
        return false;
      }
      return true;
    });
    dispatch(listProducts({ filters })); // Usar un objeto con los filtros
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, selectedCategory]);

  return (
    <Suspense
      fallback={
        <div className="col-span-2 hidden h-[400px] w-full flex-none py-4 lg:block">
          <div className={clsx(skeleton, activeAndTitles)} />
          <div className={clsx(skeleton, activeAndTitles)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
        </div>
      }
    >
      <div className="order-first  w-full flex flex-col items-center md:justify-center  md:mb-48  md:max-w-[185px]">
        <h3 className="mt-12 mb-4 opacity-70 text-sm">Categorias</h3>
        <ul>
          <li>
            <button
              onClick={() => setSelectedCategory("Camisas")}
              className={clsx(
                "flex min-w-[190px] my-2 mb-4 items-center justify-center rounded-full border px-2 py-1 text-sm md:text-xl md:px-8 dark:border-neutral-800 dark:bg-neutral-100",
                "ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 focus:bg-blue-600"
              )}
            >
              Camisas
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedCategory("Remeras")}
              className={clsx(
                "flex min-w-[190px] my-2 items-center justify-center rounded-full border px-2 py-1 text-sm md:text-xl md:px-8 l-800 dark:bg-neutral-100",
                "ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 focus:bg-blue-600"
              )}
            >
              Remeras
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedCategory("Polos")}
              className={clsx(
                "flex min-w-[190px] my-2 items-center justify-center rounded-full border px-2 py-1 text-sm md:text-xl md:px-8 l-800 dark:bg-neutral-100",
                "ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 focus:bg-blue-600"
              )}
            >
              Polos
            </button>
          </li>{" "}
          <li>
            <button
              onClick={() => setSelectedCategory("Sweaters")}
              className={clsx(
                "flex min-w-[190px] my-2 items-center justify-center rounded-full border px-2 py-1 text-sm md:text-xl md:px-8 l-800 dark:bg-neutral-100",
                "ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 focus:bg-blue-600"
              )}
            >
              Sweaters
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedCategory("Vestidos")}
              className={clsx(
                "flex min-w-[190px] my-2 items-center justify-center rounded-full border px-2 py-1 text-sm md:text-xl md:px-8 l-800 dark:bg-neutral-100",
                "ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 focus:bg-blue-600"
              )}
            >
              Vestidos
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedCategory("Jeans")}
              className={clsx(
                "flex min-w-[190px] my-2 items-center justify-center rounded-full border px-2 py-1 text-sm md:text-xl md:px-8 l-800 dark:bg-neutral-100",
                "ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 focus:bg-blue-600"
              )}
            >
              Jeans
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedCategory("Chaquetas")}
              className={clsx(
                "flex min-w-[190px] my-2 items-center justify-center rounded-full border px-2 py-1 text-sm md:text-xl md:px-8 l-800 dark:bg-neutral-100",
                "ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 focus:bg-blue-600"
              )}
            >
              Chaquetas
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedCategory("Pantalones")}
              className={clsx(
                "flex min-w-[190px] my-2 items-center justify-center rounded-full border px-2 py-1 text-sm md:text-xl md:px-8 l-800 dark:bg-neutral-100",
                "ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 focus:bg-blue-600"
              )}
            >
              Pantalones
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedCategory("Accesorios")}
              className={clsx(
                "flex min-w-[190px] my-2 items-center justify-center rounded-full border px-2 py-1 text-sm md:text-xl md:px-8 l-800 dark:bg-neutral-100",
                "ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 focus:bg-blue-600"
              )}
            >
              Accesorios
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedCategory("Pijamas")}
              className={clsx(
                "flex min-w-[190px] my-2 items-center justify-center rounded-full border px-2 py-1 text-sm md:text-xl md:px-8 l-800 dark:bg-neutral-100",
                "ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 focus:bg-blue-600"
              )}
            >
              Pijamas
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedCategory("Abrigos")}
              className={clsx(
                "flex min-w-[190px] my-2 items-center justify-center rounded-full border px-2 py-1 text-sm md:text-xl md:px-8 l-800 dark:bg-neutral-100",
                "ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 focus:bg-blue-600"
              )}
            >
              Abrigos
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedCategory("Sudaderas")}
              className={clsx(
                "flex min-w-[190px] my-2 items-center justify-center rounded-full border px-2 py-1 text-sm md:text-xl md:px-8 l-800 dark:bg-neutral-100",
                "ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 focus:bg-blue-600"
              )}
            >
              Sudaderas
            </button>
          </li>
        </ul>
      </div>
    </Suspense>
  );
}
