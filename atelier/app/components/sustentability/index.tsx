import React from "react";

function Sustentability() {
  const containerClass =
    "w-full flex flex-col md:flex-row md:h-[50vh] h-full overflow-hidden mt-12";
  const columnClass =
    "md:h-full h-[40vh] md:w-1/3 bg-center bg-no-repeat hover:scale-105 transition duration-300 flex items-center justify-center md:text-2xl font-bold tracking-[10px]";
  const brandStoreClass = "bg-brandstoreblack";
  const aboutShirtClass = "bg-aboutblack";
  const sustentabilityClass = "bg-sustentabilityblack";

  return (
    <div className={containerClass}>
      <div className={`${columnClass} ${brandStoreClass}`}>BRAND STORE</div>
      <div className={`${columnClass} ${aboutShirtClass}`}>ABOUT OUR SHIRT</div>
      <div className={`${columnClass} ${sustentabilityClass}`}>SUSTENTABILITY</div>
    </div>
  );
}

export default Sustentability;
