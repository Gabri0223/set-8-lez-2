import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "../Component/NavbarComponent.jsx";
import FooterComponent from "../Component/FooterComponent.jsx";
import AlertComponent from "../Component/AlertComponent.jsx";
import AllTheBooks from "../Component/AllTheBooks.jsx";
import SingleBook from "../Component/SingleBook.jsx";

function App() {
  return (
    <div>
      <NavbarComponent />
      <AlertComponent />
      <SingleBook
        book={title:"The Last Wish: Introducing the Witcher",
        img:"https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg",
        price:"9.5"}
      />
      {/*<AllTheBooks />*/}
      <FooterComponent />
    </div>
  );
}

export default App;
