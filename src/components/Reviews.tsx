import type { ReviewProps } from "../types";
import "../styles/Tab.css";


export default function Reviews({title, description} :ReviewProps) {
  return (
    <div>
        <p className="form-title">{title}</p>
        <p>{description}</p>
    </div>
  )
}
