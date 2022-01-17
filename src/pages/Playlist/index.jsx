import { useState, Fragment } from "react";
import Song from "../../components/Song";
import PlaylistModel from "../../components/PlaylistModel";
import { IconButton } from "@mui/material";
import playlistImg from "../../images/rock.jpg";
import peaches from "../../images/peaches.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./styles.module.scss";

const playlist = {
	_id: 1,
	img: playlistImg,
	name: "Today's Top Songs",
	desc: "By Jahangeer",
};

const songs = [
	{ _id: 1, img: peaches, name: "Peaches", artist: "Justin Bieber" },
];

const Playlist = () => {
	const [model, setModel] = useState(false);

	return (
		<div className={styles.container}>
			<div className={styles.head}>
				<div className={styles.head_gradient}></div>
				{playlist.img === "" ? (
					<img
						src="https://static.thenounproject.com/png/17849-200.png"
						alt={playlist.name}
						style={{ background: "#919496" }}
					/>
				) : (
					<img src={playlist.img} alt={playlist.name} />
				)}

				<div className={styles.playlist_info}>
					<p>Playlist</p>
					<h1>{playlist.name}</h1>
					<span>{playlist.desc}</span>
				</div>

				<div className={styles.actions_container}>
					<IconButton onClick={() => setModel(true)}>
						<EditIcon />
					</IconButton>
					<IconButton>
						<DeleteIcon />
					</IconButton>
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
						<Song song={song} playlist={playlist} />
					</Fragment>
				))}
			</div>
			{model && (
				<PlaylistModel closeModel={() => setModel(false)} playlist={playlist} />
			)}
		</div>
	);
};

export default Playlist;
