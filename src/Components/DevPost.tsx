"use client";
import { article, postObj } from "@/types/type";
import { calculateReadingTime, getTimeDifferenceString } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ShowPopUppost from "./ShowPopUppost";
const DevPost = ({
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content,
}: article) => {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  return (
    <div className="flex gap-6 md:flex-col">
      <div className="w-1/5 h-56 md:w-4/5 md:m-auto">
        <img src={urlToImage} alt="article_image" className="w-full h-auto object-contain" />
      </div>
      <div className="flex flex-col gap-3 w-4/5 md:w-full">
        <div className="text-2xl font-bold">{title}</div>
        <ul className="flex gap-3 text-sm">
          <li className="text-gray-400">
            {getTimeDifferenceString(publishedAt)}
          </li>
          <li className="text-gray-400">
            {calculateReadingTime(content)} min read
          </li>
          {/* <li className="text-gray-400">8 comments</li> */}
        </ul>
        <div className="text-lg">{description}..</div>
        <div
          className="underline decoration-solid decoration-1 underline-offset-4 cursor-pointer"
          onClick={() => {
            setIsOpenPopUp(true);
          }}
        >
          Read More {"->"}
        </div>
        {isOpenPopUp && (
          <ShowPopUppost
            urlToImage={urlToImage}
            title={title}
            publishedAt={publishedAt}
            description={description}
            content={content}
            url={url}
            setIsOpenPopUp={setIsOpenPopUp}
          />
        )}
      </div>
    </div>
  );
};

export default DevPost;
