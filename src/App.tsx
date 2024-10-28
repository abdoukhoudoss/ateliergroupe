import "./styles/App.css";
import Cda from "./components/Cda";
import Data from "./components/Data";
import DevCourse from "./components/DevCourse";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { useState } from "react";
import Welcome from "./components/Welcome";

function App() {
	const [page, setPage] = useState ("welcome")
	const handleClickDev = () => {
		setPage("dev")
	}
	const handleClickCda = () => {
		setPage("cda")
	}
	const handleClickData = () => {
		setPage("data")
	}
	const handleClickWelcome = () => {
		setPage("welcome")
	}
  return (
    <>
      <Nav />
      <div className="app-container">
        <div className="app-button-container">
		<button onClick={handleClickWelcome} className="app-button" type="button">
            ACCUEIL
          </button>
          <button onClick={handleClickDev} className="app-button" type="button">
            DEV
          </button>
          <button onClick={handleClickData} className="app-button" type="button">
            DATA
          </button>
          <button onClick={handleClickCda} className="app-button" type="button">
            CDA
          </button>
        </div>
		{page === "dev"? <DevCourse/> : page === "data"? <Data/> : page === "cda"? <Cda/> : <Welcome/>}
      </div>
      <Footer />
    </>
  );
}

export default App;
