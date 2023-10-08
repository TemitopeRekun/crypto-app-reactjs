import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../Services/CryptoApi";

const store = configureStore({
	reducer: {
		[cryptoApi.reducerPath]: cryptoApi.reducer,
	},
	middleware: (getdefaultMiddleware) =>
		getdefaultMiddleware().concat(cryptoApi.middleware),
});

export default store;
