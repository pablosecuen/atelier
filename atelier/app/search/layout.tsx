import { Suspense } from "react";
import Collections from "../components/layout/search/collections";
import FilterList from "../components/layout/search/filter";

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black dark:text-white md:flex-row">
        <div className="order-first w-full flex-none md:max-w-[125px]">
          <Collections />
        </div>
        <div className="order-last min-h-screen w-full md:order-none">{children}</div>
        <div className="order-none flex-none md:order-last md:w-[125px]">
          <FilterList />
        </div>
      </div>
    </Suspense>
  );
}