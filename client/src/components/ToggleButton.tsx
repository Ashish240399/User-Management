"use client";
import { addToggleSlice } from "@/redux/Slice/toggleSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React from "react";

type Props = {
  options: string[];
};

function ToggleButton({ options }: Props) {
  const dispatch = useAppDispatch();
  const selectedToggle = useAppSelector((store) => store.toggle.toggle);
  return (
    <div className="md:w-[600px] w-[90vw] h-[40px] flex items-center justify-between rounded">
      {options?.map((el: string, id: number) => (
        <div
          onClick={() => {
            dispatch(addToggleSlice(el));
          }}
          className={
            selectedToggle == el
              ? "text-[white] font-[600] flex items-center border border-[#D7DFE9] justify-center bg-[#0B69FF] w-full h-full hover:cursor-pointer"
              : "text-[#171F46] font-[600] flex items-center border border-[#D7DFE9] justify-center bg-[#f2f4f7] w-full h-full hover:cursor-pointer"
          }
          key={id}
        >
          {el}
        </div>
      ))}
    </div>
  );
}

export default ToggleButton;
