import { createSlice } from "@reduxjs/toolkit";

export const playListSlice = createSlice({
	name: "playlists",
	initialState: {
		playlists: [],
		isFetching: false,
		error: false,
	},
	reducers: {
		createPlayListStart: (state) => {
			state.isFetching = true;
		},
		createPlayListSuccess: (state, action) => {
			state.playlists.push(action.payload);
			state.isFetching = false;
		},
		createPlayListFailure: (state) => {
			state.error = true;
			state.isFetching = false;
		},

		getPlayListStart: (state) => {
			state.isFetching = true;
		},
		getPlayListSuccess: (state, action) => {
			state.playlists = action.payload;
			state.isFetching = false;
		},
		getPlayListFailure: (state) => {
			state.error = true;
			state.isFetching = false;
		},

		addSongStart: (state) => {
			state.isFetching = true;
		},
		addSongSuccess: (state, action) => {
			const index = state.playlists.indexOf(action.payload._id);
			state.playlists[index] = action.payload;
			state.isFetching = false;
		},
		addSongFailure: (state) => {
			state.error = true;
			state.isFetching = false;
		},

		removeSongStart: (state) => {
			state.isFetching = true;
		},
		removeSongSuccess: (state, action) => {
			const index = state.playlists.indexOf(action.payload._id);
			state.playlists[index] = action.payload;
			state.isFetching = false;
		},
		removeSongFailure: (state) => {
			state.error = true;
			state.isFetching = false;
		},

		deletePlayListStart: (state) => {
			state.isFetching = true;
		},
		deletePlayListSuccess: (state, action) => {
			state.playlists = state.playlists.filter(
				(playlist) => playlist._id !== action.payload
			);
			state.isFetching = false;
		},
		deletePlayListFailure: (state) => {
			state.error = true;
			state.isFetching = false;
		},
	},
});

export const {
	createPlayListStart,
	createPlayListSuccess,
	createPlayListFailure,
	getPlayListStart,
	getPlayListSuccess,
	getPlayListFailure,
	addSongStart,
	addSongSuccess,
	addSongFailure,
	removeSongStart,
	removeSongSuccess,
	removeSongFailure,
	deletePlayListStart,
	deletePlayListSuccess,
	deletePlayListFailure,
} = playListSlice.actions;

export default playListSlice.reducer;
