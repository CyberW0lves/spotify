import { useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { likeSong } from "../../redux/userSlice/apiCalls";
import { IconButton, CircularProgress } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "./styles.module.scss";

const Like = ({ songId }) => {
	const { user, likeSongProgress } = useSelector((state) => state.user);
	const [progress, setProgress] = useState(false);
	const dispatch = useDispatch();

	const handleLikeSong = async (songId) => {
		setProgress(true);
		const res = await likeSong(songId, dispatch);
		res && setProgress(false);
	};

	return (
		<IconButton
			className={styles.like_btn}
			onClick={() => handleLikeSong(songId)}
		>
			{likeSongProgress && progress ? (
				<CircularProgress style={{ color: "#1ed760" }} size="2rem" />
			) : (
				<Fragment>
					{user && user.likedSongs.indexOf(songId) === -1 ? (
						<FavoriteBorderIcon className={styles.like_outlined} />
					) : (
						<FavoriteIcon className={styles.like_filled} />
					)}
				</Fragment>
			)}
		</IconButton>
	);
};

export default Like;
