import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = document.getElementById("root");
root &&
  createRoot(root).render(
    <StrictMode>
      <ToastContainer/>
      <App />
    </StrictMode>
  );
