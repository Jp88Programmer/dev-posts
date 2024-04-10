"use client";
import { postObj } from "@/types/type";
import Image from "next/image";
import React from "react";
import Close from "../../public/close.svg";

const ShowPopUppost = ({ img, title, des }: postObj) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="relative flex gap-8 flex-col w-2/3 mx-auto mt-[20vh] py-10 px-8 border-black border-2 rounded-3xl">
        <button className="button-hover absolute right-0 mr-6 top-5">
          <Image src={Close} alt="Close" className="w-8 h-8" />
        </button>
        <div className="w-2/3 h-2/3 m-auto">
          <Image src={img} alt="" className="w-full h-full" />
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-3xl font-bold">{title}</div>
          <ul className="flex gap-3 text-sm">
            <li className="text-gray-400">Published 2 days ago</li>
            <li className="text-gray-400">5 min read</li>
            <li className="text-gray-400">8 comments</li>
          </ul>
          <div className="text-lg">{des}..</div>
          <button className="button-primary">Read More {"->"}</button>
        </div>
      </div>
    </div>
  );
};

export default ShowPopUppost;
