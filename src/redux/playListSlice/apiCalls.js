import axiosInstance from "../axiosInstance";
import { toast } from "react-toastify";
import * as actions from "./index";

const apiUrl = process.env.REACT_APP_API_URL + "/playlists";

export const createPlayList = async (data, dispatch) => {
	dispatch(actions.createPlayListStart());
	try {
		const { data: res } = await axiosInstance.post(apiUrl, data);
		dispatch(actions.createPlayListSuccess(res));
	} catch (error) {
		dispatch(actions.createPlayListFailure());
	}
};

export const addSongToPlaylist = async (payload, dispatch) => {
	dispatch(actions.addSongStart());
	try {
		const { data } = await axiosInstance.put(apiUrl + "/add-song", payload);
		dispatch(actions.addSongSuccess(data));
		toast.success("Added to playlist");
	} catch (error) {
		dispatch(actions.addSongFailure());
	}
};

export const removeSongFromPlaylist = async (payload, dispatch) => {
	dispatch(actions.removeSongStart());
	try {
		const { data } = await axiosInstance.put(apiUrl + "/remove-song", payload);
		dispatch(actions.removeSongSuccess(data));
		toast.success("Removed from playlist");
		return true;
	} catch (error) {
		dispatch(actions.removeSongFailure());
		return false;
	}
};

export const getPlayLists = async (dispatch) => {
	dispatch(actions.getPlayListStart());
	try {
		const { data } = await axiosInstance.get(apiUrl + "/favourite");
		dispatch(actions.getPlayListSuccess(data));
	} catch (error) {
		dispatch(actions.getPlayListFailure());
	}
};

export const deletePlayList = async (id, dispatch) => {
	dispatch(actions.deletePlayListStart());
	try {
		const { data } = await axiosInstance.delete(apiUrl + "/" + id);
		dispatch(actions.deletePlayListSuccess(id));
		toast.success(data);
		return true;
	} catch (error) {
		dispatch(actions.deletePlayListFailure());
		return false;
	}
};
