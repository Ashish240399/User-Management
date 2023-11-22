"use client";
import Image from "next/image";
import React from "react";
import logo from "../images/nxt_logo.png";
import person from "../images/image.png";
import Button from "./Button";

function Navbar() {
  return (
    <div className="w-[100vw] flex items-center justify-between bg-[#FFFFFF] h-[72px] px-[48px] border-b border-b-[#D7DFE9]">
      <div>
        <Image src={logo} alt="Logo" width={82} height={40} />
      </div>
      <div className="flex items-center gap-6">
        <div className="h-[40px] w-[109px]">
          <Button bg="bg-[#2DCA73]" text="ADD ITEM" text_color="text-white" />
        </div>
        <div>
          <Image
            src={person}
            alt="Person"
            width={40}
            height={60}
            className="rounded-[50%]"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
