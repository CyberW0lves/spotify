import React from "react";
import Joi from "joi";
import styles from "./styles.module.scss";

const Input = ({
	label,
	error,
	handleInputState,
	handleErrorState,
	schema,
	...rest
}) => {
	const validateProperty = ({ name, value }) => {
		const obj = { [name]: value };
		const inputSchema = Joi.object({ [name]: schema });
		const { error } = inputSchema.validate(obj);
		return error ? error.details[0].message : "";
	};

	const handleChange = ({ currentTarget: input }) => {
		if (schema) {
			const errorMessage = validateProperty(input);
			if (handleErrorState) handleErrorState(input.name, errorMessage);
		}
		handleInputState(input.name, input.value);
	};

	return (
		<div className={styles.container}>
			<p className={styles.label}>{label}</p>
			<input onChange={handleChange} className={styles.input} {...rest} />
			<p className={styles.error_msg}>{error}</p>
		</div>
	);
};

export default Input;
