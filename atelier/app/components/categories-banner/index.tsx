import Image from "next/image";
import React from "react";
import secado from "@/public/assets/1x/Recurso 1.png";
import flexible from "@/public/assets/1x/Recurso 2.png";
import antiarruga from "@/public/assets/1x/Recurso 3.png";
import cuidado from "@/public/assets/1x/Recurso 4.png";
import marcas from "@/public/assets/1x/Recurso 5.png";

function CategoriesBanner() {
  const commonClass =
    " bg-cover bg-center bg-no-repeat h-[450px] w-[350px] flex justify-start items-end p-2";
  const imageClass = "flex flex-col justify-center items-center gap-3";
  const containerClass = "w-full px-10 flex text-black md:h-64";
  const itemClass = "flex flex-col items-center justify-center p-8";
  const titleClass = "text-2xl font-bold text-center";

  return (
    <>
      <div className="w-full flex flex-wrap scroll-auto h-96 text-3xl  p-10 gap-10 justify-center my-32">
        <div className={`${commonClass} bg-dessshirtbg `}>Dress Shirt</div>
        <div className={`${commonClass} bg-casualshirtbg`}>Casual Shirt</div>
        <div className={`${commonClass} bg-athelierbg`}>Athelier</div>
        <div className={`${commonClass} bg-accesoriesbg`}>Accesories</div>
      </div>
      <div className="w-full px-20 py-10 flex flex-wrap scroll-auto h-96 text-xl  gap-10 justify-around items-center mt-20 text-black ">
        <div className={`${imageClass} `}>
          <Image src={flexible} alt="" width={0} height={0} className="w-32 h-24" />
          <span>Secado rapido</span>
        </div>
        <div className={`${imageClass} `}>
          {" "}
          <Image src={antiarruga} alt="" width={0} height={0} className="w-24 h-24" />
          <span>Flexible y liger</span>
        </div>
        <div className={`${imageClass} `}>
          {" "}
          <Image src={secado} alt="" width={0} height={0} className="w-18 h-24" />
          <span>Antiarrugas</span>
        </div>
        <div className={`${imageClass} `}>
          {" "}
          <Image src={cuidado} alt="" width={0} height={0} className="w-24 h-24" />
          <span>Facil Cuidado</span>
        </div>
        <div className={imageClass}>
          {" "}
          <Image src={marcas} alt="" width={0} height={0} className="w-18 h-28" />
          <span>Sin marcas de sudor</span>
        </div>
      </div>
      <div className={containerClass}>
        <div className={itemClass}>
          <span className={titleClass}>INNOVATE</span>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim{" "}
          </p>
        </div>
        <div className={itemClass}>
          <span className={titleClass}>CUSTOM MADE</span>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim{" "}
          </p>
        </div>
        <div className={itemClass}>
          <span className={titleClass}>CUSTOM MADE</span>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default CategoriesBanner;
