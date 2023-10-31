import { Suspense } from "react";
import Collections from "../../layout/search/collections";

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <Collections />
      <div className="  flex justify-center items-center overflow-x-hidden">
        <div className="max-w-7xl  md:mb-32 mb-12">{children}</div>
      </div>
    </Suspense>
  );
}
