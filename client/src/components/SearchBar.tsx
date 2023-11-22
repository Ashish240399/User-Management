"use client";
import { addSearchSlice } from "@/redux/Slice/searchSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React from "react";
import { BsSearch } from "react-icons/bs";

type Props = {};

function SearchBar({}: Props) {
  const dispatch = useAppDispatch();
  const searchedValue = useAppSelector((store) => store.search.search);
  return (
    <div className="h-full w-full border border-[#D7DFE9] rounded flex justify-start items-center px-[16px] gap-4">
      <div className="text-[#171F46] text-[12px]">
        <BsSearch />
      </div>
      <div className="text-[14px] text-[#7E858E99] h-[100%] w-[100%]">
        <input
          className="h-[100%] w-full outline-none border-none focus:outline-none"
          type="text"
          name=""
          id=""
          placeholder="Search"
          onChange={(e) => dispatch(addSearchSlice(e.target.value))}
          value={searchedValue}
        />
      </div>
    </div>
  );
}

export default SearchBar;
