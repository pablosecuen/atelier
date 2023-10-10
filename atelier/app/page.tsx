import Image from "next/image";
import product from "@/public/assets/product.webp";
import colors1 from "@/public/assets/colors1.webp";
import colors2 from "@/public/assets/colors2.webp";
import colors3 from "@/public/assets/colors3.webp";
import clsx from "clsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden ">
      <section
        className={clsx(
          "bg-landingbg h-[50vh] md:h-[100vh] bg-cover bg-no-repeat bg-center flex justify-center items-center",
          "inner-shadow-bottom" // Agrega la clase personalizada de sombra interna
        )}
      >
        <span className="text-xl md:text-6xl  font-bold tracking-wider text-white">MUY PRONTO</span>
      </section>
      <section className="">
        <h2 className="font-bold text-2xl mt-4 md:text-4xl px-8 md:mt-20">POPULARES</h2>
        <span className="text-sm px-8 md:text-lg">Nuestros productos mas vendidos</span>
        <div className="flex gap-4 px-8 overflow-x-auto whitespace-no-wrap md:max-w-screen w-full mt-4 ">
          <div className="rounded-md min-w-[280px] md:max-w-1/3  ">
            <Image
              src={product}
              alt="producto"
              className="min-w-[280px]  h-auto mb-1 "
              priority={true}
            />
            <span className="text-md mt-8 font-semibold"> COTTON HI-NECK T-SHIRT</span>
          </div>
          <div className="rounded-md min-w-[280px]  md:max-w-1/3">
            <Image
              src={product}
              alt="producto"
              className="min-w-[280px]  h-auto mb-1 "
              priority={true}
            />
            <span className="text-md mt-8 font-semibold"> COTTON HI-NECK T-SHIRT</span>
          </div>
          <div className="rounded-md min-w-[280px] md:max-w-1/3 ">
            <Image
              src={product}
              alt="producto"
              className="min-w-[280px]  h-auto mb-1 "
              priority={true}
            />
            <span className="text-md mt-1 font-semibold"> COTTON HI-NECK T-SHIRT</span>
          </div>
        </div>
      </section>
      <section className="">
        <h2 className="font-bold text-2xl mt-4 md:text-4xl px-8 md:mt-20">INGRESOS</h2>
        <span className="text-sm px-8 md:text-lg">Nuestros ultimos ingresos</span>
        <div className="flex flex-col px-8 md:flex-row gap-4 justify-center items-center  overflow-x-auto whitespace-no-wrap w-full mt-4">
          <div className="rounded-md min-w-[280px] md:max-w-1/2">
            <Image
              src={product}
              alt="producto"
              className="min-w-[280px] h-auto mb-4"
              priority={true}
            />
            <span className="text-md mt-8 font-semibold "> COTTON HI-NECK T-SHIRT</span>
          </div>
          <div className="rounded-md min-w-[280px]  md:max-w-1/2">
            <Image
              src={product}
              alt="producto"
              className="min-w-[280px] h-auto mb-1"
              priority={true}
            />
            <span className="text-md font-semibold  md:max-w-1/3"> COTTON HI-NECK T-SHIRT</span>
          </div>
        </div>
      </section>

      <section className=" mt-12 mb-8 md:mt-20 md:mb-20">
        <div className="flex gap-4 px-8 overflow-x-auto whitespace-no-wrap w-full mt-4">
          <div className="rounded-md min-w-[280px]">
            <Image
              src={colors1}
              alt="colors1"
              className="min-w-[280px] h-auto mb-1"
              priority={true}
            />
            <span className="text-mf mt-8 font-semibold">DROP SHOULDER SWEATSHIRT</span>
          </div>
          <div className="rounded-md min-w-[280px]">
            <Image
              src={colors2}
              alt="colors2"
              className="min-w-[280px] h-auto mb-1"
              priority={true}
            />
            <span className="text-md font-semibold">COTTON COLORS</span>
          </div>
          <div className="rounded-md min-w-[280px]">
            <Image
              src={colors3}
              alt="colors3"
              className="min-w-[280px] h-auto mb-1"
              priority={true}
            />
            <span className="text-md font-semibold ">WOOL KNIT COLORS</span>
          </div>
        </div>
      </section>
    </main>
  );
}
