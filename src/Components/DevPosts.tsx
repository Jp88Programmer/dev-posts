("use strict");
import React from "react";
import DevPost from "./DevPost";
import Img from "../../public/next.svg";
const devpost = [
  {
    img: Img,
    title: "Top 3 JavaScript Frameworks",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, impedit laborum in voluptatibus ad quod natus illo sapiente reprehenderit asperiores possimus. Vitae ipsam praesentium nisi quis magnam accusantium repellat reprehenderit.",
  },
  {
    img: Img,
    title: "Top 3 JavaScript Frameworks",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, impedit laborum in voluptatibus ad quod natus illo sapiente reprehenderit asperiores possimus. Vitae ipsam praesentium nisi quis magnam accusantium repellat reprehenderit.",
  },
  {
    img: Img,
    title: "Top 3 JavaScript Frameworks",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, impedit laborum in voluptatibus ad quod natus illo sapiente reprehenderit asperiores possimus. Vitae ipsam praesentium nisi quis magnam accusantium repellat reprehenderit.",
  },
  {
    img: Img,
    title: "Top 3 JavaScript Frameworks",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, impedit laborum in voluptatibus ad quod natus illo sapiente reprehenderit asperiores possimus. Vitae ipsam praesentium nisi quis magnam accusantium repellat reprehenderit.",
  },
];
const DevPosts = () => {
  return (
    <div className="w-3/5 m-auto flex flex-col gap-8 items-center justify-center">
      {devpost.map((post, id) => {
        return (
          <DevPost
            key={id}
            img={post.img}
            title={post.title}
            des={post.description}
          />
        );
      })}
    </div>
  );
};

export default DevPosts;
