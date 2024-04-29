"use client";
import { Spinner } from "@nextui-org/react";
import React, { useCallback, useEffect, useRef, useState } from "react";

const CounteryCards = () => {
  const [data, setData] = useState<any[]>([]);
  const [more, setMore] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [skip, setSkip] = useState(0);

  const observer = useRef(null);
  async function fetchCountryData() {
    const body = {
      first: 0,
      skip: skip,
    };
    setIsLoading(true);
    const res = await fetch("http://localhost:3000/api/getCountries", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json",
      },
    });
    const response = await res.json();
    setData((prev) => {
      prev.push(...response.countryInfos);
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
            setSkip(skip + 10);
          }
        });
        if (node) {
          observer?.current?.observe(node);
        }
      }
    },
    [data, more]
  );

  return (
    <div className="flex flex-col gap-2">
      {data?.map((val: any, index: number) => {
        return (
          <div
            key={index}
            ref={index == data.length - 1 ? lastElementObserverRef : null}
            className="w-80 p-3 border rounded-xl flex flex-col gap-2"
          >
            <img
              src={val.flags.png}
              alt={val.flags.alt}
              className="w-40 h-40"
            />
            <div className="text-lg font-semibold">{val?.name?.official}</div>
          </div>
        );
      })}

      {isLoading && (
        <div>
          <Spinner size="lg" />
        </div>
      )}
    </div>
  );
};

export default CounteryCards;
