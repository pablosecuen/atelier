import React from "react";

function BrandStore() {
  return (
    <div className="w-full h-[60vh] flex bg-brandstorebg bg-top bg-cover bg-no-repeat tracking-widest">
      <div className="w-1/2 relative flex flex-col gap-8 justify-center items-start p-48">
        {" "}
        <div className="absolute w-full h-full top-0 left-0 bg-primario opacity-80 "></div>
        <h5 className="text-4xl font-bold tracking-widest z-40">BRAND STORE</h5>
        <span className="text-xl z-40">
          Camisas y producto de indumentaria masculina de estilo italiano
        </span>
        <button className="pt-2 pb-1 px-6 border-2 border-white text-2xl font-bold z-40">
          SHOP NOW!
        </button>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
}

export default BrandStore;
