import { Fragment } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Songs from "./components/Songs";
import Users from "./components/Users";
import Login from "./components/Forms/Login";
import { ThemeProvider, createTheme } from "@material-ui/core";
import "./App.scss";

const theme = createTheme({
	palette: {
		primary: {
			main: "#8abef5",
		},
	},
});

function App() {
	const location = useLocation();
	console.log(location.pathname);

	return (
		<ThemeProvider theme={theme}>
			{location.pathname !== "/login" && (
				<Fragment>
					<Navbar />
					<Sidebar />
				</Fragment>
			)}
			<div className="container">
				<Switch>
					<Route path="/" exact component={Dashboard} />
					<Route path="/songs" component={Songs} />
					<Route path="/users" component={Users} />
					<Route path="/login" component={Login} />
				</Switch>
			</div>
		</ThemeProvider>
	);
}

export default App;
