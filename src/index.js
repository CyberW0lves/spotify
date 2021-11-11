import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { ToastContainer } from "react-toastify";
import store from "./redux/store";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import "./global.css";

let persistor = persistStore(store);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<BrowserRouter>
					<App />
					<ToastContainer
						position="bottom-center"
						autoClose={2000}
						hideProgressBar={true}
						closeButton={false}
						theme="colored"
						icon={false}
					/>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
