import React from "react";
import location from "@/public/assets/icons/location.png";
import Image from "next/image";
const Location = () => {
  return (
    <div className="w-full min-h-[60vh] flex flex-col justify-center items-center border text-black">
      <h4 className="text-4xl pb-10">Visitanos en nuestros locales exclusivos en:</h4>
      <div className="max-w-7xl w-full flex justify-center gap-4">
        <div className="w-[600px] h-[300px] text-2xl flex flex-col justify-center border-black border-2 items-center p-10 relative">
          <Image
            src={location}
            alt="location"
            className="absolute -top-8 left-1/2 -translate-x-1/2 w-10"
          />
          <strong className="pb-2 text-3xl font-bold tracking-widest uppercase">
            jockey plaza
          </strong>
          <span>(10am - 11pm)</span>
          <span>2dp piso, Tienda 296</span>
          <span>Tel. (01 4082607)</span>
        </div>
        <div className="w-[600px] h-[300px] text-2xl flex flex-col justify-center border-black border-2 items-center p-10 relative">
          <Image
            src={location}
            alt="location"
            className="absolute -top-8 left-1/2 -translate-x-1/2 w-10"
          />
          <strong className="pb-2 text-3xl font-bold tracking-widest uppercase">
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
