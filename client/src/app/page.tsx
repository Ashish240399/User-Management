"use client";
import ItemBox from "@/components/ItemBox";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import ToggleButton from "@/components/ToggleButton";
import { getAllMediaContent } from "@/service/mediaContent";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [mediaContent, setMediaContent] = useState<undefined | any>();

  useEffect(() => {
    getMediaContent();
  }, []);

  async function getMediaContent() {
    const content = await getAllMediaContent();
    setMediaContent(content);
  }
  return (
    <div className="bg-white h-[100vh] overflow-auto">
      <div className="fixed top-0 left-0">
        <Navbar />
      </div>
      <div className="mt-[118px] flex items-center justify-center w-[100vw]">
        <ToggleButton options={["Resources", "Requests", "Users"]} />
      </div>
      <div className="mt-[40px] ml-[149px] w-[648px] h-[40px]">
        <SearchBar />
      </div>
      <div>
        <ItemBox items={mediaContent} />
      </div>
    </div>
  );
}
