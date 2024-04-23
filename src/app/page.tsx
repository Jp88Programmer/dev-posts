import DevPosts from "@/Components/DevPosts";
import Home from "@/Components/Home";
import { getFetchBasicNews } from "./api/fetchBasicNews";

export const getData = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const res = await response.json();
  return res;
};

export default async function Page() {
  const latestArticles = await getFetchBasicNews();
  return (
    <main className="w-full p-7">
      <DevPosts latestArticles={latestArticles} />
    </main>
  );
}
