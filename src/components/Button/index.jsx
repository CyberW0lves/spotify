import styles from "./styles.module.scss";

const Button = ({ label, ...rest }) => {
	return (
		<button {...rest} className={styles.primary_btn}>
			{label}
		</button>
	);
};

export default Button;
