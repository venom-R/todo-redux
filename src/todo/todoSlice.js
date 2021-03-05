import { createSlice } from "@reduxjs/toolkit";
import { TODO_FILTER } from "./todo-constants";

export const todoSlice = createSlice({
	name: "todo",
	initialState: {
		list: [],
		filter: TODO_FILTER.ALL,
		searchValue: "",
	},
	reducers: {
		addTodoItem: (state, { payload }) => {
			state.list.unshift({
				id: new Date().getTime(),
				text: payload.text,
				isCompleted: false,
			});
		},
		removeTodoItem: (state, { payload }) => {
			state.list = state.list.filter((todoItem) => {
				return todoItem.id !== payload.id;
			});
		},
		toggleTodoItemStatus: (state, { payload }) => {
			state.list.forEach((todoItem) => {
				if (todoItem.id === payload.id) {
					todoItem.isCompleted = !todoItem.isCompleted;
				}
			});
		},
		inputSearchValue: (state, { payload }) => {
			state.searchValue = payload.value;
		},
		applyFilterByStatus: (state, { payload }) => {
			state.filter = payload.filter;
		},
	},
});

export const {
	addTodoItem,
	removeTodoItem,
	toggleTodoItemStatus,
	inputSearchValue,
	applyFilterByStatus,
} = todoSlice.actions;

export default todoSlice.reducer;
