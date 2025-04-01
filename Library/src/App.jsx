import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "../Component/NavbarComponent.jsx";
import FooterComponent from "../Component/FooterComponent.jsx";
import AlertComponent from "../Component/AlertComponent.jsx";
import AllTheBooks from "../Component/AllTheBooks.jsx";

function App() {
  return (
    <div>
      <NavbarComponent />
      <AlertComponent />
      <AllTheBooks />
      <FooterComponent />
    </div>
  );
}

export default App;
