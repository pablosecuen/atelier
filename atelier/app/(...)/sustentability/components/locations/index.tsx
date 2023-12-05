import React from "react";
import location from "@/public/assets/icons/location.png";
import Image from "next/image";
const Location = () => {
  return (
    <div className="w-full min-h-[60vh] flex flex-col justify-center items-center border text-black pb-20">
      <h4 className="md:text-4xl text-2xl text-center pt-10  pb-20 font-bold">
        Visitanos en nuestros locales exclusivos en:
      </h4>
      <div className="max-w-7xl w-full flex flex-col md:flex-row justify-center md:gap-4 gap-8">
        <div className="md:w-[600px] md:h-[300px] text-2xl flex flex-col justify-center border-black border-2 items-center p-10 relative">
          <Image
            src={location}
            alt="location"
            className="absolute -top-8 left-1/2 -translate-x-1/2 w-10"
          />
          <strong className="pb-2 text-3xl font-bold text-center tracking-widest uppercase">
            jockey plaza
          </strong>
          <span>(10am - 11pm)</span>
          <span>2dp piso, Tienda 296</span>
          <span>Tel. (01 4082607)</span>
        </div>
        <div className="md:w-[600px] md:h-[300px] text-2xl flex flex-col justify-center border-black border-2 items-center p-10 relative">
          <Image
            src={location}
            alt="location"
            className="absolute -top-8 left-1/2 -translate-x-1/2 w-10"
          />
          <strong className="pb-2 text-3xl text-center font-bold tracking-widest uppercase">
            plaza san miguel
          </strong>
          <span>(10am - 11pm)</span>
          <span>2dp piso, Tienda B199</span>
          <span>Cel. (952789835)</span>
        </div>
      </div>
    </div>
  );
};

export default Location;
