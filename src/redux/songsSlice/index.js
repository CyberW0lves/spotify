import { createSlice } from "@reduxjs/toolkit";

export const songsSlice = createSlice({
	name: "songs",
	initialState: {
		songs: [],
		createSongProgress: false,
		getAllSongsProgress: false,
		updateSongProgress: false,
		deleteSongProgress: false,
		error: false,
	},
	reducers: {
		createSongStart: (state) => {
			state.createSongProgress = true;
		},
		createSongSuccess: (state, action) => {
			state.songs.push(action.payload);
			state.createSongProgress = false;
		},
		createSongFailure: (state) => {
			state.error = true;
			state.createSongProgress = false;
		},

		getAllSongsStart: (state) => {
			state.getAllSongsProgress = true;
		},
		getAllSongsSuccess: (state, action) => {
			state.songs = action.payload;
			state.getAllSongsProgress = false;
		},
		getAllSongsFailure: (state) => {
			state.error = true;
			state.getAllSongsProgress = false;
		},

		updateSongStart: (state) => {
			state.updateSongProgress = true;
		},
		updateSongSuccess: (state, action) => {
			const index = state.songs.findIndex(
				(song) => song._id === action.payload._id
			);
			state.songs[index] = action.payload;
			state.updateSongProgress = false;
		},
		updateSongFailure: (state) => {
			state.error = true;
			state.updateSongProgress = false;
		},

		deleteSongStart: (state) => {
			state.deleteSongProgress = true;
		},
		deleteSongSuccess: (state, action) => {
			state.songs = state.songs.filter((song) => song._id !== action.payload);
			state.deleteSongProgress = false;
		},
		deleteSongFailure: (state) => {
			state.error = true;
			state.deleteSongProgress = false;
		},
	},
});

export const {
	createSongStart,
	createSongSuccess,
	createSongFailure,
	getAllSongsStart,
	getAllSongsSuccess,
	getAllSongsFailure,
	updateSongStart,
	updateSongSuccess,
	updateSongFailure,
	deleteSongStart,
	deleteSongSuccess,
	deleteSongFailure,
} = songsSlice.actions;

export default songsSlice.reducer;
