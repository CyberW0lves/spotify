import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserTable from "../../components/Tables/UserTable";
import SongTable from "../../components/Tables/SongTable";
import { Paper } from "@mui/material";
import Button from "../../components/Button";
import PersonIcon from "@mui/icons-material/Person";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import styles from "./styles.module.scss";

const Dashboard = () => {
	const { users } = useSelector((state) => state.users);
	const { songs } = useSelector((state) => state.songs);
	const { playlists } = useSelector((state) => state.playlists);

	return (
		<div className={styles.container}>
			<div className={styles.head}>
				<Paper className={styles.card}>
					<PersonIcon />
					<span>Users</span>
					<p>{users && users.length}</p>
				</Paper>
				<Paper className={styles.card}>
					<MusicNoteIcon />
					<span>Songs</span>
					<p>{songs && songs.length}</p>
				</Paper>
				<Paper className={styles.card}>
					<LibraryMusicIcon />
					<span>Playlists</span>
					<p>{playlists && playlists.length}</p>
				</Paper>
			</div>
			<div className={styles.body}>
				<div className={styles.table_wrap}>
					<h1>
						<PeopleAltIcon /> Recent users
					</h1>
					<UserTable users={users} />
					<Link to="/users">
						<Button style={{ margin: "1rem 0 0 auto" }} label="View More" />
					</Link>
				</div>
				<div className={styles.table_wrap}>
					<h1>
						<MusicNoteIcon /> Recent songs
					</h1>
					<SongTable songs={songs} />
					<Link to="/songs">
						<Button style={{ margin: "1rem 0 0 auto" }} label="View More" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
