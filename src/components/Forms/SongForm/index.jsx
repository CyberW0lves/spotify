import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { createSong, updateSong } from "../../../redux/songsSlice/apiCalls";
import { toast } from "react-toastify";
import Joi from "joi";
import TextField from "../../Inputs/TextField";
import FileInput from "../../Inputs/FileInput";
import Button from "../../Button";
import { Paper } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ImageIcon from "@mui/icons-material/Image";
import styles from "./styles.module.scss";

const SongForm = () => {
	const [data, setData] = useState({
		name: "",
		artist: "",
		img: null,
		song: null,
		duration: 0,
	});
	const [errors, setErrors] = useState({ name: "", artist: "" });
	const { songs, createSongProgress, updateSongProgress } = useSelector(
		(state) => state.songs
	);
	const { id } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		const song = songs.filter((song) => song._id === id);
		if (id !== "new" && song[0]) {
			setData({
				name: song[0].name,
				artist: song[0].artist,
				song: song[0].song,
				img: song[0].img,
			});
		}
	}, [id, songs]);

	const schema = {
		name: Joi.string().required().label("Name"),
		artist: Joi.string().required().label("Artist"),
		img: Joi.string().required().label("Image"),
		song: Joi.string().required().label("Song"),
		duration: Joi.number().required(),
	};

	const handleInputState = (name, value) => {
		setData((prev) => ({ ...prev, [name]: value }));
	};

	const handleErrorState = (name, value) => {
		setErrors((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { error } = Joi.object(schema).validate(data);
		if (!error) {
			if (id === "new") {
				const res = await createSong(data, dispatch);
				res && history.push("/songs");
			} else {
				const res = await updateSong(id, data, dispatch);
				res && history.push("/songs");
			}
		} else {
			toast.error(error.message);
		}
	};

	return (
		<div className={styles.container}>
			<Paper className={styles.form_container}>
				<h1 className={styles.heading}>
					{id === "new" ? "Add New Song" : "Edit Song"} <MusicNoteIcon />
				</h1>
				<form onSubmit={handleSubmit}>
					<div className={styles.input_container}>
						<TextField
							name="name"
							label="Enter song name"
							handleInputState={handleInputState}
							handleErrorState={handleErrorState}
							schema={schema.name}
							error={errors.name}
							value={data.name}
							required={true}
						/>
					</div>
					<div className={styles.input_container}>
						<TextField
							name="artist"
							label="Artist name"
							handleInputState={handleInputState}
							required={true}
							value={data.artist}
							handleErrorState={handleErrorState}
							schema={schema.artist}
							error={errors.artist}
						/>
					</div>
					<div className={styles.file_container}>
						<FileInput
							label="Choose song"
							icon={<MusicNoteIcon />}
							type="audio"
							name="song"
							handleInputState={handleInputState}
							value={data.song}
						/>
					</div>
					<div className={styles.file_container}>
						<FileInput
							label="Choose image"
							icon={<ImageIcon />}
							type="image"
							name="img"
							value={data.img}
							handleInputState={handleInputState}
						/>
					</div>
					<Button
						type="submit"
						label={id === "new" ? "Submit" : "Update"}
						isFetching={id === "new" ? createSongProgress : updateSongProgress}
						style={{ marginLeft: "auto" }}
					/>
				</form>
			</Paper>
		</div>
	);
};

export default SongForm;
