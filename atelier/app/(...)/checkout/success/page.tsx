// components/checkout/Success.js
"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import LogoIcon from "@/app/components/lib/icons/logo";
import html2canvas from "html2canvas";
import { usePathname } from "next/navigation";
import { clearCart } from "@/app/redux/slices/cartSlice";
import { getMerchantOrder } from "@/app/redux/actions/paymentActions";
import { Product } from "@/app/types/general";
import { format } from "date-fns";

const Success = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch: AppDispatch = useDispatch();
  const searchParams = useSearchParams();
  const payment_id = searchParams.get("payment_id");
  const [localPaymentInfo, setLocalPaymentInfo] = useState<any>(null);
  const headerRef = useRef(null);

  const handleContinueShopping = () => {
    router.push("/");
  };

  useEffect(() => {
    if (payment_id) {
      dispatch(getMerchantOrder(payment_id)).then((response) => {
        setLocalPaymentInfo(response.payload);
      });
    }
    if (pathname === "/checkout/success") {
      // Despacha la acción para limpiar el carrito
      dispatch(clearCart());
    }
  }, [dispatch, pathname, payment_id]);

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
      {localPaymentInfo ? (
        <div className="flex justify-center items-center min-h-screen h-auto py-20 pt-32 text-black fadeIn">
          <div className="flex flex-col items-center gap-8">
            <div className="min-w-[400px] border-black border-4 p-10" ref={headerRef}>
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
                <div className="flex flex-col gap-4 h-auto py-3">
                  <h2 className="text-lg font-bold">¡Felicitaciones, Compra Exitosa!</h2>
                  <p className="font-semibold">Detalles del Pago:</p>
                  <ul>
                    <li>ID de Pago: {payment_id}</li>
                    <li>
                      Fecha de Aprobación:{" "}
                      {localPaymentInfo
                        ? format(new Date(localPaymentInfo.date_approved), "dd/MM/yyyy HH:mm:ss")
                        : ""}
                    </li>
                    <li>Estado: {localPaymentInfo?.status}</li>
                    {/* Agrega más detalles según sea necesario */}
                  </ul>
                  <p className="font-semibold">Detalles de los Productos Comprados:</p>
                  <p className="font-semibold">Listado de productos</p>
                  <ul className="flex  gap-4 flex-wrap">
                    {localPaymentInfo?.additional_info?.items.map(
                      (product: Product, index: number) => (
                        <li key={index} className="border  rounded-md p-4">
                          <strong>Producto #{index + 1}</strong>
                          <ul>
                            <li>Nombre: {product.Desc1}</li>
                            <li>id: {product.id}</li>
                            <li>Cantidad: {product.quantity}</li>
                            <li>Precio Unitario:$ {product.RetailPrice}</li>
                          </ul>
                        </li>
                      )
                    )}
                  </ul>
                  <p className="font-semibold">
                    Total Pagado: $ {localPaymentInfo?.transaction_amount}{" "}
                  </p>
                </div>
              </div>
              <hr />
              <div className="flex flex-col gap-3 items-center justify-center w-full h-full py-4 fadeIn transition duration-500">
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
      ) : (
        <div className="w-full h-full flex items-center justify-center min-h-screen text-black fadeIn transition duration-500">
          <p>Cargando Ticket de compra, no cierre esta ventana</p>
        </div>
      )}

      {/*     <Footer /> */}
    </>
  );
};

export default Success;
