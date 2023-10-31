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
        <div className="col-span-2 hidden h-[400px] w-full flex-none py-4 lg:block max-w-screen">
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
      <div className="w-full  flex flex-col md:pt-24 pt-10 md:pb-12 pb-8 items-center text-black justify-center max-w-screen">
        <h3 className="md:mt-12 opacity-70 text-sm uppercase tracking-widest">Categorias</h3>
        <ul className="flex md:gap-4 mx-4 flex-col md:flex-row">
          <li>
            <button
              onClick={() => setSelectedCategory("")}
              className={clsx(
                "flex min-w-[190px] my-2 items-center justify-center  border px-2 pt-2 pb-1 text-sm tracking-wider md:px-8 l-800  text-gray-400/60 uppercase",
                "ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-primario focus:bg-primario focus:text-white "
              )}
            >
              Todos
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedCategory("Camisas")}
              className={clsx(
                "flex min-w-[190px] my-2 items-center justify-center  border px-2 pt-2 pb-1 text-sm tracking-wider md:px-8 l-800  text-gray-400/60 uppercase",
                "ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-primario focus:bg-primario focus:text-white"
              )}
            >
              Camisas
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedCategory("Accesorios")}
              className={clsx(
                "flex min-w-[190px] my-2 items-center justify-center  border px-2 pt-2 pb-1 text-sm tracking-wider md:px-8 l-800 text-gray-400/60 uppercase",
                "ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-primario focus:bg-primario focus:text-white"
              )}
            >
              Accesorios
            </button>
          </li>
        </ul>
      </div>
    </Suspense>
  );
}
