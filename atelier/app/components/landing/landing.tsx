import Link from "next/link";
import React from "react";

function landing() {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <span className="text-xl md:text-5xl  text-white uppercase font-atlas-grotesk-bold tracking-[15px] text-center">
        welcome to andrews
      </span>
      <div className="flex gap-10 text-sm font-bold">
        {" "}
        <button className="pt-2 pb-1 px-6  bg-[#c8aa96]  text-white  ">ATELIER</button>{" "}
        <Link href="/shop">
          <button className="pt-2 pb-1 px-6  bg-white  text-black ">SHOP NOW!</button>
        </Link>
      </div>
    </div>
  );
}

export default landing;
