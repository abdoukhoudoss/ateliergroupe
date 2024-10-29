import type { ReviewProps } from "../types";
import "../styles/Tab.css";

export default function Reviews({ title, description }: ReviewProps) {
	return (
		<div className="review-container">
			<p className="form-title">{title}</p>
			<p>{description}</p>
		</div>
	);
}
