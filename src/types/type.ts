export type postObj = {
  img: string;
  title: string;
  des: string;
};

export type article = {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type queryParams = {
  first: number;
  skip: number;
};
