"use client";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Menu } from "@/app/types/general";
import Search from "./search";
const currentYear = new Date().getFullYear();
const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : "");
const copyrightName = "ATELIER";

export default function MobileMenu({ menu }: { menu: Menu[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={openMobileMenu}
        aria-label="Open mobile menu"
        className="flex h-11 w-11 text-secundario items-center justify-center rounded-md  border-neutral-200  transition-colors dark:border-neutral-700 dark:text-black "
      >
        <Bars3Icon className="h-6" />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeMobileMenu} className="relative z-50">
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
            enterFrom="translate-x-[-100%]"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-[-100%]"
          >
            <Dialog.Panel className="fixed backdrop-blur-xl bottom-0 left-0 right-0 top-0 flex h-full w-full md:w-[350px] flex-col justify-between bg-white pb-6 dark:bg-primario/50 bg-primario/50">
              <div className="p-4">
                <button
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-black"
                  onClick={closeMobileMenu}
                  aria-label="Close mobile menu"
                >
                  <XMarkIcon className="h-6" />
                </button>

                <div className="mb-4 w-full">
                  <Search />
                </div>
                {menu.length ? (
                  <ul className="flex w-full flex-col">
                    {menu.map((item: Menu) => (
                      <li
                        className="py-2 text-xl font-bold tracking-wide md:text-white transition-colors hover:text-neutral-500 dark:text-black"
                        key={item.title}
                      >
                        <Link href={item.path} onClick={closeMobileMenu}>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <div className="border-t border-neutral-200 pt-8 text-sm dark:border-white text-white">
                <div className="mx-auto flex w-full flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 ">
                  <p>
                    &copy; {copyrightDate} {copyrightName}
                    {copyrightName.length && !copyrightName.endsWith(".") ? "." : ""} All rights
                    reserved.
                  </p>
                  <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
                  <p className="md:ml-auto">
                    Designed and Crafted by
                    <Link href="https://wamcreativo.com/" className="text-white">
                      WAM ▲
                    </Link>
                  </p>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
