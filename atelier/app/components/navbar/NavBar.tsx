"use client";
import Link from "next/link";

import MobileMenu from "./Mobile-menu";
import LogoSquare from "../logo-square";

import { usePathname } from "next/navigation";
import { Suspense } from "react";

import Cart from "../cart/Cart";

import { menu, mobileMenu } from "../lib/utils";
import { Menu } from "@/app/types/general";
import Search from "./search";
import OpenCart from "../cart/Open-cart";

export default function Navbar() {
  const pathname = usePathname();
  if (pathname === "/dashboard") {
    return null;
  }
  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6 bg-primario text-black">
      <div className="block flex-none md:hidden">
        <MobileMenu menu={mobileMenu} />
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
            <LogoSquare />
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              ATELIER
            </div>
          </Link>
          {menu.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="text-neutral-800 underline-offset-4 font-bold tracking-wide hover:text-black hover:underline dark:text-neutral-white dark:hover:text-slate-500"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="hidden justify-center md:flex md:w-1/3">
          <Search />
        </div>
        <div className="flex justify-end md:w-1/3 ">
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
