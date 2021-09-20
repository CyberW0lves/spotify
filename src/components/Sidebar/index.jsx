import React from "react";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import PeopleIcon from "@material-ui/icons/People";
import styles from "./styles.module.scss";

const options = [
	{ name: "dashboard", path: "/", icon: <DashboardIcon /> },
	{ name: "songs", path: "/songs", icon: <MusicNoteIcon /> },
	{ name: "users", path: "/users", icon: <PeopleIcon /> },
];

const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<h1 className={styles.logo}>admin panel</h1>
			<ul>
				{options.map((option) => (
					<li key={option.name}>
						<NavLink
							exact
							to={option.path}
							activeClassName={styles.sidebar_active}
						>
							{option.icon}
							<span>{option.name}</span>
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
