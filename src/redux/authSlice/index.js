import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: null,
		isFetching: false,
		error: false,
	},
	reducers: {
		loginStart: (state) => {
			state.isFetching = true;
		},
		loginSuccess: (state, action) => {
			state.user = action.payload;
			state.isFetching = false;
		},
		loginFailure: (state) => {
			state.error = true;
			state.isFetching = false;
		},
		logout: (state) => {
			state.user = null;
			state.isFetching = false;
			state.error = false;
		},
	},
});

export const { loginStart, loginSuccess, loginFailure, logout } =
	authSlice.actions;

export default authSlice.reducer;
