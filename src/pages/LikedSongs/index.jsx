import { Fragment } from "react";
import Song from "../../components/Song";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import styles from "./styles.module.scss";
import likeImg from "../../images/like.jpg";
import peaches from "../../images/peaches.jpg";

const songs = [
	{ _id: 1, img: peaches, name: "Peaches", artist: "Justin Bieber" },
];

const LikedSongs = () => {
	return (
		<div className={styles.container}>
			<div className={styles.head}>
				<div className={styles.head_gradient}></div>
				<img src={likeImg} alt="like songs" />
				<div className={styles.playlist_info}>
					<p>Playlist</p>
					<h1>Liked Songs</h1>
					<span>By Jahangeer</span>
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
						<Song song={song} />
					</Fragment>
				))}
			</div>
		</div>
	);
};

export default LikedSongs;
