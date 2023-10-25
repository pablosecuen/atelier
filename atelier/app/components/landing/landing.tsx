import React from "react";

function landing() {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <span className="text-xl md:text-5xl  text-white uppercase font-atlas-grotesk-bold tracking-[15px]">
        welcome to andrews
      </span>
      <div className="flex gap-10">
        {" "}
        <button className="py-2 px-6  bg-[#c8aa96]  text-white  text-md font-bold">
          ATELIER
        </button>{" "}
        <button className="py-2 px-6  bg-white  text-black text-md font-bold">SHOP NOW!</button>
      </div>
    </div>
  );
}

export default landing;
