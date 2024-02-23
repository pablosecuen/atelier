"use client";
import { useEffect, useState } from "react";
import { Product } from "@/app/types/general";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { listProducts } from "@/app/redux/actions/productActions";
import { RootState } from "@/app/redux/store";

export default function FilterList() {
  const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch();
  const { products } = useSelector((state: RootState) => state.products);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState<string>("price");
  const [sortOrder, setSortOrder] = useState<string>("asc");

  useEffect(() => {
    // Actualizar la lista de productos cuando cambien los filtros o el orden
    const filters: any = {};
    filters.minPrice = priceRange[0];
    filters.maxPrice = priceRange[1];
    filters.sortBy = sortBy;
    filters.sortOrder = sortOrder;

    

    dispatch(listProducts(filters));
  }, [dispatch, priceRange, sortBy, sortOrder]);
  const handleSortOrderChange = (newOrder: string) => {
    setSortOrder(newOrder);
  };

  // Aplicar el ordenamiento a los productos antes de mostrarlos
  let sortedProducts = [...products];
  if (sortBy === "price") {
    if (sortOrder === "asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
  }

  return (
    <>
      <div>
        <div className="order-none flex flex-col items-center md:item-last md:order-last mx-12 md:w-[185px]">
          <h3 className="mt-12 mb-4 opacity-70 text-sm text-black">Ordenar</h3>
          <div className="my-4 flex flex-col md:items-start item-center">
            <span className="mr-2 block text-black">Ordenar por precio:</span>
            <button
              className={`clsx(
                  "flex my-2 min-w-[48px] items-center justify-center rounded-full border px-2 py-1 text-sm text-black focus:text-black ",
                  "ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-primario focus:bg-primario text-black", ${
                    sortOrder === "desc"
                      ? "dark:border-neutral-800  text-black hover:ring-primario focus:bg-primario"
                      : "text-black"
                  }`}
              onClick={() => handleSortOrderChange("asc")}
            >
              Menor a Mayor
            </button>
            <button
              className={`clsx(
                "flex my-2 min-w-[48px] items-center justify-center rounded-full border px-2 py-1 text-sm text-black focus:text-black ",
                "ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-primario focus:bg-primario text-black", ${
                  sortOrder === "desc"
                    ? "dark:border-neutral-800  text-black hover:ring-primario focus:bg-primario"
                    : "text-black"
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
      </div>
    </>
  );
}
