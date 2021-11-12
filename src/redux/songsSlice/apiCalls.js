import axiosInstance from "../axiosInstance";
import { toast } from "react-toastify";
import * as actions from "./index";

export const createSong = async (song, dispatch) => {
	dispatch(actions.createSongStart());
	try {
		const { data } = await axiosInstance.post("/songs", song);
		dispatch(actions.createSongSuccess(data.data));
		toast.success(data.message);
	} catch (error) {
		dispatch(actions.createSongFailure());
	}
};

export const getAllSongs = async (dispatch) => {
	dispatch(actions.getAllSongsStart());
	try {
		const { data } = await axiosInstance.get("/songs");
		dispatch(actions.getAllSongsSuccess(data));
	} catch (error) {
		dispatch(actions.getAllSongsFailure());
	}
};

export const updateSong = async (id, song, dispatch) => {
	dispatch(actions.updateSongStart());
	try {
		const { data } = await axiosInstance.put(`/songs/${id}`, song);
		dispatch(actions.updateSongSuccess(data));
	} catch (error) {
		dispatch(actions.updateSongFailure());
	}
};

export const deleteSong = async (id, dispatch) => {
	dispatch(actions.deleteSongStart());
	try {
		const { data } = await axiosInstance.delete(`/songs/${id}`);
		dispatch(actions.deleteSongSuccess(id));
		toast.success(data);
	} catch (error) {
		dispatch(actions.deleteSongFailure());
	}
};
