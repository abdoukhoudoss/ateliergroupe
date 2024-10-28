import "../styles/Data.css";

export default function Form() {
  return (
    <form action="reaction" className="form">
      <select name="" id="">
        <option value="">--Quelle formation ?--</option>
        <option value="DEV">DEV</option>
        <option value="DATA">DATA</option>
        <option value="CDA">CDA</option>
      </select>

      <input type="text" name="TITRE" placeholder="TITRE" />
      <input type="text" name="Description" placeholder="Description" />
      <input type="submit" value="Envoyer" />
    </form>
  );
}
