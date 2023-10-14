import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { cryptoApi } from "../Services/CryptoApi";
import { cryptoNewsApi } from "../Services/CryptoNewsApi";

const rootReducer = combineReducers({
	[cryptoApi.reducerPath]: cryptoApi.reducer,
	[cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
});

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			cryptoApi.middleware,
			cryptoNewsApi.middleware
		),
});

export default store;
