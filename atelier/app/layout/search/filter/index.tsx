"use client";
import { useEffect, useState } from "react";
import { RootState } from "@/redux/store/store";
import { Product } from "@/app/types/general";
import { listProducts } from "@/redux/actions/productActions";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import Slider from "rc-slider";

export default function FilterList() {
  const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch();
  const { products } = useSelector((state: RootState) => state.products);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000000]);
  const [sortBy, setSortBy] = useState<string>("price");
  const [sortOrder, setSortOrder] = useState<string>("asc");
  useEffect(() => {
    dispatch(listProducts());
    const filters: any = {};
    filters.minPrice = priceRange[0];
    filters.maxPrice = priceRange[1];
    filters.sortBy = sortBy;
    filters.sortOrder = sortOrder;

    const filteredProductsList = products.filter((product: Product) => {
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }
      return true;
    });

    dispatch(listProducts(filters));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, priceRange, sortBy, sortOrder]);

  const handleSortOrderChange = (newOrder: string) => {
    setSortOrder(newOrder);
    dispatch(listProducts());
  };

  return (
    <>
      <nav>
        <div className="order-none flex flex-col items-start md:order-last mx-12 md:w-[185px]">
          <h3 className="mt-12 mb-4 opacity-70 text-sm">Ordenar</h3>
          <div className="my-4 flex flex-col items-start">
            <span className="mr-2 block">Ordenar por precio:</span>
            <button
              className={`clsx(
                "flex my-2 min-w-[48px] items-center justify-center rounded-full border px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900",
                "ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 focus:bg-blue-600", ${
                  sortOrder === "asc"
                    ? "dark:border-neutral-800 dark:bg-neutral-900 hover:ring-blue-600 focus:bg-blue-600"
                    : ""
                }`}
              onClick={() => handleSortOrderChange("asc")}
            >
              Menor a Mayor
            </button>
            <button
              className={`clsx(
                  "flex min-w-[48px] my-2 items-center justify-center rounded-full border px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900",
                  "ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 focus:bg-blue-600", ${
                    sortOrder === "desc"
                      ? "dark:border-neutral-800 dark:bg-neutral-900 hover:ring-blue-600 focus:bg-blue-600"
                      : ""
                  }`}
              onClick={() => handleSortOrderChange("desc")}
            >
              Mayor a Menor
            </button>
          </div>
          <span className="flex flex-col">
            Rango de precios: <span>$ {priceRange[0]}</span> - <span>$ {priceRange[1]}</span>
          </span>
          <Slider
            range
            min={0}
            max={3000000}
            onChange={(newPriceRange: number | number[]) => {
              if (Array.isArray(newPriceRange)) {
                setPriceRange(newPriceRange as [number, number]);
              } else {
                setPriceRange([newPriceRange as number, newPriceRange as number]);
              }
            }}
            allowCross={false}
          />
        </div>
      </nav>
    </>
  );
}
