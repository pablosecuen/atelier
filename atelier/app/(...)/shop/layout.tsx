import { Suspense } from "react";
import Collections from "../../layout/search/collections";
import FilterList from "../../layout/search/filter";

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <div className=" flex w-screen-2xl flex-col gap-8   px-4 pb-4 justify-between text-black dark:text-white md:flex-row">
        <div className="order-first w-full max-h-screen flex items-start md:mt-16 justify-center  md:max-w-[250px]  text-black">
          <Collections />
        </div>
        <div className="order-last min-h-screen w-8/12  md:order-none md:mt-20">{children}</div>
        <div className="order-none w-full flex md:order-last md:w-[125px] ">
          {/*          <FilterList /> */}
        </div>
      </div>
    </Suspense>
  );
}
