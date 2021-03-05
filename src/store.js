import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import todoReducer from "./todo/todoSlice";

export default configureStore({
	reducer: {
		todo: todoReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
