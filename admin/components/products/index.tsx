"use client";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ExportIcon } from "@/components/icons/accounts/export-icon";
import { HouseIcon } from "@/components/icons/breadcrumb/house-icon";
import { TableWrapper } from "@/components/table/table";
import useGlobalStore, { ProductApi, ProductApiExtended, fetchApiProducts } from "@/store/zustand";
import * as XLSX from "xlsx";
import { ProductsIcon } from "../icons/sidebar/products-icon";
import { Toaster } from "sonner";
export const Products = () => {
  const setApiProducts = useGlobalStore((state) => state.setApiProducts);
  const products = useGlobalStore((state) => state.apiProducts);
  const [productFilter, setProductFilter] = useState<string>("");
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchApiProducts();
        setApiProducts(data);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      }
    };
    fetchProducts();
  }, [setApiProducts]);

  const productMatchesFilter = (product: ProductApiExtended, productFilter: string) => {
    const searchLowerCase = productFilter.toLowerCase();
    const productKeys = Object.keys(product);
    const match = productKeys.some((key: string) => {
      const value = product[key];
      if (typeof value === "string" || typeof value === "number") {
        return value.toString().toLowerCase().includes(searchLowerCase);
      }
      return false;
    });

    return match;
  };

  const filteredProducts = products.filter((product: ProductApi) => {
    return productMatchesFilter(product, productFilter);
  });

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredProducts);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Productos");
    XLSX.writeFile(workbook, "productos.xlsx");
  };

  return (
    <div className="my-14 lg:px-6 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
      <Toaster position="top-center" closeButton={true} />
      <ul className="flex">
        <li className="flex gap-2">
          <HouseIcon />
          <Link href={"/"}>
            <span>Home</span>
          </Link>
          <span> / </span>{" "}
        </li>

        <li className="flex gap-2">
          <ProductsIcon />
          <span>Productos</span>
          <span> / </span>{" "}
        </li>
        <li className="flex gap-2">
          <span>Lista</span>
        </li>
      </ul>

      <h3 className="text-xl font-semibold">Todos los productos retail</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <Input
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Buscar productos"
            value={productFilter}
            onChange={(e) => setProductFilter(e.target.value)}
          />
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          <Button color="primary" startContent={<ExportIcon />} onPress={exportToExcel}>
            Export to CSV
          </Button>
        </div>
      </div>
      <div className="max-w-[95rem] mx-auto w-full">
        <TableWrapper products={filteredProducts} />
      </div>
    </div>
  );
};
