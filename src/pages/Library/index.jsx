import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Playlist from "../../components/Playlist";
import styles from "./styles.module.scss";

const Library = () => {
	const { playlists } = useSelector((state) => state.playlists);
	const { user } = useSelector((state) => state.user);
	return (
		<div className={styles.container}>
			<h1>Playlists</h1>
			<div className={styles.playlists_container}>
				<Link to="/collection/tracks">
					<div className={styles.liked_songs}>
						<h1>Liked Songs</h1>
						<p>{user.likedSongs.length} Liked Songs</p>
					</div>
				</Link>
				<Playlist playlists={playlists} />
			</div>
		</div>
	);
};

export default Library;
