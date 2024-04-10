import { postObj } from "@/types/type";
import Image from "next/image";
import React from "react";


const DevPost = ({ img, title, des }: postObj) => {
  return (
    <div className="flex gap-6 md:flex-col">
      <div className="">
        <Image src={img} alt="" className="w-full h-full" />
      </div>
      <div className="flex flex-col gap-3 ">
        <div className="text-2xl font-bold">{title}</div>
        <ul className="flex gap-3 text-sm">
          <li className="text-gray-400">Published 2 days ago</li>
          <li className="text-gray-400">5 min read</li>
          <li className="text-gray-400">8 comments</li>
        </ul>
        <div className="text-lg">{des}..</div>
        <div className="underline decoration-solid decoration-1 underline-offset-4 cursor-pointer">
          Read More {"->"}
        </div>
      </div>
    </div>
  );
};

export default DevPost;
