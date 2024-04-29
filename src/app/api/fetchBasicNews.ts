import { queryParams } from "@/types/type";
import { BASE_URL } from "../../../config";

const getFetchBasicNews = async () => {
  const res = await fetch(BASE_URL);
  const response = await res.json();
  return response;
};

let response: any;
const getCountriesInfo = async ({ first, skip }: queryParams) => {
  if (skip == 0) {
    const res = await fetch("https://restcountries.com/v3.1/all");
    response = await res.json();
    return {
      countryInfos: response?.filter((data: any, index: number) => index < 10),
      more: response.length > 10,
    };
  } else {
    console.log("🚀 ~ response:", response);
    return {
      countryInfos: response?.filter(
        (data: any, index: number) => index > skip && index < skip + 10
      ),
      more: response.length > skip + 10,
    };
  }
};


export { getFetchBasicNews, getCountriesInfo };
