import styles from "./styles.module.scss";

const Select = ({ label, options, handleInputState, placeholder, ...rest }) => {
	const handleChange = ({ currentTarget: input }) => {
		handleInputState(input.name, input.value);
	};

	return (
		<div className={styles.container}>
			<p className={styles.label}>{label}</p>
			<select onChange={handleChange} {...rest} className={styles.select}>
				<option style={{ display: "none" }} value="">
					{placeholder}
				</option>
				{options.map((option, index) => (
					<option key={index} value={option.value}>
						{option.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
