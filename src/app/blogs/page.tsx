import Link from "next/link";
import React from "react";
import { Metadata } from "next";

export const metaData: Metadata = {
  title: {
    absolute: "Tech article",
  },
};

const Blogs = () => {
   
  return (
    <div>
      <ul>
        <li>
          <Link href="blogs/javascript">Javascript</Link>
        </li>
        <li>
          <Link href="blogs/java">java</Link>
        </li>
        <li>
          <Link href="blogs/pyton">pyton</Link>
        </li>
        <li>
          <Link href="blogs/nextjs">nextjs</Link>
        </li>
        <li>
          <Link href="blogs/react">react</Link>
        </li>
      </ul>
    </div>
  );
};

export default Blogs;
