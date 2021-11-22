import axiosInstance from "../axiosInstance";
import * as actions from "./index";

export const getAllPlaylists = async (dispatch) => {
	dispatch(actions.getAllPlaylistsStart());
	try {
		const { data } = await axiosInstance.get("/playlists");
		dispatch(actions.getAllPlaylistsSuccess(data.data));
		return true;
	} catch (error) {
		dispatch(actions.getAllPlaylistsFailure());
		return false;
	}
};
