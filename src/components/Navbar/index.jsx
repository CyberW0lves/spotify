import { useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styles from "./styles.module.scss";

const Navbar = () => {
	const user = useSelector((state) => state.auth.user);
	return (
		<div className={styles.navbar}>
			<div className={styles.left}>
				<p>HI {user.name}</p>
				<AccountCircleIcon />
			</div>
		</div>
	);
};

export default Navbar;
