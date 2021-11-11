import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import Song from "../../components/Song";
import axiosInstance from "../../redux/axiosInstance";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import styles from "./styles.module.scss";
import likeImg from "../../images/like.jpg";

const LikedSongs = () => {
	const [songs, setSongs] = useState([]);
	const { user } = useSelector((state) => state.user);

	const getLikedSongs = async () => {
		try {
			const url = process.env.REACT_APP_API_URL + `/songs/like`;
			const { data } = await axiosInstance.get(url);
			setSongs(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getLikedSongs();
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.head}>
				<div className={styles.head_gradient}></div>
				<img src={likeImg} alt="like songs" />
				<div className={styles.playlist_info}>
					<p>Playlist</p>
					<h1>Liked Songs</h1>
					<span>By {user && user.name}</span>
				</div>
			</div>
			<div className={styles.body}>
				<div className={styles.body_nav}>
					<div className={styles.left}>
						<span>#</span>
						<p>Title</p>
					</div>
					<div className={styles.center}>
						<p>Artist</p>
					</div>
					<div className={styles.right}>
						<AccessTimeIcon />
					</div>
				</div>
				{songs.map((song) => (
					<Fragment key={song._id}>
						{user.likedSongs.indexOf(song._id) !== -1 && <Song song={song} />}
					</Fragment>
				))}
			</div>
		</div>
	);
};

export default LikedSongs;
