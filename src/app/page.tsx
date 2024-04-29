import DevPosts from "@/Components/DevPosts";
import { getFetchBasicNews } from "./api/fetchBasicNews";

export default async function Page() {
  // const latestArticles = await getFetchBasicNews();
  return (
    <main className="w-full p-7">
      {/* <DevPosts latestArticles={latestArticles} /> */}
    </main>
  );
}
