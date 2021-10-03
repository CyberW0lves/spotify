import { Switch, Route } from "react-router-dom";
import Main from "./components/Main";

const App = () => {
	return (
		<Switch>
			<Route path="/" component={Main} />
		</Switch>
	);
};

export default App;
