"use client";
import clsx from "clsx";
import { Suspense, useEffect, useState } from "react";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "@/redux/actions/productActions";

const skeleton = "mb-3 h-4 w-5/6 animate-pulse rounded";
const activeAndTitles = "bg-neutral-800 dark:bg-neutral-300";
const items = "bg-neutral-400 dark:bg-neutral-700";

export default function Collections() {
  const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch();
  const { products } = useSelector((state: RootState) => state.products);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  useEffect(() => {
    const filters: any = {};
    if (selectedCategory) {
      filters.category = selectedCategory;
    }
    const filteredProductsList = products.filter((product) => {
      if (selectedCategory && product.category !== selectedCategory) {
        return false;
      }
      return true;
    });
    dispatch(listProducts(filters));
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
      <div className="order-first w-full flex flex-col items-start mr-12 md:max-w-[185px]">
        <h3 className="mt-12 mb-4 opacity-70 text-sm">Categorias</h3>
        <ul>
          <li>
            <button
              onClick={() => setSelectedCategory("Colchon")}
              className={clsx(
                "flex min-w-[48px] my-2 mb-4 items-center justify-center rounded-full border px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900",
                "ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 focus:bg-blue-600"
              )}
            >
              Colchon
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedCategory("Almohadas")}
              className={clsx(
                "flex min-w-[48px] my-2 items-center justify-center rounded-full border px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900",
                "ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 focus:bg-blue-600"
              )}
            >
              Almohadas
            </button>
          </li>
        </ul>
      </div>
    </Suspense>
  );
}
