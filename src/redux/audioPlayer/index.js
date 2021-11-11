import { createSlice } from "@reduxjs/toolkit";

export const audioPlayer = createSlice({
	name: "audioPlayer",
	initialState: {
		currentSong: null,
	},
	reducers: {
		setCurrentSong: (state, action) => {
			state.currentSong = action.payload;
		},
	},
});

export const { setCurrentSong } = audioPlayer.actions;

export default audioPlayer.reducer;
