import Link from "next/link";
import { Suspense } from "react";
import LogoSquare from "../logo-square";
import FooterMenu from "./footer-menu";
import { menu, menuInformation } from "../lib/utils";
import Social from "../social/social";

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : "");
  const copyrightName = "ANDREWS";
  const skeleton = "w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700";

  return (
    <footer className="text-sm text-white  bg-[#242528] z-50">
 
      <div className="mx-auto flex border-t-2 w-full max-w-7xl flex-col gap-6   px-6 py-12 text-sm  md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0">
        <div className="max-w-xl md:-mt-12">
          <LogoSquare size="4xl" />
          <Link className="flex flex-col items-start   gap-2   md:pt-1 " href="/">
            <strong className="text-xl font-atlas-grotesk-bol font-bold ">
              UNETE A NUESTRA COMUNIDAD
            </strong>
            <p className="font-canela-regular text-md ">
              Forma parte de nuestra comunidad de indumentaria con la mision de generar 0
              desperdicios proveniente de nuestros procesos de fabricacion
            </p>
            <button className="px-8 py-2 mt-6 border-2 bg-transparent rounded-full font-bold">
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
        <div className="md:ml-0 ml-auto flex flex-col justify-between ">
          <div className="flex h-8 w-auto flex-none items-center justify-evenly rounded-md border border-neutral-200 bg-white text-xs  dark:border-[#fff7e9] text-primario">
            <Link href="#top" className="flex items-center justify-center">
              <span className="px-3 text-lg">▲</span>
              <hr className="h-full border-r border-neutral-200 dark:border-neutral-700" />
              <span className="pr-3 text-md">Inicio</span>
            </Link>
          </div>
          <Social strokeColor="white" />
        </div>
      </div>
      <div className="h-28 border-t-2 border-white/40 text-xs  md:text-md font-semibold flex justify-between  items-center max-w-7xl mx-auto px-12 md:px-0">
        <span>NECESITAS AYUDA?</span>
        <button className="md:py-4 py-2  px-4 md:px-16 border-2 border-terciario font-bold rounded-full ">
          CONTACTANOS
        </button>
      </div>
      <div className="border-t border-neutral-200 bg-primario pt-3 pb-2 text-sm text-secundario dark:border-[#fff7e9] ">
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
