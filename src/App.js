import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import NotFound from "./components/NotFound";

const App = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/sign-up" component={SignUp} />
			<Route path="/log-in" component={LogIn} />
			<Route path="/not-found" component={NotFound} />
			<Redirect to="/not-found" />
		</Switch>
	);
};

export default App;
