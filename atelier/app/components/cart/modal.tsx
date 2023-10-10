"use client";
import { Dialog, Transition } from "@headlessui/react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import CloseCart from "./close-cart";

import Price from "../price";
import EditItemQuantityButton from "./edit-item-quantity-button";
import DeleteItemButton from "./delete-item-button";
import OpenCart from "./Open-cart";

import { createUrl } from "../lib/utils";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

type MerchandiseSearchParams = {
  [key: string]: string;
};

export default function CartModal() {
  const { cart } = useSelector((state: RootState) => state.cart);
  const [isOpen, setIsOpen] = useState(false);
  const quantityRef = useRef(cart?.length);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const totalAmountToPay = cart?.reduce(
    (total: any, item: any) => total + item.product.price * item.quantity,
    0
  );

  useEffect(() => {
    if (cart.length !== quantityRef.current) {
      if (!isOpen) {
        setIsOpen(true);
      }

      quantityRef.current = cart.length;
    }
  }, [isOpen, cart.length, quantityRef]);

  return (
    <>
      <button aria-label="Open cart" onClick={openCart}>
        <OpenCart cart={cart} />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeCart} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed bottom-0 right-0 top-12 md:top-16 flex h-full w-full flex-col border-l border-neutral-200 bg-primario/40 p-6 text-black backdrop-blur-xl dark:border-neutral-200/20 dark:bg-primario/40 dark:text-white md:w-[390px]">
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">Mi Carrito</p>

                <button aria-label="Close cart" onClick={closeCart}>
                  <CloseCart />
                </button>
              </div>

              {!cart || cart.length === 0 ? (
                <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
                  <ShoppingCartIcon className="h-16" />
                  <p className="mt-6 text-center text-2xl font-bold">Tu carrito esta vacio</p>
                </div>
              ) : (
                <div className="flex h-full flex-col justify-between overflow-hidden p-1">
                  <ul className="flex-grow overflow-auto py-4">
                    {cart?.map((item: any, i: any) => {
                      const merchandiseSearchParams = {} as MerchandiseSearchParams;

                      item.product.options.color.forEach(
                        ({ title, available }: { title: any; available: boolean }) => {
                          if (available) {
                            merchandiseSearchParams[title.toLowerCase()] = "1";
                          }
                        }
                      );

                      const merchandiseUrl = createUrl(
                        `/product/${item.product?.handle}`,
                        new URLSearchParams(merchandiseSearchParams)
                      );

                      const image = item.product?.images[0];

                      return (
                        <li
                          key={i}
                          className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700"
                        >
                          <div className="relative flex w-full flex-row justify-between px-1 py-4">
                            <div className="absolute z-40 -mt-2 ml-[55px]">
                              <DeleteItemButton item={item} />
                            </div>
                            <Link
                              href={merchandiseUrl}
                              onClick={closeCart}
                              className="z-30 flex flex-row space-x-4"
                            >
                              <div className="relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                                <Image
                                  className="h-full w-full object-cover"
                                  width={64}
                                  height={64}
                                  alt={item.product?.title}
                                  src={image}
                                />
                              </div>

                              <div className="flex flex-1 flex-col text-base">
                                <span className="leading-tight">{item.product?.title}</span>
                                <span className="leading-tight opacity-60">
                                  Medida: {item.product?.variants.medidas.medidas[0].title}
                                </span>
                                <span className="leading-tight opacity-60">
                                  Color: {item.product?.options.color[0].title}
                                </span>
                                {item.title !== "empty" ? (
                                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                    {item.title}
                                  </p>
                                ) : null}
                                {item.title !== "empty" ? (
                                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                    {item.title}
                                  </p>
                                ) : null}
                              </div>
                            </Link>
                            <div className="flex h-16 flex-col justify-between">
                              <Price
                                className="flex justify-end space-y-2 text-right text-sm"
                                price={item.product.price}
                              />
                              <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700">
                                <EditItemQuantityButton item={item} type="minus" />
                                <p className="w-6 text-center">
                                  <span className="w-full text-sm">{item.quantity}</span>
                                </p>
                                <EditItemQuantityButton item={item} type="plus" />
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="py-4 text-sm text-neutral-500 dark:text-neutral-400">
                    <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                      <p>Envio</p>
                      <p className="text-right">Calculado en la seccion de pagos</p>
                    </div>
                    <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                      <p>Total</p>
                      <Price
                        className="text-right text-base text-black dark:text-white"
                        price={totalAmountToPay}
                        currencyCode={cart.cost?.totalAmount.currencyCode}
                      />
                    </div>
                  </div>
                  <a
                    href="checkout"
                    className="block w-full rounded-full bg-blue-600 p-3 text-center text-sm font-medium text-white opacity-90 hover:opacity-100"
                  >
                    Ir a pagar productos
                  </a>
                </div>
              )}
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
