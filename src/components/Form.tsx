import "../styles/Form.css";
import { useState } from "react";
import { uid } from "uid";
import type { WelcomeProps } from "../types";
import { toast } from "react-toastify";

export default function Form({ review, setReview }: WelcomeProps) {
	const [title, setTitle] = useState<string>();
	const [description, setDescription] = useState<string>();
	const [category, setCategory] = useState<string>();

	return (
		<div>
			<h2 className="title-form">Laisser un Avis :</h2>
			<form
				action="reaction"
				className="form"
				onSubmit={(event) => {
					event.preventDefault();
					setTitle("");
					setDescription("");
					setCategory("--Quelle formation ?--");
					setReview([
						...review,
						{
							title: title,
							description: description,
							category: category,
							id: uid(),
						},
					]);
					toast.success("Votre avis a été publié!", {
						position: "top-right",
						autoClose: 2000,
						closeOnClick: true,
						pauseOnHover: false,
						hideProgressBar: true,
						theme: "light",
					});
				}}
			>
				<select
					required
					className="select-form app-button"
					id="select-input"
					value={category}
					onChange={(event) => {
						setCategory(event.target.value);
					}}
				>
					<option value="">--Quelle formation ?--</option>
					<option value="DEV">DEV</option>
					<option value="DATA">DATA</option>
					<option value="CDA">CDA</option>
				</select>

				<input
					required
					id="title-input"
					className="input-form"
					type="text"
					name="TITRE"
					placeholder="TITRE"
					value={title}
					onChange={(event) => {
						setTitle(event.target.value);
					}}
				/>
				<textarea
					required
					id="description-input"
					className="input-form description-form"
					name="Description"
					placeholder="Description"
					value={description}
					onChange={(event) => {
						setDescription(event.target.value);
					}}
				/>
				<input
					type="submit"
					value="Envoyer"
					className="app-button form-button"
				/>
			</form>
		</div>
	);
}
