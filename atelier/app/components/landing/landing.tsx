import React from "react";

function landing() {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <span className="text-xl md:text-6xl  font-bold  text-white uppercase font-atlas-grotesk-medium tracking-widest">
        welcome to andrews
      </span>
      <div className="flex gap-10">
        {" "}
        <button className="py-3 px-12 border-4 bg-[#c8aa96] border-white text-white  text-2xl font-bold">
          ATELIER
        </button>{" "}
        <button className="py-3 px-12 border-4 backdrop-blur-3xl border-primario text-primario text-2xl font-bold">
          SHOP NOW!
        </button>
      </div>
    </div>
  );
}

export default landing;
