/* eslint-disable @next/next/no-before-interactive-script-outside-document */
"use client";
import React from "react";
import Script from "next/script";
import { initMercadoPago } from "@mercadopago/sdk-react";
import ReduxProvider from "./redux/ReduxProvider";

initMercadoPago("TEST-6c9b2f2a-23eb-4e6a-9626-2e65e5d8b25a", {
  locale: "es-AR",
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
