"use client";
import Image from "next/image";
import React from "react";
import logo from "../images/nxt_logo.png";
import person from "../images/image.png";
import Button from "./Button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getAddItemSlice } from "@/redux/Slice/addItemSlice";

function Navbar() {
  const dispatch = useAppDispatch();
  const addItemOpen = useAppSelector((store) => store.addItemOpen.addItemOpen);
  return (
    <div className="w-[100vw] flex items-center justify-between bg-[#FFFFFF] h-[72px] md:px-[48px] px-[10px] border-b border-b-[#D7DFE9]">
      <div>
        <Image src={logo} alt="Logo" width={82} height={40} />
      </div>
      <div className="flex items-center gap-6">
        {addItemOpen == false && (
          <div
            className="h-[40px] w-[109px]"
            onClick={() => {
              dispatch(getAddItemSlice(true));
            }}
          >
            <Button bg="bg-[#2DCA73]" text="ADD ITEM" text_color="text-white" />
          </div>
        )}

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
