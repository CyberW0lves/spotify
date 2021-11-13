const mongoose = require("mongoose");
const Joi = require("joi");

const songSchema = new mongoose.Schema({
	name: { type: String, required: true },
	artist: { type: String, required: true },
	song: { type: String, required: true },
	img: { type: String, required: true },
	duration: { type: String, required: true },
});

const validate = (song) => {
	const schema = Joi.object({
		name: Joi.string().required(),
		artist: Joi.string().required(),
		song: Joi.string().required(),
		img: Joi.string().required(),
		duration: Joi.number().required(),
	});
	return schema.validate(song);
};

const Song = mongoose.model("song", songSchema);

module.exports = { Song, validate };
