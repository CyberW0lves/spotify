import { useHistory } from "react-router-dom";
import styles from "./styles.module.scss";

const NotFound = () => {
	const history = useHistory();

	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<div className={styles.main}>
					<h1>404s and heartbreaks</h1>
					<p>
						We couldn’t find the page you were looking for. Maybe our FAQ or
						Community can help?
					</p>
					<span onClick={() => history.push("/home")}>Go Back Home</span>
				</div>
			</div>
			<div className={styles.right}>
				<img src="./images/record.svg" alt="record" className={styles.record} />
				<img
					src="./images/record-arm.svg"
					alt="record-arm"
					className={styles.record_arm}
				/>
			</div>
		</div>
	);
};

export default NotFound;
