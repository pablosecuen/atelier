import clsx from "clsx";
import Landing from "./components/landing/landing";
import BestSellers from "./components/productdisplay/best-sellers";
import Incoming from "./components/productdisplay/incoming";
import ColorSection from "./components/productdisplay/color-section";

export default function Home() {
  if (typeof window !== "undefined") {
    const existingCart = localStorage.getItem("cart");
    if (!existingCart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          cart: [],
          cost: {
            totalAmount: {
              amount: 0,
              currencyCode: "$",
            },
          },
        })
      );
    }
  }

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden ">
      <section
        className={clsx(
          "bg-landingbg h-[50vh] md:h-[100vh] bg-cover bg-no-repeat bg-center flex justify-center items-center",
          "inner-shadow-bottom"
        )}
      >
        <Landing />
      </section>
      <section className="">
        <BestSellers />
      </section>
      <section className="">
        <Incoming />
      </section>

      <section className=" mt-12 mb-8 md:mt-20 md:mb-20">
        <ColorSection />
      </section>
    </main>
  );
}
