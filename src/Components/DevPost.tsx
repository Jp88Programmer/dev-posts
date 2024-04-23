import { article, postObj } from "@/types/type";
import { calculateReadingTime, getTimeDifferenceString } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DevPost = ({
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content,
}: article) => {
  return (
    <div className="flex gap-6 md:flex-col">
      {/* <div className="w-64 h-64">
        <Image src={urlToImage} alt="" className="w-64 h-64" />
      </div> */}
      <div className="flex flex-col gap-3 ">
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
        <div className="underline decoration-solid decoration-1 underline-offset-4 cursor-pointer">
          <Link href={url} passHref={true}>
            Read More {"->"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DevPost;
