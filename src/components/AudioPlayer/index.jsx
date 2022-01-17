import Like from "../Like";
import { IconButton } from "@mui/material";
import peaches from "../../images/peaches.jpg";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import styles from "./styles.module.scss";

const AudioPlayer = () => {
	return (
		<div className={styles.audio_player}>
			<div className={styles.left}>
				<img src={peaches} alt="song_img" />
				<div className={styles.song_info}>
					<p className={styles.song_name}>Peaches</p>
					<p className={styles.song_artist}>Justin Bieber</p>
				</div>
			</div>
			<div className={styles.center}>
				<div className={styles.audio_controls}>
					<IconButton className={styles.prev}>
						<SkipPreviousIcon />
					</IconButton>
					<IconButton className={styles.play}>
						<PlayArrowIcon />
					</IconButton>
					<IconButton className={styles.next}>
						<SkipNextIcon />
					</IconButton>
				</div>
				<div className={styles.progress_container}>
					<p>0.30</p>
					<input
						type="range"
						step="1"
						min="0"
						max={4}
						className={styles.progress}
					/>
					<audio></audio>
					<p>4.00</p>
				</div>
			</div>
			<div className={styles.right}>
				<Like />
			</div>
		</div>
	);
};

export default AudioPlayer;
