import { toast } from "react-toastify";
import axiosInstance from "../axiosInstance";
import * as actions from "./index";

const apiUrl = process.env.REACT_APP_API_URL;

export const getUser = async (userId, dispatch) => {
	dispatch(actions.getUserStart());
	try {
		const { data } = await axiosInstance.get(apiUrl + `/users/${userId}`);
		dispatch(actions.getUserSuccess(data));
	} catch (error) {
		dispatch(actions.getUserFailure());
	}
};

export const updateUser = async (payload, dispatch) => {
	dispatch(actions.updateUserStart());
	try {
		const url = apiUrl + `/users/${payload.id}`;
		const { data } = await axiosInstance.put(url, payload.data);
		dispatch(actions.updateUserSuccess(data));
		toast.success("Updated successfully");
		return true;
	} catch (error) {
		dispatch(actions.getUserFailure());
		return false;
	}
};

export const likeSong = async (songId, dispatch) => {
	dispatch(actions.likeSongStart());
	try {
		const { data } = await axiosInstance.put(apiUrl + `/songs/like/${songId}`);
		dispatch(actions.likeSongSuccess(songId));
		toast.success(data);
	} catch (error) {
		dispatch(actions.likeSongFailure());
	}
};
