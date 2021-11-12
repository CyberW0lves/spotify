const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	const token = req.header("x-auth-token");
	if (!token) return res.status(400).send("Access denied, no token provided.");

	jwt.verify(token, process.env.JWTPRIVATEKEY, (err, validToken) => {
		if (err) {
			return res.status(400).send("invalid token");
		} else {
			req.user = validToken;
			next();
		}
	});
};
