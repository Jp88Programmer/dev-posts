import React from "react";
import { Skeleton } from "@nextui-org/react";

export default function CardSkleton() {
  return (
    <>
      <div className="w-full m-auto flex gap-8 md:flex-col">
        <div className="w-1/3 h-56 md:w-4/5 md:m-auto">
          <Skeleton className="flex rounded-2xl w-full h-56" />
        </div>
        <div className="flex flex-col gap-5 w-4/5 md:w-full">
          <Skeleton className="text-2xl font-bold h-14 rounded-lg" />
          <ul className="flex gap-4 text-sm">
            <Skeleton className="h-6 rounded-lg w-1/3" />
            <Skeleton className="h-6 rounded-lg w-1/3" />
            <Skeleton className="h-6 rounded-lg w-1/3" />
          </ul>
          <Skeleton className="text-2xl font-bold h-8 rounded-lg" />
          <Skeleton className="text-2xl font-bold h-8 rounded-lg w-36" />
        </div>
      </div>
    </>
  );
}
