import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiNewsKey = import.meta.env.VITE_RAPID_API_NEWS_KEY;
const cryptoNewsHeaders = {
	"X-BingApis-SDK": "true",
	"X-RapidAPI-Key": rapidApiNewsKey,
	"X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
	reducerPath: "cryptoNewsApi",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptoNews: builder.query({
			query: ({ newscategory, count }) =>
				createRequest(
					`/news/search?q=${newscategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
				),
		}),
	}),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
