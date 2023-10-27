import Image from "next/image";
import React from "react";
import secado from "@/public/assets/1x/Recurso 1.png";
import flexible from "@/public/assets/1x/Recurso 2.png";
import antiarruga from "@/public/assets/1x/Recurso 3.png";
import cuidado from "@/public/assets/1x/Recurso 4.png";
import marcas from "@/public/assets/1x/Recurso 5.png";

function CategoriesBanner() {
  const commonClass =
    " bg-cover bg-center bg-no-repeat md:h-[350px] md:w-[300px] w-32 h-40 flex justify-start items-end p-2  relative cursor-pointer  hover:scale-105 duration-300 transition";
  const imageClass = "flex flex-col justify-center items-center gap-3";
  const containerClass =
    " md:px-40 flex flex-col md:flex-row text-black md:h-64 w-full  scale-75 md:scale-100 gap-8";
  const itemClass = "flex flex-col items-center justify-center";
  const titleClass = "text-2xl font-bold text-center";

  return (
    <div className="h-full flex flex-col">
      <div className="w-full flex  flex-wrap scroll-auto md:h-80  text-xl  md:p-10 gap-12 justify-center mt-20 md:my-32 !font-canela-regular ">
        <div className={`${commonClass} bg-dessshirtbg `}>
          <span className="z-40 text-sm md:text-base">Dress Shirt</span>
          <div className="bg-gradient-to-t from-black to-transparent h-full w-full absolute top-0 left-0 opacity-25 z-30"></div>
        </div>
        <div className={`${commonClass} bg-casualshirtbg `}>
          <span className="z-40 text-sm md:text-base"> Casual Shirt </span>
          <div className="bg-gradient-to-t from-black to-transparent h-full w-full absolute top-0 left-0 opacity-25 z-30 "></div>
        </div>
        <div className={`${commonClass} bg-athelierbg `}>
          <span className="z-40 text-sm md:text-base">Athelier </span>
          <div className="bg-gradient-to-t from-black to-transparent h-full w-full absolute top-0 left-0 opacity-25  z-30"></div>
        </div>
        <div className={`${commonClass} bg-accesoriesbg `}>
          <span className="z-40 text-sm md:text-base">Accesories </span>
          <div className="bg-gradient-to-t from-black to-transparent h-full w-full absolute top-0 left-0 opacity-25 z-30 "></div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto md:py-10 md:px-10 flex flex-wrap scroll-auto md:h-96  text-xl  gap-10 justify-around items-center  scale-75 md:scale-100 text-black ">
        <div className={`${imageClass} `}>
          <Image src={flexible} alt="" width={0} height={0} className="w-32 h-24 scale-75" />
          <span>Secado rapido</span>
        </div>
        <div className={`${imageClass} `}>
          {" "}
          <Image src={antiarruga} alt="" width={0} height={0} className="w-24 h-24 scale-75" />
          <span>Flexible y liger</span>
        </div>
        <div className={`${imageClass} `}>
          {" "}
          <Image src={secado} alt="" width={0} height={0} className="w-18 h-24 scale-75" />
          <span>Antiarrugas</span>
        </div>
        <div className={`${imageClass} `}>
          {" "}
          <Image src={cuidado} alt="" width={0} height={0} className="w-24 h-24 scale-75" />
          <span>Facil Cuidado</span>
        </div>
        <div className={imageClass}>
          {" "}
          <Image src={marcas} alt="" width={0} height={0} className="w-18 h-28 scale-75" />
          <span>Sin marcas de sudor</span>
        </div>
      </div>
      <div className={containerClass}>
        <div className={itemClass}>
          <span className={titleClass}>INNOVATE</span>
          <p className="text-lg pt-4">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim{" "}
          </p>
        </div>
        <div className={itemClass}>
          <span className={titleClass}>CUSTOM MADE</span>
          <p className="text-lg pt-4">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim{" "}
          </p>
        </div>
        <div className={itemClass}>
          <span className={titleClass}>CUSTOM MADE</span>
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
