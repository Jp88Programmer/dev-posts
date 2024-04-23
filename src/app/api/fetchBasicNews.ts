import { BASE_URL } from "../../../config";

export const getFetchBasicNews = async () => {
  const res = await fetch(BASE_URL);
  const response = await res.json();
  return response;
};
