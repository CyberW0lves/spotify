import { useEffect, useState } from "react";
import axiosInstance from "../../redux/axiosInstance";
import Playlist from "../../components/Playlist";
import styles from "./styles.module.scss";

const Home = () => {
	const [playlists, setPlaylists] = useState([]);

	const getRandomPlaylists = async () => {
		const url = process.env.REACT_APP_API_URL + "/playlists/random";
		const { data } = await axiosInstance.get(url);
		const newarray = data.splice(0, 4);
		setPlaylists(newarray);
	};

	useEffect(() => {
		getRandomPlaylists();
	}, []);

	return (
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
	);
};

export default Home;
