import React from "react";
import Joi from "joi";
import Input from "./input";

class Form extends React.Component {
	state = {
		data: {},
		errors: {},
	};

	validateProperty = ({ name, value }) => {
		const obj = { [name]: value };
		const schema = Joi.object({ [name]: this.schema[name] });
		const { error } = schema.validate(obj);
		return error ? error.details[0].message : null;
	};

	handleInputChange = ({ currentTarget: input }) => {
		const data = { ...this.state.data };
		const errors = { ...this.state.errors };

		const errorMessage = this.validateProperty(input);
		if (errorMessage) errors[input.name] = errorMessage;
		else delete errors[input.name];

		data[input.name] = input.value;
		this.setState({ data, errors });
	};

	renderInput = (name, label, type) => {
		const { data, errors } = this.state;
		return (
			<Input
				name={name}
				label={label}
				type={type}
				value={data[name]}
				error={errors[name]}
				onChange={this.handleInputChange}
			/>
		);
	};
}

export default Form;
