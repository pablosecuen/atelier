import Image from "next/image";
import React from "react";
import logo from "@/public/recurso 8.png";

export const AcmeIcon = () => {
  return <Image src={logo} alt="log" width={100} height={100} />;
};
