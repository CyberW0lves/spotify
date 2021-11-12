import { CircularProgress, Button } from "@mui/material";
import styles from "./styles.module.scss";

const CustomButton = ({ label, isFetching, ...rest }) => {
	return (
		<Button {...rest} className={styles.primary_btn}>
			{isFetching ? (
				<CircularProgress size={25} style={{ color: "black" }} />
			) : (
				`${label}`
			)}
		</Button>
	);
};

export default CustomButton;
