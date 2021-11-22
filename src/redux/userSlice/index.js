import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		user: null,
		getUserProgress: false,
		updateUserProgress: false,
		likeSongProgress: false,
		error: false,
	},
	reducers: {
		getUserStart: (state) => {
			state.getUserProgress = true;
		},
		getUserSuccess: (state, action) => {
			state.user = action.payload;
			state.getUserProgress = false;
		},
		getUserFailure: (state) => {
			state.getUserProgress = false;
			state.error = true;
		},

		updateUserStart: (state) => {
			state.updateUserProgress = true;
		},
		updateUserSuccess: (state, action) => {
			state.user = action.payload;
			state.updateUserProgress = false;
		},
		updateUserFailure: (state) => {
			state.updateUserProgress = false;
			state.error = true;
		},

		likeSongStart: (state) => {
			state.likeSongProgress = true;
		},
		likeSongSuccess: (state, action) => {
			const index = state.user.likedSongs.indexOf(action.payload);
			index === -1
				? state.user.likedSongs.push(action.payload)
				: state.user.likedSongs.splice(index, 1);
			state.likeSongProgress = false;
		},
		likeSongFailure: (state) => {
			state.likeSongProgress = false;
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
