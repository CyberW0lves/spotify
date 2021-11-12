import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { logout } from "../../redux/authSlice";
import { setCurrentSong } from "../../redux/audioPlayer";
import { ClickAwayListener } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import styles from "./styles.module.scss";

const Navbar = () => {
	const [menu, setMenu] = useState(false);
	const { user } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const history = useHistory();

	const handleLogout = () => {
		dispatch(logout());
		dispatch(setCurrentSong(null));
		window.location = "/login";
	};

	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<div className={styles.icon} onClick={() => history.goBack()}>
					<ArrowBackIosRoundedIcon />
				</div>
				<div className={styles.icon} onClick={() => history.goForward()}>
					<ArrowForwardIosRoundedIcon />
				</div>
			</div>
			<div className={styles.right}>
				<div
					style={{ backgroundColor: `${menu ? "#282828" : "#000"}` }}
					className={styles.profile_menu}
					onClick={() => setMenu(!menu)}
				>
					<AccountCircleIcon />
					<p>{user && user.name}</p>
					{menu ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
				</div>
			</div>
			{menu && (
				<ClickAwayListener onClickAway={() => setMenu(false)}>
					<div className={styles.menu} onClick={() => setMenu(false)}>
						<Link to="/me">
							<div className={styles.options}>
								<p>Profile</p>
								<PersonIcon />
							</div>
						</Link>
						<div className={styles.options}>
							<p>Settings</p>
							<SettingsIcon />
						</div>
						<div className={styles.options} onClick={handleLogout}>
							<p>Logout</p>
							<LogoutIcon />
						</div>
					</div>
				</ClickAwayListener>
			)}
		</div>
	);
};

export default Navbar;
