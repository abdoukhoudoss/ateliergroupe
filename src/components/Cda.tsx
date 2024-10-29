
import "../styles/Tab.css";
import type { PropsOfReview, ReviewProps, WelcomeProps } from "../types";
import Reviews from "./Reviews";

export default function Cda({review} :PropsOfReview) {
	const filteredArray = review.filter(
    (element: ReviewProps) => element.category === "CDA"
  );

	return (
    <>
      <div className="course">
        <h1 className="titre">Concepteur développeur d'applications</h1>
        <img
          className="image"
          src="https://2902314.fs1.hubspotusercontent-na1.net/hub/2902314/hubfs/Formation%20concepteur%20d%C3%A9veloppeur%20dapplications%20%C3%A0%20distance.jpg?width=800&name=Formation%20concepteur%20d%C3%A9veloppeur%20dapplications%20%C3%A0%20distance.jpg"
          alt="Concepteur développeur d'applications"
        />

        <p className="course-description">
          Après une mise à niveau front-end et back-end, formez-vous aux
          fondamentaux du GraphQL, à la conteneurisation avec Docker, à
          l'intégration continue ainsi qu'à la démarche Devops. Concevez des
          applications interactives en utilisant les langages essentiels tels
          que HTML, CSS et JavaScript, tout en vous assurant de la sécurité
          informatique de votre projet. Coaché par nos formateurs experts et
          notre pédagogie par la pratique, vous êtes rapidement confrontés à des
          problématiques concrètes et bénéficiez aussi de notre plateforme de
          cours en ligne. Au cours de cette formation, vous monterez rapidement
          en compétences sur les langages informatiques et les frameworks les
          plus demandés par les recruteurs.
        </p>

        <a
          className="course-link"
          href="https://www.wildcodeschool.com/fr-fr/formation-concepteur-developpeur-applications"
        >
          Lien vers la formation
        </a>
      </div>
      <section className="tab">
        <h1>Les Avis</h1>
        {filteredArray.map((element: ReviewProps) => (
          <Reviews
            title={element.title}
            description={element.description}
            key={element.id}
          />
        ))}
      </section>
    </>
  );
}
