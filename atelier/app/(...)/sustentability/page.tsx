import Link from "next/link";
import React from "react";
import Location from "./components/locations";
import Shirts from "./components/our-shirts";

const Sustentability = () => {
  return (
    <div
      className="min-h-screen text-white  flex flex-col items-center bg-white
     z-40 md:pt-16 max-w-screen overflow-hidden"
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
        <div className=" md:text-5xl md:w-3/4 md:h-3/4 h-auto  border-2 bg-white border-black text-white  flex flex-col justify-center items-center text-center z-40 md:p-20 p-4 mx-2">
          <span className="text-primario uppercase font-atlas-grotesk-bold   text-2xl">
            SUSTENTABILITY
          </span>
          <p className="text-black md:text-3xl pt-4 md:pt-10 text-justify">
            Todo comienza con materiales auténticos, naturales y sostenibles. Empleamos materiales
            de la más alta calidad para perfeccionar el aspecto, la sensación y el rendimiento de
            cada pieza que fabricamos. Nuestro diseño minimalista deja traslucir la belleza innata y
            la longevidad de estos materiales. La calidad del algodón Pima peruano es inigualable.
            Su longitud de fibra extra larga le da una sensación increíblemente suave y tersa y un
            brillo brillante. Es muy duradero, hasta un 45 % más resistente que el algodón normal,
            por lo que no se apelmaza ni se deshilacha con el tiempo. El algodón Pima también es
            hipoalergénico, lo que lo convierte en una opción ideal para las personas con piel
            sensible. La combinación de la semilla, la tierra y el microclima ha hecho que el
            algodón Pima sea el algodón más fino y de fibra más larga en el mundo. Cuando es
            procesado correctamente tiene un brillo especial y una suavidad al tacto insuperable.
            Además, a pesar de ser una fibra fina y larga, el algodón Pima es también más resistente
            que casi todos los demás algodones, haciendo las prendas más duraderas. Por la longitud
            de su fibra está considerado entre los mejores del mundo
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sustentability;
