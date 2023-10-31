"use client";
import React, { useEffect, useState } from "react";
import Grid from "../../components/grid/Grid";
import { useSelector } from "react-redux";
import "rc-slider/assets/index.css";
import Loading from "./loading";
import { RootState } from "../../redux/store";

import ProductGridItems from "../../layout/product-grid-items";

export const runtime = "edge";

export default function Shop({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { q: searchValue } = searchParams || {};
  const { products, status } = useSelector((state: RootState) => state.products);
  const [status1, setStatus1] = useState("");

  const resultsText = products.length > 1 ? "resultados" : "resultado";
  return (
    <>
      {status1 === "loading" ? (
        <div className="w-full">
          <Loading />
        </div>
      ) : (
        <div className="flex flex-col w-full font-atlas-grotesk-regular px-10 md:p-0">
          {searchValue ? (
            <p className="mb-4 mx-auto text-black">
              {products.length === 0
                ? "Ningun producto coincide con su busqueda "
                : `Mostrando ${products.length} ${resultsText}
                 
                  `}
              {/*     <span className="font-bold">&quot;{searchValue}&quot;</span> */}
            </p>
          ) : null}
          {products.length > 0 ? (
            <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full ">
              <ProductGridItems products={products} />
            </Grid>
          ) : null}
        </div>
      )}
    </>
  );
}
