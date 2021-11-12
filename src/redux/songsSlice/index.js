import { createSlice } from "@reduxjs/toolkit";

export const songsSlice = createSlice({
	name: "songs",
	initialState: {
		songs: [],
		isFetching: false,
		error: false,
	},
	reducers: {
		createSongStart: (state) => {
			state.isFetching = true;
		},
		createSongSuccess: (state, action) => {
			state.songs.push(action.payload);
			state.isFetching = false;
		},
		createSongFailure: (state) => {
			state.error = true;
			state.isFetching = false;
		},

		getAllSongsStart: (state) => {
			state.isFetching = true;
		},
		getAllSongsSuccess: (state, action) => {
			state.songs = action.payload;
			state.isFetching = false;
		},
		getAllSongsFailure: (state) => {
			state.error = true;
			state.isFetching = false;
		},

		updateSongStart: (state) => {
			state.isFetching = true;
		},
		updateSongSuccess: (state, action) => {
			const index = state.songs.findIndex(
				(song) => song._id === action.payload._id
			);
			state.songs[index] = action.payload;
			state.isFetching = false;
		},
		updateSongFailure: (state) => {
			state.error = true;
			state.isFetching = false;
		},

		deleteSongStart: (state) => {
			state.isFetching = true;
		},
		deleteSongSuccess: (state, action) => {
			state.songs = state.songs.filter((song) => song._id !== action.payload);
			state.isFetching = false;
		},
		deleteSongFailure: (state) => {
			state.error = true;
			state.isFetching = false;
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
