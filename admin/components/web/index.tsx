"use client";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ExportIcon } from "@/components/icons/accounts/export-icon";
import { HouseIcon } from "@/components/icons/breadcrumb/house-icon";
import useGlobalStore, { ProductWeb, fetchWebProducts } from "@/store/zustand";
import { TableWrapperWeb } from "../table/tableweb";
import * as XLSX from "xlsx";
import { ProductsIcon } from "../icons/sidebar/products-icon";
import { Toaster, toast } from "sonner";

export const Web = () => {
  const setWebProducts = useGlobalStore((state) => state.setWebProducts);
  const products = useGlobalStore((state) => state.webProducts);
  const [productFilter, setProductFilter] = useState<string>("");

  useEffect(() => {
    const promise = async () => {
      try {
        const data = await fetchWebProducts();
        return data;
      } catch (error: any) {
        throw error;
      }
    };
    toast.promise(promise(), {
      loading: "Cargando productos desde la web...",
      success: (data) => {
        setWebProducts(data);
        return "Productos cargados exitosamente desde la web";
      },
      error: (error) => `Error al cargar los productos desde la web: ${error.message}`,
    });
  }, [setWebProducts]);

  const filteredProducts = products.filter((product: ProductWeb) => {
    const {
      size,
      color,
      StockQty,
      id,
      category,
      availableForSale,
      description,
      title,
      SKU,
      StyleName,
      UPC,
      RetailPrice,
      GetPercentOff,
      promoPrice,
      stock,
    } = product;
    const searchLowerCase = productFilter.toLowerCase();

    const match =
      size?.toString().toLowerCase().includes(searchLowerCase) ||
      color?.toString().toLowerCase().includes(searchLowerCase) ||
      StockQty?.toString().toLowerCase().includes(searchLowerCase) ||
      id?.toString().toLowerCase().includes(searchLowerCase) ||
      category?.toString().toLowerCase().includes(searchLowerCase) ||
      availableForSale?.toString().toLowerCase().includes(searchLowerCase) ||
      title?.toString().toLowerCase().includes(searchLowerCase) ||
      description?.toString().toLowerCase().includes(searchLowerCase) ||
      category?.toString().toLowerCase().includes(searchLowerCase) ||
      SKU?.toString().toLowerCase().includes(searchLowerCase) ||
      StyleName?.toString().toLowerCase().includes(searchLowerCase) ||
      UPC?.toString().toLowerCase().includes(searchLowerCase) ||
      RetailPrice?.toString().toLowerCase().includes(searchLowerCase) ||
      GetPercentOff?.toString().toLowerCase().includes(searchLowerCase) ||
      promoPrice?.toString().toLowerCase().includes(searchLowerCase) ||
      stock?.toString().toLowerCase().includes(searchLowerCase);

    return match;
  });

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredProducts);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Alumnos");
    XLSX.writeFile(workbook, "alumnos.xlsx");
  };

  return (
    <div className="my-14 lg:px-6 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
      <Toaster position="bottom-right" closeButton={true} />
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

      <h3 className="text-xl font-semibold">Todos los productos web</h3>
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
        <TableWrapperWeb products={filteredProducts} />
      </div>
    </div>
  );
};
