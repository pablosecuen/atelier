import Image from "next/image";
import React from "react";
import secado from "@/public/assets/1x/Recurso 1.png";
import flexible from "@/public/assets/1x/Recurso 2.png";
import antiarruga from "@/public/assets/1x/Recurso 3.png";
import cuidado from "@/public/assets/1x/Recurso 4.png";
import marcas from "@/public/assets/1x/Recurso 5.png";

function CategoriesBanner() {
  return (
    <div className="h-full flex flex-col gap-20 md:gap-36 my-20">
      <div className="w-full grid md:grid-cols-2 grid-cols-2 xl:grid-cols-4 !h-full  scroll-auto   text-xl   gap-12 justify-center  !font-canela-regular ">
        <div
          className={`bg-cover mx-auto bg-center bg-no-repeat md:h-[350px] md:w-[300px] w-32 h-40 flex justify-start items-end p-2  relative cursor-pointer  hover:scale-105 duration-300 transition bg-dessshirtbg `}
        >
          <span className="z-40 text-sm md:text-base">Dress Shirt</span>
          <div className="bg-gradient-to-t from-black to-transparent h-full w-full absolute top-0 left-0 opacity-25 z-30"></div>
        </div>
        <div
          className={`bg-cover mx-auto bg-center bg-no-repeat md:h-[350px] md:w-[300px] w-32 h-40 flex justify-start items-end p-2  relative cursor-pointer  hover:scale-105 duration-300 transition bg-casualshirtbg `}
        >
          <span className="z-40 text-sm md:text-base"> Casual Shirt </span>
          <div className="bg-gradient-to-t from-black to-transparent h-full w-full absolute top-0 left-0 opacity-25 z-30 "></div>
        </div>
        <div
          className={`bg-cover mx-auto bg-center bg-no-repeat md:h-[350px] md:w-[300px] w-32 h-40 flex justify-start items-end p-2  relative cursor-pointer  hover:scale-105 duration-300 transition bg-athelierbg `}
        >
          <span className="z-40 text-sm md:text-base">Athelier </span>
          <div className="bg-gradient-to-t from-black to-transparent h-full w-full absolute top-0 left-0 opacity-25  z-30"></div>
        </div>
        <div
          className={`bg-cover mx-auto bg-center bg-no-repeat md:h-[350px] md:w-[300px] w-32 h-40 flex justify-start items-end p-2  relative cursor-pointer  hover:scale-105 duration-300 transition bg-accesoriesbg `}
        >
          <span className="z-40 text-sm md:text-base">Accesories </span>
          <div className="bg-gradient-to-t from-black to-transparent h-full w-full absolute top-0 left-0 opacity-25 z-30 "></div>
        </div>
      </div>
      <div className="w-full  h-full max-w-7xl mx-auto  grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-5 scroll-auto   text-xl  gap-10 justify-around items-center  scale-75 md:scale-100 text-black ">
        <div className="flex mx-auto flex-col justify-center items-center gap-3 hover:scale-[105%] cursor-pointer transition duration-300">
          <Image src={flexible} alt="" width={0} height={0} className="w-32 h-24 scale-75" />
          <span className="text-center">Secado rapido</span>
        </div>
        <div className="flex flex-col mx-auto justify-center items-center gap-3 hover:scale-[105%] cursor-pointer transition duration-300">
          {" "}
          <Image src={antiarruga} alt="" width={0} height={0} className="w-24 h-24 scale-75" />
          <span className="text-center">Flexible y liger</span>
        </div>
        <div className="flex flex-col mx-auto justify-center items-center gap-3 hover:scale-[105%] cursor-pointer transition duration-300">
          {" "}
          <Image src={secado} alt="" width={0} height={0} className="w-18 h-24 scale-75" />
          <span className="text-center">Antiarrugas</span>
        </div>
        <div className="flex flex-col mx-auto justify-center items-center gap-3 hover:scale-[105%] cursor-pointer transition duration-300">
          {" "}
          <Image src={cuidado} alt="" width={0} height={0} className="w-24 h-24 scale-75" />
          <span>Facil Cuidado</span>
        </div>
        <div className="flex flex-col mx-auto justify-center items-center gap-3 hover:scale-[105%] cursor-pointer transition duration-300">
          {" "}
          <Image src={marcas} alt="" width={0} height={0} className="w-18 h-28 scale-75" />
          <span className="text-center">Sin marcas de sudor</span>
        </div>
      </div>
      <div className="grid grid-cols-1 px-10 sm:grid-cols-2 md:grid-cols-3 h-full  max-w-7xl text-center mx-auto gap-10 justify-center items-center   cursor-pointer transition duration-300 text-black ">
        <div className="flex flex-col justify-center items-center gap-3 hover:scale-[105%] cursor-pointer transition duration-300">
          <span className="text-2xl font-bold text-center">INNOVATE</span>
          <p className="text-lg pt-4">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim{" "}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 hover:scale-[105%]  cursor-pointer transition duration-300">
          <span className="text-2xl font-bold text-center ">CUSTOM MADE</span>
          <p className="text-lg pt-4">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim{" "}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 hover:scale-[105%] cursor-pointer transition duration-300">
          <span className="text-2xl font-bold text-center">CUSTOM MADE</span>
          <p className="text-lg pt-4">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CategoriesBanner;
