import { createSlice } from "@reduxjs/toolkit";

export const playListSlice = createSlice({
	name: "playlists",
	initialState: {
		playlists: [],
		createPlayListProgress: false,
		getPlayListProgress: false,
		addSongProgress: false,
		removeSongProgress: false,
		deletePlayListProgress: false,
		error: false,
	},
	reducers: {
		createPlayListStart: (state) => {
			state.createPlayListProgress = true;
		},
		createPlayListSuccess: (state, action) => {
			state.playlists.push(action.payload);
			state.createPlayListProgress = false;
		},
		createPlayListFailure: (state) => {
			state.error = true;
			state.createPlayListProgress = false;
		},

		getPlayListStart: (state) => {
			state.getPlayListProgress = true;
		},
		getPlayListSuccess: (state, action) => {
			state.playlists = action.payload;
			state.getPlayListProgress = false;
		},
		getPlayListFailure: (state) => {
			state.error = true;
			state.getPlayListProgress = false;
		},

		addSongStart: (state) => {
			state.addSongProgress = true;
		},
		addSongSuccess: (state, action) => {
			const index = state.playlists.indexOf(action.payload._id);
			state.playlists[index] = action.payload;
			state.addSongProgress = false;
		},
		addSongFailure: (state) => {
			state.error = true;
			state.addSongProgress = false;
		},

		removeSongStart: (state) => {
			state.removeSongProgress = true;
		},
		removeSongSuccess: (state, action) => {
			const index = state.playlists.indexOf(action.payload._id);
			state.playlists[index] = action.payload;
			state.removeSongProgress = false;
		},
		removeSongFailure: (state) => {
			state.error = true;
			state.removeSongProgress = false;
		},

		deletePlayListStart: (state) => {
			state.deletePlayListProgress = true;
		},
		deletePlayListSuccess: (state, action) => {
			state.playlists = state.playlists.filter(
				(playlist) => playlist._id !== action.payload
			);
			state.deletePlayListProgress = false;
		},
		deletePlayListFailure: (state) => {
			state.error = true;
			state.deletePlayListProgress = false;
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
