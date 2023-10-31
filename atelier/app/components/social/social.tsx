"use client";
import React from "react";
import UseAnimations from "react-useanimations";
import instagram from "react-useanimations/lib/instagram";
import facebook from "react-useanimations/lib/facebook";
import Link from "next/link";

function Social({ strokeColor }: { strokeColor: string }) {
  return (
    <div className="z-50 flex ">
      <Link href="#" className="cursor-pointer">
        {" "}
        <UseAnimations animation={instagram} size={30} strokeColor={strokeColor} />
      </Link>
      <Link href="#" className="cursor-pointer">
        {" "}
        <div onClick={() => console.log("action clicked")}>
          <UseAnimations animation={facebook} size={30} strokeColor={strokeColor} />
        </div>
      </Link>
    </div>
  );
}

export default Social;
