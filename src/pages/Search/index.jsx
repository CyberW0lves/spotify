import { Fragment, useState } from "react";
import Song from "../../components/Song";
import Playlists from "../../components/Playlists";
import { IconButton } from "@mui/material";
import peaches from "../../images/peaches.jpg";
import playlistImg from "../../images/rock.jpg";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import styles from "./styles.module.scss";

const playlists = [
	{ _id: 1, img: playlistImg, name: "Today's Top Songs", desc: "By Jahangeer" },
];

const songs = [
	{ _id: 1, img: peaches, name: "Today's Top Songs", artist: "By Jahangeer" },
];

const Search = () => {
	const [search, setSearch] = useState("");
	const handleSearch = async ({ currentTarget: input }) => {
		setSearch(input.value);
	};

	return (
		<div className={styles.container}>
			<div className={styles.search_input_container}>
				<IconButton>
					<SearchIcon />
				</IconButton>
				<input
					type="text"
					placeholder="Search for songs and playlists"
					onChange={handleSearch}
					value={search}
				/>
				<IconButton onClick={() => setSearch("")}>
					<ClearIcon />
				</IconButton>
			</div>
			<div className={styles.results_container}>
				<div className={styles.songs_container}>
					{songs.map((song) => (
						<Fragment key={song._id}>
							<Song song={song} />
						</Fragment>
					))}
				</div>
				<div className={styles.playlists_container}>
					<Playlists playlists={playlists} />
				</div>
			</div>
		</div>
	);
};

export default Search;
