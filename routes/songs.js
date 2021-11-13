const router = require("express").Router();
const { User } = require("../models/user");
const { Song, validate } = require("../models/song");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const validateObjectId = require("../middleware/validateObjectId");

// Create song
router.post("/", admin, async (req, res) => {
	const { error } = validate(req.body);
	if (error) res.status(400).send(error.details[0].message);

	const data = await Song(req.body).save();
	res.status(201).send(data);
});

// Get all songs
router.get("/", async (req, res) => {
	const songs = await Song.find();
	res.status(200).send(songs);
});

// Update song
router.put("/:id", [validateObjectId, admin], async (req, res) => {
	const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});
	res.send(song);
});

// Delete song by ID
router.delete("/:id", [validateObjectId, admin], async (req, res) => {
	await Song.findByIdAndDelete(req.params.id);
	res.status(200).send("Song deleted sucessfully");
});

// Like song
router.put("/like/:id", [validateObjectId, auth], async (req, res) => {
	let message = "";
	const song = await Song.findById(req.params.id);
	if (!song) return res.status(400).send("song does not exist");

	const user = await User.findById(req.user._id);
	const index = user.likedSongs.indexOf(song._id);
	if (index === -1) {
		user.likedSongs.push(song._id);
		message = "Added to your liked songs";
	} else {
		user.likedSongs.splice(index, 1);
		message = "Removed from your liked songs";
	}

	await user.save();
	res.status(200).send(message);
});

// Get liked songs
router.get("/like", auth, async (req, res) => {
	const user = await User.findById(req.user._id);
	const songs = await Song.find({ _id: user.likedSongs });
	res.status(200).send(songs);
});

module.exports = router;
