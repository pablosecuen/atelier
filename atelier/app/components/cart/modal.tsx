"use client";
import { Dialog, Transition } from "@headlessui/react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import CloseCart from "./close-cart";
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
  const { cart, cost } = useSelector((state: RootState) => state.cart);

  const [isOpen, setIsOpen] = useState(false);
  const quantityRef = useRef(cart?.length);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  useEffect(() => {
    if (cart.length !== quantityRef.current) {
      if (!isOpen) {
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
            <Dialog.Panel className="fixed bottom-0 right-0 top-0 z-50 flex h-full w-full flex-col border-l border-neutral-200 bg-gray-400/50 p-6 text-black backdrop-blur-xl dark:border-neutral-200/20 dark:bg-gray-400/50 dark:text-black md:w-[390px]">
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-black">Mi Carrito</p>

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

                      const merchandiseUrl = createUrl(
                        `/product/${item.handle}`,
                        new URLSearchParams(merchandiseSearchParams)
                      );

                      const image = item.imagesURL[0];

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
                                  alt={item.Desc1}
                                  src={image}
                                />
                              </div>

                              <div className="flex flex-1 flex-col text-base text-black">
                                <span className="leading-tight">{item.Desc1}</span>
                                <span className="leading-tight opacity-60 text-sm ">
                                  Medida: {item.SizeCode}
                                </span>
                                <span className="leading-tight opacity-60 text-sm">
                                  Color: {item.ColorName}
                                </span>
                              </div>
                            </Link>
                            <div className="flex h-16 flex-col justify-between">
                              <div className="text-center text-black">${item.RetailPrice}</div>
                              <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700">
                                <EditItemQuantityButton item={item} type="minus" />
                                <p className="w-6 text-center">
                                  <span className="w-full text-sm text-black">{item.quantity}</span>
                                </p>
                                <EditItemQuantityButton item={item} type="plus" />
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="py-4 text-sm text-black">
                    <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                      <p>Envio</p>
                      <p className="text-right">Calculado en la seccion de pagos</p>
                    </div>
                    <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                      <p>Total</p>

                      <div className="tracking-widest">${cost.totalAmount.amount}</div>
                    </div>
                  </div>
                  <a
                    href="/checkout"
                    className="block w-full rounded-full bg-black text-white p-3 text-center text-sm font-medium transition duration:300 hover:translate-y-[2px] opacity-90 hover:opacity-100"
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
