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
	const [name, setName] = useState("");
	const [artist, setArtist] = useState("");
	const [img, setImg] = useState(null);
	const [song, setSong] = useState(null);
	const [errors, setErrors] = useState({ name: "", artist: "" });
	const { isFetching, songs } = useSelector((state) => state.songs);
	const { id } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		if (id !== "new") {
			const data = songs.filter((song) => song._id === id);
			setName(data[0].name);
			setArtist(data[0].artist);
			setSong(data[0].song);
			setImg(data[0].img);
		}
	}, [id, songs]);

	const schema = {
		name: Joi.string().required().label("Name"),
		artist: Joi.string().required().label("Artist"),
		img: Joi.string().required().label("Image"),
		song: Joi.string().required().label("Song"),
	};

	const handleErrorState = (name, value) => {
		setErrors({ ...errors, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = { name, artist, img, song };
		const { error } = Joi.object(schema).validate(data);
		if (!error) {
			if (id === "new") {
				createSong(data, dispatch);
				history.push("/songs");
			} else {
				updateSong(id, data, dispatch);
				history.push("/songs");
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
							handleInputState={(name, value) => setName(value)}
							handleErrorState={handleErrorState}
							schema={schema.name}
							error={errors.name}
							value={name}
							required={true}
						/>
					</div>
					<div className={styles.input_container}>
						<TextField
							name="artist"
							label="Artist name"
							handleInputState={(name, value) => setArtist(value)}
							required={true}
							value={artist}
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
							handleInputState={(name, value) => setSong(value)}
							value={song}
						/>
					</div>
					<div className={styles.file_container}>
						<FileInput
							label="Choose image"
							icon={<ImageIcon />}
							type="image"
							name="img"
							value={img}
							handleInputState={(name, value) => setImg(value)}
						/>
					</div>
					<Button
						type="submit"
						label={id === "new" ? "Submit" : "Update"}
						style={{ marginLeft: "auto" }}
						isFetching={isFetching}
					/>
				</form>
			</Paper>
		</div>
	);
};

export default SongForm;
