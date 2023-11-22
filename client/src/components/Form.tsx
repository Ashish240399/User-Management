"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { createContent } from "@/service/createNewContent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

function Form({}: Props) {
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    itemTitle: "",
    link: "",
    iconUrl: "",
    tagName: "",
    category: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      formData.category !== "" &&
      formData.description !== "" &&
      formData.iconUrl !== "" &&
      formData.itemTitle !== "" &&
      formData.link !== "" &&
      formData.tagName !== ""
    ) {
      if (formData.description.length < 20) {
        toast.error("Description should be atleast 20 characters", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }
      if (formData.itemTitle.length < 3 || formData.itemTitle.length > 10) {
        toast.error("Item title should be between 3 to 10 characters", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }
      try {
        const response = await createContent(formData);
        console.log(response);
        toast.success("Successfully created", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setFormData({
          itemTitle: "",
          link: "",
          iconUrl: "",
          tagName: "",
          category: "",
          description: "",
        });
      } catch (error) {
        toast.error("Error in submitting form", {
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
    } else {
      toast.error("Please fill all the fields", {
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
  };
  return (
    <form onSubmit={handleSubmit}>
      <ToastContainer />
      <div className="md:mt-[90px] mt-[30px] md:w-[320px] w-[90%] m-auto flex flex-col gap-6">
        <div className="text-[#171F46] text-[32px] leading-[40px] text-center">
          Item Details
        </div>
        <div>
          <div className="text-[#7E858E] text-[12px] font-[600] text-left">
            ITEM TITLE
          </div>
          <div className="mt-[8px]">
            <input
              onChange={handleChange}
              className="border border-[#D7DFE9] focus:outline-none text-[#171F46] h-[40px] md:w-[320px] w-full text-[14px] px-3"
              type="text"
              name="itemTitle"
              id="itemTitle"
              value={formData.itemTitle}
            />
          </div>
        </div>
        <div>
          <div className="text-[#7E858E] text-[12px] font-[600]">LINK</div>
          <div className="mt-[8px]">
            <input
              onChange={handleChange}
              className="border border-[#D7DFE9] focus:outline-none text-[#0B69FF] h-[40px] md:w-[320px] w-full text-[14px] px-3"
              type="text"
              name="link"
              value={formData.link}
              id="link"
            />
          </div>
        </div>
        <div>
          <div className="text-[#7E858E] text-[12px] font-[600]">ICON URL</div>
          <div className="mt-[8px]">
            <input
              onChange={handleChange}
              className="border border-[#D7DFE9] focus:outline-none text-[#0B69FF] h-[40px] md:w-[320px] w-full text-[14px] px-3"
              type="text"
              name=""
              value={formData.iconUrl}
              id="iconUrl"
            />
          </div>
        </div>
        <div>
          <div className="text-[#7E858E] text-[12px] font-[600]">TAG NAME</div>
          <div
            onClick={() => {
              setOpenDropDown(!openDropDown);
            }}
            className="mt-[8px] border border-[#D7DFE9] text-[#171F46] h-[40px] md:w-[320px] w-full text-[14px] px-3 flex items-center justify-between relative"
          >
            {formData.tagName == "" ? "Select" : formData.tagName}
            {openDropDown == false ? (
              <MdKeyboardArrowDown />
            ) : (
              <MdKeyboardArrowUp />
            )}

            {openDropDown && (
              <div className="absolute top-[110%] w-[60%] right-0 border-2 border-[#D7DFE9] bg-white p-3 rounded flex flex-col gap-4">
                <div
                  onClick={() =>
                    setFormData({ ...formData, tagName: "Resources" })
                  }
                  className="hover:cursor-pointer"
                >
                  Resources
                </div>
                <div
                  onClick={() =>
                    setFormData({ ...formData, tagName: "Requests" })
                  }
                  className="hover:cursor-pointer"
                >
                  Requests
                </div>
                <div
                  onClick={() => setFormData({ ...formData, tagName: "Users" })}
                  className="hover:cursor-pointer"
                >
                  Users
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="text-[#7E858E] text-[12px] font-[600]">CATEGORY</div>
          <div className="mt-[8px]">
            <input
              onChange={handleChange}
              className="border border-[#D7DFE9] focus:outline-none text-[#171F46] h-[40px] md:w-[320px] w-full text-[14px] px-3"
              type="text"
              name=""
              value={formData.category}
              id="category"
            />
          </div>
        </div>
        <div>
          <div className="text-[#7E858E] text-[12px] font-[600]">
            DESCRIPTION
          </div>
          <div className="mt-[8px]">
            <textarea
              onChange={handleChange}
              className="border border-[#D7DFE9] focus:outline-none text-[#171F46] h-[80px] md:w-[320px] w-full text-[14px] px-3 py-3"
              name=""
              value={formData.description}
              id="description"
            />
          </div>
        </div>
        <div className="w-[102px] h-[40px] m-auto mt-6 mb-5 md:mb-0">
          <button
            type="submit"
            className={
              formData.category == "" ||
              formData.description == "" ||
              formData.iconUrl == "" ||
              formData.itemTitle == "" ||
              formData.link == "" ||
              formData.tagName == ""
                ? "bg-gray-300 text-white w-full h-full rounded"
                : "bg-[#0B69FF] text-white w-full h-full rounded"
            }
          >
            CREATE
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
