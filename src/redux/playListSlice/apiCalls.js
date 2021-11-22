import axiosInstance from "../axiosInstance";
import { toast } from "react-toastify";
import * as actions from "./index";

const apiUrl = process.env.REACT_APP_API_URL + "/playlists";

export const createPlayList = async (payload, dispatch) => {
	dispatch(actions.createPlayListStart());
	try {
		const { data } = await axiosInstance.post(apiUrl, payload);
		dispatch(actions.createPlayListSuccess(data.data));
		return true;
	} catch (error) {
		dispatch(actions.createPlayListFailure());
		return false;
	}
};

export const addSongToPlaylist = async (payload, dispatch) => {
	dispatch(actions.addSongStart());
	try {
		const { data } = await axiosInstance.put(apiUrl + "/add-song", payload);
		dispatch(actions.addSongSuccess(data.data));
		toast.success(data.message);
		return true;
	} catch (error) {
		dispatch(actions.addSongFailure());
		return false;
	}
};

export const removeSongFromPlaylist = async (payload, dispatch) => {
	dispatch(actions.removeSongStart());
	try {
		const { data } = await axiosInstance.put(apiUrl + "/remove-song", payload);
		dispatch(actions.removeSongSuccess(data.data));
		toast.success(data.message);
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
		dispatch(actions.getPlayListSuccess(data.data));
		return true;
	} catch (error) {
		dispatch(actions.getPlayListFailure());
		return false;
	}
};

export const deletePlayList = async (id, dispatch) => {
	dispatch(actions.deletePlayListStart());
	try {
		const { data } = await axiosInstance.delete(apiUrl + "/" + id);
		dispatch(actions.deletePlayListSuccess(id));
		toast.success(data.message);
		return true;
	} catch (error) {
		dispatch(actions.deletePlayListFailure());
		return false;
	}
};
