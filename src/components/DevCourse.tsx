import "/src/styles/DevCourse.css";

function DevCourse() {
  const titre: string = "Formation Développeur Web Full Stack";
  const image: string = "/src/assets/devcourse.png";
  const lien: string =
    "https://www.wildcodeschool.com/fr-fr/formations-developpement-web/formation-developpeur-web-a-distance";

  return (
    <>
      <section>
        <h2>{titre}</h2>
        <p>
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
        <article>
          <img src={image} alt={titre} />
          <a href={lien}>Lien vers la formation</a>
        </article>
      </section>
    </>
  );
}

export default DevCourse;
