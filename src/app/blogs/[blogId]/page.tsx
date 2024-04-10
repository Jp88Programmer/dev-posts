import React from "react";
import type { Metadata } from "next";

type Props = {
  params: { blogId: string };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `${params.blogId}`,
  };
};
const BlogDetails = ({ params }: Props) => {
  return <div>This is the blog about {params.blogId}</div>;
};

export default BlogDetails;
