const API_URL: string = "https://newsapi.org/v2/everything";
const API_KEY: string | undefined = process.env.NEWS_APP_TOKEN;
const BASE_URL: string = `${API_URL}?q=web+OR+software&apiKey=${API_KEY}`;

export { BASE_URL };
