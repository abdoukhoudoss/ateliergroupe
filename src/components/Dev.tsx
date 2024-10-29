import "../styles/Tab.css";
import type { PropsOfReview, ReviewProps, WelcomeProps } from "../types";
import Reviews from "./Reviews";

function Dev({ review }: PropsOfReview) {
  const filteredArray = review.filter(
    (element: ReviewProps) => element.category === "DEV"
  );

  return (
    <>
      <section className="course">
        <h1 className="titre">Formation Développeur Web Full Stack</h1>
        <img
          className="image"
          src="/src/assets/devcourse.png"
          alt="Formation Développeur Web Full Stack"
        />
        <p className="course-description">
          Cette <strong>formation à distance </strong> est faite pour les
          débutants en développement web, les amateurs de code, de logique et de
          veille technologique, qui souhaitent construire leur avenir
          professionnel dans la Tech. En rejoignant notre
          <strong> formation professionnelle</strong>, vous développerez les
          capacités indispensables pour concevoir des
          <strong> applications web performantes</strong>, répondant aux
          exigences clients. Vous apprendrez à établir un product backlog, à
          construire des wireframes, à utiliser des API, à intégrer des
          interfaces utilisateur attrayantes avec HTML5 et CSS3, et bien plus
          encore !
        </p>
        <p>Devenez le développeur web que vous rêvez d'être !</p>

        <a
          className="course-link"
          href="https://www.wildcodeschool.com/fr-fr/formations-developpement-web/formation-developpeur-web-a-distance"
        >
          Lien vers la formation
        </a>
      </section>
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

export default Dev;
