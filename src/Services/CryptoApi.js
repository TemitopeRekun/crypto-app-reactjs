import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey = import.meta.env.VITE_RAPID_API_COINS_KEY;
const cryptoApiHeaders = {
	"X-RapidAPI-Key": rapidApiKey,
	"X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({
	url,
	headers: cryptoApiHeaders,
});

export const cryptoApi = createApi({
	reducerPath: "cryptoApi",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: () => createRequest(`/coins?limit=${100}`),
		}),
	}),
});

export const { useGetCryptosQuery } = cryptoApi;
