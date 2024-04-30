"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import DevPost from "./DevPost";
import Img from "../../public/next.svg";
import { article } from "@/types/type";
import { Spinner } from "@nextui-org/react";
import CardSkleton from "./CardSkleton";

const DevPosts = () => {
  const [latestArticles, setLatestArticles] = useState<any[]>([]);
  const [more, setMore] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [skip, setSkip] = useState(0);

  const observer = useRef(null);
  async function fetchCountryData() {
    const body = {
      skip: skip,
    };
    setIsLoading(true);
    const res = await fetch("http://localhost:3000/api/getLatestArticles", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json",
      },
    });
    const response = await res.json();
    setLatestArticles((prev) => {
      prev.push(...response.articles);
      return prev;
    });
    if (response?.more) {
      setMore(true);
    }
    setIsLoading(false);
  }
  useEffect(() => {
    fetchCountryData();
  }, []);

  const lastElementObserverRef = useCallback(
    async (node: any) => {
      if (more) {
        if (observer?.current) observer?.current?.disconnect();

        observer.current = new IntersectionObserver((enteries) => {
          if (enteries[0].isIntersecting) {
            fetchCountryData();
            setSkip(skip + 25);
          }
        });
        if (node) {
          observer?.current?.observe(node);
        }
      }
    },
    [latestArticles, more]
  );
  return (
    <div className="w-3/5 m-auto flex flex-col gap-8 items-center justify-center">
      {latestArticles?.map(
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
              <div
                ref={
                  id == latestArticles?.length - 1
                    ? lastElementObserverRef
                    : null
                }
                className="w-full"
                key={id}
              >
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
              </div>
            );
          }
        }
      )}
      {isLoading && <CardSkleton />}
    </div>
  );
};

export default DevPosts;
