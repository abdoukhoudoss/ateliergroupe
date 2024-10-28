import "../styles/Data.css";

function DevCourse() {
  const titre: string = "Formation Développeur Web Full Stack";
  const image: string = "/src/assets/devcourse.png";
  const lien: string =
    "https://www.wildcodeschool.com/fr-fr/formations-developpement-web/formation-developpeur-web-a-distance";

  return (
    
      <section className="tog">
        <h1 className="titre" >Formation Développeur Web Full Stack</h1>
        <img className="image" src={image} alt={titre} />
        <p className="coucou">
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
       
      
          <a className="lesa" href={lien}>Lien vers la formation</a>
        
      </section>
    
  );
}

export default DevCourse;
