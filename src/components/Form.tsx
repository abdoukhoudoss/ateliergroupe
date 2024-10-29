import { useState } from "react";
import { uid } from "uid";
import "../styles/Tab.css";
import type { WelcomeProps } from "../types";
import { toast } from "react-toastify";

export default function Form({ review, setReview }: WelcomeProps) {
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [category, setCategory] = useState<string>();

  return (
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
          theme: "colored",
        });
      }}
    >
      <select
      required
        name=""
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
        type="text"
        name="TITRE"
        placeholder="TITRE"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <input
        required
        id="description-input"
        type="text"
        name="Description"
        placeholder="Description"
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <input type="submit" value="Envoyer" />
    </form>
  );
}
