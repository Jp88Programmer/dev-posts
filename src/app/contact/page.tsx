import ShowPopUppost from "@/Components/ShowPopUppost";
import React from "react";
import Img from "../../../public/next.svg";
const obj = {
  img: Img,
  title: "Top 3 JavaScript Frameworks",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, impedit laborum in voluptatibus ad quod natus illo sapiente reprehenderit asperiores possimus. Vitae ipsam praesentium nisi quis magnam accusantium repellat reprehenderit.",
};
const Contact = () => {
  return (
    <div>
      <ShowPopUppost img={obj.img} title={obj.title} des={obj.description} />
    </div>
  );
};

export default Contact;
