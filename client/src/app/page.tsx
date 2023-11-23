"use client";
import ItemBox from "@/components/ItemBox";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import ToggleButton from "@/components/ToggleButton";
import { getAddItemSlice } from "@/redux/Slice/addItemSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getAllMediaContent } from "@/service/mediaContent";
import Image from "next/image";
import { useState, useEffect } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import furniture from "../images/furniture.png";
import Form from "@/components/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Home() {
  const [mediaContent, setMediaContent] = useState<undefined | any>();
  const addItemOpen = useAppSelector((store) => store.addItemOpen.addItemOpen);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getMediaContent();
  }, []);

  async function getMediaContent() {
    try {
      const content = await getAllMediaContent();
      setMediaContent(content);
    } catch (error) {
      toast.error("Error in fetching data", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }
  return (
    <div className="bg-white h-[100vh] overflow-auto">
      <ToastContainer />
      <div className="fixed top-0 left-0">
        <Navbar />
      </div>
      {addItemOpen == false && (
        <div>
          <div className="mt-[118px] flex items-center justify-center w-[100vw]">
            <ToggleButton options={["Resources", "Requests", "Users"]} />
          </div>
          <div className="md:mt-[40px] mt-[20px] md:ml-[149px] ml-[5%] md:w-[648px] w-[90%] h-[40px]">
            <SearchBar />
          </div>
          <div>
            <ItemBox items={mediaContent} />
          </div>
        </div>
      )}
      {addItemOpen == true && (
        <div className="mt-[72px] flex justify-between">
          <div className="flex-1">
            <span
              onClick={() => {
                dispatch(getAddItemSlice(false));
              }}
              className="text-black flex items-center text-[22px] md:ml-[40px] ml-[1%] mt-[12px] cursor-pointer"
            >
              <MdKeyboardArrowLeft />
              <span className="text-[12px] text-[#7E858E] font-[400]">
                Users
              </span>
            </span>
            <div className="w-full">
              <Form />
            </div>
          </div>
          <div className="md:flex-1 flex-[0]">
            <Image src={furniture} alt="furniture" width={720} height={1058} />
          </div>
        </div>
      )}
    </div>
  );
}
