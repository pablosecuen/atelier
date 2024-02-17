/* eslint-disable @next/next/no-before-interactive-script-outside-document */
"use client";
import React from "react";
import Script from "next/script";
import { initMercadoPago } from "@mercadopago/sdk-react";
import ReduxProvider from "./redux/ReduxProvider";

initMercadoPago("TEST-5324826d-e655-4124-82b8-f50b8fd84b63", {
  locale: "es-PE",
});

const MainProvider = ({ children }: any) => {
  return (
    <>
      <Script src="https://sdk.mercadopago.com/js/v2" strategy="beforeInteractive" />
      <ReduxProvider>{children}</ReduxProvider>{" "}
    </>
  );
};

export default MainProvider;
