import { useState } from "react";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "./styles.module.scss";

const Like = () => {
	const [like, setLike] = useState(false);

	return (
		<IconButton className={styles.like_btn} onClick={() => setLike(!like)}>
			{!like ? (
				<FavoriteBorderIcon className={styles.like_outlined} />
			) : (
				<FavoriteIcon className={styles.like_filled} />
			)}
		</IconButton>
	);
};

export default Like;
