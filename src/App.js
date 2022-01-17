import { Fragment } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AudioPlayer from "./components/AudioPlayer";
import Playlist from "./pages/Playlist";
import Search from "./pages/Search";
import LikedSongs from "./pages/LikedSongs";
import Profile from "./pages/Profile";

const App = () => {
	const user = true;
	const location = useLocation();

	return (
		<Fragment>
			{user &&
				location.pathname !== "/login" &&
				location.pathname !== "/" &&
				location.pathname !== "/signup" &&
				location.pathname !== "/not-found" && (
					<Fragment>
						<Navbar />
						<Sidebar />
						<AudioPlayer />
					</Fragment>
				)}
			<Switch>
				<Route exact path="/" component={Main} />
				<PrivateRoute exact user={user} path="/home" component={Home} />
				<PrivateRoute
					exact
					user={user}
					path="/collection/tracks"
					component={LikedSongs}
				/>
				<PrivateRoute
					exact
					user={user}
					path="/collection/playlists"
					component={Library}
				/>
				<PrivateRoute exact user={user} path="/search" component={Search} />
				<PrivateRoute
					exact
					user={user}
					path="/playlist/:id"
					component={Playlist}
				/>
				<PrivateRoute exact user={user} path="/me" component={Profile} />
				{user && <Redirect from="/signup" to="/home" />}
				{user && <Redirect from="/login" to="/home" />}
				<Route path="/signup" component={SignUp} />
				<Route path="/login" component={Login} />
				<Route path="/not-found" component={NotFound} />
				<Redirect to="/not-found" />
			</Switch>
		</Fragment>
	);
};

export default App;
