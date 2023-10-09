"use client";
import React, { useEffect, useState } from "react";
import Grid from "../components/grid/Grid";
import ProductGridItems from "../components/layout/product-grid-items";
import { defaultSort, sorting } from "./constants";
import { listProducts } from "@/redux/actions/productActions";
import { ThunkDispatch, Dispatch } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import "rc-slider/assets/index.css";
import Loading from "./loading";

export const runtime = "edge";

export default function SearchPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { q: searchValue } = searchParams || {};
  const { products, status } = useSelector((state: RootState) => state.products);
  const [status1, setStatus1] = useState("");
  const dispatch = useDispatch<Dispatch<any>>();
  console.log(status);

  const resultsText = products.length > 1 ? "results" : "result";
  useEffect(() => {
    dispatch(listProducts());
    setStatus1(status);
  }, [dispatch]);
  return (
    <>
      {status1 === "loading" ? (
        <div className="w-full">
          <Loading />
        </div>
      ) : (
        <div className="flex flex-col w-full">
          {searchValue ? (
            <p className="mb-4 mx-auto">
              {products.length === 0
                ? "There are no products that match "
                : `Showing ${products.length} ${resultsText} for `}
              <span className="font-bold">&quot;{searchValue}&quot;</span>
            </p>
          ) : null}
          {products.length > 0 ? (
            <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
              <ProductGridItems products={products} />
            </Grid>
          ) : null}
        </div>
      )}
    </>
  );
}