import { useDispatch, useSelector } from "react-redux";
import { likeSong } from "../../redux/userSlice/apiCalls";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "./styles.module.scss";

const Like = ({ songId }) => {
	const { user } = useSelector((state) => state.user);
	const dispatch = useDispatch();

	return (
		<IconButton
			className={styles.like_btn}
			onClick={() => likeSong(songId, dispatch)}
		>
			{user && user.likedSongs.indexOf(songId) === -1 ? (
				<FavoriteBorderIcon className={styles.like_outlined} />
			) : (
				<FavoriteIcon className={styles.like_filled} />
			)}
		</IconButton>
	);
};

export default Like;
