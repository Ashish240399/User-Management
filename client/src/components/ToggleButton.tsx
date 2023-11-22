"use client";
import React from "react";

type Props = {
  options: String[];
};

function ToggleButton({ options }: Props) {
  return (
    <div className="w-[600px] h-[40px] flex items-center justify-between rounded">
      {options?.map((el: String, id: number) => (
        <div
          className="text-[#171F46] font-[600] flex items-center border border-[#D7DFE9] justify-center bg-[#f2f4f7] w-full h-full"
          key={id}
        >
          {el}
        </div>
      ))}
    </div>
  );
}

export default ToggleButton;
