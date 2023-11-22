"use client";
import Image from "next/image";
import React from "react";
type Item = {
  title: String;
  icon_url: string;
  link: string;
  description: String;
  category: String;
  tag: String;
  id: String;
};
type Props = {
  items: Item[];
};

function ItemBox({ items }: Props) {
  return (
    <div className="w-[80.7%] m-auto grid grid-cols-3 mt-[40px] gap-[50px]">
      {items?.map((el: Item, id: number) => (
        <div key={id} className="border border-[#D7DFE9] p-[30px] rounded">
          <div className="flex gap-4 items-center">
            <div className="h-[44px] w-[44px] border-[2px] rounded border-[#D7DFE9] flex items-center justify-center">
              <img src={el.icon_url} alt="icon" className="h-[25px] w-[25px]" />
            </div>
            <div>
              <div className="text-[#171F46] text-[16px]">{el.title}</div>
              <div className="text-[#7E858E] text-[12px] font-[400]">
                {el.category}
              </div>
            </div>
          </div>
          <div className="mt-[20px]">
            <a
              className="text-[#0B69FF] text-[14px] leading-[24px] font-[400]"
              href={el.link}
              target="_blank"
            >
              {el.link}
            </a>
          </div>
          <div className="text-[#7E858E] text-[14px] leading-[24px] font-[400] mt-[7px]">
            {el.description}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemBox;
