import "../styles/Tab.css";
import dev from "../assets/développeur.avif";
import type { WelcomeProps } from "../types";
import Form from "./Form";

function Welcome({ review, setReview }: WelcomeProps) {
	return (
		<>
			<section className="course">
				<h1 className="titre">Welcome à la Wild Code School !</h1>
				<p className="course-description">
					Pour changer de carrière ou monter en compétences, la Wild Code School
					propose des formations certifiantes à distance ou sur campus.
					Développement Web, Data & I.A, Infrastructure & Cybersécurité et
					Product Design.
				</p>
				<h3>Vous aurez les codes !</h3>
				<img src={dev} className="images" alt="image-dev" />
			</section>
			<section className="tab">
				<Form review={review} setReview={setReview} />
			</section>
		</>
	);
}

export default Welcome;
