import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SongTable from "../../components/Tables/SongTable";
import Button from "../../components/Button";
import AddIcon from "@mui/icons-material/Add";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import styles from "./styles.module.scss";

const Songs = () => {
	const { songs } = useSelector((state) => state.songs);

	return (
		<div className={styles.container}>
			<div className={styles.head}>
				<h1>
					songs <MusicNoteIcon />
				</h1>
				<Link to="/songs/new">
					<Button startIcon={<AddIcon />} label="Add New Song" />
				</Link>
			</div>
			<SongTable songs={songs} />
		</div>
	);
};

export default Songs;
