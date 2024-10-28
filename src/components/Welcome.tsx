import "../styles/Welcome.css";
import dev from "../assets/développeur.avif"

function Welcome() {
  const titre = "Welcome à la Wild Code School !";
  const introduction =
    "Pour changer de carrière ou monter en compétences, la Wild Code School propose des formations certifiantes à distance ou sur campus. Développement Web, Data & I.A, Infrastructure & Cybersécurité et Product Design.";
  const slogan = "Vous aurez les codes !";

  return (
    <>
      <section className="tog">
        <h1 className="titre">{titre}</h1>
        <p className="coucou">{introduction}</p>
        <h3>{slogan}</h3>
        <img src={dev} alt ={titre} className="images"/>
      </section>
    </>
  );
}

export default Welcome;
