import Link from "next/link";
import React from "react";
import Location from "./components/locations";
import Shirts from "./components/our-shirts";

const Sustentability = () => {
  return (
    <div
      className="min-h-screen text-white flex flex-col items-center bg-white
     z-40 pt-16 max-w-screen overflow-hidden"
    >
      <div className="flex flex-col bg-sutentabilitybg justify-center items-center gap-6 h-[50vh] w-full  relative overflow-hidden">
        <div className="w-full h-screen bg-black/70 bg-cover bg-center absolute top-0 left-0 z-40"></div>
        <span className="text-xl md:text-5xl  text-white uppercase font-atlas-grotesk-bold tracking-[15px] text-center z-40">
          brand store
        </span>
        <div className="flex gap-10 text-sm font-bold z-40">
          <Link href="/">
            <button className="pt-2 pb-1 px-6  bg-white  text-black ">Ver Mapa</button>
          </Link>
        </div>
      </div>
      <Location />
      <Shirts />
      <div className="flex flex-col bg-sutentabilitybg3 bg-cover bg-center justify-center items-center gap-6 h-[100vh] w-full  relative overflow-hidden">
        <div className="w-full h-screen bg-black/30 bg-cover bg-center absolute top-0 left-0 z-40"></div>
        <div
          className="w-full h-screen absolute top-0 left-0 z-40"
          style={{
            backgroundImage:
              "linear-gradient(to top right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%)",
          }}
        ></div>
        <div className="text-xl md:text-5xl md:w-3/4 h-3/4 border-4 bg-white border-black text-white  flex flex-col justify-center items-center text-center z-40 p-20">
          <span className="text-primario uppercase font-atlas-grotesk-bold tracking-[15px] ">
            SUSTENTABILITY
          </span>
          <p className="text-black text-3xl pt-10 text-justify">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euLorem
            ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
            quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sustentability;
