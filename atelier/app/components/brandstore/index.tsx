import React from "react";

function BrandStore() {
  return (
    <div className="w-full h-[60vh] flex bg-brandstorebg bg-top bg-cover bg-no-repeat">
      <div className="w-1/2 bg-primario opacity-80 flex flex-col gap-8 justify-center items-start p-48">
        {" "}
        <h5 className="text-4xl font-bold tracking-widest">BRAND STORE</h5>
        <span className="text-2xl">
          Camisas y producto de indumentaria masculina de estilo italiano
        </span>
        <button className="py-3 px-12 border-4 border-white text-2xl font-bold">SHOP NOW!</button>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
}

export default BrandStore;
