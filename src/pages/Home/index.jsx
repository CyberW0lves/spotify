import { Fragment, useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import axiosInstance from "../../redux/axiosInstance";
import Playlist from "../../components/Playlist";
import styles from "./styles.module.scss";

const Home = () => {
	const [playlists, setPlaylists] = useState([]);
	const [isFetching, setIsFetching] = useState(false);

	const getRandomPlaylists = async () => {
		try {
			setIsFetching(true);
			const url = process.env.REACT_APP_API_URL + "/playlists/random";
			const { data } = await axiosInstance.get(url);
			const newarray = data.splice(0, 4);
			setPlaylists(newarray);
			setIsFetching(false);
		} catch (error) {
			setIsFetching(false);
		}
	};

	useEffect(() => {
		getRandomPlaylists();
	}, []);

	return (
		<Fragment>
			{isFetching ? (
				<div className={styles.progress_container}>
					<CircularProgress style={{ color: "#1ed760" }} size="5rem" />
				</div>
			) : (
				<div className={styles.container}>
					<h1>Good afternoon</h1>
					<div className={styles.playlists_container}>
						<Playlist playlists={playlists} />
					</div>
					<h1>Just the hits</h1>
					<div className={styles.playlists_container}>
						<Playlist playlists={playlists} />
					</div>
					<h1>Soundtrack your home </h1>
					<div className={styles.playlists_container}>
						<Playlist playlists={playlists} />
					</div>
				</div>
			)}
		</Fragment>
	);
};

export default Home;
