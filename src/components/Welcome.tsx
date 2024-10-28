function Welcome() {
  const titre = "Welcome à la Wild Code School !";
  const introduction =
    "Pour changer de carrière ou monter en compétences, la Wild Code School propose des formations certifiantes à distance ou sur campus. Développement Web, Data & I.A, Infrastructure & Cybersécurité et Product Design.";
  const slogan = "Vous aurez les codes !";

  return (
    <>
      <section>
        <h1>{titre}</h1>
        <p>{introduction}</p>
        <p>{slogan}</p>
      </section>
    </>
  );
}

export default Welcome;
