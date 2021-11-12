const router = require("express").Router();
const { PlayList, validate } = require("../models/playList");
const { Song } = require("../models/song");
const { User } = require("../models/user");
const auth = require("../middleware/auth");
const validateObjectId = require("../middleware/validateObjectId");
const Joi = require("joi");

router.post("/", auth, async (req, res) => {
	const { error } = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const user = await User.findById(req.user._id);
	const playList = await PlayList({ ...req.body, user: user._id }).save();
	user.playlists.push(playList._id);
	await user.save();

	res.status(201).send(playList);
});

router.put("/edit/:id", [validateObjectId, auth], async (req, res) => {
	const schema = Joi.object({
		name: Joi.string().required(),
		desc: Joi.string().allow(""),
		img: Joi.string().allow(""),
	});
	const { error } = schema.validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const playlist = await PlayList.findById(req.params.id);
	if (!playlist) return res.status(404).send("Playlist not found");

	const user = await User.findById(req.user._id);
	if (!user._id.equals(playlist.user))
		return res.status(403).send("User don't have access to edit!");

	playlist.name = req.body.name;
	playlist.desc = req.body.desc;
	playlist.img = req.body.img;
	await playlist.save();

	res.status(200).send("success");
});

router.put("/add-song", auth, async (req, res) => {
	const schema = Joi.object({
		playlistId: Joi.string().required(),
		songId: Joi.string().required(),
	});
	const { error } = schema.validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const user = await User.findById(req.user._id);
	const playlist = await PlayList.findById(req.body.playlistId);
	if (!user._id.equals(playlist.user))
		return res.status(403).send("User don't have access to add!");

	if (playlist.songs.indexOf(req.body.songId) === -1) {
		playlist.songs.push(req.body.songId);
	}
	await playlist.save();
	res.status(200).send(playlist);
});

router.put("/remove-song", auth, async (req, res) => {
	const schema = Joi.object({
		playlistId: Joi.string().required(),
		songId: Joi.string().required(),
	});
	const { error } = schema.validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const user = await User.findById(req.user._id);
	const playlist = await PlayList.findById(req.body.playlistId);
	if (!user._id.equals(playlist.user))
		return res.status(403).send("User don't have access to Remove!");

	const index = playlist.songs.indexOf(req.body.songId);
	playlist.songs.splice(index, 1);
	await playlist.save();
	res.status(200).send(playlist);
});

router.get("/favourite", auth, async (req, res) => {
	const user = await User.findById(req.user._id);
	const playlists = await PlayList.find({ _id: user.playlists });
	res.status(200).send(playlists);
});

router.get("/random", auth, async (req, res) => {
	const playlists = await PlayList.aggregate([{ $sample: { size: 10 } }]);
	res.status(200).send(playlists);
});

router.get("/:id", auth, async (req, res) => {
	const playlist = await PlayList.findById(req.params.id);
	if (!playlist) return res.status(404).send("not found");

	const songs = await Song.find({ _id: playlist.songs });
	res.status(200).send({ playlist, songs });
});

router.get("/", auth, async (req, res) => {
	const playlists = await PlayList.find();
	res.status(200).send(playlists);
});

router.delete("/:id", auth, async (req, res) => {
	const user = await User.findById(req.user._id);
	const playlist = await PlayList.findById(req.params.id);
	if (!user._id.equals(playlist.user))
		return res.status(403).send("User don't have access to delete!");

	const index = user.playlists.indexOf(req.params.id);
	user.playlists.splice(index, 1);
	await user.save();
	await playlist.remove();
	res.status(200).send("Removed from library");
});

module.exports = router;
