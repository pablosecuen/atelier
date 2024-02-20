// components/checkout/Success.js
"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import LogoIcon from "@/app/components/lib/icons/logo";
import Footer from "@/app/components/footer/footer";
import html2canvas from "html2canvas";
import { usePathname } from "next/navigation";
import { clearCart } from "@/app/redux/slices/cartSlice";

const Success = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch: AppDispatch = useDispatch();
  const searchParams = useSearchParams();
  const payment_id = searchParams.get("payment_id");
  const [localPaymentInfo, setLocalPaymentInfo] = useState(null);
  const headerRef = useRef(null);

  // Primer useEffect para obtener la información del pago

  const handleContinueShopping = () => {
    router.push("/");
  };

  useEffect(() => {
    if (pathname === "/checkout/success") {
      // Despacha la acción para limpiar el carrito
      dispatch(clearCart());
    }
  }, [dispatch, pathname]);

  const handleSaveSnapshot = () => {
    if (headerRef.current) {
      // Asegurarse de que headerRef.current no sea null
      html2canvas(headerRef.current).then((canvas) => {
        const link = document.createElement("a");
        link.download = "snapshot.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      });
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen text-black">
        <div className="flex flex-col items-center gap-8">
          <div className="max-w-[400px] border-black border-4 p-10" ref={headerRef}>
            <header className="flex gap-3 w-full ">
              <div className="flex flex-col mx-auto">
                <span className="mx-auto">
                  <LogoIcon />
                </span>
                <p className="text-small text-default-500 text-center">andrews.com.ar</p>
              </div>
            </header>
            <hr />
            <div>
              <div className="flex flex-col gap-4 max-h-[50vh] py-3">
                <h1>¡Compra Exitosa!</h1>
                <p>Detalles del Pago:</p>
                <ul>
                  <li>ID de Pago: </li>
                  <li>Fecha de Aprobación: </li>
                  <li>Estado: </li>
                  {/* Agrega más detalles según sea necesario */}
                </ul>
                <p>Detalles de los Productos Comprados:</p>
                <ul className="flex flex-col gap-4 ">
                  Listado de productos
                  {/*        {localPaymentInfo?.additional_info?.items.map((product, index) => (
                      <li key={index} className="border  rounded-md p-4">
                        <strong>Producto #{index + 1}</strong>
                        <ul>
                          <li>Nombre: {product.title}</li>
                          <li>id: {product.id}</li>
                          <li>Cantidad: {product.quantity}</li>
                          <li>Precio Unitario:$ {product.unit_price}</li>
                        </ul>
                      </li>
                    ))} */}
                </ul>
                <p>Total Pagado: $ </p>
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-3 items-center justify-center w-full h-full py-4">
              <button
                onClick={handleContinueShopping}
                className="mx-auto py-2 w-full bg-primario text-white"
              >
                Continuar Comprando
              </button>
              <button
                onClick={handleSaveSnapshot}
                className="mx-auto py-2 w-full bg-primario text-white"
              >
                Guardar Comprobante
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Success;
