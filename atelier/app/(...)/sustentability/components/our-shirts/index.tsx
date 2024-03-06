import React from "react";

const Shirts = () => {
  return (
    <div className="w-full min-h-[60vh] flex flex-col justify-center items-center  text-black">
      <div className="flex flex-col bg-sutentabilitybg2 bg-cover bg-center justify-center items-center gap-6 h-[50vh] w-full  relative overflow-hidden">
        <div className="w-full h-screen bg-black/70 absolute top-0 left-0 z-40"></div>
        <span className="text-xl md:text-5xl  text-white uppercase font-atlas-grotesk-bold tracking-[15px] text-center z-40">
          about our shirts
        </span>
      </div>
      <div className="bg-[#242529] w-full md:h-[50vh]   text-white flex flex-col md:flex-row justify-center items-center">
        <div className="p-10 flex flex-col gap-8 md:min-w-[450px] md:w-[450px] md:h-[350px]  text-justify border m-2">
          <h4 className="uppercase tracking-widest text-center text-2xl">camisas</h4>
          <p className="">
            Una selección de excelentes y exquisitas telas , Sedosas . Hilados entre 60‘S hasta
            160`&apos;`s dos cabos, con el mejor algodón Pima de Peru y algodón Giza de Egipto. El
            Placer de una camisa de alta calidad a un precio inmejorable. Sólo lo mejor.
          </p>
        </div>
        <div className="p-10 flex flex-col gap-8 md:min-w-[450px] md:w-[450px] md:h-[350px]  text-justify border m-2">
          <h4 className="uppercase tracking-widest text-center text-2xl">QUALITY</h4>
          <p className="">
            La calidad del algodón Pima peruano es inigualable. Su longitud de fibra extra larga le
            da una sensación increíblemente suave y tersa y un brillo brillante. Es muy duradero,
            hasta un 45 % más resistente que el algodón normal, por lo que no se apelmaza ni se
            deshilacha con el tiempo. El algodón Pima también es hipoalergénico, lo que lo convierte
            en una opción ideal para las personas con piel sensible.
          </p>
        </div>
        <div className="p-10 flex flex-col gap-8 md:min-w-[450px] md:w-[450px] md:h-[350px]  text-justify border m-2">
          <h4 className="uppercase tracking-widest text-center text-2xl">DESIGN</h4>
          <p className="">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euLorem
            ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
            quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shirts;
