import { Link } from "react-router-dom";
import Playlists from "../../components/Playlists";
import playlistImg from "../../images/rock.jpg";
import styles from "./styles.module.scss";

const playlists = [
	{ _id: 1, img: playlistImg, name: "Today's Top Songs", desc: "By Jahangeer" },
];

const Library = () => {
	return (
		<div className={styles.container}>
			<h1>Playlists</h1>
			<div className={styles.playlists_container}>
				<Link to="/collection/tracks">
					<div className={styles.liked_songs}>
						<h1>Liked Songs</h1>
						<p>1 Liked Songs</p>
					</div>
				</Link>
				<Playlists playlists={playlists} />
			</div>
		</div>
	);
};

export default Library;
