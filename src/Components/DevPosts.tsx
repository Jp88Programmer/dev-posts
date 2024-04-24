("use strict");
import React from "react";
import DevPost from "./DevPost";
import Img from "../../public/next.svg";
import { article } from "@/types/type";

const DevPosts = ({ latestArticles }: any) => {
  return (
    <div className="w-3/5 m-auto flex flex-col gap-8 items-center justify-center">
      {latestArticles?.articles?.map(
        (
          {
            source,
            author,
            title,
            description,
            url,
            urlToImage,
            publishedAt,
            content,
          }: article,
          id: number
        ) => {
          if (urlToImage && title != "[Removed]") {
            return (
              <DevPost
                key={id}
                source={source}
                urlToImage={urlToImage}
                title={title}
                description={description}
                url={url}
                publishedAt={publishedAt}
                content={content}
                author={author}
              />
            );
          }
        }
      )}
    </div>
  );
};

export default DevPosts;
