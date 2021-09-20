import { TextField } from "@material-ui/core";

const Input = ({ error, ...rest }) => {
	return (
		<>
			{error ? (
				<TextField
					size="small"
					error
					helperText={error}
					variant="outlined"
					{...rest}
				/>
			) : (
				<TextField size="small" variant="outlined" {...rest} />
			)}
		</>
	);
};

export default Input;
