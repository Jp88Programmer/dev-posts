"use client";
import Image from "next/image";
import React from "react";
import Close from "../../public/close.svg";
import { calculateReadingTime, getTimeDifferenceString } from "@/utils";
import Link from "next/link";
import { Button } from "@nextui-org/react";

const ShowPopUppost = ({
  urlToImage,
  title,
  content,
  publishedAt,
  description,
  url,
  setIsOpenPopUp,
}: any) => {
  return (
    <div className="fixed flex items-center justify-center top-0 left-0 w-full h-full">
      <div className="relative flex gap-8 flex-col w-2/3 mx-auto py-10 px-8 bg-slate-50 border-black border-2 rounded-3xl">
        <button
          className="button-hover absolute right-0 mr-6 top-5"
          onClick={() => {
            setIsOpenPopUp(false);
          }}
        >
          <Image src={Close} alt="Close" className="w-8 h-8" />
        </button>
        <div className="w-2/3 h-2/3 m-auto">
          <img src={urlToImage} alt="" className="w-full h-full" />
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-3xl font-bold">{title}</div>
          <ul className="flex gap-3 text-sm">
            <li className="text-gray-400">
              {getTimeDifferenceString(publishedAt)}
            </li>
            <li className="text-gray-400">
              {" "}
              {calculateReadingTime(content)} min read
            </li>
            {/* <li className="text-gray-400">8 comments</li> */}
          </ul>
          <div className="text-lg">{description}</div>
          <Button className="button-primary">
            <Link href={url} passHref={true}>
              Read More {"->"}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShowPopUppost;
