import axios from "axios";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import { loginStart, loginSuccess, loginFailure } from "./index";

const apiUrl = process.env.REACT_APP_API_URL + "/login";

export const login = async (user, dispatch) => {
	dispatch(loginStart());
	try {
		const url = apiUrl;
		const { data } = await axios.post(url, user);

		const decodeData = jwt_decode(data);
		dispatch(loginSuccess({ ...decodeData, token: data }));
		window.location = "/home";
		toast.success("Signing in please wait...");
	} catch (error) {
		dispatch(loginFailure());
		if (
			error.response &&
			error.response.status >= 400 &&
			error.response.status < 500
		) {
			toast.error(error.response.data);
		} else {
			console.log(error);
			toast.error("Something went wrong!");
		}
	}
};
