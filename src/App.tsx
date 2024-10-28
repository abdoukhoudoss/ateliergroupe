import "./styles/App.css";
import Cda from "./components/Cda";
import Data from "./components/Data";
import DevCourse from "./components/DevCourse";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

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
