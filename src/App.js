import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import NotFound from "./components/NotFound";

const App = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/signup" component={SignUp} />
			<Route path="/login" component={Login} />
			<Route path="/not-found" component={NotFound} />
			<Redirect to="/not-found" />
		</Switch>
	);
};

export default App;
