import { createSlice } from "@reduxjs/toolkit";

export const playlistSlice = createSlice({
	name: "playlist",
	initialState: {
		playlists: [],
		isFetching: false,
		error: false,
	},
	reducers: {
		getAllPlaylistsStart: (state) => {
			state.isFetching = true;
		},
		getAllPlaylistsSuccess: (state, action) => {
			state.playlists = action.payload;
			state.isFetching = false;
		},
		getAllPlaylistsFailure: (state) => {
			state.error = true;
			state.isFetching = false;
		},
	},
});

export const {
	getAllPlaylistsStart,
	getAllPlaylistsSuccess,
	getAllPlaylistsFailure,
} = playlistSlice.actions;

export default playlistSlice.reducer;
