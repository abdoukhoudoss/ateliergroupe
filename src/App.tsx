import "./styles/App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Nav />
			<div className="app-container">
				<div className="app-button-container">
					<button className="app-button" type="button">
						DEV
					</button>
					<button className="app-button" type="button">
						DATA
					</button>
					<button className="app-button" type="button">
						CDA
					</button>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default App;
