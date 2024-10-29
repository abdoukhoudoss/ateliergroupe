import "./styles/App.css";
import { useState } from "react";
import Cda from "./components/Cda";
import Data from "./components/Data";
import Dev from "./components/Dev";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Welcome from "./components/Welcome";
import type { ReviewProps } from "./types";

function App() {
	const [page, setPage] = useState<string>("welcome");
	const [review, setReview] = useState<ReviewProps[]>([]);

	const handleClickDev = () => {
		setPage("dev");
	};
	const handleClickCda = () => {
		setPage("cda");
	};
	const handleClickData = () => {
		setPage("data");
	};
	const handleClickWelcome = () => {
		setPage("welcome");
	};

	return (
		<>
			<Nav />
			<div className="app-container">
				<div className="app-button-container">
					<button
						onClick={handleClickWelcome}
						className="app-button"
						type="button"
					>
						ACCUEIL
					</button>
					<button onClick={handleClickDev} className="app-button" type="button">
						DEV
					</button>
					<button
						onClick={handleClickData}
						className="app-button"
						type="button"
					>
						DATA
					</button>
					<button onClick={handleClickCda} className="app-button" type="button">
						CDA
					</button>
				</div>
				{page === "dev" ? (
					<Dev review={review} />
				) : page === "data" ? (
					<Data review={review} />
				) : page === "cda" ? (
					<Cda review={review} />
				) : (
					<Welcome review={review} setReview={setReview} />
				)}
			</div>
			<Footer />
		</>
	);
}

export default App;
