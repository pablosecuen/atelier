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
    <nav className="relative flex text-secundario md:fixed top-0 w-full z-40 h-12 md:h-16 items-center justify-between p-4 lg:px-6 bg-primario ">
      <div className="block flex-none w-1/3 md:w-auto  md:mr-4">
        <MobileMenu menu={mobileMenu} />
      </div>
      <div className="flex md:w-full w-2/3 items-center justify-between">
        <div className="md:flex hidden md:w-1/3 w-1/3">
          {menu.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className=" underline-offset-4 font-bold tracking-wide hover:text-black hover:underline text-secundario dark:hover:text-slate-500"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <Link href="/" className="mr-2 flex  items-center justify-center w-1/2 lg:ml-28   ">
          <LogoSquare size={"3xl"} />
        </Link>
        <div className="flex justify-end md:items-center w-1/2  gap-4">
          <div className="hidden md:justify-center md:flex md:w-1/3">
            <Search />
          </div>

          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
