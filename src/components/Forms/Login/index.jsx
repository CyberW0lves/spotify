import React from "react";
import Input from "../../Inputs/Input";
import Joi from "joi";
import passwordComplexity from "joi-password-complexity";
import styles from "./styles.module.scss";

const Login = () => {
	const [data, setData] = React.useState({
		email: "",
		password: "",
	});

	const [errors, setErrors] = React.useState({});

	const schema = {
		email: Joi.string().email({ tlds: false }).required(),
		password: passwordComplexity().required(),
	};

	const handleInputState = (name, value) => {
		setData({ ...data, [name]: value });
	};

	const handleErrorState = (name, value) => {
		setErrors({ ...errors, [name]: value });
	};

	return (
		<div className={styles.container}>
			<Input
				name="email"
				value={data.email}
				label="Email"
				handleInputState={handleInputState}
				handleErrorState={handleErrorState}
				error={errors.email}
				schema={schema.email}
			/>
		</div>
	);
};

export default Login;
