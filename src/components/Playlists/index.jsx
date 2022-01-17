import { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const Playlists = ({ playlists }) => {
	return (
		<Fragment>
			{playlists.map((playlist) => (
				<Link key={playlist._id} to={`/playlist/${playlist._id}`}>
					<div className={styles.playlist}>
						{playlist.img === "" ? (
							<img
								src="https://static.thenounproject.com/png/17849-200.png"
								alt={playlist.name}
								style={{ background: "#919496" }}
							/>
						) : (
							<img src={playlist.img} alt={playlist.name} />
						)}
						<p>{playlist.name}</p>
						<span>{playlist.desc}</span>
					</div>
				</Link>
			))}
		</Fragment>
	);
};

export default Playlists;
