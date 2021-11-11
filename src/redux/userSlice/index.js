import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		user: null,
		isFetching: false,
		error: false,
	},
	reducers: {
		getUserStart: (state) => {
			state.isFetching = true;
		},
		getUserSuccess: (state, action) => {
			state.user = action.payload;
			state.isFetching = false;
		},
		getUserFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},

		updateUserStart: (state) => {
			state.isFetching = true;
		},
		updateUserSuccess: (state, action) => {
			state.user = action.payload;
			state.isFetching = false;
		},
		updateUserFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},

		likeSongStart: (state) => {
			state.isFetching = true;
		},
		likeSongSuccess: (state, action) => {
			const index = state.user.likedSongs.indexOf(action.payload);
			index === -1
				? state.user.likedSongs.push(action.payload)
				: state.user.likedSongs.splice(index, 1);
			state.isFetching = false;
		},
		likeSongFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
	},
});

export const {
	getUserStart,
	getUserSuccess,
	getUserFailure,
	updateUserStart,
	updateUserSuccess,
	updateUserFailure,
	likeSongStart,
	likeSongSuccess,
	likeSongFailure,
} = userSlice.actions;

export default userSlice.reducer;
