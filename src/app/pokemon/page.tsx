import React from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

export const getStaticProps = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const res = await response.json();
  return { props: res };
};
const Page = ({ res }: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return <div>{res.base_experience}</div>;
};

export default Page;
 