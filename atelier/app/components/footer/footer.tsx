import Link from "next/link";
import { Suspense } from "react";
import LogoSquare from "../logo-square";

import FooterMenu from "./footer-menu";
import whatsapp from "@/public/assets/whatsapp.svg";
import Image from "next/image";
import { menu, menuInformation } from "../lib/utils";

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : "");
  const copyrightName = "ATELIER";
  const skeleton = "w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700";

  return (
    <footer className="text-sm text-white black bg-[#242529] z-50">
      <div className="h-36  border-b-2 text-xl font-semibold flex justify-between px-8 items-center w-full">
        <span>NECESITAS AYUDA?</span>
        <button className="py-4 px-16 border-2 border-terciario  font-bold rounded-md text-lg">
          CONTACTANOS
        </button>
      </div>
      <div className="mx-auto flex  w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm dark:border-[#fff7e9] md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0">
        <div className="max-w-xl md:-mt-12">
          <LogoSquare size="4xl" />
          <Link className="flex flex-col items-start   gap-2   md:pt-1 " href="/">
            <strong className="text-3xl font-atlas-grotesk-bol font-bold ">
              UNETE A NUESTRA COMUNIDAD
            </strong>
            <p className="font-canela-regular ">
              Forma parte de nuestra comunidad de indumentaria con la mision de generar 0
              desperdicios proveniente de nuestros procesos de fabricacion
            </p>
            <button className="px-8 py-2 border-2 bg-transparent rounded-sm font-bold">
              {" "}
              SING UP
            </button>
          </Link>
        </div>
        <Suspense
          fallback={
            <div className="flex h-[188px] w-[200px] flex-col gap-2">
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
            </div>
          }
        >
          <FooterMenu menu={menu} menuInformation={menuInformation} />
        </Suspense>
        <div className="md:ml-0 ml-auto">
          <div className="flex h-8 w-auto flex-none items-center justify-center rounded-md border border-neutral-200 bg-white text-xs  dark:border-[#fff7e9] dark:bg-white dark:text-black">
            <span className="px-3">
              <Image
                src={whatsapp}
                alt="Whatsapp"
                width={20}
                height={20}
                loading="lazy"
                className="inline-block hover:cursor-pointer"
              />
            </span>
            <Link href="#top" className="flex items-center justify-center">
              <span className="px-3">▲</span>
              <hr className="h-full border-r border-neutral-200 dark:border-neutral-700" />
              <span className="px-3">Inicio</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-200 bg-primario py-6 text-sm text-secundario dark:border-[#fff7e9] ">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith(".") ? "." : ""} All rights reserved.
          </p>
          <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
          <p className="md:ml-auto">
            Designed and Crafted by
            <Link href="https://wamcreativo.com/" className="ml-1 text-md ">
              WAM ▲
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
