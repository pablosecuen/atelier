"use client";

import { Menu } from "@/app/types/general";
import clsx from "clsx";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const FooterMenuItem = ({ item }: { item: Menu }) => {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname === item.path);

  useEffect(() => {
    setActive(pathname === item.path);
  }, [pathname, item.path]);

  return (
    <li>
      <Link
        href={item.path}
        className={clsx(
          "block p-2 text-sm underline-offset-4 hover:text-white hover:underline dark:hover:text-neutral-300 md:inline-block md:text-md md:font-bold md:tracking-wider text-black",
          {
          "text-text-black/80 dark:text-black/80": active,
          }
        )}
      >
        {item.title}
      </Link>
    </li>
  );
};

export default function FooterMenu({
  menu,
  menuInformation,
}: {
  menu: Menu[];
  menuInformation: Menu[];
}) {
  if (!menu.length) return null;

  return (
    <div className="flex  w-full  justify-evenly md:w-1/3 mx-auto md:justify-between ">
      <ul className="w-1/2 ">
        {menu.map((item: Menu) => {
          return <FooterMenuItem key={item.title} item={item} />;
        })}
      </ul>
      <ul className="w-1/2 ">
        {menuInformation.map((item: Menu) => {
          return <FooterMenuItem key={item.title} item={item} />;
        })}
      </ul>
    </div>
  );
}
