import "/src/styles/Welcome.css";

function Welcome() {
	return (
		<>
			<section>
				<h1>Welcome à la Wild Code School !</h1>
				<p>
					Pour changer de carrière ou monter en compétences, la Wild Code School
					propose des formations certifiantes à distance ou sur campus.
					Développement Web, Data & I.A, Infrastructure & Cybersécurité et
					Product Design.
				</p>
				<h3>Vous aurez les codes !</h3>
				<img
					src="/src/assets/développeur.avif"
					alt="img-developpeur"
					className="welcome-image"
				/>
			</section>
		</>
	);
}

export default Welcome;
